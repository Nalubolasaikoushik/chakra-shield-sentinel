
import React, { useEffect, useState, useRef } from 'react';
import { Search, Shield, Database, FileText, BellRing, Volume2, Mic } from 'lucide-react';
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

  const speakText = (textToSpeak: string) => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    if (!speechSynthesisRef.current) {
      speechSynthesisRef.current = new SpeechSynthesisUtterance();
    }

    speechSynthesisRef.current.text = textToSpeak;
    speechSynthesisRef.current.lang = 'en-US';
    speechSynthesisRef.current.rate = 1;
    speechSynthesisRef.current.pitch = 1;

    speechSynthesisRef.current.onstart = () => setIsSpeaking(true);
    speechSynthesisRef.current.onend = () => setIsSpeaking(false);
    speechSynthesisRef.current.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(speechSynthesisRef.current);
  };

  const startSpeechRecognition = () => {
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';
    }

    recognitionRef.current.onstart = () => setIsListening(true);
    recognitionRef.current.onend = () => setIsListening(false);
    recognitionRef.current.onerror = () => setIsListening(false);
    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (transcript.toLowerCase().includes("scan")) {
        window.location.href = "/scan";
      } else if (transcript.toLowerCase().includes("about")) {
        window.location.href = "/about";
      } else if (transcript.toLowerCase().includes("dashboard")) {
        window.location.href = "/dashboard";
      }
    };

    recognitionRef.current.start();
  };

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

  return (
    <div className="min-h-[90vh] relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-india-saffron/5 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-india-green/5 animate-pulse" style={{animationDelay: "1.5s"}}></div>
        <div className="absolute top-1/3 left-1/2 w-48 h-48 rounded-full bg-india-navyBlue/3 animate-pulse" style={{animationDelay: "2s"}}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16 md:pt-28 md:pb-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="z-10 max-w-2xl mb-16 lg:mb-0">
          <div className="flex items-center mb-8">
            <div className="h-14 w-4 bg-india-saffron mr-5"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-india-navyBlue slide-in-left">
              Detect Fake Social Media Accounts
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-700 slide-in-left" style={{ animationDelay: "0.2s" }}>
            ChakraShield helps identify and verify suspicious social media profiles with advanced detection technology. Protect your online presence from fraudulent accounts.
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
              onClick={() => speakText("ChakraShield helps identify and verify suspicious social media profiles with advanced detection technology. Protect your online presence from fraudulent accounts.")}
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
          
          <div className="mt-10 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 text-base slide-in-left" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center">
              <Shield className="h-6 w-6 mr-3 text-india-navyBlue" />
              <span>Secure Platform</span>
            </div>
            <div className="flex items-center">
              <Database className="h-6 w-6 mr-3 text-india-navyBlue" />
              <span>Blockchain Verified</span>
            </div>
            <div className="flex items-center">
              <FileText className="h-6 w-6 mr-3 text-india-navyBlue" />
              <span>Detailed Reports</span>
            </div>
          </div>
        </div>
        
        <div className="relative slide-in-right w-full max-w-lg mx-auto lg:mx-0" style={{ animationDelay: "0.3s" }}>
          <div className="relative w-[280px] h-[280px] md:w-[440px] md:h-[440px] flex items-center justify-center mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-gradient-to-br from-india-saffron/10 via-white to-india-green/10 rounded-full shadow-xl"></div>
            <div className="relative z-10 w-[220px] h-[220px] md:w-[350px] md:h-[350px] bg-white rounded-full shadow-2xl flex items-center justify-center">
              <Shield className="absolute h-20 w-20 md:h-32 md:w-32 text-india-navyBlue opacity-10" />
              <AshokChakra 
                size={isMobile ? 180 : 280} 
                spinning={true} 
                color="#1E3799" 
                strokeWidth={3}
                className="animate-pulse-glow" 
              />
            </div>
            
            <div className="absolute inset-0 rounded-full border-8 border-white/40 animate-spin-slow"></div>
            <div className="absolute -inset-5 rounded-full border-2 border-dashed border-india-saffron/40"></div>
            <div className="absolute inset-4 rounded-full border-4 border-india-green/10"></div>
          </div>
          
          <div 
            className="absolute -left-4 sm:-left-16 md:-left-24 top-1/4 glass-card p-4 flex items-center max-w-[180px] shadow-xl rounded-xl slide-in-left transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl z-20"
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
            className="absolute -right-4 sm:-right-16 md:-right-20 bottom-1/4 glass-card p-4 flex items-center max-w-[180px] shadow-xl rounded-xl slide-in-right transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl z-20"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="bg-blue-100 p-3 rounded-full mr-3 flex-shrink-0">
              <Search className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-sm">
              <p className="font-semibold">Profile Scanner</p>
              <p className="text-xs text-gray-500">Advanced detection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
