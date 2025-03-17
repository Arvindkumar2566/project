import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { supabase } from './lib/supabase';
import { useStore } from './store/useStore';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BoatGrid from './components/BoatGrid';
import AuthForm from './components/AuthForm';
import Footer from './components/Footer';

function App() {
  const [session, setSession] = useState(null);
  const { isDarkMode } = useStore();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <Toaster position="top-right" />
        {session ? (
          <>
            <Navbar />
            <Hero />
            <BoatGrid />
            <Footer />
          </>
        ) : (
          <AuthForm />
        )}
      </div>
    </div>
  );
}

export default App;