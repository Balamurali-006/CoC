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

// Enhanced CodeOClockLoader component with screen blink functionality
const CodeOClockLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentCode, setCurrentCode] = useState('');
  const [loadingStage, setLoadingStage] = useState('loading'); // 'loading', 'complete', 'ready-text', 'screen-blink', 'finished'
  const [blinkCount, setBlinkCount] = useState(0);
  const [showReadyText, setShowReadyText] = useState(true);
  const [screenBlack, setScreenBlack] = useState(false);
  const [glitchText, setGlitchText] = useState('CODE-O-CLOCK');
  const [clockStage, setClockStage] = useState('rotating'); // 'rotating', 'collapsing', 'exploding'

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
    // Clock stage progression based on progress
    if (progress < 30) {
      setClockStage('rotating');
    } else if (progress < 70) {
      setClockStage('collapsing');
    } else if (progress < 100) {
      setClockStage('exploding');
    }

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setLoadingStage('complete');
          return 100;
        }
        return prev + Math.random() * 2 + 0.5; // Slower progression for better timing
      });
    }, 150);

    // Code snippet animation
    const codeInterval = setInterval(() => {
      setCurrentCode(codeSnippets[Math.floor(Math.random() * codeSnippets.length)]);
    }, 800);

    // Glitch effect on text
    const glitchInterval = setInterval(() => {
      const glitchChars = ['C', '0', 'D', '3', '-', '0', '-', 'C', 'L', '0', 'C', 'K'];
      const original = 'CODE-O-CLOCK';
      let glitched = '';
      
      for (let i = 0; i < original.length; i++) {
        glitched += Math.random() < 0.1 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : original[i];
      }
      
      setGlitchText(glitched);
      setTimeout(() => setGlitchText('CODE-O-CLOCK'), 100);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(codeInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  // Handle completion and ready text sequence
  useEffect(() => {
    if (loadingStage === 'complete') {
      setTimeout(() => {
        setLoadingStage('ready-text');
      }, 800);
    }
  }, [loadingStage]);

  // Handle ready text blinking (3 times)
  useEffect(() => {
    if (loadingStage === 'ready-text') {
      const readyBlinkInterval = setInterval(() => {
        setShowReadyText(prev => {
          const newState = !prev;
          if (prev === false && newState === true) { // When text becomes visible again
            setBlinkCount(prevCount => {
              const newCount = prevCount + 1;
              if (newCount >= 3) {
                clearInterval(readyBlinkInterval);
                setTimeout(() => {
                  setLoadingStage('screen-blink');
                }, 800);
              }
              return newCount;
            });
          }
          return newState;
        });
      }, 500);

      return () => clearInterval(readyBlinkInterval);
    }
  }, [loadingStage]);

  // Handle full screen blinking (3 times)
  useEffect(() => {
    if (loadingStage === 'screen-blink') {
      let screenBlinkCount = 0;
      
      const screenBlinkInterval = setInterval(() => {
        setScreenBlack(prev => {
          const newState = !prev;
          if (prev === false && newState === true) { // When screen becomes black
            screenBlinkCount++;
            if (screenBlinkCount >= 3) {
              clearInterval(screenBlinkInterval);
              setTimeout(() => {
                setLoadingStage('finished');
                onComplete();
              }, 600);
            }
          }
          return newState;
        });
      }, 400); // Faster blink for screen

      return () => clearInterval(screenBlinkInterval);
    }
  }, [loadingStage, onComplete]);

  const getNumberAnimation = (number, stage) => {
    const baseStyle = getClockNumberPosition(number);
    
    if (stage === 'rotating') {
      return {
        ...baseStyle,
        transition: 'none',
        animation: `rotateNumbers 4s linear infinite`
      };
    } else if (stage === 'collapsing') {
      return {
        ...baseStyle,
        transition: 'all 2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        transform: 'translate(-50%, -50%) scale(0.1)',
        left: '50%',
        top: '50%',
        opacity: 0.5
      };
    } else if (stage === 'exploding') {
      const angle = (number - 1) * 30; // 30 degrees apart
      const distance = 400; // How far they explode
      const x = Math.cos((angle - 90) * Math.PI / 180) * distance;
      const y = Math.sin((angle - 90) * Math.PI / 180) * distance;
      
      return {
        ...baseStyle,
        transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0) rotate(720deg)`,
        left: '50%',
        top: '50%',
        opacity: 0
      };
    }
    
    return baseStyle;
  };

  if (loadingStage === 'finished') {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden z-50 transition-colors duration-200" 
         style={{ backgroundColor: screenBlack ? '#000000' : '#000000' }}>
      
      {/* Full Screen Black Overlay for Blinking */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-200 z-60 ${
          screenBlack ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Main Loader Content */}
      <div className={`absolute inset-0 ${screenBlack ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
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
              animation: 'gridMove 20s linear infinite'
            }}
          />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Main Loader */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            
            {loadingStage === 'loading' && (
              <>
                {/* Clock Container - Cinematic Animation */}
                <div className="relative w-64 h-64 mb-4">
                  {/* Clock Face */}
                  <div className="relative w-full h-full border-3 border-pink-500 rounded-full bg-black shadow-2xl shadow-pink-500/30 flex items-center justify-center overflow-visible">
                    
                    {/* Animated Numbers */}
                    <div className="absolute w-full h-full">
                      {clockNumbers.map((number) => (
                        <div
                          key={number}
                          className="absolute text-white font-bold text-lg z-10"
                          style={{
                            ...getNumberAnimation(number, clockStage),
                            textShadow: '0 0 8px rgba(236, 72, 153, 0.8)',
                            fontFamily: "'Orbitron', monospace"
                          }}
                        >
                          {number}
                        </div>
                      ))}
                    </div>

                    {/* Static Clock Hands - Perfect Center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Hour Hand - Static and Centered */}
                      <div 
                        className="absolute w-1 bg-pink-500 shadow-lg shadow-pink-500/70 rounded-full"
                        style={{
                          height: '60px',
                          transformOrigin: 'center bottom',
                          transform: 'translateY(30px) rotate(45deg)'
                        }}
                      ></div>
                      
                      {/* Minute Hand - Static and Centered */}
                      <div 
                        className="absolute w-0.5 bg-purple-500 shadow-lg shadow-purple-500/70 rounded-full"
                        style={{
                          height: '80px',
                          transformOrigin: 'center bottom',
                          transform: 'translateY(40px) rotate(120deg)'
                        }}
                      ></div>

                      {/* Second Hand - Static and Centered */}
                      <div 
                        className="absolute w-px bg-blue-500 shadow-lg shadow-blue-500/70 rounded-full"
                        style={{
                          height: '90px',
                          transformOrigin: 'center bottom',
                          transform: 'translateY(45px) rotate(180deg)'
                        }}
                      ></div>

                      {/* Center Dot - Always Perfect Center */}
                      <div className="absolute w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg shadow-pink-500/70 z-30"></div>
                    </div>
                  </div>

                  {/* Stage Indicator */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-pink-500 font-mono">
                    {clockStage === 'rotating' && 'TIME SYNCING...'}
                    {clockStage === 'collapsing' && 'COMPILING CODE...'}
                    {clockStage === 'exploding' && 'LAUNCHING SYSTEM...'}
                  </div>
                </div>

                {/* Main Title with Glitch Effect */}
                <div className="mb-6">
                  <h1 
                    className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
                    style={{
                      fontFamily: "'Orbitron', monospace, sans-serif",
                      textShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
                      filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))'
                    }}
                  >
                    {glitchText}
                  </h1>
                </div>

                {/* Progress Bar */}
                <div className="w-80 h-2 bg-gray-800 rounded-full mb-6 mx-auto overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-300 ease-out rounded-full relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>

                {/* Progress Text */}
                <div className="text-white text-lg font-semibold mb-4">
                  {Math.floor(progress)}% LOADED
                </div>

                {/* Loading Messages */}
                <div className="text-gray-400 text-sm mb-6 h-8 flex items-center justify-center">
                  {progress < 25 && "Initializing code editor..."}
                  {progress >= 25 && progress < 50 && "Loading challenges..."}
                  {progress >= 50 && progress < 75 && "Connecting to server..."}
                  {progress >= 75 && progress < 100 && "Almost ready to code!"}
                  {progress >= 100 && "System ready!"}
                </div>

                {/* Code Snippet Display */}
                <div className="bg-gray-900/50 border border-pink-500/30 rounded-lg p-4 w-80 mx-auto backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <div className="text-gray-500 text-xs ml-2">terminal.js</div>
                  </div>
                  <div 
                    className="text-green-400 font-mono text-sm h-6 flex items-center"
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >
                    <span className="text-pink-500">$</span>
                    <span className="ml-2 animate-pulse">{currentCode}</span>
                    <span className="animate-pulse text-white">|</span>
                  </div>
                </div>
              </>
            )}

            {(loadingStage === 'complete' || loadingStage === 'ready-text') && (
              <div className="flex flex-col items-center justify-center h-screen">
                <div className="mb-8">
                  <div className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
                    READY!
                  </div>
                  <div 
                    className={`text-white text-2xl transition-opacity duration-300 ${
                      loadingStage === 'ready-text' && !showReadyText ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    Let's Code the Future...
                  </div>
                </div>
                
                {/* Ready text blink indicator dots */}
                {loadingStage === 'ready-text' && (
                  <div className="flex space-x-2 mt-4">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          i < blinkCount 
                            ? 'bg-green-500 shadow-lg shadow-green-500/50' 
                            : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {loadingStage === 'screen-blink' && (
              <div className="flex flex-col items-center justify-center h-screen">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
                  LAUNCHING...
                </div>
                <div className="text-white text-xl">
                  Get Ready for the Ultimate Challenge!
                </div>
              </div>
            )}

            {/* Floating Code Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-pink-500/30 font-mono text-xs animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                >
                  {['{ }', '< />', '( )', '[ ]', '&&', '||', '=>', '++'][Math.floor(Math.random() * 8)]}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes rotateNumbers {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.95); }
        }
      `}</style>
    </div>
  );
};

export default CodeOClockLoader;