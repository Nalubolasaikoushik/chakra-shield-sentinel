
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BehaviorAnalysis from '@/components/tools/BehaviorAnalysis';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BehaviorAnalysisPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center text-india-navyBlue hover:text-india-accent2 mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-india-accent2 mb-2">Behavior Analysis</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Advanced AI-driven behavioral pattern detection and analysis for identifying suspicious account activity
          </p>
        </div>
        
        <Card className="mb-8 border-india-navyBlue/10 shadow-md">
          <CardHeader className="bg-india-navyBlue/5 border-b border-india-navyBlue/10">
            <CardTitle className="text-india-accent2">Behavior Analysis Engine</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <BehaviorAnalysis />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Temporal activity pattern analysis</li>
                <li>Content posting rhythm detection</li>
                <li>Network interaction fingerprinting</li>
                <li>Linguistic consistency evaluation</li>
                <li>Account evolution tracking</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Recurrent neural networks for sequence modeling</li>
                <li>Natural language processing for content analysis</li>
                <li>Unsupervised anomaly detection</li>
                <li>Supervised classification of behavioral patterns</li>
                <li>Multi-dimensional clustering algorithms</li>
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
                <h3 className="font-semibold text-india-navyBlue">Bot Network Detection</h3>
                <p className="text-gray-700">
                  Security agencies utilize behavior analysis to identify coordinated networks of automated accounts
                  designed to amplify specific narratives or manipulate social media trends.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Impersonation Prevention</h3>
                <p className="text-gray-700">
                  Government officials use behavior analysis to detect accounts impersonating themselves or other
                  authority figures, protecting official communications channels.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Influence Operation Tracking</h3>
                <p className="text-gray-700">
                  National security teams track behavior patterns to identify foreign influence operations targeting
                  Indian citizens through coordinated inauthentic behavior.
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

export default BehaviorAnalysisPage;
