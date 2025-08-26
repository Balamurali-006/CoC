import React, { useState, useEffect } from 'react';

const getClockNumberPosition = (number) => {
    const angle = ((number - 3) * 30 * Math.PI) / 180;
    const radius = 90;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transform: 'translate(-50%, -50%)'
    };
};

// Enhanced CodeOClockLoader with improved clock and 8-second timing
const CodeOClockLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentCode, setCurrentCode] = useState('');
  const [loadingStage, setLoadingStage] = useState('loading');
  const [blinkCount, setBlinkCount] = useState(0);
  const [showReadyText, setShowReadyText] = useState(true);
  const [screenBlack, setScreenBlack] = useState(false);
  const [glitchText, setGlitchText] = useState('CODE-O-CLOCK');
  const [clockStage, setClockStage] = useState('rotating');
  const [clockRotation, setClockRotation] = useState(0);
  const [alarmBellsVisible, setAlarmBellsVisible] = useState(false);
  const [alarmRinging, setAlarmRinging] = useState(false);
  const [clockShaking, setClockShaking] = useState(false);

  const codeSnippets = [
    'import React from "react"',
    'const challenge = new Challenge()',
    'function solve(problem) {',
    '  return innovation;',
    '}',
    'while(coding) { dream(); }',
    'git commit -m "ready to win"',
    'npm run victory',
    'console.log("Let\'s code!")'
  ];

  const clockNumbers = Array.from({ length: 12 }, (_, i) => i + 1);

  useEffect(() => {
    // 8-second total loading sequence
    const totalLoadingTime = 4500; // 6 seconds for loading progress (leaving 2 seconds for completion stages)
    
    // Clock stage progression
    if (progress < 30) {
      setClockStage('rotating');
    } else if (progress < 70) {
      setClockStage('collapsing');
    } else if (progress < 95) {
      setClockStage('exploding');
    } else if (progress >= 100) {
      setClockStage('alarm');
      setAlarmBellsVisible(true);
      setClockShaking(true);
      setTimeout(() => {
        setAlarmRinging(true);
      }, 200);
    }

    // Smooth progress animation - completes in 6 seconds
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setLoadingStage('complete');
          return 100;
        }
        return prev + (100 / (totalLoadingTime / 80)); // Faster, smoother progression
      });
    }, 80);

    // Clock rotation animation - Smooth continuous rotation completing 2 full rotations (720°) over 6 seconds
    // 720 degrees / 6000ms = 0.12 degrees per ms
    // At 50ms intervals, we need 0.12 * 50 = 6 degrees per interval for smooth movement
    const clockInterval = setInterval(() => {
      setClockRotation(prev => {
        if (progress >= 100) {
          return 4500; // Stop at exactly 2 complete rotations
        }
        
        // Continuous smooth rotation - 6 degrees every 50ms = 720° over 6000ms
        const newRotation = prev + 6;
        
        return Math.min(newRotation, 4500); // Cap at 720 degrees (2 full rotations)
      });
    }, 50); // Smooth 50ms intervals for fluid movement

    // Code snippet animation - faster updates
    const codeInterval = setInterval(() => {
      setCurrentCode(codeSnippets[Math.floor(Math.random() * codeSnippets.length)]);
    }, 600);

    // Glitch effect - less frequent
    const glitchInterval = setInterval(() => {
      const glitchChars = ['C', '0', 'D', '3', '-', '0', '-', 'C', 'L', '0', 'C', 'K'];
      const original = 'CODE-O-CLOCK';
      let glitched = '';
      
      for (let i = 0; i < original.length; i++) {
        glitched += Math.random() < 0.15 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : original[i];
      }
      
      setGlitchText(glitched);
      setTimeout(() => setGlitchText('CODE-O-CLOCK'), 80);
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(clockInterval);
      clearInterval(codeInterval);
      clearInterval(glitchInterval);
    };
  }, [progress]);

  // Handle completion - with alarm sequence
  useEffect(() => {
    if (loadingStage === 'complete') {
      // Show alarm for 2 seconds before moving to ready
      setTimeout(() => {
        setAlarmRinging(false);
        setClockShaking(false);
        setTimeout(() => {
          setLoadingStage('ready-text');
        }, 300);
      }, 4500);
    }
  }, [loadingStage]);

  // Ready text blinking - faster
  useEffect(() => {
    if (loadingStage === 'ready-text') {
      const readyBlinkInterval = setInterval(() => {
        setShowReadyText(prev => {
          const newState = !prev;
          if (prev === false && newState === true) {
            setBlinkCount(prevCount => {
              const newCount = prevCount + 1;
              if (newCount >= 2) { // Reduced to 2 blinks
                clearInterval(readyBlinkInterval);
                setTimeout(() => {
                  setLoadingStage('screen-blink');
                }, 400);
              }
              return newCount;
            });
          }
          return newState;
        });
      }, 300); // Faster blink

      return () => clearInterval(readyBlinkInterval);
    }
  }, [loadingStage]);

  // Screen blinking - faster completion
  useEffect(() => {
    if (loadingStage === 'screen-blink') {
      let screenBlinkCount = 0;
      
      const screenBlinkInterval = setInterval(() => {
        setScreenBlack(prev => {
          const newState = !prev;
          if (prev === false && newState === true) {
            screenBlinkCount++;
            if (screenBlinkCount >= 2) { // Reduced to 2 screen blinks
              clearInterval(screenBlinkInterval);
              setTimeout(() => {
                setLoadingStage('finished');
                onComplete();
              }, 300);
            }
          }
          return newState;
        });
      }, 250); // Faster screen blink

      return () => clearInterval(screenBlinkInterval);
    }
  }, [loadingStage, onComplete]);

  const getNumberAnimation = (number, stage, rotation) => {
    const basePosition = getClockNumberPosition(number);
    
    if (stage === 'rotating') {
      // Numbers rotate around the clock face smoothly
      const angle = ((number - 3) * 30 + rotation) * Math.PI / 180;
      const radius = 90;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      return {
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
        transition: 'none'
      };
    } else if (stage === 'collapsing') {
      return {
        ...basePosition,
        transition: 'all 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        transform: 'translate(-50%, -50%) scale(0.2)',
        left: '50%',
        top: '50%',
        opacity: 0.6
      };
    } else if (stage === 'exploding') {
      const angle = (number - 1) * 30;
      const distance = 300;
      const x = Math.cos((angle - 90) * Math.PI / 180) * distance;
      const y = Math.sin((angle - 90) * Math.PI / 180) * distance;
      
      return {
        ...basePosition,
        transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0) rotate(720deg)`,
        left: '50%',
        top: '50%',
        opacity: 0
      };
    } else if (stage === 'alarm') {
      // Numbers return to original positions for alarm display
      return {
        ...basePosition,
        transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        transform: 'translate(-50%, -50%) scale(1.1)',
        color: '#ff6b6b'
      };
    }
    
    return basePosition;
  };

  if (loadingStage === 'finished') {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden z-50 transition-colors duration-200 bg-black">
      
      {/* Full Screen Black Overlay for Blinking */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-150 z-60 ${
          screenBlack ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Main Loader Content */}
      <div className={`absolute inset-0 ${screenBlack ? 'opacity-0' : 'opacity-100'} transition-opacity duration-150`}>
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(236, 72, 153, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 15s linear infinite'
            }}
          />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Main Loader */}
        <div className="absolute inset-0 flex flex-col items-center justify-center min-h-screen">
          <div className="flex flex-col items-center justify-center text-center">
            
            {loadingStage === 'loading' && (
              <>
                {/* Enhanced Clock Container with Alarm Features */}
                <div className={`relative w-72 h-72 mb-8 mx-auto flex items-center justify-center transition-transform duration-200 ${
                  clockShaking ? 'animate-bounce' : ''
                }`}>
                  
                  {/* Alarm Bells - Left and Right */}
                  {alarmBellsVisible && (
                    <>
                      {/* Left Alarm Bell */}
                      <div className={`absolute -left-8 top-4 w-6 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-t-full border-2 border-yellow-300 transition-transform duration-200 ${
                        alarmRinging ? 'animate-wiggle-left' : ''
                      }`}>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-200 rounded-full"></div>
                        {/* Bell lines */}
                        <div className="absolute top-1 left-1 w-4 h-0.5 bg-yellow-200 rounded"></div>
                        <div className="absolute top-3 left-1 w-4 h-0.5 bg-yellow-200 rounded"></div>
                      </div>
                      
                      {/* Right Alarm Bell */}
                      <div className={`absolute -right-8 top-4 w-6 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-t-full border-2 border-yellow-300 transition-transform duration-200 ${
                        alarmRinging ? 'animate-wiggle-right' : ''
                      }`}>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-200 rounded-full"></div>
                        {/* Bell lines */}
                        <div className="absolute top-1 left-1 w-4 h-0.5 bg-yellow-200 rounded"></div>
                        <div className="absolute top-3 left-1 w-4 h-0.5 bg-yellow-200 rounded"></div>
                      </div>
                      
                      {/* Alarm Sound Wave Effects */}
                      {alarmRinging && (
                        <>
                          <div className="absolute -left-12 top-8 w-3 h-3 border-2 border-yellow-400 rounded-full animate-ping opacity-70"></div>
                          <div className="absolute -right-12 top-8 w-3 h-3 border-2 border-yellow-400 rounded-full animate-ping opacity-70" style={{animationDelay: '0.2s'}}></div>
                          <div className="absolute -left-16 top-6 w-4 h-4 border-2 border-yellow-300 rounded-full animate-ping opacity-50" style={{animationDelay: '0.4s'}}></div>
                          <div className="absolute -right-16 top-6 w-4 h-4 border-2 border-yellow-300 rounded-full animate-ping opacity-50" style={{animationDelay: '0.6s'}}></div>
                        </>
                      )}
                    </>
                  )}

                  {/* Outer Clock Ring with Glow - Enhanced for Alarm */}
                  <div className={`absolute inset-0 rounded-full border-4 shadow-2xl transition-all duration-300 ${
                    alarmRinging 
                      ? 'border-red-500/60 shadow-red-500/40 animate-pulse' 
                      : 'border-pink-500/30 shadow-pink-500/20'
                  }`}></div>
                  
                  {/* Main Clock Face - Enhanced for Alarm */}
                  <div className={`relative w-full h-full border-4 rounded-full bg-gradient-to-br from-black via-gray-900 to-black shadow-2xl flex items-center justify-center overflow-visible transition-all duration-300 ${
                    alarmRinging 
                      ? 'border-red-500 shadow-red-500/50' 
                      : 'border-pink-500 shadow-pink-500/40'
                  }`}>
                    
                    {/* Hour Markers - Enhanced for Alarm */}
                    {Array.from({ length: 12 }, (_, i) => {
                      const angle = (i * 30 - 90) * Math.PI / 180;
                      const x = Math.cos(angle) * 120;
                      const y = Math.sin(angle) * 120;
                      return (
                        <div
                          key={`marker-${i}`}
                          className={`absolute w-1 h-6 rounded-full transition-colors duration-300 ${
                            alarmRinging ? 'bg-red-400' : 'bg-gray-400'
                          }`}
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${i * 30}deg)`,
                            transformOrigin: 'center'
                          }}
                        />
                      );
                    })}

                    {/* Animated Numbers */}
                    <div className="absolute w-full h-full">
                      {clockNumbers.map((number) => (
                        <div
                          key={number}
                          className="absolute text-white font-bold text-xl z-10 select-none"
                          style={{
                            ...getNumberAnimation(number, clockStage, clockRotation),
                            textShadow: clockStage === 'alarm' ? '0 0 12px rgba(255, 107, 107, 0.9), 0 0 20px rgba(255, 107, 107, 0.5)' : '0 0 12px rgba(236, 72, 153, 0.9), 0 0 20px rgba(236, 72, 153, 0.5)',
                            fontFamily: "'Orbitron', monospace",
                            fontSize: clockStage === 'collapsing' ? '14px' : '20px'
                          }}
                        >
                          {number}
                        </div>
                      ))}
                    </div>

                    {/* Enhanced Clock Hands - SLOWER rotation for 24-hour hackathon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Hour Hand - Smooth 2 rotations over loading time */}
                      <div 
                        className={`absolute rounded-full z-20 transition-all duration-100 ${
                          alarmRinging 
                            ? 'bg-gradient-to-t from-red-500 to-red-400 shadow-red-500/70' 
                            : 'bg-gradient-to-t from-pink-500 to-pink-400 shadow-pink-500/70'
                        } shadow-lg`}
                        style={{
                          width: '6px',
                          height: '60px',
                          left: '50%',
                          top: '50%',
                          transformOrigin: '50% 100%',
                          transform: alarmRinging 
                            ? `translate(-50%, -100%) rotate(720deg)` 
                            : `translate(-50%, -100%) rotate(${clockRotation}deg)`, // Smooth 2 rotations
                          boxShadow: alarmRinging 
                            ? '0 0 15px rgba(239, 68, 68, 0.8)' 
                            : '0 0 15px rgba(236, 72, 153, 0.8)',
                          borderRadius: '3px'
                        }}
                      ></div>
                      
                      {/* Minute Hand - 12x faster for realistic clock behavior */}
                      <div 
                        className={`absolute rounded-full z-20 transition-all duration-100 ${
                          alarmRinging 
                            ? 'bg-gradient-to-t from-red-500 to-red-400 shadow-red-500/70' 
                            : 'bg-gradient-to-t from-purple-500 to-purple-400 shadow-purple-500/70'
                        } shadow-lg`}
                        style={{
                          width: '4px',
                          height: '80px',
                          left: '50%',
                          top: '50%',
                          transformOrigin: '50% 100%',
                          transform: alarmRinging 
                            ? `translate(-50%, -100%) rotate(${1000 * 12}deg)` 
                            : `translate(-50%, -100%) rotate(${clockRotation * 12}deg)`, // 24 rotations total
                          boxShadow: alarmRinging 
                            ? '0 0 15px rgba(239, 68, 68, 0.8)' 
                            : '0 0 15px rgba(139, 92, 246, 0.8)',
                          borderRadius: '2px'
                        }}
                      ></div>

                      {/* Second Hand - Faster but smoother movement */}
                      <div 
                        className="absolute bg-gradient-to-t from-red-500 to-red-400 shadow-lg shadow-red-500/70 rounded-full z-20 transition-all duration-100"
                        style={{
                          width: '2px',
                          height: '90px',
                          left: '50%',
                          top: '50%',
                          transformOrigin: '50% 100%',
                          transform: alarmRinging 
                            ? `translate(-50%, -100%) rotate(${720 * 20}deg)` 
                            : `translate(-50%, -100%) rotate(${clockRotation * 20}deg)`, // 40 rotations total (realistic second hand)
                          boxShadow: '0 0 12px rgba(239, 68, 68, 0.8)',
                          borderRadius: '1px'
                        }}
                      ></div>

                      {/* Second Hand Tail */}
                      <div 
                        className="absolute bg-gradient-to-t from-red-500 to-red-400 shadow-lg shadow-red-500/50 rounded-full z-19 transition-all duration-100"
                        style={{
                          width: '1px',
                          height: '20px',
                          left: '50%',
                          top: '50%',
                          transformOrigin: '50% 0%',
                          transform: alarmRinging 
                            ? `translate(-50%, 0%) rotate(${720 * 20 + 180}deg)` 
                            : `translate(-50%, 0%) rotate(${clockRotation * 30 + 180}deg)`,
                          boxShadow: '0 0 8px rgba(239, 68, 68, 0.6)'
                        }}
                      ></div>

                      {/* Enhanced Center Dot - Pulses red when alarm rings */}
                      <div className={`absolute w-5 h-5 rounded-full shadow-xl z-30 border-2 transition-all duration-300 ${
                        alarmRinging 
                          ? 'bg-gradient-to-r from-red-500 via-red-600 to-red-500 shadow-red-500/70 border-red-300/50 animate-pulse' 
                          : 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-pink-500/70 border-white/30'
                      }`}
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                      ></div>
                    </div>

                    {/* Clock Face Glow Effect - Enhanced for Alarm */}
                    <div className={`absolute inset-2 rounded-full pointer-events-none transition-all duration-300 ${
                      alarmRinging 
                        ? 'bg-gradient-to-br from-red-500/20 via-transparent to-red-500/20' 
                        : 'bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10'
                    }`}></div>
                  </div>

                  {/* Stage Indicator - Updated for Alarm */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-mono font-bold text-center w-full transition-colors duration-300">
                    <div className={alarmRinging ? 'text-red-400 animate-pulse' : 'text-pink-400'}>
                      {clockStage === 'rotating' && '⚡ TIME SYNCING...'}
                      {clockStage === 'collapsing' && '🔧 COMPILING CODE...'}
                      {clockStage === 'exploding' && '🚀 LAUNCHING SYSTEM...'}
                      {clockStage === 'alarm' && '⏰ CODE TIME! WAKE UP!'}
                    </div>
                  </div>
                </div>

                {/* Main Title with Enhanced Glitch Effect */}
                <div className="mb-8">
                  <h1 
                    className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
                    style={{
                      fontFamily: "'Orbitron', monospace, sans-serif",
                      textShadow: '0 0 30px rgba(236, 72, 153, 0.6)',
                      filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.4))'
                    }}
                  >
                    {glitchText}
                  </h1>
                </div>

                {/* Enhanced Progress Bar */}
                <div className="w-96 h-3 bg-gray-800 rounded-full mb-6 mx-auto overflow-hidden border border-pink-500/30">
                  <div 
                    className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-200 ease-out rounded-full relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                    <div className="absolute right-0 top-0 w-2 h-full bg-white/60 blur-sm"></div>
                  </div>
                </div>

                {/* Progress Text */}
                <div className="text-white text-xl font-bold mb-4 font-mono">
                  {Math.floor(progress)}% LOADED
                </div>

                {/* Loading Messages - Faster Updates */}
                <div className="text-gray-300 text-base mb-6 h-8 flex items-center justify-center font-semibold">
                  {progress < 20 && "🔄 Initializing systems..."}
                  {progress >= 20 && progress < 40 && "📁 Loading challenges..."}
                  {progress >= 40 && progress < 60 && "🌐 Connecting to server..."}
                  {progress >= 60 && progress < 80 && "⚙️ Optimizing performance..."}
                  {progress >= 80 && progress < 100 && "✨ Almost ready to code!"}
                  {progress >= 100 && "✅ System ready!"}
                </div>

                {/* Enhanced Code Snippet Display */}
                <div className="bg-gray-900/70 border border-pink-500/40 rounded-lg p-5 w-96 mx-auto backdrop-blur-sm shadow-xl">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2 animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    <div className="text-gray-400 text-sm ml-2 font-mono">terminal.js</div>
                  </div>
                  <div 
                    className="text-green-400 font-mono text-base h-8 flex items-center"
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >
                    <span className="text-pink-400 font-bold">$</span>
                    <span className="ml-2">{currentCode}</span>
                    <span className="animate-pulse text-white ml-1">|</span>
                  </div>
                </div>
              </>
            )}

            {/* Enhanced Ready States */}
            {(loadingStage === 'complete' || loadingStage === 'ready-text') && (
              <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="mb-8 text-center">
                  <div className="text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6 animate-pulse">
                    READY!
                  </div>
                  <div 
                    className={`text-white text-3xl transition-opacity duration-200 font-semibold ${
                      loadingStage === 'ready-text' && !showReadyText ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    Let's Code the Future... 🚀
                  </div>
                </div>
                
                {loadingStage === 'ready-text' && (
                  <div className="flex space-x-3 mt-6 justify-center">
                    {[0, 1].map((i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-full transition-all duration-200 ${
                          i < blinkCount 
                            ? 'bg-green-500 shadow-lg shadow-green-500/50 animate-pulse' 
                            : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {loadingStage === 'screen-blink' && (
              <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6 animate-bounce text-center">
                  LAUNCHING... 🚀
                </div>
                <div className="text-white text-2xl font-semibold text-center">
                  Get Ready for the Ultimate Challenge! ⚡
                </div>
              </div>
            )}

            {/* Enhanced Floating Code Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-pink-500/20 font-mono font-bold animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1.5 + Math.random() * 2}s`,
                    fontSize: `${12 + Math.random() * 8}px`
                  }}
                >
                  {['{ }', '< />', '( )', '[ ]', '&&', '||', '=>', '++', 'fn', 'var'][Math.floor(Math.random() * 10)]}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes wiggle-left {
          0%, 100% { transform: rotate(-15deg); }
          50% { transform: rotate(-25deg); }
        }
        
        @keyframes wiggle-right {
          0%, 100% { transform: rotate(15deg); }
          50% { transform: rotate(25deg); }
        }
        
        .animate-wiggle-left {
          animation: wiggle-left 0.15s ease-in-out infinite;
        }
        
        .animate-wiggle-right {
          animation: wiggle-right 0.15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CodeOClockLoader;