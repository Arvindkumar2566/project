import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useStore } from '../store/useStore';

const Hero = () => {
  const { isDarkMode } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={`relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} pt-16`}>
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/src/assets/tumbnil_bg_1.jpg"
          alt="Luxury yacht on water"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className={`text-4xl md:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
          Book Your Ads <br />
          <span className="text-blue-400">Drive Your Success!</span>
        </h1>
        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl`}>
          Discover an innovative way to promote your brand with our interactive ad vehicle booking platform. Choose from moving trucks with LED billboards to reach your audience anywhere.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 flex items-center justify-center">
            Book Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button
            className={`border-2 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-gray-900' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'} px-8 py-4 rounded-lg`}
            onClick={openModal}
          >
            View video
          </button>
        </div>
      </div>

      {/* Modal for Video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full">
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2"
              onClick={closeModal}
            >
              X
            </button>
            <video controls autoPlay className="w-full h-auto">
              <source src="/src/assets/LED_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
