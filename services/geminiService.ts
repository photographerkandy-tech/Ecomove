import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { FEATURED_PRODUCTS } from '../constants';

// We initialize the client inside the function to ensure we capture the latest key if it were dynamic, 
// though here it's env based.
const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateBikeAdvice = async (userQuery: string, chatHistory: { role: string, text: string }[]): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "I'm having trouble connecting to the workshop right now. Please check your API key.";

  // Prepare context about products
  const productContext = FEATURED_PRODUCTS.map(p => 
    `- ${p.name} (${p.category}): £${p.price} (Was £${p.originalPrice}). Key features: ${p.features.join(', ')}.`
  ).join('\n');

  const systemInstruction = `
    You are 'Holly', a cheerful and expert Christmas Gift Assistant for EcoMove, a premium electric bike retailer.
    
    Your goal is to help customers find the perfect e-bike for themselves or as a gift.
    
    Here is our current Christmas Sale inventory:
    ${productContext}
    
    Guidelines:
    1. Be festive, warm, and helpful. Use occasional Christmas emojis (🎄, 🎁, ❄️).
    2. Keep answers concise (under 100 words) as this is a chat widget.
    3. If a user asks for a recommendation, ask about their riding habits (city vs. off-road) or budget if you don't know yet.
    4. Focus on the benefits of the specific bikes listed above.
    5. Mention the savings!
    
    Current user query: ${userQuery}
  `;

  try {
    const model = 'gemini-2.5-flash';
    
    // Construct history for the API (mapping our simple history to Gemini format if needed, 
    // but for simple text generation with context, we can just append formatted history or use chat mode).
    // Here we will use a fresh generateContent call with history embedded in the prompt for simplicity and statelessness on the client side 
    // or use the Chat API if we wanted to maintain state object. 
    // Given the React functional nature, let's use the Chat API properly.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: chatHistory.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message: userQuery });
    return response.text || "I'm checking the sleigh... can you ask that again?";
    
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The elves are on a break (Error connecting to AI). Please try again later!";
  }
};