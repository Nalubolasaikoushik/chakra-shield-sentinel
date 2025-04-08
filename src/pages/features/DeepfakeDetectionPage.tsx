
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DeepfakeDetection from '@/components/tools/DeepfakeDetection';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeepfakeDetectionPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center text-india-navyBlue hover:text-india-accent2 mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-india-accent2 mb-2">Deepfake Detection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Advanced AI system to identify and flag artificially generated or manipulated media content
          </p>
        </div>
        
        <Card className="mb-8 border-india-navyBlue/10 shadow-md">
          <CardHeader className="bg-india-navyBlue/5 border-b border-india-navyBlue/10">
            <CardTitle className="text-india-accent2">Deepfake Detection System</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <DeepfakeDetection />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Multi-modal deepfake detection (image, video, audio)</li>
                <li>99.7% accuracy in identifying synthetic media</li>
                <li>Real-time processing capabilities</li>
                <li>Source attribution technology</li>
                <li>Forgery localization mapping</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Convolutional neural networks for image analysis</li>
                <li>Spectral analysis for audio authentication</li>
                <li>Temporal inconsistency detection</li>
                <li>Biological signal verification</li>
                <li>Continuous learning from new deepfake techniques</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Card className="shadow-sm border-india-navyBlue/10 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-india-accent2">Use Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-india-navyBlue">Political Misinformation Prevention</h3>
                <p className="text-gray-700">
                  Government agencies use deepfake detection to identify and counter synthetic media featuring
                  political figures that could mislead citizens or influence democratic processes.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Social Media Monitoring</h3>
                <p className="text-gray-700">
                  Security teams monitor major social platforms for deepfake content that could cause public
                  panic or unrest, providing early intervention capabilities.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Evidence Validation</h3>
                <p className="text-gray-700">
                  Law enforcement agencies utilize deepfake detection to verify the authenticity of digital
                  evidence in criminal investigations and court proceedings.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default DeepfakeDetectionPage;
