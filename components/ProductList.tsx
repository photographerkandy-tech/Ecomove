import React from 'react';
import { ShoppingBag, Heart, Star, Gift } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../constants';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/10 relative">
    
    {/* Ribbon Effect for Sale Items */}
    <div className="absolute top-0 right-0 z-20 overflow-hidden w-24 h-24 pointer-events-none">
       <div className="absolute top-0 right-0 bg-xmas-red text-white text-xs font-bold px-8 py-1 rotate-45 translate-x-8 translate-y-6 shadow-md">
         SALE
       </div>
    </div>

    <div className="relative h-64 overflow-hidden bg-gray-100">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <span className="bg-white/90 backdrop-blur-sm text-xmas-red border border-red-100 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Gift size={12} /> Gift Pick
        </span>
        <span className="bg-brand-green/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          Save £{product.originalPrice - product.price}
        </span>
      </div>

      <button className="absolute bottom-4 right-4 z-10 p-3 bg-white rounded-full shadow-lg text-gray-400 hover:text-xmas-red hover:bg-red-50 transition-all scale-0 group-hover:scale-100">
          <Heart size={20} fill={product.id === 1 ? "#DC2626" : "none"} className={product.id === 1 ? "text-xmas-red" : ""} />
      </button>
    </div>
    
    <div className="p-6 flex flex-col flex-grow relative">
      {/* Decorative Holly SVG overlay (CSS background could also work, using absolute for simplicity) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-green-500 to-red-500 opacity-20"></div>

      <div className="flex items-center gap-1 text-xmas-gold mb-2">
        <Star size={16} fill="currentColor" />
        <span className="text-sm font-medium text-gray-600 ml-1">{product.rating} ({product.reviews} reviews)</span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif group-hover:text-xmas-red transition-colors">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.category} E-Bike • {product.features[0]}</p>
      
      <div className="mt-auto flex items-end justify-between border-t border-gray-50 pt-4">
        <div>
          <span className="text-sm text-gray-400 line-through">£{product.originalPrice}</span>
          <div className="text-2xl font-bold text-xmas-red">£{product.price}</div>
        </div>
        <button className="bg-brand-dark hover:bg-xmas-red text-white p-3 rounded-xl transition-colors shadow-lg shadow-gray-200">
          <ShoppingBag size={20} />
        </button>
      </div>
    </div>
  </div>
);

const ProductList: React.FC = () => {
  return (
    <section className="py-24 bg-xmas-cream" id="products">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-script text-4xl text-xmas-red mb-2">Santa's Favorites</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4">Gifts Under the Tree</h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            Make this Christmas unforgettable. Order now to ensure your new e-bike arrives before the sleigh does.
          </p>
          <div className="mt-4 w-24 h-1 bg-xmas-red rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
           <a href="#" className="inline-flex items-center gap-2 border-2 border-brand-dark px-8 py-3 rounded-full font-bold hover:bg-brand-dark hover:text-white transition-all duration-300">
              View All Christmas Deals <ShoppingBag size={18} />
           </a>
        </div>
      </div>
    </section>
  );
};

export default ProductList;