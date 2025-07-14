import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-900 text-center mb-12">
          Contact Robin
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800 text-center">
                Schedule Your Session
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-purple-700 mb-2">Phone</h3>
                  <a 
                    href="tel:2537780709" 
                    className="text-xl text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    (253) 778‑0709
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-purple-700 mb-2">Email</h3>
                  <a 
                    href="mailto:Robin.A.Sherman@Outlook.com" 
                    className="text-lg text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    Robin.A.Sherman@Outlook.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-purple-700 mb-2">Location</h3>
                  <p className="text-gray-700">
                    Puyallup, Tacoma, Sumner & South Puget Sound, WA
                  </p>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <p className="text-purple-700 mb-4">
                  Text or call to schedule a session. Robin will work with you to find the perfect time.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => window.open('tel:2537780709')}
                  >
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-purple-600 text-purple-600 hover:bg-purple-50"
                    onClick={() => window.open('mailto:Robin.A.Sherman@Outlook.com')}
                  >
                    Send Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;