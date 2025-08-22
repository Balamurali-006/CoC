import React, { useState, useEffect } from 'react';

const PrizePoolSection = () => {
  const [hoveredPrize, setHoveredPrize] = useState(null);
  const [liveStats, setLiveStats] = useState({ registered: 156, spotsLeft: 144 });

  // Simulate live stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        registered: prev.registered + Math.floor(Math.random() * 3),
        spotsLeft: Math.max(0, prev.spotsLeft - Math.floor(Math.random() * 3))
      }));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          .perspective-1500 {
            perspective: 1500px;
          }
          
          .preserve-3d {
            transform-style: preserve-3d;
          }
          
          .card-3d {
            transition: transform 0.8s ease-out;
            filter: drop-shadow(0 20px 40px rgba(219, 39, 119, 0.3));
          }
          
          .card-3d:hover {
            transform: scale(1.05) rotateX(5deg) rotateY(5deg);
            filter: drop-shadow(0 30px 60px rgba(219, 39, 119, 0.5));
          }
          
          .backface-hidden {
            backface-visibility: hidden;
          }
          
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          
          .shadow-3d {
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25), 0 8px 15px rgba(219, 39, 119, 0.15);
          }
          
          .shadow-glow-gold {
            box-shadow: 0 0 40px rgba(255, 215, 0, 0.5), 0 15px 40px rgba(0, 0, 0, 0.3);
          }
          
          .shadow-glow-silver {
            box-shadow: 0 0 40px rgba(192, 192, 192, 0.5), 0 15px 40px rgba(0, 0, 0, 0.3);
          }
          
          .shadow-glow-bronze {
            box-shadow: 0 0 40px rgba(205, 127, 50, 0.5), 0 15px 40px rgba(0, 0, 0, 0.3);
          }
          
          .border-gradient {
            background: linear-gradient(45deg, #ec4899, #8b5cf6, #f59e0b);
            border-radius: 0.75rem;
            padding: 2px;
          }
          
          .border-gradient-gold {
            background: linear-gradient(45deg, #fbbf24, #f59e0b);
            border-radius: 0.75rem;
            padding: 2px;
          }
          
          .border-gradient-silver {
            background: linear-gradient(45deg, #9ca3af, #60a5fa);
            border-radius: 0.75rem;
            padding: 2px;
          }
          
          .border-gradient-bronze {
            background: linear-gradient(45deg, #f97316, #fbbf24);
            border-radius: 0.75rem;
            padding: 2px;
          }
          
          @keyframes prize-popup {
            0% {
              transform: translateY(20px) scale(0.8);
              opacity: 0;
            }
            60% {
              transform: translateY(-10px) scale(1.1);
              opacity: 1;
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes glow {
            0%, 100% { text-shadow: 0 0 20px rgba(219, 39, 119, 0.5); }
            50% { text-shadow: 0 0 30px rgba(219, 39, 119, 0.8), 0 0 40px rgba(147, 51, 234, 0.5); }
          }
          
          @keyframes counter {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          .animate-prize-popup {
            animation: prize-popup 0.6s ease-out forwards;
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
          
          .animate-counter {
            animation: counter 2s ease-in-out infinite;
          }
          
          .glass-effect {
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          @media (max-width: 768px) {
            .card-3d:hover {
              transform: scale(1.02);
            }
          }
        `}
      </style>
      
      <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-40 h-40 md:w-64 md:h-64 bg-purple-600/15 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 md:w-56 md:h-56 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 md:w-48 md:h-48 bg-violet-600/20 rounded-full blur-3xl animate-bounce"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-40 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center perspective-1500 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 via-fuchsia-400 to-cyan-400 mb-4 md:mb-6 tracking-wider drop-shadow-2xl animate-glow">
              MEGA PRIZE POOL
            </h1>
            
            
            <div className="flex justify-center items-center space-x-4 md:space-x-6 mb-6 md:mb-8">
              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-pulse"></div>
              <div className="w-8 md:w-10 h-8 md:h-10 border-4 border-pink-500 rounded-full animate-spin"></div>
              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* 3D Card Container */}
          <div className="perspective-1500 mb-8 md:mb-12">
            <div className="relative w-full max-w-sm md:max-w-md mx-auto h-auto">
              <div className="card-3d w-full preserve-3d">
                
                {/* Prize Pool Card */}
                <div className="w-full backface-hidden rounded-2xl md:rounded-3xl overflow-hidden">
                  <div className="border-gradient h-full">
                    <div className="w-full bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 rounded-2xl md:rounded-3xl relative overflow-hidden shadow-3d">
                      
                      {/* Inner Effects */}
                      <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/15 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-purple-500/15 via-transparent to-transparent"></div>
                      </div>
                      
                      {/* Decorative Shapes */}
                      <div className="absolute top-4 right-4 w-8 h-8 md:w-12 md:h-12 border-2 border-pink-400/40 rounded-full animate-spin"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 md:w-8 md:h-8 border-2 border-fuchsia-400/35 rotate-45 animate-pulse"></div>

                      <div className="relative z-10 p-4 md:p-6 lg:p-8">
                        {/* Prize Pool Amount */}
                        <div className="mb-6 md:mb-8 relative">
                          <div className="relative bg-black/60 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-pink-500/40 shadow-3d transform hover:scale-105 transition-all duration-500">
                            <div className="text-pink-400 text-lg md:text-xl font-bold mb-2 tracking-wider">TOTAL PRIZE POOL</div>
                            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 via-purple-400 to-cyan-400 mb-2 drop-shadow-2xl leading-none">
                              ₹50K
                            </div>
                            <div className="text-pink-300 text-base md:text-lg font-semibold">CASH PRIZES</div>
                          </div>
                        </div>
                        
                        {/* Prize Breakdown */}
                        <div className="space-y-3 md:space-y-4">
                          {/* 1st Prize */}
                          <div 
                            className="group relative cursor-pointer"
                            onMouseEnter={() => setHoveredPrize('first')}
                            onMouseLeave={() => setHoveredPrize(null)}
                          >
                            {/* Pop-out Prize */}
                            <div className={`absolute -top-12 md:-top-16 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${hoveredPrize === 'first' ? 'animate-prize-popup z-50' : 'opacity-0 scale-0'}`}>
                              <div className="bg-black/80 backdrop-blur-lg rounded-lg px-3 py-2 md:px-4 md:py-3 border border-yellow-400/50">
                                <div className="text-yellow-400 font-black text-lg md:text-2xl">₹25,000</div>
                                <div className="text-yellow-300 font-bold text-xs md:text-sm">CHAMPION!</div>
                              </div>
                            </div>
                            
                            <div className={`border-gradient-gold relative transition-all duration-500 transform ${hoveredPrize === 'first' ? 'shadow-glow-gold' : 'hover:scale-102'}`}>
                              <div className="bg-black/70 backdrop-blur-xl rounded-lg md:rounded-xl px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
                                <div className="flex items-center space-x-2 md:space-x-3">
                                  <span className="text-2xl md:text-3xl">🏆</span>
                                  <span className="text-yellow-400 font-bold text-lg md:text-xl">1st Place</span>
                                </div>
                                <span className="text-white font-black text-lg md:text-2xl">₹25,000</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* 2nd Prize */}
                          <div 
                            className="group relative cursor-pointer"
                            onMouseEnter={() => setHoveredPrize('second')}
                            onMouseLeave={() => setHoveredPrize(null)}
                          >
                            {/* Pop-out Prize */}
                            <div className={` absolute -top-12 md:-top-16 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${hoveredPrize === 'second' ? 'animate-prize-popup z-50' : 'opacity-0 scale-0'}`}>
                              <div className=" bg-black/80 backdrop-blur-lg rounded-lg px-3 py-2 md:px-4 md:py-3 border border-gray-400/50">
                                <div className="text-gray-300 font-black text-lg md:text-2xl">₹15,000</div>
                                <div className="text-gray-400 font-bold text-xs md:text-sm">RUNNER-UP!</div>
                              </div>
                            </div>
                            
                            <div className={`border-gradient-silver relative transition-all duration-500 transform ${hoveredPrize === 'second' ? 'shadow-glow-silver' : 'hover:scale-102'}`}>
                              <div className="bg-black/70 backdrop-blur-xl rounded-lg md:rounded-xl px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
                                <div className="flex items-center space-x-2 md:space-x-3">
                                  <span className="text-2xl md:text-3xl">🥈</span>
                                  <span className="text-gray-300 font-bold text-lg md:text-xl">2nd Place</span>
                                </div>
                                <span className="text-white font-black text-lg md:text-2xl">₹15,000</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* 3rd Prize */}
                          <div 
                            className="group relative cursor-pointer"
                            onMouseEnter={() => setHoveredPrize('third')}
                            onMouseLeave={() => setHoveredPrize(null)}
                          >
                            {/* Pop-out Prize */}
                            <div className={`absolute -top-12 md:-top-16 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${hoveredPrize === 'third' ? 'animate-prize-popup z-50' : 'opacity-0 scale-0'}`}>
                              <div className="bg-black/80 backdrop-blur-lg rounded-lg px-3 py-2 md:px-4 md:py-3 border border-orange-400/50">
                                <div className="text-orange-400 font-black text-lg md:text-2xl">₹10,000</div>
                                <div className="text-orange-500 font-bold text-xs md:text-sm">ACHIEVER!</div>
                              </div>
                            </div>
                            
                            <div className={`border-gradient-bronze relative transition-all duration-500 transform ${hoveredPrize === 'third' ? 'shadow-glow-bronze' : 'hover:scale-102'}`}>
                              <div className="bg-black/70 backdrop-blur-xl rounded-lg md:rounded-xl px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
                                <div className="cursor-target flex items-center space-x-2 md:space-x-3">
                                  <span className="text-2xl md:text-3xl">🥉</span>
                                  <span className="text-orange-400 font-bold text-lg md:text-xl">3rd Place</span>
                                </div>
                                <span className="text-white font-black text-lg md:text-2xl">₹10,000</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Stats Section */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center relative">
            <div className="group relative inline-block cursor-target">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-100 animate-pulse"></div>
              <button className="relative px-6 md:px-12 py-4 md:py-6 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 text-white font-black text-base md:text-xl rounded-full shadow-3d transform group-hover:scale-105 transition-all duration-500 border-2 border-white/30">
                <span className="relative z-10 tracking-wider"><a href='https://docs.google.com/forms/d/e/1FAIpQLSe1PpoE2xCtN9zWfis-sVEI74pA1PEhqo1L5Cv9na0nKskr9g/viewform'>🚀 REGISTER NOW! 🚀</a></span>
              </button>
            </div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mt-4 md:mt-6 text-sm md:text-lg font-bold">
              Join the Ultimate Coding Battle • Limited Elite Seats!
            </p>
            
            {/* Action Icons */}
            <div className="flex justify-center items-center space-x-6 md:space-x-10 mt-6 md:mt-8">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 group-hover:scale-110 transition-all duration-500 animate-bounce">⏰</div>
                <div className="text-pink-300 text-xs md:text-sm font-semibold mt-1 md:mt-2">Register Fast</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 group-hover:scale-110 transition-all duration-500 animate-pulse">💻</div>
                <div className="text-purple-300 text-xs md:text-sm font-semibold mt-1 md:mt-2">Code Hard</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-fuchsia-400 group-hover:scale-110 transition-all duration-500 animate-bounce">🏆</div>
                <div className="text-fuchsia-300 text-xs md:text-sm font-semibold mt-1 md:mt-2">Win Big</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrizePoolSection;