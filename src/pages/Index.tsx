
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
        
        {/* Enhanced Developer Section with Stunning UI/UX */}
        <div className="developer-section py-20 relative overflow-hidden bg-gray-50">
          {/* Animated background patterns */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-10 left-10 w-28 h-28 rounded-full bg-gradient-to-r from-india-saffron/20 to-transparent animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-india-green/20 to-transparent animate-pulse" style={{animationDelay: "1s"}}></div>
            <div className="absolute top-1/2 left-1/3 w-52 h-52 rounded-full bg-india-navyBlue/5 animate-pulse" style={{animationDelay: "1.5s"}}></div>
            {/* Additional decorative elements */}
            <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full border-2 border-dashed border-india-saffron/30 animate-spin-slow" style={{animationDelay: "0.5s"}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 fade-in">
              <div className="flex items-center justify-center mb-3">
                <AshokChakra size="md" spinning={true} className="mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-india-navyBlue to-india-accent3 bg-clip-text text-transparent">Developed By</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                ChakraShield is developed and maintained by an AI & Robotics enthusiast committed to digital security and innovation.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="developer-card bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-xl transform transition-all duration-500 hover:shadow-2xl border border-gray-100">
                <div className="developer-header flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-india-saffron to-india-navyBlue p-1 shadow-lg">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <AshokChakra size="lg" spinning={true} color="#1E3799" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-india-saffron text-white rounded-full p-2 shadow-md">
                      <BadgeCheck className="h-5 w-5" />
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-india-navyBlue mb-2">Saikoushik Nalubola</h3>
                    <p className="text-india-accent3 mb-3 font-medium">Developer | AI & Robotics Enthusiast</p>
                    <p className="text-gray-700 mb-4">
                      Computer Science & Engineering student (B.Tech CSE AIML) who breathes code and bleeds innovation. 
                      Specializing in AI, Robotics, and Sustainable Tech, with a mission to build systems 
                      that are not just smart — but ethical, scalable, and meaningful.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-india-saffron/20 text-india-saffron">
                        B.Tech CSE (AIML)
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-india-navyBlue/20 text-india-navyBlue">
                        Open-Source Contributor
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-india-green/20 text-india-green">
                        Privacy Advocate
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="developer-body mt-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-card bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-india-saffron/10 rounded-xl mr-4">
                          <Brain className="h-7 w-7 text-india-saffron" />
                        </div>
                        <h4 className="font-semibold text-india-navyBlue text-lg">AI/ML Skills</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-saffron mr-2"></span>
                          TensorFlow, PyTorch
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-saffron mr-2"></span>
                          Scikit-Learn, Pandas, NumPy
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-saffron mr-2"></span>
                          Computer Vision (OpenCV)
                        </li>
                      </ul>
                    </div>
                    
                    <div className="glass-card bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-india-navyBlue/10 rounded-xl mr-4">
                          <Code className="h-7 w-7 text-india-navyBlue" />
                        </div>
                        <h4 className="font-semibold text-india-navyBlue text-lg">Tech Stack</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-navyBlue mr-2"></span>
                          Python, JavaScript, C++, Java
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-navyBlue mr-2"></span>
                          React.js, Node.js, Express.js
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-navyBlue mr-2"></span>
                          Firebase, MongoDB, GCP
                        </li>
                      </ul>
                    </div>
                    
                    <div className="glass-card bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-india-green/10 rounded-xl mr-4">
                          <Rocket className="h-7 w-7 text-india-green" />
                        </div>
                        <h4 className="font-semibold text-india-navyBlue text-lg">Key Projects</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-green mr-2"></span>
                          Garuda OS (Privacy-First OS)
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-green mr-2"></span>
                          Water Purification Drone
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-india-green mr-2"></span>
                          AI Farming Assistant
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-200 shadow-md">
                    <div className="flex items-center mb-4">
                      <BookOpen className="h-6 w-6 text-india-navyBlue mr-3" />
                      <h4 className="font-semibold text-india-navyBlue text-lg">Currently Exploring</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Generative AI with LLMs for multilingual education & voice assistants.
                      Drone Swarming Algorithms for coordinated disaster management.
                      Secure Mobile OS Development and Open-source contributions to AI & privacy projects.
                    </p>
                  </div>
                  
                  <div className="developer-footer flex justify-center space-x-8 p-6 mt-6">
                    <a 
                      href="https://github.com/saikoushiknalubola" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transform transition-all hover:scale-110 p-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow-md"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-6 w-6 text-gray-700" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transform transition-all hover:scale-110 p-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow-md"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-6 w-6 text-blue-600" />
                    </a>
                    <a 
                      href="https://example.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transform transition-all hover:scale-110 p-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow-md"
                      aria-label="Personal Website"
                    >
                      <Globe className="h-6 w-6 text-teal-600" />
                    </a>
                    <a 
                      href="mailto:contact@example.com" 
                      className="transform transition-all hover:scale-110 p-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow-md"
                      aria-label="Email Contact"
                    >
                      <Mail className="h-6 w-6 text-red-500" />
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
