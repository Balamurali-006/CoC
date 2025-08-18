import React, { useState, useEffect } from 'react';
import { Clock, Terminal, Code, Zap } from 'lucide-react';




const HackathonCountdown = () => {
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setFullYear(2025, 8, 26); // Month is 0-indexed: 8 = September
    date.setHours(9, 0, 0, 0); // 09:00:00.000
    return date;
  });

  const [absoluteDuration] = useState(() => {
  const now = new Date().getTime();
  return Math.floor((targetDate.getTime() - now) / 1000); // fixed total seconds from now to target
});


  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isActive, setIsActive] = useState(true);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0); // Total duration from now to target
 const [showTime, setShowTime] = useState(true);

  // Blink effect
  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setShowTime(prev => !prev);
    }, 800); // change every 0.8s
    return () => clearInterval(blinkTimer);
  }, []);

useEffect(() => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      setTotalSeconds(Math.floor(difference / 1000));
      setIsActive(true);
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTotalSeconds(0);
      setIsActive(false);
    }
  };

  calculateTimeLeft();
  const timer = setInterval(calculateTimeLeft, 1000);
  return () => clearInterval(timer);
}, [targetDate]);


 const formatDateTime = (date) => {
  return date.toLocaleString('en-GB', {  // en-GB gives DD/MM/YYYY
    hour12: false,                       // 24-hour clock
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};


  return (
    <div className="hackathon-countdown min-h-screen bg-black text-white overflow-x-hidden">
      {/* Matrix-style background */}
      <div className="hackathon-countdown-fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6 px-6 py-3 border border-pink-500 rounded-full bg-black bg-opacity-50 backdrop-blur-sm">
            <Terminal className="w-5 h-5 text-pink-400 mr-3" />
            <span className="font-mono text-pink-400 text-sm tracking-wide">SYSTEM_STATUS: ACTIVE</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            &lt;/COUNTDOWN&gt;
          </h1>

          <div className="font-mono text-gray-400 text-sm mb-2">
  TARGET_DEADLINE: {formatDateTime(targetDate)}
</div>
<div className="font-mono text-gray-500 text-xs">
  CURRENT_TIME: {formatDateTime(new Date())}
</div>

        </div>

        {/* Countdown Display */}
        {isActive ? (
          <div className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 justify-center max-w-4xl mx-auto">
              <TechnicalClockUnit 
                value={timeLeft.days} 
                label="DAYS" 
                maxValue={30}
                color="from-blue-500 to-cyan-500"
                icon={Clock}
              />
              <TechnicalClockUnit 
                value={timeLeft.hours} 
                label="HOURS" 
                maxValue={24}
                color="from-pink-500 to-rose-500"
                icon={Zap}
              />
              <TechnicalClockUnit 
                value={timeLeft.minutes} 
                label="MINUTES" 
                maxValue={60}
                color="from-purple-500 to-violet-500"
                icon={Code}
              />
              <TechnicalClockUnit 
                value={timeLeft.seconds} 
                label="SECONDS" 
                maxValue={60}
                color="from-orange-500 to-red-500"
                icon={Terminal}
              />
            </div>

            {/* Technical Stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
    <div className="text-xs font-mono text-gray-400 mb-1">TOTAL_SECONDS</div>
    <div className="text-xl font-mono text-pink-400">{totalSeconds.toLocaleString()}</div>
  </div>
  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
    <div className="text-xs font-mono text-gray-400 mb-1">PROGRESS_BAR</div>
    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
      <div 
        className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
        style={{ width: `${Math.max(0, ((absoluteDuration - totalSeconds) / absoluteDuration) * 100)}%` }}
      ></div>
    </div>
    <div className="text-xs font-mono text-purple-400">
      {Math.max(0, ((absoluteDuration - totalSeconds) / absoluteDuration) * 100).toFixed(1)}%
    </div>
  </div>
  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
    <div className="text-xs font-mono text-gray-400 mb-1">STATUS_CODE</div>
    <div className="text-xl font-mono text-green-400">200 OK</div>
  </div>
</div>

          </div>
        ) : (
          <div className="text-center mb-12">
            <div className="text-8xl mb-6">⚡</div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              EXECUTION_COMPLETE
            </h2>
            <div className="font-mono text-gray-400 text-lg mb-4">
              $ hackathon --status=finished --submissions=open
            </div>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-mono font-bold">
              DEPLOY_NOW.exe
            </div>
          </div>
        )}

        {/* Terminal */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 font-mono text-sm max-w-2xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400">hackathon-terminal.sh</span>
          </div>
          
          <div className="space-y-2">
            <div className="text-green-400">
              <span className="text-pink-500">user@hackathon:~$</span> ./countdown.sh --target={targetDate.toISOString().split('T')[0]}
            </div>
            <div className="text-gray-300">
              → Initializing countdown protocol...
            </div>
          {showTime && (
  <div className="text-gray-300">
    → Time remaining: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
  </div>
)}


            <div className="text-gray-300">
              → Status: {isActive ? 
                <span className="text-green-400 animate-pulse">ACTIVE_DEVELOPMENT</span> : 
                <span className="text-red-400">SUBMISSION_DEADLINE_REACHED</span>
              }
            </div>
            {isActive && (
              <div className="text-pink-400 animate-pulse">
                <span className="text-pink-500">system@hackathon:~$</span> {totalSeconds > 3600 ? 'keep --coding' : 'final --sprint'}
              </div>
            )}
          </div>
        </div>

        {/* Floating code elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
          {['{', '}', '<', '>', '/>', '()', '[]', '&&', '||', '=>'].map((symbol, i) => (
            <div
              key={i}
              className="absolute text-pink-100 font-mono text-2xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
                
              }}
            >
              {symbol}
            </div>
          ))}
        </div>
      </div>

      {/* Scoped Styles */}
      <style jsx>{`
        .hackathon-countdown {
          --pointer-x: 50%;
          --pointer-y: 50%;
          --pointer-from-center: 0;
          --pointer-from-top: 0.5;
          --pointer-from-left: 0.5;
          --card-opacity: 0;
          --rotate-x: 0deg;
          --rotate-y: 0deg;
          --background-x: 50%;
          --background-y: 50%;
        }

        .hackathon-countdown @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .hackathon-countdown @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.3); }
          50% { box-shadow: 0 0 30px rgba(236, 72, 153, 0.6); }
        }

        .hackathon-countdown .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .hackathon-countdown .glow-effect {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .hackathon-countdown .neon-border {
          border: 1px solid;
          border-image: linear-gradient(45deg, #ec4899, #8b5cf6) 1;
        }

        .hackathon-countdown ::-webkit-scrollbar {
          width: 8px;
        }
        .hackathon-countdown ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        .hackathon-countdown ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ec4899, #8b5cf6);
          border-radius: 4px;
        }
        .hackathon-countdown ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #be185d, #7c3aed);
        }
      `}</style>
    </div>
  );
};

// Scoped TechnicalClockUnit
const TechnicalClockUnit = ({ value, label, maxValue, color, icon: Icon }) => {
  const percentage = (value / maxValue) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="hackathon-countdown relative group">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-black border border-gray-600 glow-effect">
          <div className={`absolute inset-0 rounded-full opacity-20 bg-gradient-to-br ${color} blur-sm`}></div>
        </div>

        <svg className="absolute inset-2 w-24 h-24 sm:w-28 sm:h-28 transform -rotate-90">
          <defs>
            <pattern id={`grid-${label}`} width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="rgba(75, 85, 99, 0.1)" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id={`gradient-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          <circle
            cx="50%"
            cy="50%"
            r="45"
            stroke="rgba(75, 85, 99, 0.2)"
            strokeWidth="2"
            fill="url(#grid-${label})"
          />

          <circle
            cx="50%"
            cy="50%"
            r="45"
            stroke="url(#gradient-${label})"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out drop-shadow-lg"
            strokeLinecap="round"
          />

          <circle
            cx="50%"
            cy="50%"
            r="35"
            stroke="rgba(75, 85, 99, 0.1)"
            strokeWidth="1"
            fill="transparent"
            strokeDasharray="2,2"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mb-1 opacity-60" />
          <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-wider">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-xs font-mono text-gray-600">
            0x{value.toString(16).padStart(2, '0').toUpperCase()}
          </div>
        </div>

        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-30 animate-ping"
               style={{ top: '50%', animationDuration: '3s' }}></div>
        </div>
      </div>

      <div className="text-center mt-4">
        <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">
          {label}
        </div>
        <div className="text-xs text-gray-600 font-mono">
          [{percentage.toFixed(1)}%] | 0b{value.toString(2).padStart(8, '0')}
        </div>
      </div>
    </div>
  );
};

export default HackathonCountdown;
