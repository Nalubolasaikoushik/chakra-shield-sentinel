
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'English' | 'हिंदी'; // We'll start with English and Hindi
export type TranslationKey = string;

// Define the shape of our translations
export interface Translations {
  [key: TranslationKey]: string;
}

// Define the context type
interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
  translations: Record<Language, Translations>;
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'English',
  setLanguage: () => {},
  t: (key) => key,
  translations: {
    'English': {},
    'हिंदी': {}
  }
});

// English translations (default language)
const englishTranslations: Translations = {
  // Navigation
  'home': 'Home',
  'scan': 'Scan Profile',
  'dashboard': 'Dashboard',
  'blockchain': 'Blockchain Registry',
  'reports': 'Reports',
  'alerts': 'Alerts',
  'about': 'About',
  'contact': 'Contact',
  'tools': 'Tools',
  'translation': 'Translation',
  'login': 'Login',
  'register': 'Register',
  'resources': 'Resources',
  'features': 'Features',
  'disclaimer': 'Disclaimer',
  
  // Common phrases
  'languageChanged': 'Language has been set to English',
  'headerTitle': 'Cyber Security System',
  'digitalIndia': 'A Digital India Initiative',
  'securityTools': 'Security Tools',
  'ourMission': 'Our mission is to protect digital infrastructure',
  'legal': 'Legal',
  'help': 'Help',
  
  // Footer
  'allRightsReserved': 'All rights reserved',
  'terms': 'Terms',
  'privacy': 'Privacy',
  'security': 'Security',
  'accessibility': 'Accessibility',
  'platform': 'Platform',
  'profileScanner': 'Profile Scanner',
  'agencyDashboard': 'Agency Dashboard',
  'blockchainRegistry': 'Blockchain Registry',
  'alertsPage': 'Alerts',
  'securityTools': 'Security Tools',
  'documentation': 'Documentation',
  'forAgencies': 'For Agencies',
  'apiIntegration': 'API Integration',
  'researchPapers': 'Research Papers',
  'contactUs': 'Contact Us',
  'termsOfService': 'Terms of Service',
  'privacyPolicy': 'Privacy Policy',
  'support': 'Support',
  'helpline': 'Helpline',
  'cyberSurakshaProgram': 'Cyber Suraksha Program',
  'digiLocker': 'DigiLocker',
  'umangApp': 'UMANG App',
  'learnDigitalIndia': 'Learn more about Digital India initiatives',
  
  // Hero Section
  'heroTitle': 'Protecting Digital India with Advanced Cyber Security',
  'heroSubtitle': 'AI-powered threat detection and prevention system',
  'getStarted': 'Get Started',
  'learnMore': 'Learn More',
  
  // Features Section
  'featuresTitle': 'Core Security Features',
  'realTimeMonitoring': 'Real-Time Monitoring',
  'threatIntelligence': 'Threat Intelligence',
  'behaviorAnalysis': 'Behavior Analysis',
  'securityAssessment': 'Security Assessment',
  'deepfakeDetection': 'Deepfake Detection',
  'networkMapping': 'Network Mapping',
  'alertSystem': 'Alert System',
  'adminDashboard': 'Admin Dashboard',
  'crossPlatformMonitor': 'Cross-Platform Monitor',
  'multilingualEngine': 'Multilingual Engine',
  
  // Translation Page
  'translationTitle': 'ChakraShield Translation Service',
  'translationSubtitle': 'Break language barriers with our AI-powered translation and speech services',
  'readAloud': 'Read this aloud',
  'universalTranslation': 'Universal Translation',
  'translateText': 'Translate text between multiple Indian languages and English',
  'sourceLanguage': 'Source Language',
  'targetLanguage': 'Target Language',
  'enterTextToTranslate': 'Enter text to translate...',
  'translate': 'Translate',
  'translating': 'Translating...',
  'speechToText': 'Speech to Text',
  'textToSpeech': 'Text to Speech'
};

// Hindi translations
const hindiTranslations: Translations = {
  // Navigation
  'home': 'होम',
  'scan': 'प्रोफाइल स्कैन',
  'dashboard': 'डैशबोर्ड',
  'blockchain': 'ब्लॉकचेन रजिस्ट्री',
  'reports': 'रिपोर्ट्स',
  'alerts': 'अलर्ट',
  'about': 'परिचय',
  'contact': 'संपर्क',
  'tools': 'उपकरण',
  'translation': 'अनुवाद',
  'login': 'लॉगिन',
  'register': 'रजिस्टर',
  'resources': 'संसाधन',
  'features': 'विशेषताएं',
  'disclaimer': 'अस्वीकरण',
  
  // Common phrases
  'languageChanged': 'भाषा हिंदी पर सेट की गई है',
  'headerTitle': 'साइबर सुरक्षा प्रणाली',
  'digitalIndia': 'एक डिजिटल इंडिया पहल',
  'securityTools': 'सुरक्षा उपकरण',
  'ourMission': 'हमारा मिशन डिजिटल इंफ्रास्ट्रक्चर की रक्षा करना है',
  'legal': 'कानूनी',
  'help': 'सहायता',
  
  // Footer
  'allRightsReserved': 'सर्वाधिकार सुरक्षित',
  'terms': 'नियम',
  'privacy': 'गोपनीयता',
  'security': 'सुरक्षा',
  'accessibility': 'पहुंच',
  'platform': 'प्लेटफॉर्म',
  'profileScanner': 'प्रोफाइल स्कैनर',
  'agencyDashboard': 'एजेंसी डैशबोर्ड',
  'blockchainRegistry': 'ब्लॉकचेन रजिस्ट्री',
  'alertsPage': 'अलर्ट',
  'securityTools': 'सुरक्षा उपकरण',
  'documentation': 'दस्तावेज़ीकरण',
  'forAgencies': 'एजेंसियों के लिए',
  'apiIntegration': 'एपीआई एकीकरण',
  'researchPapers': 'शोध पत्र',
  'contactUs': 'संपर्क करें',
  'termsOfService': 'सेवा की शर्तें',
  'privacyPolicy': 'गोपनीयता नीति',
  'support': 'सहायता',
  'helpline': 'हेल्पलाइन',
  'cyberSurakshaProgram': 'साइबर सुरक्षा कार्यक्रम',
  'digiLocker': 'डिजिलॉकर',
  'umangApp': 'उमंग ऐप',
  'learnDigitalIndia': 'डिजिटल इंडिया पहल के बारे में अधिक जानें',
  
  // Hero Section
  'heroTitle': 'उन्नत साइबर सुरक्षा के साथ डिजिटल इंडिया की रक्षा',
  'heroSubtitle': 'AI-संचालित खतरा पहचान और रोकथाम प्रणाली',
  'getStarted': 'शुरू करें',
  'learnMore': 'और जानें',
  
  // Features Section
  'featuresTitle': 'मुख्य सुरक्षा विशेषताएं',
  'realTimeMonitoring': 'रीयल-टाइम निगरानी',
  'threatIntelligence': 'खतरा बुद्धिमत्ता',
  'behaviorAnalysis': 'व्यवहार विश्लेषण',
  'securityAssessment': 'सुरक्षा मूल्यांकन',
  'deepfakeDetection': 'डीपफेक पहचान',
  'networkMapping': 'नेटवर्क मैपिंग',
  'alertSystem': 'अलर्ट सिस्टम',
  'adminDashboard': 'एडमिन डैशबोर्ड',
  'crossPlatformMonitor': 'क्रॉस-प्लेटफॉर्म मॉनिटर',
  'multilingualEngine': 'बहुभाषी इंजन',
  
  // Translation Page
  'translationTitle': 'चक्रशील्ड अनुवाद सेवा',
  'translationSubtitle': 'हमारी AI-संचालित अनुवाद और भाषण सेवाओं के साथ भाषा बाधाओं को तोड़ें',
  'readAloud': 'जोर से पढ़ें',
  'universalTranslation': 'सार्वभौमिक अनुवाद',
  'translateText': 'कई भारतीय भाषाओं और अंग्रेजी के बीच पाठ का अनुवाद करें',
  'sourceLanguage': 'स्रोत भाषा',
  'targetLanguage': 'लक्ष्य भाषा',
  'enterTextToTranslate': 'अनुवाद करने के लिए पाठ दर्ज करें...',
  'translate': 'अनुवाद करें',
  'translating': 'अनुवाद हो रहा है...',
  'speechToText': 'भाषण से पाठ',
  'textToSpeech': 'पाठ से भाषण'
};

interface LanguageProviderProps {
  children: ReactNode;
}

// Create a provider component
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('English');
  
  const translations: Record<Language, Translations> = {
    'English': englishTranslations,
    'हिंदी': hindiTranslations
  };
  
  // Function to get translation
  const t = (key: TranslationKey): string => {
    return translations[currentLanguage][key] || translations['English'][key] || key;
  };
  
  // Function to set language
  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    // Dispatch event for components that don't use the context
    const event = new CustomEvent('languageChange', { 
      detail: { language, translations: translations[language] } 
    });
    window.dispatchEvent(event);
  };
  
  // Load saved language preference from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'English' || savedLanguage === 'हिंदी')) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);
  
  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);
  
  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
