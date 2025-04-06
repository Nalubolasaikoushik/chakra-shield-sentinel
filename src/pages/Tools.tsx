
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Shield, Code, Search, AlertTriangle, FileCheck, Zap, Lock, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Tools = () => {
  const { toast } = useToast();
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordFeedback, setPasswordFeedback] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<null | {
    safe: boolean;
    threats: number;
    details: string;
  }>(null);

  // Password strength checker
  const checkPasswordStrength = (password: string) => {
    setPasswordInput(password);
    
    if (!password) {
      setPasswordStrength(0);
      setPasswordFeedback("");
      return;
    }
    
    let strength = 0;
    const feedback = [];
    
    // Length check
    if (password.length >= 8) {
      strength += 20;
    } else {
      feedback.push("Password should be at least 8 characters");
    }
    
    // Contains uppercase
    if (/[A-Z]/.test(password)) {
      strength += 20;
    } else {
      feedback.push("Add uppercase letters");
    }
    
    // Contains lowercase
    if (/[a-z]/.test(password)) {
      strength += 20;
    } else {
      feedback.push("Add lowercase letters");
    }
    
    // Contains numbers
    if (/[0-9]/.test(password)) {
      strength += 20;
    } else {
      feedback.push("Add numbers");
    }
    
    // Contains special characters
    if (/[^A-Za-z0-9]/.test(password)) {
      strength += 20;
    } else {
      feedback.push("Add special characters");
    }
    
    setPasswordStrength(strength);
    setPasswordFeedback(feedback.join(". "));

    if (strength === 100) {
      setPasswordFeedback("Strong password!");
    }
  };

  // URL scanner
  const scanUrl = () => {
    if (!urlInput) {
      toast({
        title: "Error",
        description: "Please enter a URL to scan",
        variant: "destructive",
      });
      return;
    }

    // Simulate scanning
    setScanning(true);
    setScanResult(null);
    
    toast({
      title: "Scanning started",
      description: "Analyzing the URL for potential threats...",
    });

    // Simulate API call with timeout
    setTimeout(() => {
      setScanning(false);
      
      // Simulate different results based on URL content
      if (urlInput.includes("malware") || urlInput.includes("phishing")) {
        setScanResult({
          safe: false,
          threats: 3,
          details: "This URL contains known phishing patterns. It may be attempting to steal your personal information.",
        });
        
        toast({
          title: "Scan Complete - Threats Detected",
          description: "This URL appears to be unsafe",
          variant: "destructive",
        });
      } else {
        setScanResult({
          safe: true,
          threats: 0,
          details: "This URL appears to be safe. No known threats were detected in our database.",
        });
        
        toast({
          title: "Scan Complete",
          description: "URL appears to be safe",
        });
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-india-navyBlue/90 to-india-navyBlue/70 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-center">Cyber Security Tools</h1>
            <p className="text-xl text-center mb-8">Free utilities to help assess and improve your security posture</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="password" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="password">Password Strength Checker</TabsTrigger>
                <TabsTrigger value="url">URL Security Scanner</TabsTrigger>
              </TabsList>
              
              {/* Password Strength Checker */}
              <TabsContent value="password" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lock className="mr-2 h-5 w-5 text-india-saffron" /> 
                      Password Strength Analyzer
                    </CardTitle>
                    <CardDescription>
                      Check how strong your password is. We don't store or transmit your passwords.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-medium">Enter Password</label>
                      <Input 
                        id="password" 
                        type="password" 
                        value={passwordInput}
                        onChange={(e) => checkPasswordStrength(e.target.value)}
                        placeholder="Type a password to check"
                      />
                    </div>
                    
                    {passwordInput && (
                      <div className="space-y-2 animate-fade-in">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Strength</span>
                          <span className="text-sm">
                            {passwordStrength < 40 ? "Weak" : 
                             passwordStrength < 70 ? "Moderate" : 
                             "Strong"}
                          </span>
                        </div>
                        <Progress value={passwordStrength} className={`h-2 ${
                          passwordStrength < 40 ? "bg-red-100" : 
                          passwordStrength < 70 ? "bg-yellow-100" : 
                          "bg-green-100"
                        }`} />
                        
                        {passwordFeedback && (
                          <p className={`text-sm mt-2 ${
                            passwordStrength === 100 ? "text-green-600" : "text-amber-600"
                          }`}>
                            {passwordFeedback}
                          </p>
                        )}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex flex-col items-start">
                    <h4 className="text-sm font-semibold mb-2">Password Security Tips:</h4>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                      <li>Use a minimum of 12 characters</li>
                      <li>Include uppercase and lowercase letters</li>
                      <li>Add numbers and special characters</li>
                      <li>Don't use personal information</li>
                      <li>Use different passwords for different accounts</li>
                    </ul>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* URL Scanner */}
              <TabsContent value="url" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Search className="mr-2 h-5 w-5 text-india-saffron" /> 
                      URL Security Scanner
                    </CardTitle>
                    <CardDescription>
                      Check if a website or link is safe before visiting it.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="url" className="text-sm font-medium">Enter URL to Scan</label>
                      <div className="flex space-x-2">
                        <Input 
                          id="url" 
                          type="url" 
                          value={urlInput}
                          onChange={(e) => setUrlInput(e.target.value)}
                          placeholder="https://example.com"
                          className="flex-1"
                        />
                        <Button 
                          onClick={scanUrl} 
                          disabled={scanning}
                          className="bg-india-saffron hover:bg-india-saffron/90"
                        >
                          {scanning ? "Scanning..." : "Scan"}
                        </Button>
                      </div>
                    </div>
                    
                    {scanning && (
                      <div className="text-center py-6 animate-pulse">
                        <Shield className="h-12 w-12 mx-auto text-india-saffron mb-4" />
                        <p className="text-sm font-medium">Scanning URL for threats...</p>
                        <Progress value={undefined} className="mt-4 h-2" />
                      </div>
                    )}
                    
                    {scanResult && (
                      <div className={`mt-4 p-4 rounded-md ${
                        scanResult.safe ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'
                      } animate-fade-in`}>
                        <div className="flex items-center mb-2">
                          {scanResult.safe ? (
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600 mr-2" />
                          )}
                          <span className={`font-medium ${scanResult.safe ? 'text-green-700' : 'text-red-700'}`}>
                            {scanResult.safe ? 'URL appears to be safe' : 'Potential threat detected'}
                          </span>
                        </div>
                        
                        <p className="text-sm text-gray-700 mb-2">
                          {scanResult.details}
                        </p>
                        
                        {!scanResult.safe && (
                          <div className="mt-2 text-sm text-red-700">
                            <p className="font-medium">Threats found: {scanResult.threats}</p>
                            <p className="mt-1">We recommend not visiting this website.</p>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex flex-col items-start">
                    <h4 className="text-sm font-semibold mb-2">URL Safety Tips:</h4>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                      <li>Check for HTTPS before entering sensitive information</li>
                      <li>Be cautious of shortened URLs (bit.ly, tinyurl, etc.)</li>
                      <li>Verify website legitimacy before downloading files</li>
                      <li>Be skeptical of emails asking you to click on links</li>
                    </ul>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center text-india-navyBlue">More Security Tools</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <FileCheck className="h-8 w-8 text-india-saffron mb-2" />
                  <CardTitle className="text-lg">Data Breach Checker</CardTitle>
                  <CardDescription>Verify if your accounts have been compromised</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => toast({
                    title: "Coming Soon",
                    description: "This tool will be available in the next update",
                  })}>
                    Coming Soon
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <Code className="h-8 w-8 text-india-saffron mb-2" />
                  <CardTitle className="text-lg">Encryption Tools</CardTitle>
                  <CardDescription>Encrypt and decrypt sensitive information</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => toast({
                    title: "Coming Soon",
                    description: "This tool will be available in the next update",
                  })}>
                    Coming Soon
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <AlertTriangle className="h-8 w-8 text-india-saffron mb-2" />
                  <CardTitle className="text-lg">Threat Intelligence</CardTitle>
                  <CardDescription>Get latest alerts on emerging cyber threats</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => toast({
                    title: "Coming Soon",
                    description: "This tool will be available in the next update",
                  })}>
                    Coming Soon
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <Zap className="h-8 w-8 text-india-saffron mb-2" />
                  <CardTitle className="text-lg">Security Assessment</CardTitle>
                  <CardDescription>Evaluate your organization's security posture</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => toast({
                    title: "Coming Soon",
                    description: "This tool will be available in the next update",
                  })}>
                    Coming Soon
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
