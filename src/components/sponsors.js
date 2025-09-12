import React from 'react';

import saas_logo from '../assets/SaaS22.svg';
import kactii from '../assets/kactii.jpg';

const Sponsors = () => {
  // Your sponsors - currently featuring one amazing partner
  const sponsors = [
    {
      id: 1,
      name: "SaaS 22",
      logo: saas_logo,
      tier: "Platinum",
      website: "https://www.saas22.com/",
      description: "Empowering innovation through cutting-edge SaaS solutions"
    },
    {
      id: 2,
      name: "Kactii",
      logo: kactii,
      tier: "Gold",
      website: "https://app.kactii.com/",
      description: "Customized GenAI agents for medium companies"
    }

  ];

  // Placeholder for future sponsors
  const futureSponsorSlots = 2; // Show 2 "Coming Soon" cards

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

  const SponsorCard = ({ sponsor, index }) => {
    const tierStyles = getTierStyles(sponsor.tier);
    
    return (
      <div
        className={`group relative bg-gradient-to-br ${tierStyles.cardBg} backdrop-blur-sm border-2 ${tierStyles.border} ${tierStyles.hoverBorder} rounded-2xl p-8 transition-all duration-700 hover:scale-110 hover:-translate-y-6 cursor-pointer ${tierStyles.glowColor} hover:shadow-2xl ${tierStyles.innerGlow}`}
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
        <div className="relative z-10 pt-6">
          {/* Logo Container with Enhanced Design */}
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-8 mb-6 group-hover:bg-white/30 transition-all duration-500 border border-white/20 group-hover:border-white/30">
            <img
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              className="w-full h-16 object-contain filter group-hover:brightness-125 group-hover:contrast-110 transition-all duration-500"
            />
          </div>

          {/* Sponsor Name with Better Typography */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-500 text-center">
            {sponsor.name}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-center mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
            {sponsor.description}
          </p>

          {/* Enhanced Visit Button */}
          <a
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-4 bg-gradient-to-r from-pink-500/90 to-purple-600/90 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-lg hover:shadow-xl border border-white/20 backdrop-blur-sm"
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

        {/* Floating Border Animation */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className={`absolute inset-0 rounded-2xl border-2 ${tierStyles.border} animate-ping`}></div>
        </div>
      </div>
    );
  };

  const ComingSoonCard = ({ index }) => (
    <div
      className="group relative bg-gradient-to-br from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-sm border-2 border-gray-600/50 hover:border-gray-500/70 rounded-2xl p-8 transition-all duration-700 hover:scale-105 hover:-translate-y-2 cursor-default"
      style={{
        animationDelay: `${(sponsors.length + index) * 200}ms`
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 pt-2">
        {/* Logo Placeholder */}
        <div className="bg-gray-700/30 backdrop-blur-md rounded-xl p-8 mb-6 border border-gray-600/30 flex items-center justify-center">
          <div className="w-16 h-16 border-2 border-dashed border-gray-500/50 rounded-lg flex items-center justify-center">
            <span className="text-3xl text-gray-500/60">?</span>
          </div>
        </div>

        {/* Coming Soon Text */}
        <h3 className="text-xl font-bold text-gray-400 mb-4 text-center">
          Your Logo Here
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-center mb-6 text-sm">
          Interested in sponsoring Code O'Clock? Get in touch!
        </p>

        {/* Contact Button */}
        <div className="w-full text-center px-6 py-4 bg-gradient-to-r from-gray-600/50 to-gray-700/50 text-gray-300 font-medium rounded-xl border border-gray-600/30 backdrop-blur-sm">
          Become a Sponsor
          <span className="ml-2">✨</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-6 tracking-tight">
              Our Sponsors
            </h2>
            {/* Enhanced decorative elements */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-80"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full opacity-80"></div>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Celebrating our amazing partners who make Code O'Clock possible
          </p>
        </div>

        {/* Platinum Sponsors */}
        {sponsors.filter(s => s.tier === 'Platinum').length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-pink-400 mb-2">✨ Platinum Sponsor ✨</h3>
              <p className="text-gray-400">Our premier sponsor making this event extraordinary</p>
            </div>
            
            <div className="max-w-md mx-auto">
              {sponsors.filter(s => s.tier === 'Platinum').map((sponsor, index) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Gold Sponsors */}
        {sponsors.filter(s => s.tier === 'Gold').length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">🥇 Gold Sponsor 🥇</h3>
              <p className="text-gray-400">Supporting innovation and excellence</p>
            </div>
            
            <div className="max-w-md mx-auto">
              {sponsors.filter(s => s.tier === 'Gold').map((sponsor, index) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Silver/Other Sponsors */}
        {sponsors.filter(s => s.tier !== 'Platinum' && s.tier !== 'Gold').length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-300 mb-2">💎 Supporting Partners 💎</h3>
              <p className="text-gray-400">Valuable contributors to our success</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {sponsors.filter(s => s.tier !== 'Platinum' && s.tier !== 'Gold').map((sponsor, index) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Coming Soon Section */}
        {/* {futureSponsorSlots > 0 && (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-400 mb-2">🚀 Join Our Partners 🚀</h3>
              <p className="text-gray-500">Become part of something amazing</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {Array.from({ length: futureSponsorSlots }, (_, index) => (
                <ComingSoonCard key={`coming-soon-${index}`} index={index} />
              ))}
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Sponsors;