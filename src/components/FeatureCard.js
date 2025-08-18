import React from 'react';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className={`group relative bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Card Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* 3D Effect Border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="text-4xl mb-4 text-pink-500 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-pink-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Particle Effect */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
    </div>
  );
};

export default FeatureCard;