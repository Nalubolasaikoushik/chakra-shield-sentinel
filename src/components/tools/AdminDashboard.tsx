
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  BarChart2, 
  Globe, 
  AlertTriangle, 
  Lock,
  Key,
  UserCheck,
  FileCheck,
  Database,
  Map,
  Activity,
  Calendar,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import AshokChakra from '../AshokChakra';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Mock metrics for the dashboard
  const metrics = {
    totalAccounts: 12649,
    accountsScanned: 8475,
    activeThreats: 128,
    threatsClosed: 1243,
    pendingApprovals: 42,
    totalAgencies: 18,
    securityScore: 86
  };
  
  // Mock recent activity
  const recentActivity = [
    { action: "Critical alert generated", target: "Disinformation Network #127", time: "11 minutes ago", status: "Urgent" },
    { action: "New agency joined", target: "State Cyber Cell - Karnataka", time: "43 minutes ago", status: "Info" },
    { action: "Threat investigation closed", target: "Case #45892", time: "2 hours ago", status: "Success" },
    { action: "Detection model updated", target: "DeepFake Recognition v3.2", time: "5 hours ago", status: "Info" }
  ];
  
  const handleAuthenticate = () => {
    // Simulate authentication
    setIsAuthenticated(true);
  };

  return (
    <Card className="w-full bg-gradient-to-br from-white to-india-lightBg border border-gray-200 shadow-md mb-8">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-india-accent2/10 p-2 rounded-full">
            <ShieldCheck className="h-6 w-6 text-india-accent2" />
          </div>
          <div>
            <CardTitle className="text-xl text-india-accent2">Government Security Dashboard</CardTitle>
            <CardDescription>Secure administrative control panel for authorized agencies</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {!isAuthenticated ? (
          <div className="bg-white rounded-lg border border-gray-200 p-8 max-w-md mx-auto">
            <div className="flex justify-center mb-6">
              <AshokChakra size="lg" className="text-india-navyBlue" />
            </div>
            <h3 className="text-xl font-bold text-center text-india-navyBlue mb-2">
              Government Secure Access
            </h3>
            <p className="text-gray-600 text-center mb-6">
              This dashboard requires official authentication credentials issued to authorized government agencies.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-6">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-700">
                  Unauthorized access attempts are monitored and logged in compliance with IT Act, 2000 and may result in legal action.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="bg-india-navyBlue hover:bg-india-navyBlue/90" onClick={handleAuthenticate}>
                <Lock className="h-4 w-4 mr-2" />
                Authenticate with DigiLocker
              </Button>
            </div>
            <div className="mt-5 flex items-center justify-center text-xs text-gray-500">
              <Key className="h-3 w-3 mr-1" />
              <span>End-to-end encrypted | CERT-In compliant</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Accounts Scanned</p>
                      <div className="text-2xl font-bold">{metrics.accountsScanned.toLocaleString()}</div>
                      <p className="text-xs text-gray-500 mt-1">
                        of {metrics.totalAccounts.toLocaleString()} total accounts
                      </p>
                    </div>
                    <div className="bg-india-saffron/10 p-2 rounded-full">
                      <Users className="h-5 w-5 text-india-saffron" />
                    </div>
                  </div>
                  <Progress 
                    value={Math.round((metrics.accountsScanned / metrics.totalAccounts) * 100)} 
                    className="h-1.5 mt-3" 
                  />
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Active Threats</p>
                      <div className="text-2xl font-bold text-red-600">{metrics.activeThreats}</div>
                      <p className="text-xs text-gray-500 mt-1">
                        {metrics.threatsClosed} threats mitigated
                      </p>
                    </div>
                    <div className="bg-red-100 p-2 rounded-full">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center text-xs">
                    <div className="bg-red-100 text-red-800 px-1.5 py-0.5 rounded-sm">
                      42 critical
                    </div>
                    <div className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-sm ml-1">
                      86 high
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Pending Approvals</p>
                      <div className="text-2xl font-bold">{metrics.pendingApprovals}</div>
                      <p className="text-xs text-gray-500 mt-1">
                        From {metrics.totalAgencies} connected agencies
                      </p>
                    </div>
                    <div className="bg-india-accent2/10 p-2 rounded-full">
                      <UserCheck className="h-5 w-5 text-india-accent2" />
                    </div>
                  </div>
                  <div className="mt-3">
                    <Button variant="outline" size="sm" className="text-xs h-7 w-full">
                      Review Queue
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Security Score</p>
                      <div className="text-2xl font-bold text-green-600">{metrics.securityScore}/100</div>
                      <p className="text-xs text-gray-500 mt-1">
                        System operating normally
                      </p>
                    </div>
                    <div className="bg-green-100 p-2 rounded-full">
                      <Activity className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                  <Progress 
                    value={metrics.securityScore} 
                    className="h-1.5 mt-3 bg-gray-200" 
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="bg-white shadow-sm col-span-1 lg:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-3">
                        <div className="flex items-start">
                          <div className={`rounded-full p-1.5 mr-3 ${
                            activity.status === 'Urgent' 
                              ? 'bg-red-100' 
                              : activity.status === 'Success' 
                              ? 'bg-green-100'
                              : 'bg-blue-100'
                          }`}>
                            {activity.status === 'Urgent' ? (
                              <AlertTriangle className="h-3.5 w-3.5 text-red-600" />
                            ) : activity.status === 'Success' ? (
                              <FileCheck className="h-3.5 w-3.5 text-green-600" />
                            ) : (
                              <Globe className="h-3.5 w-3.5 text-blue-600" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{activity.action}</p>
                            <p className="text-xs text-gray-500">{activity.target}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500 mr-2">{activity.time}</span>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-3">
                  <Button variant="ghost" size="sm" className="ml-auto">
                    View All Activity
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-gradient-to-b from-india-navyBlue to-india-accent2 text-white shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium mb-1">Quick Access</h3>
                    <p className="text-sm text-white/80 mb-4">
                      Essential security functions for authorized personnel
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button variant="secondary" className="w-full justify-between bg-white/10 hover:bg-white/20 border-none">
                      <div className="flex items-center">
                        <Database className="h-4 w-4 mr-2" />
                        <span>Evidence Repository</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                    
                    <Button variant="secondary" className="w-full justify-between bg-white/10 hover:bg-white/20 border-none">
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2" />
                        <span>Threat Intel Center</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                    
                    <Button variant="secondary" className="w-full justify-between bg-white/10 hover:bg-white/20 border-none">
                      <div className="flex items-center">
                        <Map className="h-4 w-4 mr-2" />
                        <span>Operations Map</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                    
                    <Button variant="secondary" className="w-full justify-between bg-white/10 hover:bg-white/20 border-none">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Scheduled Operations</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-white/20 flex items-center text-sm text-white/80">
                    <Lock className="h-3.5 w-3.5 mr-1.5" />
                    <span>Government-grade encrypted access</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-white shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">User Activity</CardTitle>
                    <BarChart2 className="h-4 w-4 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,247</div>
                  <p className="text-sm text-gray-500 mb-3">Active users today</p>
                  <div className="h-[100px] flex items-end justify-between gap-1">
                    {[40, 65, 50, 35, 75, 90, 60].map((height, i) => (
                      <div 
                        key={i}
                        className="bg-india-saffron/80 rounded-t w-full"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Regional Distribution</CardTitle>
                    <Globe className="h-4 w-4 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>North Zone</span>
                        <span className="font-medium">32%</span>
                      </div>
                      <Progress value={32} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>South Zone</span>
                        <span className="font-medium">28%</span>
                      </div>
                      <Progress value={28} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>East Zone</span>
                        <span className="font-medium">21%</span>
                      </div>
                      <Progress value={21} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>West Zone</span>
                        <span className="font-medium">19%</span>
                      </div>
                      <Progress value={19} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Platform Breakdown</CardTitle>
                    <BarChart2 className="h-4 w-4 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3 mb-4 items-center">
                    <div className="relative h-24 w-24">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#f3f4f6"
                          strokeWidth="15"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#FF8C00"
                          strokeWidth="15"
                          strokeDasharray={`${40 * 2.51} ${100 * 2.51}`}
                          strokeDashoffset="0"
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#1E3799"
                          strokeWidth="15"
                          strokeDasharray={`${25 * 2.51} ${100 * 2.51}`}
                          strokeDashoffset={`${-40 * 2.51}`}
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#008F39"
                          strokeWidth="15"
                          strokeDasharray={`${20 * 2.51} ${100 * 2.51}`}
                          strokeDashoffset={`${-(40 + 25) * 2.51}`}
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#9CA3AF"
                          strokeWidth="15"
                          strokeDasharray={`${15 * 2.51} ${100 * 2.51}`}
                          strokeDashoffset={`${-(40 + 25 + 20) * 2.51}`}
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-india-saffron rounded-full mr-2"></div>
                        <span className="text-sm">Twitter (40%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-india-navyBlue rounded-full mr-2"></div>
                        <span className="text-sm">Facebook (25%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-india-green rounded-full mr-2"></div>
                        <span className="text-sm">Instagram (20%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                        <span className="text-sm">Others (15%)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </CardContent>
      
      {isAuthenticated && (
        <CardFooter className="flex justify-between border-t pt-4">
          <div className="flex items-center text-sm text-gray-600">
            <ShieldCheck className="h-4 w-4 mr-2 text-india-navyBlue" />
            <span>Last refreshed: {new Date().toLocaleTimeString()}</span>
          </div>
          <Button 
            className="bg-india-navyBlue hover:bg-india-navyBlue/90"
          >
            Generate Comprehensive Report
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default AdminDashboard;
