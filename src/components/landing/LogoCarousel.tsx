
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Code, Brain } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const LogoCarousel = () => {
  const isMobile = useIsMobile();
  
  const features = [
    {
      icon: <Shield className="h-8 w-8 md:h-10 md:w-10 text-india-saffron" />,
      title: "Advanced Security",
      description: "Enterprise-grade protection"
    },
    {
      icon: <Lock className="h-8 w-8 md:h-10 md:w-10 text-india-navyBlue" />,
      title: "Privacy Focused",
      description: "User data protection"
    },
    {
      icon: <Brain className="h-8 w-8 md:h-10 md:w-10 text-india-green" />,
      title: "AI Powered",
      description: "Smart detection algorithms"
    },
    {
      icon: <Code className="h-8 w-8 md:h-10 md:w-10 text-india-accent2" />,
      title: "Open Source",
      description: "Community-driven development"
    }
  ];

  return (
    <div className="py-4 md:py-10 bg-white border-t border-gray-100">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-3 md:mb-8">
          <h3 className="text-lg md:text-xl font-semibold text-india-navyBlue">Core Features & Principles</h3>
          <p className="text-sm md:text-base text-gray-600 mt-1 md:mt-2">ChakraShield's commitment to security and innovation</p>
        </div>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-[98%] sm:max-w-2xl md:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex justify-center">
                <div className="p-1 h-full w-full">
                  <Card className="border shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <CardContent className="flex flex-col items-center justify-center p-4 md:p-6 h-full text-center">
                      <div className="bg-gray-50 p-3 md:p-4 rounded-full mb-3 md:mb-4">
                        {feature.icon}
                      </div>
                      <h4 className="font-medium text-base md:text-lg mb-1">{feature.title}</h4>
                      <p className="text-gray-500 text-xs md:text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-2 sm:left-0" />
          <CarouselNext className="hidden sm:flex -right-2 sm:right-0" />
        </Carousel>
      </div>
    </div>
  );
};

export default LogoCarousel;
