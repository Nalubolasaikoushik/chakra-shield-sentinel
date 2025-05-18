
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import AshokChakra from './AshokChakra';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Tracking scroll for header style changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsToolsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'home', path: '/' },
    { name: 'scan', path: '/scan' },
    { name: 'dashboard', path: '/dashboard' },
    { name: 'blockchain', path: '/blockchain' },
    { name: 'reports', path: '/reports' },
    { name: 'alerts', path: '/alerts' },
    { 
      name: 'tools', 
      path: '/tools',
      hasDropdown: true,
      dropdownItems: [
        { name: 'securityAssessment', path: '/tools/security-assessment' },
        { name: 'threatIntelligence', path: '/tools/threat-intelligence' },
        { name: 'behaviorAnalysis', path: '/tools/behavior-analysis' },
        { name: 'deepfakeDetection', path: '/tools/deepfake-detection' },
        { name: 'networkMapping', path: '/tools/network-mapping' },
        { name: 'alertSystem', path: '/tools/alert-system' },
      ]
    },
    { name: 'about', path: '/about' },
    { name: 'contact', path: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md' 
          : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center" aria-label="ChakraShield Home">
              <div className="relative flex items-center">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-india-navyBlue" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <AshokChakra size="sm" color="#FF8C00" />
                </span>
              </div>
              <span className="ml-2 text-lg md:text-xl font-bold bg-gradient-to-r from-india-navyBlue to-india-accent3 bg-clip-text text-transparent">
                ChakraShield
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => 
              item.hasDropdown ? (
                <div className="relative group" key={item.name}>
                  <button
                    onClick={() => setIsToolsMenuOpen(!isToolsMenuOpen)}
                    className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center ${
                      location.pathname === item.path || location.pathname.startsWith(`${item.path}/`)
                        ? 'text-india-navyBlue dark:text-india-saffron'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                    aria-expanded={isToolsMenuOpen}
                  >
                    {t(item.name)}
                    {isToolsMenuOpen ? 
                      <ChevronUp className="ml-1 h-4 w-4" /> : 
                      <ChevronDown className="ml-1 h-4 w-4" />
                    }
                  </button>
                  <div 
                    className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 transition-all duration-150 ease-in-out origin-top-left 
                    ${isToolsMenuOpen ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-0 invisible'}`}
                  >
                    <div className="py-1">
                      {item.dropdownItems?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={`block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${
                            location.pathname === subItem.path
                              ? 'text-india-navyBlue dark:text-india-saffron'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {t(subItem.name)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
                    location.pathname === item.path
                      ? 'text-india-navyBlue dark:text-india-saffron'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {t(item.name)}
                </Link>
              )
            )}
            <div className="ml-2 flex items-center space-x-2">
              <ThemeToggle />
              <LanguageSelector variant="compact" />
            </div>
          </nav>
          
          {/* Login/Register buttons or username on desktop */}
          <div className="hidden md:flex items-center">
            <Link to="/login">
              <Button variant="outline" size="sm" className="mr-2">
                {t('login')}
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-india-navyBlue hover:bg-india-navyBlue/90" size="sm">
                {t('register')}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label={isMenuOpen ? 'Close menu' : t('mobileMenu')}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800">
          <div className="flex justify-between items-center py-2">
            <LanguageSelector variant="header" />
            <div className="flex space-x-2">
              <Link to="/login">
                <Button variant="outline" size="sm" className="text-xs px-2.5">
                  {t('login')}
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-india-navyBlue hover:bg-india-navyBlue/90 text-xs px-2.5" size="sm">
                  {t('register')}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="pt-2 pb-4 space-y-1">
            {navItems.map((item) => 
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => setIsToolsMenuOpen(!isToolsMenuOpen)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium ${
                      location.pathname === item.path || location.pathname.startsWith(`${item.path}/`)
                        ? 'bg-india-navyBlue/10 text-india-navyBlue dark:text-india-saffron'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span>{t(item.name)}</span>
                    {isToolsMenuOpen ? 
                      <ChevronUp className="h-4 w-4" /> : 
                      <ChevronDown className="h-4 w-4" />
                    }
                  </button>
                  
                  {isToolsMenuOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.dropdownItems?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={`block px-3 py-2 rounded-md text-sm font-medium ${
                            location.pathname === subItem.path
                              ? 'bg-india-navyBlue/10 text-india-navyBlue dark:text-india-saffron'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          {t(subItem.name)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.path
                      ? 'bg-india-navyBlue/10 text-india-navyBlue dark:text-india-saffron'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {t(item.name)}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
