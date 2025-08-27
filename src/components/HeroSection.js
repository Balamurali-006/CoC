import React from 'react';
import '@fontsource/orbitron/700.css';
import '@fontsource/bebas-neue';
import '@fontsource/anton';
import './HeroSection.css';
import Spline from '@splinetool/react-spline';
import SplitText from './SplitText';
import TargetCursor from "./TargetCursor";
// Import your logo from assets folder
import logo from '../assets/SaaS22.svg'; // Adjust the path based on your actual logo filename

const HeroSection = ({ onNavigateToAIDay }) => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24">
      {/* 24-Hour Badge - Floating Top Right */}
      <div className="absolute top-32 right-8 z-20 hidden md:block">
        <div className="group relative cursor-target">
          <div className="absolute -inset-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
          <div className="relative bg-black border-2 border-orange-400 rounded-full px-6 py-3 backdrop-blur-sm transform hover:rotate-12 transition-all duration-300 shadow-2xl shadow-orange-500/30">
            <div className="text-center">
              <div className="text-orange-400 text-xs font-bold tracking-widest mb-1">NON-STOP</div>
              <div className="text-white font-black text-2xl leading-none" style={{ fontFamily: "'orbitron', monospace" }}>24</div>
              <div className="text-orange-400 text-xs font-bold tracking-widest">HOURS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Marathon Coding Badge - Floating Top Left */}
      {/* <div className="absolute top-32 left-8 z-20 hidden md:block">
        <div className="group relative cursor-target">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-60 animate-pulse"></div>
          <div className="relative bg-black border border-green-400/40 rounded-lg px-4 py-2 backdrop-blur-sm transform hover:scale-110 transition-all duration-300 shadow-lg shadow-green-500/20">
            <div className="flex items-center gap-2">
              <span className="text-lg">⚡</span>
              <div className="text-green-400 text-sm font-bold tracking-wide">MARATHON CODING</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Company Logo */}
        <div className="mb-8 ">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="bg-white mx-auto h-16 w-auto md:h-20 opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Industry Collaboration Badge */}
        <div className="relative mb-6 cursor-target">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-lg blur-sm opacity-60 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-gray-900 to-black border border-pink-500/30 rounded-lg px-6 py-2 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/20">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></span>
                <span className="text-white font-bold text-sm tracking-widest uppercase">
                  Industry Collaborated Hackathon
                </span>
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse"
            style={{ fontFamily: "'bebas-neue', cursive" }}
          >
            CODE
          </span>
          <span
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-white bg-clip-text text-transparent animate-pulse"
            style={{
              display: "inline-block",
              margin: "0 4px",
              fontFamily: "'bebas-neue', cursive"
            }}
          >
             -O- 
          </span>
          <span
            className="text-white"
            style={{ fontFamily: "'bebas-neue', cursive" }}
          >
            CLOCK
          </span>
        </h1>

        {/* 24-Hour Emphasis Badge - Mobile */}
        <div className="md:hidden mb-4">
          <div className="inline-block relative cursor-target">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-full blur opacity-60 animate-pulse"></div>
            <div className="relative bg-black border border-orange-400/40 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="text-orange-400 font-bold text-sm">⏰ 24-HOUR</span>
                <span className="text-white font-bold text-sm">MARATHON</span>
              </div>
            </div>
          </div>
        </div>
        

        {/* Animated Subheading */}
        <SplitText
          text="CODE • CREATE • CONQUER"
          className="text-2xl md:text-4xl font-light mb-8 text-gray-300"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        {/* Event Details */}
        <div className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          <p className="mb-6">Join the ultimate 24-hour coding challenge. Push boundaries, break limits, and create the future in one epic day.</p>
          
          {/* Enhanced Event Info Cards */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Date Card */}
            <div className="group relative cursor-target">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-black border border-cyan-400/30 rounded-lg px-4 py-2 transform hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 text-xs font-medium mb-1">EVENT DATE</div>
                <div className="text-white font-bold text-sm flex items-center gap-1">
                  <span className="text-lg">📅</span>
                  26 Sept 2025
                </div>
              </div>
            </div>

            {/* Duration Card */}
            <div className="group relative cursor-target">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-black border border-red-400/30 rounded-lg px-4 py-2 transform hover:scale-105 transition-all duration-300">
                <div className="text-red-400 text-xs font-medium mb-1">DURATION</div>
                <div className="text-white font-bold text-sm flex items-center gap-1">
                  <span className="text-lg">⏰</span>
                  24 Hours
                </div>
              </div>
            </div>

            {/* Prize Pool Card */}
            <div className="group relative cursor-target">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-black border border-yellow-400/30 rounded-lg px-4 py-2 transform hover:scale-105 transition-all duration-300">
                <div className="text-yellow-400 text-xs font-medium mb-1">PRIZE POOL</div>
                <div className="text-white font-bold text-sm flex items-center gap-1">
                  <span className="text-lg">🏆</span>
                  ₹50,000
                </div>
              </div>
            </div>

            {/* Registration Fee Card */}
            <div className="group relative cursor-target">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-black border border-pink-400/30 rounded-lg px-4 py-2 transform hover:scale-105 transition-all duration-300">
                <div className="text-pink-400 text-xs font-medium mb-1">ENTRY FEE</div>
                <div className="text-white font-bold text-sm flex items-center gap-1">
                  <span className="text-lg">💰</span>
                  ₹500
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Intensity Indicator - NEW */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900/80 to-black/80 border border-gray-600/30 rounded-full backdrop-blur-sm">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-gradient-to-t from-red-500 to-orange-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
              ))}
            </div>
            <span className="text-orange-300 font-medium text-sm tracking-wide">INTENSITY: MAXIMUM</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-gradient-to-t from-red-500 to-orange-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* Register Button */}
          <button className="cursor-target group relative px-10 py-4 bg-black border rounded-lg font-semibold text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25">
            <span className="relative z-10 flex items-center space-x-2">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSe1PpoE2xCtN9zWfis-sVEI74pA1PEhqo1L5Cv9na0nKskr9g/viewform' target="_blank" rel="noopener noreferrer">
                REGISTER NOW
              </a>
              <span className="ml-2 text-sm animate-bounce">⚡</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* AI Day Button */}
          <button 
            onClick={onNavigateToAIDay}
            className="cursor-target group relative px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 border border-cyan-400/30 rounded-lg font-semibold text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L3 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.734.99A.996.996 0 0118 6v2a1 1 0 11-2 0v-.277l-1.254.145a1 1 0 11-.992-1.736L14.984 6l-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.723V12a1 1 0 11-2 0v-1.277l-1.246-.855a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.277l1.246.855a1 1 0 11-.992 1.736l-1.75-1A.996.996 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a.996.996 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.277V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
              </svg>
              <span>AI DAY</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Spline Model */}
      <div className="hidden md:flex relative bottom-0 h-[600px] w-[600px]">
        <Spline scene="https://prod.spline.design/AGqE2KBLcy76azr4/scene.splinecode" />
      </div>
    </section>
  );
};

export default HeroSection;