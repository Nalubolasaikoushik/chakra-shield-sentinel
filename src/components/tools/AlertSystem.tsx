import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  Shield, 
  ShieldAlert, 
  Clock, 
  Users, 
  MapPin,
  ChevronDown,
  ChevronUp,
  Eye,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  LineChart
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';

// Define alert types
type AlertStatus = 'active' | 'investigating' | 'resolved';
type AlertSeverity = 'critical' | 'high' | 'medium' | 'low';

interface SecurityAlert {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  status: AlertStatus;
  severity: AlertSeverity;
  affectedAccounts: number;
  region: string;
  platform: string;
}

// Generate mock alerts
const generateMockAlerts = (): SecurityAlert[] => {
  const platforms = ['Twitter', 'Facebook', 'Instagram', 'Telegram', 'WhatsApp'];
  const regions = ['North India', 'South India', 'East India', 'West India', 'Central India', 'Northeast India'];
  
  const alerts: SecurityAlert[] = [
    {
      id: 'alert-001',
      title: 'Coordinated Disinformation Campaign Detected',
      description: 'Multiple accounts spreading identical misleading content about public health initiatives across social media platforms.',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      status: 'active',
      severity: 'high',
      affectedAccounts: 128,
      region: 'North India',
      platform: 'Twitter'
    },
    {
      id: 'alert-002',
      title: 'Political Impersonation Accounts',
      description: 'Cluster of fake accounts impersonating government officials discovered sharing manipulated statements.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      status: 'investigating',
      severity: 'critical',
      affectedAccounts: 42,
      region: 'South India',
      platform: 'Facebook'
    },
    {
      id: 'alert-003',
      title: 'Bot Network Promoting Scam Website',
      description: 'Automated accounts directing users to fraudulent cryptocurrency investment platform.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
      status: 'active',
      severity: 'medium',
      affectedAccounts: 76,
      region: 'West India',
      platform: 'Telegram'
    },
    {
      id: 'alert-004',
      title: 'DeepFake Video Circulation',
      description: 'AI-generated fake video of public figure being shared across multiple platforms.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
      status: 'active',
      severity: 'high',
      affectedAccounts: 215,
      region: 'East India',
      platform: 'WhatsApp'
    },
    {
      id: 'alert-005',
      title: 'Foreign Influence Operation',
      description: 'Network of accounts with suspicious activity patterns promoting divisive content.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
      status: 'investigating',
      severity: 'critical',
      affectedAccounts: 189,
      region: 'Central India',
      platform: 'Multiple'
    },
    {
      id: 'alert-006',
      title: 'Hashtag Manipulation Campaign',
      description: 'Coordinated effort to artificially boost trending topics related to regional tensions.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      status: 'resolved',
      severity: 'medium',
      affectedAccounts: 67,
      region: 'Northeast India',
      platform: 'Twitter'
    },
    {
      id: 'alert-007',
      title: 'Account Takeover Campaign',
      description: 'Multiple verified accounts showing signs of compromise and unusual posting behavior.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36), // 1.5 days ago
      status: 'resolved',
      severity: 'high',
      affectedAccounts: 23,
      region: 'South India',
      platform: 'Instagram'
    }
  ];
  
  // Add some random alerts
  for (let i = 0; i < 5; i++) {
    const hoursAgo = Math.floor(Math.random() * 72); // up to 3 days ago
    const status: AlertStatus[] = ['active', 'investigating', 'resolved'];
    const severity: AlertSeverity[] = ['critical', 'high', 'medium', 'low'];
    
    alerts.push({
      id: `alert-${(i + 8).toString().padStart(3, '0')}`,
      title: `Suspicious Account Cluster #${Math.floor(Math.random() * 1000)}`,
      description: 'Group of accounts with identical behavior patterns detected sharing suspicious content.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * hoursAgo),
      status: status[Math.floor(Math.random() * status.length)],
      severity: severity[Math.floor(Math.random() * severity.length)],
      affectedAccounts: Math.floor(Math.random() * 200) + 10,
      region: regions[Math.floor(Math.random() * regions.length)],
      platform: platforms[Math.floor(Math.random() * platforms.length)]
    });
  }
  
  // Sort by timestamp (most recent first)
  return alerts.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};

const formatTimeAgo = (date: Date): string => {
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

const getSeverityColor = (severity: AlertSeverity) => {
  switch (severity) {
    case 'critical': return 'bg-red-500 text-white';
    case 'high': return 'bg-orange-500 text-white';
    case 'medium': return 'bg-yellow-500 text-white';
    case 'low': return 'bg-blue-500 text-white';
    default: return 'bg-gray-500 text-white';
  }
};

const getStatusColor = (status: AlertStatus) => {
  switch (status) {
    case 'active': return 'bg-red-100 text-red-800';
    case 'investigating': return 'bg-yellow-100 text-yellow-800';
    case 'resolved': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: AlertStatus) => {
  switch (status) {
    case 'active': return <AlertTriangle className="h-4 w-4" />;
    case 'investigating': return <RefreshCw className="h-4 w-4" />;
    case 'resolved': return <CheckCircle2 className="h-4 w-4" />;
    default: return null;
  }
};

const AlertSystem = () => {
  const [alerts, setAlerts] = useState<SecurityAlert[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedAlerts, setExpandedAlerts] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<'all' | AlertStatus>('all');
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading alerts
    const timer = setTimeout(() => {
      setAlerts(generateMockAlerts());
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleAlert = (id: string) => {
    setExpandedAlerts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const markAsResolved = (id: string) => {
    setAlerts(prev => 
      prev.map(alert => 
        alert.id === id 
          ? { ...alert, status: 'resolved' }
          : alert
      )
    );
    
    toast({
      title: "Alert Resolved",
      description: "The alert has been marked as resolved",
      variant: "default",
    });
  };

  const assignForInvestigation = (id: string) => {
    setAlerts(prev => 
      prev.map(alert => 
        alert.id === id 
          ? { ...alert, status: 'investigating' }
          : alert
      )
    );
    
    toast({
      title: "Investigation Initiated",
      description: "Alert assigned to investigation team",
      variant: "default",
    });
  };

  const notifyAuthorities = (id: string) => {
    toast({
      title: "Authorities Notified",
      description: "Alert details have been shared with relevant agencies",
      variant: "default",
    });
  };

  const filteredAlerts = filter === 'all' 
    ? alerts 
    : alerts.filter(alert => alert.status === filter);

  const alertCounts = {
    all: alerts.length,
    active: alerts.filter(a => a.status === 'active').length,
    investigating: alerts.filter(a => a.status === 'investigating').length,
    resolved: alerts.filter(a => a.status === 'resolved').length
  };

  const criticalCount = alerts.filter(a => a.severity === 'critical' && a.status !== 'resolved').length;

  return (
    <Card className="w-full bg-gradient-to-br from-white to-india-lightBg border border-gray-200 shadow-md mb-8">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-red-100 p-2 rounded-full">
            <Bell className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <div className="flex items-center">
              <CardTitle className="text-xl text-india-accent2">Security Alert System</CardTitle>
              {criticalCount > 0 && (
                <Badge variant="destructive" className="ml-2 animate-pulse">
                  {criticalCount} Critical
                </Badge>
              )}
            </div>
            <CardDescription>Real-time monitoring of suspicious activity across social platforms</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <RefreshCw className="h-10 w-10 text-india-navyBlue animate-spin mb-4" />
            <p className="text-india-navyBlue">Loading security alerts...</p>
            <Progress value={60} className="w-48 mt-4 h-1.5" />
          </div>
        ) : (
          <>
            <Tabs defaultValue="alerts" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="alerts">Alerts Dashboard</TabsTrigger>
                <TabsTrigger value="analytics">Threat Analytics</TabsTrigger>
                <TabsTrigger value="settings">Notification Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="alerts">
                <div className="mb-4 flex flex-wrap gap-2">
                  <Button 
                    variant={filter === 'all' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setFilter('all')}
                    className={filter === 'all' ? 'bg-india-navyBlue hover:bg-india-navyBlue/90' : ''}
                  >
                    All ({alertCounts.all})
                  </Button>
                  <Button 
                    variant={filter === 'active' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setFilter('active')}
                    className={filter === 'active' ? 'bg-red-500 hover:bg-red-600' : 'border-red-200 text-red-700'}
                  >
                    Active ({alertCounts.active})
                  </Button>
                  <Button 
                    variant={filter === 'investigating' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setFilter('investigating')}
                    className={filter === 'investigating' ? 'bg-yellow-500 hover:bg-yellow-600' : 'border-yellow-200 text-yellow-700'}
                  >
                    Investigating ({alertCounts.investigating})
                  </Button>
                  <Button 
                    variant={filter === 'resolved' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setFilter('resolved')}
                    className={filter === 'resolved' ? 'bg-green-500 hover:bg-green-600' : 'border-green-200 text-green-700'}
                  >
                    Resolved ({alertCounts.resolved})
                  </Button>
                </div>
                
                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                  {filteredAlerts.length === 0 ? (
                    <div className="text-center py-8 bg-white rounded-lg border border-gray-200">
                      <ShieldAlert className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">No alerts matching the selected filter</p>
                    </div>
                  ) : (
                    filteredAlerts.map(alert => (
                      <div 
                        key={alert.id} 
                        className={`bg-white rounded-lg border ${
                          alert.severity === 'critical' && alert.status !== 'resolved' 
                            ? 'border-red-300 shadow-md' 
                            : 'border-gray-200'
                        } overflow-hidden transition-all duration-200`}
                      >
                        <div 
                          className={`px-4 py-3 flex items-center justify-between cursor-pointer ${
                            alert.severity === 'critical' && alert.status !== 'resolved' 
                              ? 'bg-red-50' 
                              : ''
                          }`}
                          onClick={() => toggleAlert(alert.id)}
                        >
                          <div className="flex items-center">
                            <div className={`h-2.5 w-2.5 rounded-full mr-3 ${
                              alert.status === 'active' 
                                ? 'bg-red-500 animate-pulse' 
                                : alert.status === 'investigating' 
                                ? 'bg-yellow-500' 
                                : 'bg-green-500'
                            }`}></div>
                            <div>
                              <div className="flex items-center">
                                <h3 className="font-medium text-gray-900">{alert.title}</h3>
                                <Badge 
                                  className={`ml-2 ${getSeverityColor(alert.severity)}`}
                                  variant="outline"
                                >
                                  {alert.severity}
                                </Badge>
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                {formatTimeAgo(alert.timestamp)} • {alert.platform} • {alert.region}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge 
                              className={`flex items-center gap-1 ${getStatusColor(alert.status)}`}
                              variant="outline"
                            >
                              {getStatusIcon(alert.status)}
                              <span>{alert.status}</span>
                            </Badge>
                            <div>
                              {expandedAlerts.has(alert.id) ? (
                                <ChevronUp className="h-5 w-5 text-gray-400" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {expandedAlerts.has(alert.id) && (
                          <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                            <p className="text-sm text-gray-700 mb-3">{alert.description}</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-gray-600 mb-4">
                              <div className="flex items-center">
                                <Users className="h-3.5 w-3.5 mr-1 text-gray-500" />
                                <span>{alert.affectedAccounts} affected accounts</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-3.5 w-3.5 mr-1 text-gray-500" />
                                <span>{alert.region}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-3.5 w-3.5 mr-1 text-gray-500" />
                                <span>Detected {formatTimeAgo(alert.timestamp)}</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {alert.status !== 'resolved' && (
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  className="text-green-700 border-green-200 hover:bg-green-50"
                                  onClick={() => markAsResolved(alert.id)}
                                >
                                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />
                                  Mark Resolved
                                </Button>
                              )}
                              {alert.status === 'active' && (
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  className="text-yellow-700 border-yellow-200 hover:bg-yellow-50"
                                  onClick={() => assignForInvestigation(alert.id)}
                                >
                                  <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
                                  Assign Investigation
                                </Button>
                              )}
                              <Button 
                                size="sm"
                                className="bg-india-navyBlue hover:bg-india-navyBlue/90"
                                onClick={() => notifyAuthorities(alert.id)}
                              >
                                <Shield className="h-3.5 w-3.5 mr-1.5" />
                                Notify Authorities
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                className="ml-auto"
                              >
                                <Eye className="h-3.5 w-3.5 mr-1.5" />
                                View Full Details
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="analytics">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <LineChart className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-medium mb-2">Threat Analytics Dashboard</h3>
                  <p className="text-gray-500 mb-4">
                    Analyze trends and patterns in security alerts across platforms and regions
                  </p>
                  <Button className="bg-india-navyBlue hover:bg-india-navyBlue/90">
                    Launch Analytics Dashboard
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="settings">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <Bell className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-medium mb-2">Notification Preferences</h3>
                  <p className="text-gray-500 mb-4">
                    Configure how and when you receive alerts about security incidents
                  </p>
                  <Button className="bg-india-navyBlue hover:bg-india-navyBlue/90">
                    Manage Notification Settings
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </>
        )}
      </CardContent>
      
      <CardFooter className="flex items-center border-t pt-4">
        <div className="flex items-center mr-auto text-sm text-gray-600">
          <Shield className="h-4 w-4 mr-2 text-india-navyBlue" />
          <span>ChakraShield Security Monitor v1.0</span>
        </div>
        <Button variant="outline" className="border-india-navyBlue text-india-navyBlue">
          View All Security Incidents
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AlertSystem;
