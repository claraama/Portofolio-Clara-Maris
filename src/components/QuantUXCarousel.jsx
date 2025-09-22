import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import firstImageInteractiveMenu from "../assets/versionA.png";
import secondImageInteractiveMenu from "../assets/versionB.png";


export default function QuantUXCarousel() {
    const images = [
        firstImageInteractiveMenu,
        secondImageInteractiveMenu
      ];
    
      const [current, setCurrent] = useState(0);
    
      const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      };
    
      const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      };
    
      return (
        <div className="relative w-[50%] max-w-[600px] mx-auto mt-20">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={images[current]}
              alt="Interactive Menu screenshot"
              className="w-full h-auto object-contain"
            />
            
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center items-center gap-2 py-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-MainPink scale-110" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
  
  );
}