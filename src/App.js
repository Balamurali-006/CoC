import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TimelineSection from './components/TimelineSection';
import Galary from './components/Galary';
import Footer from './components/Footer';
import DevelopersPage from './components/DevelopersPage';
import HackathonCountdown from './components/HackathonCountdown';
import PrizePoolSection from './components/PrizePoolSection';
import CodeOClockLoader from './components/CodeOClockLoader';
import "./App.css";
import Sponsors from './components/sponsors';

// Main App Content Component - Contains all the homepage sections
const MainAppContent = ({ onNavigateToDevelopers }) => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header - Navigation and branding */}
      <Header />
      
      {/* Hero Section - Landing page with main call-to-action */}
      <section id="home">
        <HeroSection />
      </section>


     {/* Timeline Section - Event schedule and agenda */}
      <section id="count">
        <HackathonCountdown/>
      </section>
      
      {/* Features Section - Why participate in the hackathon */}
      <section id="about">
        <FeaturesSection />
      </section>

      {/* Prize Pool Section */}
      <section id="prize">
        <PrizePoolSection />
      </section>


      <section id="time">
        <TimelineSection />
      </section>


      <section id="time">
        <Sponsors />
      </section>
      

      {/* Gallery Section */}
      <section id="galary">
        <Galary/>
      </section>
      
      {/* Footer Section - Contact info and links */}
      <Footer onNavigateToDevelopers={onNavigateToDevelopers} />
      
      {/* Global Styles - Cyberpunk theme effects */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ec4899, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #be185d, #7c3aed);
        }
        
        .glow-effect {
          box-shadow: 0 0 20px rgba(236, 72, 153, 0.3);
        }
        
        .neon-border {
          border: 1px solid;
          border-image: linear-gradient(45deg, #ec4899, #8b5cf6) 1;
        }
      `}</style>
    </div>
  );
};

// Main App Component - Handles routing and initial loading
const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLoaderComplete = () => {
    // Small delay for smooth transition
    setTimeout(() => {
      setShowLoader(false);
    }, 300);
  };

  const navigateToDevelopers = () => {
    setCurrentPage('developers');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div>
      {/* Show loader only on initial app load */}
      {showLoader ? (
        <CodeOClockLoader onComplete={handleLoaderComplete} />
      ) : (
        <>
          {/* Main content - no loader when routing between pages */}
          {currentPage === 'home' && (
            <MainAppContent onNavigateToDevelopers={navigateToDevelopers} />
          )}
          {currentPage === 'developers' && (
            <DevelopersPage onGoBack={navigateToHome} />
          )}
        </>
      )}
    </div>
  );
};

export default App;