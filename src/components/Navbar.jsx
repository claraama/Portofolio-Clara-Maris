import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

 
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "portfolio", "contact"];
      let current = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between h-16  mx-auto px-4 sm:px-6 lg:px-8">
        
    
        <div className="flex-shrink-0">
          <img src={Logo} alt="MC Logo" className="h-12 top-1 sm:h-18 w-auto" />
        </div>

   
        <div className="flex items-center space-x-4 sm:space-x-6 whitespace-nowrap">
          {[
            { id: "about", label: "About Me" },
            { id: "portfolio", label: "Portfolio" },
            { id: "contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-2 py-1 rounded-md transition-colors ${
                activeSection === link.id
                  ? "bg-MainPink text-gray-900"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
