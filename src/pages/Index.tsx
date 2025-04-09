
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
        <div className="developer-section py-20 relative overflow-hidden">
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
                ChakraShield is developed and maintained by a team of dedicated professionals committed to digital security and innovation.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="developer-card bg-gradient-to-br from-india-navyBlue/5 to-india-green/5 backdrop-blur-sm rounded-2xl p-1 shadow-xl transform transition-all duration-500 hover:translate-y-[-8px]">
                <div className="bg-white/80 rounded-2xl overflow-hidden">
                  <div className="developer-header flex flex-col md:flex-row items-center md:items-start p-8">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-india-saffron to-india-navyBlue p-1">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <AshokChakra size="lg" spinning={true} color="#1E3799" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-india-navyBlue mb-2">Saikoushik Nalubola</h3>
                      <p className="text-india-accent3 mb-3 font-medium">Developer | AI & Robotics Enthusiast</p>
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
                  <div className="developer-body p-8">
                    <p className="text-gray-700 mb-8 leading-relaxed">
                      Computer Science & Engineering student who breathes code and bleeds innovation. 
                      Specializing in AI, Robotics, and Sustainable Tech, with a mission to build systems 
                      that are not just smart — but ethical, scalable, and meaningful.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="glass-card bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
                        <Brain className="h-7 w-7 text-india-saffron mb-3" />
                        <h4 className="font-medium text-india-navyBlue mb-3">AI/ML Skills</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
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
                      <div className="glass-card bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
                        <Code className="h-7 w-7 text-india-navyBlue mb-3" />
                        <h4 className="font-medium text-india-navyBlue mb-3">Tech Stack</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
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
                      <div className="glass-card bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
                        <Rocket className="h-7 w-7 text-india-green mb-3" />
                        <h4 className="font-medium text-india-navyBlue mb-3">Key Projects</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
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
                    
                    <div className="mt-8 p-5 border border-dashed border-india-saffron/50 rounded-xl bg-gradient-to-r from-white to-gray-50">
                      <div className="flex items-center mb-3">
                        <BookOpen className="h-6 w-6 text-india-navyBlue mr-2" />
                        <h4 className="font-medium text-india-navyBlue">Currently Exploring</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Generative AI with LLMs for multilingual education & voice assistants.
                        Drone Swarming Algorithms for coordinated disaster management.
                        Secure Mobile OS Development and Open-source contributions to AI & privacy projects.
                      </p>
                    </div>
                  </div>
                  <div className="developer-footer flex justify-center space-x-8 p-6 border-t border-gray-100">
                    <a 
                      href="https://github.com/saikoushiknalubola" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-india-navyBlue transition-all transform hover:scale-110"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-7 w-7" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-all transform hover:scale-110"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-7 w-7" />
                    </a>
                    <a 
                      href="https://example.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-teal-600 transition-all transform hover:scale-110"
                      aria-label="Personal Website"
                    >
                      <Globe className="h-7 w-7" />
                    </a>
                    <a 
                      href="mailto:contact@example.com" 
                      className="text-gray-600 hover:text-red-500 transition-all transform hover:scale-110"
                      aria-label="Email Contact"
                    >
                      <Mail className="h-7 w-7" />
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
