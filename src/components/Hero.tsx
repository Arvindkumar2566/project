import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useStore } from '../store/useStore';

const Hero = () => {
  const { isDarkMode } = useStore();

  return (
    <div className={`relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} pt-16`}>
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80"
          alt="Luxury yacht on water"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className={`text-4xl md:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
          Luxury Boat Rentals <br />
          <span className="text-blue-400">For Your Perfect Getaway</span>
        </h1>
        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl`}>
          Experience the ultimate in maritime luxury with our premium fleet of boats and yachts. 
          Perfect for special occasions or weekend adventures.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 flex items-center justify-center">
            Book Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className={`border-2 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-gray-900' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'} px-8 py-4 rounded-lg`}>
            View Fleet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;