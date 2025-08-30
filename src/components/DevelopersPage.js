import React, { useState, useEffect } from 'react';
import dev1 from '../assets/develop1 (2).jpg';
import dev2 from '../assets/develop2.png';


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
        <div style={styles.cardContainer}>
          <img 
            src={developer.image || '/api/placeholder/300/400'} 
            alt={developer.name}
            style={styles.cardImage}
          />
          
          <div style={styles.baseOverlay}>
            <h3 style={styles.baseName}>{developer.name}</h3>
            <p style={styles.baseRole}>{developer.role}</p>
            {developer.quote && (
              <p style={styles.baseQuote}>"{developer.quote}"</p>
            )}
          </div>

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
              
              <div style={styles.socialSection}>
                <div style={styles.sectionTitle}>Connect & Explore</div>
                <div style={styles.socialContainer}>
                  {developer.portfolio && (
                    <div style={styles.socialButtonWrapper}>
                      <button 
                        style={styles.portfolioButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSocialClick(developer.portfolio);
                        }}
                        title="Portfolio"
                      >
                        <svg viewBox="0 0 24 24" style={styles.portfolioSvg}>
                          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 15H4V8h5.08L12 10.83 14.92 8H20v11z"/>
                        </svg>
                      </button>
                      <span style={styles.socialLabel}>Portfolio</span>
                    </div>
                  )}

                  {developer.github && (
                    <div style={styles.socialButtonWrapper}>
                      <button 
                        style={styles.githubButton}
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
                      <span style={styles.socialLabel}>GitHub</span>
                    </div>
                  )}

                  {developer.linkedin && (
                    <div style={styles.socialButtonWrapper}>
                      <button 
                        style={styles.linkedinButton}
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
                      <span style={styles.socialLabel}>LinkedIn</span>
                    </div>
                  )}

                  {developer.instagram && (
                    <div style={styles.socialButtonWrapper}>
                      <button 
                        style={styles.instagramButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSocialClick(developer.instagram);
                        }}
                        title="Instagram"
                      >
                        <svg viewBox="0 0 24 24" style={styles.socialSvg}>
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.40-1.439-1.40z"/>
                        </svg>
                      </button>
                      <span style={styles.socialLabel}>Instagram</span>
                    </div>
                  )}
                </div>
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
      quote: "I don't just write code, I craft solutions with purpose and curiosity.",
      image: dev1,
      skills: ["React", "Next", "PHP", "MongoDB"],
      instagram: "https://www.instagram.com/.dark_hand/",
      github: "https://github.com/Balamurali-006",
      linkedin: "https://www.linkedin.com/in/balamurali-m-940879316/",
      portfolio: "https://balamuraliportfolio.netlify.app/"
    },
    {
      id: 2,
      name: "Deepitha",
      role: "Fullstack Developer",
      quote: "Developing isn't just about code — it's about curiosity meeting intention.",
      image: dev2,
      skills: ["React", "Python", "MySQL", "Java"],
      instagram: "https://www.instagram.com/afficionado_space/",
      github: "https://github.com/Deepitha123", 
      linkedin: "https://www.linkedin.com/in/deepitha-m-76961928b/",
      portfolio: "https://drive.google.com/file/d/1JP42mgaIlCMrFEe8-4NuzxR5IexdTv0I/view?usp=sharing"
    },
  ];

  return (
    <div style={styles.showcaseContainer}>
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

      <div style={styles.developersGrid}>
        {developers.map((developer, index) => (
          <DeveloperCard key={developer.id} developer={developer} index={index} />
        ))}
      </div>

      <div style={styles.careerSection}>
        <div style={styles.careerHeader}>
          <h2 style={styles.careerTitle}>
            Our <span style={styles.gradientText}>Vision</span>
          </h2>
          <div style={styles.decorativeLine}></div>
        </div>
        
        <div style={styles.careerContent}>
          <div style={styles.objectiveCard}>
            <div style={styles.objectiveIcon}>🎯</div>
            <p style={styles.careerText}>
              We are passionate AI students focusing on solving real world problems through innovative technology solutions.
            </p>
          </div>
          
          <div style={styles.objectiveCard}>
            <div style={styles.objectiveIcon}>🚀</div>
            <p style={styles.careerText}>
              Our mission is to leverage cutting-edge Artificial Intelligence to create meaningful impact and drive positive change in society.
            </p>
          </div>
        </div>
      </div>

      <div style={styles.statsContainer}>
        <div style={styles.statBox}>
          <div style={styles.statIcon}>🧠</div>
          <div style={styles.statNumber}>2</div>
          <div style={styles.statLabel}>Talented Minds</div>
          <div style={styles.statDescription}>Dedicated professionals</div>
        </div>
        <div style={styles.statBox}>
          <div style={styles.statIcon}>💼</div>
          <div style={styles.statNumber}>10+</div>
          <div style={styles.statLabel}>Projects</div>
          <div style={styles.statDescription}>Successfully completed</div>
        </div>
        <div style={styles.statBox}>
          <div style={styles.statIcon}>⚡</div>
          <div style={styles.statNumber}>100%</div>
          <div style={styles.statLabel}>Dedication</div>
          <div style={styles.statDescription}>To excellence</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  showcaseContainer: {
    minHeight: '100vh',
    width: '100%',
    background: window.innerWidth <= 768 
      ? `
        radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.4) 0%, transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.4) 0%, transparent 60%),
        radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
        linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)
      `
      : `
        radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
        linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)
      `,
    backgroundSize: '100% 100%',
    backgroundAttachment: 'fixed',
    padding: window.innerWidth <= 768 ? '20px 10px' : '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    textAlign: 'center',
    marginBottom: window.innerWidth <= 768 ? '40px' : '60px',
    zIndex: 1,
    position: 'relative',
  },
  backButton: {
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '25px',
    padding: window.innerWidth <= 768 ? '10px 20px' : '12px 24px',
    color: 'white',
    cursor: 'pointer',
    marginBottom: window.innerWidth <= 768 ? '20px' : '30px',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    fontSize: window.innerWidth <= 768 ? '13px' : '14px',
    fontWeight: '500',
  },
  titleSection: {
    marginBottom: window.innerWidth <= 768 ? '20px' : '40px',
  },
  mainTitle: {
    fontSize: window.innerWidth <= 768 ? '2.2rem' : window.innerWidth <= 1024 ? '2.8rem' : '3.5rem',
    fontWeight: '900',
    color: 'white',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    lineHeight: '1.1',
    padding: window.innerWidth <= 768 ? '0 10px' : '0',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
  subtitle: {
    fontSize: window.innerWidth <= 768 ? '1rem' : '1.3rem',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '300',
    marginBottom: '0',
    padding: window.innerWidth <= 768 ? '0 15px' : '0',
  },
  developersGrid: {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : window.innerWidth <= 1024 
      ? 'repeat(auto-fit, minmax(280px, 1fr))' 
      : 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: window.innerWidth <= 768 ? '30px' : '50px',
    maxWidth: '1200px',
    width: '100%',
    zIndex: 1,
    position: 'relative',
    padding: window.innerWidth <= 768 ? '0 10px' : '0',
  },
  parent: {
    width: window.innerWidth <= 768 ? '280px' : '300px',
    height: window.innerWidth <= 768 ? '360px' : '400px',
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
  baseOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
    padding: window.innerWidth <= 768 ? '25px 15px 15px' : '30px 20px 20px',
    color: 'white',
    textAlign: 'center',
  },
  baseName: {
    fontSize: window.innerWidth <= 768 ? '20px' : '24px',
    fontWeight: '900',
    margin: '0 0 5px 0',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
  },
  baseRole: {
    fontSize: window.innerWidth <= 768 ? '14px' : '16px',
    margin: '0',
    opacity: '0.9',
  },
  baseQuote: {
    fontSize: window.innerWidth <= 768 ? '12px' : '14px',
    margin: '8px 0 0 0',
    opacity: '0.9',
    fontStyle: 'italic',
    color: 'rgba(255, 255, 255, 0.85)',
    textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
    lineHeight: '1.4',
    textAlign: 'center',
  },
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
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: window.innerWidth <= 768 ? '15px' : '20px',
    width: '100%',
    padding: window.innerWidth <= 768 ? '0 15px' : '0',
  },
  hoverName: {
    fontSize: window.innerWidth <= 768 ? '22px' : '28px',
    fontWeight: '900',
    margin: '0',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  hoverRole: {
    fontSize: window.innerWidth <= 768 ? '16px' : '18px',
    margin: '0',
    fontWeight: '600',
    opacity: '0.9',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: window.innerWidth <= 768 ? '6px' : '8px',
    justifyContent: 'center',
    maxWidth: window.innerWidth <= 768 ? '220px' : '250px',
  },
  skillBadge: {
    background: 'rgba(255, 255, 255, 0.25)',
    color: 'black',
    padding: window.innerWidth <= 768 ? '6px 12px' : '8px 16px',
    borderRadius: '20px',
    fontSize: window.innerWidth <= 768 ? '10px' : '12px',
    fontWeight: '600',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
  },
  socialSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: window.innerWidth <= 768 ? '12px' : '16px',
  },
  sectionTitle: {
    fontSize: window.innerWidth <= 768 ? '14px' : '16px',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.9)',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    letterSpacing: '0.5px',
    marginBottom: '4px',
  },
  socialContainer: {
    display: 'flex',
    gap: window.innerWidth <= 768 ? '12px' : '16px',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  socialButtonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: window.innerWidth <= 768 ? '6px' : '8px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  socialLabel: {
    fontSize: window.innerWidth <= 768 ? '9px' : '11px',
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.8)',
    textShadow: '1px 1px 2px rgba(0,0,0,0.4)',
    letterSpacing: '0.3px',
  },
  portfolioButton: {
    width: window.innerWidth <= 768 ? '48px' : '56px',
    height: window.innerWidth <= 768 ? '48px' : '56px',
    borderRadius: '16px',
    border: '3px solid rgba(255, 215, 0, 0.9)',
    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.95), rgba(255, 193, 7, 0.95))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 12px 30px rgba(255, 215, 0, 0.4), 0 6px 15px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    backdropFilter: 'blur(10px)',
  },
  portfolioSvg: {
    width: window.innerWidth <= 768 ? '22px' : '26px',
    height: window.innerWidth <= 768 ? '22px' : '26px',
    fill: '#1a1a1a',
    transition: 'all 0.3s ease',
    zIndex: 2,
  },
  githubButton: {
    width: window.innerWidth <= 768 ? '44px' : '52px',
    height: window.innerWidth <= 768 ? '44px' : '52px',
    borderRadius: '50%',
    border: '3px solid rgba(88, 166, 255, 0.8)',
    background: 'linear-gradient(135deg, rgba(36, 41, 47, 0.95), rgba(22, 27, 34, 0.95))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 25px rgba(88, 166, 255, 0.3), 0 5px 12px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    backdropFilter: 'blur(10px)',
  },
  linkedinButton: {
    width: window.innerWidth <= 768 ? '44px' : '52px',
    height: window.innerWidth <= 768 ? '44px' : '52px',
    borderRadius: '50%',
    border: '3px solid rgba(10, 102, 194, 0.8)',
    background: 'linear-gradient(135deg, rgba(10, 102, 194, 0.95), rgba(0, 119, 181, 0.95))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 25px rgba(10, 102, 194, 0.4), 0 5px 12px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    backdropFilter: 'blur(10px)',
  },
  instagramButton: {
    width: window.innerWidth <= 768 ? '44px' : '52px',
    height: window.innerWidth <= 768 ? '44px' : '52px',
    borderRadius: '50%',
    border: '3px solid rgba(225, 48, 108, 0.8)',
    background: 'linear-gradient(135deg, rgba(225, 48, 108, 0.95), rgba(188, 42, 141, 0.95), rgba(129, 52, 175, 0.95))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 25px rgba(225, 48, 108, 0.4), 0 5px 12px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    backdropFilter: 'blur(10px)',
  },
  socialSvg: {
    width: window.innerWidth <= 768 ? '20px' : '24px',
    height: window.innerWidth <= 768 ? '20px' : '24px',
    fill: '#ffffff',
    transition: 'all 0.3s ease',
    zIndex: 2,
  },
  // Career Section Styles
  careerSection: {
    marginTop: window.innerWidth <= 768 ? '50px' : '80px',
    marginBottom: window.innerWidth <= 768 ? '40px' : '60px',
    maxWidth: '1200px',
    width: '100%',
    zIndex: 1,
    position: 'relative',
    padding: window.innerWidth <= 768 ? '0 10px' : '0',
  },
  careerHeader: {
    textAlign: 'center',
    marginBottom: window.innerWidth <= 768 ? '40px' : '60px',
  },
  careerTitle: {
    fontSize: window.innerWidth <= 768 ? '2rem' : window.innerWidth <= 1024 ? '2.5rem' : '3rem',
    fontWeight: '900',
    color: 'white',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    padding: window.innerWidth <= 768 ? '0 10px' : '0',
  },
  decorativeLine: {
    width: '100px',
    height: '4px',
    background: 'linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)',
    margin: '0 auto',
    borderRadius: '2px',
  },
  careerContent: {
    display: window.innerWidth <= 768 ? 'flex' : 'grid',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    gridTemplateColumns: window.innerWidth <= 768 
      ? 'none' 
      : window.innerWidth <= 1024 
      ? 'repeat(auto-fit, minmax(350px, 1fr))' 
      : 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: window.innerWidth <= 768 ? '20px' : '40px',
    padding: window.innerWidth <= 768 ? '0 5px' : '0 20px',
    alignItems: window.innerWidth <= 768 ? 'center' : 'stretch',
    justifyContent: 'center',
  },
  objectiveCard: {
    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
    backdropFilter: 'blur(20px)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '25px',
    padding: window.innerWidth <= 768 ? '25px 20px' : '40px 30px',
    textAlign: 'center',
    transition: 'all 0.4s ease',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    cursor: 'default',
    position: 'relative',
    overflow: 'hidden',
    width: window.innerWidth <= 768 ? '90%' : 'auto',
    maxWidth: window.innerWidth <= 768 ? '320px' : 'none',
    margin: window.innerWidth <= 768 ? '0 auto' : '0',
  },
  objectiveIcon: {
    fontSize: window.innerWidth <= 768 ? '2.5rem' : '3rem',
    marginBottom: window.innerWidth <= 768 ? '20px' : '25px',
    display: 'block',
    filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.6))',
  },
  careerText: {
    fontSize: window.innerWidth <= 768 ? '1rem' : '1.2rem',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.6',
    fontWeight: '400',
    margin: '0',
    textAlign: 'center',
    letterSpacing: '0.3px',
  },
  // Statistics Section
  statsContainer: {
    display: window.innerWidth <= 768 ? 'flex' : 'grid',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    gridTemplateColumns: window.innerWidth <= 768 
      ? 'none' 
      : window.innerWidth <= 1024 
      ? 'repeat(auto-fit, minmax(200px, 1fr))' 
      : 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: window.innerWidth <= 768 ? '20px' : '40px',
    maxWidth: '1000px',
    width: '100%',
    marginTop: window.innerWidth <= 768 ? '50px' : '80px',
    zIndex: 1,
    position: 'relative',
    padding: window.innerWidth <= 768 ? '0 10px' : '0',
    alignItems: window.innerWidth <= 768 ? 'center' : 'stretch',
    justifyContent: 'center',
  },
  statBox: {
    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
    backdropFilter: 'blur(15px)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '25px',
    padding: window.innerWidth <= 768 ? '30px 25px' : '50px 30px',
    textAlign: 'center',
    transition: 'all 0.4s ease',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
    cursor: 'default',
    position: 'relative',
    overflow: 'hidden',
    width: window.innerWidth <= 768 ? '85%' : 'auto',
    maxWidth: window.innerWidth <= 768 ? '280px' : 'none',
    margin: window.innerWidth <= 768 ? '0 auto' : '0',
  },
  statIcon: {
    fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
    marginBottom: window.innerWidth <= 768 ? '15px' : '20px',
    display: 'block',
    filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))',
  },
  statNumber: {
    fontSize: window.innerWidth <= 768 ? '2.8rem' : '3.5rem',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    marginBottom: window.innerWidth <= 768 ? '12px' : '15px',
    textShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
  },
  statLabel: {
    fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.3rem',
    color: 'rgba(255, 255, 255, 0.95)',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: window.innerWidth <= 768 ? '6px' : '8px',
  },
  statDescription: {
    fontSize: window.innerWidth <= 768 ? '0.85rem' : '0.95rem',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '400',
    fontStyle: 'italic',
  },
};
export default DevelopersPage;