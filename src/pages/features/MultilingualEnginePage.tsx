
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MultilingualEngine from '@/components/tools/MultilingualEngine';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MultilingualEnginePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center text-india-navyBlue hover:text-india-accent2 mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-india-accent2 mb-2">Multilingual Engine</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Advanced NLP system for analyzing content across all 22 official Indian languages and major dialects
          </p>
        </div>
        
        <Card className="mb-8 border-india-navyBlue/10 shadow-md">
          <CardHeader className="bg-india-navyBlue/5 border-b border-india-navyBlue/10">
            <CardTitle className="text-india-accent2">Multilingual Processing Engine</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <MultilingualEngine />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Support for all 22 official Indian languages</li>
                <li>Dialect variation understanding</li>
                <li>Cross-language content correlation</li>
                <li>Cultural context-aware analysis</li>
                <li>Script-agnostic processing capabilities</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Transformer-based NLP architectures</li>
                <li>Custom language models for Indian languages</li>
                <li>Code-switching and transliteration handling</li>
                <li>Neural machine translation capabilities</li>
                <li>Contextual sentiment and intent analysis</li>
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
                <h3 className="font-semibold text-india-navyBlue">Regional Disinformation Monitoring</h3>
                <p className="text-gray-700">
                  Security teams monitor content in regional languages to identify disinformation campaigns
                  targeting specific linguistic communities across India.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Cross-Language Threat Correlation</h3>
                <p className="text-gray-700">
                  Intelligence analysts correlate threats and narratives across multiple languages to identify
                  coordinated campaigns that operate in different linguistic spheres.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Cultural Context Analysis</h3>
                <p className="text-gray-700">
                  The system helps identify culturally sensitive content and potential threats that might be
                  missed by standard security systems lacking cultural and linguistic context.
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

export default MultilingualEnginePage;
