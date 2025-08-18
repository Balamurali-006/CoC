import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Rapid prototyping and development with cutting-edge tools and frameworks."
    },
    {
      icon: "🚀",
      title: "Innovation Hub",
      description: "Push the boundaries of technology with AI, blockchain, and emerging tech."
    },
    {
      icon: "🏆",
      title: "Win Big",
      description: "Compete for amazing prizes, internships, and recognition from top companies."
    },
    {
      icon: "🤝",
      title: "Team Spirit",
      description: "Collaborate with brilliant minds and build lasting professional networks."
    },
    {
      icon: "💡",
      title: "Mentorship",
      description: "Learn from industry experts and get guidance from experienced developers."
    },
    {
      icon: "🌟",
      title: "Showcase",
      description: "Present your creations to judges, investors, and potential employers."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            WHY PARTICIPATE?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the thrill of competitive programming in an environment designed for innovation and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;