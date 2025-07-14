import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  const benefits = [
    'Reduced pain',
    'Improved sleep',
    'Lowered stress',
    'More energy'
  ];

  const treatmentAreas = [
    'Pain intensity and duration of labor',
    'High blood pressure',
    'Diabetic neuropathy',
    'Anxiety and sleep disturbances'
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-900 text-center mb-12">
            Why Choose Reflexology?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">
                  Reflexology Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">
                  Studies Show Reflexology Helps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {treatmentAreas.map((area, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {area}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;