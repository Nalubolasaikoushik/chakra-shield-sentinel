
import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Disclaimer = () => {
  return (
    <div className="py-6 md:py-10 bg-gray-50">
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
              <p>
                This project is protected under Constitutional right to freedom of speech and expression, academic and creative freedom, 
                and fair use doctrine for educational and demonstrative purposes.
              </p>
            </AlertDescription>
          </Alert>
          
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
