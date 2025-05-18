
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReportForm from "@/components/reports/ReportForm";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";

const Reports = () => {
  const { toast } = useToast();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Profile Reports</h1>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6 rounded-md">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-2" />
            <div>
              <p className="text-sm md:text-base text-amber-800">
                All reports are anonymous and used for educational purposes only. Please read our 
                <Link to="/disclaimer" className="text-india-navyBlue hover:underline mx-1">disclaimer</Link> 
                before submitting.
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="submit" className="w-full">
          <TabsList className="mb-6 w-full md:w-auto overflow-x-auto flex-nowrap">
            <TabsTrigger value="submit" className="flex-1 md:flex-auto">Submit Report</TabsTrigger>
            <TabsTrigger value="history" className="flex-1 md:flex-auto">Your Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="submit">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border">
              <ReportForm />
            </div>
          </TabsContent>
          <TabsContent value="history">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border">
              <div className="flex flex-col items-center justify-center py-8 md:py-12 px-4 text-center space-y-4">
                <div className="rounded-full bg-gray-100 p-4 w-16 h-16 flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>
                </div>
                <h2 className="text-xl font-medium">No Report History</h2>
                <p className="text-muted-foreground max-w-md">
                  All reports are anonymous. You can submit new reports using the form.
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-5">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-india-navyBlue mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-sm">
                  <h3 className="font-medium text-gray-900 mb-1">About Anonymous Reporting</h3>
                  <p className="text-gray-600">
                    ChakraShield uses anonymous reporting to protect user privacy while helping identify suspicious profiles. 
                    Reports are collected for educational and research purposes only.
                  </p>
                  <p className="mt-2 text-gray-600">
                    For full details about how we handle report data, please see our
                    <Link to="/disclaimer" className="text-india-navyBlue hover:underline mx-1">legal disclaimer</Link>.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Reports;
