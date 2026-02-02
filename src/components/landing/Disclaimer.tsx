
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

const Disclaimer = () => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div id="disclaimer" className="py-6 md:py-10 bg-gray-50">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-4xl mx-auto">
          <Alert className="bg-white border-india-accent2/20">
            <AlertTriangle className="h-5 w-5 text-india-accent2" />
            <AlertTitle className="text-india-navyBlue font-semibold text-base md:text-lg">Disclaimer</AlertTitle>
            <AlertDescription className="text-gray-600 mt-2 text-xs md:text-sm">
              <p className="mb-3">
                ChakraShield is an open-source project and initiative not affiliated with or endorsed by the Government of India or any of its agencies. 
                The logos and symbols displayed are used for demonstration purposes only under fair use provisions.
              </p>
              <p className="mb-3">
                The use of governmental symbols, logos, and representations is solely for illustrative purposes to demonstrate 
                how this platform could potentially integrate with existing national digital initiatives.
              </p>
              <p className="mb-3">
                This project is protected under Constitutional right to freedom of speech and expression, academic and creative freedom, 
                and fair use doctrine for educational and demonstrative purposes.
              </p>
              <p className="mb-3">
                The AI models and algorithms used in ChakraShield are designed for educational and research purposes. They are not intended
                to be used for surveillance or to infringe on the privacy rights of individuals.
              </p>
              <p>
                ChakraShield does not collect, store, or process any personal data without explicit consent and adheres to best practices
                for data protection and privacy.
              </p>
            </AlertDescription>
          </Alert>
          
          <Button 
            variant="ghost" 
            onClick={() => setExpanded(!expanded)} 
            className="mt-4 text-india-navyBlue hover:bg-india-navyBlue/5 flex items-center mx-auto"
          >
            {expanded ? "View Less" : "View Detailed Disclaimer"}
            <ChevronDown className={`ml-2 h-4 w-4 transform transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </Button>
          
          {expanded && (
            <div className="mt-6 space-y-6">
              <Card className="bg-white border-india-navyBlue/10">
                <CardHeader>
                  <CardTitle className="flex items-center text-india-navyBlue">
                    <FileText className="mr-2 h-5 w-5 text-india-saffron" />
                    Legal Framework & Limitations
                  </CardTitle>
                  <CardDescription>Comprehensive legal context for the ChakraShield project</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left font-medium">Legal Status & Non-Affiliation</AccordionTrigger>
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
                            <span className="font-medium">Fair Use Doctrine:</span> The use of any governmental symbols, logos, names, or representations 
                            falls under the fair use provisions for educational, research, and demonstrative purposes.
                          </li>
                        </ul>
                        <p>
                          All intellectual property rights related to the ChakraShield project, including but not limited to its code, algorithms, 
                          design, and documentation, are protected under applicable copyright and intellectual property laws.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left font-medium">Representation Limitations</AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p className="mb-3">
                          The ChakraShield project includes visual elements, terminology, and conceptual frameworks that may resemble governmental 
                          or official initiatives. Users should be aware of the following limitations:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <span className="font-medium">Illustrative Purpose:</span> Any governmental symbols, terminology, or frameworks are used 
                            solely to illustrate how such a cybersecurity system might conceptually integrate with existing national digital infrastructure.
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
                            could potentially be leveraged for cybersecurity purposes in alignment with digital governance objectives.
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
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left font-medium">Data Handling Principles</AccordionTrigger>
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
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left font-medium">Ethical AI Usage Framework</AccordionTrigger>
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
                          <li>
                            <span className="font-medium">Proportionality:</span> Any security measures implemented are proportional to the 
                            specific risks they address, avoiding excessive monitoring or data collection.
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
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left font-medium">Intended Use Cases</AccordionTrigger>
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
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left font-medium">Limitation of Liability</AccordionTrigger>
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
                            <span className="font-medium">User Responsibility:</span> Users are responsible for their use of ChakraShield and for 
                            ensuring compliance with all applicable laws and regulations in their jurisdiction.
                          </li>
                          <li>
                            <span className="font-medium">No Liability for Damages:</span> The creators, developers, and contributors of ChakraShield 
                            shall not be liable for any direct, indirect, incidental, special, exemplary, or consequential damages arising from the use 
                            or inability to use the platform.
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left font-medium">Contact Information</AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        <p className="mb-3">
                          For inquiries, clarifications, or concerns regarding ChakraShield, please contact:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <span className="font-medium">Developer Contact:</span> For technical inquiries or to contribute to the project, 
                            please visit the developer's GitHub profile at <a href="https://github.com/saikoushiknalubola" className="text-india-navyBlue hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/saikoushiknalubola</a>
                          </li>
                          <li>
                            <span className="font-medium">Disclaimer Inquiries:</span> For specific questions regarding this disclaimer or legal 
                            aspects of the project, please indicate "ChakraShield Legal Inquiry" in your communication.
                          </li>
                          <li>
                            <span className="font-medium">Usage Questions:</span> For questions about appropriate usage of ChakraShield or its 
                            features, please indicate "ChakraShield Usage Inquiry" in your communication.
                          </li>
                        </ul>
                        <p className="mt-3">
                          All communications will be addressed within a reasonable timeframe, subject to availability of resources.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div className="mt-4 md:mt-6 p-3 md:p-5 bg-white rounded-lg border border-gray-200">
            <h3 className="text-base md:text-lg font-semibold text-india-navyBlue flex items-center mb-2 md:mb-3">
              <Info className="mr-2 h-4 w-4 md:h-5 md:w-5 text-india-accent2" />
              Additional Information
            </h3>
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-600">
              <p>
                <span className="font-medium">Project Purpose:</span> ChakraShield is a conceptual cybersecurity platform designed 
                to demonstrate how AI can be leveraged to detect and prevent fake social media accounts and disinformation.
              </p>
              <p>
                <span className="font-medium">Open Source:</span> This project is open source and intended for educational, 
                research, and demonstration purposes only.
              </p>
              <p>
                <span className="font-medium">Data Privacy:</span> In a production environment, ChakraShield would be designed to 
                comply with all applicable Indian data protection laws and regulations.
              </p>
              <p>
                <span className="font-medium">Ethical Framework:</span> All AI operations within ChakraShield are guided by a robust 
                ethical framework that prioritizes transparency, fairness, and respect for privacy.
              </p>
              <p>
                <span className="font-medium">Continuous Research:</span> The technology behind ChakraShield is constantly evolving through 
                collaborative research with cybersecurity experts and academic institutions.
              </p>
              <p>
                <span className="font-medium">Contact:</span> For inquiries, collaboration opportunities, or concerns, please 
                contact through the provided GitHub profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
