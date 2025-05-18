
import React, { useState } from 'react';
import { AlertTriangle, Info, Shield, ChevronDown, FileText, Scale, Lock } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DisclaimerPage = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['item-1']);
  
  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section) 
        : [...prev, section]
    );
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-india-navyBlue mb-4">
                Legal Disclaimer
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Important information regarding the ChakraShield platform, its usage, and limitations
              </p>
            </div>
            
            <Alert className="bg-white border-india-accent2/20 mb-8">
              <AlertTriangle className="h-5 w-5 text-india-accent2" />
              <AlertTitle className="text-india-navyBlue font-semibold text-base md:text-lg">Official Disclaimer</AlertTitle>
              <AlertDescription className="text-gray-600 mt-2 text-sm md:text-base">
                <p className="mb-3">
                  ChakraShield is an open-source project and initiative not affiliated with or endorsed by the Government of India or any of its agencies. 
                  The symbols displayed are used for demonstration purposes only.
                </p>
                <p className="mb-3">
                  This project is protected under Constitutional right to freedom of speech and expression, academic and creative freedom, 
                  and fair use doctrine for educational and demonstrative purposes.
                </p>
                <p>
                  ChakraShield does not collect, store, or process any personal data without explicit consent and adheres to best practices
                  for data protection and privacy.
                </p>
              </AlertDescription>
            </Alert>
            
            <div className="space-y-6">
              <Card className="bg-white border-india-navyBlue/10">
                <CardHeader>
                  <CardTitle className="flex items-center text-india-navyBlue">
                    <FileText className="mr-2 h-5 w-5 text-india-saffron" />
                    Legal Framework & Limitations
                  </CardTitle>
                  <CardDescription>Comprehensive legal context for the ChakraShield project</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion 
                    type="multiple" 
                    value={expandedSections}
                    className="w-full"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger 
                        onClick={() => toggleSection('item-1')}
                        className="text-left font-medium"
                      >
                        Legal Status & Non-Affiliation
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p className="mb-3">
                          ChakraShield is an independent, open-source cybersecurity project created for educational, research, and 
                          demonstrative purposes. It operates under the following legal frameworks:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                          <li>
                            <span className="font-medium">Non-Governmental Entity:</span> ChakraShield is not affiliated with, endorsed by, 
                            funded by, or representative of the Government of India, its ministries, departments, or agencies. Any resemblance 
                            to governmental initiatives is coincidental or for illustrative purposes only.
                          </li>
                          <li>
                            <span className="font-medium">Constitutional Protection:</span> This project operates under Article 19(1)(a) of 
                            the Constitution of India, which guarantees the freedom of speech and expression, including academic and creative freedom.
                          </li>
                          <li>
                            <span className="font-medium">Fair Use Doctrine:</span> Any references to governmental concepts fall 
                            under the fair use provisions for educational, research, and demonstrative purposes.
                          </li>
                        </ul>
                        <p>
                          All intellectual property rights related to the ChakraShield project, including but not limited to its code, algorithms, 
                          design, and documentation, are protected under applicable copyright and intellectual property laws.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger 
                        onClick={() => toggleSection('item-2')}
                        className="text-left font-medium"
                      >
                        Representation Limitations
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p className="mb-3">
                          The ChakraShield project includes visual elements, terminology, and conceptual frameworks that may resemble official 
                          initiatives. Users should be aware of the following limitations:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <span className="font-medium">Illustrative Purpose:</span> Any symbols, terminology, or frameworks are used 
                            solely to illustrate how such a cybersecurity system might conceptually integrate with existing digital infrastructure.
                          </li>
                          <li>
                            <span className="font-medium">No Official Status:</span> Nothing displayed, stated, or implied within ChakraShield 
                            should be considered official government policy, statement, or position.
                          </li>
                          <li>
                            <span className="font-medium">No Authorization Claims:</span> ChakraShield does not claim any official authorization, 
                            certification, or approval from governmental authorities.
                          </li>
                          <li>
                            <span className="font-medium">Conceptual Framework:</span> The platform represents a conceptual framework for how AI 
                            could potentially be leveraged for cybersecurity purposes.
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-india-navyBlue/10">
                <CardHeader>
                  <CardTitle className="flex items-center text-india-navyBlue">
                    <Lock className="mr-2 h-5 w-5 text-india-saffron" />
                    Data Privacy & Ethical Commitments
                  </CardTitle>
                  <CardDescription>Our approach to data handling and ethical AI usage</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion 
                    type="multiple"
                    value={expandedSections}
                    className="w-full"
                  >
                    <AccordionItem value="item-3">
                      <AccordionTrigger 
                        onClick={() => toggleSection('item-3')}
                        className="text-left font-medium"
                      >
                        Data Handling Principles
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p className="mb-3">
                          ChakraShield is built on strong data privacy foundations and ethical principles:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <span className="font-medium">Consent-Based Processing:</span> Personal data is only collected, stored, or processed 
                            with explicit, informed consent from individuals.
                          </li>
                          <li>
                            <span className="font-medium">Minimization:</span> Only data essential to the specific function being demonstrated is 
                            processed, adhering to the principle of data minimization.
                          </li>
                          <li>
                            <span className="font-medium">Security:</span> Industry-standard encryption and security protocols are implemented to 
                            protect any data used within the system.
                          </li>
                          <li>
                            <span className="font-medium">Transparency:</span> Clear documentation is provided regarding what data is collected, 
                            how it is used, and the purposes for which it is processed.
                          </li>
                          <li>
                            <span className="font-medium">User Control:</span> Users maintain control over their data, including the right to access, 
                            correct, or delete any personal information.
                          </li>
                          <li>
                            <span className="font-medium">No Unauthorized Surveillance:</span> The platform is explicitly designed NOT to enable 
                            unauthorized surveillance or monitoring of individuals.
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger 
                        onClick={() => toggleSection('item-4')}
                        className="text-left font-medium"
                      >
                        Ethical AI Usage Framework
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p className="mb-3">
                          ChakraShield adheres to an ethical AI framework based on the following principles:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <span className="font-medium">Human Rights:</span> All AI operations respect and uphold fundamental human rights, 
                            including privacy, freedom of expression, and non-discrimination.
                          </li>
                          <li>
                            <span className="font-medium">Fairness:</span> Algorithms are designed to avoid bias and discrimination, with regular 
                            auditing and testing to identify and mitigate unintended biases.
                          </li>
                          <li>
                            <span className="font-medium">Transparency:</span> The functioning of AI systems is documented and explained in 
                            accessible terms, avoiding "black box" decision-making.
                          </li>
                          <li>
                            <span className="font-medium">Accountability:</span> Clear lines of responsibility and accountability are established 
                            for all AI operations within the platform.
                          </li>
                          <li>
                            <span className="font-medium">Educational Purpose:</span> The primary purpose of ChakraShield's AI capabilities is 
                            educational and demonstrative, focusing on showing how such technologies could potentially be used responsibly.
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-india-navyBlue/10">
                <CardHeader>
                  <CardTitle className="flex items-center text-india-navyBlue">
                    <Scale className="mr-2 h-5 w-5 text-india-saffron" />
                    Usage & Liability Constraints
                  </CardTitle>
                  <CardDescription>Important limitations regarding the use of ChakraShield</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion 
                    type="multiple"
                    value={expandedSections}
                    className="w-full"
                  >
                    <AccordionItem value="item-5">
                      <AccordionTrigger 
                        onClick={() => toggleSection('item-5')}
                        className="text-left font-medium"
                      >
                        Intended Use Cases
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p className="mb-3">
                          ChakraShield is designed for the following specific use cases:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <span className="font-medium">Educational Demonstration:</span> To demonstrate the potential applications of AI in 
                            cybersecurity within the context of digital governance.
                          </li>
                          <li>
                            <span className="font-medium">Research Platform:</span> To serve as a research platform for exploring ethical and 
                            effective approaches to tackling the problem of fake social media accounts and disinformation.
                          </li>
                          <li>
                            <span className="font-medium">Concept Visualization:</span> To visualize how integrated cybersecurity systems could 
                            potentially function in alignment with digital governance objectives.
                          </li>
                          <li>
                            <span className="font-medium">Awareness Creation:</span> To raise awareness about the challenges of fake social media 
                            accounts and the potential for AI-based solutions.
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-6">
                      <AccordionTrigger 
                        onClick={() => toggleSection('item-6')}
                        className="text-left font-medium"
                      >
                        Limitation of Liability
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p className="mb-3">
                          Users of ChakraShield should be aware of the following liability limitations:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <span className="font-medium">No Warranty:</span> ChakraShield is provided "as is" without any warranties, express or 
                            implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                          </li>
                          <li>
                            <span className="font-medium">Accuracy Limitations:</span> While designed to demonstrate potential capabilities, the 
                            accuracy, completeness, or reliability of any analysis, detection, or identification performed by ChakraShield is not guaranteed.
                          </li>
                          <li>
                            <span className="font-medium">No Legal Evidence:</span> Outputs from ChakraShield should not be used as legal evidence 
                            or the sole basis for legal actions against individuals or entities.
                          </li>
                          <li>
                            <span className="font-medium">Educational Context:</span> All features and functionalities should be understood within 
                            an educational and demonstrative context, not as production-ready security solutions.
                          </li>
                          <li>
                            <span className="font-medium">No Liability for Damages:</span> The creators, developers, and contributors of ChakraShield 
                            shall not be liable for any direct, indirect, incidental, special, exemplary, or consequential damages arising from the use 
                            or inability to use the platform.
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-7">
                      <AccordionTrigger 
                        onClick={() => toggleSection('item-7')}
                        className="text-left font-medium"
                      >
                        Contact Information
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p className="mb-3">
                          For inquiries, clarifications, or concerns regarding ChakraShield, please contact:
                        </p>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-3">
                          <p className="font-medium text-india-navyBlue mb-2">Developer Contact</p>
                          <p className="text-gray-700 mb-1">Email: <a href="mailto:contact@chakrashield.org" className="text-india-navyBlue hover:underline">contact@chakrashield.org</a></p>
                          <p className="text-gray-700">GitHub: <a href="https://github.com/saikoushiknalubola" className="text-india-navyBlue hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/saikoushiknalubola</a></p>
                        </div>
                        <p>
                          All communications will be addressed within a reasonable timeframe, subject to availability of resources.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 mb-4">Last Updated: May 18, 2025</p>
                <Button 
                  variant="outline"
                  onClick={() => window.history.back()}
                  className="mr-4"
                >
                  Go Back
                </Button>
                <Button asChild>
                  <a href="/">Return to Home</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DisclaimerPage;
