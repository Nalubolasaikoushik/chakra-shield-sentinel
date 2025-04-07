
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

const LogoCarousel = () => {
  const isMobile = useIsMobile();
  
  const logos = [
    {
      src: "/lovable-uploads/b302e954-2187-4340-a76d-2a1dec5c6e7c.png",
      alt: "Azadi Ka Amrit Mahotsav",
      width: isMobile ? 100 : 150
    },
    {
      src: "/lovable-uploads/2db89e9f-7fb9-422c-9f7b-a34686434e81.png",
      alt: "Digital India",
      width: isMobile ? 80 : 130
    },
    {
      src: "/lovable-uploads/63d01b46-8b5d-4111-824e-1d86b18ea2fd.png",
      alt: "Make in India",
      width: isMobile ? 100 : 150
    },
    {
      src: "/lovable-uploads/649152e9-e5a2-4753-ba75-2a5501993ce0.png",
      alt: "G20 India",
      width: isMobile ? 80 : 130
    }
  ];

  return (
    <div className="py-6 md:py-10 bg-white border-t border-gray-100">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-4 md:mb-8">
          <h3 className="text-lg md:text-xl font-semibold text-india-navyBlue">Aligned with India's Digital Initiatives</h3>
          <p className="text-sm md:text-base text-gray-600 mt-2">ChakraShield supports the vision of a secure digital India</p>
        </div>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-[95%] sm:max-w-2xl md:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 flex justify-center">
                <div className="p-1 h-full">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex items-center justify-center p-2 md:p-4 h-full">
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        style={{ width: logo.width }} 
                        className="object-contain h-auto transition-all hover:scale-105"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-4 sm:left-0" />
          <CarouselNext className="hidden sm:flex -right-4 sm:right-0" />
        </Carousel>
      </div>
    </div>
  );
};

export default LogoCarousel;
