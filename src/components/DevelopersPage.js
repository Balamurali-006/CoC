import dev1 from '../assets/develop1.jpg'; 
import dev2 from '../assets/develop2.jpg';
import React, { useState, useEffect } from 'react';

const DeveloperCard = ({ developer, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div 
      style={{
        ...styles.parent,
        ...(isVisible ? styles.parentVisible : styles.parentHidden)
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.card}>
        {/* Main Card Content */}
        <div style={styles.cardContainer}>
          <img 
            src={developer.image || '/api/placeholder/300/400'} 
            alt={developer.name}
            style={styles.cardImage}
          />
          
          {/* Always visible overlay with name */}
          <div style={styles.baseOverlay}>
            <h3 style={styles.baseName}>{developer.name}</h3>
            <p style={styles.baseRole}>{developer.role}</p>
          </div>

          {/* Hover overlay with details */}
          <div style={{
            ...styles.hoverOverlay,
            ...(isHovered ? styles.hoverOverlayVisible : styles.hoverOverlayHidden)
          }}>
            <div style={styles.hoverContent}>
              <h3 style={styles.hoverName}>{developer.name}</h3>
              <p style={styles.hoverRole}>{developer.role}</p>
              
              <div style={styles.skillsContainer}>
                {developer.skills?.map((skill, i) => (
                  <span key={i} style={styles.skillBadge}>{skill}</span>
                )) || ['React', 'Node.js', 'Python'].map((skill, i) => (
                  <span key={i} style={styles.skillBadge}>{skill}</span>
                ))}
              </div>
              
              {/* Social Media Icons */}
              <div style={styles.socialContainer}>
                {developer.instagram && (
                  <button 
                    style={styles.socialButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSocialClick(developer.instagram);
                    }}
                    title="Instagram"
                  >
                    <svg viewBox="0 0 24 24" style={styles.socialSvg}>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                    </svg>
                  </button>
                )}

                {developer.github && (
                  <button 
                    style={styles.socialButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSocialClick(developer.github);
                    }}
                    title="GitHub"
                  >
                    <svg viewBox="0 0 24 24" style={styles.socialSvg}>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </button>
                )}

                {developer.linkedin && (
                  <button 
                    style={styles.socialButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSocialClick(developer.linkedin);
                    }}
                    title="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" style={styles.socialSvg}>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>
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
      {/* Header */}
      <div style={styles.header}>
        {onGoBack && (
          <button 
            style={styles.backButton} 
            onClick={onGoBack}
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

      {/* Developers Grid */}
      <div style={styles.developersGrid}>
        {developers.map((developer, index) => (
          <DeveloperCard key={developer.id} developer={developer} index={index} />
        ))}
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
      linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)
    `,
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
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
  },
  subtitle: {
    fontSize: '1.3rem',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '300',
    marginBottom: '0',
  },
  developersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '50px',
    maxWidth: '1200px',
    width: '100%',
    zIndex: 1,
    position: 'relative',
  },
  parent: {
    width: '300px',
    height: '400px',
    margin: '0 auto',
    transition: 'all 0.5s ease',
    position: 'relative',
    cursor: 'pointer',
  },
  parentHidden: {
    opacity: 0,
    transform: 'translateY(50px)',
  },
  parentVisible: {
    opacity: 1,
    transform: 'translateY(0px)',
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  cardContainer: {
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  // Base overlay - always visible at bottom
  baseOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
    padding: '30px 20px 20px',
    color: 'white',
    textAlign: 'center',
  },
  baseName: {
    fontSize: '24px',
    fontWeight: '900',
    margin: '0 0 5px 0',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
  },
  baseRole: {
    fontSize: '16px',
    margin: '0',
    opacity: '0.9',
  },
  // Hover overlay - shows on hover
  hoverOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.95), rgba(168, 85, 247, 0.95))',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.4s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hoverOverlayHidden: {
    opacity: 0,
    visibility: 'hidden',
    transform: 'scale(0.8)',
  },
  hoverOverlayVisible: {
    opacity: 1,
    visibility: 'visible',
    transform: 'scale(1)',
  },
  hoverContent: {
    textAlign: 'center',
    color: 'white',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    width: '100%',
  },
  hoverName: {
    fontSize: '28px',
    fontWeight: '900',
    margin: '0',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  hoverRole: {
    fontSize: '18px',
    margin: '0',
    fontWeight: '600',
    opacity: '0.9',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'center',
    maxWidth: '250px',
  },
  skillBadge: {
    background: 'rgba(255, 255, 255, 0.25)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
  },
  socialContainer: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButton: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '2px solid rgba(255, 255, 255, 0.8)',
    background: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
  },
  socialSvg: {
    width: '24px',
    height: '24px',
    fill: '#000000',
    transition: 'all 0.3s ease',
  },
};

export default DevelopersPage;