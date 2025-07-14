import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-purple-100 to-pink-100 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/68473fd6c864303e0d0d208e_1752378581790_d2c01c8f.png" 
          alt="Balanced Body Reflexology Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/68473fd6c864303e0d0d208e_1752378581790_d2c01c8f.png" 
            alt="Balanced Body Reflexology Logo" 
            className="w-64 h-auto mx-auto mb-6"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
          Balanced Body
        </h1>
        <h2 className="text-2xl md:text-3xl text-purple-700 mb-8" style={{fontFamily: 'Playfair Display, serif'}}>
          Reflexology with Robin
        </h2>
        <p className="text-xl text-purple-600 mb-8 max-w-2xl mx-auto font-semibold">
          Relax • Restore • Rebalance
        </p>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto" style={{fontFamily: 'Lato, sans-serif'}}>
          Holistic hand and foot reflexology to support natural healing, reduce stress, and promote overall wellness.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Session
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
            onClick={() => navigate('/about')}
          >
            About Me
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
            onClick={() => navigate('/pricing')}
          >
            Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;