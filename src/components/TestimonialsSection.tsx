import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Jessie',
      title: "Jessie's Experience",
      content: "Robin does a wonderful job making me feel comfortable and at home as she works on my feet. I've had foot and ankle pain for years because of my fallen arches, but I always feel better after a session with her. Robin is the best!"
    },
    {
      name: 'Michele',
      title: "Michele's Testimonial",
      content: "I wish she lived with me! Robin's treatment room is serene and spa-like. She incorporates aromatherapy, a soothing foot soak before each session, a heated neck wrap, and a very comfortable treatment table with soft linens. Robin is incredibly intuitive in her reflexology practice. Her touch is gentle, her pressure is perfect, and she always checks in to make sure I'm comfortable. She also shares helpful advice on foot health — from shoes and posture to exercises. She's not trying to sell anything — she truly cares. I always look forward to my sessions and highly recommend her!"
    },
    {
      name: 'Amanda',
      title: "Amanda's Feedback",
      content: "I've been seeing Robin since 2021, and I absolutely recommend her. Her space feels like a spa, and she's incredibly intentional in her work. Reflexology has been a magical part of my healing journey. I've lived with foot, knee, and back pain most of my life, and reflexology has made a huge difference. I always leave feeling more balanced, relaxed, and restored."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-900 text-center mb-12">
          💬 Testimonials
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-purple-800">
                  {testimonial.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;