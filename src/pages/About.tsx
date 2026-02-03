import React from 'react';
import { Shield, Award, CheckCircle, Database, AlertTriangle, FileText, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AshokChakra from '@/components/AshokChakra';

const About = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-india-saffron" />,
      title: "Advanced Detection",
      description: "State-of-the-art algorithms that identify fake accounts with high accuracy"
    },
    {
      icon: <Database className="h-8 w-8 text-india-saffron" />,
      title: "Blockchain Verification",
      description: "Immutable evidence records that can be used in legal proceedings"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-india-saffron" />,
      title: "Threat Intelligence",
      description: "Real-time monitoring of coordinated inauthentic behavior across platforms"
    },
    {
      icon: <FileText className="h-8 w-8 text-india-saffron" />,
      title: "Automated Reporting",
      description: "Streamlined takedown requests and documentation of malicious activities"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-india-saffron" />,
      title: "Multi-platform Coverage",
      description: "Protection across all major social media platforms and emerging channels"
    },
    {
      icon: <Lock className="h-8 w-8 text-india-saffron" />,
      title: "Enterprise Security",
      description: "End-to-end encryption and stringent access controls for sensitive data"
    }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative bg-india-navyBlue text-white py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex items-center">
              <Shield className="h-16 w-16 text-india-saffron mr-4" />
              <div>
                <h1 className="text-4xl font-bold flex items-center">
                  ChakraShield
                  <AshokChakra size="md" className="ml-2" />
                </h1>
                <p className="text-xl">Security Platform</p>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 max-w-3xl">
              Protecting Your Digital Identity Through Advanced Security
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl opacity-90">
              ChakraShield is a security platform designed to protect your digital ecosystem from fake social media accounts and coordinated inauthentic behavior.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Profile Verification</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Security Analysis</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Blockchain Verification</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Multi-Platform Protection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-india-navyBlue mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To safeguard digital spaces by leveraging advanced technology to identify and neutralize fake social media accounts that pose threats to online security and social harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center card-hover border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-india-navyBlue">Detect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-india-navyBlue/10 rounded-full mb-4">
                  <SearchIcon className="h-8 w-8 text-india-navyBlue" />
                </div>
                <p className="text-gray-600">
                  Identify potential fake accounts through advanced pattern recognition and anomaly detection
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-india-navyBlue">Analyze</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-india-navyBlue/10 rounded-full mb-4">
                  <ChartIcon className="h-8 w-8 text-india-navyBlue" />
                </div>
                <p className="text-gray-600">
                  Process data through advanced models to verify authenticity and assess threat levels with precision
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-india-navyBlue">Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-india-navyBlue/10 rounded-full mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-india-navyBlue" />
                </div>
                <p className="text-gray-600">
                  Take decisive action to neutralize threats and protect digital ecosystems and users
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <AshokChakra size="sm" className="text-india-ashoka" />
            </div>
            <h2 className="text-3xl font-bold text-india-navyBlue mb-4">Platform Capabilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              ChakraShield combines cutting-edge technologies with blockchain verification to provide a comprehensive defense against fake social media accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-2 border-gray-200">
                <CardContent className="pt-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-india-navyBlue mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

// Custom icon components
const SearchIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"></path>
    <path d="M18 17V9"></path>
    <path d="M13 17V5"></path>
    <path d="M8 17v-3"></path>
  </svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

export default About;
