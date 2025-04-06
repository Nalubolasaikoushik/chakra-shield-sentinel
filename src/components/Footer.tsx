
import React from 'react';
import { Shield, ExternalLink, Mail, Phone, HelpCircle, Code, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";
import AshokChakra from './AshokChakra';

const Footer = () => {
  return (
    <footer className="bg-india-navyBlue text-white">
      <div className="container mx-auto px-4 py-8">

        {/* Top Branding Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-8 w-8 text-india-saffron mr-3" />
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
              <span className="w-3 h-3 bg-india-saffron rounded-full"></span>
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span className="w-3 h-3 bg-india-green rounded-full"></span>
            </div>
            <p className="text-sm text-gray-300">Cyber Security Excellence</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-3 text-india-saffron">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/scan" className="hover:text-india-saffron transition-colors">Profile Scanner</Link></li>
              <li><Link to="/dashboard" className="hover:text-india-saffron transition-colors">Agency Dashboard</Link></li>
              <li><Link to="/blockchain" className="hover:text-india-saffron transition-colors">Blockchain Registry</Link></li>
              <li><Link to="/reports" className="hover:text-india-saffron transition-colors">Reports</Link></li>
              <li><Link to="/alerts" className="hover:text-india-saffron transition-colors">Alerts</Link></li>
              <li><Link to="/tools" className="hover:text-india-saffron transition-colors">Security Tools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-india-saffron">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/documentation" className="hover:text-india-saffron transition-colors">Documentation</Link></li>
              <li><Link to="/agencies" className="hover:text-india-saffron transition-colors">For Agencies</Link></li>
              <li><Link to="/api" className="hover:text-india-saffron transition-colors">API Integration</Link></li>
              <li><Link to="/research" className="hover:text-india-saffron transition-colors">Research Papers</Link></li>
              <li><Link to="/contact" className="hover:text-india-saffron transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-india-saffron">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="hover:text-india-saffron transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-india-saffron transition-colors">Privacy Policy</Link></li>
              <li><Link to="/security" className="hover:text-india-saffron transition-colors">Security</Link></li>
              <li><Link to="/accessibility" className="hover:text-india-saffron transition-colors">Accessibility</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-india-saffron">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <span>support@chakrashield.in</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                <span>Helpline: 1800-333-9999</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                <span>Digital Complex for Cyber Systems,<br/>Hanamakonda, Telangana 506001,<br/>Bharat India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Digital India Initiatives Section */}
        <div className="py-6 my-6 border-t border-b border-white/10">
          <h3 className="text-xl font-bold mb-4 text-center text-india-saffron">Digital India Initiatives</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-white">Cyber Suraksha Program</h4>
              <p className="text-gray-300">A comprehensive cybersecurity awareness initiative to educate citizens about online safety practices and protection against cyber threats.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-white">DigiLocker</h4>
              <p className="text-gray-300">Platform for issuance and verification of documents & certificates digitally, eliminating the need for physical documents.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-white">UMANG App</h4>
              <p className="text-gray-300">Unified Mobile Application for New-age Governance providing access to various government services through a single platform.</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link to="/digital-india" className="inline-flex items-center text-india-saffron hover:underline">
              Learn more about Digital India initiatives
              <ExternalLink className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Developer Credit Section - Enhanced */}
        <div className="py-6 my-6 border-t border-b border-white/10">
          <div className="flex flex-col items-center">
            <div className="mb-4 text-center">
              <h3 className="text-xl font-bold text-india-saffron mb-2">Developed By</h3>
              <p className="text-sm text-gray-300 mb-4">Under the Digital India Initiative</p>
            </div>
            
            <div className="bg-gradient-to-r from-india-navyBlue/60 to-india-navyBlue p-6 rounded-lg border border-india-saffron/30 shadow-xl hover:shadow-india-saffron/20 transition-all duration-300 max-w-md transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-india-saffron/20 rounded-full animate-pulse"></div>
                  <Code className="h-10 w-10 text-india-saffron relative z-10" />
                </div>
              </div>
              <h4 className="text-center text-xl font-bold text-white mb-2">Saikoushik Nalubola</h4>
              <p className="text-center text-gray-300 text-sm mb-4">Lead Developer & Cybersecurity Expert</p>
              <div className="flex justify-center space-x-2">
                <a 
                  href="https://www.linkedin.com/in/saikoushiknalubola/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 transition-colors duration-300 px-4 py-2 rounded-full text-sm text-white flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/saikoushik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 transition-colors duration-300 px-4 py-2 rounded-full text-sm text-white flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-white/10 text-sm text-center md:flex md:justify-between md:items-center">
          <p>© 2025 ChakraShield - All rights reserved</p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-4">
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
