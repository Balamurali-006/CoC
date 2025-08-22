import React from 'react';
import '@fontsource/orbitron/700.css';
import '@fontsource/bebas-neue';
import '@fontsource/anton';
import './HeroSection.css';
import Spline from '@splinetool/react-spline';
import SplitText from './SplitText';
import TargetCursor from "./TargetCursor";
// Import your logo from assets folder
import logo from '../components/assets/SaaS22.svg'; // Adjust the path based on your actual logo filename


const HeroSection = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
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
          <p className="mb-6">Join the ultimate coding challenge. Push boundaries, break limits, and create the future.</p>
          
          {/* Enhanced Event Info Cards */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Date Card */}
            <div className="group relative cursor-target">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-black border border-cyan-400/30 rounded-xl px-6 py-4 transform hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 text-sm font-medium mb-1">EVENT DATE</div>
                <div className="text-white font-bold text-lg flex items-center gap-2">
                  <span className="text-2xl">📅</span>
                  26 Sept 2025
                </div>
              </div>
            </div>

            {/* Prize Pool Card */}
            <div className="group relative cursor-target">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-black border border-yellow-400/30 rounded-xl px-6 py-4 transform hover:scale-105 transition-all duration-300">
                <div className="text-yellow-400 text-sm font-medium mb-1">PRIZE POOL</div>
                <div className="text-white font-bold text-lg flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  ₹50,000
                </div>
              </div>
            </div>

            {/* Registration Fee Card */}
            <div className="group relative cursor-target">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-black border border-pink-400/30 rounded-xl px-6 py-4 transform hover:scale-105 transition-all duration-300">
                <div className="text-pink-400 text-sm font-medium mb-1">ENTRY FEE</div>
                <div className="text-white font-bold text-lg flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  ₹300
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
         <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <div className="flex justify-center items-center">
          <button className="cursor-target group relative px-10 py-4 bg-black border rounded-lg font-semibold text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25">
                <span className="relative z-10 flex items-center space-x-2 ">
                  <a href='https://docs.google.com/forms/d/e/1FAIpQLSe1PpoE2xCtN9zWfis-sVEI74pA1PEhqo1L5Cv9na0nKskr9g/viewform'>REGISTER</a>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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