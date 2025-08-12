import React from 'react';
import { Link } from 'wouter';
import backgroundImage from './assets/background.jpg';

export default function Solutions() {
  const [expandedCard, setExpandedCard] = React.useState(null);

  const industries = [
    
    { 
      name: 'Mobile Application Development', 
      icon: '📱', 
      description: 'Cross-platform mobile apps with real-time data synchronization and offline capabilities for seamless user experiences.', 
      img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D'
    },
    { 
      name: 'Hospitality', 
      icon: '🏨', 
      description:'Applications for hotels, restaurants, and travel agencies to enhance customer engagement.', 
      img: 'https://plus.unsplash.com/premium_photo-1661302861607-6f3c68a2140d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWxpdHl8ZW58MHx8MHx8fDA%3D0'
    },
    { 
      name: 'Real Estate',  
      description: 'Virtual tours and interactive 3D layouts to showcase properties remotely with lifelike precision.', 
      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
    },
    { 
      name: 'Entertainment', 
      
      description: 'Immersive gaming experiences with real-time interaction and enhanced realism.', 
      img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80'
    },
    { 
      name: 'Virtual Reality (VR)', 
      icon: '🕶', 
      description: 'Immersive VR experiences for training, design, entertainment, and collaboration in fully virtual environments.', 
      img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlydHVhbCUyMHJlYWxpdHl8ZW58MHx8MHx8fDA%3D'
    },
    { 
      name: '3D Modeling', 
      icon: '🖌', 
      description: 'High-detail 3D models for product design, architecture, and simulation with realistic rendering.', 
      img: 'https://images.unsplash.com/photo-1719345539016-f84748d48e37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fDNEJTIwbW9kZWxsaW5nfGVufDB8fDB8fHww'
    },
  ];

  const styles = {
    pageHeader: {
      padding: 'var(--spacing-3xl) 0 var(--spacing-2xl)',
      paddingTop: '120px',
      textAlign: 'center',
      marginBottom: 'var(--spacing-2xl)',
    },
    sectionTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: 'var(--spacing-3xl)',
      position: 'relative'
    },
    industriesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: 'var(--spacing-xl)',
      padding: 'var(--spacing-lg) 0'
    },
    industryCard: {
      position: 'relative',
      height: '320px',
      borderRadius: '24px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      background: 'linear-gradient(135deg, rgba(163, 75, 110, 0.15) 0%, rgba(110, 75, 195, 0.15) 50%, rgba(69, 183, 209, 0.15) 100%)',
      border: '1px solid rgba(110, 75, 195, 0.2)',
      backdropFilter: 'blur(15px)',
      boxShadow: '0 0 0 1px rgba(163, 75, 110, 0.1), 0 0 20px rgba(110, 75, 195, 0.15), 0 0 40px rgba(69, 183, 209, 0.1)'
    },
    expandedCard: {
      height: '480px'
    },
    expandedCardBackground: {
      opacity: 0.65,
      filter: 'brightness(0.3) contrast(1.2) saturate(1.3)'
    },
    expandedCardOverlay: {
      opacity: 0.85,
      background: `
        radial-gradient(circle at 20% 80%, rgba(163, 75, 110, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(110, 75, 195, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(69, 183, 209, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, 
          rgba(15, 20, 30, 0.9) 0%, 
          rgba(25, 30, 40, 0.85) 25%, 
          rgba(20, 25, 35, 0.9) 50%, 
          rgba(25, 30, 40, 0.85) 75%, 
          rgba(15, 20, 30, 0.95) 100%
        )
      `,
      animation: 'gradientShift 8s ease-in-out infinite'
    },
    expandedPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(163, 75, 110, 0.08) 2px, transparent 2px),
        radial-gradient(circle at 75% 75%, rgba(110, 75, 195, 0.08) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(69, 183, 209, 0.05) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px, 40px 40px, 80px 80px',
      backgroundPosition: '0 0, 20px 20px, 40px 40px',
      opacity: 0,
      animation: 'patternFade 0.8s ease-out forwards, patternFloat 6s ease-in-out infinite',
      zIndex: 2
    },
    motionLayer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0,
      animation: 'motionFade 1s ease-out forwards',
      zIndex: 1,
      overflow: 'hidden'
    },
    orb1: {
      position: 'absolute',
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(163, 75, 110, 0.4) 0%, rgba(163, 75, 110, 0.1) 40%, transparent 70%)',
      top: '20%',
      left: '10%',
      animation: 'orb1Motion 12s ease-in-out infinite, orbGlow 3s ease-in-out infinite alternate',
      filter: 'blur(2px)'
    },
    orb2: {
      position: 'absolute',
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(110, 75, 195, 0.5) 0%, rgba(110, 75, 195, 0.15) 40%, transparent 70%)',
      top: '60%',
      right: '15%',
      animation: 'orb2Motion 15s ease-in-out infinite reverse, orbGlow 4s ease-in-out infinite alternate-reverse',
      filter: 'blur(1px)'
    },
    orb3: {
      position: 'absolute',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(69, 183, 209, 0.3) 0%, rgba(69, 183, 209, 0.1) 50%, transparent 80%)',
      top: '35%',
      right: '25%',
      animation: 'orb3Motion 18s ease-in-out infinite, orbGlow 5s ease-in-out infinite',
      filter: 'blur(3px)'
    },
    wave: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '60px',
      background: 'linear-gradient(90deg, transparent, rgba(163, 75, 110, 0.1), rgba(110, 75, 195, 0.1), rgba(69, 183, 209, 0.1), transparent)',
      animation: 'waveMotion 8s ease-in-out infinite',
      borderRadius: '50%',
      filter: 'blur(1px)'
    },
    particles: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        radial-gradient(2px 2px at 20% 30%, rgba(163, 75, 110, 0.3), transparent),
        radial-gradient(2px 2px at 40% 70%, rgba(110, 75, 195, 0.3), transparent),
        radial-gradient(1px 1px at 90% 20%, rgba(69, 183, 209, 0.3), transparent),
        radial-gradient(1px 1px at 60% 80%, rgba(163, 75, 110, 0.2), transparent),
        radial-gradient(2px 2px at 80% 50%, rgba(110, 75, 195, 0.2), transparent)
      `,
      backgroundSize: '200px 200px, 150px 150px, 100px 100px, 180px 180px, 160px 160px',
      animation: 'particleFloat 20s linear infinite'
    },
    cardBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'transform 0.8s ease, filter 0.6s ease, opacity 0.6s ease',
      filter: 'brightness(0.4) contrast(1.2)',
      opacity: 0.75
    },
    cardOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(15, 20, 30, 0.7) 0%, rgba(163, 75, 110, 0.08) 25%, rgba(110, 75, 195, 0.12) 50%, rgba(69, 183, 209, 0.08) 75%, rgba(10, 15, 25, 0.8) 100%)',
      opacity: 0.85,
      transition: 'opacity 0.6s ease'
    },
    cardContent: {
      position: 'relative',
      zIndex: 3,
      padding: 'var(--spacing-xl)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: 'white'
    },
    cardHeader: {
      textAlign: 'center',
      marginBottom: 'var(--spacing-md)'
    },
    industryName: {
      fontSize: '1.9rem',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
      textAlign: 'center',
      color: '#ffffff',
      textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 4px 16px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(110, 75, 195, 0.6)',
      lineHeight: 1.3,
      letterSpacing: '0.5px',
      filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.15))',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
    expandedIndustryName: {
      fontSize: '2.3rem',
      transform: 'scale(1.05)',
      textShadow: '0 3px 12px rgba(0, 0, 0, 0.9), 0 6px 20px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(110, 75, 195, 0.8)',
      filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.25))'
    },
    industryDescription: {
      fontSize: '1rem',
      lineHeight: 1.6,
      opacity: 0,
      textAlign: 'center',
      color: '#f8f8f8',
      marginTop: 'var(--spacing-md)',
      padding: '0 var(--spacing-sm)',
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.6)',
      fontWeight: '400',
      transform: 'translateY(20px)'
    },
    expandedDescription: {
      maxHeight: '200px',
      marginBottom: 'var(--spacing-md)',
      opacity: 1,
      transform: 'translateY(0px)',
      fontSize: '1.1rem'
    },
    cardFooter: {
      textAlign: 'center',
      marginTop: 'auto',
      paddingTop: 'var(--spacing-lg)'
    },
    learnMore: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--spacing-xs)',
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: 600,
      padding: '10px 18px',
      borderRadius: '20px',
      border: '1px solid rgba(110, 75, 195, 0.6)',
      background: 'linear-gradient(135deg, rgba(163, 75, 110, 0.8) 0%, rgba(110, 75, 195, 0.9) 50%, rgba(69, 183, 209, 0.8) 100%)',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      boxShadow: '0 2px 8px rgba(110, 75, 195, 0.2)',
      textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
      letterSpacing: '0.3px'
    },
    learnMoreHover: {
      background: 'linear-gradient(135deg, rgba(163, 75, 110, 1) 0%, rgba(110, 75, 195, 1) 50%, rgba(69, 183, 209, 1) 100%)',
      borderColor: 'rgba(110, 75, 195, 0.8)',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(110, 75, 195, 0.5)'
    },
    gridPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.08,
      backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 1px, transparent 1px),
        radial-gradient(circle at 75% 75%, rgba(255,255,255,0.3) 1px, transparent 1px)
      `,
      backgroundSize: '30px 30px',
      backgroundPosition: '0 0, 15px 15px'
    },
    cardMain: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };

  const handleHover = (e, isHovering) => {
    const card = e.currentTarget;
    const cardBg = card.querySelector('.card-background');
    const cardOverlay = card.querySelector('.card-overlay');
    
    // Get the card index for expansion state
    const cardIndex = parseInt(card.getAttribute('data-card-index'));
    
    if (isHovering) {
      // Expand this card on hover
      setExpandedCard(cardIndex);
      
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 0 0 2px rgba(163, 75, 110, 0.3), 0 0 30px rgba(110, 75, 195, 0.4), 0 0 60px rgba(69, 183, 209, 0.3), 0 20px 40px rgba(0, 0, 0, 0.2)';
      card.style.borderColor = 'rgba(110, 75, 195, 0.5)';
      
      if (cardBg) {
        cardBg.style.transform = 'scale(1.1)';
        cardBg.style.filter = 'brightness(0.5) contrast(1.3)';
        cardBg.style.opacity = '0.85';
      }
      
      if (cardOverlay) {
        cardOverlay.style.opacity = '0.95';
      }
      
    } else {
      // Collapse card on mouse leave
      setExpandedCard(null);
      
      card.style.transform = '';
      card.style.boxShadow = '';
      card.style.borderColor = 'rgba(110, 75, 195, 0.2)';
      
      if (cardBg) {
        cardBg.style.transform = '';
        cardBg.style.filter = '';
        cardBg.style.opacity = '';
      }
      
      if (cardOverlay) {
        cardOverlay.style.opacity = '';
      }
      
    }
  };


  const oldStyles = {
    particles: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        radial-gradient(2px 2px at 20% 30%, rgba(163, 75, 110, 0.3), transparent),
        radial-gradient(2px 2px at 40% 70%, rgba(110, 75, 195, 0.3), transparent),
        radial-gradient(1px 1px at 90% 20%, rgba(69, 183, 209, 0.3), transparent),
        radial-gradient(1px 1px at 60% 80%, rgba(163, 75, 110, 0.2), transparent),
        radial-gradient(2px 2px at 80% 50%, rgba(110, 75, 195, 0.2), transparent)
      `,
      backgroundSize: '200px 200px, 150px 150px, 100px 100px, 180px 180px, 160px 160px',
      animation: 'particleFloat 20s linear infinite'
    },
    morphingBorder: {
      position: 'absolute',
      top: '-2px',
      left: '-2px',
      right: '-2px',
      bottom: '-2px',
      borderRadius: '26px',
      background: 'linear-gradient(45deg, rgba(163, 75, 110, 0.8), rgba(110, 75, 195, 0.8), rgba(69, 183, 209, 0.8), rgba(163, 75, 110, 0.8))',
      backgroundSize: '400% 400%',
      animation: 'morphingBorderFlow 6s ease-in-out infinite',
      zIndex: -1,
      opacity: 0
    },
    activeMorphingBorder: {
      opacity: 1,
      animation: 'morphingBorderFlow 6s ease-in-out infinite, borderPulse 2s ease-in-out infinite'
    },
    holographicOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(163, 75, 110, 0.03) 0%, rgba(110, 75, 195, 0.05) 25%, rgba(69, 183, 209, 0.03) 50%, rgba(163, 75, 110, 0.02) 75%, rgba(110, 75, 195, 0.04) 100%)',
      backgroundSize: '200% 200%',
      animation: 'hologramShift 10s ease-in-out infinite',
      mixBlendMode: 'color-dodge',
      opacity: 0,
      transition: 'opacity 0.5s ease',
      zIndex: 2
    },
    activeHologram: {
      opacity: 1
    },
    magneticArea: {
      position: 'absolute',
      top: '-20px',
      left: '-20px',
      right: '-20px',
      bottom: '-20px',
      pointerEvents: 'none',
      zIndex: 10
    },
    floatingElements: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, rgba(110, 75, 195, 0.6), rgba(69, 183, 209, 0.6))',
      animation: 'floatingDot 4s ease-in-out infinite',
      opacity: 0,
      transition: 'opacity 0.3s ease'
    },
    activeFloatingElements: {
      opacity: 1
    },
    glitchEffect: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(163, 75, 110, 0.03) 2px, rgba(163, 75, 110, 0.03) 4px)',
      animation: 'glitchScan 8s linear infinite',
      opacity: 0,
      mixBlendMode: 'screen',
      zIndex: 1
    },
    activeGlitch: {
      opacity: 1
    },
    cardBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'transform 0.8s ease, filter 0.6s ease, opacity 0.6s ease',
      filter: 'brightness(0.15) contrast(1.1)',
      opacity: 0.3
    },
    cardOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(15, 20, 30, 0.92) 0%, rgba(163, 75, 110, 0.08) 25%, rgba(110, 75, 195, 0.12) 50%, rgba(69, 183, 209, 0.08) 75%, rgba(10, 15, 25, 0.95) 100%)',
      opacity: 0.95,
      transition: 'opacity 0.6s ease'
    },
    cardContent: {
      position: 'relative',
      zIndex: 3,
      padding: 'var(--spacing-xl)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: 'white'
    },
    cardHeader: {
      textAlign: 'center',
      marginBottom: 'var(--spacing-md)'
    },
    industryIcon: {
      fontSize: '3.5rem',
      marginBottom: 'var(--spacing-md)',
      display: 'block',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(110, 75, 195, 0.3)',
      transform: 'scale(1)',
      transition: 'transform 0.4s ease, text-shadow 0.4s ease',
      filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.1))'
    },
    industryName: {
      fontSize: '1.6rem',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
      textAlign: 'center',
      color: '#ffffff',
      textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 4px 16px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(110, 75, 195, 0.6)',
      lineHeight: 1.3,
      letterSpacing: '0.5px',
      filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.15))'
    },
    industryDescription: {
      fontSize: '1rem',
      lineHeight: 1.6,
      opacity: 0,
      textAlign: 'center',
      color: '#f8f8f8',
      marginTop: 'var(--spacing-md)',
      padding: '0 var(--spacing-sm)',
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.6)',
      fontWeight: '400',
      transform: 'translateY(20px)'
    },
    expandedDescription: {
      maxHeight: '200px',
      marginBottom: 'var(--spacing-md)',
      opacity: 1,
      transform: 'translateY(0px)',
      animation: 'textGlow 4s ease-in-out infinite'
    },
    cardFooter: {
      textAlign: 'center',
      marginTop: 'auto',
      paddingTop: 'var(--spacing-lg)'
    },
    learnMore: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--spacing-xs)',
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: 600,
      padding: '10px 18px',
      borderRadius: '20px',
      border: '1px solid rgba(110, 75, 195, 0.6)',
      background: 'linear-gradient(135deg, rgba(163, 75, 110, 0.8) 0%, rgba(110, 75, 195, 0.9) 50%, rgba(69, 183, 209, 0.8) 100%)',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      boxShadow: '0 2px 8px rgba(110, 75, 195, 0.2)',
      textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
      letterSpacing: '0.3px'
    },
    learnMoreHover: {
      background: 'linear-gradient(135deg, rgba(163, 75, 110, 1) 0%, rgba(110, 75, 195, 1) 50%, rgba(69, 183, 209, 1) 100%)',
      borderColor: 'rgba(110, 75, 195, 0.8)',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(110, 75, 195, 0.5)'
    },
    gridPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.08,
      backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 1px, transparent 1px),
        radial-gradient(circle at 75% 75%, rgba(255,255,255,0.3) 1px, transparent 1px)
      `,
      backgroundSize: '30px 30px',
      backgroundPosition: '0 0, 15px 15px'
    },
    cardMain: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };

 const mobileStyles = `
  @media (max-width: 768px) {
    .industries-grid {
      grid-template-columns: 1fr !important;
    }
    .industry-card {
      height: 300px !important;
    }
    .expanded-card {
      height: 420px !important;
    }
  }
  
  .hero-title {
    color: white !important;
    -webkit-text-fill-color: white !important;
    background: none !important;
    animation: titleFloat 3s ease-in-out infinite;
    position: relative;
    display: inline-block;
  }
  
  
  .hero-subtitle {
    animation: fadeInUp 2s ease-out 0.5s both;
    position: relative;
  }
  
  .hero-particles {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }
  
  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    animation: particleFall 8s linear infinite;
  }
  
  .particle:nth-child(1) { left: 10%; animation-delay: 0s; animation-duration: 6s; }
  .particle:nth-child(2) { left: 20%; animation-delay: 1s; animation-duration: 8s; }
  .particle:nth-child(3) { left: 30%; animation-delay: 2s; animation-duration: 7s; }
  .particle:nth-child(4) { left: 40%; animation-delay: 0.5s; animation-duration: 9s; }
  .particle:nth-child(5) { left: 50%; animation-delay: 1.5s; animation-duration: 6s; }
  .particle:nth-child(6) { left: 60%; animation-delay: 2.5s; animation-duration: 8s; }
  .particle:nth-child(7) { left: 70%; animation-delay: 0.8s; animation-duration: 7s; }
  .particle:nth-child(8) { left: 80%; animation-delay: 1.8s; animation-duration: 9s; }
  .particle:nth-child(9) { left: 90%; animation-delay: 0.3s; animation-duration: 6s; }
  .particle:nth-child(10) { left: 15%; animation-delay: 2.2s; animation-duration: 8s; }
  
  @keyframes glowPulse {
    0% { box-shadow: 0 0 25px rgba(120, 0, 180, 0.8); }
    50% { box-shadow: 0 0 60px rgba(180, 0, 255, 1); }
    100% { box-shadow: 0 0 25px rgba(120, 0, 180, 0.8); }
  }
  
  @keyframes floatAnimation {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes gradientShift {
    0% { 
      background-position: 0% 0%, 100% 100%, 50% 50%;
      filter: hue-rotate(0deg);
    }
    25% { 
      background-position: 100% 0%, 0% 100%, 75% 25%;
      filter: hue-rotate(90deg);
    }
    50% { 
      background-position: 100% 100%, 0% 0%, 25% 75%;
      filter: hue-rotate(180deg);
    }
    75% { 
      background-position: 0% 100%, 100% 0%, 75% 25%;
      filter: hue-rotate(270deg);
    }
    100% { 
      background-position: 0% 0%, 100% 100%, 50% 50%;
      filter: hue-rotate(360deg);
    }
  }
  
  @keyframes patternFade {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
  }
  
  @keyframes patternFloat {
    0%, 100% { transform: scale(1) rotate(0deg); }
    33% { transform: scale(1.05) rotate(1deg); }
    66% { transform: scale(0.95) rotate(-1deg); }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(200%) translateY(200%) rotate(45deg); }
  }
  
  @keyframes textGlow {
    0%, 100% { 
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.6), 0 0 10px rgba(163, 75, 110, 0.3);
    }
    50% { 
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.6), 0 0 20px rgba(110, 75, 195, 0.5), 0 0 30px rgba(69, 183, 209, 0.3);
    }
  }
  
  @keyframes motionFade {
    0% { opacity: 0; transform: scale(1.1); }
    100% { opacity: 1; transform: scale(1); }
  }
  
  @keyframes orb1Motion {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(30px, -20px) scale(1.1); }
    50% { transform: translate(-10px, 40px) scale(0.9); }
    75% { transform: translate(20px, 10px) scale(1.05); }
  }
  
  @keyframes orb2Motion {
    0%, 100% { transform: translate(0, 0) scale(1); }
    30% { transform: translate(-25px, -30px) scale(1.15); }
    60% { transform: translate(15px, -15px) scale(0.85); }
    90% { transform: translate(-5px, 25px) scale(1.1); }
  }
  
  @keyframes orb3Motion {
    0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
    20% { transform: translate(10px, 25px) scale(1.2) rotate(90deg); }
    40% { transform: translate(-20px, -10px) scale(0.8) rotate(180deg); }
    60% { transform: translate(25px, 15px) scale(1.1) rotate(270deg); }
    80% { transform: translate(-15px, 20px) scale(0.9) rotate(360deg); }
  }
  
  @keyframes orbGlow {
    0% { filter: blur(2px) brightness(1); }
    100% { filter: blur(4px) brightness(1.3); }
  }
  
  @keyframes waveMotion {
    0%, 100% { 
      transform: translateX(-100%) scaleY(1); 
      opacity: 0.3;
    }
    25% { 
      transform: translateX(-50%) scaleY(1.2); 
      opacity: 0.6;
    }
    50% { 
      transform: translateX(0%) scaleY(0.8); 
      opacity: 0.8;
    }
    75% { 
      transform: translateX(50%) scaleY(1.1); 
      opacity: 0.4;
    }
  }
  
  @keyframes particleFloat {
    0% { 
      background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
      transform: rotate(0deg);
    }
    25% { 
      background-position: 25% 25%, 50% 10%, 75% 75%, 10% 90%, 90% 20%;
      transform: rotate(90deg);
    }
    50% { 
      background-position: 50% 50%, 100% 20%, 150% 150%, 20% 180%, 180% 40%;
      transform: rotate(180deg);
    }
    75% { 
      background-position: 75% 75%, 150% 30%, 225% 225%, 30% 270%, 270% 60%;
      transform: rotate(270deg);
    }
    100% { 
      background-position: 100% 100%, 200% 40%, 300% 300%, 40% 360%, 360% 80%;
      transform: rotate(360deg);
    }
  }
  
  @keyframes morphingBorderFlow {
    0%, 100% { 
      background-position: 0% 50%;
      border-radius: 26px;
    }
    25% { 
      background-position: 100% 0%;
      border-radius: 30px 20px 30px 20px;
    }
    50% { 
      background-position: 100% 100%;
      border-radius: 20px 30px 20px 30px;
    }
    75% { 
      background-position: 0% 100%;
      border-radius: 35px 15px 35px 15px;
    }
  }
  
  @keyframes borderPulse {
    0%, 100% { 
      filter: brightness(1) saturate(1);
      transform: scale(1);
    }
    50% { 
      filter: brightness(1.3) saturate(1.5);
      transform: scale(1.02);
    }
  }
  
  @keyframes hologramShift {
    0%, 100% { 
      background-position: 0% 0%;
      filter: hue-rotate(0deg);
    }
    25% { 
      background-position: 100% 25%;
      filter: hue-rotate(90deg);
    }
    50% { 
      background-position: 75% 100%;
      filter: hue-rotate(180deg);
    }
    75% { 
      background-position: 25% 75%;
      filter: hue-rotate(270deg);
    }
  }
  
  @keyframes floatingDot {
    0%, 100% { 
      transform: translateY(0) scale(1);
      opacity: 0.6;
    }
    50% { 
      transform: translateY(-10px) scale(1.2);
      opacity: 1;
    }
  }
  
  @keyframes glitchScan {
    0% { 
      transform: translateX(-100%);
      opacity: 0;
    }
    5% { 
      opacity: 1;
    }
    10% { 
      transform: translateX(100%);
      opacity: 1;
    }
    15% { 
      opacity: 0;
    }
    100% { 
      opacity: 0;
    }
  }
  
  @keyframes magneticHover {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(var(--mouse-x, 0), var(--mouse-y, 0)) scale(1.05); }
  }
  
  @keyframes titleGradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @keyframes titleFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 0.9;
      transform: translateY(0);
    }
  }
  
  @keyframes particleFall {
    0% {
      transform: translateY(-100vh) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
  
  @keyframes dustFloat1 {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.7; }
    25% { transform: translate(10px, -5px) rotate(90deg); opacity: 0.4; }
    50% { transform: translate(-5px, 10px) rotate(180deg); opacity: 0.8; }
    75% { transform: translate(8px, -8px) rotate(270deg); opacity: 0.3; }
    100% { transform: translate(0, 0) rotate(360deg); opacity: 0.7; }
  }
  
  @keyframes dustFloat2 {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
    30% { transform: translate(-8px, 12px) rotate(108deg); opacity: 0.8; }
    60% { transform: translate(12px, -4px) rotate(216deg); opacity: 0.3; }
    100% { transform: translate(0, 0) rotate(360deg); opacity: 0.5; }
  }
  
  @keyframes dustFloat3 {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.6; }
    20% { transform: translate(15px, 8px) rotate(72deg); opacity: 0.2; }
    40% { transform: translate(-10px, -12px) rotate(144deg); opacity: 0.9; }
    80% { transform: translate(6px, 15px) rotate(288deg); opacity: 0.4; }
    100% { transform: translate(0, 0) rotate(360deg); opacity: 0.6; }
  }
  
  @keyframes dustFloat4 {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
    35% { transform: translate(-12px, -8px) rotate(126deg); opacity: 0.7; }
    70% { transform: translate(8px, 14px) rotate(252deg); opacity: 0.3; }
    100% { transform: translate(0, 0) rotate(360deg); opacity: 0.4; }
  }
  
  @keyframes dustFloat5 {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.8; }
    25% { transform: translate(5px, -15px) rotate(90deg); opacity: 0.5; }
    50% { transform: translate(-15px, 3px) rotate(180deg); opacity: 0.2; }
    75% { transform: translate(12px, 10px) rotate(270deg); opacity: 0.7; }
    100% { transform: translate(0, 0) rotate(360deg); opacity: 0.8; }
  }
  
  @keyframes dustFloat6 {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
    40% { transform: translate(18px, -6px) rotate(144deg); opacity: 0.8; }
    80% { transform: translate(-5px, 18px) rotate(288deg); opacity: 0.4; }
    100% { transform: translate(0, 0) rotate(360deg); opacity: 0.3; }
  }
  
  /* Card Dust Particle Animations */
  @keyframes cardDustFloat1 {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.8; }
    25% { transform: translate(8px, -4px) rotate(90deg); opacity: 0.5; }
    50% { transform: translate(-4px, 8px) rotate(180deg); opacity: 0.9; }
    75% { transform: translate(6px, -6px) rotate(270deg); opacity: 0.4; }
    100% { transform: translate(0, 0) rotate(360deg); opacity: 0.8; }
  }
  
  @keyframes cardDustFloat2 {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.6; }
    30% { transform: translate(-6px, 10px) rotate(108deg); opacity: 0.9; }
    60% { transform: translate(10px, -3px) rotate(216deg); opacity: 0.4; }
    100% { transform: translate(0, 0) rotate(360deg); opacity: 0.6; }
  }
  
  @keyframes cardDustFloat3 {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.7; }
    20% { transform: translate(12px, 6px) rotate(72deg); opacity: 0.3; }
    40% { transform: translate(-8px, -10px) rotate(144deg); opacity: 1.0; }
    80% { transform: translate(5px, 12px) rotate(288deg); opacity: 0.5; }
    100% { transform: translate(0, 0) rotate(360deg); opacity: 0.7; }
  }
  
  @keyframes cardDustFloat4 {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
    35% { transform: translate(-10px, -6px) rotate(126deg); opacity: 0.8; }
    70% { transform: translate(6px, 12px) rotate(252deg); opacity: 0.4; }
    100% { transform: translate(0, 0) rotate(360deg); opacity: 0.5; }
  }
  
  @keyframes cardDustFloat5 {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.9; }
    25% { transform: translate(4px, -12px) rotate(90deg); opacity: 0.6; }
    50% { transform: translate(-12px, 2px) rotate(180deg); opacity: 0.3; }
    75% { transform: translate(10px, 8px) rotate(270deg); opacity: 0.8; }
    100% { transform: translate(0, 0) rotate(360deg); opacity: 0.9; }
  }
  
  @keyframes cardDustFloat6 {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
    40% { transform: translate(15px, -5px) rotate(144deg); opacity: 0.9; }
    80% { transform: translate(-4px, 15px) rotate(288deg); opacity: 0.5; }
    100% { transform: translate(0, 0) rotate(360deg); opacity: 0.4; }
  }
  
`;



  return (
    <>
      <style>{mobileStyles}</style>
      
      
      {/* Industry Served Hero Section */}
      <section style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: 'var(--spacing-3xl)',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(2px)',
            opacity: 0.8,
            zIndex: 1
          }}
        ></div>
        
        {/* Overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          zIndex: 2
        }}></div>
        
        {/* Floating Particles */}
        <div className="hero-particles" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none'
        }}>
          {[...Array(10)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
        
        {/* Floating Dust Effect */}
        <div className="dust-container" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none',
          overflow: 'visible'
        }}>
          {[...Array(30)].map((_, i) => {
            const size = Math.random() * 4 + 2; // 2-6px
            const animationIndex = (i % 6) + 1;
            return (
              <div 
                key={i} 
                className="dust-particle"
                style={{
                  position: 'absolute',
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  borderRadius: '50%',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `dustFloat${animationIndex} ${10 + Math.random() * 6}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 8}s`,
                  boxShadow: '0 0 3px rgba(255, 255, 255, 0.3)',
                  filter: 'blur(0.5px)'
                }}
              ></div>
            );
          })}
        </div>
        
        {/* Content */}
        <div className="container" style={{ 
          position: 'relative', 
          zIndex: 3, 
          textAlign: 'center',
          color: 'white',
          padding: 'var(--spacing-3xl) var(--spacing-lg)'
        }}>
          <h1 className="hero-title" style={{
            fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
            fontWeight: 800,
            marginBottom: 'var(--spacing-xl)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'white'
          }}>
            Industries Served
          </h1>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'white',
            margin: '0 auto var(--spacing-lg)',
            borderRadius: '2px'
          }}></div>
          <p className="hero-subtitle" style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontWeight: 300,
            letterSpacing: '0.5px'
          }}>
            Transforming businesses across diverse sectors with 
            <span style={{
              color: 'white',
              fontWeight: 600
            }}> cutting-edge technology </span>
            and innovative solutions that drive digital excellence in every industry we serve.
          </p>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container">
          <h2 style={styles.sectionTitle} className="text-gradient">
            Our Solutions
          </h2>
          <div className="industries-grid" style={styles.industriesGrid}>
            {industries.map((industry, index) => {
              const isExpanded = expandedCard === index;
              return (
                <div
                  key={index}
                  className={`industry-card ${isExpanded ? 'expanded-card' : ''}`}
                  style={{
                    ...styles.industryCard,
                    ...(isExpanded ? styles.expandedCard : {})
                  }}
                  data-card-index={index}
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  <div 
                    className="card-background"
                    style={{
                      ...styles.cardBackground,
                      backgroundImage: `url(${industry.img})`,
                      ...(isExpanded ? styles.expandedCardBackground : {})
                    }}
                  ></div>
                  <div 
                    className="card-overlay" 
                    style={{
                      ...styles.cardOverlay,
                      ...(isExpanded ? styles.expandedCardOverlay : {})
                    }}
                  ></div>
                  {isExpanded && (
                    <>
                      <div 
                        className="expanded-pattern"
                        style={styles.expandedPattern}
                      ></div>
                      <div className="motion-layer" style={styles.motionLayer}>
                        <div className="orb orb-1" style={styles.orb1}></div>
                        <div className="orb orb-2" style={styles.orb2}></div>
                        <div className="orb orb-3" style={styles.orb3}></div>
                        <div className="wave" style={styles.wave}></div>
                        <div className="particles" style={styles.particles}></div>
                      </div>
                      {/* Card Dust Particles */}
                      <div className="card-dust-container" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 3,
                        pointerEvents: 'none',
                        overflow: 'hidden'
                      }}>
                        {[...Array(15)].map((_, i) => {
                          const size = Math.random() * 3 + 1.5; // 1.5-4.5px
                          const animationIndex = (i % 6) + 1;
                          return (
                            <div 
                              key={i} 
                              className="card-dust-particle"
                              style={{
                                position: 'absolute',
                                width: `${size}px`,
                                height: `${size}px`,
                                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                borderRadius: '50%',
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `cardDustFloat${animationIndex} ${8 + Math.random() * 4}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 6}s`,
                                boxShadow: '0 0 4px rgba(255, 255, 255, 0.4)',
                                filter: 'blur(0.3px)',
                                opacity: 0.8
                              }}
                            ></div>
                          );
                        })}
                      </div>
                    </>
                  )}
                  <div className="grid-pattern" style={styles.gridPattern}></div>
                  
                  <div style={styles.cardContent}>
                    <div style={styles.cardMain}>
                      <div style={styles.cardHeader}>
                        <h3 style={{
                          ...styles.industryName,
                          ...(isExpanded ? styles.expandedIndustryName : {})
                        }}>{industry.name}</h3>
                      </div>
                      
                      <div 
                        style={{
                          ...styles.industryDescription,
                          ...(isExpanded ? styles.expandedDescription : {})
                        }}
                      >
                        <p>{industry.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}