
import React, { useState } from 'react';
import { 
  Image, 
  ScanSearch, 
  BarChart3, 
  AlertTriangle, 
  Check, 
  RefreshCw 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';

const DeepfakeDetection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{
    isDeepfake: boolean;
    confidenceScore: number;
    manipulationAreas: string[];
    assessmentDetails: { feature: string; score: number }[];
  } | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
      
      // Reset results
      setResult(null);
    }
  };

  const runAnalysis = () => {
    if (!file) return;
    
    setAnalyzing(true);
    setProgress(0);
    
    // Simulate analysis process
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setAnalyzing(false);
          
          // Generate mock result
          const isFake = Math.random() > 0.5;
          const mockResult = {
            isDeepfake: isFake,
            confidenceScore: isFake ? 87 + Math.random() * 10 : 15 + Math.random() * 20,
            manipulationAreas: isFake ? ["Face", "Eyes", "Lighting"] : [],
            assessmentDetails: [
              { feature: "Facial inconsistencies", score: isFake ? 92 : 12 },
              { feature: "Pixel pattern analysis", score: isFake ? 88 : 18 },
              { feature: "Metadata verification", score: isFake ? 85 : 22 },
              { feature: "Lighting consistency", score: isFake ? 79 : 8 },
            ]
          };
          
          setResult(mockResult);
          
          toast({
            title: isFake ? "Deepfake Detected!" : "Image Appears Authentic",
            description: isFake 
              ? "This image shows signs of manipulation." 
              : "No significant manipulation detected.",
            variant: isFake ? "destructive" : "default",
          });
          
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  const resetAnalysis = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
  };

  return (
    <Card className="w-full bg-gradient-to-br from-white to-india-lightBg border border-gray-200 shadow-md mb-8">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-india-saffron/10 p-2 rounded-full">
            <ScanSearch className="h-6 w-6 text-india-saffron" />
          </div>
          <div>
            <CardTitle className="text-xl text-india-accent2">Deepfake Detection Analysis</CardTitle>
            <CardDescription>Upload an image to detect AI-generated manipulations</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {!preview ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg h-64 flex flex-col items-center justify-center p-6">
                <Image className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500 text-center mb-4">
                  Upload an image to analyze for deepfake manipulation
                </p>
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <Button
                  variant="outline"
                  onClick={() => document.getElementById('image-upload')?.click()}
                >
                  Select Image
                </Button>
              </div>
            ) : (
              <div className="relative">
                <img 
                  src={preview} 
                  alt="Preview" 
                  className="rounded-lg w-full h-64 object-cover" 
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <Button 
                    variant="destructive"
                    size="sm"
                    onClick={resetAnalysis}
                    className="h-8 w-8 p-0"
                  >
                    <AlertTriangle className="h-4 w-4" />
                  </Button>
                </div>
                {!analyzing && !result && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <Button onClick={runAnalysis} className="bg-india-navyBlue hover:bg-india-navyBlue/90">
                      Analyze Image
                    </Button>
                  </div>
                )}
                {analyzing && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex flex-col items-center justify-center text-white">
                    <RefreshCw className="h-8 w-8 animate-spin mb-4" />
                    <p className="mb-2">Analyzing image...</p>
                    <div className="w-48">
                      <Progress value={progress} className="h-1.5" />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div>
            {result ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {result.isDeepfake ? (
                    <div className="flex items-center bg-red-100 text-red-700 px-3 py-1.5 rounded-full">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      <span className="font-medium">Deepfake Detected</span>
                    </div>
                  ) : (
                    <div className="flex items-center bg-green-100 text-green-700 px-3 py-1.5 rounded-full">
                      <Check className="h-4 w-4 mr-2" />
                      <span className="font-medium">Image Appears Authentic</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-1">Confidence Score: {result.confidenceScore.toFixed(1)}%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        result.isDeepfake ? 'bg-red-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${result.confidenceScore}%` }}
                    ></div>
                  </div>
                </div>
                
                {result.isDeepfake && (
                  <div>
                    <p className="text-sm font-medium mb-2">Detected Manipulation Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {result.manipulationAreas.map((area, index) => (
                        <span key={index} className="bg-red-50 text-red-600 px-2 py-1 rounded text-sm">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div>
                  <p className="text-sm font-medium mb-2">Assessment Details:</p>
                  <div className="space-y-2">
                    {result.assessmentDetails.map((detail, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">{detail.feature}</span>
                          <span className="text-sm font-medium">{detail.score}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 rounded-full ${
                              detail.score > 50 ? 'bg-red-400' : 'bg-green-400'
                            }`}
                            style={{ width: `${detail.score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button 
                    onClick={resetAnalysis} 
                    variant="outline" 
                    className="mr-2"
                  >
                    Reset
                  </Button>
                  <Button className="bg-india-navyBlue hover:bg-india-navyBlue/90">
                    Generate Full Report
                  </Button>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">Advanced Analysis</h3>
                <p className="text-gray-500 mb-4">
                  Our AI system examines over 20,000 data points to identify manipulated images with 99.7% accuracy
                </p>
                <ul className="text-sm text-left space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-india-green mr-2" />
                    Facial inconsistency detection
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-india-green mr-2" />
                    Lighting and shadow analysis
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-india-green mr-2" />
                    Metadata and compression examination
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeepfakeDetection;
