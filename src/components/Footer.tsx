
import React from 'react';
import { Shield, Mail, Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Link } from "react-router-dom";
import AshokChakra from './AshokChakra';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  
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
              <p className="text-xs font-devanagari text-white/90">{t('headerTitle')}</p>
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

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="slide-in-left" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base text-india-saffron">{t('platform')}</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li><Link to="/scan" className="hover:text-india-saffron transition-colors">{t('profileScanner')}</Link></li>
              <li><Link to="/dashboard" className="hover:text-india-saffron transition-colors">{t('agencyDashboard')}</Link></li>
              <li><Link to="/blockchain" className="hover:text-india-saffron transition-colors">{t('blockchainRegistry')}</Link></li>
              <li><Link to="/reports" className="hover:text-india-saffron transition-colors">{t('reports')}</Link></li>
              <li><Link to="/alerts" className="hover:text-india-saffron transition-colors">{t('alerts')}</Link></li>
              <li><Link to="/tools" className="hover:text-india-saffron transition-colors">{t('securityTools')}</Link></li>
            </ul>
          </div>

          <div className="slide-in-left" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base text-india-saffron">{t('resources')}</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li><Link to="/documentation" className="hover:text-india-saffron transition-colors">{t('documentation')}</Link></li>
              <li><Link to="/api" className="hover:text-india-saffron transition-colors">{t('apiIntegration')}</Link></li>
              <li><Link to="/contact" className="hover:text-india-saffron transition-colors">{t('contactUs')}</Link></li>
            </ul>
          </div>

          <div className="slide-in-left" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base text-india-saffron">{t('legal')}</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li><Link to="/terms" className="hover:text-india-saffron transition-colors">{t('termsOfService')}</Link></li>
              <li><Link to="/privacy" className="hover:text-india-saffron transition-colors">{t('privacyPolicy')}</Link></li>
              <li><Link to="/security" className="hover:text-india-saffron transition-colors">{t('security')}</Link></li>
              <li><Link to="/accessibility" className="hover:text-india-saffron transition-colors">{t('accessibility')}</Link></li>
            </ul>
          </div>

          <div className="slide-in-left" style={{ animationDelay: "0.4s" }}>
            <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base text-india-saffron">{t('contact')}</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li className="flex items-center">
                <Mail className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 text-gray-400" />
                <span>support@chakrashield.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 text-gray-400" />
                <span>Contact Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-4 md:pt-6 border-t border-white/10 text-xs md:text-sm text-center md:flex md:justify-between md:items-center">
          <p>© 2025 ChakraShield - {t('allRightsReserved')}</p>
          <div className="mt-3 md:mt-0 flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">
            <Link to="/terms" className="hover:text-india-saffron transition-colors">{t('terms')}</Link>
            <Link to="/privacy" className="hover:text-india-saffron transition-colors">{t('privacy')}</Link>
            <Link to="/security" className="hover:text-india-saffron transition-colors">{t('security')}</Link>
            <Link to="/accessibility" className="hover:text-india-saffron transition-colors">{t('accessibility')}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
