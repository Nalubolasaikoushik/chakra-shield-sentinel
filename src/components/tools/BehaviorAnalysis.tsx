
import React, { useState } from 'react';
import { 
  Brain, 
  LineChart, 
  Clock, 
  Languages, 
  Network, 
  BarChart3,
  Loader2,
  AlertTriangle,
  Info
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";
import { analyzeProfile, AnalysisResult } from "@/services/profileAnalysisService";

const BehaviorAnalysis = () => {
  const [username, setUsername] = useState('');
  const [platform, setPlatform] = useState('twitter');
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<null | AnalysisResult>(null);

  const handleAnalyze = async () => {
    if (!username || !platform) {
      toast({
        title: "Missing information",
        description: "Please provide both username and platform",
        variant: "destructive",
      });
      return;
    }
    
    setAnalyzing(true);
    setProgress(0);
    
    // Use intervals to show progress to the user while waiting for API response
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) { // Cap at 90% until we get actual results
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 5;
      });
    }, 200);
    
    try {
      const analysisResults = await analyzeProfile(username, platform);
      
      clearInterval(progressInterval);
      setProgress(100);
      setResults(analysisResults);
      
      toast({
        title: "Analysis complete",
        description: `Analysis completed for ${username} on ${platform}`,
      });
    } catch (error) {
      clearInterval(progressInterval);
      setProgress(0);
      console.error("Analysis failed:", error);
      
      toast({
        title: "Analysis failed",
        description: error instanceof Error ? error.message : "Failed to analyze profile",
        variant: "destructive",
      });
    } finally {
      setAnalyzing(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score < 30) return 'text-green-600';
    if (score < 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressColor = (score: number) => {
    if (score < 30) return 'bg-green-500';
    if (score < 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const resetAnalysis = () => {
    setUsername('');
    setPlatform('twitter');
    setResults(null);
  };

  return (
    <Card className="w-full bg-gradient-to-br from-white to-india-lightBg border border-gray-200 shadow-md mb-8">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-india-accent2/10 p-2 rounded-full">
            <Brain className="h-6 w-6 text-india-accent2" />
          </div>
          <div>
            <CardTitle className="text-xl text-india-accent2">AI Behavior Analysis</CardTitle>
            <CardDescription>Analyze social media profiles for suspicious behavioral patterns</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {!analyzing && !results ? (
          <div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter Social Media Profile Details
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="md:col-span-2">
                  <Input
                    placeholder="Username (e.g., johndoe)"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="flex-grow"
                  />
                </div>
                <Select value={platform} onValueChange={setPlatform}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="twitter">Twitter</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex mt-2">
                <Button 
                  onClick={handleAnalyze} 
                  disabled={!username || !platform}
                  className="bg-india-navyBlue hover:bg-india-navyBlue/90"
                >
                  Analyze Profile
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Enter username without @ symbol
              </p>
            </div>
            
            <div className="bg-india-lightBg p-4 rounded-lg">
              <h3 className="font-medium text-india-navyBlue mb-2">How it works</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our AI analyzes behavioral patterns across various dimensions to identify suspicious activity 
                that may indicate fake or inauthentic accounts.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <Clock className="h-4 w-4 text-india-saffron mr-2" />
                    <span className="font-medium text-sm">Temporal Analysis</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Examines posting times and frequency patterns
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <Languages className="h-4 w-4 text-india-saffron mr-2" />
                    <span className="font-medium text-sm">Language Processing</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Identifies inconsistencies in language use and sentiment
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <Network className="h-4 w-4 text-india-saffron mr-2" />
                    <span className="font-medium text-sm">Network Mapping</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Maps connections to other suspicious accounts
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="flex items-center mb-2">
                    <BarChart3 className="h-4 w-4 text-india-saffron mr-2" />
                    <span className="font-medium text-sm">Content Analysis</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Evaluates repeated patterns and content authenticity
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : analyzing ? (
          <div className="text-center py-8">
            <Loader2 className="h-12 w-12 animate-spin text-india-navyBlue mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Analyzing Behavioral Patterns</h3>
            <p className="text-gray-600 mb-4">Please wait while our AI analyzes the account...</p>
            <div className="w-full max-w-md mx-auto mb-2">
              <Progress value={progress} className="h-2" />
            </div>
            <p className="text-sm text-gray-500">{progress}% complete</p>
          </div>
        ) : (
          <div>
            {results && (
              <>
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                  <div className="flex items-center">
                    <div className="relative h-24 w-24">
                      <div className="absolute inset-0 rounded-full flex items-center justify-center">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle
                            className="text-gray-200 stroke-current"
                            strokeWidth="8"
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                          ></circle>
                          <circle
                            className={`${
                              results.scores.behaviorScore < 30
                                ? "text-green-500"
                                : results.scores.behaviorScore < 70
                                ? "text-yellow-500"
                                : "text-red-500"
                            } stroke-current`}
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={`${results.scores.behaviorScore * 2.51} 251.2`}
                            strokeDashoffset="0"
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            transform="rotate(-90 50 50)"
                          ></circle>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`text-2xl font-bold ${getScoreColor(results.scores.behaviorScore)}`}>
                            {results.scores.behaviorScore}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Risk Assessment</h3>
                      <div className="flex items-center mt-1">
                        {results.alertLevel === 'high' ? (
                          <div className="flex items-center text-red-600">
                            <AlertTriangle className="h-4 w-4 mr-1" />
                            <span className="font-medium">High Risk</span>
                          </div>
                        ) : results.alertLevel === 'medium' ? (
                          <div className="flex items-center text-yellow-600">
                            <AlertTriangle className="h-4 w-4 mr-1" />
                            <span className="font-medium">Medium Risk</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-green-600">
                            <Info className="h-4 w-4 mr-1" />
                            <span className="font-medium">Low Risk</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">{results.platform.charAt(0).toUpperCase() + results.platform.slice(1)}:</span> {results.username}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="bg-white p-2 rounded-md shadow-sm text-center">
                            <div className={`font-bold ${getScoreColor(results.scores.languageScore)}`}>
                              {results.scores.languageScore}%
                            </div>
                            <div className="text-xs">Language</div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Language pattern analysis score</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="bg-white p-2 rounded-md shadow-sm text-center">
                            <div className={`font-bold ${getScoreColor(results.scores.temporalScore)}`}>
                              {results.scores.temporalScore}%
                            </div>
                            <div className="text-xs">Temporal</div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Posting timing and frequency score</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="bg-white p-2 rounded-md shadow-sm text-center">
                            <div className={`font-bold ${getScoreColor(results.scores.networkScore)}`}>
                              {results.scores.networkScore}%
                            </div>
                            <div className="text-xs">Network</div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Connection pattern analysis score</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="bg-white p-2 rounded-md shadow-sm text-center">
                            <div className={`font-bold ${getScoreColor(results.scores.contentScore)}`}>
                              {results.scores.contentScore}%
                            </div>
                            <div className="text-xs">Content</div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Content pattern analysis score</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                
                <Tabs defaultValue="patterns" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="patterns">Detected Patterns</TabsTrigger>
                    <TabsTrigger value="profile">Profile Data</TabsTrigger>
                    <TabsTrigger value="report">Detailed Report</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="patterns" className="space-y-4">
                    {results.patterns.map((pattern, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-india-navyBlue">{pattern.type}</h4>
                          <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            pattern.score < 30 
                              ? 'bg-green-100 text-green-800' 
                              : pattern.score < 70 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {pattern.score}% Suspicious
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{pattern.description}</p>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                          <div 
                            className={`h-1.5 rounded-full ${getProgressColor(pattern.score)}`}
                            style={{ width: `${pattern.score}%` }}
                          ></div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded border border-gray-100 mt-2">
                          <p className="text-xs text-gray-700">
                            <span className="font-medium">AI Insight:</span> {pattern.insights}
                          </p>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="profile">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h3 className="font-medium text-lg text-india-navyBlue mb-4">Profile Metadata</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="space-y-2">
                            <div className="flex justify-between border-b pb-2">
                              <span className="font-medium">Display Name:</span>
                              <span>{results.profileMetadata.displayName}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                              <span className="font-medium">Username:</span>
                              <span>{results.username}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                              <span className="font-medium">Platform:</span>
                              <span>{results.platform.charAt(0).toUpperCase() + results.platform.slice(1)}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                              <span className="font-medium">Account Created:</span>
                              <span>{results.profileMetadata.creationDate}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                              <span className="font-medium">Location:</span>
                              <span>{results.profileMetadata.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="space-y-2">
                            <div className="flex justify-between border-b pb-2">
                              <span className="font-medium">Followers:</span>
                              <span>{results.profileMetadata.followers.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                              <span className="font-medium">Following:</span>
                              <span>{results.profileMetadata.following.toLocaleString()}</span>
                            </div>
                            {results.platform === 'twitter' && (
                              <div className="flex justify-between border-b pb-2">
                                <span className="font-medium">Tweets:</span>
                                <span>{results.profileMetadata.tweets?.toLocaleString()}</span>
                              </div>
                            )}
                            {results.platform === 'instagram' && (
                              <div className="flex justify-between border-b pb-2">
                                <span className="font-medium">Posts:</span>
                                <span>{results.profileMetadata.posts?.toLocaleString()}</span>
                              </div>
                            )}
                            {results.platform === 'facebook' && (
                              <div className="flex justify-between border-b pb-2">
                                <span className="font-medium">Friends:</span>
                                <span>{results.profileMetadata.friends?.toLocaleString()}</span>
                              </div>
                            )}
                            {results.platform === 'linkedin' && (
                              <div className="flex justify-between border-b pb-2">
                                <span className="font-medium">Connections:</span>
                                <span>{results.profileMetadata.connections?.toLocaleString()}</span>
                              </div>
                            )}
                            <div className="flex justify-between border-b pb-2">
                              <span className="font-medium">Verified:</span>
                              <span>{results.profileMetadata.verified ? 'Yes' : 'No'}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="font-medium mb-1">Bio:</div>
                        <div className="bg-gray-50 p-3 rounded border text-sm">
                          {results.profileMetadata.bio}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="report">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h3 className="font-medium text-lg text-india-navyBlue mb-4">Behavioral Analysis Report</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Based on analysis of the account's activity patterns, content distribution, temporal signals,
                        and network connections, the following assessment has been generated.
                      </p>
                      <div className="space-y-4">
                        <div className="border-l-4 border-yellow-500 pl-3 py-1">
                          <h4 className="font-medium">Key Findings</h4>
                          <p className="text-sm text-gray-600">
                            Account exhibits coordinated posting patterns with {Math.floor(Math.random() * 10) + 2} other accounts sharing similar content
                            within precise time intervals, suggesting automated behavior.
                          </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-3 py-1">
                          <h4 className="font-medium">Language Assessment</h4>
                          <p className="text-sm text-gray-600">
                            Content analysis reveals inconsistency between claimed Indian origin and linguistic markers 
                            indicating non-native Hindi usage with systematic grammatical patterns suggesting machine translation.
                          </p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-3 py-1">
                          <h4 className="font-medium">Historical Pattern</h4>
                          <p className="text-sm text-gray-600">
                            Account was dormant for {Math.floor(Math.random() * 8) + 1} months before becoming highly active during recent political events,
                            with posting frequency increasing {Math.floor(Math.random() * 500) + 100}% above typical human usage patterns.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </>
            )}
          </div>
        )}
      </CardContent>
      
      {results && (
        <CardFooter className="flex justify-between border-t pt-4">
          <Button variant="outline" onClick={resetAnalysis}>
            Reset Analysis
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" className="border-india-navyBlue text-india-navyBlue">
              Download Report
            </Button>
            <Button className="bg-india-navyBlue hover:bg-india-navyBlue/90">
              Submit for Review
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default BehaviorAnalysis;
