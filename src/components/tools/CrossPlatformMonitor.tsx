
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Globe, 
  ExternalLink, 
  Filter, 
  Users, 
  Clock, 
  Zap,
  RefreshCw,
  Search
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from '@/hooks/use-toast';

// Mock platforms data
const platforms = [
  { id: 'twitter', name: 'Twitter', icon: '/ic_twitter.svg', color: '#1DA1F2', accounts: 3245, threats: 127 },
  { id: 'facebook', name: 'Facebook', icon: '/ic_facebook.svg', color: '#4267B2', accounts: 2876, threats: 89 },
  { id: 'instagram', name: 'Instagram', icon: '/ic_instagram.svg', color: '#C13584', accounts: 1928, threats: 64 },
  { id: 'telegram', name: 'Telegram', icon: '/ic_telegram.svg', color: '#0088cc', accounts: 784, threats: 38 },
  { id: 'whatsapp', name: 'WhatsApp', icon: '/ic_whatsapp.svg', color: '#25D366', accounts: 492, threats: 18 },
  { id: 'youtube', name: 'YouTube', icon: '/ic_youtube.svg', color: '#FF0000', accounts: 653, threats: 25 },
];

// Mock trending threats
const trendingThreats = [
  { hashtag: '#ElectionMisinformation', count: 1245, trend: 'rising', platform: 'Twitter', date: new Date() },
  { hashtag: '#ViralDeepfake', count: 893, trend: 'stable', platform: 'Facebook', date: new Date(Date.now() - 1000 * 60 * 60) },
  { hashtag: '#FakeGovtOrder', count: 758, trend: 'rising', platform: 'WhatsApp', date: new Date(Date.now() - 1000 * 60 * 60 * 3) },
  { hashtag: '#CovidRumor', count: 621, trend: 'falling', platform: 'Instagram', date: new Date(Date.now() - 1000 * 60 * 60 * 5) },
  { hashtag: '#ScamCampaign', count: 432, trend: 'rising', platform: 'Telegram', date: new Date(Date.now() - 1000 * 60 * 60 * 8) }
];

// Recent scans mock data
const generateRecentScans = () => {
  const scans = [];
  const platforms = ['Twitter', 'Facebook', 'Instagram', 'WhatsApp', 'Telegram', 'YouTube'];
  const status = ['Clean', 'Suspicious', 'Fake', 'Clean', 'Clean', 'Suspicious'];
  const username = ['user', 'real', 'official', 'digital', 'india', 'cyber', 'secure'];
  
  for (let i = 0; i < 10; i++) {
    const platform = platforms[Math.floor(Math.random() * platforms.length)];
    const scanStatus = status[Math.floor(Math.random() * status.length)];
    const name = `${username[Math.floor(Math.random() * username.length)]}${username[Math.floor(Math.random() * username.length)]}${Math.floor(Math.random() * 1000)}`;
    
    scans.push({
      id: `scan-${i}`,
      username: name,
      platform,
      status: scanStatus,
      timestamp: new Date(Date.now() - (Math.random() * 1000 * 60 * 60 * 24)),
      riskScore: scanStatus === 'Clean' ? Math.floor(Math.random() * 30) : 
                scanStatus === 'Suspicious' ? 30 + Math.floor(Math.random() * 40) : 
                70 + Math.floor(Math.random() * 30)
    });
  }
  
  return scans.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};

const timeAgo = (date: Date) => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + ' years ago';
  
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + ' months ago';
  
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + ' days ago';
  
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + ' hours ago';
  
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + ' minutes ago';
  
  return Math.floor(seconds) + ' seconds ago';
};

const getRiskColor = (score: number) => {
  if (score < 30) return 'bg-green-500';
  if (score < 70) return 'bg-yellow-500';
  return 'bg-red-500';
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Clean':
      return <Badge className="bg-green-100 hover:bg-green-100 text-green-800 border-green-200">Clean</Badge>;
    case 'Suspicious':
      return <Badge className="bg-yellow-100 hover:bg-yellow-100 text-yellow-800 border-yellow-200">Suspicious</Badge>;
    case 'Fake':
      return <Badge className="bg-red-100 hover:bg-red-100 text-red-800 border-red-200">Fake</Badge>;
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

const CrossPlatformMonitor = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [recentScans, setRecentScans] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setRecentScans(generateRecentScans());
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = () => {
    if (!searchQuery) return;
    
    toast({
      title: "Searching accounts",
      description: `Scanning for "${searchQuery}" across all platforms`,
    });
    
    // Simulate search loading
    setLoading(true);
    setTimeout(() => {
      const newScans = generateRecentScans().slice(0, 3);
      newScans[0].username = searchQuery;
      setRecentScans([...newScans, ...recentScans.slice(0, 7)]);
      setLoading(false);
      
      toast({
        title: "Search complete",
        description: "Found 3 matching accounts",
      });
    }, 2000);
  };

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setRecentScans(generateRecentScans());
      setLoading(false);
      
      toast({
        title: "Data refreshed",
        description: "Latest platform data loaded",
      });
    }, 1500);
  };

  return (
    <Card className="w-full bg-gradient-to-br from-white to-india-lightBg border border-gray-200 shadow-md mb-8">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-india-green/10 p-2 rounded-full">
            <Globe className="h-6 w-6 text-india-green" />
          </div>
          <div>
            <CardTitle className="text-xl text-india-accent2">Cross-Platform Monitoring</CardTitle>
            <CardDescription>Monitor suspicious accounts and trends across all social platforms</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-grow">
            <div className="flex gap-2 w-full">
              <Input
                placeholder="Search account username across platforms"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow"
              />
              <Button 
                onClick={handleSearch} 
                className="bg-india-navyBlue hover:bg-india-navyBlue/90"
                disabled={!searchQuery}
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={handleRefresh} disabled={loading}>
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            </Button>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {platforms.map(platform => (
            <Card key={platform.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div 
                    className="h-10 w-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${platform.color}20` }}
                  >
                    <span style={{ color: platform.color }} className="text-lg font-bold">
                      {platform.name.charAt(0)}
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {platform.threats} threats
                  </Badge>
                </div>
                <h3 className="font-medium">{platform.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{platform.accounts.toLocaleString()} accounts monitored</p>
                <Progress 
                  value={Math.min(100, platform.threats / platform.accounts * 1000)} 
                  className="h-1"
                />
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-sm h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Recent Account Scans</CardTitle>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-gray-500">Live updates</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <RefreshCw className="h-8 w-8 text-india-navyBlue animate-spin mb-4" />
                    <p className="text-gray-500">Loading latest scan data...</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {recentScans.slice(0, showAll ? undefined : 5).map(scan => (
                      <div key={scan.id} className="flex justify-between items-center border-b border-gray-100 pb-3">
                        <div className="flex items-center">
                          <div className="mr-3 p-1.5 bg-gray-100 rounded-md text-xs font-medium">
                            {scan.platform.substring(0, 2)}
                          </div>
                          <div>
                            <div className="flex items-center">
                              <span className="font-medium">@{scan.username}</span>
                              <div className="ml-2">
                                {getStatusBadge(scan.status)}
                              </div>
                            </div>
                            <div className="flex items-center text-xs text-gray-500 mt-0.5">
                              <span>{scan.platform}</span>
                              <span className="mx-2">•</span>
                              <span>{timeAgo(scan.timestamp)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="text-right text-sm font-medium">
                              {scan.riskScore}%
                            </div>
                            <div className="w-16 bg-gray-200 rounded-full h-1.5">
                              <div 
                                className={`h-1.5 rounded-full ${getRiskColor(scan.riskScore)}`}
                                style={{ width: `${scan.riskScore}%` }}
                              ></div>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-7 w-7">
                            <ExternalLink className="h-3.5 w-3.5 text-gray-500" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    {!showAll && recentScans.length > 5 && (
                      <Button 
                        variant="ghost" 
                        className="w-full text-india-navyBlue hover:text-india-navyBlue/80"
                        onClick={() => setShowAll(true)}
                      >
                        Show All Scans ({recentScans.length})
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-white shadow-sm h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Trending Threats</CardTitle>
                  <BarChart3 className="h-4 w-4 text-gray-400" />
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {trendingThreats.map((threat, index) => (
                    <div key={index} className="border-b border-gray-100 pb-3">
                      <div className="flex justify-between">
                        <div className="font-medium text-sm">{threat.hashtag}</div>
                        <Badge 
                          variant="outline" 
                          className={threat.trend === 'rising' 
                            ? 'text-red-600 border-red-200 bg-red-50' 
                            : threat.trend === 'falling' 
                            ? 'text-green-600 border-green-200 bg-green-50'
                            : 'text-yellow-600 border-yellow-200 bg-yellow-50'
                          }
                        >
                          {threat.trend === 'rising' ? '↑' : threat.trend === 'falling' ? '↓' : '→'} {threat.count}
                        </Badge>
                      </div>
                      <div className="flex items-center text-xs text-gray-500 mt-0.5">
                        <span>{threat.platform}</span>
                        <span className="mx-2">•</span>
                        <span>{timeAgo(threat.date)}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-2 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Zap className="h-4 w-4 mr-1.5 text-india-saffron" />
                      <span>Real-time monitoring active</span>
                    </div>
                    <Button variant="link" size="sm" className="h-auto p-0 text-india-navyBlue">
                      View All
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-india-accent2/5 rounded-lg p-4 border border-india-accent2/20">
          <div className="flex items-center mb-3">
            <Users className="h-5 w-5 text-india-accent2 mr-2" />
            <h3 className="font-medium text-india-accent2">Monitor Any Platform</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            ChakraShield provides unified monitoring across all major social media platforms. 
            Track suspicious accounts, deepfakes, and coordinated campaigns with our advanced AI technology.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-white">Twitter</Badge>
            <Badge variant="outline" className="bg-white">Facebook</Badge>
            <Badge variant="outline" className="bg-white">Instagram</Badge>
            <Badge variant="outline" className="bg-white">YouTube</Badge>
            <Badge variant="outline" className="bg-white">WhatsApp</Badge>
            <Badge variant="outline" className="bg-white">Telegram</Badge>
            <Badge variant="outline" className="bg-white">LinkedIn</Badge>
            <Badge variant="outline" className="bg-white">TikTok</Badge>
            <Badge variant="outline" className="bg-white">+16 more</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CrossPlatformMonitor;
