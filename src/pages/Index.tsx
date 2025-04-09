import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import LogoCarousel from '@/components/landing/LogoCarousel';
import Disclaimer from '@/components/landing/Disclaimer';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, ExternalLink, Github, Linkedin, Globe, Mail, Brain, Code, BadgeCheck, Award } from 'lucide-react';
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
        
        {/* Enhanced Developer Section */}
        <div className="developer-section py-16 relative overflow-hidden">
          {/* Animated background patterns */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-india-saffron/20 to-transparent animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-india-green/20 to-transparent animate-pulse" style={{animationDelay: "1s"}}></div>
            <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-india-navyBlue/5 animate-pulse" style={{animationDelay: "1.5s"}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-10 fade-in">
              <div className="flex items-center justify-center mb-2">
                <AshokChakra size="sm" spinning={true} className="mr-2" />
                <h2 className="text-2xl md:text-3xl font-bold text-india-navyBlue">Developed By</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                ChakraShield is developed and maintained by a team of dedicated professionals committed to digital security and innovation.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="developer-card transform transition-all duration-500 hover:translate-y-[-8px]">
                <div className="developer-header flex flex-col md:flex-row items-center md:items-start p-6">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-india-saffron to-india-navyBlue p-1">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <AshokChakra size="md" spinning={true} color="#1E3799" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold">Sai Koushik Nalubola</h3>
                    <p className="text-white/80 mb-2">Lead Developer & Security Specialist</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-india-saffron/20 text-india-saffron">
                        AI/ML Enthusiast
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-india-navyBlue/20 text-india-navyBlue">
                        B.Tech CSE (AIML)
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-india-green/20 text-india-green">
                        Cybersecurity Researcher
                      </span>
                    </div>
                  </div>
                </div>
                <div className="developer-body p-6">
                  <p className="text-gray-700 mb-6">
                    Cybersecurity professional specializing in artificial intelligence and social media threat detection.
                    Currently pursuing B.Tech in Computer Science Engineering with specialization in AI/ML.
                    Committed to safeguarding India's digital landscape through innovative technology solutions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-gray-100">
                      <Brain className="h-6 w-6 text-india-saffron mb-2" />
                      <h4 className="font-medium text-india-navyBlue mb-2">AI Expertise</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-saffron mr-2"></span>
                          Deep learning architectures
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-saffron mr-2"></span>
                          NLP for threat detection
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-saffron mr-2"></span>
                          Computer vision systems
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-gray-100">
                      <Code className="h-6 w-6 text-india-navyBlue mb-2" />
                      <h4 className="font-medium text-india-navyBlue mb-2">Tech Stack</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-navyBlue mr-2"></span>
                          Python, TensorFlow, PyTorch
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-navyBlue mr-2"></span>
                          React, Node.js, TypeScript
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-navyBlue mr-2"></span>
                          Cloud security & infrastructure
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-gray-100">
                      <Award className="h-6 w-6 text-india-green mb-2" />
                      <h4 className="font-medium text-india-navyBlue mb-2">Achievements</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-green mr-2"></span>
                          National cybersecurity competitions
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-green mr-2"></span>
                          Published research in AI security
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-green mr-2"></span>
                          Open-source contributions
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 border border-dashed border-india-saffron/50 rounded-lg bg-gradient-to-r from-white to-gray-50">
                    <div className="flex items-center mb-2">
                      <BadgeCheck className="h-5 w-5 text-india-navyBlue mr-2" />
                      <h4 className="font-medium text-india-navyBlue">Education & Certification</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Currently pursuing B.Tech in Computer Science Engineering with specialization in 
                      Artificial Intelligence and Machine Learning. Certified in advanced cybersecurity 
                      protocols and ethical hacking methodologies.
                    </p>
                  </div>
                </div>
                <div className="developer-footer flex justify-center space-x-6 p-4">
                  <a 
                    href="https://github.com/saikoushiknalubola" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-india-navyBlue transition-all transform hover:scale-110"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-all transform hover:scale-110"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://example.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-teal-600 transition-all transform hover:scale-110"
                    aria-label="Personal Website"
                  >
                    <Globe className="h-6 w-6" />
                  </a>
                  <a 
                    href="mailto:contact@example.com" 
                    className="text-gray-600 hover:text-red-500 transition-all transform hover:scale-110"
                    aria-label="Email Contact"
                  >
                    <Mail className="h-6 w-6" />
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
