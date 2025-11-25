import React from 'react';
import { ArrowRight, Star, Gift } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Snowflakes DOM elements for the CSS animation */}
      <div className="snowflake" aria-hidden="true">❅</div>
      <div className="snowflake" aria-hidden="true">❆</div>
      <div className="snowflake" aria-hidden="true">❅</div>
      <div className="snowflake" aria-hidden="true">❆</div>
      <div className="snowflake" aria-hidden="true">❅</div>
      <div className="snowflake" aria-hidden="true">❆</div>
      <div className="snowflake" aria-hidden="true">❅</div>
      <div className="snowflake" aria-hidden="true">❆</div>
      <div className="snowflake" aria-hidden="true">❅</div>
      <div className="snowflake" aria-hidden="true">❆</div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Christmas Bicycle Shop Window"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        {/* Festive Vignette */}
        <div className="absolute inset-0 ring-inset ring-[20px] ring-black/10 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 mb-4 animate-bounce bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">
            <Gift className="text-xmas-red" size={16} />
            <span className="text-white text-sm font-bold tracking-wider uppercase">Holiday Season Sale</span>
          </div>

          <div className="relative mb-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-serif text-white tracking-tighter leading-none drop-shadow-2xl">
              CHRISTMAS
            </h1>
            <p className="font-script text-5xl md:text-7xl text-xmas-red -mt-4 md:-mt-8 transform -rotate-3 drop-shadow-lg relative z-10">
              Gift Shop
            </p>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl drop-shadow-md">
            Wrap up the ultimate gift of freedom this year. <br/>
            <span className="font-bold text-xmas-gold">Save up to £400</span> on electric bikes until Christmas Eve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#products" 
              className="px-8 py-4 bg-xmas-red hover:bg-red-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-red-900/50 border-2 border-transparent"
            >
              Shop Gifts <ArrowRight size={20} />
            </a>
            <a 
              href="#products" 
              className="px-8 py-4 bg-white hover:bg-gray-100 text-brand-dark rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Gifts Under £50
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-white font-medium bg-black/30 p-4 rounded-2xl backdrop-blur-sm inline-flex">
             <div className="flex items-center gap-2">
                <span className="text-xmas-green">🎄</span> Guaranteed Christmas Delivery
             </div>
             <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></div>
             <div className="flex items-center gap-2">
                <span className="text-xmas-gold">★</span> Extended Holiday Returns
             </div>
             <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></div>
             <div className="flex items-center gap-2">
                <span className="text-white">❄️</span> 0% Finance Available
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;