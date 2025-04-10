
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import LogoCarousel from '@/components/landing/LogoCarousel';
import Disclaimer from '@/components/landing/Disclaimer';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, ExternalLink, Github, Linkedin, Globe, Mail, Brain, Code, BadgeCheck, Award, Cpu, BookOpen, Rocket } from 'lucide-react';
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
                    Visit Developer's Github
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
        
        {/* Enhanced Developer Section with improved mobile responsiveness */}
        <div className="developer-section py-8 md:py-16 relative overflow-hidden bg-gray-50">
          {/* Simplified background patterns */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-india-saffron/20 to-transparent animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-india-green/20 to-transparent animate-pulse" style={{animationDelay: "1s"}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-6 fade-in">
              <div className="flex items-center justify-center mb-2">
                <AshokChakra size="md" spinning={true} className="mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-india-navyBlue to-india-accent3 bg-clip-text text-transparent">Developed By</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                ChakraShield is developed and maintained by an AI & Robotics enthusiast committed to digital security and innovation.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="developer-card bg-white rounded-xl p-4 md:p-6 shadow-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                  {/* Profile image - simplified for mobile */}
                  <div className="relative">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-india-saffron to-india-navyBlue p-1">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <AshokChakra size={60} spinning={true} color="#1E3799" />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-india-saffron text-white rounded-full p-1.5 shadow-md">
                      <BadgeCheck className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </div>
                  </div>
                  
                  {/* Developer info - better spacing for mobile */}
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-india-navyBlue mb-1 md:mb-2">Saikoushik Nalubola</h3>
                    <p className="text-india-accent3 mb-2 font-medium text-sm">Developer | AI & Robotics Enthusiast</p>
                    <p className="text-gray-700 mb-3 text-sm">
                      Computer Science & Engineering student specializing in AI, Robotics, and Sustainable Tech, 
                      with a mission to build systems that are ethical, scalable, and meaningful.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-india-saffron/20 text-india-saffron">
                        B.Tech CSE (AIML)
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-india-navyBlue/20 text-india-navyBlue">
                        Open-Source Contributor
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-india-green/20 text-india-green">
                        Privacy Advocate
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Skills section - optimized grid for mobile */}
                <div className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <div className="flex items-center mb-2">
                        <div className="p-1.5 bg-india-saffron/10 rounded-md mr-2">
                          <Brain className="h-4 w-4 md:h-5 md:w-5 text-india-saffron" />
                        </div>
                        <h4 className="font-semibold text-india-navyBlue text-sm">AI/ML Skills</h4>
                      </div>
                      <ul className="space-y-1 text-gray-600 text-xs">
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-india-saffron mr-1.5"></span>
                          TensorFlow, PyTorch
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-india-saffron mr-1.5"></span>
                          Scikit-Learn, Pandas
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-india-saffron mr-1.5"></span>
                          Computer Vision
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <div className="flex items-center mb-2">
                        <div className="p-1.5 bg-india-navyBlue/10 rounded-md mr-2">
                          <Code className="h-4 w-4 md:h-5 md:w-5 text-india-navyBlue" />
                        </div>
                        <h4 className="font-semibold text-india-navyBlue text-sm">Tech Stack</h4>
                      </div>
                      <ul className="space-y-1 text-gray-600 text-xs">
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-india-navyBlue mr-1.5"></span>
                          Python, JavaScript
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-india-navyBlue mr-1.5"></span>
                          React.js, Node.js
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-india-navyBlue mr-1.5"></span>
                          Firebase, MongoDB
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <div className="flex items-center mb-2">
                        <div className="p-1.5 bg-india-green/10 rounded-md mr-2">
                          <Rocket className="h-4 w-4 md:h-5 md:w-5 text-india-green" />
                        </div>
                        <h4 className="font-semibold text-india-navyBlue text-sm">Key Projects</h4>
                      </div>
                      <ul className="space-y-1 text-gray-600 text-xs">
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-india-green mr-1.5"></span>
                          Garuda OS (Privacy-First OS)
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-india-green mr-1.5"></span>
                          Water Purification Drone
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-india-green mr-1.5"></span>
                          AI Farming Assistant
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Social links - simplified for mobile */}
                  <div className="flex justify-center space-x-4 py-4 mt-4">
                    <a 
                      href="https://github.com/saikoushiknalubola" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transform transition-all hover:scale-110 p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-5 w-5 text-gray-700" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transform transition-all hover:scale-110 p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </a>
                    <a 
                      href="https://example.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transform transition-all hover:scale-110 p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
                      aria-label="Personal Website"
                    >
                      <Globe className="h-5 w-5 text-teal-600" />
                    </a>
                    <a 
                      href="mailto:contact@example.com" 
                      className="transform transition-all hover:scale-110 p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
                      aria-label="Email Contact"
                    >
                      <Mail className="h-5 w-5 text-red-500" />
                    </a>
                  </div>
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
