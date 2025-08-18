import React, { useState } from 'react';
import dev1 from './assets/develop1.jpg'; 
import dev2 from './assets/develop2.jpg';

const DeveloperCard = ({ developer }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };

  // Safe event handlers that check for element existence
  const createSafeHoverHandlers = (bgColor, svgColor = 'white') => ({
    onMouseEnter: (e) => {
      const button = e.currentTarget; // Use currentTarget instead of target
      const svg = button.querySelector('svg');
      if (button) {
        button.style.background = bgColor;
      }
      if (svg) {
        svg.style.fill = svgColor;
      }
    },
    onMouseLeave: (e) => {
      const button = e.currentTarget; // Use currentTarget instead of target
      const svg = button.querySelector('svg');
      if (button) {
        button.style.background = 'rgb(255, 255, 255)';
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
        button.style.transform = 'scale(1.15)';
        button.style.boxShadow = `0 12px 30px ${bgColor}66`;
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
        button.style.transform = 'scale(1)';
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
        ...(isHovered ? styles.parentHovered : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        ...styles.card,
        ...(isHovered ? styles.cardHovered : {}),
        ...(isFlipped ? styles.cardFlipped : {})
      }}>
        {/* Animated Logo Circles */}
        <div style={styles.logo}>
          
          <span style={{...styles.circle, ...styles.circle2, ...(isHovered ? styles.circle2Hovered : {})}}></span>
          <span style={{...styles.circle, ...styles.circle3, ...(isHovered ? styles.circle3Hovered : {})}}></span>
          <span style={{...styles.circle, ...styles.circle4, ...(isHovered ? styles.circle4Hovered : {})}}></span>
          <span style={{...styles.circle, ...styles.circle5, ...(isHovered ? styles.circle5Hovered : {})}}>
            {/* Developer Avatar */}
            <div 
              style={styles.avatarContainer}
              onClick={handleImageClick}
            >
              <img 
                src={developer.image || '/default-avatar.jpg'} 
                alt={developer.name}
                style={styles.avatar}
              />
            </div>
          </span>
        </div>

        {/* Glass Effect */}
        <div style={styles.glass}></div>

        {/* Card Front */}
        <div 
          style={{
            ...styles.cardFace,
            ...styles.cardFront,
            ...(isFlipped ? styles.cardFrontFlipped : {})
          }}
          onClick={handleImageClick}
        >
          {/* Developer Content */}
<div style={styles.content}>
  {isFlipped && (
    <>
      <img 
        src={developer.image} 
        alt={developer.name} 
        style={{ 
          top:0,
          width: "58%", 
          height: "100%", 
          objectFit: "cover", 
          borderRadius: "16px" 
        }} 
      />
    </>
  )},
    {!isFlipped && (
    <>
      <span style={styles.title}>{developer.name}</span>
      <span style={styles.text}>{developer.role}</span>
      <span style={styles.description}>
        Passionate about creating innovative solutions and beautiful user experiences
      </span>
    </>
  )},

</div>


          {/* Social Buttons and Actions */}
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
                >
                  <svg viewBox="0 0 24 24" style={styles.socialSvg}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              )}
            </div>

            <div style={styles.viewMore}>
              <button 
                style={styles.viewMoreButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSocialClick( developer.portfolio || developer.linkedin);
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

        {/* Card Back - Clean Design with only Image and Social Media */}
        <div style={{
          ...styles.cardFace,
          ...styles.cardBack,
          ...(isFlipped ? styles.cardBackFlipped : {})
        }}>
          <div style={styles.backContent}>
            {/* Large Developer Image - Now shows the specific developer's image */}
            <div style={styles.backImageContainer}>
              <img 
                src={developer.image || '/default-avatar.jpg'} 
                alt={developer.name}
                style={styles.backImage}
              />
            </div>
            
            {/* Developer Name on Back */}
            <div style={styles.backNameContainer}>
              <h2 style={styles.backName}>{developer.name}</h2>
              <p style={styles.backRole}>{developer.role}</p>
            </div>
            
            {/* Social Media Icons - Large Size */}
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
              onClick={handleImageClick}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#a855f7';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.color = '#1f2937';
                e.currentTarget.style.transform = 'scale(1)';
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
      instagram: "https://www.instagram.com/_.dark_hand_/",
      github: "https://github.com/Balamurali-006",
      linkedin: "https://www.linkedin.com/in/balamurali-m-940879316/",
      portfolio : "https://balamuraliportfolio.netlify.app/"
    },
    {
      id: 2,
      name: "Deepitha",
      role: "Fullstack Developer",
      image: dev2,
      instagram: "https://www.instagram.com/afficionado_space/",
      github: "https://github.com/Deepitha123", 
      linkedin: "https://www.linkedin.com/in/deepitha-m-76961928b/",
      portfolio : "https://www.linkedin.com/in/deepitha-m-76961928b/"
    },
  ];

  return (
    <div style={styles.showcaseContainer}>
      {/* Header */}
      <div style={styles.header}>
        {onGoBack && (
          <button style={styles.backButton} onClick={onGoBack}>
            ← Back to Home
          </button>
        )}
        <h1 style={styles.mainTitle}>Meet Our Developers</h1>
        <p style={styles.subtitle}>The creative minds behind CODE-O-CLOCK</p>
      </div>

      {/* Developers Grid */}
      <div style={styles.developersGrid}>
        {developers.map((developer) => (
          <DeveloperCard key={developer.id} developer={developer} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  showcaseContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  backButton: {
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '25px',
    padding: '10px 20px',
    color: 'white',
    cursor: 'pointer',
    marginBottom: '30px',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
  },
  mainTitle: {
    fontSize: '3rem',
    fontWeight: '900',
    color: 'white',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '300',
  },
  developersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '40px',
    maxWidth: '1200px',
    width: '100%',
  },
  parent: {
    width: '320px',
    height: '380px',
    perspective: '1000px',
    margin: '0 auto',
    transition: 'transform 0.3s ease',
  },
  parentHovered: {
    transform: 'scale(1.02)',
  },
  card: {
    height: '100%',
    borderRadius: '50px',
    background: 'linear-gradient(to right, #ec4899, #a855f7, #ffffff)',
    transition: 'all 0.5s ease-in-out',
    transformStyle: 'preserve-3d',
    boxShadow: 'rgba(236, 72, 153, 0.3) 0px 25px 25px -5px, rgba(168, 85, 247, 0.2) 40px 50px 25px -40px',
    position: 'relative',
    cursor: 'pointer',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    
  },
  cardHovered: {
    transform: 'rotate3d(1, 1, 0, 15deg)',
    boxShadow: 'rgba(236, 72, 153, 0.4) 30px 50px 25px -40px, rgba(168, 85, 247, 0.3) 0px 25px 30px 0px',
  },
  cardFlipped: {
    transform: 'rotateY(180deg)',
  },
  glass: {
    transformStyle: 'preserve-3d',
    position: 'absolute',
    inset: '8px',
    borderRadius: '55px',
    borderTopRightRadius: '100%',
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.25) 100%)',
    transform: 'translate3d(0px, 0px, 25px)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.5s ease-in-out',
  },
  content: {
    padding: '120px 60px 0px 30px',
    transform: 'translate3d(0, 0, 26px)',
  },
  title: {
    display: 'block',
    color: '#1f2937',
    fontWeight: '900',
    fontSize: '22px',
    lineHeight: '1.2',
    textShadow: '1px 1px 2px rgba(255,255,255,0.3)',
  },
  text: {
    display: 'block',
    color: '#374151',
    fontSize: '16px',
    marginTop: '8px',
    fontWeight: '600',
  },
  description: {
    display: 'block',
    color: '#4b5563',
    fontSize: '13px',
    marginTop: '15px',
    lineHeight: '1.4',
  },
  bottom: {
    padding: '10px 12px',
    transformStyle: 'preserve-3d',
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    right: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transform: 'translate3d(0, 0, 26px)',
  },
  viewMore: {
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'flex-end',
    transition: 'all 0.2s ease-in-out',
  },
  viewMoreButton: {
    background: 'none',
    border: 'none',
    color: '#1f2937',
    fontWeight: 'bolder',
    fontSize: '11px',
    cursor: 'pointer',
  },
  viewMoreSvg: {
    fill: 'none',
    stroke: '#1f2937',
    strokeWidth: '3px',
    maxHeight: '15px',
    width: '15px',
  },
  socialButtonsContainer: {
    display: 'flex',
    gap: '8px',
    transformStyle: 'preserve-3d',
  },
  socialButton: {
    width: '32px',
    aspectRatio: '1',
    padding: '6px',
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '50%',
    border: '2px solid rgba(168, 85, 247, 0.3)',
    display: 'grid',
    placeContent: 'center',
    boxShadow: 'rgba(236, 72, 153, 0.3) 0px 7px 5px -5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
  },
  socialButtonHovered: {
    transform: 'translate3d(0, 0, 30px)',
    boxShadow: 'rgba(168, 85, 247, 0.4) -5px 20px 10px 0px',
  },
  socialSvg: {
    width: '16px',
    fill: '#000000',
    transition: 'fill 0.3s ease',
  },
  logo: {
    position: 'absolute',
    right: '0',
    top: '0',
    transformStyle: 'preserve-3d',
  },
  circle: {
    display: 'block',
    position: 'absolute',
    aspectRatio: '1',
    borderRadius: '50%',
    top: '0',
    right: '0',
    boxShadow: 'rgba(236, 72, 153, 0.2) -10px 10px 20px 0px',
    backdropFilter: 'blur(5px)',
    background: 'rgba(255, 255, 255, 0.1)',
    transition: 'all 0.5s ease-in-out',
    border: '1px solid rgba(168, 85, 247, 0.2)',
  },
  circle1: {
    width: '170px',
    transform: 'translate3d(0, 0, 20px)',
    top: '8px',
    right: '8px',
  },
  circle2: {
    width: '140px',
    transform: 'translate3d(0, 0, 40px)',
    top: '10px',
    right: '10px',
    backdropFilter: 'blur(1px)',
    transitionDelay: '0.4s',
  },
  circle2Hovered: {
    transform: 'translate3d(0, 0, 60px)',
  },
  circle3: {
    width: '110px',
    transform: 'translate3d(0, 0, 60px)',
    top: '17px',
    right: '17px',
    transitionDelay: '0.8s',
  },
  circle3Hovered: {
    transform: 'translate3d(0, 0, 80px)',
  },
  circle4: {
    width: '80px',
    transform: 'translate3d(0, 0, 80px)',
    top: '23px',
    right: '23px',
    transitionDelay: '1.2s',
  },
  circle4Hovered: {
    transform: 'translate3d(0, 0, 100px)',
  },
  circle5: {
    width: '50px',
    transform: 'translate3d(0, 0, 100px)',
    top: '30px',
    right: '30px',
    display: 'grid',
    placeContent: 'center',
    transitionDelay: '1.6s',
  },
  circle5Hovered: {
    transform: 'translate3d(0, 0, 120px)',
  },
  avatarContainer: {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  avatar: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  // Card Face Styles
  cardFace: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '50px',
    transition: 'transform 0.6s ease-in-out',
  },
  cardFront: {
    transform: 'rotateY(0deg)',
  },
  cardFrontFlipped: {
    transform: 'rotateY(-180deg)',
  },
  cardBack: {
    transform: 'rotateY(180deg)',
    background: 'linear-gradient(to right, #ec4899, #a855f7, #ffffff)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    
  },
  cardBackFlipped: {
    transform: 'rotateY(0deg)',
  },
  backContent: {
    padding: '30px 25px',
    textAlign: 'center',
    color: '#1f2937',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    background: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '45px',
    backdropFilter: 'blur(15px)',
    margin: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  backImageContainer: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '4px solid white',
    boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  backImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  backNameContainer: {
    textAlign: 'center',
    margin: '10px 0',
  },
  backName: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: '0 0 5px 0',
    textShadow: '1px 1px 2px rgba(255,255,255,0.3)',
  },
  backRole: {
    fontSize: '16px',
    color: '#374151',
    margin: '0',
    fontWeight: '600',
  },
  backSocialContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  backSocialButton: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: '3px solid white',
    background: 'rgba(255, 255, 255, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 20px rgba(236, 72, 153, 0.2)',
    backdropFilter: 'blur(10px)',
  },
  backSocialSvg: {
    width: '28px',
    height: '28px',
    fill: '#000000',
    transition: 'fill 0.3s ease',
  },
  flipBackButton: {
    background: 'rgba(255, 255, 255, 0.9)',
    border: '2px solid #a855f7',
    borderRadius: '25px',
    padding: '12px 25px',
    color: '#1f2937',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 20px rgba(168, 85, 247, 0.25)',
    marginTop: '5px',
  },
};
export default DevelopersPage;