import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, ArrowRight, CheckCircle } from 'lucide-react';
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

const Translation = () => {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('hi');
  const [isTranslating, setIsTranslating] = useState(false);
  const { toast } = useToast();

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
            <p className="text-xl text-center">Break language barriers with our AI-powered translation service</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8 border-india-navyBlue/10">
                <CardHeader>
                  <CardTitle>Universal Translation</CardTitle>
                  <CardDescription>Translate text between multiple Indian languages and English</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Source Language</label>
                      <select 
                        value={sourceLang}
                        onChange={(e) => setSourceLang(e.target.value)}
                        className="w-full rounded-md border border-gray-300 p-2"
                      >
                        {languages.map((lang) => (
                          <option key={`source-${lang.code}`} value={lang.code}>
                            {lang.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Target Language</label>
                      <select 
                        value={targetLang}
                        onChange={(e) => setTargetLang(e.target.value)}
                        className="w-full rounded-md border border-gray-300 p-2"
                      >
                        {languages.map((lang) => (
                          <option key={`target-${lang.code}`} value={lang.code}>
                            {lang.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                    <div className="col-span-2">
                      <Textarea
                        placeholder="Enter text to translate..."
                        value={sourceText}
                        onChange={(e) => setSourceText(e.target.value)}
                        rows={6}
                        className="w-full"
                      />
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
                    
                    <div className="col-span-2">
                      <Textarea
                        placeholder="Translation will appear here..."
                        value={translatedText}
                        readOnly
                        rows={6}
                        className="w-full bg-gray-50"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={handleTranslate} 
                    className="w-full bg-india-saffron hover:bg-india-saffron/90 text-white"
                    disabled={isTranslating}
                  >
                    {isTranslating ? "Translating..." : "Translate"}
                  </Button>
                </CardFooter>
              </Card>
              
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
                    <CardTitle className="text-lg">Document Translation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Translate entire documents while preserving formatting, making government communications accessible to all citizens.
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
