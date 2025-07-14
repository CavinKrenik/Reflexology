import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ReflexologyInfoSection: React.FC = () => {
  const reflexologyBenefits = [
    'Reduced Pain',
    'Lower Stress', 
    'Improved Circulation',
    'Better Moods'
  ];

  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-900 text-center mb-12">
            What is Reflexology?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68473fd6c864303e0d0d208e_1752378448670_6bcb15bb.png" 
                alt="Reflexology tools and jade roller" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Reflexology, also known as "Zone Therapy", follows patterns along the feet, hands, and ears that correspond with organs and tissues throughout the body. These zones can be stimulated using a combination of light touch and firmer pressure to release tension and improve circulation throughout the body.
              </p>
            </div>
          </div>

          <Card className="mb-8 border-purple-200">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">The benefits of Reflexology include:</h3>
                  <ul className="space-y-3 mb-6">
                    {reflexologyBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Approaches can vary between people and their symptoms, so it is best to determine at the start of our sessions what it is you would like to accomplish. If foot pain is your primary issue, I can also offer helpful tips and tricks for you to practice outside of our sessions, or make recommendations for proper footwear based on your activity level.
                  </p>
                </div>
                
                <div>
                  <img 
                    src="https://d64gsuwffb70l.cloudfront.net/68473fd6c864303e0d0d208e_1752378459643_56e38346.png" 
                    alt="Foot reflexology chart showing pressure points" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReflexologyInfoSection;