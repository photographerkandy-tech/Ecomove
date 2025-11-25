import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100" id="footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
               <div className="p-2 rounded-full bg-brand-green text-white">
                 <Zap size={20} fill="currentColor" />
               </div>
               <span className="text-2xl font-bold text-brand-dark">EcoMove</span>
            </a>
            <p className="text-gray-500 leading-relaxed">
              Empowering your journey with sustainable, high-performance electric bikes. 
              Designed in the UK, ridden everywhere.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Shop</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-brand-green transition-colors">City e-Bikes</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Mountain e-Bikes</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Folding e-Bikes</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Support</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-brand-green transition-colors">Book a Test Ride</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Cycle to Work Scheme</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Warranty & Returns</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Service Centres</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
             <h4 className="font-bold text-gray-900 mb-6">Stay in the Loop</h4>
             <p className="text-gray-500 mb-4 text-sm">Sign up for exclusive Christmas deals and eco-tips.</p>
             <form className="flex flex-col gap-3">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-green transition-colors"
               />
               <button className="w-full py-3 bg-brand-dark text-white font-bold rounded-xl hover:bg-brand-green transition-colors">
                 Subscribe
               </button>
             </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2024 EcoMove Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;