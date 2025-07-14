import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68473fd6c864303e0d0d208e_1752378581790_d2c01c8f.png" 
              alt="Balanced Body Reflexology Logo" 
              className="w-12 h-12"
            />
            <span className="text-xl font-bold text-purple-900" style={{fontFamily: 'Playfair Display, serif'}}>
              Balanced Body Reflexology
            </span>
          </div>
          <div className="flex space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-purple-700 hover:text-purple-900"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/about')}
              className="text-purple-700 hover:text-purple-900"
            >
              About Me
            </Button>
            <Button 
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;