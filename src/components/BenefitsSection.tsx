import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-900 text-center mb-12">
            Benefits & What to Expect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-purple-200">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                  What are the benefits of Reflexology?
                </h3>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Reflexology does not just treat the foot and ankle, it is instead a full-body experience. Because reflex points connect different body systems to the feet, it can be used to reduce stress, promote healing and circulation, improve pain, and improve digestive health.
                  </p>
                  
                  <p className="leading-relaxed">
                    As a reflexologist, I focus on overall foot health, helping to reduce foot and ankle pain through education and self-care.
                  </p>
                </div>
                
                <img 
                  src="https://d64gsuwffb70l.cloudfront.net/68473fd6c864303e0d0d208e_1752378477158_e7fd3dd2.png" 
                  alt="Reflexology foot treatment session" 
                  className="w-full rounded-lg shadow-lg mt-6"
                />
              </CardContent>
            </Card>
            
            <Card className="border-purple-200">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                  What should I expect from my session?
                </h3>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Reflexology sessions begin with a foot soak and a conversation about your general health and concerns. I begin with a gentle relaxation technique and then begin working the reflex points on the foot.
                  </p>
                  
                  <p className="leading-relaxed">
                    I focus on any areas of concern and focus on areas where the client or I feel they need more attention. I work on both feet to promote overall well-being and balance. If needed or requested, I also provide reflexology on the hands.
                  </p>
                </div>
                
                <img 
                  src="https://d64gsuwffb70l.cloudfront.net/68473fd6c864303e0d0d208e_1752378597274_1815dd3d.png" 
                  alt="Hand reflexology treatment" 
                  className="w-full rounded-lg shadow-lg mt-6"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;