import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';

const AcknowledgementSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample feedback data - replace with your actual feedback
  const feedbacks = [
    {
      id: 1,
      name: "PARTCIPANT",
      feedback: "COC 2024 was an incredible experience! The mentorship and collaborative environment helped me push my coding skills to new heights. Can't wait for the next one!"
    },
    {
      id: 2,
     name: "PARTCIPANT",
      feedback: "The hackathon brought together brilliant minds from different backgrounds. The 24-hour challenge was intense but incredibly rewarding. Made lifelong connections!"
    },
    {
      id: 3,
      name: "PARTCIPANT",
      feedback: "COC 2024 provided the perfect platform to showcase innovative ideas. The judges were supportive, and the networking opportunities were amazing. Definitely participating again!"
    },
    {
      id: 4,
      name: "PARTCIPANT",
      feedback: "From ideation to implementation, COC 2024 was perfectly organized. The workshops were insightful and the competitive spirit brought out the best in everyone."
    },
    {
      id: 5,
    name: "PARTCIPANT",
      feedback: "The diversity of projects and the collaborative atmosphere made COC 2024 unforgettable. Great platform for learning new technologies and meeting like-minded individuals."
    },
    {
      id: 6,
    name: "PARTCIPANT",
      feedback: "COC 2024 exceeded all expectations! The mentors were incredibly knowledgeable, and the problem statements were challenging yet achievable. Outstanding event overall."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  const getCardPosition = (index) => {
    const totalCards = feedbacks.length;
    const angleStep = (2 * Math.PI) / totalCards;
    const currentAngle = index * angleStep - (currentIndex * angleStep);
    const radius = 200;
    
    let x = Math.cos(currentAngle) * radius;
    const z = Math.sin(currentAngle) * radius;
     
    // Only show the front card (current card)
    const isActive = index === currentIndex;
    
    return {
      transform: `translate3d(${x + (isActive ? -200 : 0)}px, 0, ${z}px) rotateY(${-currentAngle}rad)`,
      opacity: isActive ? 1 : 0,
      visibility: isActive ? 'visible' : 'hidden',
      zIndex: Math.round(z)
    };
  };

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
           # Voices of COC 2024!
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
         Hear from our amazing participants on what made our hackathon truly unforgettable!
          </p>
        </div>

        {/* Circular Rotating Cards Container */}
        <div className="flex justify-center items-center mb-12">
          <div className="relative w-96 h-80" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
            {feedbacks.map((feedback, index) => (
              <div
                key={feedback.id}
                className="absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center"
                style={getCardPosition(index)}
              >
                <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-8 shadow-2xl hover:shadow-pink-500/20 transition-all duration-300">
                  {/* Profile Section */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{feedback.name}</h3>
                      <p className="text-pink-300 text-sm">{feedback.role}</p>
                    </div>
                  </div>
                  
                  {/* Feedback Text */}
                  <blockquote className="text-gray-100 text-base leading-relaxed italic">
                    "{feedback.feedback}"
                  </blockquote>
                  
                  {/* Decorative Quote */}
                  <div className="absolute top-4 right-6 text-pink-400/20 text-7xl font-serif">
                    "
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3">
          {feedbacks.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-pink-500 scale-110' 
                  : 'bg-gray-600 hover:bg-pink-400/70'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-gray-300">Participants</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
              24
            </div>
            <p className="text-gray-300">Hours of Coding</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <p className="text-gray-300">Innovations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcknowledgementSection;