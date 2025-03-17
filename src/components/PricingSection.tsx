import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect advertising package for your campaign
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Package */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Basic</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$999</span>
              <span className="text-gray-600">/day</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>4 Hours of Display Time</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Single Route Coverage</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Static Display Content</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Select Basic
            </button>
          </div>

          {/* Premium Package */}
          <div className="bg-blue-600 rounded-xl p-8 text-white transform scale-105 shadow-xl">
            <h3 className="text-xl font-bold mb-4">Premium</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$1,999</span>
              <span>/day</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>8 Hours of Display Time</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>Multi-Route Coverage</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>Dynamic Content Support</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>Real-time Analytics</span>
              </li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-gray-100">
              Select Premium
            </button>
          </div>

          {/* Enterprise Package */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$2,999</span>
              <span className="text-gray-600">/day</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>12 Hours of Display Time</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Custom Route Planning</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Video & Interactive Content</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Priority Support</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Select Enterprise
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;