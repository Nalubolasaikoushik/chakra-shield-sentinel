
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import SecurityAssessment from '@/components/tools/SecurityAssessment';
import ThreatIntelligence from '@/components/tools/ThreatIntelligence';
import DeepfakeDetection from '@/components/tools/DeepfakeDetection';
import BehaviorAnalysis from '@/components/tools/BehaviorAnalysis';
import NetworkMapping from '@/components/tools/NetworkMapping';
import AlertSystem from '@/components/tools/AlertSystem';
import AdminDashboard from '@/components/tools/AdminDashboard';
import CrossPlatformMonitor from '@/components/tools/CrossPlatformMonitor';
import MultilingualEngine from '@/components/tools/MultilingualEngine';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Core AI Security Features Section */}
        <div className="py-16 bg-gradient-to-b from-india-lightBg to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-india-accent2 mb-4">Innovative Security Features</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                ChakraShield combines cutting-edge AI with robust security frameworks to provide
                comprehensive protection against emerging cyber threats targeting Indian digital infrastructure.
              </p>
            </div>
            
            {/* Deepfake Detection */}
            <DeepfakeDetection />
            
            {/* Behavior Analysis */}
            <BehaviorAnalysis />
            
            {/* Network Mapping */}
            <NetworkMapping />
            
            {/* Security Assessment */}
            <SecurityAssessment />
            
            {/* Threat Intelligence */}
            <ThreatIntelligence />
            
            {/* Alert System */}
            <AlertSystem />
            
            {/* Admin Dashboard */}
            <AdminDashboard />
            
            {/* Cross-Platform Monitor */}
            <CrossPlatformMonitor />
            
            {/* Multilingual Engine */}
            <MultilingualEngine />
            
            {/* Final CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-india-navyBlue to-india-accent3 rounded-xl shadow-xl p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Secure India's Digital Future</h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-8">
                  Join the mission to protect our citizens, institutions, and national security from evolving digital threats.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="https://github.com/saikoushiknalubola" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="gradient-button"
                  >
                    Visit Developer's GitHub
                  </a>
                  <button className="bg-white text-india-navyBlue hover:bg-opacity-90 font-medium rounded-full px-6 py-2.5 transform transition-all duration-300 shadow-md hover:shadow-lg">
                    Request a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
