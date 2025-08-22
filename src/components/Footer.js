import React, { useState } from 'react';

const Footer = ({ onNavigateToDevelopers }) => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/company/association-btech-ai-ds/posts/?feedView=all',
      color: 'from-blue-600 to-blue-400'
    },
    {
      name: 'Instagram', 
      icon: '📸',
      url: 'https://www.instagram.com/b.tech_ai_ds?igsh=MTFrcjc1cWdsbHp5Yg==',
      color: 'from-pink-600 to-purple-600'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://chat.whatsapp.com/FmwZP64SIAZFJO66RIVy8b',
      color: 'from-green-600 to-green-400'
    }
  ];

  const quickLinks = [
    { name: '🏠', href: '#home' },
    { name: '⏰', href: '#timeline' },
    { name: '🏆', href: '#prize' },
    { name: '💡', href: '#about' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-8xl mx-auto px-6">
        
        {/* Main row */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-6">
          
          {/* Left: Brand + Quick Links */}
          <div className="flex items-center gap-16">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                CODE-O-CLOCK
              </h3>
              <p className="text-sm text-gray-500">2k25</p>
            </div>
            
            {/* Quick emoji links */}
            <div className="flex gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-2xl hover:scale-125 transition-transform duration-300 hover:animate-bounce"
                  title={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Social Links + Developer Button */}
          <div className="flex items-center gap-6">
            
            {/* Social media emojis */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-2 px-3 py-2 hover:scale-105 transition-all duration-300 hover:animate-bounce rounded-full"
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  title={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                  <span className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 hidden sm:inline">
                    {social.name}
                  </span>
                  {hoveredSocial === index && (
                    <div className={`absolute -inset-2 bg-gradient-to-r ${social.color} rounded-full opacity-20 blur-sm animate-pulse`}></div>
                  )}
                </a>
              ))}
            </div>
            
            {/* Developer button */}
            <button 
              onClick={onNavigateToDevelopers}
              className="group flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 rounded-full text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-pink-500/50"
              title="Meet our developers"
            >
              <span className="group-hover:animate-spin">🧠</span>
              <span className="text-sm font-medium hidden sm:inline">Developers</span>
              <span className="group-hover:animate-bounce">✨</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 pt-4 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            © 2025 CODE-O-CLOCK • Made with <span className="text-pink-500 animate-pulse">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;