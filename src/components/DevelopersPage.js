import dev1 from '../assets/develop1.jpg'; 
import dev2 from '../assets/develop2.jpg';
import React, { useState, useEffect } from 'react';

const DeveloperCard = ({ developer, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  // Enhanced hover handlers with more dynamic effects
  const createSafeHoverHandlers = (bgColor, svgColor = 'white') => ({
    onMouseEnter: (e) => {
      const button = e.currentTarget;
      const svg = button.querySelector('svg');
      if (button) {
        button.style.background = bgColor;
        button.style.transform = 'scale(1.1) translateZ(10px)';
        button.style.boxShadow = `0 10px 25px ${bgColor}66`;
      }
      if (svg) {
        svg.style.fill = svgColor;
      }
    },
    onMouseLeave: (e) => {
      const button = e.currentTarget;
      const svg = button.querySelector('svg');
      if (button) {
        button.style.background = 'rgba(255, 255, 255, 0.9)';
        button.style.transform = 'scale(1) translateZ(0px)';
        button.style.boxShadow = 'rgba(236, 72, 153, 0.3) 0px 7px 5px -5px';
      }
      if (svg) {
        svg.style.fill = '#000000';
      }
    }
  });

  const createBackSafeHoverHandlers = (bgColor, svgColor = 'white') => ({
    onMouseEnter: (e) => {
      const button = e.currentTarget;
      const svg = button.querySelector('svg');
      if (button) {
        button.style.background = bgColor;
        button.style.transform = 'scale(1.2) rotateY(10deg)';
        button.style.boxShadow = `0 15px 35px ${bgColor}88`;
      }
      if (svg) {
        svg.style.fill = svgColor;
      }
    },
    onMouseLeave: (e) => {
      const button = e.currentTarget;
      const svg = button.querySelector('svg');
      if (button) {
        button.style.background = 'rgba(255, 255, 255, 0.95)';
        button.style.transform = 'scale(1) rotateY(0deg)';
        button.style.boxShadow = '0 8px 20px rgba(236, 72, 153, 0.2)';
      }
      if (svg) {
        svg.style.fill = '#000000';
      }
    }
  });

  return (
    <div 
      style={{
        ...styles.parent,
        ...(isHovered && !isFlipped ? styles.parentHovered : {}),
        ...(isVisible ? styles.parentVisible : styles.parentHidden)
      }}
      onMouseEnter={() => !isFlipped && setIsHovered(true)}
      onMouseLeave={() => !isFlipped && setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Floating particles around card */}
      {isHovered && !isFlipped && (
        <div style={styles.particles}>
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              style={{
                ...styles.particle,
                animationDelay: `${i * 0.2}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }} 
            />
          ))}
        </div>
      )}

      <div style={{
        ...styles.card,
        ...(isHovered && !isFlipped ? styles.cardHovered : {}),
        ...(isFlipped ? styles.cardFlipped : {})
      }}>
        {/* Enhanced animated logo circles */}
        {/* <div style={{
          ...styles.logo,
          ...(isFlipped ? styles.logoHidden : {})
        }}>
          <span style={{...styles.circle, ...styles.circle2, ...(isHovered ? styles.circle2Hovered : {})}}></span>
          <span style={{...styles.circle, ...styles.circle3, ...(isHovered ? styles.circle3Hovered : {})}}></span>
          <span style={{...styles.circle, ...styles.circle4, ...(isHovered ? styles.circle4Hovered : {})}}></span>
          <span style={{...styles.circle, ...styles.circle5, ...(isHovered ? styles.circle5Hovered : {})}}>
            <div 
              style={{
                ...styles.avatarContainer,
                ...(isHovered ? styles.avatarContainerHovered : {})
              }}
            >
              <img 
                src={developer.image || '/api/placeholder/100/100'} 
                alt={developer.name}
                style={styles.avatar}
              />
              <div style={styles.avatarOverlay}>
                <span style={styles.flipText}>Click to flip</span>
              </div>
            </div>
          </span>
        </div> */}

        {/* <img 
                src={developer.image || '/api/placeholder/100/100'} 
                alt={developer.name}
                style={styles.avatar}
              /> */}

        {/* Enhanced glass effect with gradient */}
        <div style={{
          ...styles.glass,
          ...(isHovered && !isFlipped ? styles.glassHovered : {}),
          ...(isFlipped ? styles.glassHidden : {})
        }}></div>

        {/* Card Front */}
        <div 
          style={{
            ...styles.cardFace,
            ...styles.cardFront,
            ...(isFlipped ? styles.cardFrontFlipped : {})
          }}
        >
          <div style={styles.content}>
            <div style={styles.titleContainer}>
              <span style={styles.title}>{developer.name}</span>
              <div style={styles.titleUnderline}></div>
            </div>
            <span style={styles.text}>{developer.role}</span>
            <span style={styles.description}>
              Passionate about creating innovative solutions and beautiful user experiences
            </span>
            
            {/* Skills badges */}
            <div style={styles.skillsContainer}>
              {developer.skills?.map((skill, i) => (
                <span key={i} style={styles.skillBadge}>{skill}</span>
              )) || ['React', 'Node.js', 'Python'].map((skill, i) => (
                <span key={i} style={styles.skillBadge}>{skill}</span>
              ))}
            </div>


          </div>

          {/* Enhanced social buttons and actions */}
          <div style={styles.bottom}>
            <div style={styles.socialButtonsContainer}>
              {developer.instagram && (
                <button 
                  style={{
                    ...styles.socialButton,
                    ...(isHovered ? styles.socialButtonHovered : {})
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSocialClick(developer.instagram);
                  }}
                  {...createSafeHoverHandlers('#E4405F')}
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" style={styles.socialSvg}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
              )}

              {developer.github && (
                <button 
                  style={{
                    ...styles.socialButton,
                    ...(isHovered ? styles.socialButtonHovered : {})
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSocialClick(developer.github);
                  }}
                  {...createSafeHoverHandlers('#333')}
                  title="GitHub"
                >
                  <svg viewBox="0 0 24 24" style={styles.socialSvg}>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
              )}

              {developer.linkedin && (
                <button 
                  style={{
                    ...styles.socialButton,
                    ...(isHovered ? styles.socialButtonHovered : {})
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSocialClick(developer.linkedin);
                  }}
                  {...createSafeHoverHandlers('#0077B5')}
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" style={styles.socialSvg}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              )}
            </div>

            <div style={styles.viewMore}>
              <button 
                style={{
                  ...styles.viewMoreButton,
                  ...(isHovered ? styles.viewMoreButtonHovered : {})
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSocialClick(developer.portfolio || developer.linkedin);
                }}
              >
                View Portfolio
              </button>
              <svg style={styles.viewMoreSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Simplified Card Back - Only image and social media */}
        <div style={{
          ...styles.cardFace,
          ...styles.cardBack,
          ...(isFlipped ? styles.cardBackFlipped : {})
        }}>
          <div style={styles.backContent}>
            {/* Large Developer Image */}
            <div style={styles.backImageContainer}>
              <img 
                src={developer.image || '/api/placeholder/150/150'} 
                alt={developer.name}
                style={styles.backImage}
              />
              <div style={styles.imageGlow}></div>
            </div>
            
            {/* Social Media Icons Only */}
            <div style={styles.backSocialContainer}>
              {developer.instagram && (
                <button 
                  style={styles.backSocialButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSocialClick(developer.instagram);
                  }}
                  {...createBackSafeHoverHandlers('#E4405F')}
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" style={styles.backSocialSvg}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
              )}
              
              {developer.github && (
                <button 
                  style={styles.backSocialButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSocialClick(developer.github);
                  }}
                  {...createBackSafeHoverHandlers('#333')}
                  title="GitHub"
                >
                  <svg viewBox="0 0 24 24" style={styles.backSocialSvg}>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
              )}
              
              {developer.linkedin && (
                <button 
                  style={styles.backSocialButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSocialClick(developer.linkedin);
                  }}
                  {...createBackSafeHoverHandlers('#0077B5')}
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" style={styles.backSocialSvg}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              )}
            </div>

            {/* Back Button */}
            <button 
              style={styles.flipBackButton}
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #a855f7, #ec4899)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(168, 85, 247, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.color = '#1f2937';
                e.currentTarget.style.transform = 'scale(1) translateY(0px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(168, 85, 247, 0.25)';
              }}
            >
              ← Back to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DevelopersPage = ({ onGoBack }) => {
  const developers = [
    {
      id: 1,
      name: "Bala Murali",
      role: "Fullstack Developer", 
      image: dev1,
      skills: ["React", "Node.js", "Python", "MongoDB"],
      instagram: "https://www.instagram.com/_.dark_hand_/",
      github: "https://github.com/Balamurali-006",
      linkedin: "https://www.linkedin.com/in/balamurali-m-940879316/",
      portfolio: "https://balamuraliportfolio.netlify.app/"
    },
    {
      id: 2,
      name: "Deepitha",
      role: "Fullstack Developer",
      image: dev2,
      skills: ["React", "Express", "MySQL", "Java"],
      instagram: "https://www.instagram.com/afficionado_space/",
      github: "https://github.com/Deepitha123", 
      linkedin: "https://www.linkedin.com/in/deepitha-m-76961928b/",
      portfolio: "https://www.linkedin.com/in/deepitha-m-76961928b/"
    },
  ];

  return (
    <div style={styles.showcaseContainer}>
      {/* Animated background elements */}
      <div style={styles.backgroundElements}>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            style={{
              ...styles.floatingElement,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Header */}
      <div style={styles.header}>
        {onGoBack && (
          <button 
            style={styles.backButton} 
            onClick={onGoBack}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateX(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateX(0px)';
            }}
          >
            ← Back to Home
          </button>
        )}
        <div style={styles.titleSection}>
          <h1 style={styles.mainTitle}>
            Meet Our <span style={styles.gradientText}>Developers</span>
          </h1>
          <p style={styles.subtitle}>The creative minds behind CODE-O-CLOCK</p>
        </div>
      </div>

      {/* Enhanced Developers Grid */}
      <div style={styles.developersGrid}>
        {developers.map((developer, index) => (
          <DeveloperCard key={developer.id} developer={developer} index={index} />
        ))}
      </div>

      {/* Team Stats */}
      <div style={styles.statsSection}>
        <div style={styles.statsContainer}>
          <div style={styles.statCard}>
            <span style={styles.statNumber}>2</span>
            <span style={styles.statLabel}>Talented Developers</span>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statNumber}>10+</span>
            <span style={styles.statLabel}>Projects Completed</span>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statNumber}>100%</span>
            <span style={styles.statLabel}>Dedication</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  showcaseContainer: {
    minHeight: '100vh',
    background: `
      radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
      linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)
    `,
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 0,
  },
  floatingElement: {
    position: 'absolute',
    width: '4px',
    height: '4px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    animation: 'float 20s infinite linear',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
    zIndex: 1,
    position: 'relative',
  },
  backButton: {
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '25px',
    padding: '12px 24px',
    color: 'white',
    cursor: 'pointer',
    marginBottom: '30px',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    fontSize: '14px',
    fontWeight: '500',
  },
  titleSection: {
    marginBottom: '40px',
  },
  mainTitle: {
    fontSize: '3.5rem',
    fontWeight: '900',
    color: 'white',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    lineHeight: '1.1',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    animation: 'gradient-shift 3s ease-in-out infinite alternate',
  },
  subtitle: {
    fontSize: '1.3rem',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '300',
    marginBottom: '0',
  },
  developersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '50px',
    maxWidth: '1400px',
    width: '100%',
    zIndex: 1,
    position: 'relative',
  },
  parent: {
    width: '340px',
    height: '420px',
    perspective: '1000px',
    margin: '0 auto',
    transition: 'all 0.5s ease',
    position: 'relative',
  },
  parentHidden: {
    opacity: 0,
    transform: 'translateY(50px)',
  },
  parentVisible: {
    opacity: 1,
    transform: 'translateY(0px)',
  },
  parentHovered: {
    transform: 'scale(1.02) translateY(-10px)',
  },
  particles: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 0,
  },
  particle: {
    position: 'absolute',
    width: '3px',
    height: '3px',
    background: 'rgba(236, 72, 153, 0.8)',
    borderRadius: '50%',
    animation: 'particle-float 2s ease-in-out infinite',
  },
  card: {
    height: '100%',
    borderRadius: '25px',
    background: 'linear-gradient(135deg, #ec4899, #a855f7, #ffffff)',
    transition: 'all 0.6s ease-in-out',
    transformStyle: 'preserve-3d',
    boxShadow: `
      0 20px 40px rgba(236, 72, 153, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2)
    `,
    position: 'relative',
    cursor: 'pointer',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  cardHovered: {
    transform: 'rotate3d(1, 1, 0, 10deg)',
    boxShadow: `
      0 30px 60px rgba(236, 72, 153, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3)
    `,
  },
  cardFlipped: {
    transform: 'rotateY(180deg)',
  },
  logo: {
    position: 'absolute',
    right: '0',
    top: '0',
    transformStyle: 'preserve-3d',
    transition: 'opacity 0.3s ease',
  },
  logoHidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
  glass: {
    transformStyle: 'preserve-3d',
    position: 'absolute',
    inset: '8px',
    borderRadius: '20px',
    background: `
      linear-gradient(135deg, 
        rgba(255, 255, 255, 0.25) 0%, 
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0.05) 100%
      )
    `,
    transform: 'translate3d(0px, 0px, 25px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.5s ease-in-out',
    backdropFilter: 'blur(10px)',
  },
  glassHovered: {
    background: `
      linear-gradient(135deg, 
        rgba(255, 255, 255, 0.35) 0%, 
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.1) 100%
      )
    `,
  },
  glassHidden: {
    opacity: 0,
  },
  content: {
    padding: '80px 40px 0px 30px',
    transform: 'translate3d(0, 0, 26px)',
    height: 'calc(100% - 80px)',
  },
  titleContainer: {
    marginBottom: '20px',
  },
  title: {
    display: 'block',
    color: '#1f2937',
    fontWeight: '900',
    fontSize: '28px',
    lineHeight: '1.1',
    textShadow: '2px 2px 4px rgba(255,255,255,0.5)',
    letterSpacing: '-0.5px',
  },
  titleUnderline: {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #ec4899, #a855f7)',
    marginTop: '12px',
    borderRadius: '2px',
  },
  text: {
    display: 'block',
    color: '#374151',
    fontSize: '18px',
    marginTop: '12px',
    fontWeight: '700',
  },
  description: {
    display: 'block',
    color: '#4b5563',
    fontSize: '13px',
    marginTop: '15px',
    lineHeight: '1.4',
    marginBottom: '20px',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '15px',
    marginBottom: '15px',
  },
  skillBadge: {
    background: 'rgba(168, 85, 247, 0.2)',
    color: '#6b21a8',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '600',
    border: '1px solid rgba(168, 85, 247, 0.3)',
  },
  frontStatsContainer: {
    marginTop: '15px',
    marginBottom: '20px',
  },
  frontStats: {
    display: 'flex',
    gap: '25px',
    justifyContent: 'flex-start',
  },
  frontStat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  frontStatNumber: {
    fontSize: '20px',
    fontWeight: '900',
    color: '#a855f7',
    lineHeight: '1',
  },
  frontStatLabel: {
    fontSize: '11px',
    color: '#6b7280',
    fontWeight: '600',
    marginTop: '2px',
  },
  bottom: {
    padding: '15px 20px',
    transformStyle: 'preserve-3d',
    position: 'absolute',
    bottom: '15px',
    left: '15px',
    right: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transform: 'translate3d(0, 0, 26px)',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  viewMore: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
  },
  viewMoreButton: {
    background: 'none',
    border: 'none',
    color: '#1f2937',
    fontWeight: '700',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  viewMoreButtonHovered: {
    color: '#a855f7',
    transform: 'translateX(5px)',
  },
  viewMoreSvg: {
    fill: 'none',
    stroke: '#1f2937',
    strokeWidth: '3px',
    width: '16px',
    height: '16px',
    transition: 'all 0.3s ease',
  },
  socialButtonsContainer: {
    display: 'flex',
    gap: '10px',
    transformStyle: 'preserve-3d',
  },
  socialButton: {
    width: '36px',
    height: '36px',
    padding: '8px',
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '50%',
    border: '2px solid rgba(168, 85, 247, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 16px rgba(236, 72, 153, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    backdropFilter: 'blur(10px)',
  },
  socialButtonHovered: {
    transform: 'translate3d(0, 0, 15px)',
    boxShadow: '0 15px 30px rgba(168, 85, 247, 0.4)',
  },
  socialSvg: {
    width: '18px',
    height: '18px',
    fill: '#000000',
    transition: 'all 0.3s ease',
  },
  circle: {
    display: 'block',
    position: 'absolute',
    aspectRatio: '1',
    borderRadius: '50%',
    top: '0',
    right: '0',
    boxShadow: `
      0 10px 25px rgba(236, 72, 153, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3)
    `,
    backdropFilter: 'blur(15px)',
    background: `
      linear-gradient(135deg, 
        rgba(255, 255, 255, 0.25) 0%, 
        rgba(255, 255, 255, 0.1) 100%
      )
    `,
    transition: 'all 0.6s ease-in-out',
    border: '1px solid rgba(168, 85, 247, 0.2)',
  },
  circle2: {
    width: '180px',
    transform: 'translate3d(0, 0, 20px)',
    top: '8px',
    right: '8px',
    transitionDelay: '0.1s',
  },
  circle2Hovered: {
    transform: 'translate3d(0, 0, 40px) rotate(45deg)',
  },
  circle3: {
    width: '150px',
    transform: 'translate3d(0, 0, 40px)',
    top: '15px',
    right: '15px',
    transitionDelay: '0.2s',
  },
  circle3Hovered: {
    transform: 'translate3d(0, 0, 60px) rotate(-30deg)',
  },
  circle4: {
    width: '120px',
    transform: 'translate3d(0, 0, 60px)',
    top: '22px',
    right: '22px',
    transitionDelay: '0.3s',
  },
  circle4Hovered: {
    transform: 'translate3d(0, 0, 80px) rotate(60deg)',
  },
  circle5: {
    width: '90px',
    transform: 'translate3d(0, 0, 80px)',
    top: '30px',
    right: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionDelay: '0.4s',
  },
  circle5Hovered: {
    transform: 'translate3d(0, 0, 100px) rotate(-45deg)',
  },
  avatarContainer: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '3px solid white',
    boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  avatarContainerHovered: {
    transform: 'scale(1.1)',
    boxShadow: '0 15px 40px rgba(236, 72, 153, 0.5)',
  },
  avatar: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  avatarOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    borderRadius: '50%',
  },
  flipText: {
    color: 'white',
    fontSize: '9px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Card Face Styles
  cardFace: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '25px',
    transition: 'transform 0.8s ease-in-out',
  },
  cardFront: {
    transform: 'rotateY(0deg)',
  },
  cardFrontFlipped: {
    transform: 'rotateY(-180deg)',
  },
  cardBack: {
    transform: 'rotateY(180deg)',
    background: `
      linear-gradient(135deg, #ec4899, #a855f7, #ffffff),
      radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)
    `,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  cardBackFlipped: {
    transform: 'rotateY(0deg)',
  },
  backContent: {
    padding: '40px 25px',
    textAlign: 'center',
    color: '#1f2937',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    background: `
      rgba(255, 255, 255, 0.15),
      linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)
    `,
    borderRadius: '20px',
    backdropFilter: 'blur(20px)',
    margin: '10px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3)',
  },
  backImageContainer: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '4px solid white',
    boxShadow: '0 25px 50px rgba(168, 85, 247, 0.4)',
    transition: 'all 0.5s ease',
    position: 'relative',
  },
  backImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  imageGlow: {
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #ec4899, #a855f7, #3b82f6)',
    opacity: 0.5,
    zIndex: -1,
    filter: 'blur(8px)',
  },
  backSocialContainer: {
    display: 'flex',
    gap: '25px',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  backSocialButton: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    border: '3px solid white',
    background: 'rgba(255, 255, 255, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    boxShadow: '0 15px 35px rgba(236, 72, 153, 0.4)',
    backdropFilter: 'blur(10px)',
    position: 'relative',
    overflow: 'hidden',
  },
  backSocialSvg: {
    width: '35px',
    height: '35px',
    fill: '#000000',
    transition: 'all 0.3s ease',
    zIndex: 1,
  },
  flipBackButton: {
    background: 'rgba(255, 255, 255, 0.9)',
    border: '2px solid #a855f7',
    borderRadius: '30px',
    padding: '15px 30px',
    color: '#1f2937',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '14px',
    transition: 'all 0.4s ease',
    backdropFilter: 'blur(15px)',
    boxShadow: '0 10px 25px rgba(168, 85, 247, 0.3)',
    position: 'relative',
    overflow: 'hidden',
  },
  statsSection: {
    marginTop: '100px',
    width: '100%',
    maxWidth: '1200px',
    zIndex: 1,
    position: 'relative',
  },
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    padding: '40px 20px',
  },
  statCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    padding: '30px 20px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: 'white',
    display: 'block',
    marginBottom: '8px',
  },
  };

export default DevelopersPage;