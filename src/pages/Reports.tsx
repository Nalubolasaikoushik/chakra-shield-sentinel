
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReportForm from "@/components/reports/ReportForm";
import { useToast } from "@/hooks/use-toast";

const Reports = () => {
  const { toast } = useToast();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Profile Reports</h1>

        <Tabs defaultValue="submit" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="submit">Submit Report</TabsTrigger>
            <TabsTrigger value="history">Your Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="submit">
            <ReportForm />
          </TabsContent>
          <TabsContent value="history">
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center space-y-4">
              <div className="rounded-full bg-gray-100 p-4 w-16 h-16 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>
              </div>
              <h2 className="text-xl font-medium">No Report History</h2>
              <p className="text-muted-foreground max-w-md">
                All reports are anonymous. You can submit new reports using the form.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Reports;
