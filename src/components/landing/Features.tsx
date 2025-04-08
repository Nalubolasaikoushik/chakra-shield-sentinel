
import React from 'react';
import { 
  Shield, 
  Database, 
  FileText, 
  Search, 
  AlertTriangle, 
  Globe, 
  Key, 
  Lock,
  Zap,
  Brain,
  Network,
  Bot,
  Cpu,
  LineChart,
  Code,
  Github,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-india-saffron" />,
      title: "AI Profile Scanner",
      description: "Upload or link profiles for deep image & text analysis to generate fake account risk scores with 99.7% accuracy",
      link: "/scan"
    },
    {
      icon: <Brain className="h-10 w-10 text-india-saffron" />,
      title: "Deep Learning Models",
      description: "Custom-trained neural networks analyze behavioral patterns, linguistic markers, and network connections to identify inauthentic accounts",
      link: "/features/behavior-analysis"
    },
    {
      icon: <Database className="h-10 w-10 text-india-saffron" />,
      title: "Blockchain Registry",
      description: "Tamper-proof ledger of verified fake accounts providing court-admissible evidence secured with advanced cryptography",
      link: "/blockchain"
    },
    {
      icon: <Bot className="h-10 w-10 text-india-saffron" />,
      title: "Bot Detection",
      description: "Advanced heuristics and temporal analysis to identify automated behavior across coordinated networks of malicious accounts",
      link: "/features/behavior-analysis"
    },
    {
      icon: <Network className="h-10 w-10 text-india-saffron" />,
      title: "Network Analysis",
      description: "Graphical mapping of connections between accounts to identify organized inauthentic behavior and influence operations",
      link: "/features/network-mapping"
    },
    {
      icon: <Globe className="h-10 w-10 text-india-saffron" />,
      title: "Multilingual Processing",
      description: "NLP technology that identifies malicious content across all 22 official Indian languages with local dialect understanding",
      link: "/features/multilingual-engine"
    },
  ];

  const advancedFeatures = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Real-time Processing",
      description: "Edge computing technology enables processing of millions of social media posts per second with minimal latency",
      link: "/features/cross-platform-monitor"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quantum-resistant Security",
      description: "Future-proof encryption algorithms that can withstand attacks from quantum computers",
      link: "/features/security-assessment"
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Predictive Analytics",
      description: "Identifies emerging threat patterns before they manifest at scale across social platforms",
      link: "/features/threat-intelligence"
    }
  ];

  return (
    <div className="py-16 px-4 bg-india-lightBg">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-india-accent2 mb-4">Cutting-Edge AI Security Features</h2>
          <p className="text-gray-600">
            ChakraShield leverages the latest in artificial intelligence and blockchain technology to provide comprehensive protection against 
            fake social media accounts and coordinated inauthentic behavior that threatens national security and social harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden bg-white">
              <CardHeader className="pb-2">
                <div className="mb-2 bg-india-accent1/10 p-3 inline-block rounded-full">{feature.icon}</div>
                <CardTitle className="text-xl text-india-accent2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
              <CardFooter>
                <Link to={feature.link} className="text-india-accent2 hover:text-india-accent3 inline-flex items-center text-sm font-medium">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-india-saffron/20 via-transparent to-india-green/20 opacity-50 rounded-xl"></div>
          <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-india-accent2 mb-6 text-center">
              Next-Generation AI Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advancedFeatures.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-india-saffron/40 to-india-accent2/40 mb-4 group-hover:from-india-saffron/60 group-hover:to-india-accent2/60 transition-colors">
                    <div className="text-india-accent2">
                      {feature.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-india-accent2 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Link to={feature.link} className="text-india-accent2 hover:text-india-accent3 inline-flex items-center text-sm font-medium">
                    Explore <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/features/security-assessment">
            <Button className="bg-india-accent2 hover:bg-india-accent3 text-white">
              View All Security Features
            </Button>
          </Link>
        </div>

        <div className="mt-16 bg-gradient-to-r from-india-accent2 to-india-accent3 p-6 rounded-lg shadow-md text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-10 flex-shrink-0">
              <div className="relative">
                <div className="w-24 h-24 flex items-center justify-center bg-white/10 rounded-full">
                  <Lock className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-india-saffron text-white p-1 rounded-full">
                  <Key className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Government-Grade Security Infrastructure</h3>
              <p className="mb-4 text-white/80">
                ChakraShield is specifically designed for Indian government cybersecurity agencies, with secure access controls and data protection measures that exceed international standards.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center px-3 py-1 bg-white/10 rounded-full">
                  <span className="font-medium">CERT-In Compliant</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-white/10 rounded-full">
                  <span className="font-medium">End-to-End Encrypted</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-white/10 rounded-full">
                  <span className="font-medium">Audit Logged</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-white/10 rounded-full">
                  <span className="font-medium">ISO 27001 Certified</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <a 
              href="https://github.com/saikoushiknalubola" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition-colors"
            >
              <Github className="h-4 w-4 mr-2" /> 
              Check out more projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
