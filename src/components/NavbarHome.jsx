import React from "react";
import { useNavigate } from "react-router-dom"; 
import Logo from "../assets/logo.png";

export default function NavbarHome() {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between h-16 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-12 w-auto sm:h-18" />
        </div>

        {/* Home Button */}
        <div className="flex items-center">
          <button
            onClick={() => navigate("/")} // Navigate to homepage
            className="px-4 py-2 rounded-md text-gray-700 hover:text-gray-900 transition-colors"
          >
            Home
          </button>
        </div>
      </div>
    </nav>
  );
}
