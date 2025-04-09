
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import LogoCarousel from '@/components/landing/LogoCarousel';
import Disclaimer from '@/components/landing/Disclaimer';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, ExternalLink, Github, Linkedin, Globe, Mail } from 'lucide-react';
import AshokChakra from '@/components/AshokChakra';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Logo Carousel */}
        <LogoCarousel />
        
        {/* Final CTA Section */}
        <div className="py-16 bg-gradient-to-b from-india-lightBg to-gray-50">
          <div className="container mx-auto px-4">
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-india-navyBlue to-india-accent3 rounded-xl shadow-xl p-8 text-white">
                <Shield className="h-12 w-12 text-india-saffron mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Secure India's Digital Future</h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-8">
                  Join the mission to protect our citizens, institutions, and national security from evolving digital threats.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="https://github.com/saikoushiknalubola" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="gradient-button flex items-center"
                  >
                    Visit Developer's GitHub
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <Link to="/contact">
                    <Button className="bg-white text-india-navyBlue hover:bg-opacity-90 font-medium rounded-full px-6 py-2.5 transform transition-all duration-300 shadow-md hover:shadow-lg">
                      Request a Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Developer Section */}
        <div className="developer-section py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center mb-2">
                <AshokChakra size="sm" spinning={true} className="mr-2" />
                <h2 className="text-2xl md:text-3xl font-bold text-india-navyBlue">Developed By</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                ChakraShield is developed and maintained by a team of dedicated professionals committed to digital security and innovation.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="developer-card">
                <div className="developer-header flex items-center">
                  <div className="mr-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                      <AshokChakra size="sm" spinning={true} color="#ffffff" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Sai Koushik Nalubola</h3>
                    <p className="text-white/80">Lead Developer & Security Specialist</p>
                  </div>
                </div>
                <div className="developer-body">
                  <p className="text-gray-700 mb-4">
                    Cybersecurity professional specializing in artificial intelligence and social media threat detection. 
                    Committed to safeguarding India's digital landscape through innovative technology solutions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-india-navyBlue mb-2">Expertise</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-saffron mr-2"></span>
                          AI-powered threat detection
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-saffron mr-2"></span>
                          Social media security
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-saffron mr-2"></span>
                          Machine learning algorithms
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-saffron mr-2"></span>
                          Digital forensics
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-india-navyBlue mb-2">Education</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-green mr-2"></span>
                          M.Tech in Computer Science
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-green mr-2"></span>
                          Certified Information Systems Security Professional
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-green mr-2"></span>
                          Advanced AI & Machine Learning Certification
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="developer-footer flex justify-center space-x-4">
                  <a 
                    href="https://github.com/saikoushiknalubola" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://example.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                  <a 
                    href="mailto:contact@example.com" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Disclaimer Section */}
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
