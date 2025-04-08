
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminDashboard from '@/components/tools/AdminDashboard';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center text-india-navyBlue hover:text-india-accent2 mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-india-accent2 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Centralized administration interface for system management, reporting, and configuration
          </p>
        </div>
        
        <Card className="mb-8 border-india-navyBlue/10 shadow-md">
          <CardHeader className="bg-india-navyBlue/5 border-b border-india-navyBlue/10">
            <CardTitle className="text-india-accent2">Administration Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <AdminDashboard />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>User access management and role-based controls</li>
                <li>System performance monitoring</li>
                <li>Configuration management interfaces</li>
                <li>Audit logging and compliance reporting</li>
                <li>Integrated workflow management</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border-india-navyBlue/10">
            <CardHeader>
              <CardTitle className="text-xl text-india-accent2">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>Role-based access control architecture</li>
                <li>Secure multi-factor authentication</li>
                <li>Real-time system health monitoring</li>
                <li>Advanced data visualization capabilities</li>
                <li>Comprehensive audit trail functionality</li>
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
                <h3 className="font-semibold text-india-navyBlue">Security Operations Management</h3>
                <p className="text-gray-700">
                  Security teams utilize the admin dashboard to manage day-to-day operations, allocate resources,
                  and monitor system effectiveness across the organization.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Multi-Agency Coordination</h3>
                <p className="text-gray-700">
                  The dashboard provides a central point for coordinating activities across multiple security
                  agencies, ensuring aligned operations and information sharing.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-india-navyBlue">Executive Reporting</h3>
                <p className="text-gray-700">
                  Leadership teams use dashboard analytics to gain insights into security operations,
                  trend analysis, and performance metrics for strategic decision-making.
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

export default AdminDashboardPage;
