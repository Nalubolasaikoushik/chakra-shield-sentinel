
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms" element={<Policies />} />
        <Route path="/privacy" element={<Policies />} />
        <Route path="/security" element={<Policies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/translation" element={<Translation />} />
        <Route path="/resources" element={<Resources />} />
        
        {/* Security Feature Pages */}
        <Route path="/features/security-assessment" element={<SecurityAssessmentPage />} />
        <Route path="/features/threat-intelligence" element={<ThreatIntelligencePage />} />
        <Route path="/features/deepfake-detection" element={<DeepfakeDetectionPage />} />
        <Route path="/features/behavior-analysis" element={<BehaviorAnalysisPage />} />
        <Route path="/features/network-mapping" element={<NetworkMappingPage />} />
        <Route path="/features/alert-system" element={<AlertSystemPage />} />
        <Route path="/features/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/features/cross-platform-monitor" element={<CrossPlatformMonitorPage />} />
        <Route path="/features/multilingual-engine" element={<MultilingualEnginePage />} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
