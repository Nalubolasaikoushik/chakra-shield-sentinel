
import React, { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, ArrowRight, CheckCircle, Mic, MicOff, Play, Square, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  { code: 'or', name: 'ଓଡ଼ିଆ' },
  { code: 'as', name: 'অসমীয়া' },
  { code: 'mr', name: 'मराठी' },
];

// Mock translation function (in a real app, this would connect to an API)
const mockTranslate = (text: string, targetLang: string) => {
  // Simple mock translations for demo purposes
  const translations: Record<string, Record<string, string>> = {
    en: {
      hi: 'अनुवादित पाठ यहां दिखाई देगा',
      ta: 'மொழிபெயர்க்கப்பட்ட உரை இங்கே தோன்றும்',
      te: 'అనువదించబడిన వచనం ఇక్కడ కనిపిస్తుంది',
      bn: 'অনুবাদ করা পাঠ্য এখানে প্রদর্শিত হবে',
    },
    hi: {
      en: 'Translated text will appear here',
      ta: 'மொழிபெயர்க்கப்பட்ட உரை இங்கே தோன்றும்',
      te: 'అనువదించబడిన వచనం ఇక్కడ కనిపిస్తుంది',
    },
  };

  // If we have a mock translation, return it
  if (translations[targetLang] && text) {
    return Promise.resolve(translations[targetLang][text] || 'Translation not available for this text');
  }
  
  // Otherwise generate a mock response
  return Promise.resolve(`${text} (translated to ${languages.find(l => l.code === targetLang)?.name || targetLang})`);
};

// Mock text-to-speech function
const mockTextToSpeech = (text: string, lang: string) => {
  // In a real app, this would call a TTS API
  console.log(`Text-to-speech: "${text}" in language: ${lang}`);
  return Promise.resolve('audio-data-url-would-be-here');
};

const Translation = () => {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('hi');
  const [isTranslating, setIsTranslating] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const { toast } = useToast();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Speech recognition reference
  const recognitionRef = useRef<any>(null);

  // Initialize speech recognition on component mount
  useEffect(() => {
    // Check if browser supports speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognitionAPI();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      
      recognitionRef.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('');
        
        setSourceText(transcript);
      };
      
      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsRecording(false);
        toast({
          title: "Recording Error",
          description: `Error: ${event.error}. Please try again.`,
          variant: "destructive",
        });
      };
    }
    
    return () => {
      // Cleanup speech recognition
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [toast]);

  const handleTranslate = async () => {
    if (!sourceText.trim()) {
      toast({
        title: "Empty Text",
        description: "Please enter some text to translate.",
        variant: "destructive",
      });
      return;
    }

    setIsTranslating(true);

    try {
      // In a real app, this would be an API call
      const result = await mockTranslate(sourceText, targetLang);
      setTranslatedText(result);
      
      toast({
        title: "Translation Complete",
        description: "Your text has been successfully translated.",
      });
    } catch (error) {
      toast({
        title: "Translation Failed",
        description: "There was an error translating your text. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTranslating(false);
    }
  };

  const swapLanguages = () => {
    const temp = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(temp);
    
    // Also swap the text
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      toast({
        title: "Not Supported",
        description: "Speech recognition is not supported in your browser.",
        variant: "destructive",
      });
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
      toast({
        title: "Recording Stopped",
        description: "Speech recording has been stopped.",
      });
    } else {
      // Set language for speech recognition
      recognitionRef.current.lang = sourceLang === 'en' ? 'en-US' : sourceLang;
      recognitionRef.current.start();
      setIsRecording(true);
      toast({
        title: "Recording Started",
        description: "Speak now. Your speech will be transcribed.",
      });
    }
  };

  const handleTextToSpeech = async (text: string, lang: string) => {
    if (!text) {
      toast({
        title: "Empty Text",
        description: "There is no text to speak.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsPlaying(true);
      
      if (!apiKey && !showApiKeyInput) {
        setShowApiKeyInput(true);
        toast({
          title: "API Key Required",
          description: "Please enter your ElevenLabs API key to use text-to-speech.",
        });
        return;
      }
      
      if (apiKey) {
        // In a real implementation, this would call the ElevenLabs API
        await mockTextToSpeech(text, lang);
        
        // Simulate audio playback with browser's built-in TTS
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = lang === 'en' ? 'en-US' : lang;
          speechSynthesis.speak(utterance);
          
          utterance.onend = () => {
            setIsPlaying(false);
          };
        } else {
          setIsPlaying(false);
        }
        
        toast({
          title: "Playing Audio",
          description: "Text is being spoken.",
        });
      }
    } catch (error) {
      toast({
        title: "Text-to-Speech Failed",
        description: "There was an error generating speech. Please try again.",
        variant: "destructive",
      });
      setIsPlaying(false);
    }
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      toast({
        title: "Audio Stopped",
        description: "Speech playback has been stopped.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-india-navyBlue/90 to-india-navyBlue/70 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-4">
              <Globe className="h-10 w-10 text-india-saffron mr-3" />
              <h1 className="text-4xl font-bold">ChakraShield Translation Service</h1>
            </div>
            <p className="text-xl text-center">Break language barriers with our AI-powered translation and speech services</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="text" className="mb-8">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="text">Text Translation</TabsTrigger>
                  <TabsTrigger value="speech">Speech Services</TabsTrigger>
                </TabsList>
                
                <TabsContent value="text" className="mt-6">
                  <Card className="border-india-navyBlue/10">
                    <CardHeader>
                      <CardTitle>Universal Translation</CardTitle>
                      <CardDescription>Translate text between multiple Indian languages and English</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Source Language</label>
                          <Select value={sourceLang} onValueChange={setSourceLang}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              {languages.map((lang) => (
                                <SelectItem key={`source-${lang.code}`} value={lang.code}>
                                  {lang.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Target Language</label>
                          <Select value={targetLang} onValueChange={setTargetLang}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              {languages.map((lang) => (
                                <SelectItem key={`target-${lang.code}`} value={lang.code}>
                                  {lang.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                        <div className="col-span-2 relative">
                          <Textarea
                            placeholder="Enter text to translate..."
                            value={sourceText}
                            onChange={(e) => setSourceText(e.target.value)}
                            rows={6}
                            className="w-full pr-10"
                          />
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                            onClick={() => toggleRecording()}
                          >
                            {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                          </Button>
                        </div>
                        
                        <div className="flex justify-center">
                          <Button 
                            variant="outline" 
                            onClick={swapLanguages}
                            className="rounded-full p-2 h-10 w-10"
                          >
                            <ArrowRight className="h-5 w-5" />
                          </Button>
                        </div>
                        
                        <div className="col-span-2 relative">
                          <Textarea
                            placeholder="Translation will appear here..."
                            value={translatedText}
                            readOnly
                            rows={6}
                            className="w-full pr-10 bg-gray-50"
                          />
                          {translatedText && (
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                              onClick={() => handleTextToSpeech(translatedText, targetLang)}
                              disabled={isPlaying}
                            >
                              {isPlaying ? <Square className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      {showApiKeyInput && (
                        <div className="mt-4">
                          <label className="block text-sm font-medium mb-2">ElevenLabs API Key (for text-to-speech)</label>
                          <div className="flex gap-2">
                            <Input
                              type="password"
                              value={apiKey}
                              onChange={(e) => setApiKey(e.target.value)}
                              placeholder="Enter your ElevenLabs API key"
                              className="flex-1"
                            />
                            <Button 
                              variant="outline" 
                              onClick={() => setShowApiKeyInput(false)}
                              disabled={!apiKey}
                            >
                              Save
                            </Button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Your API key is only stored in your browser session and is not saved on our servers.
                          </p>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        onClick={handleTranslate} 
                        className="w-full sm:flex-1 bg-india-saffron hover:bg-india-saffron/90 text-white"
                        disabled={isTranslating}
                      >
                        {isTranslating ? "Translating..." : "Translate"}
                      </Button>
                      {isPlaying && (
                        <Button 
                          variant="outline" 
                          className="w-full sm:w-auto"
                          onClick={stopSpeech}
                        >
                          <Square className="mr-2 h-4 w-4" />
                          Stop Speech
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="speech" className="mt-6">
                  <Card className="border-india-navyBlue/10">
                    <CardHeader>
                      <CardTitle>Speech Recognition & Synthesis</CardTitle>
                      <CardDescription>Convert between speech and text across Indian languages</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <h3 className="text-lg font-medium mb-2">Speech to Text</h3>
                          <p className="text-gray-600 mb-4">
                            Use your microphone to record speech and convert it to text. Supports multiple Indian languages.
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                            <div>
                              <label className="block text-sm font-medium mb-2">Speech Language</label>
                              <Select value={sourceLang} onValueChange={setSourceLang}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select language" />
                                </SelectTrigger>
                                <SelectContent>
                                  {languages.map((lang) => (
                                    <SelectItem key={`speech-${lang.code}`} value={lang.code}>
                                      {lang.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="flex justify-center items-center">
                              <Button 
                                onClick={toggleRecording} 
                                variant={isRecording ? "destructive" : "default"}
                                className={`h-16 w-16 rounded-full ${isRecording ? "bg-red-500 hover:bg-red-600" : "bg-india-navyBlue hover:bg-india-navyBlue/90"}`}
                              >
                                {isRecording ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
                              </Button>
                            </div>
                            
                            <div className="flex flex-col justify-center items-center">
                              <div className="text-sm font-medium">Status</div>
                              <div className={`text-sm ${isRecording ? "text-red-500" : "text-gray-500"}`}>
                                {isRecording ? "Recording..." : "Ready to record"}
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <label className="block text-sm font-medium mb-2">Transcribed Text</label>
                            <Textarea
                              value={sourceText}
                              onChange={(e) => setSourceText(e.target.value)}
                              placeholder="Transcribed text will appear here..."
                              rows={4}
                              className="w-full"
                            />
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <h3 className="text-lg font-medium mb-2">Text to Speech</h3>
                          <p className="text-gray-600 mb-4">
                            Convert text to natural-sounding speech in multiple Indian languages using our AI voice models.
                          </p>
                          
                          {!apiKey && (
                            <div className="mb-4">
                              <label className="block text-sm font-medium mb-2">ElevenLabs API Key</label>
                              <div className="flex gap-2">
                                <Input
                                  type="password"
                                  value={apiKey}
                                  onChange={(e) => setApiKey(e.target.value)}
                                  placeholder="Enter your ElevenLabs API key"
                                  className="flex-1"
                                />
                                <Button 
                                  variant="outline"
                                  disabled={!apiKey}
                                >
                                  Save
                                </Button>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">
                                Required for text-to-speech functionality. Get a key at elevenlabs.io
                              </p>
                            </div>
                          )}
                          
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                            <div className="md:col-span-3">
                              <label className="block text-sm font-medium mb-2">Text to Convert</label>
                              <Textarea
                                value={translatedText || sourceText}
                                onChange={(e) => setTranslatedText(e.target.value)}
                                placeholder="Enter text to convert to speech..."
                                rows={3}
                                className="w-full"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-2">Voice Language</label>
                              <Select value={targetLang} onValueChange={setTargetLang}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select language" />
                                </SelectTrigger>
                                <SelectContent>
                                  {languages.map((lang) => (
                                    <SelectItem key={`voice-${lang.code}`} value={lang.code}>
                                      {lang.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div className="flex justify-center mt-4 space-x-3">
                            <Button 
                              onClick={() => handleTextToSpeech(translatedText || sourceText, targetLang)}
                              disabled={isPlaying || !translatedText && !sourceText || !apiKey}
                              className="bg-india-navyBlue hover:bg-india-navyBlue/90"
                            >
                              <Play className="mr-2 h-4 w-4" />
                              Play Speech
                            </Button>
                            
                            {isPlaying && (
                              <Button 
                                variant="outline" 
                                onClick={stopSpeech}
                              >
                                <Square className="mr-2 h-4 w-4" />
                                Stop
                              </Button>
                            )}
                          </div>
                        </div>
                        
                        <Alert>
                          <Volume2 className="h-4 w-4" />
                          <AlertTitle>About Voice Services</AlertTitle>
                          <AlertDescription>
                            Our text-to-speech services use ElevenLabs API for high-quality voice synthesis. 
                            You need to provide your own API key to use this feature. Speech recognition uses 
                            your device's built-in capabilities and works directly in your browser.
                          </AlertDescription>
                        </Alert>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="bg-white border-india-saffron/10 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Real-time Translation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Our advanced AI processes translations in real-time, allowing for immediate communication across language barriers.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-india-saffron/10 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Context-Aware</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Our translation engine understands context and cultural nuances, providing more accurate and natural-sounding translations.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-india-saffron/10 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Voice Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      With speech-to-text and text-to-speech capabilities, communicate naturally across languages using your voice.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h2 className="text-xl font-bold mb-4 text-india-navyBlue">How Our Translation Service Helps</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-india-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Enables government services to be accessible in all official languages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-india-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Facilitates communication between different state agencies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-india-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ensures important security alerts and notifications are understood by all citizens regardless of language</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-india-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Supports the Digital India vision of inclusive digital access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-india-navyBlue/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-6 text-india-navyBlue">Supporting Digital Bharat</h2>
            <p className="max-w-3xl mx-auto mb-8 text-gray-700">
              Our translation service is a key component of ChakraShield's commitment to the Digital India initiative, 
              helping to bridge linguistic divides and ensure that all citizens can access digital services in their 
              preferred language.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <span className="w-8 h-1 bg-india-saffron rounded-full"></span>
              <span className="w-8 h-1 bg-white border border-gray-300 rounded-full"></span>
              <span className="w-8 h-1 bg-india-green rounded-full"></span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Translation;

