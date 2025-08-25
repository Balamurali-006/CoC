import React from 'react';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className={`group relative bg-black border border-purple-500/20 rounded-xl p-6 transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 overflow-hidden cursor-pointer`}
      style={{ 
        animationDelay: `${delay}ms`,
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Main Glow Effect - Pink to Purple */}
      {/* <div 
        className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700 animate-pulse"
        style={{
          filter: 'blur(15px)',
          background: 'linear-gradient(45deg, #ec4899, #8b5cf6, #ec4899, #8b5cf6)',
          backgroundSize: '400% 400%',
          animation: 'group-hover:gradientShift 3s ease infinite'
        }}
      ></div>
       */}
      {/* Inner Shadow Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/15 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      {/* Animated Border */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(45deg, transparent, rgba(236, 72, 153, 0.3), transparent, rgba(139, 92, 246, 0.3), transparent)',
          backgroundSize: '400% 400%',
          animation: 'borderFlow 4s ease infinite'
        }}
      ></div>
      
      {/* Floating Particles with Theme Colors */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 shadow-lg shadow-pink-500/50" style={{ animationDelay: '0ms' }}></div>
      <div className="absolute top-6 right-8 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 shadow-lg shadow-purple-500/50" style={{ animationDelay: '200ms' }}></div>
      <div className="absolute bottom-8 left-8 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 shadow-lg shadow-pink-400/50" style={{ animationDelay: '400ms' }}></div>
      <div className="absolute bottom-4 right-6 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 shadow-lg shadow-purple-400/50" style={{ animationDelay: '600ms' }}></div>
      
      {/* Sliding Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"></div>
      
      <div className="relative z-10">
        {/* Enhanced Icon with Glow */}
        <div className="text-4xl mb-4 text-pink-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter group-hover:drop-shadow-2xl group-hover:drop-shadow-pink-500/70">
          {icon}
        </div>
        
        {/* Title with Animated Underline */}
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-pink-300 transition-all duration-500 relative group-hover:tracking-wide">
          {title}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-700 shadow-sm shadow-pink-500/50"></div>
        </h3>
        
        {/* Description with Glow */}
        <p className="text-gray-400 group-hover:text-gray-200 transition-all duration-500 group-hover:tracking-wide">
          {description}
        </p>
      </div>
      
      {/* Corner Accent Glows */}
      <div className="absolute top-0 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-lg shadow-pink-500/50"></div>
      <div className="absolute top-0 left-0 w-0.5 h-12 bg-gradient-to-b from-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-lg shadow-pink-500/50"></div>
      <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-to-l from-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-lg shadow-purple-500/50"></div>
      <div className="absolute bottom-0 right-0 w-0.5 h-12 bg-gradient-to-t from-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-lg shadow-purple-500/50"></div>
      
      {/* Pulsing Ring Effects */}
      <div className="absolute top-2 right-2 w-3 h-3 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500 shadow-lg shadow-pink-500/60"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500 shadow-lg shadow-purple-500/60" style={{ animationDelay: '300ms' }}></div>
      
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes borderFlow {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        .group:hover .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default FeatureCard;