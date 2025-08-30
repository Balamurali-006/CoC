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

// Enhanced CodeOClockLoader with proper 24-hour clock rotation
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
  
  // New state for enhanced clock effects
  const [clockBlink, setClockBlink] = useState(false);
  const [clockPulse, setClockPulse] = useState(false);
  const [hourGlow, setHourGlow] = useState(false);
  const [rainbowClock, setRainbowClock] = useState(false);

  const codeSnippets = [
    'import React from "react"',
    'const hackathon = new Challenge()',
    'function solve(problem) {',
    '  return innovation;',
    '}',
    'while(coding) { dream(); }',
    'git commit -m "24hr ready"',
    'npm run hackathon',
    'console.log("Time to code!")',
    'const victory = await compete()',
    'export default Winner'
  ];

  const clockNumbers = Array.from({ length: 12 }, (_, i) => i + 1);

  // Initialize first code snippet
  useEffect(() => {
    setCurrentCode(codeSnippets[0]);
  }, []);

  useEffect(() => {
    // 8-second total loading sequence
    const totalLoadingTime = 6000; // 6 seconds for loading progress
    const intervalTime = 50; // Update every 50ms for smooth animation
    const totalIntervals = totalLoadingTime / intervalTime; // 120 intervals
    const progressIncrement = 100 / totalIntervals; // ~0.83% per interval
    const rotationIncrement = 720 / totalIntervals; // 6 degrees per interval for 2 full rotations

    // Smooth progress animation - completes in 6 seconds
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + progressIncrement, 100);
        
        // Trigger stage transitions when reaching 100%
        if (prev < 100 && newProgress >= 100) {
          clearInterval(progressInterval);
          setLoadingStage('complete');
          
          // Start collapse sequence after 100%
          setTimeout(() => {
            setClockStage('collapsing');
          }, 300);
          
          // Then exploding
          setTimeout(() => {
            setClockStage('exploding');
          }, 1500);
          
          // Finally alarm
          setTimeout(() => {
            setClockStage('alarm');
            setAlarmBellsVisible(true);
            setClockShaking(true);
            setTimeout(() => {
              setAlarmRinging(true);
            }, 200);
          }, 2800);
        }
        
        return newProgress;
      });
    }, intervalTime);

    // Clock rotation animation - exactly 720 degrees over 6 seconds
    const clockInterval = setInterval(() => {
      setClockRotation(prev => {
        if (progress >= 100) {
          return 720; // Stop at exactly 2 complete rotations
        }
        return Math.min(prev + rotationIncrement, 720);
      });
    }, intervalTime);

    // Code snippet animation - more frequent updates with better timing
    const codeInterval = setInterval(() => {
      const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      setCurrentCode(randomSnippet);
    }, 600); // Faster updates every 600ms

    // Glitch effect
    const glitchInterval = setInterval(() => {
      const glitchChars = ['C', '0', 'D', '3', '-', '0', '-', 'C', 'L', '0', 'C', 'K'];
      const original = 'CODE-O-CLOCK';
      let glitched = '';
      
      for (let i = 0; i < original.length; i++) {
        glitched += Math.random() < 0.15 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : original[i];
      }
      
      setGlitchText(glitched);
      setTimeout(() => setGlitchText('CODE-O-CLOCK'), 100);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(clockInterval);
      clearInterval(codeInterval);
      clearInterval(glitchInterval);
    };
  }, [progress]);

  // Enhanced clock effects based on progress
  useEffect(() => {
    // Clock blinking effect starts at 25%
    if (progress >= 25 && progress < 50) {
      const blinkInterval = setInterval(() => {
        setClockBlink(prev => !prev);
      }, 800);
      return () => clearInterval(blinkInterval);
    }

    // Clock pulse effect starts at 50%
    if (progress >= 50 && progress < 75) {
      setClockPulse(true);
    } else {
      setClockPulse(false);
    }

    // Hour glow effect starts at 75%
    if (progress >= 75 && progress < 90) {
      const hourGlowInterval = setInterval(() => {
        setHourGlow(prev => !prev);
      }, 1200);
      return () => clearInterval(hourGlowInterval);
    }

    // Rainbow clock effect at 90%+
    if (progress >= 90) {
      setRainbowClock(true);
    } else {
      setRainbowClock(false);
    }
  }, [progress]);

  // Handle completion - with alarm sequence
  useEffect(() => {
    if (loadingStage === 'complete') {
      // Show alarm for 1 second before moving to ready
      setTimeout(() => {
        setAlarmRinging(false);
        setClockShaking(false);
        setTimeout(() => {
          setLoadingStage('ready-text');
        }, 300);
      }, 1000);
    }
  }, [loadingStage]);

  // Ready text blinking
  useEffect(() => {
    if (loadingStage === 'ready-text') {
      const readyBlinkInterval = setInterval(() => {
        setShowReadyText(prev => {
          const newState = !prev;
          if (prev === false && newState === true) {
            setBlinkCount(prevCount => {
              const newCount = prevCount + 1;
              if (newCount >= 3) {
                clearInterval(readyBlinkInterval);
                setTimeout(() => {
                  setLoadingStage('screen-blink');
                }, 500);
              }
              return newCount;
            });
          }
          return newState;
        });
      }, 400);

      return () => clearInterval(readyBlinkInterval);
    }
  }, [loadingStage]);

  // Screen blinking
  useEffect(() => {
    if (loadingStage === 'screen-blink') {
      let screenBlinkCount = 0;
      
      const screenBlinkInterval = setInterval(() => {
        setScreenBlack(prev => {
          const newState = !prev;
          if (prev === false && newState === true) {
            screenBlinkCount++;
            if (screenBlinkCount >= 3) {
              clearInterval(screenBlinkInterval);
              setTimeout(() => {
                setLoadingStage('finished');
                onComplete?.();
              }, 300);
            }
          }
          return newState;
        });
      }, 300);

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
                  clockShaking ? 'animate-bounce' : clockPulse ? 'animate-pulse' : ''
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

                  {/* Outer Clock Ring with Enhanced Glow and Blinking */}
                  <div className={`absolute inset-0 rounded-full border-4 shadow-2xl transition-all duration-300 ${
                    alarmRinging 
                      ? 'border-red-500/60 shadow-red-500/40 animate-ping' 
                      : rainbowClock
                        ? 'border-rainbow shadow-rainbow animate-rainbow-border'
                        : clockBlink && progress >= 25 && progress < 50
                          ? 'border-transparent shadow-none'
                          : 'border-pink-500/30 shadow-pink-500/20'
                  }`}
                  style={{
                    boxShadow: clockBlink && progress >= 25 && progress < 50 
                      ? 'none' 
                      : alarmRinging 
                        ? '0 0 40px rgba(239, 68, 68, 0.6)' 
                        : rainbowClock
                          ? '0 0 60px rgba(236, 72, 153, 0.8), 0 0 80px rgba(139, 92, 246, 0.6), 0 0 100px rgba(59, 130, 246, 0.4)'
                          : clockPulse 
                            ? '0 0 50px rgba(236, 72, 153, 0.8)'
                            : '0 0 30px rgba(236, 72, 153, 0.4)'
                  }}></div>
                  
                  {/* Main Clock Face - Enhanced for Alarm with Blinking */}
                  <div className={`relative w-full h-full border-4 rounded-full bg-gradient-to-br from-black via-gray-900 to-black shadow-2xl flex items-center justify-center overflow-visible transition-all duration-300 ${
                    alarmRinging 
                      ? 'border-red-500 shadow-red-500/50 animate-ping' 
                      : rainbowClock
                        ? 'border-gradient-rainbow animate-spin-slow'
                        : clockBlink && progress >= 25 && progress < 50
                          ? 'border-transparent shadow-none opacity-70'
                          : progress > 50 
                            ? 'border-pink-500 shadow-pink-500/40 animate-pulse' 
                            : 'border-pink-500 shadow-pink-500/40'
                  }`}
                  style={{
                    background: rainbowClock 
                      ? 'linear-gradient(45deg, #000000, #1a1a1a, #000000)'
                      : undefined,
                    opacity: clockBlink && progress >= 25 && progress < 50 ? 0.3 : 1
                  }}>
                    
                    {/* Hour Markers - Enhanced with Progressive Effects */}
                    {Array.from({ length: 12 }, (_, i) => {
                      const angle = (i * 30 - 90) * Math.PI / 180;
                      const x = Math.cos(angle) * 120;
                      const y = Math.sin(angle) * 120;
                      return (
                        <div
                          key={`marker-${i}`}
                          className={`absolute w-1 h-6 rounded-full transition-all duration-300 ${
                            alarmRinging 
                              ? 'bg-red-400 animate-ping' 
                              : rainbowClock
                                ? 'bg-gradient-to-t from-pink-500 via-purple-500 to-blue-500 animate-pulse'
                                : hourGlow && progress >= 75 && progress < 90
                                  ? 'bg-yellow-400 animate-pulse shadow-glow-yellow'
                                  : progress > 70 
                                    ? 'bg-pink-400 animate-pulse' 
                                    : clockBlink && progress >= 25 && progress < 50
                                      ? 'bg-gray-600'
                                      : 'bg-gray-400'
                          }`}
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${i * 30}deg)`,
                            transformOrigin: 'center',
                            animationDelay: `${i * 0.1}s`,
                            opacity: clockBlink && progress >= 25 && progress < 50 ? 0.5 : 1,
                            boxShadow: hourGlow && progress >= 75 && progress < 90 
                              ? '0 0 15px rgba(251, 191, 36, 0.8)' 
                              : rainbowClock 
                                ? '0 0 10px rgba(236, 72, 153, 0.6)'
                                : undefined
                          }}
                        />
                      );
                    })}

                    {/* Animated Numbers */}
                    <div className="absolute w-full h-full">
                      {clockNumbers.map((number) => (
                        <div
                          key={number}
                          className={`absolute font-bold text-xl z-10 select-none transition-all duration-300 ${
                            rainbowClock 
                              ? 'text-rainbow animate-rainbow-text'
                              : clockBlink && progress >= 25 && progress < 50
                                ? 'text-gray-500'
                                : 'text-white'
                          }`}
                          style={{
                            ...getNumberAnimation(number, clockStage, clockRotation),
                            textShadow: clockStage === 'alarm' 
                              ? '0 0 12px rgba(255, 107, 107, 0.9), 0 0 20px rgba(255, 107, 107, 0.5)' 
                              : rainbowClock
                                ? '0 0 15px rgba(236, 72, 153, 0.9), 0 0 25px rgba(139, 92, 246, 0.7), 0 0 35px rgba(59, 130, 246, 0.5)'
                                : clockBlink && progress >= 25 && progress < 50
                                  ? 'none'
                                  : '0 0 12px rgba(236, 72, 153, 0.9), 0 0 20px rgba(236, 72, 153, 0.5)',
                            fontFamily: "'Orbitron', monospace",
                            fontSize: clockStage === 'collapsing' ? '14px' : '20px',
                            opacity: clockBlink && progress >= 25 && progress < 50 ? 0.6 : 1
                          }}
                        >
                          {number}
                        </div>
                      ))}
                    </div>

                    {/* Enhanced Clock Hands - PROPER 24-hour hackathon rotation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Hour Hand - Completes exactly 2 rotations (24 hours) */}
                      <div 
                        className={`absolute rounded-full z-20 transition-all duration-100 ${
                          alarmRinging 
                            ? 'bg-gradient-to-t from-red-500 to-red-400 shadow-red-500/70' 
                            : rainbowClock
                              ? 'bg-gradient-to-t from-pink-500 via-purple-500 to-blue-500'
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
                            : `translate(-50%, -100%) rotate(${clockRotation}deg)`, // 2 full rotations = 24 hours
                          boxShadow: alarmRinging 
                            ? '0 0 15px rgba(239, 68, 68, 0.8)' 
                            : rainbowClock
                              ? '0 0 20px rgba(236, 72, 153, 0.8), 0 0 30px rgba(139, 92, 246, 0.6)'
                              : '0 0 15px rgba(236, 72, 153, 0.8)',
                          borderRadius: '3px',
                          transition: 'none',
                          opacity: clockBlink && progress >= 25 && progress < 50 ? 0.6 : 1
                        }}
                      ></div>
                      
                      {/* Minute Hand - Completes 24 rotations (24 hours × 60 minutes) */}
                      <div 
                        className={`absolute rounded-full z-20 transition-all duration-100 ${
                          alarmRinging 
                            ? 'bg-gradient-to-t from-red-500 to-red-400 shadow-red-500/70' 
                            : rainbowClock
                              ? 'bg-gradient-to-t from-purple-500 via-blue-500 to-cyan-500'
                              : 'bg-gradient-to-t from-purple-500 to-purple-400 shadow-purple-500/70'
                        } shadow-lg`}
                        style={{
                          width: '4px',
                          height: '80px',
                          left: '50%',
                          top: '50%',
                          transformOrigin: '50% 100%',
                          transform: alarmRinging 
                            ? `translate(-50%, -100%) rotate(${720 * 24}deg)` 
                            : `translate(-50%, -100%) rotate(${clockRotation * 24}deg)`, // 24x faster for realistic minute hand
                          boxShadow: alarmRinging 
                            ? '0 0 15px rgba(239, 68, 68, 0.8)' 
                            : rainbowClock
                              ? '0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)'
                              : '0 0 15px rgba(139, 92, 246, 0.8)',
                          borderRadius: '2px',
                          transition: 'none',
                          opacity: clockBlink && progress >= 25 && progress < 50 ? 0.6 : 1
                        }}
                      ></div>

                      {/* Second Hand - Very fast rotation for dramatic effect */}
                      <div 
                        className={`absolute rounded-full z-20 transition-all duration-100 ${
                          rainbowClock 
                            ? 'bg-gradient-to-t from-red-500 via-orange-500 to-yellow-500'
                            : 'bg-gradient-to-t from-red-500 to-red-400'
                        } shadow-lg shadow-red-500/70`}
                        style={{
                          width: '2px',
                          height: '90px',
                          left: '50%',
                          top: '50%',
                          transformOrigin: '50% 100%',
                          transform: alarmRinging 
                            ? `translate(-50%, -100%) rotate(${720 * 60}deg)` 
                            : `translate(-50%, -100%) rotate(${clockRotation * 60}deg)`, // 60x faster for realistic second hand
                          boxShadow: rainbowClock
                            ? '0 0 15px rgba(239, 68, 68, 0.8), 0 0 25px rgba(251, 146, 60, 0.6)'
                            : '0 0 12px rgba(239, 68, 68, 0.8)',
                          borderRadius: '1px',
                          transition: 'none',
                          opacity: clockBlink && progress >= 25 && progress < 50 ? 0.7 : 1
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
                            ? `translate(-50%, 0%) rotate(${720 * 60 + 180}deg)` 
                            : `translate(-50%, 0%) rotate(${clockRotation * 60 + 180}deg)`,
                          boxShadow: '0 0 8px rgba(239, 68, 68, 0.6)',
                          transition: 'none',
                          opacity: clockBlink && progress >= 25 && progress < 50 ? 0.7 : 1
                        }}
                      ></div>

                      {/* Enhanced Center Dot - Pulses red when alarm rings */}
                      <div className={`absolute w-5 h-5 rounded-full shadow-xl z-30 border-2 transition-all duration-300 ${
                        alarmRinging 
                          ? 'bg-gradient-to-r from-red-500 via-red-600 to-red-500 shadow-red-500/70 border-red-300/50 animate-ping' 
                          : rainbowClock
                            ? 'bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 shadow-rainbow border-white/50 animate-spin'
                            : clockBlink && progress >= 25 && progress < 50
                              ? 'bg-gray-600 shadow-gray-600/40 border-gray-500/30'
                              : 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-pink-500/70 border-white/30'
                      }`}
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          opacity: clockBlink && progress >= 25 && progress < 50 ? 0.5 : 1,
                          boxShadow: rainbowClock 
                            ? '0 0 20px rgba(236, 72, 153, 0.8), 0 0 30px rgba(139, 92, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)'
                            : undefined
                        }}
                      ></div>
                    </div>

                    {/* Clock Face Glow Effect - Enhanced for Alarm with Progressive Glow */}
                    <div className={`absolute inset-2 rounded-full pointer-events-none transition-all duration-300 ${
                      alarmRinging 
                        ? 'bg-gradient-to-br from-red-500/30 via-transparent to-red-500/30 animate-ping' 
                        : rainbowClock
                          ? 'bg-gradient-to-br from-pink-500/20 via-purple-500/15 via-blue-500/15 to-cyan-500/20 animate-pulse'
                          : progress > 80 
                            ? 'bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-blue-500/20 animate-pulse' 
                            : clockBlink && progress >= 25 && progress < 50
                              ? 'bg-gradient-to-br from-gray-500/10 via-transparent to-gray-500/10'
                              : 'bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10'
                    }`}
                    style={{
                      opacity: clockBlink && progress >= 25 && progress < 50 ? 0.3 : 1
                    }}></div>
                  </div>

                  {/* Stage Indicator - Updated for 24-hour theme */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-mono font-bold text-center w-full transition-colors duration-300">
                    <div className={alarmRinging ? 'text-red-400 animate-pulse' : rainbowClock ? 'text-rainbow animate-pulse' : 'text-pink-400'}>
                      {clockStage === 'rotating' && '⏰ 24HR COUNTDOWN INITIATED...'}
                      {clockStage === 'collapsing' && '🔧 NUMBERS COLLAPSING...'}
                      {clockStage === 'exploding' && '🚀 LAUNCHING HACKATHON...'}
                      {clockStage === 'alarm' && '⏰ HACKATHON TIME! LET\'S CODE!'}
                    </div>
                  </div>

                  {/* Clock Blinking Status Indicator */}
                  {progress >= 25 && progress < 50 && (
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-xs font-mono text-center">
                      <div className={`transition-opacity duration-300 ${clockBlink ? 'text-gray-500' : 'text-pink-400'}`}>
                        🔄 CLOCK SYNCHRONIZING...
                      </div>
                    </div>
                  )}

                  {/* Hour Glow Status Indicator */}
                  {progress >= 75 && progress < 90 && (
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-xs font-mono text-center">
                      <div className={`transition-all duration-300 ${hourGlow ? 'text-yellow-400 animate-pulse' : 'text-pink-400'}`}>
                        ✨ HOURS GLOWING WITH ENERGY...
                      </div>
                    </div>
                  )}

                  {/* Rainbow Clock Status Indicator */}
                  {progress >= 90 && (
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-xs font-mono text-center">
                      <div className="text-rainbow animate-pulse">
                        🌈 RAINBOW MODE ACTIVATED!
                      </div>
                    </div>
                  )}
                </div>

                {/* Main Title with Enhanced Glitch Effect */}
                <div className="mb-8">
                  <h1 
                    className={`text-5xl md:text-7xl font-bold bg-clip-text text-transparent transition-all duration-300 ${
                      rainbowClock 
                        ? 'bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-500 via-yellow-500 to-red-500 animate-rainbow-text'
                        : 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'
                    }`}
                    style={{
                      fontFamily: "'Orbitron', monospace, sans-serif",
                      textShadow: rainbowClock 
                        ? '0 0 40px rgba(236, 72, 153, 0.8), 0 0 60px rgba(139, 92, 246, 0.6), 0 0 80px rgba(59, 130, 246, 0.4)'
                        : '0 0 30px rgba(236, 72, 153, 0.6)',
                      filter: rainbowClock 
                        ? 'drop-shadow(0 0 25px rgba(139, 92, 246, 0.6)) drop-shadow(0 0 35px rgba(59, 130, 246, 0.4))'
                        : 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.4))',
                      opacity: clockBlink && progress >= 25 && progress < 50 ? 0.7 : 1
                    }}
                  >
                    {glitchText}
                  </h1>
                </div>

                {/* Enhanced Progress Bar */}
                <div className="w-96 h-3 bg-gray-800 rounded-full mb-6 mx-auto overflow-hidden border border-pink-500/30">
                  <div 
                    className={`h-full transition-all duration-200 ease-out rounded-full relative ${
                      rainbowClock 
                        ? 'bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-500 via-yellow-500 to-red-500'
                        : 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'
                    }`}
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                    <div className="absolute right-0 top-0 w-2 h-full bg-white/60 blur-sm"></div>
                  </div>
                </div>

                {/* Progress Text */}
                <div className={`text-xl font-bold mb-4 font-mono transition-colors duration-300 ${
                  rainbowClock ? 'text-rainbow animate-pulse' : 'text-white'
                }`}>
                  {Math.floor(progress)}% LOADED
                </div>

                {/* Loading Messages - 24-hour themed */}
                <div className="text-gray-300 text-base mb-6 h-8 flex items-center justify-center font-semibold">
                  {progress < 20 && "🔄 Preparing 24-hour challenge..."}
                  {progress >= 20 && progress < 40 && "📁 Loading hackathon environment..."}
                  {progress >= 40 && progress < 60 && "🌐 Syncing with coding servers..."}
                  {progress >= 60 && progress < 80 && "⚙️ Optimizing for maximum performance..."}
                  {progress >= 80 && progress < 100 && "✨ Almost ready for 24 hours of coding!"}
                  {progress >= 100 && "✅ Hackathon environment ready!"}
                </div>

                {/* Enhanced Code Snippet Display */}
                <div className={`bg-gray-900/70 border rounded-lg p-5 w-96 mx-auto backdrop-blur-sm shadow-xl transition-all duration-300 ${
                  rainbowClock 
                    ? 'border-rainbow shadow-rainbow animate-rainbow-border'
                    : clockBlink && progress >= 25 && progress < 50
                      ? 'border-gray-600/40 shadow-lg'
                      : 'border-pink-500/40 shadow-xl'
                }`}>
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2 animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    <div className="text-gray-400 text-sm ml-2 font-mono">hackathon.js</div>
                  </div>
                  <div 
                    className={`font-mono text-base h-8 flex items-center transition-colors duration-300 ${
                      rainbowClock ? 'text-rainbow' : 'text-green-400'
                    }`}
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
                    Time to Code for 24 Hours! ⏰🚀
                  </div>
                </div>
                
                {loadingStage === 'ready-text' && (
                  <div className="flex space-x-3 mt-6 justify-center">
                    {[0, 1, 2].map((i) => (
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
                  LAUNCHING 24HR HACKATHON... 🚀
                </div>
                <div className="text-white text-2xl font-semibold text-center">
                  Get Ready for the Ultimate Coding Challenge! ⚡
                </div>
              </div>
            )}

            {/* Enhanced Floating Code Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute font-mono font-bold animate-pulse transition-colors duration-300 ${
                    rainbowClock ? 'text-rainbow' : 'text-pink-500/20'
                  }`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1.5 + Math.random() * 2}s`,
                    fontSize: `${12 + Math.random() * 8}px`,
                    opacity: clockBlink && progress >= 25 && progress < 50 ? 0.1 : 0.2
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

        @keyframes rainbow-border {
          0% { border-color: #ec4899; box-shadow: 0 0 30px rgba(236, 72, 153, 0.6); }
          16.66% { border-color: #8b5cf6; box-shadow: 0 0 30px rgba(139, 92, 246, 0.6); }
          33.33% { border-color: #3b82f6; box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
          50% { border-color: #10b981; box-shadow: 0 0 30px rgba(16, 185, 129, 0.6); }
          66.66% { border-color: #f59e0b; box-shadow: 0 0 30px rgba(245, 158, 11, 0.6); }
          83.33% { border-color: #ef4444; box-shadow: 0 0 30px rgba(239, 68, 68, 0.6); }
          100% { border-color: #ec4899; box-shadow: 0 0 30px rgba(236, 72, 153, 0.6); }
        }

        @keyframes rainbow-text {
          0% { color: #ec4899; text-shadow: 0 0 20px rgba(236, 72, 153, 0.8); }
          16.66% { color: #8b5cf6; text-shadow: 0 0 20px rgba(139, 92, 246, 0.8); }
          33.33% { color: #3b82f6; text-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
          50% { color: #10b981; text-shadow: 0 0 20px rgba(16, 185, 129, 0.8); }
          66.66% { color: #f59e0b; text-shadow: 0 0 20px rgba(245, 158, 11, 0.8); }
          83.33% { color: #ef4444; text-shadow: 0 0 20px rgba(239, 68, 68, 0.8); }
          100% { color: #ec4899; text-shadow: 0 0 20px rgba(236, 72, 153, 0.8); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-wiggle-left {
          animation: wiggle-left 0.15s ease-in-out infinite;
        }
        
        .animate-wiggle-right {
          animation: wiggle-right 0.15s ease-in-out infinite;
        }

        .animate-rainbow-border {
          animation: rainbow-border 3s ease-in-out infinite;
        }

        .animate-rainbow-text {
          animation: rainbow-text 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .text-rainbow {
          background: linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rainbow-text 2s ease-in-out infinite;
        }

        .border-rainbow {
          border-image: linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ef4444) 1;
        }

        .shadow-rainbow {
          box-shadow: 0 0 30px rgba(236, 72, 153, 0.4), 0 0 50px rgba(139, 92, 246, 0.3), 0 0 70px rgba(59, 130, 246, 0.2);
        }

        .shadow-glow-yellow {
          box-shadow: 0 0 15px rgba(251, 191, 36, 0.8), 0 0 25px rgba(251, 191, 36, 0.6);
        }
      `}</style>
    </div>
  );
};

export default CodeOClockLoader;