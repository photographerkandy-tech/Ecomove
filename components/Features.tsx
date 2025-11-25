import React from 'react';
import { Leaf, Battery, ShieldCheck, Truck } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-white" />,
    title: "Eco-Friendly Gift",
    desc: "Give the gift of a greener planet. Zero emissions, 100% joy.",
    color: "bg-brand-green"
  },
  {
    icon: <Battery className="w-8 h-8 text-white" />,
    title: "Winter Range",
    desc: "High-capacity batteries tested for cold weather performance.",
    color: "bg-brand-dark"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Holiday Warranty",
    desc: "2-year extended warranty included with all Christmas purchases.",
    color: "bg-xmas-gold"
  },
  {
    icon: <Truck className="w-8 h-8 text-white" />,
    title: "Santa Express",
    desc: "Guaranteed pre-Christmas delivery for all orders by Dec 20th.",
    color: "bg-xmas-red"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="learn-more">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-50 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-green-50 rounded-full opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">Why EcoMove this Christmas?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Spread the joy of cycling with confidence. We've taken care of everything so you can focus on the celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-2xl shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className={`${feature.color} w-16 h-16 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center mb-6 shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;