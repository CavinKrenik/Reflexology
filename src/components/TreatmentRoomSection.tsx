import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TreatmentRoomSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-900 text-center mb-12">
            Our Treatment Environment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68473fd6c864303e0d0d208e_1752378590008_cc0e5eed.png" 
                alt="Treatment room with reflexology charts and comfortable setting" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <Card className="border-purple-200">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                  Comfortable & Professional Setting
                </h3>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Our treatment room is designed to provide a calm, relaxing environment where you can fully benefit from your reflexology session. The space features detailed reflexology charts that help explain the connection between pressure points and your body's systems.
                  </p>
                  
                  <p className="leading-relaxed">
                    Every session takes place in a comfortable, professional setting that promotes healing and relaxation. The room is equipped with everything needed to provide you with the most effective reflexology treatment possible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentRoomSection;