import { Product, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Electric Bikes', href: '#products' },
  { name: 'Accessories', href: '#' },
  { name: 'Christmas Sale', href: '#sale', highlight: true },
  { name: 'Contact', href: '#footer' },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "EcoMove City Cruiser X",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80&w=800",
    category: "City",
    features: ["40-mile range", "Lightweight Frame", "Integrated Lights"],
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "TrailBlazer Pro 500",
    price: 2199,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1623126903331-f52988cb6661?auto=format&fit=crop&q=80&w=800",
    category: "Mountain",
    features: ["All-terrain Tires", "Hydraulic Suspension", "High Torque Motor"],
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "FoldGo Compact",
    price: 999,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1620802051677-2e11a3374249?auto=format&fit=crop&q=80&w=800",
    category: "Folding",
    features: ["Folds in 10s", "Perfect for Commuting", "Removable Battery"],
    rating: 4.7,
    reviews: 210
  },
  {
    id: 4,
    name: "Urban Cargo Hauler",
    price: 2499,
    originalPrice: 2899,
    image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?auto=format&fit=crop&q=80&w=800",
    category: "Cargo",
    features: ["150kg Load Capacity", "Dual Battery Option", "Family Friendly"],
    rating: 5.0,
    reviews: 45
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "The best Christmas gift I ever bought myself. The City Cruiser makes my commute a joy, even in winter!",
    rating: 5,
    role: "Verified Buyer"
  },
  {
    id: 2,
    name: "Mike Ross",
    text: "EcoMove's service was impeccable. Delivery was fast, and the bike arrived fully assembled ready for the tree.",
    rating: 5,
    role: "Cycling Enthusiast"
  },
  {
    id: 3,
    name: "Emily Clark",
    text: "I was skeptical about e-bikes, but the TrailBlazer has changed my weekends forever. Highly recommend!",
    rating: 5,
    role: "Adventure Seeker"
  }
];
