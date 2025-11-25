import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductList from './components/ProductList';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-brand-green selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductList />
        <Testimonials />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;