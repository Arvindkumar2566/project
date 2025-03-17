import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    name: 'Premium LED Truck',
    image: 'https://images.unsplash.com/photo-1620503374956-c942862f0372?auto=format&fit=crop&q=80',
    description: 'High-resolution LED screens perfect for dynamic content and video advertisements.',
    features: ['4K Resolution', 'Double-sided Display', 'GPS Tracking']
  },
  {
    id: 2,
    name: 'Standard LED Van',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80',
    description: 'Compact and agile vehicle ideal for urban advertising campaigns.',
    features: ['HD Resolution', 'Single-sided Display', 'Urban Route Optimization']
  },
  {
    id: 3,
    name: 'Mobile Billboard Truck',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80',
    description: 'Large format static and digital displays for maximum impact.',
    features: ['Extended Range', 'Weatherproof Display', 'Night Mode']
  }
];

const VehicleGrid = () => {
  return (
    <section id="vehicles" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Advertisement Vehicles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our fleet of modern LED billboard trucks designed to maximize your advertising impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                <p className="text-gray-600 mb-4">{vehicle.description}</p>
                <ul className="space-y-2 mb-6">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Book This Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleGrid;