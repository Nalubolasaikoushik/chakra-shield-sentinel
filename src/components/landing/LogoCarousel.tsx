
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const LogoCarousel = () => {
  const logos = [
    {
      src: "/lovable-uploads/b302e954-2187-4340-a76d-2a1dec5c6e7c.png",
      alt: "Azadi Ka Amrit Mahotsav",
      width: 160
    },
    {
      src: "/lovable-uploads/2db89e9f-7fb9-422c-9f7b-a34686434e81.png",
      alt: "Digital India",
      width: 140
    },
    {
      src: "/lovable-uploads/63d01b46-8b5d-4111-824e-1d86b18ea2fd.png",
      alt: "Make in India",
      width: 160
    },
    {
      src: "/lovable-uploads/649152e9-e5a2-4753-ba75-2a5501993ce0.png",
      alt: "G20 India",
      width: 140
    }
  ];

  return (
    <div className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-india-navyBlue">Aligned with India's Digital Initiatives</h3>
          <p className="text-gray-600 mt-2">ChakraShield supports the vision of a secure digital India</p>
        </div>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 flex justify-center">
                <div className="p-1 h-full">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex items-center justify-center p-6 h-full">
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
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </div>
  );
};

export default LogoCarousel;
