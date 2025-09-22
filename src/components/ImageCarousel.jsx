import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import firstImageClicktopia from "../assets/SliderClicktopia2.png";
import secondImageClicktopia from "../assets/SliderClicktopia3.png";
import thirdImageClicktopia from "../assets/SliderClicktopia4.png";
import fifthImageClicktopia from "../assets/SliderClicktopia5.png";

export default function ImageCarousel() {
  const images = [
    firstImageClicktopia,secondImageClicktopia,thirdImageClicktopia, fifthImageClicktopia
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-[90%] max-w-[690px] mx-auto mt-20 rounded-[30px] overflow-hidden bg-MainPink">
      <img
        src={images[current]}
        alt="Project screenshot"
        className="w-full h-[400px] object-contain"
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center items-center gap-2 py-4 bg-MainPink">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-white scale-110" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
