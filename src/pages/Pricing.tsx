import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Clock, DollarSign, Phone, Mail, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const weekdayTimes = [
    "7:30 am", "8:00 am", "8:30 am", "9:00 am", "9:30 am", "10:00 am",
    "10:30 am", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "1:00 pm",
    "1:30 pm", "2:00 pm", "2:30 pm", "3:00 pm"
  ];

  const saturdayTimes = ["9:00 am", "9:30 am", "10:00 am"];

  const pricing = [
    { duration: "1/2 Hour Session", price: "$45" },
    { duration: "1 Hour Session", price: "$80" },
    { duration: "1.5 Hour Session", price: "$95" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-6 flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          Home
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Pricing & Schedule</h1>
          <p className="text-gray-600">Book your reflexology session today</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Session Pricing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pricing.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">{item.duration}</span>
                    <span className="text-xl font-bold text-blue-600">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Available Times
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Monday - Friday</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {weekdayTimes.map((time, index) => (
                      <div key={index} className="text-sm p-2 bg-gray-100 rounded text-center">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Saturday</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {saturdayTimes.map((time, index) => (
                      <div key={index} className="text-sm p-2 bg-gray-100 rounded text-center">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Contact Robin</CardTitle>
            <p className="text-center text-gray-600">Schedule Your Session</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">(253) 778‑0709</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">Robin.A.Sherman@Outlook.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-600">Puyallup, Tacoma, Sumner & South Puget Sound, WA</p>
              </div>
            </div>
            <div className="text-center mb-6">
              <p className="text-gray-600 mb-4">Text or call to schedule a session. Robin will work with you to find the perfect time.</p>
              <div className="flex justify-center gap-4">
                <Button asChild>
                  <a href="tel:(253)778-0709">Call Now</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:Robin.A.Sherman@Outlook.com">Send Email</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;