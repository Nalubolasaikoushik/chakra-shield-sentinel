
import React from 'react'; // Explicit React import
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Scan from "./pages/Scan";
import Dashboard from "./pages/Dashboard";
import Blockchain from "./pages/Blockchain";
import Reports from "./pages/Reports";
import Alerts from "./pages/Alerts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Policies from "./pages/Policies";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Tools from "./pages/Tools";
import Translation from "./pages/Translation";
import Resources from "./pages/Resources";
import DisclaimerPage from "./pages/Disclaimer"; // Import the DisclaimerPage component

// Feature pages
import SecurityAssessmentPage from "./pages/features/SecurityAssessmentPage";
import ThreatIntelligencePage from "./pages/features/ThreatIntelligencePage";
import DeepfakeDetectionPage from "./pages/features/DeepfakeDetectionPage";
import BehaviorAnalysisPage from "./pages/features/BehaviorAnalysisPage";
import NetworkMappingPage from "./pages/features/NetworkMappingPage";
import AlertSystemPage from "./pages/features/AlertSystemPage";
import AdminDashboardPage from "./pages/features/AdminDashboardPage";
import CrossPlatformMonitorPage from "./pages/features/CrossPlatformMonitorPage";
import MultilingualEnginePage from "./pages/features/MultilingualEnginePage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/alert-system" element={<AlertSystemPage />} />
          <Route path="/tools/network-mapping" element={<NetworkMappingPage />} />
          <Route path="/tools/threat-intelligence" element={<ThreatIntelligencePage />} />
          <Route path="/tools/behavior-analysis" element={<BehaviorAnalysisPage />} />
          <Route path="/tools/deepfake-detection" element={<DeepfakeDetectionPage />} />
          <Route path="/tools/security-assessment" element={<SecurityAssessmentPage />} />
          <Route path="/tools/admin-dashboard" element={<AdminDashboardPage />} />
          <Route path="/tools/multilingual-engine" element={<MultilingualEnginePage />} />
          <Route path="/tools/cross-platform-monitor" element={<CrossPlatformMonitorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
