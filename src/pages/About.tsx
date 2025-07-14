import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-50">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Button 
            onClick={() => navigate('/')}
            variant="outline"
            className="flex items-center gap-2 bg-white hover:bg-purple-50 border-purple-200"
          >
            <Home className="h-4 w-4" />
            Home
          </Button>
        </div>
        
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h1 className="text-4xl font-bold text-purple-800 mb-8 text-center">About Me</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                I am a certified reflexologist specializing in hand and foot reflexology designed to improve pain and promote relaxation.
              </p>
              
              <p className="text-gray-700 mb-4">
                I have studied and completed courses in a number of areas very dear to me, including:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Ayurvedic Reflexology</li>
                <li>Reflexology for Pain Reduction and Stress Relief</li>
                <li>Prenatal/ Maternity Reflexology</li>
                <li>Achieving Natural Foot Health</li>
              </ul>
              
              <p className="text-gray-700 mb-6">
                I strive to incorporate my training into each and every session in order to bring about long-term relaxation and benefit to my clients.
              </p>
              
              <p className="text-gray-700 mb-6">
                As a Puyallup native, I have been living and working in this wonderful community for the past 30 years. It is incredible to see how this area has grown, and I am excited to give back to the people around me who have helped me grow.
              </p>
              
              <p className="text-gray-700 mb-4">
                I am also a proud member of the Washington State Reflexology Association, and hold certifications in:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>The Kruchik Method for the Treatment of Pain</li>
                <li>Kruchik Method for the Treatment of Pain for Auto Immune</li>
                <li>Gentle Touch (TM) Reflexology for Adults, Babies and Children</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;