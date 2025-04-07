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
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import AshokChakra from './AshokChakra';
import { useIsMobile } from "@/hooks/use-mobile";

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
    translation: "Translation",
    login: "Login",
    register: "Register",
    languageChanged: "Language has been set to English",
    headerTitle: "Cyber Security System",
    developerInfo: "Developed by Saikoushik Nalubola",
    digitalIndia: "A Digital India Initiative",
    securityTools: "Security Tools",
    ourMission: "Our mission is to protect digital infrastructure",
    features: "Features",
    disclaimer: "Disclaimer",
    legal: "Legal",
    help: "Help",
    resources: "Resources"
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
    translation: "अनुवाद",
    login: "लॉगिन",
    register: "रजिस्टर",
    languageChanged: "भाषा हिंदी पर सेट की गई है",
    headerTitle: "साइबर सुरक्षा प्रणाली",
    developerInfo: "सईकौशिक नालुबोला द्वारा विकसित",
    digitalIndia: "एक डिजिटल इंडिया पहल",
    securityTools: "सुरक्षा उपकरण",
    ourMission: "हमारा मिशन डिजिटल इंफ्रास्ट्रक्चर की रक्षा करना है",
    features: "विशेषताएं",
    disclaimer: "अस्वीकरण",
    legal: "कानूनी",
    help: "सहायता",
    resources: "संसाधन"
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
    translation: "மொழிபெயர்ப்பு",
    login: "உள்நுழைய",
    register: "பதிவு செய்யவும்",
    languageChanged: "மொழி தமிழில் அமைக்கப்பட்டுள்ளது",
    headerTitle: "சைபர் பாதுகாப்பு அமைப்பு",
    developerInfo: "சாய்கௌஷிக் நலுபோலாவால் உருவாக்கப்பட்டது",
    digitalIndia: "ஒரு டிஜிட்டல் இந்தியா முன்முயற்சி",
    securityTools: "பாதுகாப்பு கருவிகள்",
    ourMission: "எங்கள் நோக்கம் டிஜிட்டல் உள்கட்டமைப் பாதுகாப்பது",
    features: "அம்சங்கள்",
    disclaimer: "மறுப்பு",
    legal: "சட்டப்பூர்வ",
    help: "உதவி",
    resources: "வளங்கள்"
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
    translation: "అనువాదం",
    login: "లాగిన్",
    register: "నోందణి",
    languageChanged: "భాష తెలుగులో సెట్ చేయబడింది",
    headerTitle: "సైబర్ భద్రతా వ్యవస్థ",
    developerInfo: "సాయికౌశిక్ నాలుబోల ద్వారా అభివృద్ధి చేయబడింది",
    digitalIndia: "డిజిటల్ ఇండియా చొరవ",
    securityTools: "భద్రతా సాధనాలు",
    ourMission: "మా లక్ష్యం డిజిటల్ మూলಸౌకర్�వను రక్షించడం",
    features: "ఫీచర్లు",
    disclaimer: "డిస్కెయిమర్",
    legal: "చట్టపరమైన",
    help: "సహాయం",
    resources: "వనరులు"
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
    translation: "অনুবাদ",
    login: "লগইন",
    register: "নিবন্ধন",
    languageChanged: "ভাষা বাংলা সেট করা হয়েছে",
    headerTitle: "সাইবার নিরাপত্তা সিস্টেম",
    developerInfo: "সাইকৌশিক নালুবোলা দ্বারা বিকশিত",
    digitalIndia: "একটি ডিজিটাল ইন্ত্য উদ্যোগ",
    securityTools: "নিরাপত্তা টুলস",
    ourMission: "আমাদের মিশন ডিজিটাল অবকাঠামো রক্ষা করা",
    features: "বৈশিষ্ট্য",
    disclaimer: "অস্বীকৃতি",
    legal: "আইনি",
    help: "সাহায্য",
    resources: "সম্পদ"
  },
  "മലയാളം": {
    home: "ഹോം",
    scan: "പ്രൊഫൈൽ സ്കാൻ",
    dashboard: "ഡാഷ്ബോർഡ്",
    blockchain: "ബ്ലോക്ക്ചെയിൻ രജിസ്റ്റരി",
    reports: "റിപ്പോർട്ടുകൾ",
    alerts: "അലേർട്ടുകൾ",
    about: "ഞങ്ങളെക്കുറിച്ച്",
    contact: "ബന്ധപ്പെടുക",
    tools: "ഉപകരണങ്ങൾ",
    translation: "വിവർത്തനം",
    login: "ലോഗിൻ",
    register: "രജിസ്റ്റർ",
    languageChanged: "ഭാഷ മലയാളത്തിലേക്ക് സജ്ജമാക്കിയിരിക്കുന്നു",
    headerTitle: "സൈബർ സുരക്ഷാ സംവിധാനം",
    developerInfo: "സായ്കൗഷിക് ನಾಲುಬೋಲ വികസിപ്പിച്ചത്",
    digitalIndia: "ഒരു ഡിജിറ്റൽ ഇംണ്യ സംരംഭം",
    securityTools: "സുരക്ഷാ ഉപകരണങ്ങൾ",
    ourMission: "ഡിജിറ്റൽ ഇൻഫ്രാസ്ട്രക്ചർ സംരക്ഷിക്കുക എന്നതാണ് ഞങ്ങളുടെ ദൗത്യം",
    features: "സവിശേഷതകൾ",
    disclaimer: "നിരാകരണം",
    legal: "നിയമപരമായ",
    help: "സഹായം",
    resources: "വിഭവങ്ങൾ"
  },
  "ಕನ್ನಡ": {
    home: "ಮುಖಪುಟ",
    scan: "ಪ್ರೊಫೈಲ್ ಸ್ಕ್ಯಾನ್",
    dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    blockchain: "ಬ್ಲಾಕ್‌ಚೈನ್ ರಿಜಿಸ್ಟ್ರಿ",
    reports: "ವರದಿಗಳು",
    alerts: "ಎಚ್ಚರಿಕೆಗಳು",
    about: "ನಮ್ಮ ಬಗ್ಗೆ",
    contact: "ಸಂಪರ್ಕಿಸಿ",
    tools: "ಪರಿಕ��ಗಳು",
    translation: "ಅನುವಾದ",
    login: "ಲಾಗಿನ್",
    register: "ನೋಂದಣಿ",
    languageChanged: "ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಹೊಂದಿಸಲಾಗಿದೆ",
    headerTitle: "ಸೈಬರ್ ಭದ್ರತಾ ವ್ಯವಸ್ಥೆ",
    developerInfo: "ಸಾಯಿಕೌಶಿಕ್ ನಲುಬೋಲಾ ಅವರಿಂದ ಅಭಿವೃದ್ಧಿಪಡಿಸಲಾಗಿದೆ",
    digitalIndia: "ಡಿಜಿಟಲ್ ಇಂಡಿಯಾ ಉಪಕ್ರಮ",
    securityTools: "ಭದ್ರತಾ ಪರಿಕರಗಳು",
    ourMission: "ಡಿಜಿಟಲ್ ಮೂಲಸೌಕರ್ಯವನ್ನು ರಕ್ಷಿಸುವುದು ನಮ್ಮ ಗುರಿ",
    features: "ವೈಶಿಷ್ಟ್ಯಗಳು",
    disclaimer: "ಹಕ್ಕುತ್ಯಾಗ",
    legal: "ಕಾನೂನು",
    help: "ಸಹಾಯ",
    resources: "ಸಂಪನ್ಮೂಲಗಳು"
  },
  "ଓଡ଼ିଆ": {
    home: "ମୁଖ୍ୟପୃଷ୍ଠା",
    scan: "ପ୍ରୋଫାଇଲ୍ ସ୍କାନ୍",
    dashboard: "ଡ୍ୟାସବୋର୍ଡ",
    blockchain: "ବ୍ଲକଚେନ୍ ରେଜିଷ୍ଟ୍ରି",
    reports: "ରିପୋର୍ଟ",
    alerts: "ଆଲର୍ଟ",
    about: "ଆମ ବିଷୟରେ",
    contact: "ଯୋଗାଯୋଗ",
    tools: "ଉପକରଣ",
    translation: "ଅନୁବାଦ",
    login: "ଲଗଇନ୍",
    register: "ପଞ୍ଜୀକରଣ",
    languageChanged: "ଭାଷା ଓଡ଼ିଆରେ ସେଟ୍ କରାଯାଇଛି",
    headerTitle: "ସାଇବର ସୁରକ୍ଷା ସିଷ୍ଟମ୍",
    developerInfo: "ସାଇକୌଶିକ୍ ନାଲୁବୋଲ ଦ୍ୱାରା ବିକଶିତ",
    digitalIndia: "ଏକ ଡିଜିଟାଲ୍ ଇଣ୍ଡିଆ ପ୍ରୟାସ",
    securityTools: "ସୁରକ୍ଷା ଉପକରଣ",
    ourMission: "ଆମର ଲକ୍ଷ୍ୟ ଡିଜିଟାଲ୍ ଇନଫ୍ରାଷ୍ଟ୍ରକଚର୍ ସୁରକ୍ଷା କରିବା",
    features: "ବୈଶିଷ୍ଟ୍ୟଗୁଡିକ",
    disclaimer: "ଅସ୍ୱୀକୃତି",
    legal: "ଆଇନଗତ",
    help: "ସାହାୟ୍ୟ",
    resources: "ସମ୍ବଳ"
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

  const showAuthButtons = !['/login', '/register'].includes(location.pathname);

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    
    setText(translations[language as keyof typeof translations] || translations.English);
    
    toast({
      title: "Language Changed",
      description: translations[language as keyof typeof translations]?.languageChanged || `Language has been set to ${language}`,
      duration: 3000,
    });
    
    const event = new CustomEvent('languageChange', { detail: { language, translations: translations[language as keyof typeof translations] } });
    window.dispatchEvent(event);
    
    console.log(`Language changed to: ${language}`);
  };

  useEffect(() => {
    setText(translations[currentLanguage as keyof typeof translations] || translations.English);
  }, [currentLanguage]);

  return (
    <header className="w-full bg-india-navyBlue text-white shadow-lg">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="mr-3 relative group">
              <div className="absolute inset-0 bg-india-saffron rounded-full opacity-20 animate-pulse group-hover:opacity-40 transition-opacity"></div>
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
                {currentLanguage === "English" ? "साइबर सुरक्षा प्रणाली" : text.headerTitle}
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
              <DropdownMenuItem onClick={() => handleLanguageChange("తెలుగు")}>తెలుగు</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("বাংলা")}>বাংলা</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("മലയാളം")}>മലയാളം</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("ಕನ್ನಡ")}>ಕನ್ನಡ</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("ଓଡ଼ିଆ")}>ଓଡ଼ିଆ</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="bg-transparent border-white/20 text-white hover:bg-white/10 hidden md:flex">
                <FileText className="mr-1 h-4 w-4" />
                <span>{text.resources}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white w-56">
              <DropdownMenuLabel>Resources</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Documentation</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  <span>Guidelines</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Wrench className="mr-2 h-4 w-4" />
                  <span>API Reference</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Community</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
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

      <div className="relative bg-white/10 text-white before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-india-saffron after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-india-green">
        <nav className="container mx-auto flex overflow-x-auto scrollbar-none">
          <Link to="/" className="px-3 py-2 hover:bg-white/10 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{text.home}</Link>
          <Link to="/scan" className="px-3 py-2 hover:bg-white/10 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{text.scan}</Link>
          <Link to="/dashboard" className="px-3 py-2 hover:bg-white/10 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{text.dashboard}</Link>
          <Link to="/blockchain" className="px-3 py-2 hover:bg-white/10 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{text.blockchain}</Link>
          <Link to="/reports" className="px-3 py-2 hover:bg-white/10 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{text.reports}</Link>
          <Link to="/alerts" className="px-3 py-2 hover:bg-white/10 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{text.alerts}</Link>
          <Link to="/tools" className="px-3 py-2 hover:bg-white/10 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{text.tools}</Link>
          <Link to="/translation" className="px-3 py-2 hover:bg-white/10 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{text.translation}</Link>
          <Link to="/about" className="px-3 py-2 hover:bg-white/10 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{text.about}</Link>
          <Link to="/contact" className="px-3 py-2 hover:bg-white/10 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{text.contact}</Link>
          <Link to="/#disclaimer" className="px-3 py-2 hover:bg-white/10 font-medium text-xs md:text-sm whitespace-nowrap transition-colors">{text.disclaimer}</Link>
        </nav>
      </div>

      {mobileMenuOpen && isMobile && (
        <div className="md:hidden fixed inset-0 z-50 bg-india-navyBlue bg-opacity-98 flex flex-col">
          <div className="flex justify-end p-4">
            <Button variant="ghost" onClick={toggleMobileMenu} className="text-white hover:bg-white/10">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col items-center py-6 space-y-5">
            <Link to="/" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.home}</Link>
            <Link to="/scan" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.scan}</Link>
            <Link to="/dashboard" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.dashboard}</Link>
            <Link to="/blockchain" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.blockchain}</Link>
            <Link to="/reports" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.reports}</Link>
            <Link to="/alerts" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.alerts}</Link>
            <Link to="/tools" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.tools}</Link>
            <Link to="/translation" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.translation}</Link>
            <Link to="/about" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.about}</Link>
            <Link to="/contact" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.contact}</Link>
            <Link to="/#disclaimer" className="text-white text-lg font-medium hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>{text.disclaimer}</Link>
            
            <div className="border-t border-white/10 w-3/4 my-2"></div>
            
            <div className="text-white text-lg font-medium hover:text-india-saffron transition-colors">
              {text.resources}
            </div>
            <div className="flex flex-col items-center space-y-4 text-sm text-white/80">
              <Link to="/documentation" className="hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>Documentation</Link>
              <Link to="/guidelines" className="hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>Guidelines</Link>
              <Link to="/api" className="hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>API Reference</Link>
              <Link to="/community" className="hover:text-india-saffron transition-colors" onClick={toggleMobileMenu}>Community</Link>
            </div>
            
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
