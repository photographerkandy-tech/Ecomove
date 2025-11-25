export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: 'City' | 'Mountain' | 'Folding' | 'Cargo';
  features: string[];
  rating: number;
  reviews: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  role: string;
}