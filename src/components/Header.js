import React, { useState, useEffect } from 'react';
import TargetCursor from "./TargetCursor";
import { useNavigate } from "react-router-dom";
import CIT from './assets/CIT.png';
// import AI from './assets/AI.jpg'

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Prizes', href: '#prize' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact', href: '#team' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-pink-500/20 shadow-lg shadow-pink-500/10'
          : 'bg-transparent'
      }`}
    >
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <nav className="w-full px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between md:justify-around w-full max-w-none">
          
          {/* Mobile: Only CodeOClock Logo */}
          <div className="flex items-center md:hidden">
            <div>
              <h1 className="cursor-target text-lg font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                CODE-O-CLOCK
              </h1>
              <p className="text-xs text-gray-400 -mt-1">2k25</p>
            </div>
          </div>

          {/* Desktop: All Logos Section - Left */}
          <div className="hidden md:flex items-center space-x-4">
            {/* CIT Logo */}
            <div className="relative group">
              <div className="w-40 h-16 flex items-center justify-center">
                <img 
                  src={CIT} 
                  alt="CIT Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <span className="text-white font-bold text-sm hidden">CIT</span>
              </div>
            </div>

            {/* AI&DS Logo */}
            {/* <div className="relative group">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src={AI}
                  alt="AI&DS Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <span className="text-white font-bold text-xs hidden">AI&DS</span>
              </div>
            </div> */}

            {/* CodeOClock Logo */}
            <div className="flex items-center space-x-3">
              <div>
                <h1 className="cursor-target text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  CODE-O-CLOCK
                </h1>
                <p className="text-xs text-gray-400 -mt-1">2k25</p>
              </div>
            </div>
          </div>

          {/* Menu + CTA + Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:space-x-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="relative group text-gray-300 hover:text-white transition-colors duration-300 cursor-target"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center">
              <button className="cursor-target group relative px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25">
                <span className="relative z-10 flex items-center space-x-2">
                  <a href='https://docs.google.com/forms/d/e/1FAIpQLSe1PpoE2xCtN9zWfis-sVEI74pA1PEhqo1L5Cv9na0nKskr9g/viewform'>REGISTER</a>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Desktop Developer Button */}
            <button
              onClick={() => navigate("/developers")}
              className="hidden md:flex cursor-target relative group items-center gap-2 px-4 py-2 text-gray-300 hover:text-white text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                👨🏻‍💻
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-1"></div>
            </button>

            {/* Mobile: Quick Register Button */}
            <div className="md:hidden">
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSe1PpoE2xCtN9zWfis-sVEI74pA1PEhqo1L5Cv9na0nKskr9g/viewform'
                className="px-3 py-2 text-xs bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold text-white transition-all duration-300"
              >
                REGISTER
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
            >
              <div
                className={`w-5 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></div>
              <div className="absolute inset-0 bg-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100 mt-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-gray-900/95 backdrop-blur-lg rounded-xl border border-purple-500/20 p-4">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-300 hover:text-pink-500 transition-colors duration-300 border-b border-gray-700 last:border-b-0"
                >
                  <span className="flex items-center justify-between text-sm">
                    {item.name}
                    <span className="text-pink-500 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                  </span>
                </a>
              ))}
            </div>
            
            {/* Mobile menu buttons */}
            <div className="mt-4 pt-4 border-t border-gray-700 space-y-3">
              {/* Developer button in mobile menu */}
              <button
                onClick={() => {
                  navigate("/developers");
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 hover:text-white rounded-lg transition-all duration-300"
              >
                <span>👨🏻‍💻</span>
                <span>Developers</span>
              </button>
              
              {/* Register button */}
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSe1PpoE2xCtN9zWfis-sVEI74pA1PEhqo1L5Cv9na0nKskr9g/viewform'
                onClick={() => setIsMenuOpen(false)}
                className="block w-full group relative px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold text-white text-center transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>REGISTER NOW</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    ⚡
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {isScrolled && (
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>
      )}
    </header>
  );
};

export default Header;