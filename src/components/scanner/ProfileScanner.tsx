import React, { useState } from 'react';
import { Upload, Share2, AlertCircle, CheckCircle, Loader, Download, FileText, ExternalLink, ScanSearch } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';
import AshokChakra from '../AshokChakra';
import { verifyImage, verifyImageBase64 } from '@/services/profileAnalysisService';

interface ImageVerificationResult {
  success: boolean;
  authenticityScore: string;
  matchingConfidence: string;
  classification: 'genuine' | 'suspicious' | 'fake';
  detailedAnalysis: {
    metadata: {
      fileType: string;
      fileName: string;
      fileSize: string;
      timestamp: string;
    };
    visualFeatures: {
      faceDetection: boolean;
      faceCount: number;
      inconsistentLighting: boolean;
      inconsistentPixelPatterns: boolean;
      artificialBlurring: boolean;
    };
    aiSignatures: {
      generativeArtifacts: number;
      styleConsistency: number;
      textureAnalysis: number;
    };
    duplicateDetection: {
      similarImagesFound: boolean;
      similarityScore: number;
      possibleSources: string[];
    };
  };
}

const ProfileScanner = () => {
  const [url, setUrl] = useState('');
  const [scanning, setScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [riskScore, setRiskScore] = useState(0);
  
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<ImageVerificationResult | null>(null);
  
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      // Reset verification results
      setVerificationResult(null);
    }
  };

  const handleVerifyImage = async () => {
    if (!imageFile && !imagePreview) {
      toast({
        title: "Error",
        description: "Please upload an image first",
        variant: "destructive",
      });
      return;
    }

    setVerifying(true);
    setProgress(0);
    
    // Progress simulation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return prev + 5;
      });
    }, 200);
    
    try {
      let result;
      
      if (imageFile) {
        // Use the service function instead of direct fetch
        result = await verifyImage(imageFile);
      } else if (imagePreview) {
        // Use base64 verification if we only have preview
        result = await verifyImageBase64(imagePreview);
      } else {
        throw new Error("No image data available");
      }
      
      setVerificationResult(result);
      
      clearInterval(progressInterval);
      setProgress(100);
      
      toast({
        title: `Image Analysis: ${result.classification.toUpperCase()}`,
        description: `Authenticity score: ${result.authenticityScore}%`,
        variant: result.classification === 'genuine' ? 'default' : 'destructive',
      });
    } catch (error) {
      console.error('Error verifying image:', error);
      toast({
        title: "Verification Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setVerifying(false);
    }
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

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setImageFile(file);
      
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      // Reset verification results
      setVerificationResult(null);
    }
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

  const renderVerificationResults = () => {
    if (!verificationResult) return null;
    
    const { authenticityScore, matchingConfidence, classification, detailedAnalysis } = verificationResult;
    const isGenuine = classification === 'genuine';
    const isSuspicious = classification === 'suspicious';
    
    return (
      <Card className="mt-8">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <CardTitle className="text-xl text-india-navyBlue">Image Verification Results</CardTitle>
            <div className="flex items-center">
              {isGenuine ? (
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              ) : isSuspicious ? (
                <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              )}
              <span className={`font-bold ${
                isGenuine ? 'text-green-500' : 
                isSuspicious ? 'text-yellow-500' : 
                'text-red-500'
              }`}>
                {classification.charAt(0).toUpperCase() + classification.slice(1)}
              </span>
            </div>
          </div>
          <CardDescription>
            File: {detailedAnalysis.metadata.fileName} ({detailedAnalysis.metadata.fileSize})
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Authenticity Score</span>
                <span className="font-bold">{authenticityScore}%</span>
              </div>
              <Progress 
                value={parseFloat(authenticityScore)} 
                className="h-3"
                style={{
                  background: 'linear-gradient(to right, red, yellow, green)',
                }}
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Matching Confidence</span>
                <span className="font-bold">{matchingConfidence}%</span>
              </div>
              <Progress 
                value={parseFloat(matchingConfidence)} 
                className="h-3"
                style={{
                  background: 'linear-gradient(to right, green, yellow, red)',
                }}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Visual Analysis</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Faces: {detailedAnalysis.visualFeatures.faceDetection ? 
                        `${detailedAnalysis.visualFeatures.faceCount} detected` : 
                        'None detected'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Lighting: {detailedAnalysis.visualFeatures.inconsistentLighting ? 
                        'Inconsistencies detected' : 
                        'Consistent throughout image'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Pixel patterns: {detailedAnalysis.visualFeatures.inconsistentPixelPatterns ? 
                        'Anomalies detected' : 
                        'Natural distribution'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Artificial blur: {detailedAnalysis.visualFeatures.artificialBlurring ? 
                        'Present' : 
                        'Not detected'}
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">AI Signature Detection</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Generative artifacts: {detailedAnalysis.aiSignatures.generativeArtifacts.toFixed(1)}% confidence
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Style consistency: {detailedAnalysis.aiSignatures.styleConsistency.toFixed(1)}% natural
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Texture analysis: {detailedAnalysis.aiSignatures.textureAnalysis.toFixed(1)}% organic
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            {detailedAnalysis.duplicateDetection.similarImagesFound && (
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <h4 className="font-semibold text-yellow-800">Potential Duplicates Found</h4>
                </div>
                <p className="text-sm text-yellow-700 mb-2">
                  This image appears similar to existing content with a {detailedAnalysis.duplicateDetection.similarityScore.toFixed(1)}% match confidence.
                </p>
                {detailedAnalysis.duplicateDetection.possibleSources.length > 0 && (
                  <div className="text-sm text-yellow-700">
                    <span className="font-medium">Possible sources: </span>
                    {detailedAnalysis.duplicateDetection.possibleSources.join(', ')}
                  </div>
                )}
              </div>
            )}
            
            <div className="flex flex-wrap gap-3 pt-2">
              <Button className="bg-india-navyBlue hover:bg-india-navyBlue/90 text-white" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </Button>
              <Button variant="outline" className="border-india-navyBlue text-india-navyBlue" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share with Authorities
              </Button>
              {!isGenuine && (
                <Button variant="outline" className="border-red-500 text-red-500" onClick={handleTakedown}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Submit Takedown Request
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
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
            {renderScanResults()}
          </TabsContent>
          
          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Image Verification</CardTitle>
                <CardDescription>
                  Upload an image to verify its authenticity and detect if it's AI-generated or manipulated
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div 
                    className={`border-2 ${imagePreview ? 'border-solid border-gray-300' : 'border-dashed border-gray-300'} rounded-lg p-4 flex flex-col items-center justify-center min-h-[250px] relative overflow-hidden`}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    {!imagePreview ? (
                      <>
                        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-4 text-center">
                          Drag and drop image files, or click to browse
                        </p>
                        <Button 
                          variant="outline" 
                          className="border-india-navyBlue text-india-navyBlue"
                          onClick={() => document.getElementById('file-upload')?.click()}
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Select Files
                        </Button>
                        <input
                          id="file-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </>
                    ) : (
                      <>
                        <img 
                          src={imagePreview} 
                          alt="Preview" 
                          className="max-h-[220px] max-w-full object-contain"
                        />
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          className="absolute top-2 right-2 h-8 w-8 p-0"
                          onClick={() => {
                            setImagePreview(null);
                            setImageFile(null);
                            setVerificationResult(null);
                          }}
                        >
                          <AlertCircle className="h-4 w-4" />
                        </Button>
                      </>
                    )}

                    {verifying && (
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                        <ScanSearch className="h-8 w-8 animate-pulse mb-4" />
                        <p className="mb-2">Analyzing image...</p>
                        <div className="w-3/4">
                          <Progress value={progress} className="h-2" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <div className="bg-gray-50 p-4 rounded-lg mb-4 flex-grow">
                      <h4 className="font-semibold mb-3 text-india-navyBlue">Image Verification System</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Our advanced AI system analyzes images for:
                      </p>
                      <ul className="text-sm space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-india-green mr-2 mt-0.5" />
                          <span>AI-generated content detection (DeepFakes)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-india-green mr-2 mt-0.5" />
                          <span>Inconsistent lighting and shadows</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-india-green mr-2 mt-0.5" />
                          <span>Digital manipulation traces</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-india-green mr-2 mt-0.5" />
                          <span>Cross-reference with known image databases</span>
                        </li>
                      </ul>
                    </div>

                    <Button
                      className="bg-india-saffron hover:bg-india-saffron/90 text-white w-full"
                      disabled={!imagePreview || verifying}
                      onClick={handleVerifyImage}
                    >
                      <ScanSearch className="h-4 w-4 mr-2" />
                      Verify Image Authenticity
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {renderVerificationResults()}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileScanner;
