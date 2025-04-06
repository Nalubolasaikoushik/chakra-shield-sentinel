
import React, { useState, useEffect } from 'react';
import { Network, Users, Search, Filter, RefreshCw, List, Grid, Share2, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Mock data for network visualization
const generateMockNetwork = () => {
  const nodeCount = 20 + Math.floor(Math.random() * 30);
  const nodes = Array.from({ length: nodeCount }).map((_, index) => ({
    id: `node-${index}`,
    type: Math.random() > 0.7 ? 'suspicious' : 'normal',
    name: `user${index + 100}`,
    platform: ['Twitter', 'Facebook', 'Instagram'][Math.floor(Math.random() * 3)],
    influence: Math.floor(Math.random() * 100),
    connections: Math.floor(Math.random() * 15) + 2,
    x: 50 + Math.random() * 800,
    y: 50 + Math.random() * 400,
    radius: 5 + Math.random() * 10
  }));
  
  const links = [];
  for (let i = 0; i < nodes.length; i++) {
    const connectionCount = Math.floor(Math.random() * 5) + 1;
    for (let j = 0; j < connectionCount; j++) {
      const target = Math.floor(Math.random() * nodes.length);
      if (i !== target) {
        links.push({
          source: i,
          target,
          strength: Math.random()
        });
      }
    }
  }
  
  return { nodes, links };
};

const NetworkMapping = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [networkData, setNetworkData] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'graph' | 'list'>('graph');
  const { toast } = useToast();

  const handleSearch = () => {
    if (!query) return;
    
    setIsLoading(true);
    setProgress(0);
    
    // Simulate loading process
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          setNetworkData(generateMockNetwork());
          return 100;
        }
        return prev + 5;
      });
    }, 180);
  };

  const shareResults = () => {
    toast({
      title: "Results Shared",
      description: "Network analysis has been shared with authorized agencies",
    });
  };

  const downloadReport = () => {
    toast({
      title: "Report Downloaded",
      description: "Network analysis report has been downloaded",
    });
  };
  
  // Simple canvas-based network visualization
  useEffect(() => {
    if (networkData && viewMode === 'graph') {
      const canvas = document.getElementById('network-canvas') as HTMLCanvasElement;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Set canvas dimensions
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw links
      ctx.strokeStyle = 'rgba(180, 180, 200, 0.3)';
      ctx.lineWidth = 1;
      networkData.links.forEach((link: any) => {
        const source = networkData.nodes[link.source];
        const target = networkData.nodes[link.target];
        
        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();
      });
      
      // Draw nodes
      networkData.nodes.forEach((node: any) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        
        if (node.type === 'suspicious') {
          ctx.fillStyle = 'rgba(239, 68, 68, 0.7)';
        } else {
          ctx.fillStyle = 'rgba(59, 130, 246, 0.7)';
        }
        
        ctx.fill();
        
        // Add label for larger nodes
        if (node.radius > 8) {
          ctx.fillStyle = '#333';
          ctx.font = '10px Arial';
          ctx.fillText(node.name, node.x - 15, node.y - node.radius - 5);
        }
      });
    }
  }, [networkData, viewMode]);

  return (
    <Card className="w-full bg-gradient-to-br from-white to-india-lightBg border border-gray-200 shadow-md mb-8">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-india-green/10 p-2 rounded-full">
            <Network className="h-6 w-6 text-india-green" />
          </div>
          <div>
            <CardTitle className="text-xl text-india-accent2">Network Mapping Analysis</CardTitle>
            <CardDescription>Visualize connections between potentially coordinated inauthentic accounts</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex gap-3 items-center mb-4">
            <Input
              placeholder="Enter @username or hashtag to map network"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={isLoading}
              className="flex-grow"
            />
            <Button 
              onClick={handleSearch} 
              disabled={!query || isLoading}
              className="bg-india-navyBlue hover:bg-india-navyBlue/90 whitespace-nowrap"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Analyze Network
                </>
              )}
            </Button>
          </div>
          
          {isLoading && (
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Mapping network connections</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </div>
        
        {networkData ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                <span>{networkData.nodes.length} accounts</span>
                <span>|</span>
                <span>{networkData.links.length} connections</span>
              </div>
              
              <div className="flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 w-8 p-0"
                        onClick={() => setViewMode('graph')}
                      >
                        <Grid className={`h-4 w-4 ${viewMode === 'graph' ? 'text-india-accent2' : 'text-gray-500'}`} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Graph View</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 w-8 p-0"
                        onClick={() => setViewMode('list')}
                      >
                        <List className={`h-4 w-4 ${viewMode === 'list' ? 'text-india-accent2' : 'text-gray-500'}`} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>List View</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 p-0 px-2 text-xs">
                        <Filter className="h-3 w-3 mr-1" />
                        Filter
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Filter Network</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden border border-gray-200 bg-white">
              {viewMode === 'graph' ? (
                <div className="h-[400px] relative">
                  <canvas id="network-canvas" className="w-full h-full"></canvas>
                  <div className="absolute bottom-3 left-3 bg-white/80 p-2 rounded-md border border-gray-200 text-xs">
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-blue-500 opacity-70 mr-2"></div>
                      <span>Normal Account</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 opacity-70 mr-2"></div>
                      <span>Suspicious Account</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="max-h-[400px] overflow-y-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Account
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Platform
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Connections
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Risk Level
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {networkData.nodes.map((node: any) => (
                        <tr key={node.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                                {node.name.substring(0, 2).toUpperCase()}
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">@{node.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {node.platform}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {node.connections}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              node.type === 'suspicious' 
                                ? 'bg-red-100 text-red-800' 
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {node.type === 'suspicious' ? 'High' : 'Low'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-md p-3">
              <h4 className="text-sm font-medium text-yellow-800 mb-1">Analysis Insight</h4>
              <p className="text-xs text-yellow-700">
                Detected a coordinated network of {Math.floor(networkData.nodes.length * 0.4)} suspicious accounts showing similar posting patterns 
                and content distribution. These accounts exhibit a centralized command structure with unusual synchronization
                in their activities, suggesting a potential influence operation.
              </p>
            </div>
          </>
        ) : !isLoading && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center h-[400px] flex flex-col items-center justify-center">
            <Network className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Analyze Network Connections</h3>
            <p className="text-gray-500 max-w-md mb-6">
              Enter a username or hashtag to map potentially coordinated networks of inauthentic accounts
              operating across social media platforms.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-medium mb-1">Coordination Detection</div>
                <div className="text-xs text-gray-600">Identify clusters of accounts working together</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-medium mb-1">Influence Mapping</div>
                <div className="text-xs text-gray-600">Track information flow across networks</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-medium mb-1">Command Structure</div>
                <div className="text-xs text-gray-600">Reveal hierarchical organization</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="font-medium mb-1">Cross-Platform Analysis</div>
                <div className="text-xs text-gray-600">Link accounts across multiple platforms</div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      
      {networkData && (
        <CardFooter className="flex justify-between border-t pt-4">
          <Button 
            variant="outline" 
            onClick={() => {
              setNetworkData(null);
              setQuery('');
            }}
          >
            New Analysis
          </Button>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="border-india-navyBlue text-india-navyBlue"
              onClick={downloadReport}
            >
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button 
              className="bg-india-navyBlue hover:bg-india-navyBlue/90"
              onClick={shareResults}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share With Authorities
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default NetworkMapping;
