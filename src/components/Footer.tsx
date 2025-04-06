
import React from 'react';
import { Shield, ExternalLink, Mail, Phone, HelpCircle, Code, Tool } from 'lucide-react';
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
                <HelpCircle className="h-4 w-4 mr-2 text-gray-400" />
                <span>cybersoc@cert-in.org.in</span>
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

        {/* Developer Credit Section */}
        <div className="py-4 my-4 border-t border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <Code className="h-5 w-5 mr-2 text-india-saffron animate-pulse" />
              <span className="font-medium">Developed by:</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-full">
              <a
                href="https://www.linkedin.com/in/saikoushiknalubola/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-india-saffron hover:underline"
              >
                Saikoushik Nalubola
              </a>
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
