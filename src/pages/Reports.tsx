
import React, { useState } from 'react';
import { FileText, Download, Filter, CheckCircle, AlertTriangle, XCircle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AshokChakra from '@/components/AshokChakra';

const Reports = () => {
  const [expandedReports, setExpandedReports] = useState<string[]>([]);

  const toggleReport = (id: string) => {
    if (expandedReports.includes(id)) {
      setExpandedReports(expandedReports.filter(reportId => reportId !== id));
    } else {
      setExpandedReports([...expandedReports, id]);
    }
  };

  const isExpanded = (id: string) => expandedReports.includes(id);

  const reports = [
    {
      id: "rep001",
      title: "Coordinated Inauthentic Behavior Report",
      date: "2025-03-28",
      status: "verified",
      type: "network",
      platform: "Twitter",
      accounts: 47,
      summary: "Network of 47 accounts spreading misinformation about COVID-19 vaccines originating from same IP range.",
      details: "Analysis revealed coordinated posting patterns with identical linguistic markers and temporal coordination. All accounts were created within a 72-hour window and show similar behavioral patterns. Content analysis shows fabricated medical claims designed to create vaccine hesitancy."
    },
    {
      id: "rep002",
      title: "Political Impersonation Accounts",
      date: "2025-03-25",
      status: "verified",
      type: "impersonation",
      platform: "Facebook",
      accounts: 12,
      summary: "12 accounts impersonating government officials with falsified verification badges.",
      details: "Sophisticated impersonation of prominent officials using digitally altered verification symbols. Accounts were soliciting donations for fake government initiatives. Blockchain evidence shows transactions being funneled to overseas accounts. Image analysis confirms profile photos were deepfakes generated using GAN technology."
    },
    {
      id: "rep003",
      title: "Financial Scam Network Investigation",
      date: "2025-03-20",
      status: "pending",
      type: "financial",
      platform: "Instagram",
      accounts: 28,
      summary: "Network promoting fraudulent investment schemes targeting young professionals.",
      details: "AI analysis flagged unusual patterns in follower acquisition and engagement metrics. Accounts show evidence of bot-driven interaction and manipulated engagement statistics. Linguistics analysis suggests central content creation despite different personas presented."
    },
    {
      id: "rep004",
      title: "Foreign Influence Operation",
      date: "2025-03-18",
      status: "verified",
      type: "influence",
      platform: "Multiple",
      accounts: 156,
      summary: "Cross-platform influence operation attempting to affect public discourse on border security issues.",
      details: "Large-scale operation spanning multiple platforms with coordinated messaging strategy. Network analysis reveals hierarchical structure with central command accounts and amplifier nodes. Geolocation indicators suggest operation originates outside Indian territory. Content undergoes subtle modifications to avoid platform detection systems."
    },
    {
      id: "rep005",
      title: "Commercial Fraud Campaign",
      date: "2025-03-15",
      status: "rejected",
      type: "commercial",
      platform: "WhatsApp",
      accounts: 8,
      summary: "Accounts disseminating fake coupons and discount codes for popular e-commerce sites.",
      details: "Upon further investigation, these were determined to be legitimate promotional accounts with unusual marketing tactics. No evidence of fraudulent intent was discovered. Case closed with monitoring recommendation."
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'pending':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-amber-100 text-amber-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-india-navyBlue" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-india-navyBlue">Reports & Documentation</h1>
                <p className="text-gray-600">Comprehensive analysis and evidence collection of fake accounts</p>
              </div>
            </div>
            <Button className="bg-india-saffron hover:bg-india-saffron/90 hidden md:flex">
              <Download className="mr-2 h-4 w-4" /> Export Reports
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="col-span-1">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Filter className="h-5 w-5 mr-2" /> Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="verified">Verified</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Report Type</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="network">Network Analysis</SelectItem>
                      <SelectItem value="impersonation">Impersonation</SelectItem>
                      <SelectItem value="financial">Financial Fraud</SelectItem>
                      <SelectItem value="influence">Influence Operations</SelectItem>
                      <SelectItem value="commercial">Commercial Fraud</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Platform</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Platforms</SelectItem>
                      <SelectItem value="twitter">Twitter</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="telegram">Telegram</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date Range</label>
                  <Select defaultValue="30days">
                    <SelectTrigger>
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7days">Last 7 days</SelectItem>
                      <SelectItem value="30days">Last 30 days</SelectItem>
                      <SelectItem value="90days">Last 90 days</SelectItem>
                      <SelectItem value="year">Last year</SelectItem>
                      <SelectItem value="custom">Custom range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
            
            <div className="col-span-1 md:col-span-3">
              <Tabs defaultValue="reports">
                <TabsList className="w-full mb-6">
                  <TabsTrigger value="reports" className="flex-1">Reports</TabsTrigger>
                  <TabsTrigger value="evidence" className="flex-1">Evidence</TabsTrigger>
                  <TabsTrigger value="takedowns" className="flex-1">Takedown Requests</TabsTrigger>
                </TabsList>
                
                <TabsContent value="reports" className="space-y-4">
                  <Button className="md:hidden w-full mb-4 bg-india-saffron hover:bg-india-saffron/90">
                    <Download className="mr-2 h-4 w-4" /> Export Reports
                  </Button>
                
                  {reports.map(report => (
                    <div key={report.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div 
                        className="p-4 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleReport(report.id)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="pt-1">
                            {getStatusIcon(report.status)}
                          </div>
                          <div>
                            <h3 className="font-medium text-india-navyBlue">{report.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{report.summary}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(report.status)}`}>
                                {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                              </span>
                              <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                                {report.platform}
                              </span>
                              <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">
                                {report.accounts} Accounts
                              </span>
                              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                                {report.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="ml-auto mt-4 md:mt-0">
                          {isExpanded(report.id) ? 
                            <ChevronUp className="h-5 w-5 text-gray-400" /> : 
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          }
                        </div>
                      </div>
                      
                      {isExpanded(report.id) && (
                        <div className="border-t border-gray-200 p-4 bg-gray-50">
                          <h4 className="font-medium text-india-navyBlue mb-2">Detailed Analysis</h4>
                          <p className="text-gray-700 mb-4">{report.details}</p>
                          <div className="flex flex-wrap gap-3">
                            <Button variant="outline" size="sm" className="text-india-navyBlue">
                              <Download className="mr-2 h-4 w-4" /> Full Report
                            </Button>
                            <Button variant="outline" size="sm" className="text-india-navyBlue">
                              <FileText className="mr-2 h-4 w-4" /> Evidence Package
                            </Button>
                            <Button variant="outline" size="sm" className="text-india-navyBlue">
                              <ExternalLink className="mr-2 h-4 w-4" /> Blockchain Record
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="evidence">
                  <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-india-navyBlue/10 mb-4">
                      <AshokChakra size="md" />
                    </div>
                    <h3 className="text-xl font-medium text-india-navyBlue mb-2">Evidence Repository Access</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      This section requires special authorization. Please contact your administrator for access.
                    </p>
                    <Button variant="outline">Request Access</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="takedowns">
                  <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-india-navyBlue/10 mb-4">
                      <AshokChakra size="md" />
                    </div>
                    <h3 className="text-xl font-medium text-india-navyBlue mb-2">Takedown Request Dashboard</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      This section contains sensitive legal information and requires proper authorization.
                    </p>
                    <Button variant="outline">Request Access</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reports;
