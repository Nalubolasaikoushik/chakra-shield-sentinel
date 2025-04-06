
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
                        <p className="text-gray-700">cybersoc@cert-in.org.in</p>
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
                          Electronics Niketan, 6, CGO Complex,<br />
                          Lodhi Road, New Delhi - 110003<br />
                          India
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
