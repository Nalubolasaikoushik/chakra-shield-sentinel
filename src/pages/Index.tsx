
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import SecurityAssessment from '@/components/tools/SecurityAssessment';
import ThreatIntelligence from '@/components/tools/ThreatIntelligence';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* New sections showcasing our innovative features */}
        <div className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-india-navyBlue mb-4">Innovative Security Features</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                ChakraShield combines cutting-edge AI with robust security frameworks to provide
                comprehensive protection against emerging cyber threats targeting Indian digital infrastructure.
              </p>
            </div>
            
            <SecurityAssessment />
            <ThreatIntelligence />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
