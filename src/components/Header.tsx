
import React, { useState, useEffect } from 'react';
import { Shield, Menu, Globe, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import AshokChakra from './AshokChakra';
import { useIsMobile } from "@/hooks/use-mobile";

// Add translations for different languages
const translations = {
  "English": {
    home: "Home",
    scan: "Scan Profile",
    dashboard: "Dashboard",
    blockchain: "Blockchain Registry",
    reports: "Reports",
    alerts: "Alerts",
    about: "About",
    contact: "Contact",
    tools: "Tools",
    login: "Login",
    register: "Register",
    languageChanged: "Language has been set to English"
  },
  "हिंदी": {
    home: "होम",
    scan: "प्रोफाइल स्कैन",
    dashboard: "डैशबोर्ड",
    blockchain: "ब्लॉकचेन रजिस्ट्री",
    reports: "रिपोर्ट्स",
    alerts: "अलर्ट",
    about: "परिचय",
    contact: "संपर्क",
    tools: "उपकरण",
    login: "लॉगिन",
    register: "रजिस्टर",
    languageChanged: "भाषा हिंदी पर सेट की गई है"
  },
  "தமிழ்": {
    home: "முகப்பு",
    scan: "சுயவிவரம் ஸ்கேன்",
    dashboard: "டாஷ்போர்டு",
    blockchain: "பிளாக்செயின் பதிவகம்",
    reports: "அறிக்கைகள்",
    alerts: "எச்சரிக்கைகள்",
    about: "எங்களை பற்றி",
    contact: "தொடர்பு",
    tools: "கருவிகள்",
    login: "உள்நுழைய",
    register: "பதிவு செய்யவும்",
    languageChanged: "மொழி தமிழில் அமைக்கப்பட்டுள்ளது"
  },
  "বাংলা": {
    home: "হোম",
    scan: "প্রোফাইল স্ক্যান",
    dashboard: "ড্যাশবোর্ড",
    blockchain: "ব্লকচেইন রেজিস্ট্রি",
    reports: "রিপোর্ট",
    alerts: "সতর্কতা",
    about: "সম্পর্কে",
    contact: "যোগাযোগ",
    tools: "সরঞ্জাম",
    login: "লগইন",
    register: "নিবন্ধন",
    languageChanged: "ভাষা বাংলা সেট করা হয়েছে"
  },
  "తెలుగు": {
    home: "హోమ్",
    scan: "ప్రొఫైల్ స్కాన్",
    dashboard: "డాష్బోర్డ్",
    blockchain: "బ్లాక్ చెయిన్ రిజిస్ట్రీ",
    reports: "నివేదికలు",
    alerts: "హెచ్చరికలు",
    about: "గురించి",
    contact: "సంప్రదించండి",
    tools: "పనిముట్లు",
    login: "లాగిన్",
    register: "నమోదు",
    languageChanged: "భాష తెలుగులో సెట్ చేయబడింది"
  }
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [text, setText] = useState(translations.English);
  const isMobile = useIsMobile();
  const location = useLocation();
  const { toast } = useToast();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Don't show login/register buttons if we're already on those pages
  const showAuthButtons = !['/login', '/register'].includes(location.pathname);

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    
    // Set the translations for the selected language
    setText(translations[language as keyof typeof translations] || translations.English);
    
    toast({
      title: "Language Changed",
      description: translations[language as keyof typeof translations]?.languageChanged || `Language has been set to ${language}`,
      duration: 3000,
    });
    
    // Simulated language change for demo purposes
    console.log(`Language changed to: ${language}`);
  };

  // Effect to initialize language
  useEffect(() => {
    setText(translations[currentLanguage as keyof typeof translations] || translations.English);
  }, [currentLanguage]);

  return (
    <header className="w-full bg-india-navyBlue text-white shadow-lg">
      {/* Main header with logo and navigation */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="mr-3 relative group">
              <div className="absolute inset-0 bg-india-saffron rounded-full opacity-20 animate-pulse group-hover:opacity-40 transition-opacity"></div>
              <Shield className="h-9 w-9 text-india-saffron relative z-10 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <h1 className="text-xl md:text-2xl font-bold mr-2 bg-gradient-to-r from-india-saffron to-white bg-clip-text text-transparent">
                  ChakraShield
                </h1>
                <AshokChakra size="sm" spinning={true} />
              </div>
              <p className="text-xs md:text-sm font-devanagari text-white/90">
                साइबर सुरक्षा प्रणाली
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
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem onClick={() => handleLanguageChange("English")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("हिंदी")} className="font-devanagari">हिंदी</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("தமிழ்")}>தமிழ்</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("বাংলা")}>বাংলা</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("తెలుగు")}>తెలుగు</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("മലയാളം")}>മലയാളം</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("ಕನ್ನಡ")}>ಕನ್ನಡ</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("ગુજરાતી")}>ગુજરાતી</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("ଓଡ଼ିଆ")}>ଓଡ଼ିଆ</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("অসমীয়া")}>অসমীয়া</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("ਪੰਜਾਬੀ")}>ਪੰਜਾਬੀ</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {showAuthButtons && (
            <>
              <Link to="/login">
                <Button variant="ghost" className="text-white hidden md:flex hover:bg-white/10">
                  {text.login}
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-india-saffron hover:bg-india-saffron/90 text-white hidden md:flex">
                  {text.register}
                </Button>
              </Link>
            </>
          )}
          <Button variant="ghost" className="md:hidden p-2 hover:bg-white/10" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Navigation strip with tricolor border */}
      <div className="relative bg-white/10 text-white before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-india-saffron after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-india-green">
        <nav className="container mx-auto flex overflow-x-auto scrollbar-none">
          <Link to="/" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">{text.home}</Link>
          <Link to="/scan" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">{text.scan}</Link>
          <Link to="/dashboard" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">{text.dashboard}</Link>
          <Link to="/blockchain" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">{text.blockchain}</Link>
          <Link to="/reports" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">{text.reports}</Link>
          <Link to="/alerts" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">{text.alerts}</Link>
          <Link to="/tools" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">{text.tools}</Link>
          <Link to="/contact" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">{text.contact}</Link>
          <Link to="/about" className="px-4 py-2 hover:bg-white/10 font-medium text-sm whitespace-nowrap transition-colors">{text.about}</Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && isMobile && (
        <div className="md:hidden fixed inset-0 z-50 bg-india-navyBlue bg-opacity-98 flex flex-col">
          <div className="flex justify-end p-4">
            <Button variant="ghost" onClick={toggleMobileMenu} className="text-white hover:bg-white/10">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col items-center py-8 space-y-6">
            <Link to="/" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.home}</Link>
            <Link to="/scan" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.scan}</Link>
            <Link to="/dashboard" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.dashboard}</Link>
            <Link to="/blockchain" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.blockchain}</Link>
            <Link to="/reports" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.reports}</Link>
            <Link to="/alerts" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.alerts}</Link>
            <Link to="/tools" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.tools}</Link>
            <Link to="/contact" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.contact}</Link>
            <Link to="/about" className="text-white text-xl font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.about}</Link>
            {showAuthButtons && (
              <div className="pt-6 flex flex-col space-y-3">
                <Link to="/login" onClick={toggleMobileMenu}>
                  <Button variant="outline" className="w-40 border-white/20 text-white hover:bg-white/10">{text.login}</Button>
                </Link>
                <Link to="/register" onClick={toggleMobileMenu}>
                  <Button className="bg-india-saffron hover:bg-india-saffron/90 text-white w-40">{text.register}</Button>
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
