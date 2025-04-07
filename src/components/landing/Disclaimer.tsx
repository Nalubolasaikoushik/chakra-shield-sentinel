
import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Disclaimer = () => {
  return (
    <div className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Alert className="bg-white border-india-accent2/20">
            <AlertTriangle className="h-5 w-5 text-india-accent2" />
            <AlertTitle className="text-india-navyBlue font-semibold text-lg">Disclaimer</AlertTitle>
            <AlertDescription className="text-gray-600 mt-2 text-sm md:text-base">
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
          
          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold text-india-navyBlue flex items-center mb-3 md:mb-4">
              <Info className="mr-2 h-5 w-5 text-india-accent2" />
              Additional Information
            </h3>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600">
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
