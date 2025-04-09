import React, { useEffect, useState, useRef } from 'react';
import { Search, Shield, Database, FileText, BellRing, Cpu, Brain, Volume2, Mic } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AshokChakra from '../AshokChakra';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const chakraInfoRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Text-to-speech functionality
  const speakText = (textToSpeak: string) => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Create a new utterance if one doesn't exist
    if (!speechSynthesisRef.current) {
      speechSynthesisRef.current = new SpeechSynthesisUtterance();
    }

    // Set the text and voice
    speechSynthesisRef.current.text = textToSpeak;
    speechSynthesisRef.current.lang = 'en-US';
    speechSynthesisRef.current.rate = 1;
    speechSynthesisRef.current.pitch = 1;

    // Add event listeners
    speechSynthesisRef.current.onstart = () => setIsSpeaking(true);
    speechSynthesisRef.current.onend = () => setIsSpeaking(false);
    speechSynthesisRef.current.onerror = () => setIsSpeaking(false);

    // Start speaking
    window.speechSynthesis.speak(speechSynthesisRef.current);
  };

  // Speech recognition functionality
  const startSpeechRecognition = () => {
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    // Check if the browser supports speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    // Create a new recognition instance if one doesn't exist
    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';
    }

    // Add event listeners
    recognitionRef.current.onstart = () => setIsListening(true);
    recognitionRef.current.onend = () => setIsListening(false);
    recognitionRef.current.onerror = () => setIsListening(false);
    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      // Navigate based on voice command
      if (transcript.toLowerCase().includes("scan")) {
        window.location.href = "/scan";
      } else if (transcript.toLowerCase().includes("about")) {
        window.location.href = "/about";
      } else if (transcript.toLowerCase().includes("dashboard")) {
        window.location.href = "/dashboard";
      }
    };

    // Start listening
    recognitionRef.current.start();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (speechSynthesisRef.current && isSpeaking) {
        window.speechSynthesis.cancel();
      }
      if (recognitionRef.current && isListening) {
        recognitionRef.current.stop();
      }
    };
  }, [isSpeaking, isListening]);

  const getChakraInfoText = () => {
    return `
      The Ashoka Chakra, a 24-spoked wheel, is a symbol of the eternal law of dharma. 
      Featured prominently in India's national flag, it represents motion, progress, and the dynamism of a peaceful change.
      
      Like the Ashoka Chakra which symbolizes protection and righteous governance in ancient India, ChakraShield 
      embodies the modern digital protection for our nation. The 24 spokes represent our 24/7 vigilance in the 
      cyber realm, constantly spinning to detect threats across social media platforms.
      
      Just as Emperor Ashoka used this symbol to spread his message of peace and harmony across his empire, 
      ChakraShield spreads digital safety and security across India's vast online landscape, protecting citizens 
      from the modern threats of fake accounts, misinformation, and digital fraud.
    `;
  };

  return (
    <div className="min-h-[90vh] relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Improved animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-india-saffron/5 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-india-green/5 animate-pulse" style={{animationDelay: "1.5s"}}></div>
        <div className="absolute top-1/3 left-1/2 w-48 h-48 rounded-full bg-india-navyBlue/3 animate-pulse" style={{animationDelay: "2s"}}></div>
      </div>
      
      {/* Hero main content with fixed padding */}
      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="z-10 max-w-2xl mb-16 lg:mb-0">
          <div className="flex items-center mb-8">
            <div className="h-14 w-4 bg-india-saffron mr-5"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-india-navyBlue slide-in-left">
              AI-Powered Detection of Fake Social Media Accounts
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-700 slide-in-left" style={{ animationDelay: "0.2s" }}>
            ChakraShield uses advanced artificial intelligence to protect digital India from fraudulent social media activities. Government-grade security for our nation's online integrity.
          </p>
          
          <div className="flex flex-wrap gap-5 slide-in-left" style={{ animationDelay: "0.3s" }}>
            <Link to="/scan">
              <Button className="gradient-button text-base px-6 py-6">
                <Search className="mr-2 h-5 w-5" />
                Scan Profile
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-india-navyBlue text-india-navyBlue hover:bg-india-navyBlue/10 text-base px-6 py-6">
                Learn More
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-india-green text-india-green hover:bg-india-green/10 text-base px-6 py-6"
              onClick={() => speakText("ChakraShield uses advanced artificial intelligence to protect digital India from fraudulent social media activities. Government-grade security for our nation's online integrity.")}
            >
              {isSpeaking ? 
                <Volume2 className="mr-2 h-5 w-5 animate-pulse" /> : 
                <Volume2 className="mr-2 h-5 w-5" />
              }
              Read Aloud
            </Button>
            <Button 
              variant="outline" 
              className="border-india-saffron text-india-saffron hover:bg-india-saffron/10 text-base px-6 py-6"
              onClick={startSpeechRecognition}
            >
              {isListening ? 
                <Mic className="mr-2 h-5 w-5 animate-pulse" /> : 
                <Mic className="mr-2 h-5 w-5" />
              }
              Voice Command
            </Button>
          </div>
          
          {/* Trust indicators with improved spacing */}
          <div className="mt-10 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 text-base slide-in-left" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center">
              <Shield className="h-6 w-6 mr-3 text-india-navyBlue" />
              <span>Govt. Secured</span>
            </div>
            <div className="flex items-center">
              <Database className="h-6 w-6 mr-3 text-india-navyBlue" />
              <span>Blockchain Verified</span>
            </div>
            <div className="flex items-center">
              <FileText className="h-6 w-6 mr-3 text-india-navyBlue" />
              <span>Legal Reports</span>
            </div>
          </div>
        </div>
        
        <div className="relative slide-in-right" style={{ animationDelay: "0.3s" }}>
          {/* Enhanced Shield graphic with Chakra animation inside */}
          <div className="relative w-[300px] h-[300px] md:w-[440px] md:h-[440px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-india-saffron/10 via-white to-india-green/10 rounded-full shadow-xl"></div>
            <div className="relative z-10 w-[240px] h-[240px] md:w-[350px] md:h-[350px] bg-white rounded-full shadow-2xl flex items-center justify-center">
              <Shield className="absolute h-20 w-20 md:h-32 md:w-32 text-india-navyBlue opacity-10" />
              <AshokChakra 
                size={isMobile ? 200 : 280} 
                spinning={true} 
                color="#1E3799" 
                strokeWidth={3}
                className="animate-pulse-glow" 
              />
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute inset-0 rounded-full border-8 border-white/40 animate-spin-slow"></div>
            <div className="absolute -inset-5 rounded-full border-2 border-dashed border-india-saffron/40"></div>
            <div className="absolute inset-4 rounded-full border-4 border-india-green/10"></div>
          </div>
          
          {/* Feature cards - improved positioning and design */}
          <div 
            className="absolute -left-20 md:-left-24 top-1/4 glass-card p-4 flex items-center max-w-[180px] shadow-xl rounded-xl slide-in-left transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="bg-red-100 p-3 rounded-full mr-3 flex-shrink-0">
              <BellRing className="h-6 w-6 text-red-500" />
            </div>
            <div className="text-sm">
              <p className="font-semibold">Threat Alerts</p>
              <p className="text-xs text-gray-500">Real-time notifications</p>
            </div>
          </div>
          
          <div 
            className="absolute -right-16 md:-right-20 bottom-1/4 glass-card p-4 flex items-center max-w-[180px] shadow-xl rounded-xl slide-in-right transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="bg-blue-100 p-3 rounded-full mr-3 flex-shrink-0">
              <Search className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-sm">
              <p className="font-semibold">AI Scanner</p>
              <p className="text-xs text-gray-500">Advanced detection</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ashoka Chakra Meaning Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <AshokChakra size="md" className="mr-4" color="#1E3799" />
              <h2 className="text-2xl md:text-3xl font-bold text-india-navyBlue">The Significance of Chakra</h2>
            </div>
            <p className="text-gray-600 max-w-4xl mx-auto slide-in-up">
              Named after the Ashoka Chakra, a powerful symbol in Indian heritage, 
              ChakraShield represents the union of ancient wisdom and cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 border-l-4 border-india-saffron" ref={chakraInfoRef}>
              <h3 className="text-xl font-semibold mb-4 text-india-navyBlue">Historical Significance</h3>
              <p className="text-gray-700 mb-4">
                The Ashoka Chakra, adorning the center of India's national flag, dates back to the 3rd century BCE during Emperor Ashoka's reign. Originally part of the Lion Capital of Ashoka, this 24-spoked wheel symbolizes the wheel of dharma (righteousness) and the cycle of time.
              </p>
              <p className="text-gray-700 mb-4">
                Each spoke represents important principles like love, courage, patience, and truthfulness—values that should guide every citizen's conduct in both personal and public life.
              </p>
              <div className="flex justify-end">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-india-navyBlue text-india-navyBlue hover:bg-india-navyBlue/10"
                  onClick={() => speakText(getChakraInfoText())}
                >
                  {isSpeaking ? 
                    <Volume2 className="mr-2 h-4 w-4 animate-pulse" /> : 
                    <Volume2 className="mr-2 h-4 w-4" />
                  }
                  Read History
                </Button>
              </div>
            </div>
            
            <div className="glass-card p-6 border-l-4 border-india-green">
              <h3 className="text-xl font-semibold mb-4 text-india-navyBlue">Chakra in Cybersecurity</h3>
              <p className="text-gray-700 mb-4">
                Just as the Chakra stands as a symbol of protection and righteous governance, ChakraShield defends India's digital landscape with unwavering vigilance:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>The 24 spokes represent our 24/7 continuous monitoring across digital platforms</li>
                <li>The rotating motion symbolizes our active scanning and detection capabilities</li>
                <li>The center hub represents our core AI analytics engine</li>
                <li>The outer wheel signifies our protective shield around India's digital citizens</li>
              </ul>
              <p className="text-gray-700">
                By invoking the Chakra in our name, we honor India's heritage while building technology that safeguards its future.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Digital India Initiatives */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-india-navyBlue flex items-center justify-center slide-in-up">
              <span>Digital India Initiatives</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto slide-in-up" style={{ animationDelay: "0.1s" }}>
              Empowering citizens through technology and making India a digitally empowered society
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 slide-in-up" style={{ animationDelay: "0.2s" }}>
              <Shield className="h-10 w-10 text-india-saffron mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cyber Suraksha</h3>
              <p className="text-gray-600 text-sm">
                Protecting citizens from online fraud and cyber threats through advanced AI systems and nationwide cybersecurity infrastructure.
              </p>
            </div>
            
            <div className="glass-card p-6 slide-in-up" style={{ animationDelay: "0.3s" }}>
              <Database className="h-10 w-10 text-india-green mb-4" />
              <h3 className="text-lg font-semibold mb-2">DigiLocker</h3>
              <p className="text-gray-600 text-sm">
                Secure cloud-based platform for document storage, sharing and verification, reducing paperwork and enabling easy access to official documents.
              </p>
            </div>
            
            <div className="glass-card p-6 slide-in-up" style={{ animationDelay: "0.4s" }}>
              <BellRing className="h-10 w-10 text-india-navyBlue mb-4" />
              <h3 className="text-lg font-semibold mb-2">UMANG</h3>
              <p className="text-gray-600 text-sm">
                Unified Mobile Application for New-age Governance providing multiple government services in multiple languages for citizens across India.
              </p>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card border-l-4 border-india-saffron slide-in-left" style={{ animationDelay: "0.5s" }}>
              <div className="flex flex-col md:flex-row items-start p-6">
                <Brain className="h-10 w-10 text-india-saffron mr-4 flex-shrink-0 mb-4 md:mb-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI-Powered Governance</h3>
                  <p className="text-gray-600">
                    ChakraShield represents the next generation of AI applications in governance, using cutting-edge machine learning algorithms to identify patterns in social media data that indicate fake or malicious accounts. This technology allows for:
                  </p>
                  <ul className="mt-3 space-y-1 list-disc list-inside text-gray-600">
                    <li>Real-time threat detection across multiple platforms</li>
                    <li>Behavioral analysis to identify coordinated inauthentic behavior</li>
                    <li>Predictive intelligence to stop emerging threats</li>
                    <li>Reduced manual verification workload for security agencies</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glass-card border-l-4 border-india-green slide-in-right" style={{ animationDelay: "0.5s" }}>
              <div className="flex flex-col md:flex-row items-start p-6">
                <Cpu className="h-10 w-10 text-india-green mr-4 flex-shrink-0 mb-4 md:mb-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technological Impact</h3>
                  <p className="text-gray-600">
                    The implementation of ChakraShield has significant positive impacts on India's digital ecosystem:
                  </p>
                  <ul className="mt-3 space-y-1 list-disc list-inside text-gray-600">
                    <li>Reduced spread of misinformation by up to 67%</li>
                    <li>Enhanced public trust in digital platforms</li>
                    <li>Protection of citizens from scams and phishing attempts</li>
                    <li>Creation of a safer online environment for all Indians</li>
                    <li>Blockchain-verified evidence for legal proceedings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-india-saffron via-white to-india-green"></div>
    </div>
  );
};

export default Hero;
