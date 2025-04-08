
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CrossPlatformMonitor from '@/components/tools/CrossPlatformMonitor';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CrossPlatformMonitorPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center text-india-navyBlue hover:text-india-accent2 mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-india-accent2 mb-2">Cross-Platform Monitor</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unified monitoring system for tracking suspicious activities across multiple social media platforms
          </p>
        </div>
        
        <Card className="mb-8 border-india-navyBlue/10 shadow-md">
          <CardHeader className="bg-india-navyBlue/5 border-b border-india-navyBlue/10">
            <CardTitle className="text-india-accent2">Cross-Platform Monitoring System</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <CrossPlatformMonitor />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Multi-platform data aggregation</li>
                <li>Unified search and monitoring interfaces</li>
                <li>Cross-platform entity correlation</li>
                <li>Coordinated activity detection</li>
                <li>Platform-specific analytics modules</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>API integration with major social platforms</li>
                <li>Custom scraping engines for non-API sources</li>
                <li>Advanced entity resolution algorithms</li>
                <li>Scalable data processing architecture</li>
                <li>Real-time and historical analysis capabilities</li>
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
                <h3 className="font-semibold text-india-navyBlue">Coordinated Inauthentic Behavior Tracking</h3>
                <p className="text-gray-700">
                  Security teams track suspicious activities across multiple platforms to identify coordinated
                  campaigns that would be difficult to detect when examining each platform in isolation.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Disinformation Flow Analysis</h3>
                <p className="text-gray-700">
                  Intelligence analysts track how disinformation spreads across different platforms, identifying
                  patterns and primary sources of misleading content.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Threat Actor Profiling</h3>
                <p className="text-gray-700">
                  Security agencies build comprehensive profiles of threat actors by correlating their activities
                  across multiple social platforms, revealing broader patterns and capabilities.
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

export default CrossPlatformMonitorPage;
