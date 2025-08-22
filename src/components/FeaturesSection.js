import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
   const features = [
    {
      icon: "🎓",
      title: "Internship Opportunities",
      description: "Open doors to career growth with hands-on internship offers from top companies."
    },
    {
      icon: "🏆",
      title: "Cash Prizes & Certificates",
      description: "Win exciting rewards, gain recognition, and boost your portfolio with achievements."
    },
    {
      icon: "🏭",
      title: "Industry-Driven Problem Statements",
      description: "Tackle real-world challenges designed in collaboration with leading companies."
    },
    {
      icon: "🌐",
      title: "Networking with Experts",
      description: "Connect with industry leaders, mentors, and peers to expand your professional network."
    },
    {
      icon: "🤝",
      title: "Engaging with Recruiters & Peers",
      description: "Showcase your talent directly to recruiters while collaborating with like-minded innovators."
    },
    {
      icon: "🛠",
      title: "Hands-on Exposure to Cutting-Edge Technologies",
      description: "Gain practical experience with the latest tools, frameworks, and emerging technologies."
    },
  ];


  return (
    <section className="py-20 px-6 bg-black">
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