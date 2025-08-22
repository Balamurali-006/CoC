import React, { useState, useEffect } from 'react';
import { Clock, Terminal, Code, Zap, Cpu, Database, Globe } from 'lucide-react';

const HackathonCountdown = () => {
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setFullYear(2025, 8, 26); // Month is 0-indexed: 8 = September
    date.setHours(9, 0, 0, 0); // 09:00:00.000
    return date;
  });

  const [absoluteDuration] = useState(() => {
    const now = new Date().getTime();
    return Math.floor((targetDate.getTime() - now) / 1000);
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isActive, setIsActive] = useState(true);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [showTime, setShowTime] = useState(true);

  // Smooth fade effect for terminal
  useEffect(() => {
    const fadeTimer = setInterval(() => {
      setShowTime(prev => !prev);
    }, 3000); // Slower, less disturbing
    return () => clearInterval(fadeTimer);
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
    return date.toLocaleString('en-GB', {
      hour12: false,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-pink-500 rounded-full animate-pulse opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            // backgroundImage: `black`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-8 px-8 py-4 border-2 border-pink-500/50 rounded-2xl bg-black/50 backdrop-blur-lg shadow-2xl shadow-pink-500/25">
            <Terminal className="w-6 h-6 text-pink-400 mr-4" />
            <span className="font-mono text-pink-400 text-lg tracking-wide">HACKATHON.STATUS</span>
            <div className="ml-4 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl">
            COUNTDOWN
          </h1>

          <div className="space-y-2 font-mono">
            <div className="text-gray-300 text-lg">
              <span className="text-pink-400">TARGET:</span> {formatDateTime(targetDate)}
            </div>
            <div className="text-gray-500 text-sm">
              <span className="text-purple-400">CURRENT:</span> {formatDateTime(new Date())}
            </div>
          </div>
        </div>

        {/* Countdown Display */}
        {isActive ? (
          <div className="mb-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
              <EnhancedTimeUnit 
                value={timeLeft.days} 
                label="DAYS" 
                maxValue={30}
                color="from-pink-500 to-purple-500"
                icon={Clock}
                glowColor="pink-500"
              />
              <EnhancedTimeUnit 
                value={timeLeft.hours} 
                label="HOURS" 
                maxValue={24}
                color="from-purple-500 to-pink-500"
                icon={Zap}
                glowColor="purple-500"
              />
              <EnhancedTimeUnit 
                value={timeLeft.minutes} 
                label="MINUTES" 
                maxValue={60}
                color="from-pink-600 to-purple-600"
                icon={Code}
                glowColor="pink-600"
              />
              <EnhancedTimeUnit 
                value={timeLeft.seconds} 
                label="SECONDS" 
                maxValue={60}
                color="from-purple-600 to-pink-600"
                icon={Cpu}
                glowColor="purple-600"
              />
            </div>
          </div>
        ) : (
          <div className="text-center mb-16">
            <div className="text-8xl mb-8 animate-bounce">🚀</div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              LAUNCH TIME!
            </h2>
            <div className="font-mono text-gray-300 text-xl mb-6">
              $ hackathon --deploy --production
            </div>
            <button className="px-12 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl font-bold text-xl shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/75 transition-all duration-300 hover:scale-105">
              SUBMIT PROJECT
            </button>
          </div>
        )}

        {/* Enhanced Terminal */}
        <div className="bg-gray-900/80 backdrop-blur-lg border-2 border-gray-700/50 rounded-2xl p-8 font-mono text-sm max-w-4xl mx-auto shadow-2xl">
          <div className="flex items-center mb-6">
            <div className="flex space-x-3 mr-6">
              <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
            </div>
            <span className="text-gray-400 text-lg">hackathon-system.terminal</span>
          </div>
          
          <div className="space-y-3 text-base">
            <div className="text-green-400">
              <span className="text-pink-500">dev@hackathon:~$</span> ./countdown.exe --target={targetDate.toISOString().split('T')[0]}
            </div>
            <div className="text-gray-300 pl-4">
              → Initializing countdown protocol...
              <span className="text-green-400 ml-2">✓</span>
            </div>
            <div className={`text-gray-300 pl-4 transition-opacity duration-1000 ${showTime ? 'opacity-100' : 'opacity-50'}`}>
              → Time remaining: <span className="text-pink-400 font-bold">{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
            </div>
            <div className="text-gray-300 pl-4">
              → Status: {isActive ? 
                <span className="text-green-400 font-bold">DEVELOPMENT_ACTIVE</span> : 
                <span className="text-red-400 font-bold">SUBMISSION_OPEN</span>
              }
            </div>
            {isActive && (
              <div className="text-pink-400 pl-4">
                <span className="text-pink-500">system@hackathon:~$</span> 
                <span className="ml-2 animate-pulse">
                  {totalSeconds > 3600 ? 'code --mode=creative' : 'deploy --final-sprint'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Time Unit Component with properly aligned circles
const EnhancedTimeUnit = ({ value, label, maxValue, color, icon: Icon, glowColor }) => {
  const percentage = (value / maxValue) * 100;
  const radius = 50; // Same radius for both circles
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative group">
      <div className="relative w-36 h-36 lg:w-40 lg:h-40">
        {/* Outer glow ring */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${color} opacity-20 blur-md animate-pulse`}></div>
        
        {/* Main container */}
        <div className="absolute inset-1 rounded-full bg-black/60 backdrop-blur-sm border-2 border-gray-700/50 shadow-2xl">
          
          {/* SVG Progress Ring */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            <defs>
              <linearGradient id={`gradient-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>

            {/* Background circle (static) */}
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="rgba(75, 85, 99, 0.3)"
              strokeWidth="4"
              fill="transparent"
            />

            {/* Progress circle (rotating based on time) */}
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke={`url(#gradient-${label})`}
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
              strokeLinecap="round"
              style={{
                filter: `drop-shadow(0 0 8px rgba(236, 72, 153, 0.6))`
              }}
            />
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Icon className={`w-6 h-6 text-${glowColor} mb-2 opacity-80`} />
            <div className="text-3xl lg:text-4xl font-mono font-black text-white tracking-wider drop-shadow-lg">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs font-mono text-gray-500 mt-1">
              {percentage.toFixed(0)}%
            </div>
          </div>

          {/* Rotating accent */}
          <div className="absolute inset-0 rounded-full">
            <div className="absolute w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"
                 style={{
                   top: '10px',
                   left: '50%',
                   transform: 'translateX(-50%)',
                   animation: 'spin 10s linear infinite'
                 }}
            />
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="text-center mt-6">
        <div className="text-sm font-mono text-gray-300 uppercase tracking-widest font-bold">
          {label}
        </div>
        <div className="text-xs text-gray-600 font-mono mt-1">
          0x{value.toString(16).padStart(2, '0').toUpperCase()}
        </div>
      </div>
    </div>
  );
};

// Compact Stat Card Component
const CompactStatCard = ({ icon: Icon, title, value, color, progress }) => {
  const colorClasses = {
    pink: 'from-pink-600 to-pink-400',
    purple: 'from-purple-600 to-purple-400',
    green: 'from-green-600 to-green-400'
  };

  return (
    <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <Icon className={`w-5 h-5 text-${color}-400`} />
        <div className="text-xs font-mono text-gray-400 uppercase tracking-wide">
          {title}
        </div>
      </div>
      
      {progress !== undefined && (
        <div className="mb-3">
          <div className="w-full bg-gray-700 rounded-full h-1.5">
            <div 
              className={`bg-gradient-to-r ${colorClasses[color]} h-1.5 rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      
      <div className={`text-lg font-mono font-bold text-${color}-400`}>
        {value}
      </div>
    </div>
  );
};

export default HackathonCountdown;