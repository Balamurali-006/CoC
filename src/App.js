import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
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
import TeamSection from './components/TeamSection';
import ContactPage from './components/ContactPage';
import AIDay from './components/AIDay';
import CodeAura from './components/CodeAura';
import AcknowledgementSection from './components/FeedbackSection';
import "./App.css";
import Sponsors from './components/sponsors';

// --------------------
// Main App Content Component (Homepage)
// --------------------
const MainAppContent = ({ onNavigateToDevelopers, onNavigateToAIDay, onNavigateToCodeAura }) => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      
      <section id="home">
        <HeroSection 
          onNavigateToAIDay={onNavigateToAIDay}
          onNavigateToCodeAura={onNavigateToCodeAura}
        />
      </section>

      <section id="count">
        <HackathonCountdown/>
      </section>
      
      <section id="about">
        <FeaturesSection />
      </section>

      <section id="prize">
        <PrizePoolSection />
      </section>

      <section id="time">
        <TimelineSection />
      </section>

      <section id="sponsors">
        <Sponsors />
      </section>

      <section id="team">
        <TeamSection />
      </section>

      <section id="galary">
        <Galary/>
      </section>

      <section id="acknowledgement">
        <AcknowledgementSection/>
      </section>
      
      <Footer onNavigateToDevelopers={onNavigateToDevelopers} />
      
      {/* Global Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #1a1a1a; }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ec4899, #8b5cf6);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #be185d, #7c3aed);
        }
        .glow-effect { box-shadow: 0 0 20px rgba(236, 72, 153, 0.3); }
        .neon-border {
          border: 1px solid;
          border-image: linear-gradient(45deg, #ec4899, #8b5cf6) 1;
        }
      `}</style>
    </div>
  );
};

// --------------------
// Navigation Wrapper Component
// --------------------
const AppContent = () => {
  const navigate = useNavigate();

  const navigateToDevelopers = () => {
    navigate("/developers");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToAIDay = () => {
    navigate("/ai-day");
  };

  const navigateToCodeAura = () => {
    navigate("/code-aura");
  };

  const navigateBackFromAIDay = () => {
    navigate("/");
  };

  const navigateBackFromCodeAura = () => {
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainAppContent 
            onNavigateToDevelopers={navigateToDevelopers}
            onNavigateToAIDay={navigateToAIDay}
            onNavigateToCodeAura={navigateToCodeAura}
          />
        }
      />
      <Route
        path="/developers"
        element={<DevelopersPage onGoBack={navigateToHome} />}
      />
      <Route 
        path="/contact" 
        element={<ContactPage scrollToTop={true} />} 
      />
      <Route
        path="/ai-day"
        element={<AIDay onNavigateBack={navigateBackFromAIDay} />}
      />
      <Route
        path="/code-aura"
        element={<CodeAura onNavigateBack={navigateBackFromCodeAura} />}
      />
      <Route
        path="/header"
        element={<DevelopersPage onGoBack={navigateToDevelopers} />}
      />
    </Routes>
  );
};

// --------------------
// Main App Component
// --------------------
const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = () => {
    setTimeout(() => {
      setShowLoader(false);
    }, 300);
  };

  return (
    <Router>
      <div>
        {showLoader ? (
          <CodeOClockLoader onComplete={handleLoaderComplete} />
        ) : (
          <AppContent />
        )}
      </div>
    </Router>
    
  );
};

export default App;