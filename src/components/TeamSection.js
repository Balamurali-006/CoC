import React from "react";
import { useNavigate } from "react-router-dom";
import TargetCursor from "./TargetCursor";
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
          className="cursor-target px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
        >
          Contact Us
        </button>
      </div>

      {/* Right side - Placeholder */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="w-64 h-64 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full animate-float shadow-2xl" />
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
      `}</style>
    </div>
  );
};

export default TeamSection;



