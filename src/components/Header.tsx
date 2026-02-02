
import React, { useState, useEffect } from 'react';
import { Shield, Menu, Globe, X, MapPin, AlertTriangle, FileText, Wrench, Users, Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import AshokChakra from './AshokChakra';
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const { toast } = useToast();
  const { currentLanguage, setLanguage, t } = useLanguage();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const showAuthButtons = !['/login', '/register'].includes(location.pathname);

  const handleLanguageChange = (language: 'English' | 'हिंदी') => {
    setLanguage(language);
    
    toast({
      title: "Language Changed",
      description: t('languageChanged'),
      duration: 3000,
    });
    
    console.log(`Language changed to: ${language}`);
  };

  return (
    <header className="w-full bg-india-navyBlue text-white shadow-lg">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="mr-3 relative group">
              <div className="absolute inset-0 bg-india-saffron rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <Shield className="h-8 w-8 md:h-9 md:w-9 text-india-saffron relative z-10 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <h1 className="text-lg md:text-2xl font-bold mr-1 md:mr-2 bg-gradient-to-r from-india-saffron to-white bg-clip-text text-transparent">
                  ChakraShield
                </h1>
                <AshokChakra size="sm" spinning={true} />
              </div>
              <p className="text-xs md:text-sm font-devanagari text-white/90">
                {t('headerTitle')}
              </p>
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                <Globe className="mr-1 h-4 w-4" />
                <span className="hidden sm:inline">{currentLanguage}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white z-50">
              <DropdownMenuItem onClick={() => handleLanguageChange("English")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("हिंदी")} className="font-devanagari">हिंदी</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="bg-transparent border-white/20 text-white hover:bg-white/10 hidden md:flex">
                <FileText className="mr-1 h-4 w-4" />
                <span>{t('resources')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white w-56 z-50">
              <DropdownMenuLabel>{t('resources')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link to="/resources" className="flex items-center w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    <span>{t('documentation')}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/resources?tab=guidelines" className="flex items-center w-full">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    <span>Guidelines</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/resources?tab=api" className="flex items-center w-full">
                    <Wrench className="mr-2 h-4 w-4" />
                    <span>API Reference</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/resources?tab=community" className="flex items-center w-full">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Community</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {showAuthButtons && (
            <>
              <Link to="/login">
                <Button variant="ghost" className="text-white hidden md:flex hover:bg-white/10">
                  {t('login')}
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-india-saffron hover:bg-india-saffron/90 text-white hidden md:flex">
                  {t('register')}
                </Button>
              </Link>
            </>
          )}
          <Button variant="ghost" className="md:hidden p-2 hover:bg-white/10" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Center aligned navigation menu with security features dropdown */}
      <div className="relative bg-white/10 text-white overflow-x-auto scrollbar-none before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-india-saffron after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-india-green">
        <nav className="container mx-auto flex justify-center">
          <Link to="/" className="px-3 py-2 hover:bg-white/20 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{t('home')}</Link>
          <Link to="/scan" className="px-3 py-2 hover:bg-white/20 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{t('scan')}</Link>
          <Link to="/dashboard" className="px-3 py-2 hover:bg-white/20 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{t('dashboard')}</Link>
          <Link to="/blockchain" className="px-3 py-2 hover:bg-white/20 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{t('blockchain')}</Link>
          <Link to="/reports" className="px-3 py-2 hover:bg-white/20 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{t('reports')}</Link>
          <Link to="/alerts" className="px-3 py-2 hover:bg-white/20 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{t('alerts')}</Link>
          
          {/* Security Features Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-2 hover:bg-white/20 font-medium text-xs md:text-sm whitespace-nowrap transition-colors flex items-center">
              {t('features')}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-india-navyBlue text-white border-india-navyBlue">
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 focus:text-white">
                <Link to="/features/security-assessment" className="w-full">{t('securityAssessment')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 focus:text-white">
                <Link to="/features/threat-intelligence" className="w-full">{t('threatIntelligence')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 focus:text-white">
                <Link to="/features/deepfake-detection" className="w-full">{t('deepfakeDetection')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 focus:text-white">
                <Link to="/features/behavior-analysis" className="w-full">{t('behaviorAnalysis')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 focus:text-white">
                <Link to="/features/network-mapping" className="w-full">{t('networkMapping')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 focus:text-white">
                <Link to="/features/alert-system" className="w-full">{t('alertSystem')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 focus:text-white">
                <Link to="/features/admin-dashboard" className="w-full">{t('adminDashboard')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 focus:text-white">
                <Link to="/features/cross-platform-monitor" className="w-full">{t('crossPlatformMonitor')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10 focus:text-white">
                <Link to="/features/multilingual-engine" className="w-full">{t('multilingualEngine')}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/tools" className="px-3 py-2 hover:bg-white/20 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{t('tools')}</Link>
          <Link to="/translation" className="px-3 py-2 hover:bg-white/20 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{t('translation')}</Link>
          <Link to="/resources" className="px-3 py-2 hover:bg-white/20 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{t('resources')}</Link>
          <Link to="/about" className="px-3 py-2 hover:bg-white/20 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{t('about')}</Link>
          <Link to="/contact" className="px-3 py-2 hover:bg-white/20 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{t('contact')}</Link>
          <Link to="/#disclaimer" className="px-3 py-2 hover:bg-white/20 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{t('disclaimer')}</Link>
        </nav>
      </div>

      {/* Mobile menu - centered content with security features */}
      {mobileMenuOpen && isMobile && (
        <div className="md:hidden fixed inset-0 z-50 bg-india-navyBlue bg-opacity-98 flex flex-col">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-india-saffron mr-2" />
              <span className="text-xl font-bold">ChakraShield</span>
            </div>
            <Button variant="ghost" onClick={toggleMobileMenu} className="text-white hover:bg-white/10">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center py-6 space-y-5 max-h-[80vh] overflow-y-auto">
            <Link to="/" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{t('home')}</Link>
            <Link to="/scan" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{t('scan')}</Link>
            <Link to="/dashboard" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{t('dashboard')}</Link>
            <Link to="/blockchain" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{t('blockchain')}</Link>
            <Link to="/reports" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{t('reports')}</Link>
            <Link to="/alerts" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{t('alerts')}</Link>
            
            {/* Security Features Section in Mobile Menu */}
            <div className="border-t border-white/10 w-3/4 my-2"></div>
            <div className="text-white text-lg font-medium text-india-saffron">{t('features')}</div>
            <div className="flex flex-col items-center space-y-4 text-sm text-white w-full px-8">
              <Link to="/features/security-assessment" className="text-white text-md hover:text-india-saffron transition-colors text-center" onClick={toggleMobileMenu}>{t('securityAssessment')}</Link>
              <Link to="/features/threat-intelligence" className="text-white text-md hover:text-india-saffron transition-colors text-center" onClick={toggleMobileMenu}>{t('threatIntelligence')}</Link>
              <Link to="/features/deepfake-detection" className="text-white text-md hover:text-india-saffron transition-colors text-center" onClick={toggleMobileMenu}>{t('deepfakeDetection')}</Link>
              <Link to="/features/behavior-analysis" className="text-white text-md hover:text-india-saffron transition-colors text-center" onClick={toggleMobileMenu}>{t('behaviorAnalysis')}</Link>
              <Link to="/features/network-mapping" className="text-white text-md hover:text-india-saffron transition-colors text-center" onClick={toggleMobileMenu}>{t('networkMapping')}</Link>
              <Link to="/features/alert-system" className="text-white text-md hover:text-india-saffron transition-colors text-center" onClick={toggleMobileMenu}>{t('alertSystem')}</Link>
              <Link to="/features/admin-dashboard" className="text-white text-md hover:text-india-saffron transition-colors text-center" onClick={toggleMobileMenu}>{t('adminDashboard')}</Link>
              <Link to="/features/cross-platform-monitor" className="text-white text-md hover:text-india-saffron transition-colors text-center" onClick={toggleMobileMenu}>{t('crossPlatformMonitor')}</Link>
              <Link to="/features/multilingual-engine" className="text-white text-md hover:text-india-saffron transition-colors text-center" onClick={toggleMobileMenu}>{t('multilingualEngine')}</Link>
            </div>
            
            {/* Additional mobile menu items */}
            
            <div className="border-t border-white/10 w-3/4 my-2"></div>
            
            <Link to="/tools" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{t('tools')}</Link>
            <Link to="/translation" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{t('translation')}</Link>
            <Link to="/resources" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{t('resources')}</Link>
            <Link to="/about" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{t('about')}</Link>
            <Link to="/contact" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{t('contact')}</Link>
            <Link to="/#disclaimer" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{t('disclaimer')}</Link>
            
            <div className="border-t border-white/10 w-3/4 my-2"></div>
            
            <div className="text-white text-lg font-medium text-india-saffron transition-colors">
              {t('resources')}
            </div>
            <div className="flex flex-col items-center space-y-4 text-sm text-white/80">
              <Link to="/resources" className="hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{t('documentation')}</Link>
              <Link to="/resources?tab=guidelines" className="hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>Guidelines</Link>
              <Link to="/resources?tab=api" className="hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>API Reference</Link>
              <Link to="/resources?tab=community" className="hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>Community</Link>
            </div>
            
            {showAuthButtons && (
              <div className="pt-6 flex flex-col space-y-3">
                <Link to="/login" onClick={toggleMobileMenu}>
                  <Button variant="outline" className="w-40 border-white/20 text-white hover:bg-white/10">{t('login')}</Button>
                </Link>
                <Link to="/register" onClick={toggleMobileMenu}>
                  <Button className="bg-india-saffron hover:bg-india-saffron/90 text-white w-40">{t('register')}</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
