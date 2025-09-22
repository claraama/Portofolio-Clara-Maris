import React, { useState, useEffect } from "react";
import picture from "../assets/Picture.png"

export default function ColorBlock() {
  const colors = ["#FFCDCD", "#FDFDC7", "#FBD6B1", "#C8E0C8", "#BBE0E0"];
  const [currentColor, setCurrentColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ backgroundColor: colors[currentColor] }}
      className="
        w-full
        h-[200px]     
        sm:h-[300px]
        md:h-[480px]
        mt-4
        transition-colors
        duration-700 /* smooth trans
      "
    >
   <div className="absolute left-1/2 transform -translate-x-1/2 top-1/4 xl:top-1/4 2xl:top-1/5">
  <div className="w-[300px] h-[400px] text-center border-2 border-black p-3 xl:pt-8 2xl:pt-10">
    <img
      src={picture}
      alt="Profile"
      className="w-40 h-56 sm:w-44 sm:h-60 md:w-48 md:h-64 mx-auto mb-5 object-cover"
    />
    <h2 className="text-[18px] sm:text-[20px] md:text-[21px] font-text text-left pl-2 font-bold">
      MARIS CLARA ANTONIA
    </h2>
    <p className="text-[14px] sm:text-[15px] md:text-[16px] font-text text-left pl-2">
      22
    </p>
    <p className="text-[14px] sm:text-[15px] md:text-[16px] font-text text-left pl-2">
      Welcome to my portfolio
    </p>
  </div>
</div>




      
    </div>
  );
}
