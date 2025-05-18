
import React, { useState } from 'react';
import { AlertTriangle, Info, Shield, ChevronDown } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
                This is an educational demonstration project.
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
          
          <div className="mt-4 text-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              asChild
              className="text-india-navyBlue hover:bg-india-navyBlue/5"
            >
              <Link to="/disclaimer">View Full Disclaimer</Link>
            </Button>
          </div>
          
          {expanded && (
            <div className="mt-6 p-3 md:p-5 bg-white rounded-lg border border-gray-200">
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
                  comply with all applicable data protection laws and regulations.
                </p>
                <div className="mt-3">
                  <Button 
                    variant="link" 
                    size="sm" 
                    asChild
                    className="text-india-navyBlue p-0"
                  >
                    <Link to="/disclaimer">Read Full Legal Disclaimer →</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
