import React, { useState } from 'react';
import { Upload, Share2, AlertCircle, CheckCircle, Loader, Download, FileText, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';
import AshokChakra from '../AshokChakra';

const ProfileScanner = () => {
  const [url, setUrl] = useState('');
  const [scanning, setScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [riskScore, setRiskScore] = useState(0);
  const { toast } = useToast();

  const handleScan = () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a valid social media profile URL",
        variant: "destructive",
      });
      return;
    }
    
    setScanning(true);
    setScanComplete(false);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanning(false);
          setScanComplete(true);
          setRiskScore(Math.floor(Math.random() * 65) + 30);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  const handleShare = () => {
    toast({
      title: "Shared successfully",
      description: "The report has been shared with authorities",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Downloaded",
      description: "Report downloaded successfully",
    });
  };

  const handleTakedown = () => {
    toast({
      title: "Takedown initiated",
      description: "Your takedown request has been submitted",
    });
  };

  const renderScanResults = () => {
    if (!scanComplete) return null;
    
    const isHighRisk = riskScore > 70;
    
    return (
      <div className="mt-8">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <CardTitle className="text-xl text-india-navyBlue">Scan Results</CardTitle>
              <div className="flex items-center">
                {isHighRisk ? (
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                )}
                <span className={`font-bold ${isHighRisk ? 'text-red-500' : 'text-green-500'}`}>
                  {isHighRisk ? 'High Risk' : 'Low Risk'}
                </span>
              </div>
            </div>
            <CardDescription>
              Profile URL: {url}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Risk Score</span>
                <span className="font-bold">{riskScore}%</span>
              </div>
              <Progress 
                value={riskScore} 
                className="h-3"
                style={{
                  background: 'linear-gradient(to right, green, yellow, orange, red)',
                }}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Image Analysis</h4>
                <ul className="text-sm space-y-1">
                  <li>• {Math.random() > 0.5 ? 'Potential DeepFake detected' : 'No DeepFake indicators'}</li>
                  <li>• {Math.random() > 0.5 ? 'Multiple account matches found' : 'No duplicate images found'}</li>
                  <li>• {Math.random() > 0.5 ? 'Manipulated metadata detected' : 'Image metadata appears genuine'}</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Text Analysis</h4>
                <ul className="text-sm space-y-1">
                  <li>• {Math.random() > 0.5 ? 'Bot-like posting patterns' : 'Human-like posting patterns'}</li>
                  <li>• {Math.random() > 0.5 ? 'Suspicious language indicators' : 'Natural language patterns'}</li>
                  <li>• {Math.random() > 0.5 ? 'Coordinated messaging detected' : 'No coordinated messaging'}</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button className="bg-india-navyBlue hover:bg-india-navyBlue/90 text-white" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </Button>
              <Button variant="outline" className="border-india-navyBlue text-india-navyBlue" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share with Authorities
              </Button>
              <Button variant="outline" className="border-red-500 text-red-500" onClick={handleTakedown}>
                <ExternalLink className="h-4 w-4 mr-2" />
                Submit Takedown Request
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center">
            <h2 className="text-3xl font-bold text-india-navyBlue mb-2">AI Profile Scanner</h2>
            <AshokChakra size="sm" className="ml-2" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scan any social media profile to detect fake accounts using our advanced AI technology.
            Get detailed risk analysis and official reports.
          </p>
        </div>
        
        <Tabs defaultValue="url">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="url">Profile URL</TabsTrigger>
            <TabsTrigger value="upload">Upload Media</TabsTrigger>
          </TabsList>
          
          <TabsContent value="url" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Scan by URL</CardTitle>
                <CardDescription>
                  Enter a social media profile URL from Facebook, Twitter, Instagram, or LinkedIn
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    placeholder="https://twitter.com/username"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-grow"
                    disabled={scanning}
                  />
                  <Button 
                    onClick={handleScan}
                    disabled={scanning || !url}
                    className="bg-india-saffron hover:bg-india-saffron/90 text-white"
                  >
                    {scanning ? (
                      <>
                        <Loader className="h-4 w-4 mr-2 animate-spin" /> Scanning...
                      </>
                    ) : (
                      <>Scan Profile</>
                    )}
                  </Button>
                </div>
                
                {scanning && (
                  <div className="mt-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Scanning profile</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Upload Media</CardTitle>
                <CardDescription>
                  Upload images or videos from a suspicious profile for analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-8 text-center">
                  <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">
                    Drag and drop image or video files, or click to browse
                  </p>
                  <Button variant="outline" className="border-india-navyBlue text-india-navyBlue">
                    <FileText className="h-4 w-4 mr-2" />
                    Select Files
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {renderScanResults()}
      </div>
    </div>
  );
};

export default ProfileScanner;
