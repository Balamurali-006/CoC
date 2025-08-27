import React from 'react';

import saas_logo from '../assets/SaaS22.svg';

const Sponsors = () => {
  // Your 3 sponsors
  const sponsors = [
     {
      id: 2,
      name: "Sponsor1",
      logo: "https://via.placeholder.com/150x75/8B008B/FFFFFF?text=InnovateNow",
      tier: "Gold",
      website: "https://example.com"
    },
    {
      id: 1,
      name: "SaaS 22",
      logo: saas_logo,
      tier: "Platinum",
      website: "https://www.saas22.com/"
    },
   
    {
      id: 3,
      name: "Sponsor2",
      logo: "https://via.placeholder.com/150x75/FF1493/FFFFFF?text=CodeMaster",
      tier: "Gold",
      website: "https://example.com"
    }
  ];

  const getTierStyles = (tier) => {
    switch(tier) {
      case 'Platinum':
        return {
          cardBg: 'from-pink-900/40 via-purple-900/40 to-pink-800/40',
          border: 'border-pink-400/70',
          hoverBorder: 'hover:border-pink-300',
          glowColor: 'group-hover:shadow-pink-400/60',
          badgeGradient: 'from-pink-400 via-purple-400 to-pink-500',
          animation: 'animate-pulse',
          sparkle: true,
          innerGlow: 'group-hover:shadow-inner group-hover:shadow-pink-500/30'
        };
      case 'Gold':
        return {
          cardBg: 'from-yellow-900/30 via-orange-900/30 to-yellow-800/30',
          border: 'border-yellow-400/60',
          hoverBorder: 'hover:border-yellow-300',
          glowColor: 'group-hover:shadow-yellow-400/50',
          badgeGradient: 'from-yellow-400 via-orange-400 to-yellow-500',
          animation: '',
          sparkle: false,
          innerGlow: 'group-hover:shadow-inner group-hover:shadow-yellow-500/20'
        };
      default:
        return {
          cardBg: 'from-purple-900/30 via-pink-900/30 to-purple-800/30',
          border: 'border-purple-500/50',
          hoverBorder: 'hover:border-purple-400',
          glowColor: 'group-hover:shadow-purple-500/40',
          badgeGradient: 'from-purple-400 to-pink-400',
          animation: '',
          sparkle: false,
          innerGlow: 'group-hover:shadow-inner group-hover:shadow-purple-500/20'
        };
    }
  };

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header with Enhanced Styling */}
        <div className="text-center mb-20">
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-6 tracking-tight">
              Our Sponsors
            </h2>
            {/* Decorative underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full opacity-80"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-8 leading-relaxed">
            Celebrating our amazing partners who make Code O'Clock possible
          </p>
        </div>

        {/* Sponsors Grid - Optimized for 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => {
            const tierStyles = getTierStyles(sponsor.tier);
            
            return (
              <div
                key={sponsor.id}
                className={`group relative bg-gradient-to-br ${tierStyles.cardBg} backdrop-blur-sm border-2 ${tierStyles.border} ${tierStyles.hoverBorder} rounded-2xl p-8 transition-all duration-700 hover:scale-110 hover:-translate-y-4 cursor-pointer ${tierStyles.glowColor} hover:shadow-2xl ${tierStyles.innerGlow}`}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Platinum Premium Sparkle Effects */}
                {tierStyles.sparkle && (
                  <>
                    <div className="absolute -top-2 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
                    <div className="absolute -top-2 -right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500"></div>
                    <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-300 rounded-full animate-ping delay-1000"></div>
                    <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-purple-300 rounded-full animate-ping delay-700"></div>
                    {/* Premium floating particles */}
                    <div className="absolute top-1/4 right-4 w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-300"></div>
                    <div className="absolute bottom-1/4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
                  </>
                )}

                {/* Tier Badge */}
                <div className={`absolute -top-4 left-4 px-4 py-2 bg-gradient-to-r ${tierStyles.badgeGradient} rounded-full text-white text-sm font-bold shadow-xl ${tierStyles.animation} border-2 border-white/20`}>
                  {sponsor.tier}
                  {sponsor.tier === 'Platinum' && <span className="ml-1">👑</span>}
                  {sponsor.tier === 'Gold' && <span className="ml-1">🥇</span>}
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 pt-4">
                  {/* Logo Container with Enhanced Design */}
                  <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 mb-6 group-hover:bg-white/25 transition-all duration-500 border border-white/10 group-hover:border-white/20">
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="w-full h-12 object-contain filter group-hover:brightness-125 group-hover:contrast-110 transition-all duration-500"
                    />
                  </div>

                  {/* Sponsor Name with Better Typography */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-500 text-center">
                    {sponsor.name}
                  </h3>

                  {/* Enhanced Visit Button */}
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-pink-500/90 to-purple-600/90 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-lg hover:shadow-xl border border-white/20 backdrop-blur-sm"
                  >
                    Visit Website
                    <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>

                {/* Enhanced Premium Glow Effects */}
                {sponsor.tier === 'Platinum' && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/25 to-purple-500/25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-2xl group-hover:animate-pulse"></div>
                  </>
                )}
                
                {sponsor.tier === 'Gold' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
                )}

                {/* Floating Border Animation */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className={`absolute inset-0 rounded-2xl border-2 ${tierStyles.border} animate-ping`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;