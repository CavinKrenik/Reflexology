import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-900 text-center mb-12">
            Learn More About Reflexology
          </h2>
          
          <Card className="mb-8 border-purple-200">
            <CardContent className="pt-6">
              <div className="aspect-video mb-6">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/8Z_EUEkqB2Q" 
                  title="Out and About with Jim, Robin Sherman Balanced Body Reflexology" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              
              <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                What is the difference between Reflexology and a foot massage?
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  The concept of a foot massage is to apply pressure to relieve soft tissue on and around the foot, massaging tightly constricted muscles to provide relief of soreness and discomfort in the feet. Reflexology, on the other hand, focuses on stimulating pathways throughout the body, which can alter the energy flow of various body systems.
                </p>
                
                <p className="leading-relaxed">
                  A foot reflexology session does not only interact with the soft tissues of the feet, but can also bring relief to other parts of the body through the application of reflexology techniques.
                </p>
                
                <p className="leading-relaxed font-semibold">
                  Reflexology is an in-depth discipline that requires 300 hours of training and 90 hours of hands-on clinical sessions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;