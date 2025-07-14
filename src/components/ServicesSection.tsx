import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Foot Reflexology',
      description: 'Enjoy a relaxing session where precise pressure points on the feet are stimulated to support physical and emotional healing throughout the body.'
    },
    {
      title: 'Hand Reflexology',
      description: 'Gentle and focused treatment through the hands — ideal for foot sensitivity or those who prefer handwork.'
    },
    {
      title: 'Optional Reiki Energy Healing',
      description: 'Restore energetic flow and promote calm through this non-invasive, energy-balancing technique.'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-900 text-center mb-12">
          What Robin Offers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-purple-700 font-semibold">
            All services are by appointment only. Please call or text Robin to schedule.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;