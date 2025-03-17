import React from "react";
import { useStore } from "../store/useStore"; // Assuming you're using a store for dark mode state

const ImageSec: React.FC = () => {
  const { isDarkMode } = useStore(); // Assume `isDarkMode` holds the state for dark mode

  return (
    <div className={`flex justify-center mt-8 ${isDarkMode ? 'dark' : ''}`}>
      <div className="relative group">
        <img
          src="/src/assets/image2.jpg" // Ensure the image is in public/assets/
          alt="LED Vehicle"
          className={`max-w-full h-auto rounded-lg shadow-2xl transition-all duration-700 ease-in-out ${
            isDarkMode ? 'filter brightness-50' : 'filter brightness-100'
          }`}
        />

        {/* Link Section with Background, Centered Vertically */}
        <div
          className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-6xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <a href="/book-now" className="hover:text-blue-400">
            Book Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageSec;
