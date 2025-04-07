import React from 'react';
import { Shield, ExternalLink, Mail, Phone, HelpCircle, Code, MapPin, Github, Linkedin } from 'lucide-react';
import { Link } from "react-router-dom";
import AshokChakra from './AshokChakra';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-india-accent2 text-white">
      <div className="container mx-auto px-3 md:px-4 py-6 md:py-8">

        {/* Top Branding Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative group mr-3">
              <div className="absolute inset-0 bg-india-saffron rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <Shield className="h-7 w-7 md:h-8 md:w-8 text-india-saffron relative z-10 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <div className="flex items-center">
                <h3 className="text-xl font-bold mr-2 bg-gradient-to-r from-india-saffron to-white bg-clip-text text-transparent">
                  ChakraShield
                </h3>
                <AshokChakra size="sm" />
              </div>
              <p className="text-xs font-devanagari text-white/90">साइबर सुरक्षा प्रणाली</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-1 mb-2">
              <span className="w-2 h-2 md:w-3 md:h-3 bg-india-saffron rounded-full pulse-alert"></span>
              <span className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></span>
              <span className="w-2 h-2 md:w-3 md:h-3 bg-india-green rounded-full pulse-alert"></span>
            </div>
            <p className="text-xs md:text-sm text-gray-300">Cyber Security Excellence</p>
          </div>
        </div>

        {/* Links Section - Improved for mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="slide-in-left" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base text-india-saffron">Platform</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li><Link to="/scan" className="hover:text-india-saffron transition-colors">Profile Scanner</Link></li>
              <li><Link to="/dashboard" className="hover:text-india-saffron transition-colors">Agency Dashboard</Link></li>
              <li><Link to="/blockchain" className="hover:text-india-saffron transition-colors">Blockchain Registry</Link></li>
              <li><Link to="/reports" className="hover:text-india-saffron transition-colors">Reports</Link></li>
              <li><Link to="/alerts" className="hover:text-india-saffron transition-colors">Alerts</Link></li>
              <li><Link to="/tools" className="hover:text-india-saffron transition-colors">Security Tools</Link></li>
            </ul>
          </div>

          <div className="slide-in-left" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base text-india-saffron">Resources</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li><Link to="/documentation" className="hover:text-india-saffron transition-colors">Documentation</Link></li>
              <li><Link to="/agencies" className="hover:text-india-saffron transition-colors">For Agencies</Link></li>
              <li><Link to="/api" className="hover:text-india-saffron transition-colors">API Integration</Link></li>
              <li><Link to="/research" className="hover:text-india-saffron transition-colors">Research Papers</Link></li>
              <li><Link to="/contact" className="hover:text-india-saffron transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="slide-in-left" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base text-india-saffron">Policies</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li><Link to="/terms" className="hover:text-india-saffron transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-india-saffron transition-colors">Privacy Policy</Link></li>
              <li><Link to="/security" className="hover:text-india-saffron transition-colors">Security</Link></li>
              <li><Link to="/accessibility" className="hover:text-india-saffron transition-colors">Accessibility</Link></li>
            </ul>
          </div>

          <div className="slide-in-left" style={{ animationDelay: "0.4s" }}>
            <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base text-india-saffron">Contact</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li className="flex items-center">
                <Mail className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 text-gray-400" />
                <span>support@chakrashield.in</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 text-gray-400" />
                <span>Helpline: 1800-333-9999</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 text-gray-400 mt-0.5" />
                <span className="text-xs md:text-sm">Digital Complex for Cyber Systems, Hanamakonda, Telangana 506001, Bharat India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Digital India Initiatives Section - Mobile optimized */}
        <div className="py-4 md:py-6 my-4 md:my-6 border-t border-b border-white/10">
          <h3 className="text-base md:text-xl font-bold mb-3 md:mb-4 text-center text-india-saffron">Digital India Initiatives</h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 text-xs md:text-sm">
            <div className="bg-white/5 p-3 md:p-4 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="font-semibold mb-1 md:mb-2 text-white">Cyber Suraksha Program</h4>
              <p className="text-gray-300 text-xs">A comprehensive cybersecurity awareness initiative to educate citizens about online safety practices and protection against cyber threats.</p>
            </div>
            <div className="bg-white/5 p-3 md:p-4 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="font-semibold mb-1 md:mb-2 text-white">DigiLocker</h4>
              <p className="text-gray-300 text-xs">Platform for issuance and verification of documents & certificates digitally, eliminating the need for physical documents.</p>
            </div>
            <div className="bg-white/5 p-3 md:p-4 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="font-semibold mb-1 md:mb-2 text-white">UMANG App</h4>
              <p className="text-gray-300 text-xs">Unified Mobile Application for New-age Governance providing access to various government services through a single platform.</p>
            </div>
          </div>
          <div className="text-center mt-3 md:mt-5">
            <Link to="/digital-india" className="inline-flex items-center text-india-saffron hover:underline text-xs md:text-sm">
              Learn more about Digital India initiatives
              <ExternalLink className="h-2.5 w-2.5 md:h-3 md:w-3 ml-1" />
            </Link>
          </div>
        </div>

        {/* Enhanced Developer Credit Section - REMOVED CHAKRA ANIMATIONS */}
        <div className="py-4 md:py-6 my-4 md:my-6 border-t border-b border-white/10">
          <div className="flex flex-col items-center">
            <div className="mb-3 md:mb-4 text-center">
              <h3 className="text-lg md:text-xl font-bold text-india-saffron mb-1 md:mb-2">Developed By</h3>
              <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4">Under the Digital India Initiative</p>
            </div>
            
            <div className="animated-border max-w-xs sm:max-w-md relative overflow-hidden">
              <div className="bg-gradient-to-br from-india-accent3/80 to-india-accent2 p-4 md:p-6 rounded-lg shadow-xl hover:shadow-india-saffron/20 transition-all duration-500 transform hover:-translate-y-1">
                {/* Removed the decorative background pattern with AshokChakra */}
                
                <div className="flex flex-col items-center justify-center relative z-10">
                  {/* Profile image with simplified effect */}
                  <div className="relative mb-3 md:mb-4 group">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-india-saffron/80 to-india-green/80 flex items-center justify-center relative overflow-hidden border-2 border-white/30">
                      <Code className="h-8 w-8 md:h-12 md:w-12 text-white" />
                    </div>
                  </div>
                  
                  <h4 className="text-center text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 tricolor-text">Saikoushik Nalubola</h4>
                  <p className="text-center text-gray-300 text-xs md:text-sm mb-3 md:mb-4">Lead Developer & Cybersecurity Expert</p>
                  
                  {/* Enhanced social links with hover effects */}
                  <div className="flex justify-center space-x-2 md:space-x-3">
                    <a 
                      href="https://www.linkedin.com/in/saikoushiknalubola/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group bg-white/10 hover:bg-india-saffron/80 transition-colors duration-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-white flex items-center"
                    >
                      <Linkedin className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 group-hover:scale-110 transition-transform" />
                      LinkedIn
                    </a>
                    <a 
                      href="https://github.com/saikoushiknalubola" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group bg-white/10 hover:bg-india-green/80 transition-colors duration-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-white flex items-center"
                    >
                      <Github className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 group-hover:scale-110 transition-transform" />
                      GitHub
                    </a>
                  </div>
                  
                  {/* Decorative tricolor line */}
                  <div className="w-full h-1 mt-4 md:mt-6 rounded overflow-hidden">
                    <div className="flex h-full">
                      <div className="w-1/3 bg-india-saffron"></div>
                      <div className="w-1/3 bg-white"></div>
                      <div className="w-1/3 bg-india-green"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Mobile optimized */}
        <div className="pt-4 md:pt-6 border-t border-white/10 text-xs md:text-sm text-center md:flex md:justify-between md:items-center">
          <p>© 2025 ChakraShield - All rights reserved</p>
          <div className="mt-3 md:mt-0 flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">
            <Link to="/terms" className="hover:text-india-saffron transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-india-saffron transition-colors">Privacy</Link>
            <Link to="/security" className="hover:text-india-saffron transition-colors">Security</Link>
            <Link to="/accessibility" className="hover:text-india-saffron transition-colors">Accessibility</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
