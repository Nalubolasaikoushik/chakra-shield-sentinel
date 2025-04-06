
import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  PieChart, 
  LineChart, 
  Globe, 
  AlertTriangle, 
  Shield, 
  Users, 
  RefreshCw,
  Zap,
  Brain
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

// Mock data for the threat intelligence dashboard
const mockThreatData = {
  summary: {
    totalThreats: 358,
    criticalThreats: 42,
    resolvedThreats: 216,
    threatTypes: [
      { type: "Phishing", count: 145, percentage: 40 },
      { type: "Malware", count: 87, percentage: 24 },
      { type: "Data Breach", count: 63, percentage: 18 },
      { type: "DDoS", count: 38, percentage: 11 },
      { type: "Others", count: 25, percentage: 7 }
    ],
    timeline: [
      { date: "Jan", count: 15 },
      { date: "Feb", count: 28 },
      { date: "Mar", count: 42 },
      { date: "Apr", count: 37 },
      { date: "May", count: 32 },
      { date: "Jun", count: 45 }
    ],
    regions: [
      { region: "North", count: 120, percentage: 34 },
      { region: "South", count: 95, percentage: 27 },
      { region: "East", count: 76, percentage: 21 },
      { region: "West", count: 67, percentage: 18 }
    ]
  },
  realTimeAlerts: [
    { id: 1, type: "Phishing", severity: "High", target: "Email Systems", time: "10 mins ago", status: "Active" },
    { id: 2, type: "Malware", severity: "Critical", target: "User Workstations", time: "32 mins ago", status: "Active" },
    { id: 3, type: "DDoS", severity: "Medium", target: "Web Servers", time: "1 hour ago", status: "Investigating" },
    { id: 4, type: "Data Breach", severity: "Critical", target: "Database Servers", time: "3 hours ago", status: "Contained" },
    { id: 5, type: "Phishing", severity: "Low", target: "Social Media", time: "5 hours ago", status: "Resolved" }
  ],
  predictions: {
    weekTrend: "Increasing",
    weekChange: 12,
    recommendation: "Enhance email filtering and user awareness training due to predicted spike in phishing attempts",
    predictedHotspots: [
      { area: "Banking Portals", likelihood: 85, impact: "High" },
      { area: "Government Portals", likelihood: 70, impact: "Critical" },
      { area: "Healthcare Systems", likelihood: 65, impact: "High" },
      { area: "E-commerce", likelihood: 60, impact: "Medium" }
    ]
  }
};

const ThreatIntelligence = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [threatData, setThreatData] = useState(mockThreatData);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const refreshData = () => {
    setRefreshing(true);
    
    // Simulate refreshing data
    setTimeout(() => {
      // Update with some random variations to simulate real data changes
      const updatedData = {
        ...threatData,
        summary: {
          ...threatData.summary,
          totalThreats: threatData.summary.totalThreats + Math.floor(Math.random() * 10),
          criticalThreats: Math.max(35, threatData.summary.criticalThreats + Math.floor(Math.random() * 5) - 2),
        },
        realTimeAlerts: [
          { 
            id: threatData.realTimeAlerts.length + 1, 
            type: ["Phishing", "Malware", "DDoS"][Math.floor(Math.random() * 3)],
            severity: ["Low", "Medium", "High", "Critical"][Math.floor(Math.random() * 4)],
            target: ["Email Systems", "Web Servers", "Database Servers"][Math.floor(Math.random() * 3)],
            time: "Just now",
            status: "Active"
          },
          ...threatData.realTimeAlerts.slice(0, 4)
        ]
      };
      
      setThreatData(updatedData);
      setRefreshing(false);
    }, 1500);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Low": return "bg-blue-100 text-blue-700";
      case "Medium": return "bg-yellow-100 text-yellow-700";
      case "High": return "bg-orange-100 text-orange-700";
      case "Critical": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-red-100 text-red-700";
      case "Investigating": return "bg-yellow-100 text-yellow-700";
      case "Contained": return "bg-blue-100 text-blue-700";
      case "Resolved": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  if (isLoading) {
    return (
      <div className="glass-card p-8 max-w-5xl mx-auto my-8 flex flex-col items-center justify-center min-h-[500px]">
        <RefreshCw className="h-12 w-12 text-india-navyBlue animate-spin mb-6" />
        <h2 className="text-xl font-semibold mb-2">Loading Threat Intelligence</h2>
        <p className="text-gray-600">Analyzing current cyber threat landscape...</p>
        <Progress value={45} className="w-64 h-2 mt-6" />
      </div>
    );
  }

  return (
    <div className="glass-card p-6 max-w-5xl mx-auto my-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-india-saffron to-india-navyBlue rounded-full p-3 mr-4">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-india-navyBlue">Threat Intelligence Dashboard</h2>
            <p className="text-gray-600">Real-time analysis and AI-powered predictions</p>
          </div>
        </div>
        <Button 
          onClick={refreshData} 
          variant="outline" 
          className="border-india-navyBlue text-india-navyBlue hover:bg-india-navyBlue/10"
          disabled={refreshing}
        >
          <RefreshCw className={`mr-2 h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
          {refreshing ? 'Refreshing...' : 'Refresh Data'}
        </Button>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="alerts">Real-time Alerts</TabsTrigger>
          <TabsTrigger value="predictions">AI Predictions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-white shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Threats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{threatData.summary.totalThreats}</div>
                <div className="flex items-center text-green-600 text-sm">
                  <span>+{Math.floor(threatData.summary.totalThreats * 0.05)} this month</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Critical Threats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">{threatData.summary.criticalThreats}</div>
                <div className="flex items-center text-red-600 text-sm">
                  <span>Requires immediate attention</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Resolved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{threatData.summary.resolvedThreats}</div>
                <div className="flex items-center text-green-600 text-sm">
                  <span>{Math.round((threatData.summary.resolvedThreats / threatData.summary.totalThreats) * 100)}% resolution rate</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Active Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="flex items-center text-blue-600 text-sm">
                  <span>ChakraShield AI active</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Threat Types</CardTitle>
                  <PieChart className="h-4 w-4 text-gray-400" />
                </div>
                <CardDescription>Distribution by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {threatData.summary.threatTypes.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{item.type}</span>
                        <span className="text-sm text-gray-500">{item.count} ({item.percentage}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-india-navyBlue h-2 rounded-full"
                          style={{
                            width: `${item.percentage}%`,
                            backgroundColor: index === 0 ? '#FF9933' : 
                                            index === 1 ? '#138808' : 
                                            index === 2 ? '#000080' : 
                                            index === 3 ? '#0000b3' : '#6b7280'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Threat by Region</CardTitle>
                  <Globe className="h-4 w-4 text-gray-400" />
                </div>
                <CardDescription>Geographic distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {threatData.summary.regions.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Region {item.region}</span>
                        <span className="text-sm text-gray-500">{item.count} ({item.percentage}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-india-navyBlue h-2 rounded-full"
                          style={{
                            width: `${item.percentage}%`,
                            backgroundColor: index === 0 ? '#FF9933' : 
                                            index === 1 ? '#138808' : 
                                            index === 2 ? '#000080' : '#0000b3'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Threat Timeline</CardTitle>
                <LineChart className="h-4 w-4 text-gray-400" />
              </div>
              <CardDescription>6-month trend analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-end justify-between">
                {threatData.summary.timeline.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="w-12 bg-gradient-to-t from-india-navyBlue to-india-saffron rounded-t"
                      style={{ 
                        height: `${(item.count / 50) * 150}px`,
                        opacity: 0.8 + (index / 10)
                      }}
                    ></div>
                    <span className="mt-2 text-xs text-gray-600">{item.date}</span>
                    <span className="text-xs font-medium">{item.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts">
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Real-time Security Alerts</CardTitle>
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
              </div>
              <CardDescription>Live monitoring of security incidents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {threatData.realTimeAlerts.map((alert) => (
                  <div key={alert.id} className="border rounded-lg p-4 transition-all hover:shadow-md">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <div className="flex items-center">
                        <span className="font-semibold text-india-navyBlue">{alert.type} Attack</span>
                        <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${getSeverityColor(alert.severity)}`}>
                          {alert.severity}
                        </span>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0">
                        <span className="text-sm text-gray-500">{alert.time}</span>
                        <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${getStatusColor(alert.status)}`}>
                          {alert.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Target: {alert.target}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {alert.status === "Active" ? "Investigation pending" : 
                         alert.status === "Investigating" ? "Security team engaged" : 
                         alert.status === "Contained" ? "Threat limited, cleanup in progress" : 
                         "Issue resolved"}
                      </span>
                      <Button variant="link" size="sm" className="text-india-navyBlue p-0 h-auto">
                        View details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-india-navyBlue text-india-navyBlue">
                View All Alerts
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="predictions">
          <div className="space-y-6">
            <Card className="glass-card bg-gradient-to-r from-india-navyBlue/5 to-india-saffron/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>AI Threat Prediction</CardTitle>
                  <Brain className="h-5 w-5 text-india-saffron" />
                </div>
                <CardDescription>ChakraShield's AI forecast for the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white/60 rounded-lg p-5 backdrop-blur-sm border border-white">
                  <div className="flex items-center mb-4">
                    <div className={`rounded-full h-12 w-12 flex items-center justify-center ${
                      threatData.predictions.weekTrend === "Increasing" 
                        ? "bg-red-100" 
                        : "bg-green-100"
                    }`}>
                      {threatData.predictions.weekTrend === "Increasing" ? (
                        <BarChart className="h-6 w-6 text-red-600" />
                      ) : (
                        <BarChart className="h-6 w-6 text-green-600" />
                      )}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Threat Level Forecast</h4>
                      <div className="flex items-center">
                        <span className={`${
                          threatData.predictions.weekTrend === "Increasing" 
                            ? "text-red-600" 
                            : "text-green-600"
                        }`}>
                          {threatData.predictions.weekTrend}
                        </span>
                        <span className="mx-1 text-gray-600">by</span>
                        <span className="font-medium">{threatData.predictions.weekChange}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-india-navyBlue/10 p-4 rounded-md mb-6">
                    <h4 className="font-medium mb-2 text-india-navyBlue">AI Recommendation</h4>
                    <p className="text-gray-700 text-sm">{threatData.predictions.recommendation}</p>
                  </div>
                  
                  <h4 className="font-medium mb-3 text-india-navyBlue">Predicted Threat Hotspots</h4>
                  <div className="space-y-3">
                    {threatData.predictions.predictedHotspots.map((hotspot, index) => (
                      <div key={index} className="bg-white rounded-md p-3 border border-gray-100 shadow-sm">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{hotspot.area}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            hotspot.impact === "Critical" ? "bg-red-100 text-red-700" :
                            hotspot.impact === "High" ? "bg-orange-100 text-orange-700" :
                            "bg-yellow-100 text-yellow-700"
                          }`}>
                            {hotspot.impact} Impact
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 mr-2">Likelihood:</span>
                          <div className="w-full bg-gray-200 rounded-full h-2 flex-grow">
                            <div
                              className="h-2 rounded-full"
                              style={{
                                width: `${hotspot.likelihood}%`,
                                backgroundColor: 
                                  hotspot.likelihood > 80 ? '#ef4444' :
                                  hotspot.likelihood > 60 ? '#f97316' :
                                  hotspot.likelihood > 40 ? '#eab308' : '#22c55e'
                              }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm font-medium">{hotspot.likelihood}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gradient-button">
                  Generate Detailed Forecast Report
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ThreatIntelligence;
