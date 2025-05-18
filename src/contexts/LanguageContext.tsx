import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 
  'English' | 
  'हिंदी' | // Hindi 
  'தமிழ்' | // Tamil
  'తెలుగు' | // Telugu
  'বাংলা' | // Bengali
  'ಕನ್ನಡ' | // Kannada
  'മലയാളം' | // Malayalam
  'اردو' | // Urdu
  'ગુજરાતી'; // Gujarati

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
  isRTL: boolean;
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'English',
  setLanguage: () => {},
  t: (key) => key,
  translations: {
    'English': {},
    'हिंदी': {},
    'தமிழ்': {},
    'తెలుగు': {},
    'বাংলা': {},
    'ಕನ್ನಡ': {},
    'മലയാളം': {},
    'اردو': {},
    'ગુજરાતી': {}
  },
  isRTL: false
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
  'securityToolsLink': 'Security Tools',
  'ourMission': 'Our mission is to protect digital infrastructure',
  'legal': 'Legal',
  'help': 'Help',
  'supportingDigitalBharat': 'Supporting Digital Bharat',
  
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
  'textToSpeech': 'Text to Speech',
  
  // New translations for enhanced components
  'languageSelector': 'Select Language',
  'darkMode': 'Dark Mode',
  'lightMode': 'Light Mode',
  'reportFakeAccount': 'Report Fake Account',
  'loading': 'Loading...',
  'error': 'Error',
  'success': 'Success',
  'profileAnalyzed': 'Last Analyzed Profile',
  'viewDetails': 'View Details',
  'mobileMenu': 'Menu',
  
  // Form related
  'username': 'Username',
  'email': 'Email',
  'password': 'Password',
  'confirmPassword': 'Confirm Password',
  'showPassword': 'Show Password',
  'hidePassword': 'Hide Password',
  'rememberMe': 'Remember Me',
  'forgotPassword': 'Forgot Password?',
  'loginButton': 'Login',
  'registerButton': 'Register',
  'registerNow': 'Register Now',
  'alreadyHaveAccount': 'Already have an account?',
  'loginNow': 'Login Now',
  'loginWith': 'Login with',
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
  'securityToolsLink': 'सुरक्षा उपकरण',
  'ourMission': 'हमारा मिशन डिजिटल इंफ्रास्ट्रक्चर की रक्षा करना है',
  'legal': 'कानूनी',
  'help': 'सहायता',
  'supportingDigitalBharat': 'डिजिटल भारत का समर्थन करना',
  
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
  'textToSpeech': 'पाठ से भाषण',
  
  // New translations for enhanced components
  'languageSelector': 'भाषा चुनें',
  'darkMode': 'डार्क मोड',
  'lightMode': 'लाइट मोड',
  'reportFakeAccount': 'फर्जी अकाउंट की रिपोर्ट करें',
  'loading': 'लोड हो रहा है...',
  'error': 'त्रुटि',
  'success': 'सफलता',
  'profileAnalyzed': 'अंतिम विश्लेषित प्रोफ़ाइल',
  'viewDetails': 'विवरण देखें',
  'mobileMenu': 'मेन्यू',
  
  // Form related
  'username': 'उपयोगकर्ता नाम',
  'email': 'ईमेल',
  'password': 'पासवर्ड',
  'confirmPassword': 'पासवर्ड की पुष्टि करें',
  'showPassword': 'पासवर्ड दिखाएं',
  'hidePassword': 'पासवर्ड छिपाएं',
  'rememberMe': 'मुझे याद रखें',
  'forgotPassword': 'पासवर्ड भूल गए?',
  'loginButton': 'लॉगिन',
  'registerButton': 'रजिस्टर',
  'registerNow': 'अभी रजिस्टर करें',
  'alreadyHaveAccount': 'पहले से खाता है?',
  'loginNow': 'अभी लॉगिन करें',
  'loginWith': 'इसके साथ लॉगिन करें',
};

// Tamil translations
const tamilTranslations: Translations = {
  // Navigation
  'home': 'முகப்பு',
  'scan': 'சுயவிவர ஸ்கேன்',
  'dashboard': 'டாஷ்போர்டு',
  'blockchain': 'பிளாக்செயின் பதிவேடு',
  'reports': 'அறிக்கைகள்',
  'alerts': 'எச்சரிக்கைகள்',
  'about': 'எங்களை பற்றி',
  'contact': 'தொடர்பு',
  'tools': 'கருவிகள்',
  'translation': 'மொழிபெயர்ப்பு',
  'login': 'உள்நுழைய',
  'register': 'பதிவு செய்ய',
  'resources': 'வளங்கள்',
  'features': 'விசேஷங்கள்',
  'disclaimer': 'மறுப்பு',
  
  // Common phrases
  'languageChanged': 'மொழி தமிழாக அமைக்கப்பட்டுள்ளது',
  'headerTitle': 'சைபர் பாதுகாப்பு அமைப்பு',
  'digitalIndia': 'டிஜிட்டல் இந்தியா முன்முயற்சி',
  
  // New translations
  'languageSelector': 'மொழியை தேர்ந்தெடுக்கவும்',
  'darkMode': 'இருள் பயன்முறை',
  'lightMode': 'ஒளி பயன்முறை',
  'reportFakeAccount': 'போலி கணக்கை புகாரளிக்க',
  'loading': 'ஏற்றுகிறது...',
  'error': 'பிழை',
  'success': 'வெற்றி',
  'profileAnalyzed': 'கடைசியாக ஆய்வு செய்யப்பட்ட சுயவிவரம்',
  'viewDetails': 'விவரங்களை பார்க்க',
  'mobileMenu': 'மெனு',
  
  // Form related
  'username': 'பயனர்பெயர்',
  'email': 'மின்னஞ்சல்',
  'password': 'கடவுச்சொல்',
  'confirmPassword': 'கடவுச்சொல்லை உறுதிப்படுத்தவும்',
  'showPassword': 'கடவுச்சொல்லைக் காட்டு',
  'hidePassword': 'கடவுச்சொல்லை மறைக்க',
  'rememberMe': 'என்னை நினைவில் கொள்ளுங்கள்',
  'forgotPassword': 'கடவுச்சொல் மறந்துவிட்டதா?',
  'loginButton': 'உள்நுழைய',
  'registerButton': 'பதிவு செய்ய',
  'registerNow': 'இப்போது பதிவு செய்யுங்கள்',
  'alreadyHaveAccount': 'இப்போது கணக்கு உள்ளதா?',
  'loginNow': 'இப்போது உள்நுழைய',
  'loginWith': 'இதன் மூலம் உள்நுழைய',
};

// Telugu translations
const teluguTranslations: Translations = {
  // Navigation
  'home': 'హోమ్',
  'scan': 'ప్రొఫైల్ స్కాన్',
  'dashboard': 'డాష్‌బోర్డ్',
  'blockchain': 'బ్లాక్‌చెయిన్ రిజిస్ట్రీ',
  'reports': 'నివేదికలు',
  'alerts': 'హెచ్చరికలు',
  'about': 'మా గురించి',
  'contact': 'సంప్రదించండి',
  'tools': 'పనిముట్లు',
  'translation': 'అనువాదం',
  'login': 'లాగిన్',
  'register': 'నమోదు',
  'resources': 'వనరులు',
  'features': 'ఫీచర్లు',
  'disclaimer': 'నిరాకరణ',
  
  // Common phrases
  'languageChanged': 'భాష తెలుగుగా సెట్ చేయబడింది',
  'headerTitle': 'సైబర్ భద్రతా వ్యవస్థ',
  'digitalIndia': 'డిజిటల్ ఇండియా చొరవ',
  
  // New translations
  'languageSelector': 'భాష ఎంచుకోండి',
  'darkMode': 'డార్క్ మోడ్',
  'lightMode': 'లైట్ మోడ్',
  'reportFakeAccount': 'నకిలీ ఖాతాను నివేదించండి',
  'loading': 'లోడ్ అవుతోంది...',
  'error': 'లోపం',
  'success': 'విజయం',
  'profileAnalyzed': 'చివరిగా విశ్లేషించబడిన ప్రొఫైల్',
  'viewDetails': 'వివరాలు చూడండి',
  'mobileMenu': 'మెను',
  
  // Form related
  'username': 'వినియోగదారు పేరు',
  'email': 'ఇమెయిల్',
  'password': 'పాస్‌వర్డ్',
  'confirmPassword': 'పాస్‌వర్డ్‌ని నిర్ధారించండి',
  'showPassword': 'పాస్‌వర్డ్‌ని చూపించు',
  'hidePassword': 'పాస్‌వర్డ్‌ని దాచిపెట్టు',
  'rememberMe': 'నన్ను గుర్తుంచుకో',
  'forgotPassword': 'పాస్‌వర్డ్ మర్చిపోయారా?',
  'loginButton': 'లాగిన్',
  'registerButton': 'నమోదు',
  'registerNow': 'ఇప్పుడు నమోదు చేయండి',
  'alreadyHaveAccount': 'ఇప్పటికే ఖాతా ఉందా?',
  'loginNow': 'ఇప్పుడు లాగిన్ చేయండి',
  'loginWith': 'దీనితో లాగిన్ చేయండి',
};

// Bengali translations
const bengaliTranslations: Translations = {
  // Navigation
  'home': 'হোম',
  'scan': 'প্রোফাইল স্ক্যান',
  'dashboard': 'ড্যাশবোর্ড',
  'blockchain': 'ব্লকচেইন রেজিস্ট্রি',
  'reports': 'রিপোর্ট',
  'alerts': 'সতর্কতা',
  'about': 'আমাদের সম্পর্কে',
  'contact': 'যোগাযোগ',
  'tools': 'টুলস',
  'translation': 'অনুবাদ',
  'login': 'লগইন',
  'register': 'নিবন্ধন',
  'resources': 'সম্পদ',
  'features': 'বৈশিষ্ট্য',
  'disclaimer': 'দাবিত্যাগ',
  
  // Common phrases
  'languageChanged': 'ভাষা বাংলায় সেট করা হয়েছে',
  'headerTitle': 'সাইবার নিরাপত্তা সিস্টেম',
  'digitalIndia': 'একটি ডিজিটাল ভারত উদ্যোগ',
  
  // New translations
  'languageSelector': 'ভাষা নির্বাচন করুন',
  'darkMode': 'ডার্ক মোড',
  'lightMode': 'লাইট মোড',
  'reportFakeAccount': 'ভুয়া অ্যাকাউন্ট রিপোর্ট করুন',
  'loading': 'লোড হচ্ছে...',
  'error': 'ত্রুটি',
  'success': 'সাফল্য',
  'profileAnalyzed': 'সর্বশেষ বিশ্লেষিত প্রোফাইল',
  'viewDetails': 'বিস্তারিত দেখুন',
  'mobileMenu': 'মেনু',
  
  // Form related
  'username': 'ইউজারনেম',
  'email': 'ইমেইল',
  'password': 'পাসওয়ার্ড',
  'confirmPassword': 'পাসওয়ার্ড নিশ্চিত করুন',
  'showPassword': 'পাসওয়ার্ড দেখান',
  'hidePassword': 'পাসওয়ার্ড লুকান',
  'rememberMe': 'আমাকে মনে রাখুন',
  'forgotPassword': 'পাসওয়ার্ড ভুলে গেছেন?',
  'loginButton': 'লগইন',
  'registerButton': 'নিবন্ধন',
  'registerNow': 'এখনই নিবন্ধন করুন',
  'alreadyHaveAccount': 'ইতিমধ্যে একাউন্ট আছে?',
  'loginNow': 'এখনই লগইন করুন',
  'loginWith': 'এর সাথে লগইন করুন',
};

// Kannada translations
const kannadaTranslations: Translations = {
  // Navigation
  'home': 'ಮುಖಪುಟ',
  'scan': 'ಪ್ರೊಫೈಲ್ ಸ್ಕ್ಯಾನ್',
  'dashboard': 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
  'blockchain': 'ಬ್ಲಾಕ್‌ಚೈನ್ ರಿಜಿಸ್ಟ್ರಿ',
  'reports': 'ವರದಿಗಳು',
  'alerts': 'ಎಚ್ಚರಿಕೆಗಳು',
  'about': 'ನಮ್ಮ ಬಗ್ಗೆ',
  'contact': 'ಸಂಪರ್ಕ',
  'tools': 'ಉಪಕರಣಗಳು',
  'translation': 'ಅನುವಾದ',
  'login': 'ಲಾಗಿನ್',
  'register': 'ನೋಂದಣಿ',
  'resources': 'ಸಂಪನ್ಮೂಲಗಳು',
  'features': 'ವೈಶಿಷ್ಟ್ಯಗಳು',
  'disclaimer': 'ಹಕ್ಕುತ್ಯಾಗ',
  
  // Common phrases
  'languageChanged': 'ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಹೊಂದಿಸಲಾಗಿದೆ',
  'headerTitle': 'ಸೈಬರ್ ಸುರಕ್ಷತಾ ವ್ಯವಸ್ಥೆ',
  'digitalIndia': 'ಡಿಜಿಟಲ್ ಇಂಡಿಯಾ ಉಪಕ್ರಮ',
  
  // New translations
  'languageSelector': 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
  'darkMode': 'ಡಾರ್ಕ್ ಮೋಡ್',
  'lightMode': 'ಲೈಟ್ ಮೋಡ್',
  'reportFakeAccount': 'ನಕಲಿ ಖಾತೆಯನ್ನು ವರದಿ ಮಾಡಿ',
  'loading': 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
  'error': 'ದೋಷ',
  'success': 'ಯಶಸ್ಸು',
  'profileAnalyzed': 'ಕೊನೆಯದಾಗಿ ವಿಶ್ಲೇಷಿಸಿದ ಪ್ರೊಫೈಲ್',
  'viewDetails': 'ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
  'mobileMenu': 'ಮೆನು',
  
  // Form related
  'username': 'ಬಳಕೆದಾರಹೆಸರು',
  'email': 'ಇಮೇಲ್',
  'password': 'ಪಾಸ್‌ವರ್ಡ್',
  'confirmPassword': 'ಪಾಸ್‌ವರ್ಡ್ ಖಚಿತಪಡಿಸಿ',
  'showPassword': 'ಪಾಸ್‌ವರ್ಡ್ ತೋರಿಸಿ',
  'hidePassword': 'ಪಾಸ್‌ವರ್ಡ್ ಮರೆಮಾಡಿ',
  'rememberMe': 'ನನ್ನನ್ನು ನೆನಪಿಟ್ಟುಕೊಳ್ಳಿ',
  'forgotPassword': 'ಪಾಸ್‌ವರ್ಡ್ ಮರೆಯುವಿರಾ?',
  'loginButton': 'ಲಾಗಿನ್',
  'registerButton': 'ನೋಂದಣಿ',
  'registerNow': 'ಈಗ ನೋಂದಣಿ ಮಾಡಿ',
  'alreadyHaveAccount': 'ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?',
  'loginNow': 'ಈಗ ಲಾಗಿನ್ ಮಾಡಿ',
  'loginWith': 'ಇದರೊಂದಿಗೆ ಲಾಗಿನ್ ಮಾಡಿ',
};

// Malayalam translations
const malayalamTranslations: Translations = {
  // Navigation
  'home': 'ഹോം',
  'scan': 'പ്രൊഫൈൽ സ്കാൻ',
  'dashboard': 'ഡാഷ്ബോർഡ്',
  'blockchain': 'ബ്ലോക്ക്ചെയിൻ രജിസ്ട്രി',
  'reports': 'റിപ്പോർട്ടുകൾ',
  'alerts': 'അലേർട്ടുകൾ',
  'about': 'ഞങ്ങളെ കുറിച്ച്',
  'contact': 'ബന്ധപ്പെടുക',
  'tools': 'ടൂളുകൾ',
  'translation': 'പരിഭാഷ',
  'login': 'ലോഗിൻ',
  'register': 'രജിസ്റ്റർ',
  'resources': 'വിഭവങ്ങൾ',
  'features': 'സവിശേഷതകൾ',
  'disclaimer': 'നിരാകരണം',
  
  // Common phrases
  'languageChanged': 'ഭാഷ മലയാളത്തിലേക്ക് സെറ്റ് ചെയ്തു',
  'headerTitle': 'സൈബർ സുരക്ഷാ സംവിധാനം',
  'digitalIndia': 'ഡിജിറ്റൽ ഇന്ത്യ സംരംഭം',
  
  // New translations
  'languageSelector': 'ഭാഷ തിരഞ്ഞെടുക്കുക',
  'darkMode': 'ഡാർക്ക് മോഡ്',
  'lightMode': 'ലൈറ്റ് മോഡ്',
  'reportFakeAccount': 'വ്യാജ അക്കൗണ്ട് റിപ്പോർട്ട് ചെയ്യുക',
  'loading': 'ലോഡുചെയ്യുന്നു...',
  'error': 'പിശക്',
  'success': 'വിജയം',
  'profileAnalyzed': 'അവസാനം വിശകലനം ചെയ്ത പ്രൊഫൈൽ',
  'viewDetails': 'വിശദാംശങ്ങൾ കാണുക',
  'mobileMenu': 'മെനു',
  
  // Form related
  'username': 'ഉപയോക്തൃനാമം',
  'email': 'ഇമെയിൽ',
  'password': 'പാസ്‌വേഡ്',
  'confirmPassword': 'പാസ്‌വേഡ് സ്ഥിരീകരിക്കുക',
  'showPassword': 'പാസ്‌വേഡ് കാണിക്കുക',
  'hidePassword': 'പാസ്‌വേഡ് മറയ്ക്കുക',
  'rememberMe': 'എന്നെ ഓർക്കുക',
  'forgotPassword': 'പാസ്‌വേഡ് മറന്നോ?',
  'loginButton': 'ലോഗിൻ',
  'registerButton': 'രജിസ്റ്റർ',
  'registerNow': 'ഇപ്പോൾ രജിസ്റ്റർ ചെയ്യുക',
  'alreadyHaveAccount': 'നിങ്ങൾക്ക് ഇതിനകം ഒരു അക്കൗണ്ട് ഉണ്ടോ?',
  'loginNow': 'ഇപ്പോൾ ലോഗിൻ ചെയ്യുക',
  'loginWith': 'ഇതുപയോഗിച്ച് ലോഗിൻ ചെയ്യുക',
};

// Urdu translations
const urduTranslations: Translations = {
  // Navigation
  'home': 'ہوم',
  'scan': 'پروفائل اسکین',
  'dashboard': 'ڈیش بورڈ',
  'blockchain': 'بلاک چین رجسٹری',
  'reports': 'رپورٹس',
  'alerts': 'الرٹس',
  'about': 'ہمارے بارے میں',
  'contact': 'رابطہ',
  'tools': 'ٹولز',
  'translation': 'ترجمہ',
  'login': 'لاگ ان',
  'register': 'رجسٹر',
  'resources': 'وسائل',
  'features': 'خصوصیات',
  'disclaimer': 'اعلان دستبرداری',
  
  // Common phrases
  'languageChanged': 'زبان اردو میں تبدیل کر دی گئی ہے',
  'headerTitle': 'سائبر سیکیورٹی سسٹم',
  'digitalIndia': 'ڈیجیٹل انڈیا اقدام',
  
  // New translations
  'languageSelector': 'زبان منتخب کریں',
  'darkMode': 'ڈارک موڈ',
  'lightMode': 'لائٹ موڈ',
  'reportFakeAccount': 'جعلی اکاؤنٹ کی رپورٹ کریں',
  'loading': 'لوڈ ہو رہا ہے...',
  'error': 'خرابی',
  'success': 'کامیابی',
  'profileAnalyzed': 'آخری تجزیہ شدہ پروفائل',
  'viewDetails': 'تفصیلات دیکھیں',
  'mobileMenu': 'مینو',
  
  // Form related
  'username': 'صارف نام',
  'email': 'ای میل',
  'password': 'پاس ورڈ',
  'confirmPassword': 'پاس ورڈ کی تصدیق کریں',
  'showPassword': 'پاس ورڈ دکھائیں',
  'hidePassword': 'پاس ورڈ چھپائیں',
  'rememberMe': 'مجھے یاد رکھیں',
  'forgotPassword': 'پاس ورڈ بھول گئے؟',
  'loginButton': 'لاگ ان',
  'registerButton': 'رجسٹر',
  'registerNow': 'ابھی رجسٹر کریں',
  'alreadyHaveAccount': 'پہلے سے اکاؤنٹ ہے؟',
  'loginNow': 'ابھی لاگ ان کریں',
  'loginWith': 'کے ساتھ لاگ ان کریں',
};

// Gujarati translations
const gujaratiTranslations: Translations = {
  // Navigation
  'home': 'હોમ',
  'scan': 'પ્રોફાઇલ સ્કેન',
  'dashboard': 'ડેશબોર્ડ',
  'blockchain': 'બ્લોકચેઇન રજિસ્ટ્રી',
  'reports': 'રિપોર્ટ્સ',
  'alerts': 'એલર્ટ્સ',
  'about': 'અમારા વિશે',
  'contact': 'સંપર્ક',
  'tools': 'ટૂલ્સ',
  'translation': 'અનુવાદ',
  'login': 'લોગિન',
  'register': 'રજિસ્ટર',
  'resources': 'સંસાધનો',
  'features': 'વિશેષતાઓ',
  'disclaimer': 'અસ્વીકરણ',
  
  // Common phrases
  'languageChanged': 'ભાષા ગુજરાતી પર સેટ કરવામાં આવી છે',
  'headerTitle': 'સાયબર સુરક્ષા સિસ્ટમ',
  'digitalIndia': 'ડિજિટલ ઇન્ડિયા પહેલ',
  
  // New translations
  'languageSelector': 'ભાષા પસંદ કરો',
  'darkMode': 'ડાર્ક મોડ',
  'lightMode': 'લાઇટ મોડ',
  'reportFakeAccount': 'નકલી એકાઉન્ટની જાણ કરો',
  'loading': 'લોડ થઈ રહ્યું છે...',
  'error': 'ભૂલ',
  'success': 'સફળતા',
  'profileAnalyzed': 'છેલ્લી વિશ્લેષિત પ્રોફાઇલ',
  'viewDetails': 'વિગતો જુઓ',
  'mobileMenu': 'મેનુ',
  
  // Form related
  'username': 'વપરાશકર્તા નામ',
  'email': 'ઇમેઇલ',
  'password': 'પાસવર્ડ',
  'confirmPassword': 'પાસવર્ડની પુષ્ટિ કરો',
  'showPassword': 'પાસવર્ડ બતાવો',
  'hidePassword': 'પાસવર્ડ છુપાવો',
  'rememberMe': 'મને યાદ રાખો',
  'forgotPassword': 'પાસવર્ડ ભૂલી ગયા છો?',
  'loginButton': 'લોગિન',
  'registerButton': 'રજિસ્ટર',
  'registerNow': 'અત્યારે રજિસ્ટર કરો',
  'alreadyHaveAccount': 'પહેલેથી એકાઉન્ટ છે?',
  'loginNow': 'અત્યારે લોગિન કરો',
  'loginWith': 'આની સાથે લોગિન કરો',
};

interface LanguageProviderProps {
  children: ReactNode;
}

// Create a provider component
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('English');
  
  const translations: Record<Language, Translations> = {
    'English': englishTranslations,
    'हिंदी': hindiTranslations,
    'தமிழ்': tamilTranslations,
    'తెలుగు': teluguTranslations,
    'বাংলা': bengaliTranslations,
    'ಕನ್ನಡ': kannadaTranslations,
    'മലയാളം': malayalamTranslations,
    'اردو': urduTranslations,
    'ગુજરાતી': gujaratiTranslations
  };
  
  // Check if language requires RTL (Right to Left) direction
  const isRTL = currentLanguage === 'اردو';
  
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
    
    // Set RTL direction if needed
    document.documentElement.dir = language === 'اردو' ? 'rtl' : 'ltr';
    localStorage.setItem('language', language);
  };
  
  // Load saved language preference from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
      document.documentElement.dir = savedLanguage === 'اردو' ? 'rtl' : 'ltr';
    }
  }, []);
  
  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);
  
  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, translations, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
