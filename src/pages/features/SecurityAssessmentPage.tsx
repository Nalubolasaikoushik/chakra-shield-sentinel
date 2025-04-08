
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SecurityAssessment from '@/components/tools/SecurityAssessment';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecurityAssessmentPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center text-india-navyBlue hover:text-india-accent2 mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-india-accent2 mb-2">Security Assessment</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive analysis and reporting of security vulnerabilities across social media platforms
          </p>
        </div>
        
        <Card className="mb-8 border-india-navyBlue/10 shadow-md">
          <CardHeader className="bg-india-navyBlue/5 border-b border-india-navyBlue/10">
            <CardTitle className="text-india-accent2">Security Assessment Tool</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <SecurityAssessment />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Automated security audits of social media profiles</li>
                <li>Vulnerability detection and risk scoring</li>
                <li>Behavioral pattern recognition</li>
                <li>Content authenticity verification</li>
                <li>Account history analysis</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Neural network-based security modeling</li>
                <li>Real-time vulnerability detection</li>
                <li>99.8% accuracy in identifying security weaknesses</li>
                <li>Integration with national security databases</li>
                <li>Compliance with Indian cyber security frameworks</li>
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
                <h3 className="font-semibold text-india-navyBlue">Government Security Audits</h3>
                <p className="text-gray-700">
                  Security assessment tools enable government agencies to conduct comprehensive audits of digital infrastructure, 
                  identifying potential vulnerabilities before they can be exploited.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Critical Infrastructure Protection</h3>
                <p className="text-gray-700">
                  Assessment tools help protect critical infrastructure by identifying security gaps in connected systems
                  and providing actionable mitigation strategies.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">National Security Operations</h3>
                <p className="text-gray-700">
                  Security agencies use assessment tools to evaluate the security posture of digital assets related to
                  national security, ensuring they remain protected from emerging threats.
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

export default SecurityAssessmentPage;
