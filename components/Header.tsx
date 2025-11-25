import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Zap, Gift } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Christmas Notification Bar */}
      <div className="bg-xmas-red text-white text-center py-2 px-4 text-xs md:text-sm font-bold tracking-wide z-[60] relative">
        🎄 ORDER BY DEC 20TH FOR GUARANTEED CHRISTMAS DELIVERY 🎄
      </div>

      <nav 
        className={`fixed top-8 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3 top-0' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className={`p-2 rounded-full ${isScrolled ? 'bg-brand-green text-white' : 'bg-white text-brand-green'}`}>
                <Zap size={24} fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className={`text-2xl font-bold tracking-tight leading-none ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
                  EcoMove
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-xmas-gold ${
                    link.highlight 
                      ? 'text-xmas-red bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-50 hover:text-red-700' 
                      : isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {link.highlight && <span className="mr-1">🎁</span>}
                  {link.name}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
               <button className={`relative p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'}`}>
                  <ShoppingCart size={24} />
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-xmas-red text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">2</span>
               </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                 <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
              ) : (
                 <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col p-4 gap-4 animate-in slide-in-from-top-5 border-t border-gray-100">
             {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-lg font-medium p-3 rounded-lg flex items-center gap-2 ${link.highlight ? 'bg-red-50 text-xmas-red font-bold' : 'text-gray-800 hover:bg-gray-50'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.highlight && <Gift size={18} />}
                  {link.name}
                </a>
              ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;