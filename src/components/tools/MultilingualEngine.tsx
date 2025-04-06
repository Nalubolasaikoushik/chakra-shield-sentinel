
import React, { useState, useRef } from 'react';
import { 
  Languages, 
  MessageSquare, 
  Check, 
  Copy, 
  RefreshCw, 
  ChevronDown, 
  BookOpen,
  AlertCircle,
  PanelLeft
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from '@/hooks/use-toast';

const indianLanguages = [
  { code: 'hi', name: 'हिंदी (Hindi)', english: 'Hindi', script: 'Devanagari' },
  { code: 'bn', name: 'বাংলা (Bengali)', english: 'Bengali', script: 'Bengali' },
  { code: 'te', name: 'తెలుగు (Telugu)', english: 'Telugu', script: 'Telugu' },
  { code: 'mr', name: 'मराठी (Marathi)', english: 'Marathi', script: 'Devanagari' },
  { code: 'ta', name: 'தமிழ் (Tamil)', english: 'Tamil', script: 'Tamil' },
  { code: 'ur', name: 'اردو (Urdu)', english: 'Urdu', script: 'Arabic' },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)', english: 'Gujarati', script: 'Gujarati' },
  { code: 'kn', name: 'ಕನ್ನಡ (Kannada)', english: 'Kannada', script: 'Kannada' },
  { code: 'ml', name: 'മലയാളം (Malayalam)', english: 'Malayalam', script: 'Malayalam' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)', english: 'Punjabi', script: 'Gurmukhi' },
  { code: 'or', name: 'ଓଡ଼ିଆ (Odia)', english: 'Odia', script: 'Odia' },
  { code: 'as', name: 'অসমীয়া (Assamese)', english: 'Assamese', script: 'Bengali' },
  { code: 'mai', name: 'मैथिली (Maithili)', english: 'Maithili', script: 'Devanagari' },
  { code: 'sat', name: 'सन्थाली (Santali)', english: 'Santali', script: 'Ol Chiki' },
  { code: 'ks', name: 'कॉशुर (Kashmiri)', english: 'Kashmiri', script: 'Arabic/Devanagari' },
  { code: 'sd', name: 'سنڌي (Sindhi)', english: 'Sindhi', script: 'Arabic' },
  { code: 'doi', name: 'डोगरी (Dogri)', english: 'Dogri', script: 'Devanagari' },
  { code: 'sa', name: 'संस्कृतम् (Sanskrit)', english: 'Sanskrit', script: 'Devanagari' },
  { code: 'en', name: 'English', english: 'English', script: 'Latin' }
];

// Mock detection results
const mockResults = {
  textAnalysis: [
    { language: 'Hindi', confidence: 92, dialectVariations: 'Standard Hindi with some Awadhi influence', script: 'Devanagari' },
    { language: 'Punjabi', confidence: 5, dialectVariations: 'Potential minor influence', script: 'Gurmukhi' },
    { language: 'Urdu', confidence: 3, dialectVariations: 'Potential vocabulary overlap', script: 'Arabic' }
  ],
  contextualAnalysis: {
    regionalMarkers: ['North Indian cultural references', 'Delhi/NCR colloquialisms'],
    temporalPatterns: 'Modern usage with traditional expressions',
    demographicIndicators: 'Educated, urban speaker pattern',
    artificialityScore: 12,
    consistencyScore: 94
  }
};

// Mock harmful content types for detection
const harmfulContentTypes = [
  { id: 'hate', name: 'Hate Speech', description: 'Content expressing hatred based on identity' },
  { id: 'misinfo', name: 'Misinformation', description: 'False information that could cause public harm' },
  { id: 'threat', name: 'Threats', description: 'Direct or indirect threats of violence' },
  { id: 'impersonation', name: 'Impersonation', description: 'Content falsely claiming official identity' },
];

const MultilingualEngine = () => {
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('hi');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [translatedText, setTranslatedText] = useState('');
  const [selectedDetectionMode, setSelectedDetectionMode] = useState<'language' | 'harmful'>('language');
  const [detectionResults, setDetectionResults] = useState<any>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleDetect = () => {
    if (!inputText) return;
    
    setIsAnalyzing(true);
    setProgress(0);
    setShowResults(false);
    setDetectionResults(null);
    
    // Simulate analysis process
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setShowResults(true);
          
          if (selectedDetectionMode === 'language') {
            setDetectionResults(mockResults);
          } else {
            // Mock harmful content detection results
            const harmfulScore = Math.floor(Math.random() * 100);
            const isHarmful = harmfulScore > 70;
            
            setDetectionResults({
              overallScore: harmfulScore,
              isHarmful,
              categories: {
                hate: { score: isHarmful ? 80 + Math.random() * 20 : Math.random() * 30, detected: isHarmful },
                misinfo: { score: Math.random() * 60, detected: false },
                threat: { score: Math.random() * 40, detected: false },
                impersonation: { score: Math.random() * 20, detected: false }
              },
              recommendation: isHarmful ? 
                'This content contains potentially harmful language that violates platform guidelines.' :
                'No significant harmful content detected. Content appears to be within acceptable guidelines.'
            });
          }
          
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  const handleTranslate = () => {
    if (!inputText) return;
    
    setIsAnalyzing(true);
    setProgress(0);
    
    // Simulate translation process
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          
          // Set mock translated text
          const targetLang = indianLanguages.find(lang => lang.code === targetLanguage);
          setTranslatedText(`[This text would be translated to ${targetLang?.name || targetLanguage}]\n\n${inputText}`);
          
          toast({
            title: "Translation complete",
            description: `Translated to ${targetLang?.english || targetLanguage} successfully`,
            variant: "default",
          });
          
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard",
        description: "Text copied successfully",
        variant: "default",
      });
    });
  };

  return (
    <Card className="w-full bg-gradient-to-br from-white to-india-lightBg border border-gray-200 shadow-md mb-8">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-india-accent1/10 p-2 rounded-full">
            <Languages className="h-6 w-6 text-india-accent1" />
          </div>
          <div>
            <CardTitle className="text-xl text-india-accent2">Multilingual NLP Engine</CardTitle>
            <CardDescription>Process text in all 22 official Indian languages with advanced NLP capabilities</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-gray-700">Input Text</h3>
              <div className="flex items-center">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setInputText('')}
                  className="h-8 px-2 text-xs"
                  disabled={!inputText}
                >
                  Clear
                </Button>
              </div>
            </div>
            
            <Textarea
              placeholder="Enter text in any Indian language for analysis or translation..."
              className="min-h-[200px] mb-4"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="flex gap-2 flex-grow">
                <Button 
                  onClick={() => {
                    setSelectedDetectionMode('language');
                    handleDetect();
                  }} 
                  disabled={!inputText || isAnalyzing}
                  variant={selectedDetectionMode === 'language' ? 'default' : 'outline'}
                  className={selectedDetectionMode === 'language' ? 'bg-india-navyBlue hover:bg-india-navyBlue/90' : ''}
                >
                  <Languages className="h-4 w-4 mr-2" />
                  Analyze Language
                </Button>
                <Button 
                  onClick={() => {
                    setSelectedDetectionMode('harmful');
                    handleDetect();
                  }} 
                  disabled={!inputText || isAnalyzing}
                  variant={selectedDetectionMode === 'harmful' ? 'default' : 'outline'}
                  className={selectedDetectionMode === 'harmful' ? 'bg-india-navyBlue hover:bg-india-navyBlue/90' : ''}
                >
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Detect Harmful Content
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  {indianLanguages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button 
                onClick={handleTranslate} 
                disabled={!inputText || isAnalyzing}
                className="bg-india-saffron hover:bg-india-saffron/90"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Translate Text
              </Button>
            </div>
            
            {isAnalyzing && (
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>{selectedDetectionMode === 'language' ? 'Analyzing language patterns' : 
                         selectedDetectionMode === 'harmful' ? 'Scanning for harmful content' :
                         'Translating content'}</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}
          </div>
          
          <div ref={resultRef}>
            {showResults ? (
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-india-navyBlue">
                    {selectedDetectionMode === 'language' ? 'Language Analysis Results' : 'Content Analysis Results'}
                  </h3>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Copy className="h-4 w-4" onClick={() => copyToClipboard(JSON.stringify(detectionResults, null, 2))} />
                  </Button>
                </div>
                
                {selectedDetectionMode === 'language' && detectionResults && (
                  <>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Language Composition</h4>
                      <div className="space-y-3">
                        {detectionResults.textAnalysis.map((lang: any, index: number) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <div className="flex items-center">
                                <span className="text-sm">{lang.language}</span>
                                <Badge variant="outline" className="ml-2 text-xs">
                                  {lang.script}
                                </Badge>
                              </div>
                              <span className="text-sm font-medium">{lang.confidence}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                              <div
                                className="bg-india-navyBlue h-1.5 rounded-full"
                                style={{ width: `${lang.confidence}%` }}
                              ></div>
                            </div>
                            {lang.dialectVariations && (
                              <p className="text-xs text-gray-500 mb-1">{lang.dialectVariations}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Contextual Analysis</h4>
                      <div className="bg-gray-50 rounded-md p-3 space-y-2">
                        <div>
                          <span className="text-xs font-medium">Regional Markers:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {detectionResults.contextualAnalysis.regionalMarkers.map((marker: string, i: number) => (
                              <Badge key={i} variant="outline" className="text-xs bg-white">
                                {marker}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-xs font-medium">Temporal Pattern:</span>
                          <p className="text-xs text-gray-600">{detectionResults.contextualAnalysis.temporalPatterns}</p>
                        </div>
                        <div>
                          <span className="text-xs font-medium">Demographic Indicators:</span>
                          <p className="text-xs text-gray-600">{detectionResults.contextualAnalysis.demographicIndicators}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs font-medium">Artificiality Score:</span>
                              <span className={`text-xs font-medium ${
                                detectionResults.contextualAnalysis.artificialityScore < 30 ? 'text-green-600' : 
                                detectionResults.contextualAnalysis.artificialityScore < 70 ? 'text-yellow-600' : 
                                'text-red-600'
                              }`}>
                                {detectionResults.contextualAnalysis.artificialityScore}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div
                                className={`h-1.5 rounded-full ${
                                  detectionResults.contextualAnalysis.artificialityScore < 30 ? 'bg-green-500' : 
                                  detectionResults.contextualAnalysis.artificialityScore < 70 ? 'bg-yellow-500' : 
                                  'bg-red-500'
                                }`}
                                style={{ width: `${detectionResults.contextualAnalysis.artificialityScore}%` }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs font-medium">Consistency Score:</span>
                              <span className={`text-xs font-medium ${
                                detectionResults.contextualAnalysis.consistencyScore > 70 ? 'text-green-600' : 
                                detectionResults.contextualAnalysis.consistencyScore > 30 ? 'text-yellow-600' : 
                                'text-red-600'
                              }`}>
                                {detectionResults.contextualAnalysis.consistencyScore}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div
                                className={`h-1.5 rounded-full ${
                                  detectionResults.contextualAnalysis.consistencyScore > 70 ? 'bg-green-500' : 
                                  detectionResults.contextualAnalysis.consistencyScore > 30 ? 'bg-yellow-500' : 
                                  'bg-red-500'
                                }`}
                                style={{ width: `${detectionResults.contextualAnalysis.consistencyScore}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                
                {selectedDetectionMode === 'harmful' && detectionResults && (
                  <>
                    <div className="flex items-center mb-6">
                      <div className="relative w-24 h-24">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle
                            className="text-gray-200 stroke-current"
                            strokeWidth="10"
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                          ></circle>
                          <circle
                            className={`${
                              detectionResults.overallScore < 30
                                ? "text-green-500"
                                : detectionResults.overallScore < 70
                                ? "text-yellow-500"
                                : "text-red-500"
                            } stroke-current`}
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeDasharray={`${detectionResults.overallScore * 2.51} 251.2`}
                            strokeDashoffset="0"
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            transform="rotate(-90 50 50)"
                          ></circle>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`text-2xl font-bold ${
                            detectionResults.overallScore < 30
                              ? "text-green-600"
                              : detectionResults.overallScore < 70
                              ? "text-yellow-600"
                              : "text-red-600"
                          }`}>
                            {detectionResults.overallScore}
                          </span>
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          detectionResults.isHarmful 
                            ? 'bg-red-100 text-red-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {detectionResults.isHarmful ? 'Potentially Harmful' : 'Safe Content'}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Content threat assessment score
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Content Categories</h4>
                      <div className="space-y-3">
                        {harmfulContentTypes.map((type) => (
                          <div key={type.id}>
                            <div className="flex justify-between mb-1">
                              <div className="flex items-center">
                                <span className="text-sm">{type.name}</span>
                                {detectionResults.categories[type.id].detected && (
                                  <Badge variant="destructive" className="ml-2">Detected</Badge>
                                )}
                              </div>
                              <span className="text-sm font-medium">{Math.round(detectionResults.categories[type.id].score)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                              <div
                                className={`h-1.5 rounded-full ${
                                  detectionResults.categories[type.id].score < 30 ? 'bg-green-500' :
                                  detectionResults.categories[type.id].score < 70 ? 'bg-yellow-500' :
                                  'bg-red-500'
                                }`}
                                style={{ width: `${detectionResults.categories[type.id].score}%` }}
                              ></div>
                            </div>
                            <p className="text-xs text-gray-500 mb-1">{type.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`p-3 rounded-md ${
                      detectionResults.isHarmful ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'
                    }`}>
                      <div className="flex items-center">
                        {detectionResults.isHarmful ? (
                          <AlertCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                        ) : (
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        )}
                        <h4 className={`text-sm font-medium ${
                          detectionResults.isHarmful ? 'text-red-800' : 'text-green-800'
                        }`}>
                          Recommendation
                        </h4>
                      </div>
                      <p className={`text-sm mt-1 ${
                        detectionResults.isHarmful ? 'text-red-700' : 'text-green-700'
                      }`}>
                        {detectionResults.recommendation}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ) : translatedText ? (
              <div className="bg-white rounded-lg border border-gray-200 p-4 h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-india-navyBlue">Translated Text</h3>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0" 
                      onClick={() => copyToClipboard(translatedText)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 w-8 p-0"
                      onClick={() => setTranslatedText('')}
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="prose max-w-none">
                  <p className="whitespace-pre-wrap">{translatedText}</p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="mb-4 bg-india-accent1/10 p-4 rounded-full">
                  <Languages className="h-10 w-10 text-india-accent1" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Multilingual Support</h3>
                <p className="text-gray-500 mb-4">
                  Our NLP engine supports all 22 official Indian languages with regional dialect understanding
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm w-full max-w-sm">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 text-india-accent1 mr-2" />
                    <span>Language Detection</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 text-india-accent1 mr-2" />
                    <span>Neural Translation</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-india-accent1 mr-2" />
                    <span>Content Moderation</span>
                  </div>
                  <div className="flex items-center">
                    <PanelLeft className="h-4 w-4 text-india-accent1 mr-2" />
                    <span>Cultural Context</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
        <div className="mr-auto text-xs text-gray-500 flex items-center">
          <span>Powered by ChakraShield NLP Engine v2.1</span>
          <Badge variant="outline" className="ml-2">22 Languages</Badge>
        </div>
        <Button variant="outline" className="h-8 text-xs" onClick={() => {
          setShowResults(false);
          setTranslatedText('');
        }}>
          Reset Results
        </Button>
        <Button 
          variant="outline" 
          className="h-8 text-xs border-india-navyBlue text-india-navyBlue"
          onClick={() => {
            toast({
              title: "Report Downloaded",
              description: "Detailed analysis report downloaded in PDF format",
            });
          }}
        >
          Download Detailed Report
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MultilingualEngine;
