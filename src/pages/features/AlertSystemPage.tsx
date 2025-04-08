
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlertSystem from '@/components/tools/AlertSystem';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AlertSystemPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center text-india-navyBlue hover:text-india-accent2 mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-india-accent2 mb-2">Alert System</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time notification system for immediate response to security threats and suspicious activities
          </p>
        </div>
        
        <Card className="mb-8 border-india-navyBlue/10 shadow-md">
          <CardHeader className="bg-india-navyBlue/5 border-b border-india-navyBlue/10">
            <CardTitle className="text-india-accent2">Alert Management System</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <AlertSystem />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Prioritized alert classification</li>
                <li>Multi-channel notification delivery</li>
                <li>Escalation workflows and procedures</li>
                <li>Integrated response protocols</li>
                <li>Alert correlation and deduplication</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Real-time processing architecture</li>
                <li>End-to-end encrypted communications</li>
                <li>Rule-based and ML-based alert generation</li>
                <li>Multi-factor verification for critical alerts</li>
                <li>Distributed redundant notification infrastructure</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Card className="shadow-sm border-india-navyBlue/10 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-india-accent2">Use Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-india-navyBlue">Critical Infrastructure Protection</h3>
                <p className="text-gray-700">
                  Security teams receive immediate alerts when suspicious activity is detected around social media
                  accounts related to critical infrastructure, enabling rapid response.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Emerging Threat Notification</h3>
                <p className="text-gray-700">
                  Government agencies receive alerts about new types of digital threats or attack patterns as they
                  emerge, allowing for proactive defensive measures.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Coordinated Response Management</h3>
                <p className="text-gray-700">
                  The alert system enables coordinated responses across multiple security agencies when significant
                  threats are detected, ensuring unified action.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AlertSystemPage;
