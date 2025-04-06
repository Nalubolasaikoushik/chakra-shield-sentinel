
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, Shield, Lock, FileSearch } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Your message has been received. We'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-india-navyBlue/90 to-india-navyBlue/70 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-center">Contact ChakraShield</h1>
            <p className="text-xl text-center mb-8">Reach out to our team for assistance or more information</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-india-navyBlue">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <Input id="name" placeholder="Enter your full name" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="department" className="text-sm font-medium">Department</label>
                    <select id="department" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Media Inquiry</option>
                      <option value="compliance">Regulatory Compliance</option>
                      <option value="research">Research Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                    <Textarea id="message" placeholder="How can we help you?" rows={5} required />
                  </div>

                  <Button type="submit" className="w-full bg-india-saffron hover:bg-india-saffron/90">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-india-navyBlue/5 rounded-lg p-8 border border-india-navyBlue/10">
                  <h2 className="text-2xl font-bold mb-6 text-india-navyBlue">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-india-saffron mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium">Email Us</h3>
                        <p className="text-gray-700 mt-1">support@chakrashield.in</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-india-saffron mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium">Call Us</h3>
                        <p className="text-gray-700 mt-1">Helpline: 1800-333-9999</p>
                        <p className="text-gray-700">Emergency: 1800-123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-india-saffron mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium">Visit Us</h3>
                        <p className="text-gray-700 mt-1">
                          Digital Complex for Cyber Systems,<br />
                          Hanamakonda, Telangana 506001,<br />
                          Bharat India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-india-green/5 rounded-lg p-8 border border-india-green/10">
                  <h2 className="text-xl font-bold mb-4 text-india-navyBlue">Operating Hours</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">* Emergency support available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center text-india-navyBlue">Our Cutting-Edge AI Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-white to-india-navyBlue/5 border-india-saffron/10 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-india-navyBlue/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-india-saffron" />
                  </div>
                  <CardTitle className="text-india-navyBlue">Advanced Threat Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Our AI-powered scanning engine analyzes patterns and behaviors to identify sophisticated cyber threats before they can compromise government systems.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-white to-india-navyBlue/5 border-india-saffron/10 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-india-navyBlue/10 rounded-full flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-india-green" />
                  </div>
                  <CardTitle className="text-india-navyBlue">Predictive Security Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Leveraging machine learning algorithms to predict potential security vulnerabilities and provide preemptive protection strategies.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-white to-india-navyBlue/5 border-india-saffron/10 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-india-navyBlue/10 rounded-full flex items-center justify-center mb-4">
                    <FileSearch className="w-6 h-6 text-india-saffron" />
                  </div>
                  <CardTitle className="text-india-navyBlue">Behavioral Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Our AI continuously learns from user interactions to establish behavioral baselines and flag anomalous activities that may indicate security breaches.</p>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-2xl font-bold mb-8 text-center text-india-navyBlue">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-india-navyBlue">How do I report a cyber security incident?</h3>
                <p className="text-gray-700">Use our incident reporting tool or contact our 24/7 emergency helpline at 1800-123-4567 for immediate assistance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-india-navyBlue">What services does ChakraShield provide?</h3>
                <p className="text-gray-700">We offer profile scanning, threat monitoring, blockchain registry, intelligence reports, and alerts for government agencies.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-india-navyBlue">How can I register my agency with ChakraShield?</h3>
                <p className="text-gray-700">Government agencies can register through our secure portal. Click on 'Register' and follow the verification process.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-india-navyBlue">Is ChakraShield available in multiple languages?</h3>
                <p className="text-gray-700">Yes, ChakraShield supports multiple Indian languages including Hindi, Tamil, Bengali, and more.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-india-navyBlue">How does the blockchain registry secure digital assets?</h3>
                <p className="text-gray-700">Our blockchain registry creates immutable records of digital assets, ensuring their authenticity and preventing unauthorized modifications.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-india-navyBlue">What AI technologies power ChakraShield?</h3>
                <p className="text-gray-700">ChakraShield utilizes advanced machine learning, natural language processing, and behavioral analytics to provide comprehensive cybersecurity protection.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-india-navyBlue">How does ChakraShield help with compliance?</h3>
                <p className="text-gray-700">Our platform ensures compliance with IT Act 2000, CERT-In guidelines, and other regulatory requirements through automated checks and compliance reporting.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-india-navyBlue">Can ChakraShield integrate with existing government systems?</h3>
                <p className="text-gray-700">Yes, we provide seamless API integration with existing government IT infrastructure and security systems.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-r from-india-navyBlue/5 to-india-green/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-india-navyBlue mb-4">Digital India Initiative</h2>
              <p className="max-w-3xl mx-auto text-gray-700">
                ChakraShield is proud to be part of the Digital India initiative, contributing to the vision of transforming India into a digitally empowered society and knowledge economy. Our cybersecurity platform plays a vital role in securing digital infrastructure and protecting national digital assets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow border border-india-saffron/10">
                <h3 className="text-lg font-bold text-india-navyBlue mb-3">Smart Cities Mission</h3>
                <p className="text-gray-700 mb-4">
                  Supporting the Smart Cities Mission by providing advanced cybersecurity solutions to protect critical urban infrastructure and services from emerging cyber threats.
                </p>
                <div className="h-1 w-full bg-gradient-to-r from-india-saffron to-transparent rounded-full"></div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border border-white">
                <h3 className="text-lg font-bold text-india-navyBlue mb-3">Digital Identity Protection</h3>
                <p className="text-gray-700 mb-4">
                  Enhancing the security of digital identities through advanced authentication systems and continuous monitoring for unauthorized access attempts.
                </p>
                <div className="h-1 w-full bg-gradient-to-r from-white to-india-navyBlue/30 rounded-full"></div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border border-india-green/10">
                <h3 className="text-lg font-bold text-india-navyBlue mb-3">Secure Government Cloud</h3>
                <p className="text-gray-700 mb-4">
                  Providing comprehensive security solutions for government cloud infrastructure, ensuring the safety and integrity of sensitive data stored and processed in the cloud.
                </p>
                <div className="h-1 w-full bg-gradient-to-r from-india-green to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
