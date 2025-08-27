// src/components/CodeAura.js
import React, { useRef, useState, useEffect } from "react";
import logo_saas from '../assets/SaaS22.svg'
import qr from '../assets/qr.svg'

export default function CodeAura() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);
  const [canvasSize] = useState({ width: 600, height: 900 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 250, height: 300 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  
  // Social media links (you can replace these with actual links)
  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/b-tech-artificial-intelligence-data-science/posts/?feedView=all",
    instagram: "https://www.instagram.com/b.tech_ai_ds?igsh=MXh2Zjc4dHAzNHI2Zw==",
    driveLink: "https://drive.google.com/drive/folders/1pR2pz3grq-nJyH_hsKI7sW76OqKTLS2t?usp=sharing"
  };
  
  // Portrait-oriented central area
  const centralArea = {
    x: canvasSize.width * 0.2,
    y: canvasSize.height * 0.25,
    width: canvasSize.width * 0.6, // Narrower for portrait
    height: canvasSize.height * 0.4 // Taller for portrait
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
      
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        const maxWidth = centralArea.width * 0.9;
        const maxHeight = centralArea.height * 0.9;
        
        // Prioritize height for portrait orientation
        let newHeight = maxHeight;
        let newWidth = newHeight * aspectRatio;
        
        if (newWidth > maxWidth) {
          newWidth = maxWidth;
          newHeight = newWidth / aspectRatio;
        }
        
        setImageSize({ width: newWidth, height: newHeight });
        setImagePosition({ 
          x: centralArea.x + (centralArea.width - newWidth) / 2, 
          y: centralArea.y + (centralArea.height - newHeight) / 2 
        });
        drawCanvas();
      };
      img.src = url;
    }
  };

  const autoFitAndCenter = () => {
    if (!image) return;
    
    const img = new Image();
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      const maxWidth = centralArea.width * 0.9;
      const maxHeight = centralArea.height * 0.9;
      
      // Prioritize height for portrait orientation
      let newHeight = maxHeight;
      let newWidth = newHeight * aspectRatio;
      
      if (newWidth > maxWidth) {
        newWidth = maxWidth;
        newHeight = newWidth / aspectRatio;
      }
      
      setImageSize({ width: newWidth, height: newHeight });
      setImagePosition({ 
        x: centralArea.x + (centralArea.width - newWidth) / 2, 
        y: centralArea.y + (centralArea.height - newHeight) / 2 
      });
    };
    img.src = image;
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    // Background gradient (dark pink to purple)
    const bgGradient = ctx.createLinearGradient(0, 0, canvasSize.width, canvasSize.height);
    bgGradient.addColorStop(0, '#1a0d26');
    bgGradient.addColorStop(0.3, '#2d1b3d');
    bgGradient.addColorStop(0.7, '#4c1d57');
    bgGradient.addColorStop(1, '#7c2d7c');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawHackerFrame(ctx);

    if (image) {
      const userImg = new Image();
      userImg.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(centralArea.x, centralArea.y, centralArea.width, centralArea.height, 8);
        ctx.clip();
        
        ctx.drawImage(
          userImg,
          imagePosition.x,
          imagePosition.y,
          imageSize.width,
          imageSize.height
        );
        
        ctx.restore();
      };
      userImg.src = image;
    }
  };

  const drawGlowingBox = (ctx, x, y, width, height, text, subText = '', emoji = '') => {
    // Outer glow with pink-purple gradient
    const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
    gradient.addColorStop(0, 'rgba(219, 39, 119, 0.3)');
    gradient.addColorStop(1, 'rgba(168, 85, 247, 0.3)');
    
    ctx.shadowColor = '#db2777';
    ctx.shadowBlur = 20;
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, width, height);
    
    // Border gradient
    const borderGradient = ctx.createLinearGradient(x, y, x + width, y + height);
    borderGradient.addColorStop(0, '#db2777');
    borderGradient.addColorStop(1, '#a855f7');
    ctx.strokeStyle = borderGradient;
    ctx.lineWidth = 3;
    ctx.strokeRect(x, y, width, height);
    ctx.shadowBlur = 0;
    
    // Emoji
    if (emoji) {
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(emoji, x + width/2, y + height/2 - 15);
    }
    
    // Text with gradient effect
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(text, x + width/2, y + height/2 + (emoji ? 0 : -6));
    
    if (subText) {
      ctx.fillStyle = '#e879f9';
      ctx.font = 'bold 10px "Courier New", monospace';
      ctx.fillText(subText, x + width/2, y + height/2 + (emoji ? 12 : 8));
    }
  };

  const drawHackerFrame = (ctx) => {
    // Enhanced binary pattern with shimmer effect
    ctx.fillStyle = 'rgba(219, 39, 119, 0.08)';
    ctx.font = '10px "Courier New", monospace';
    for (let i = 0; i < 80; i++) {
      const x = Math.random() * canvasSize.width;
      const y = Math.random() * canvasSize.height;
      const binary = Math.random() > 0.5 ? '1' : '0';
      const alpha = 0.05 + Math.random() * 0.15;
      ctx.fillStyle = `rgba(219, 39, 119, ${alpha})`;
      ctx.fillText(binary, x, y);
    }

    // === BADGE AREA ===
    // Black background with subtle gradient
    const badgeBg = ctx.createRadialGradient(
      centralArea.x + centralArea.width/2, centralArea.y + centralArea.height/2, 0,
      centralArea.x + centralArea.width/2, centralArea.y + centralArea.height/2, centralArea.width/2
    );
    badgeBg.addColorStop(0, '#000000');
    badgeBg.addColorStop(1, '#1a0d1a');
    ctx.fillStyle = badgeBg;
    ctx.beginPath();
    ctx.roundRect(centralArea.x, centralArea.y, centralArea.width, centralArea.height, 8);
    ctx.fill();

    // Badge border with enhanced glow
    const borderGradient = ctx.createLinearGradient(
      centralArea.x, centralArea.y,
      centralArea.x + centralArea.width, centralArea.y + centralArea.height
    );
    borderGradient.addColorStop(0, '#db2777');
    borderGradient.addColorStop(0.5, '#a855f7');
    borderGradient.addColorStop(1, '#9333ea');
    
    ctx.shadowColor = '#db2777';
    ctx.shadowBlur = 15;
    ctx.strokeStyle = borderGradient;
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.shadowBlur = 0;

    const topPadding = 80; // adjust this to push all top texts down

    ctx.textAlign = 'center';
    // === TEXTS ABOVE BADGE ===
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 23px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('COIMBATORE INSTITUTE OF TECHNOLOGY', canvasSize.width/2,  topPadding);

    ctx.font = 'bold 13px "Courier New", monospace';
    ctx.fillStyle = '#a855f7';
    ctx.fillText('DEPARTMENT OF AI & DS', canvasSize.width/2, topPadding + 18);

    // ACCESS GRANTED in GREEN with glow
    ctx.shadowColor = '#00ff00';
    ctx.shadowBlur = 10;
    ctx.fillStyle = '#00ff00';
    ctx.font = 'bold 18px "Courier New", monospace';
    ctx.fillText(">>> ACCESS GRANTED <<<", canvasSize.width/2, topPadding + 40);
    ctx.shadowBlur = 0;

    // CODE O CLOCK with enhanced glow
    ctx.shadowColor = '#db2777';
    ctx.shadowBlur = 15;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 40px "Courier New", monospace';
    ctx.fillText('CODE-O-CLOCK', canvasSize.width/2, topPadding + 80);
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#a855f7';
    ctx.font = 'bold 16px "Courier New", monospace';
    ctx.fillText('24 HRS HACKATHON', canvasSize.width/2,topPadding +  100);

    // Enhanced "I am participating in COC 2K25" text with stylish font effect
    ctx.shadowColor = '#e879f9';
    ctx.shadowBlur = 20;
    
    // Create gradient for the participation text
    const participationGradient = ctx.createLinearGradient(
      0, centralArea.y - 30, canvasSize.width, centralArea.y - 10
    );
    participationGradient.addColorStop(0, '#ff6b9d');
    participationGradient.addColorStop(0.5, '#ffffff');
    participationGradient.addColorStop(1, '#c084fc');
    
    ctx.fillStyle = participationGradient;
    ctx.font = 'bold 100px , "Arial Black", sans-serif';
    ctx.fillText('PROUD PARTICIPANT OF COC!', canvasSize.width/2, centralArea.y - 15);
    ctx.shadowBlur = 0;

    // === BELOW BADGE WITH MORE GAP ===

    
    const gapAfterBadge = 40;
    
    // Title sponsor text with more gap
    ctx.fillStyle = '#e879f9';
    ctx.font = 'bold 18px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('TITLE SPONSOR', canvasSize.width/2, centralArea.y + centralArea.height + gapAfterBadge);

    // Sponsor logo with adjusted position
    const sponsorW = 140;
    const sponsorH = 60;
    const sponsorX = (canvasSize.width - sponsorW) / 2;
    const sponsorY = centralArea.y + centralArea.height + gapAfterBadge + 10;

    // Load and draw sponsor logo
    const sponsorLogo = new Image();
    sponsorLogo.onload = () => {
      ctx.drawImage(sponsorLogo, sponsorX, sponsorY, sponsorW, sponsorH);
    };
    sponsorLogo.onerror = () => {
      // Fallback if image fails to load
      ctx.fillStyle = '#222';
      ctx.fillRect(sponsorX, sponsorY, sponsorW, sponsorH);
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px "Courier New", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('SPONSOR LOGO', sponsorX + sponsorW/2, sponsorY + sponsorH/2);
    };
    sponsorLogo.src = logo_saas;

    // Left glowing box - Internships with laptop emoji
    const leftBoxW = 120;
    const leftBoxH = 50;
    const leftBoxX = sponsorX - leftBoxW - 20;
    const leftBoxY = sponsorY + 5;
    drawGlowingBox(ctx, leftBoxX, leftBoxY, leftBoxW, leftBoxH, 'INTERNSHIPS', 'FOR TOP TEAMS', '💻');

    // Right glowing box - Prize Pool with prize emoji
    const rightBoxW = 120;
    const rightBoxH = 50;
    const rightBoxX = sponsorX + sponsorW + 20;
    const rightBoxY = sponsorY + 5;
    drawGlowingBox(ctx, rightBoxX, rightBoxY, rightBoxW, rightBoxH, '₹50K PRIZE', 'POOL', '🏆');

    // "REGISTER NOW" ABOVE QR with adjusted position
    const qrSize = 100;
    const qrX = (canvasSize.width - qrSize) / 2;
    const qrY = sponsorY + sponsorH + 40;

    ctx.fillStyle = '#e879f9';
    ctx.font = 'bold 14px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('REGISTER NOW!', canvasSize.width/2, qrY - 10);

    // QR code
    const qrCode = new Image();
    qrCode.onload = () => {
      ctx.drawImage(qrCode, qrX, qrY, qrSize, qrSize);
    };
    qrCode.onerror = () => {
      // Fallback if image fails to load
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(qrX, qrY, qrSize, qrSize);
      ctx.fillStyle = '#000000';
      ctx.font = '10px "Courier New", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('QR CODE', qrX + qrSize / 2, qrY + qrSize / 2);
    };
    qrCode.src = qr;

    // Date above footer
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('26 SEP 2K25', canvasSize.width/2, canvasSize.height - 35);

    // Footer
    ctx.fillStyle = '#db2777';
    ctx.font = 'bold 16px "Courier New", monospace';
    ctx.fillText('BREAK • HACK • INNOVATE • REPEAT', canvasSize.width/2, canvasSize.height - 15);
  };

  useEffect(() => {
    if (!showModal && !showWelcomeModal) {
      drawCanvas();
    }
  }, [image, imagePosition, imageSize, canvasSize, showModal, showWelcomeModal]);

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (x >= imagePosition.x && x <= imagePosition.x + imageSize.width &&
        y >= imagePosition.y && y <= imagePosition.y + imageSize.height) {
      setIsDragging(true);
      setDragStart({ x: x - imagePosition.x, y: y - imagePosition.y });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setImagePosition({ x: x - dragStart.x, y: y - dragStart.y });
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "code-o-clock-2025-hacker-badge.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const shareWithBadge = (platform) => {
    const canvas = canvasRef.current;
    canvas.toBlob((blob) => {
      const file = new File([blob], 'code-o-clock-badge.png', { type: 'image/png' });
      const messages = {
        whatsapp: "I am participating in Code-O-Clock 2k25! 💻 Ready to code for 24 hours straight! #CIT #AI #COC2k25 #Coding #SaaS22",
        linkedin: "I am participating in Code-O-Clock 2k25! 💻 Ready to code for 24 hours straight! #CIT #AI #COC2k25 #Coding #SaaS22",
        instagram: "I am participating in Code-O-Clock 2k25! 💻 Ready to code for 24 hours straight! #CIT #AI #COC2k25 #Coding #SaaS22",
        drive: "Uploading to Google Drive..."
      };

      if (platform === 'drive') {
        // Open drive link for uploading
        window.open(socialLinks.driveLink, '_blank');
        downloadImage();
        alert('Badge downloaded! Please upload to the Drive folder that opened.');
        return;
      }

      if (navigator.share) {
        navigator.share({
          title: 'Code O Clock 2025',
          text: messages[platform],
          files: [file]
        }).catch(() => {
          downloadImage();
          alert(`Badge downloaded! Share with: ${messages[platform]}`);
        });
      } else {
        const urls = {
          whatsapp: `https://wa.me/?text=${encodeURIComponent(messages[platform])}`,
          linkedin: `https://www.linkedin.com/sharing/share-offsite/?text=${encodeURIComponent(messages[platform])}`
        };
        if (urls[platform]) {
          window.open(urls[platform], '_blank');
        } else {
          downloadImage();
          alert(`Badge downloaded! Share with: ${messages[platform]}`);
        }
      }
    }, 'image/png');
  };

  // Welcome Modal
  if (showWelcomeModal) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50 p-4">
        <div className="bg-black border-2 border-pink-500 p-4 sm:p-8 rounded-lg max-w-lg mx-4 relative overflow-hidden w-full">
          {/* Binary background for modal */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({length: 20}).map((_, i) => (
              <div key={i} className="absolute text-pink-400 font-mono text-xs animate-pulse" 
                   style={{
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                     animationDelay: `${Math.random() * 2}s`
                   }}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-6">
              <div className="text-3xl sm:text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2">
                # CODEAURA
              </div>
              <div className="text-pink-400 font-mono text-xs sm:text-sm animate-pulse">
                {'<>'} Recognizing Every Coder {'</>'}
              </div>
            </div>
            
            <div className="bg-black border border-pink-500/50 p-3 sm:p-4 rounded mb-6">
              <h3 className="text-lg sm:text-xl font-mono text-pink-400 mb-3">[CONTEST_REQUIREMENTS]</h3>
              <div className="space-y-2 text-purple-400 font-mono text-xs sm:text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-green-400 min-w-[16px]">✓</span>
                  <span>You must be a COC 2K25 participant!</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-400 min-w-[16px]">✓</span>
                  <span>Follow our social media handles:</span>
                </p>
                <div className="ml-6 space-y-1">
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" 
                     className="block text-blue-400 hover:text-blue-300 underline">
                    📘 LinkedIn - CIT AI & DS
                  </a>
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" 
                     className="block text-pink-400 hover:text-pink-300 underline">
                    📸 Instagram - @cit_ai_ds
                  </a>
                </div>
              </div>
              <div className="mt-4 text-pink-400 font-mono text-xs">
                ▶ Contest validation system ready<br/>
                ▶ Social media verification active<br/>
                ▶ Badge generator standby<br/>
                ▶ Awaiting participant confirmation...
              </div>
            </div>
            
            <button
              onClick={() => {
                setShowWelcomeModal(false);
                setShowModal(true);
              }}
              className="w-full px-4 sm:px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-mono font-bold rounded transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              [PROCEED_TO_CODEAURA]
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Initialization Modal
  if (showModal) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50 p-4">
        <div className="bg-black border-2 border-pink-500 p-4 sm:p-8 rounded-lg max-w-md mx-4 relative overflow-hidden w-full">
          {/* Binary background for modal */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({length: 20}).map((_, i) => (
              <div key={i} className="absolute text-pink-400 font-mono text-xs animate-pulse" 
                   style={{
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                     animationDelay: `${Math.random() * 2}s`
                   }}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-6">
              <div className="text-3xl sm:text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2">
                ⏰ CODE O CLOCK
              </div>
              <div className="text-pink-400 font-mono text-xs sm:text-sm animate-pulse">
                {'<>'} INITIALIZING SYSTEM {'</>'}
              </div>
            </div>
            
            <div className="bg-black border border-pink-500/50 p-3 sm:p-4 rounded mb-6">
              <h3 className="text-lg sm:text-xl font-mono text-pink-400 mb-2">[INITIALIZATION_REQUIRED]</h3>
              <p className="text-purple-400 font-mono text-xs sm:text-sm">
                Upload your image to generate a hacker badge for Code O Clock 2025.
              </p>
              <div className="mt-4 text-pink-400 font-mono text-xs">
                ▶ Portrait orientation loaded<br/>
                ▶ Canvas system ready<br/>
                ▶ Badge generator online<br/>
                ▶ Waiting for user input...
              </div>
            </div>
            
            <button
              onClick={() => setShowModal(false)}
              className="w-full px-4 sm:px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-mono font-bold rounded transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              [INITIALIZE_BADGE_GENERATOR]
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <div className="container mx-auto px-4 py-4 sm:py-8 relative z-10">
        <div className="text-center py-4 sm:py-8 border-b border-pink-500/30">
          <div className="flex justify-center items-center gap-2 sm:gap-4 mb-4">
            <span className="text-2xl sm:text-4xl">⏰</span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-mono">
              CODE <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">O</span> CLOCK
            </h1>
            <span className="text-2xl sm:text-4xl">💻</span>
          </div>
          <p className="text-pink-400 text-sm sm:text-xl font-mono animate-pulse">
            {'<'} HACKER_BADGE_GENERATOR.exe {'>'}
          </p>
        </div>

        <div className="flex justify-center mb-4 sm:mb-8 mt-4 sm:mt-8">
          <div className="bg-black border-2 border-pink-500/50 p-4 sm:p-8 rounded-lg w-full max-w-lg">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload}
              className="block w-full text-white text-sm file:mr-4 file:py-2 sm:file:py-4 file:px-4 sm:file:px-8 file:rounded file:border-0 file:bg-gradient-to-r file:from-pink-500 file:to-purple-600 file:cursor-pointer cursor-pointer file:font-mono file:font-bold file:text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-4 sm:gap-8 max-w-7xl mx-auto">
          <div className="flex-1 flex justify-center">
            <div className="bg-black border-2 border-purple-500/50 p-3 sm:p-6 rounded-lg flex justify-center w-full overflow-auto">
              <canvas
                ref={canvasRef}
                width={canvasSize.width}
                height={canvasSize.height}
                className="border-2 border-pink-500 rounded cursor-move max-h-[70vh] sm:max-h-[90vh] w-auto max-w-full"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
              />
            </div>
          </div>

          {image && (
            <div className="w-full xl:w-96 bg-black border-2 border-purple-500/50 p-4 sm:p-6 rounded-lg">
              <div className="text-center mb-4 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-mono text-lg sm:text-xl font-bold">[HACKER_CONSOLE]</span>
              </div>

              <div className="mb-4 sm:mb-6 space-y-4 border-b border-pink-500/30 pb-4 sm:pb-6">
                <h3 className="font-mono text-pink-400 text-sm text-center">[IMAGE_CONTROLS]</h3>
                
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={autoFitAndCenter}
                    className="flex-1 px-3 py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-mono text-xs rounded"
                  >
                    AUTO FIT
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div>
                    <label className="block text-xs font-mono text-purple-400 mb-1">WIDTH</label>
                    <input
                      type="range"
                      min="50"
                      max="400"
                      value={imageSize.width}
                      onChange={(e) => setImageSize({...imageSize, width: parseInt(e.target.value)})}
                      className="w-full accent-pink-500"
                    />
                    <span className="text-xs font-mono text-white">{Math.round(imageSize.width)}</span>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-mono text-purple-400 mb-1">HEIGHT</label>
                    <input
                      type="range"
                      min="50"
                      max="500"
                      value={imageSize.height}
                      onChange={(e) => setImageSize({...imageSize, height: parseInt(e.target.value)})}
                      className="w-full accent-pink-500"
                    />
                    <span className="text-xs font-mono text-white">{Math.round(imageSize.height)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div>
                    <label className="block text-xs font-mono text-purple-400 mb-1">X-AXIS</label>
                    <input
                      type="range"
                      min="0"
                      max={canvasSize.width}
                      value={imagePosition.x}
                      onChange={(e) => setImagePosition({...imagePosition, x: parseInt(e.target.value)})}
                      className="w-full accent-purple-500"
                    />
                    <span className="text-xs font-mono text-white">{Math.round(imagePosition.x)}</span>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-mono text-purple-400 mb-1">Y-AXIS</label>
                    <input
                      type="range"
                      min="0"
                      max={canvasSize.height}
                      value={imagePosition.y}
                      onChange={(e) => setImagePosition({...imagePosition, y: parseInt(e.target.value)})}
                      className="w-full accent-purple-500"
                    />
                    <span className="text-xs font-mono text-white">{Math.round(imagePosition.y)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={downloadImage}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-mono text-xs sm:text-sm font-bold rounded mb-4 sm:mb-6 transition-all duration-300 transform hover:scale-105"
              >
                [DOWNLOAD_HACKER_BADGE]
              </button>

              <div className="border-t border-pink-500/30 pt-4 sm:pt-6">
                <h3 className="font-mono text-pink-400 mb-4 text-sm text-center">[SOCIAL_INFILTRATION]</h3>
                <div className="space-y-2 sm:space-y-3">
                  <button
                    onClick={() => shareWithBadge('whatsapp')}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-green-600 hover:bg-green-500 text-white font-mono text-xs sm:text-sm rounded flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
                  >
                    📱 WHATSAPP_HACK
                  </button>
                  <button
                    onClick={() => shareWithBadge('linkedin')}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-blue-700 hover:bg-blue-600 text-white font-mono text-xs sm:text-sm rounded flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
                  >
                    💼 LINKEDIN_BREACH
                  </button>
                  <button
                    onClick={() => shareWithBadge('instagram')}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-mono text-xs sm:text-sm rounded flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
                  >
                    📸 INSTA_INFILTRATE
                  </button>
                  <button
                    onClick={() => shareWithBadge('drive')}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-mono text-xs sm:text-sm rounded flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
                  >
                    💾 UPLOAD_TO_DRIVE
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {!image && (
          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-black border-2 border-pink-500/30 p-4 sm:p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-mono text-pink-400 mb-4">[READY_FOR_IMAGE_UPLOAD]</h3>
              <p className="text-purple-400 font-mono text-sm">System initialized. Upload your image to generate your personalized hacker badge.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};