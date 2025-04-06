
import React, { useState } from 'react';
import { 
  Shield, 
  Check, 
  X, 
  AlertTriangle, 
  Clock, 
  RefreshCw, 
  ChevronDown, 
  ChevronUp,
  Zap
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

type SecurityMetric = {
  name: string;
  score: number;
  status: 'good' | 'warning' | 'critical';
  description: string;
};

const SecurityAssessment = () => {
  const [scanning, setScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const [securityMetrics, setSecurityMetrics] = useState<SecurityMetric[]>([
    {
      name: "Authentication",
      score: 85,
      status: "good",
      description: "Multi-factor authentication is enabled and password policies conform to standards."
    },
    {
      name: "Data Encryption",
      score: 90,
      status: "good",
      description: "All data is encrypted at rest and in transit using industry-standard protocols."
    },
    {
      name: "API Security",
      score: 65,
      status: "warning",
      description: "Some API endpoints lack rate limiting and proper authentication."
    },
    {
      name: "Network Security",
      score: 75,
      status: "warning",
      description: "Firewall configurations need review and some ports are unnecessarily exposed."
    },
    {
      name: "Vulnerability Management",
      score: 40,
      status: "critical",
      description: "Several critical CVEs detected in third-party dependencies."
    }
  ]);

  const startScan = () => {
    setScanning(true);
    setScanProgress(0);
    setShowResults(false);
    
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanning(false);
          setShowResults(true);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  const resetScan = () => {
    setScanning(false);
    setScanProgress(0);
    setShowResults(false);
  };

  const getOverallScore = () => {
    const totalScore = securityMetrics.reduce((acc, metric) => acc + metric.score, 0);
    return Math.round(totalScore / securityMetrics.length);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'critical':
        return <X className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="glass-card p-6 max-w-3xl mx-auto my-8">
      <div className="flex items-center mb-6">
        <div className="bg-india-navyBlue/10 rounded-full p-3 mr-4">
          <Shield className="h-8 w-8 text-india-navyBlue" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-india-navyBlue">ChakraShield Security Assessment</h2>
          <p className="text-gray-600">Evaluate your system's security posture with advanced AI analysis</p>
        </div>
      </div>

      {!scanning && !showResults && (
        <div className="text-center py-12">
          <div className="floating inline-block mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-india-saffron to-india-green opacity-20 rounded-full animate-pulse"></div>
              <Shield className="h-20 w-20 text-india-navyBlue relative z-10" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">Ready to Analyze Your Security?</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Our AI engine will scan your system configurations, network settings, and codebase to identify potential vulnerabilities.
          </p>
          <Button 
            onClick={startScan}
            className="gradient-button flex items-center"
          >
            <Zap className="mr-2 h-5 w-5" />
            Start Security Assessment
          </Button>
        </div>
      )}

      {scanning && (
        <div className="text-center py-12">
          <div className="shimmer w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 bg-india-navyBlue/10">
            <RefreshCw className="h-10 w-10 text-india-navyBlue animate-spin" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Scanning Your System</h3>
          <p className="text-gray-600 mb-6">
            Please wait while we analyze your system configuration...
          </p>
          <div className="max-w-md mx-auto mb-6">
            <Progress value={scanProgress} className="h-2" />
            <p className="text-right text-sm text-gray-500 mt-1">{scanProgress}%</p>
          </div>
          <div className="flex justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>Estimated time: {Math.ceil((100 - scanProgress) / 10)} seconds</span>
            </div>
          </div>
        </div>
      )}

      {showResults && (
        <div className="py-4">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32 flex items-center justify-center">
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
                      getOverallScore() >= 80
                        ? "text-green-500"
                        : getOverallScore() >= 60
                        ? "text-yellow-500"
                        : "text-red-500"
                    } stroke-current`}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${getOverallScore() * 2.51} 251.2`}
                    strokeDashoffset="0"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    transform="rotate(-90 50 50)"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-3xl font-bold ${getScoreColor(getOverallScore())}`}>
                    {getOverallScore()}
                  </span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Security Assessment Complete</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Your overall security score is {getOverallScore()}/100. 
              {getOverallScore() >= 80 
                ? " Your system has good security measures in place." 
                : getOverallScore() >= 60 
                ? " Your system needs some security improvements." 
                : " Your system requires urgent security attention."}
            </p>
          </div>

          <Accordion type="single" collapsible className="mb-6">
            {securityMetrics.map((metric, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
                <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      {getStatusIcon(metric.status)}
                      <span className="ml-2 font-medium">{metric.name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`mr-4 font-semibold ${getScoreColor(metric.score)}`}>
                        {metric.score}/100
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 bg-gray-50">
                  <p className="text-gray-600 mb-2">{metric.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                    <div 
                      className={`h-2 rounded-full ${
                        metric.score >= 80 
                          ? "bg-green-500" 
                          : metric.score >= 60 
                          ? "bg-yellow-500" 
                          : "bg-red-500"
                      }`}
                      style={{ width: `${metric.score}%` }}
                    ></div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex justify-center space-x-4">
            <Button 
              onClick={resetScan}
              variant="outline"
              className="border-india-navyBlue text-india-navyBlue"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Scan Again
            </Button>
            <Button className="gradient-button">
              Generate Detailed Report
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecurityAssessment;
