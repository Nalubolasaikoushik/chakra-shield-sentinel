
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NetworkMapping from '@/components/tools/NetworkMapping';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NetworkMappingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center text-india-navyBlue hover:text-india-accent2 mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-india-accent2 mb-2">Network Mapping</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visualization and analysis of connection networks to identify coordinated inauthentic behavior
          </p>
        </div>
        
        <Card className="mb-8 border-india-navyBlue/10 shadow-md">
          <CardHeader className="bg-india-navyBlue/5 border-b border-india-navyBlue/10">
            <CardTitle className="text-india-accent2">Network Mapping System</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <NetworkMapping />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Interactive network visualization</li>
                <li>Connection pattern identification</li>
                <li>Cluster detection algorithms</li>
                <li>Temporal evolution of networks</li>
                <li>Cross-platform relationship mapping</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Graph theory-based analysis algorithms</li>
                <li>Force-directed graph visualization</li>
                <li>Community detection algorithms</li>
                <li>Centrality measures for node importance</li>
                <li>Anomaly detection in network structures</li>
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
                <h3 className="font-semibold text-india-navyBlue">Disinformation Campaign Detection</h3>
                <p className="text-gray-700">
                  Security teams use network mapping to identify coordinated groups of accounts working together
                  to spread false information or propaganda across social platforms.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Influence Network Analysis</h3>
                <p className="text-gray-700">
                  Government analysts map networks of influential accounts to understand information flow
                  patterns and identify potential manipulation of public discourse.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Threat Actor Identification</h3>
                <p className="text-gray-700">
                  Intelligence agencies utilize network mapping to identify connections between accounts
                  linked to known threat actors, revealing larger operational networks.
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

export default NetworkMappingPage;
