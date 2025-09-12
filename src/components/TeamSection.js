import React from "react";
import { useNavigate } from "react-router-dom";
import TargetCursor from "./TargetCursor";
import Spline from '@splinetool/react-spline';
import './TeamSection.css';

const TeamSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-lg rounded-2xl glow-effect">
      
      {/* Left side - Text about the team */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6 text-pink-400">Meet Our Team</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Ready to shape the future? Our coordinators are here to guide, mentor, 
          and support you every step of the way — ensuring your journey is 
          impactful, memorable, and truly transformative.
        </p>

        {/* Contact Us Button */}
        <button
          onClick={() => navigate("/contact")}
          className="cursor-target px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-lg hover:scale-110 transition-transform animate-pulse-glow text-white font-semibold"
        >
          Contact Us
        </button>
      </div>

      {/* Right side - Inspirational Quote Section */}
      <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <div className="relative w-full max-w-lg">
          
          {/* Quote Container */}
          <div className="relative bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/20 hover:border-pink-400/40 transition-all duration-700 animate-float">
            
            {/* Floating Particles */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-400 rounded-full animate-ping"></div>
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-300"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-300 rounded-full animate-ping delay-1000"></div>
            
            {/* Quote Mark Icon */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mb-4 animate-pulse-glow">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Our Philosophy</h3>
            </div>
            
            {/* Main Quote */}
            <div className="text-center mb-8">
              <blockquote className="text-xl font-medium text-white leading-relaxed mb-4 italic">
                "We are not just coordinators, we are dream weavers, future architects, and catalysts of change. Every project we touch, every student we guide, becomes a stepping stone to innovation."
              </blockquote>
              
              {/* Quote Attribution */}
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400"></div>
                <p className="text-pink-300 font-semibold text-sm">Association Members</p>
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
              </div>
            </div>
            
            {/* Core Values */}
            {/* <div className="space-y-4">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/15 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✨</span>
                </div>
                <span className="text-gray-200 font-medium">Innovation Through Collaboration</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/15 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🚀</span>
                </div>
                <span className="text-gray-200 font-medium">Empowering Future Leaders</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/15 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">💡</span>
                </div>
                <span className="text-gray-200 font-medium">Transformative Experiences</span>
              </div>
            </div> */}
            
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl blur-xl -z-10 transition-all duration-700"></div>
          </div>
          
          {/* Additional Floating Elements */}
          <div className="absolute top-8 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-md animate-pulse"></div>
          <div className="absolute bottom-8 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-md animate-pulse delay-1000"></div>
          
          {/* Orbiting Elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full animate-spin origin-bottom" style={{animationDuration: '8s'}}></div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1 h-1 bg-purple-400 rounded-full animate-spin origin-left" style={{animationDuration: '6s'}}></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-300 rounded-full animate-spin origin-top" style={{animationDuration: '10s'}}></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2 h-2 bg-purple-300 rounded-full animate-spin origin-right" style={{animationDuration: '12s'}}></div>
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 10px rgba(236, 72, 153, 0.4), 
                        0 0 20px rgba(139, 92, 246, 0.4);
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.7), 
                        0 0 40px rgba(139, 92, 246, 0.7);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 1.8s infinite ease-in-out;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Additional CSS to ensure watermark removal */
        .spline-watermark,
        div[class*="watermark"],
        div[style*="position: absolute"][style*="bottom"],
        div[style*="position: fixed"][style*="bottom"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default TeamSection;