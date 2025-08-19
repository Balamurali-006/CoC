// In your Footer component file (Footer.jsx)

import React from 'react';

const Footer = ({ onNavigateToDevelopers }) => {
  return (
    <footer className="bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Your existing footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">CODE-O-CLOCK 2024</h3>
            <p className="text-gray-400">
              The ultimate coding challenge for innovators, creators, and dreamers.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-pink-500 transition-colors duration-300">Register</a>
              <a href="#timeline" className="block text-gray-400 hover:text-pink-500 transition-colors duration-300">Schedule</a>
              <a href="#about" className="block text-gray-400 hover:text-pink-500 transition-colors duration-300">Prizes</a>
            </div>
          </div>
          
          {/* <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-pink-500 transition-colors duration-300">Discord</a>
              <a href="#" className="block text-gray-400 hover:text-pink-500 transition-colors duration-300">Twitter</a>
            </div>
          </div> */}
        </div>
        
        {/* Bottom section with "Powered by" link */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 CODE-O-CLOCK Hackathon. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0 flex space-x-6">
              {/* <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors text-sm">Terms of Service</a> */}
              
              {/* THIS IS THE IMPORTANT PART - "Powered by" button */}
              <button 
                onClick={onNavigateToDevelopers}
                className="text-gray-400 hover:text-pink-500 transition-all duration-300 text-sm font-medium hover:scale-105 relative group"
              >
                <span className="relative z-10">Powered by Our Developers ✨</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;