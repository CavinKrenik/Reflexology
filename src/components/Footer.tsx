import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68473fd6c864303e0d0d208e_1752378581790_d2c01c8f.png" 
              alt="Balanced Body Reflexology Logo" 
              className="w-32 h-auto mx-auto mb-4 opacity-80"
            />
          </div>
          
          <h3 className="text-xl font-semibold mb-4">
            Balanced Body Reflexology with Robin
          </h3>
          
          <div className="mb-6">
            <p className="mb-2">
              Phone: <a href="tel:2537780709" className="hover:text-purple-300 transition-colors">(253) 778‑0709</a>
            </p>
            <p className="mb-2">
              Email: <a href="mailto:Robin.A.Sherman@Outlook.com" className="hover:text-purple-300 transition-colors">Robin.A.Sherman@Outlook.com</a>
            </p>
            <p>
              Serving Puyallup, Tacoma, Sumner & South Puget Sound, WA
            </p>
          </div>
          
          <div className="border-t border-purple-700 pt-6">
            <p className="text-sm text-purple-300">
              © 2025 Balanced Body Reflexology • All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;