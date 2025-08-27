import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, Users, Mic, Palette, Wrench, Play, Camera, Star, Sparkles, Zap, Brain, Cpu } from 'lucide-react';
import shaz from '../assets/shaz.jpg';
import tharun from '../assets/tharun.png';
import speak1 from '../assets/Speak1.png';
import speak2 from '../assets/speak2.png';

// Desktop Flip Card Component
const CoordinatorFlipCard = ({ coordinator }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="relative w-full h-80 cursor-pointer transition-transform duration-700"
      style={{
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Front Side */}
      <div className="absolute inset-0 w-full h-full" style={{backfaceVisibility: 'hidden'}}>
        <div className="relative bg-gradient-to-br from-pink-800/20 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50 h-full flex flex-col justify-center items-center text-center shadow-xl hover:shadow-2xl hover:shadow-purple-800/40 transition-all duration-500">
          
          {/* Decorative Icon/Avatar Placeholder */}
          <div className="relative mb-6">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-700/30 to-purple-600/40 rounded-full flex items-center justify-center border-2 border-purple-600/60 shadow-lg">
              <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="absolute -inset-3 bg-gradient-to-r from-pink-800/30 to-purple-700/30 rounded-full blur-lg opacity-60 animate-pulse"></div>
          </div>
          
          <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent mb-3">
            {coordinator.name}
          </h3>
          <p className="text-purple-300 font-semibold mb-2 text-lg">{coordinator.role}</p>
          <p className="text-pink-300 font-medium mb-4">{coordinator.specialty}</p>
          <p className="text-purple-200 font-medium text-sm bg-gradient-to-r from-purple-800/20 to-pink-800/20 px-4 py-2 rounded-full border border-purple-600/30">
            {coordinator.phone}
          </p>
          
          {/* Flip Indicator */}
          <div className={`absolute bottom-4 right-4 transition-colors duration-300 ${isFlipped ? 'text-pink-400/80' : 'text-purple-400/60'}`}>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          
          {/* Gradient Overlay */}
          <div className={`absolute -inset-1 rounded-2xl transition-all duration-500 -z-10 ${isFlipped ? 'bg-gradient-to-r from-pink-800/10 to-purple-700/10' : 'bg-gradient-to-r from-pink-800/0 to-purple-700/0'}`}></div>
        </div>
      </div>
      
      {/* Back Side */}
      <div className="absolute inset-0 w-full h-full" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
        <div className="relative bg-gradient-to-br from-purple-900/40 to-pink-800/30 backdrop-blur-md rounded-2xl border border-pink-600/50 h-full overflow-hidden shadow-2xl shadow-pink-800/50">
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src={coordinator.image} 
              alt={coordinator.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-800/20 to-purple-900/30"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                {coordinator.name}
              </h3>
              <p className="text-purple-200 font-semibold mb-1">{coordinator.role}</p>
              <p className="text-pink-200 text-sm font-medium">{coordinator.specialty}</p>
              
              {/* Contact Button */}
              <a 
                href={`tel:${coordinator.phone}`}
                className="mt-4 inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-600/80 to-purple-600/80 rounded-full text-white font-medium text-sm hover:from-pink-500 hover:to-purple-500 transition-all duration-300 border border-white/20"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {coordinator.phone}
              </a>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm">
              <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AIDay = ({ onNavigateBack }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      }
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Sample images for demo

  const events = [
    { name: "Art Gallery", icon: Palette, description: "Explore AI-generated artworks and digital creativity", color: "from-pink-800 to-pink-700" },
    { name: "Tools Demonstration", icon: Wrench, description: "Live demos of cutting-edge AI tools and applications", color: "from-purple-700 to-purple-600" },
    { name: "AI Role Play", icon: Play, description: "Interactive AI scenarios and immersive experiences", color: "from-pink-600 to-purple-500" },
    { name: "Anime Character Photobooth", icon: Camera, description: "Transform into your favorite anime characters with AI", color: "from-purple-800 to-pink-600" }
  ];

  const speakers = [
    { 
      name: "Dinesh Kumar", 
      role: "Speaker", 
      linkedin: "https://www.linkedin.com/in/dinesh-kumar-prabakaran/",
      bio: "Community Builder for AI & Product Thinking in Coimbatore",
      expertise: "Product Manager with 12+ years specialized in Modern data stack, and cloud technologies.",
      image: speak1
    },
    { 
      name: "Sankar Raj", 
      role: "Speaker", 
      linkedin: "https://www.linkedin.com/in/sankarrajj/",
      bio: "Global Cybercrime Investigator, Ethical Hacker, Cybersecurity Influencer, Trainer",
      expertise: "International Cybersecurity speaker, trainer & Cybercrime Investigator",
      image: speak2
    }
  ];

  const coordinators = [
    { 
      name: "Shahila", 
      role: "Event Coordinator", 
      specialty: "Event Management",
      image: shaz,
      phone: "7604973171"
    },
    { 
      name: "Tharun", 
      role: "Event Coordinator", 
      specialty: "Technical Operations",
      image: tharun,
      phone: "6380795514"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Enhanced Dynamic Background with Dark Pink to Purple Theme */}
      <div 
        className="fixed inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(219, 39, 119, 0.15) 0%, rgba(147, 51, 234, 0.08) 50%, transparent 70%),
            linear-gradient(45deg, rgba(157, 23, 77, 0.05) 0%, rgba(126, 34, 206, 0.07) 100%)
          `
        }}
      />
      
      {/* Static Grid Background */}
      <div 
        className="fixed inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(219, 39, 119, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? '40px 40px' : '60px 60px'
        }}
      />

      {/* Header - Mobile Optimized */}
      <div className="relative z-10 py-4 sm:py-8">
        <div className="flex justify-center px-4">
          <button 
            onClick={onNavigateBack}
            className="flex items-center gap-2 text-pink-300 hover:text-pink-200 transition-all duration-300 group cursor-pointer bg-purple-900/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-pink-800/40 hover:border-purple-600/60 hover:bg-purple-900/30 transform hover:scale-105 text-sm sm:text-base"
          >
            <ArrowLeft size={isMobile ? 18 : 20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Hero Section - Mobile Optimized */}
      <header className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="container mx-auto text-center max-w-6xl">
          
          {/* Code o Clock Branding */}
          <div className="mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm text-pink-300/80 font-medium tracking-wider uppercase mb-3 sm:mb-4">
              Part of our flagship event
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-700 via-purple-600 to-purple-500 bg-clip-text text-transparent mb-6 sm:mb-8">
              CODE O CLOCK
            </h2>
          </div>

          {/* Main Title - Mobile Responsive */}
          <div className="relative mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 relative leading-tight">
              <span className="relative z-10 bg-gradient-to-r from-pink-800 via-pink-600 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                AI DAY
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-900 to-purple-700 bg-clip-text text-transparent blur-sm opacity-30 scale-105">
                AI DAY
              </div>
            </h1>
            
            {/* Glowing backdrop - Mobile optimized */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-pink-900/20 via-purple-800/30 to-purple-700/20 rounded-full blur-2xl sm:blur-3xl opacity-80 scale-110 sm:scale-150"></div>
          </div>

          {/* Enhanced Tagline - Mobile Responsive */}
          <div className="mb-8 sm:mb-12">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-4 sm:mb-6 bg-gradient-to-r from-pink-700 via-purple-600 to-purple-500 bg-clip-text text-transparent leading-relaxed px-2">
              Discover the Future of Artificial Intelligence
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-purple-300/70 max-w-2xl mx-auto leading-relaxed px-4">
              Join us for an immersive experience into the world of AI, featuring interactive demonstrations, 
              expert talks, and hands-on activities that will shape tomorrow's technology.
            </p>
          </div>

          {/* Animated decorative elements - Mobile optimized */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-700 to-transparent flex-1 max-w-20 sm:max-w-xs"></div>
            <div className="flex gap-2 sm:gap-3">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 animate-spin" style={{animationDuration: '3s'}} />
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700 animate-pulse" />
              <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 animate-bounce" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-700 to-transparent flex-1 max-w-20 sm:max-w-xs"></div>
          </div>

          {/* Event Details - Mobile Responsive */}
          <div className="flex flex-col gap-4 sm:gap-6 text-sm sm:text-base lg:text-lg text-purple-300 mb-8 sm:mb-16 px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 sm:gap-3 bg-black/50 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-pink-800/40 hover:border-purple-600/60 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center">
                <Calendar size={isMobile ? 20 : 24} className="animate-pulse text-pink-600 flex-shrink-0" />
                <span className="font-medium">26 Sept 2025</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-black/50 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-pink-800/40 hover:border-purple-600/60 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center">
                <MapPin size={isMobile ? 20 : 24} className="animate-bounce text-purple-600 flex-shrink-0" />
                <span className="font-medium text-center sm:text-left">Coimbatore Institute of Technology</span>
              </div>
            </div>
          </div>

          {/* Enhanced Register Button - Mobile Optimized */}
          <div className="flex justify-center px-4">
            <a 
              href='https://docs.google.com/forms/d/e/1FAIpQLSerna85ILtdONt51E0CwrzAbm0l1fVgNuDwzhnaVGxauyzQQw/viewform'
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-pink-800 via-purple-700 to-purple-600 hover:from-pink-700 hover:via-purple-600 hover:to-purple-500 text-white font-bold rounded-full text-base sm:text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-800/40 transform inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center max-w-xs sm:max-w-none"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                <Zap size={isMobile ? 18 : 20} />
                Register for AI Day
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-500 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl scale-110"></div>
            </a>
          </div>
        </div>
      </header>

      {/* Events Section - Mobile Optimized */}
      <section className="relative z-10 py-12 sm:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-20 bg-gradient-to-r from-pink-800 via-purple-700 to-purple-600 bg-clip-text text-transparent relative">
            Events Lineup
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <div key={index} className="group">
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-pink-800/30 hover:border-purple-600/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-800/30 cursor-pointer">
                  
                  <div className="relative z-10">
                    <div className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${event.color} rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <event.icon size={isMobile ? 24 : 28} className="text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 bg-gradient-to-r from-pink-700 to-purple-600 bg-clip-text text-transparent">
                      {event.name}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{event.description}</p>
                  </div>
                  
                  {/* Subtle hover glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-800/0 to-purple-700/0 group-hover:from-pink-800/15 group-hover:to-purple-700/15 rounded-2xl transition-all duration-500 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section - Mobile Optimized */}
      <section className="relative z-10 py-12 sm:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-20 bg-gradient-to-r from-pink-800 via-purple-700 to-purple-600 bg-clip-text text-transparent">
            Featured Speakers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {speakers.map((speaker, index) => (
              <div key={index} className="group">
                <div className="relative bg-gradient-to-br from-gray-900/70 to-black/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-pink-800/30 hover:border-purple-600/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-800/30 text-center cursor-pointer">
                  
                  <div className="relative z-10">
                    {/* Image Container - Mobile optimized */}
                    <div className="relative mb-4 sm:mb-6">
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto">
                        <img 
                          src={speaker.image} 
                          alt={speaker.name}
                          className="w-full h-full object-cover rounded-full border-3 border-purple-700/60 group-hover:border-pink-600/80 group-hover:scale-110 transition-all duration-500 shadow-lg"
                        />
                        <div className="absolute -inset-2 bg-gradient-to-r from-pink-800/40 to-purple-700/40 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-pink-700 to-purple-600 bg-clip-text text-transparent mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-purple-400 font-medium mb-2 text-sm sm:text-base">{speaker.role}</p>
                    <p className="text-gray-400 mb-3 text-xs sm:text-sm leading-relaxed">{speaker.bio}</p>
                    <p className="text-pink-300 text-xs font-medium mb-4">{speaker.expertise}</p>

                    
                    {speaker.linkedin && (
                      <a 
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-300 transition-colors font-medium bg-purple-800/20 px-3 sm:px-4 py-2 rounded-full border border-purple-700/40 hover:border-pink-600/60 hover:scale-110 transform duration-300 text-xs sm:text-sm"
                      >
                        <Star size={14} />
                        LinkedIn
                      </a>
                    )}
                  </div>
                  
                  {/* Subtle hover glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-800/0 to-purple-700/0 group-hover:from-pink-800/15 group-hover:to-purple-700/15 rounded-2xl transition-all duration-500 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coordinators Section - Mobile Friendly Design */}
      <section className="relative z-10 py-12 sm:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-20 bg-gradient-to-r from-pink-800 via-purple-700 to-purple-600 bg-clip-text text-transparent">
            Event Coordinators
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {coordinators.map((coordinator, index) => (
              <div key={index} className="group">
                {/* Mobile: Simple Card Design, Desktop: Flip Card */}
                {isMobile ? (
                  /* Mobile Card Design */
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/95 backdrop-blur-sm rounded-2xl border border-pink-800/30 hover:border-purple-600/60 transition-all duration-500 overflow-hidden shadow-xl">
                    {/* Mobile Header with Image */}
                    <div className="relative h-32 overflow-hidden">
                      <img 
                        src={coordinator.image} 
                        alt={coordinator.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/40 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-800/20 to-purple-900/30"></div>
                    </div>
                    
                    {/* Mobile Content */}
                    <div className="p-6">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent mb-2">
                          {coordinator.name}
                        </h3>
                        <p className="text-purple-300 font-semibold text-base mb-1">{coordinator.role}</p>
                        <p className="text-pink-300 font-medium text-sm">{coordinator.specialty}</p>
                      </div>
                      
                      {/* Contact Info */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2 text-purple-200 bg-gradient-to-r from-purple-800/20 to-pink-800/20 px-4 py-2 rounded-full border border-purple-600/30">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="font-medium text-sm">{coordinator.phone}</span>
                        </div>
                        
                        <a 
                          href={`tel:${coordinator.phone}`}
                          className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 rounded-full text-white font-medium text-sm transition-all duration-300 border border-white/10 hover:scale-105 active:scale-95"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Desktop Flip Card Design */
                  <div className="flex-1 max-w-sm mx-auto" style={{perspective: '1000px'}}>
                    <CoordinatorFlipCard coordinator={coordinator} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="relative z-10 py-12 sm:py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-pink-800 via-purple-700 to-purple-600 bg-clip-text text-transparent">
            Ready to Experience the AI Revolution?
          </h2>
          <p className="text-base sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
            Join us for an unforgettable journey into the world of artificial intelligence. 
            Network with experts, explore cutting-edge technology, and shape the future.
          </p>
          <div className="flex justify-center px-4">
            <a 
              href='https://docs.google.com/forms/d/e/1FAIpQLSerna85ILtdONt51E0CwrzAbm0l1fVgNuDwzhnaVGxauyzQQw/viewform'
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-pink-800 via-purple-700 to-purple-600 hover:from-pink-700 hover:via-purple-600 hover:to-purple-500 text-white font-bold rounded-full text-lg sm:text-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-800/40 transform inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center max-w-sm sm:max-w-none"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                <Brain size={isMobile ? 20 : 24} />
                Join the Revolution
                <Sparkles size={isMobile ? 20 : 24} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-500 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl scale-110"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Mobile Optimized */}
      <footer className="relative z-10 py-8 sm:py-12 px-4 border-t border-gray-800/30">
        <div className="container mx-auto text-center text-gray-500">
          <p className="text-sm sm:text-base">&copy; 2025 AI Day Event. Powered by Innovation & Future Technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default AIDay;