import React, { useEffect, useState } from 'react';
import { Anchor, Users, Clock, MapPin, Star, Award, Tag } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useStore } from '../store/useStore';
import toast from 'react-hot-toast';

interface Boat {
  id: number;
  name: string;
  image: string;
  description: string;
  capacity: number;
  price_per_day: number;
  is_available: boolean;
  location: string;
  features: string[];
  rating: number;
  reviews_count: number;
  category: string;
}

const BoatGrid = () => {
  const [boats, setBoats] = useState<Boat[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { isDarkMode } = useStore();

  useEffect(() => {
    fetchBoats();
    
    const subscription = supabase
      .channel('boats')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'boats' }, fetchBoats)
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [selectedCategory]);

  const fetchBoats = async () => {
    try {
      setLoading(true);
      let query = supabase.from('boats').select('*');
      
      if (selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }
      
      const { data, error } = await query.order('rating', { ascending: false });
      
      if (error) throw error;
      setBoats(data || []);
    } catch (error) {
      toast.error('Error fetching boats');
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = async (boatId: number) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .insert([
          { boat_id: boatId, user_id: (await supabase.auth.getUser()).data.user?.id }
        ]);

      if (error) throw error;
      toast.success('Boat booked successfully');
    } catch (error) {
      toast.error('Error booking boat');
    }
  };

  const categories = [
    { id: 'all', name: 'All Boats' },
    { id: 'luxury', name: 'Luxury Yachts' },
    { id: 'sport', name: 'Sport Boats' },
    { id: 'sailing', name: 'Sailing Boats' },
    { id: 'fishing', name: 'Fishing Boats' },
    { id: 'pontoon', name: 'Pontoons' },
    { id: 'catamaran', name: 'Catamarans' },
  ];

  return (
    <section id="boats" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Discover Our Fleet
          </h2>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto text-lg`}>
            Explore our collection of premium boats and yachts available for your next adventure
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : isDarkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boats.map((boat) => (
              <div 
                key={boat.id} 
                className={`${
                  isDarkMode ? 'bg-gray-900' : 'bg-white'
                } rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02]`}
              >
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={boat.image}
                    alt={boat.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {boat.category.charAt(0).toUpperCase() + boat.category.slice(1)}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {boat.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className={`ml-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {boat.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-2`}>
                    {boat.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {boat.location}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-blue-600 mr-2" />
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        Up to {boat.capacity} guests
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-5 w-5 text-blue-600 mr-2" />
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        ${boat.price_per_day.toLocaleString()} per day
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {boat.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className={`text-xs px-2 py-1 rounded-full ${
                            isDarkMode
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                      {boat.features.length > 3 && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          isDarkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          +{boat.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleBooking(boat.id)}
                    disabled={!boat.is_available}
                    className={`w-full flex items-center justify-center py-3 px-4 rounded-lg text-white ${
                      boat.is_available
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-400 cursor-not-allowed'
                    } transition-colors`}
                  >
                    {boat.is_available ? (
                      <>
                        <Anchor className="h-5 w-5 mr-2" />
                        Book Now
                      </>
                    ) : (
                      'Not Available'
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BoatGrid;