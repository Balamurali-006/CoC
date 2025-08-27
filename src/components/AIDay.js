// import React, { useState, useEffect } from 'react';
// import { ArrowLeft, Calendar, MapPin, Users, Mic, Palette, Wrench, Play, Camera, Star, Sparkles, Zap, Brain, Cpu } from 'lucide-react';


import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, Users, Mic, Palette, Wrench, Play, Camera, Star, Sparkles, Zap, Brain, Cpu } from 'lucide-react';
import tharun from '../assets/tharun.png';
import shaz from '../assets/shaz.jpg';
import speak1 from '../assets/Speak1.png';
import speak2 from '../assets/speak2.png';

const AIDay = ({ onNavigateBack }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      bio: "Global Cybercrime Investigator,Ethical Hacker,Cybersecurity Influencer,Trainer ",
      expertise: "International Cybersecurity speaker, trainer & Cybercrime Investigor",
      image: speak2
    },
    { 
      name: "Lenin", 
      role: "Speaker 3", 
      bio: "Tech Evangelist & ML Engineer",
      expertise: "Natural Language Processing",
      image: "/api/placeholder/200/200"
    }
  ];

  const coordinators = [
    { 
      name: "Shahila", 
      role: "Event Coordinator", 
      specialty: "Event Management",
      image: shaz,
      phone : "7604973171"
    },
    { 
      name: "Tharun", 
      role: "Event Coordinator", 
      specialty: "Technical Operations",
      image: tharun,
      phone : "6380795514"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
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
          backgroundSize: '60px 60px'
        }}
      />

      {/* Centered Header */}
      <div className="relative z-10 py-8">
        <div className="flex justify-center">
          <button 
            onClick={onNavigateBack}
            className="flex items-center gap-2 text-pink-300 hover:text-pink-200 transition-all duration-300 group cursor-pointer bg-purple-900/20 px-6 py-3 rounded-full border border-pink-800/40 hover:border-purple-600/60 hover:bg-purple-900/30 transform hover:scale-105"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Code o Clock Branding */}
          <div className="mb-8">
            <p className="text-sm sm:text-base text-pink-300/80 font-medium tracking-wider uppercase mb-4">
              Part of our flagship event
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-700 via-purple-600 to-purple-500 bg-clip-text text-transparent mb-8">
              CODE O CLOCK
            </h2>
          </div>

          {/* Main Title */}
          <div className="relative mb-12">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 relative">
              <span className="relative z-10 bg-gradient-to-r from-pink-800 via-pink-600 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                AI DAY
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-900 to-purple-700 bg-clip-text text-transparent blur-sm opacity-30 scale-105">
                AI DAY
              </div>
            </h1>
            
            {/* Glowing backdrop */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-pink-900/20 via-purple-800/30 to-purple-700/20 rounded-full blur-3xl opacity-80 scale-150"></div>
          </div>

          {/* Enhanced Tagline */}
          <div className="mb-12">
            <p className="text-xl sm:text-2xl md:text-3xl font-light mb-6 bg-gradient-to-r from-pink-700 via-purple-600 to-purple-500 bg-clip-text text-transparent leading-relaxed">
              Discover the Future of Artificial Intelligence
            </p>
            <p className="text-base sm:text-lg text-purple-300/70 max-w-2xl mx-auto leading-relaxed">
              Join us for an immersive experience into the world of AI, featuring interactive demonstrations, 
              expert talks, and hands-on activities that will shape tomorrow's technology.
            </p>
          </div>

          {/* Animated decorative elements */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-700 to-transparent flex-1 max-w-xs"></div>
            <div className="flex gap-3">
              <Sparkles className="w-6 h-6 text-pink-600 animate-spin" style={{animationDuration: '3s'}} />
              <Brain className="w-6 h-6 text-purple-700 animate-pulse" />
              <Cpu className="w-6 h-6 text-purple-500 animate-bounce" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-700 to-transparent flex-1 max-w-xs"></div>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-base sm:text-lg text-purple-300 mb-16">
            <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md px-6 py-4 rounded-full border border-pink-800/40 hover:border-purple-600/60 transition-all duration-300 hover:scale-105">
              <Calendar size={24} className="animate-pulse text-pink-600" />
              <span className="font-medium">26 Sept 2025</span>
            </div>
            <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md px-6 py-4 rounded-full border border-pink-800/40 hover:border-purple-600/60 transition-all duration-300 hover:scale-105">
              <MapPin size={24} className="animate-bounce text-purple-600" />
              <span className="font-medium">Coimbatore Institute of Technology</span>
            </div>
          </div>

          {/* Enhanced Register Button */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-pink-800 via-purple-700 to-purple-600 hover:from-pink-700 hover:via-purple-600 hover:to-purple-500 text-white font-bold rounded-full text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-800/40 transform">
              <span className="relative z-10 flex items-center gap-3">
                <Zap size={20} />
                Register for AI Day
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-500 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl scale-110"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Events Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-pink-800 via-purple-700 to-purple-600 bg-clip-text text-transparent relative">
            Events Lineup
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, index) => (
              <div key={index} className="group">
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/95 backdrop-blur-sm rounded-2xl p-6 border border-pink-800/30 hover:border-purple-600/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-800/30 cursor-pointer">
                  
                  <div className="relative z-10">
                    <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${event.color} rounded-xl mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <event.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-pink-700 to-purple-600 bg-clip-text text-transparent">
                      {event.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                  </div>
                  
                  {/* Subtle hover glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-800/0 to-purple-700/0 group-hover:from-pink-800/15 group-hover:to-purple-700/15 rounded-2xl transition-all duration-500 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-pink-800 via-purple-700 to-purple-600 bg-clip-text text-transparent">
            Featured Speakers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {speakers.map((speaker, index) => (
              <div key={index} className="group">
                <div className="relative bg-gradient-to-br from-gray-900/70 to-black/90 backdrop-blur-sm rounded-2xl p-8 border border-pink-800/30 hover:border-purple-600/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-800/30 text-center cursor-pointer">
                  
                  <div className="relative z-10">
                    {/* Image Container */}
                    <div className="relative mb-6">
                      <div className="relative w-24 h-24 mx-auto">
                        <img 
                          src={speaker.image} 
                          alt={speaker.name}
                          className="w-full h-full object-cover rounded-full border-3 border-purple-700/60 group-hover:border-pink-600/80 group-hover:scale-110 transition-all duration-500 shadow-lg"
                        />
                        <div className="absolute -inset-2 bg-gradient-to-r from-pink-800/40 to-purple-700/40 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold bg-gradient-to-r from-pink-700 to-purple-600 bg-clip-text text-transparent mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-purple-400 font-medium mb-2">{speaker.role}</p>
                    <p className="text-gray-400 mb-3 text-sm leading-relaxed">{speaker.bio}</p>
                    <p className="text-pink-300 text-xs font-medium mb-4">{speaker.expertise}</p>

                    
                    {speaker.linkedin && (
                      <a 
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-300 transition-colors font-medium bg-purple-800/20 px-4 py-2 rounded-full border border-purple-700/40 hover:border-pink-600/60 hover:scale-110 transform duration-300 text-sm"
                      >
                        <Star size={16} />
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

      {/* Coordinators Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-pink-800 via-purple-700 to-purple-600 bg-clip-text text-transparent">
            Event Coordinators
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-4xl mx-auto">
            {coordinators.map((coordinator, index) => (
              <div key={index} className="group flex-1 max-w-sm mx-auto">
                <div className="relative bg-gradient-to-br from-pink-800/15 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/40 hover:border-pink-600/70 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-800/35 text-center cursor-pointer">
                  
                  <div className="relative z-10">
                    {/* Image Container */}
                    <div className="relative mb-6">
                      <div className="relative w-20 h-20 mx-auto">
                        <img 
                          src={coordinator.image} 
                          alt={coordinator.name}
                          className="w-full h-full object-cover rounded-full border-3 border-purple-700/60 group-hover:border-pink-600/80 group-hover:scale-110 transition-all duration-500 shadow-lg"
                        />
                        <div className="absolute -inset-2 bg-gradient-to-r from-pink-800/50 to-purple-700/50 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold bg-gradient-to-r from-pink-700 to-purple-600 bg-clip-text text-transparent mb-2">
                      {coordinator.name}
                    </h3>
                    <p className="text-purple-400 font-medium mb-1">{coordinator.role}</p>
                    <p className="text-pink-300 font-medium text-sm">{coordinator.specialty}</p>
                    <p className="text-from-pink-700 to-purple-600 font-medium text-md"> PHNO  : {coordinator.phone}</p>
                  </div>
                  
                  {/* Subtle hover glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-800/0 to-purple-700/0 group-hover:from-pink-800/20 group-hover:to-purple-700/20 rounded-2xl transition-all duration-500 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-800 via-purple-700 to-purple-600 bg-clip-text text-transparent">
            Ready to Experience the AI Revolution?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join us for an unforgettable journey into the world of artificial intelligence. 
            Network with experts, explore cutting-edge technology, and shape the future.
          </p>
          <button className="group relative px-12 py-6 bg-gradient-to-r from-pink-800 via-purple-700 to-purple-600 hover:from-pink-700 hover:via-purple-600 hover:to-purple-500 text-white font-bold rounded-full text-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-800/40 transform">
            <span className="relative z-10 flex items-center gap-3">
              <Brain size={24} />
              Join the Revolution
              <Sparkles size={24} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-500 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl scale-110"></div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/30">
        <div className="container mx-auto text-center text-gray-500">
          <p>&copy; 2025 AI Day Event. Powered by Innovation & Future Technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default AIDay;