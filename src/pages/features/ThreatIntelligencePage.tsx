
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThreatIntelligence from '@/components/tools/ThreatIntelligence';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThreatIntelligencePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center text-india-navyBlue hover:text-india-accent2 mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-india-accent2 mb-2">Threat Intelligence</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Advanced threat detection and intelligence gathering for proactive security response
          </p>
        </div>
        
        <Card className="mb-8 border-india-navyBlue/10 shadow-md">
          <CardHeader className="bg-india-navyBlue/5 border-b border-india-navyBlue/10">
            <CardTitle className="text-india-accent2">Threat Intelligence Module</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ThreatIntelligence />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Real-time threat monitoring and alerts</li>
                <li>Predictive threat analysis using machine learning</li>
                <li>International threat intelligence integration</li>
                <li>Actor and technique attribution</li>
                <li>Automated threat response recommendations</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>AI-powered pattern recognition</li>
                <li>Natural language processing for narrative analysis</li>
                <li>Advanced data correlation engines</li>
                <li>Integrated MITRE ATT&CK framework mapping</li>
                <li>Encrypted secure sharing protocols</li>
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
                <h3 className="font-semibold text-india-navyBlue">Proactive Defense Operations</h3>
                <p className="text-gray-700">
                  Government security teams use threat intelligence to anticipate and preemptively block
                  emerging attack vectors before they can target critical infrastructure.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Foreign Influence Campaign Detection</h3>
                <p className="text-gray-700">
                  Threat intelligence tools help identify coordinated influence operations originating
                  from foreign actors attempting to manipulate public opinion.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Digital Evidence Collection</h3>
                <p className="text-gray-700">
                  Security agencies leverage threat intelligence to gather and preserve forensic digital
                  evidence of malicious activities for potential legal proceedings.
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

export default ThreatIntelligencePage;
