import { Link } from 'wouter';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const heroCanvasRef = useRef();
  const animationIdRef = useRef();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const capabilitiesScrollRef = useRef();
  const autoScrollIntervalRef = useRef();

  useEffect(() => {
    // Import Three.js
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = () => {
      initThreeJS();
    };
    document.head.appendChild(script);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      document.head.removeChild(script);
    };
  }, []);

  const handleCardHover = (index, isHovering) => {
    setHoveredCard(isHovering ? index : null);
  };

  // Auto-scroll functionality for capabilities section
  useEffect(() => {
    const startAutoScroll = () => {
      if (isAutoScrolling && window.innerWidth <= 768) {
        autoScrollIntervalRef.current = setInterval(() => {
          setCurrentSlide(prev => (prev + 1) % 4);
        }, 3000);
      }
    };

    const stopAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };

    startAutoScroll();

    const handleResize = () => {
      if (window.innerWidth > 768) {
        stopAutoScroll();
      } else if (isAutoScrolling) {
        stopAutoScroll();
        startAutoScroll();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      stopAutoScroll();
      window.removeEventListener('resize', handleResize);
    };
  }, [isAutoScrolling]);

  const handlePrevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? 3 : prev - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % 4);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const pauseAutoScroll = () => {
    setIsAutoScrolling(false);
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  const resumeAutoScroll = () => {
    setIsAutoScrolling(true);
  };

  // Touch/swipe gesture handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    pauseAutoScroll();
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      resumeAutoScroll();
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNextSlide();
    } else if (isRightSwipe) {
      handlePrevSlide();
    }
    
    setTimeout(() => {
      resumeAutoScroll();
    }, 500);
  };

  const initThreeJS = () => {
    const heroCanvas = heroCanvasRef.current;
    if (!heroCanvas) return;

    const sceneHero = new window.THREE.Scene();
    const cameraHero = new window.THREE.PerspectiveCamera(75, heroCanvas.clientWidth / heroCanvas.clientHeight, 0.1, 1000);
    const rendererHero = new window.THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true });
    rendererHero.setSize(heroCanvas.clientWidth, heroCanvas.clientHeight);
    cameraHero.position.z = 5;

    // Glowing particles
    const particleMaterial = new window.THREE.PointsMaterial({
      color: 0x6e4bc3,
      size: 0.1,
      transparent: true,
      blending: window.THREE.AdditiveBlending,
      map: new window.THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/disc.png')
    });
    const particleGeometry = new window.THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 500; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      vertices.push(x, y, z);
    }
    particleGeometry.setAttribute('position', new window.THREE.Float32BufferAttribute(vertices, 3));
    const particleSystem = new window.THREE.Points(particleGeometry, particleMaterial);
    sceneHero.add(particleSystem);

    function animateHero() {
      animationIdRef.current = requestAnimationFrame(animateHero);
      particleSystem.rotation.x += 0.0005;
      particleSystem.rotation.y += 0.0007;
      rendererHero.render(sceneHero, cameraHero);
    }
    animateHero();

    // Handle resize
    const handleResize = () => {
      heroCanvas.width = heroCanvas.clientWidth;
      heroCanvas.height = heroCanvas.clientHeight;
      cameraHero.aspect = heroCanvas.clientWidth / heroCanvas.clientHeight;
      cameraHero.updateProjectionMatrix();
      rendererHero.setSize(heroCanvas.clientWidth, heroCanvas.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  };

  // Original styles for the remaining sections
  const styles = {
    section: {
      padding: 'var(--spacing-3xl) 0',
      position: 'relative',
    },
    sectionContent: {
      position: 'relative',
      zIndex: 2,
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: 'var(--spacing-md)',
      color: 'var(--color-text)',
    },
    sectionSubtitle: {
      textAlign: 'center',
      fontSize: '18px',
      opacity: 0.8,
      marginBottom: 'var(--spacing-2xl)',
      maxWidth: '600px',
      margin: '0 auto var(--spacing-2xl)',
      color: 'var(--color-text)',
    },
    capabilitiesRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      marginTop: 'var(--spacing-2xl)',
    },
    capabilityCard: {
      minWidth: '280px',
      padding: '32px 24px',
      textAlign: 'center',
      borderRadius: 'var(--radius-lg)',
      background: 'rgba(255, 255, 255, 0.08)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(255,255,255,0.12)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      opacity: 0,
      transform: 'translateY(50px)',
      animation: 'slideUpFade 0.6s ease forwards',
    },
    capabilityCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid rgba(255,255,255,0.2)',
      background: 'var(--color-surface)',
    },
    capabilityIcon: {
      fontSize: '48px',
      marginBottom: 'var(--spacing-md)',
    },
    capabilityTitle: {
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-md)',
      color: 'var(--color-text)',
    },
    capabilityDescription: {
      fontSize: '16px',
      opacity: 0.8,
      marginBottom: 'var(--spacing-lg)',
      color: 'var(--color-text)',
    },
    capabilityFeatures: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      textAlign: 'left',
    },
    capabilityFeatureItem: {
      marginBottom: 'var(--spacing-sm)',
      fontSize: '17px',
      opacity: 0.7,
      color: 'var(--color-text)',
      position: 'relative',
      paddingLeft: '20px',
    },
    ctaSection: {
      padding: 'var(--spacing-3xl) 0',
      textAlign: 'center',
      borderRadius: 'var(--radius-xl)',
      margin: 'var(--spacing-3xl) 0',
      position: 'relative',
    },
  };

  return (
    <>
      {/* CSS Styles from HTML */}
      <style>{`
        /* General */
        .home-container {
          font-family: 'Poppins', sans-serif;
          background: #0a0a0a;
          color: #ffffff;
          overflow-x: hidden;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          background: radial-gradient(circle at 50% 50%, rgba(110, 75, 195, 0.15) 0%, transparent 70%);
          overflow: hidden;
        }
        .hero-content {
          z-index: 2;
          text-align: left;
          max-width: 700px;
        }
        .hero h1 {
          font-size: 4.5rem;
          margin-bottom: 25px;
          background: linear-gradient(45deg, #ffffff, #6e4bc3, #a34b6e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
        }
        .hero p {
          font-size: 1.3rem;
          margin-bottom: 40px;
          opacity: 0.9;
          animation: fadeInUp 1s ease-out 0.2s both;
          color: #e0e0e0;
        }
        .cta-button {
          display: inline-block;
          padding: 18px 35px;
          background: linear-gradient(45deg, #a34b6e, #6e4bc3);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: bold;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          animation: fadeInUp 1s ease-out 0.4s both;
          position: relative;
          overflow: hidden;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease-in-out;
        }
        .cta-button:hover::before {
          left: 100%;
        }
        .cta-button:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 40px rgba(110, 75, 195, 0.4);
        }

        /* Floating Shapes */
        .floating-shapes {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        .shape {
          position: absolute;
          background: linear-gradient(45deg, #a34b6e80, #6e4bc380);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
          filter: blur(10px);
        }
        .shape:nth-child(1) { width: 100px; height: 100px; top: 15%; left: 15%; animation-delay: 0s; }
        .shape:nth-child(2) { width: 70px; height: 70px; top: 65%; right: 10%; animation-delay: 3s; }
        .shape:nth-child(3) { width: 50px; height: 50px; bottom: 20%; left: 60%; animation-delay: 6s; }

        /* Capabilities Section Animations */
        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow: 0 8px 32px rgba(110, 75, 195, 0.5);
          }
        }

        /* Staggered animation delays for cards */
        .capability-card:nth-child(1) { animation-delay: 0.1s; }
        .capability-card:nth-child(2) { animation-delay: 0.2s; }
        .capability-card:nth-child(3) { animation-delay: 0.3s; }
        .capability-card:nth-child(4) { animation-delay: 0.4s; }

        /* Bullet point styles for capability features */
        .capability-feature-item::before {
          content: '•';
          color: #b191f5ff;
          font-weight: bold;
          position: absolute;
          left: 0;
          font-size: 20px;
        }

        /* Enhanced hover effects for capability cards */
        .capability-card:hover {
          animation: pulseGlow 2s ease-in-out infinite;
          transform: translateY(-12px) scale(1.02) !important;
        }

        .capability-card:hover .capability-feature-item::before {
          color: #ffffff;
          text-shadow: 0 0 10px rgba(177, 145, 245, 0.8);
        }

        /* Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-25px) rotate(5deg); }
          50% { transform: translateY(0px) rotate(0deg); }
          75% { transform: translateY(-25px) rotate(-5deg); }
        }

        /* Desktop Horizontal Layout for Capabilities */
        .capabilities-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: 1fr;
          gap: 20px;
          margin-top: var(--spacing-2xl, 2rem);
        }

        /* Ensure horizontal layout on all desktop sizes */
        @media (min-width: 769px) {
          .capabilities-row {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            grid-template-rows: 1fr !important;
            gap: 20px;
            align-items: stretch;
          }
          
          .mobile-capabilities-container {
            display: none !important;
          }
          
          .capability-card {
            min-width: 220px;
            max-width: none;
            width: 100%;
          }
        }

        @media (max-width: 1200px) and (min-width: 769px) {
          .capabilities-row {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 16px;
          }
          
          .capability-card {
            min-width: 200px;
            padding: 28px 20px;
          }
        }

        @media (max-width: 992px) and (min-width: 769px) {
          .capabilities-row {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 14px;
          }
          
          .capability-card {
            min-width: 180px;
            padding: 26px 18px;
          }
        }

        @media (max-width: 900px) and (min-width: 769px) {
          .capabilities-row {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 12px;
          }
          
          .capability-card {
            min-width: 160px;
            padding: 24px 16px;
          }
          
          .capability-card h3 {
            font-size: 20px !important;
          }
          
          .capability-card p {
            font-size: 14px !important;
          }
        }

        @media (max-width: 768px) {
          .capabilities-row {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 0 10px;
          }
          .capability-card {
            min-width: auto;
            max-width: 100%;
            padding: 28px 24px;
            margin: 0 auto;
            max-width: 400px;
          }
          
          /* Adjust section title and subtitle for mobile */
          .section-title-enhanced {
            font-size: 32px !important;
            line-height: 1.2;
            margin-bottom: 16px;
          }
          
          .capabilities-header p {
            font-size: 16px;
            margin-bottom: 24px;
            padding: 0 10px;
          }
        }

        @media (max-width: 480px) {
          .capabilities-row {
            padding: 0 5px;
            gap: 16px;
          }
          .capability-card {
            padding: 24px 20px;
            min-height: auto;
          }
          .capability-card h3 {
            font-size: 20px !important;
            margin-bottom: 12px;
          }
          .capability-card p {
            font-size: 14px !important;
            margin-bottom: 16px;
          }
          .capability-feature-item {
            font-size: 14px !important;
            margin-bottom: 8px;
          }
          
          .section-title-enhanced {
            font-size: 28px !important;
            padding: 0 10px;
          }
        }

        @media (max-width: 360px) {
          .capability-card {
            padding: 20px 16px;
          }
          .section-title-enhanced {
            font-size: 24px !important;
          }
        }

        /* General responsive tweaks */
        @media (max-width: 992px) {
          .hero h1 { font-size: 3.5rem; }
          .hero p { font-size: 1.1rem; }
        }
        @media (max-width: 768px) {
          .hero h1 { font-size: 2.8rem; text-align: center; }
          .hero p { text-align: center; }
          .cta-button { display: block; margin: 0 auto; }
          .hero-content { text-align: center; }
        }
        @media (max-width: 480px) {
          .hero h1 { font-size: 2rem; }
          .hero p { font-size: 1rem; }
          .cta-button { padding: 12px 25px; font-size: 0.9rem; }
        }

        /* Button styles for other sections */
        .btn-professional {
          display: inline-block;
          padding: 15px 30px;
          background: linear-gradient(45deg, #a34b6e, #6e4bc3);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-professional:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(110, 75, 195, 0.3);
        }

        .bounce-hover:hover {
          animation: bounce 0.6s ease;
        }

        .hover-rotate-scale:hover {
          transform: translateY(-3px) scale(1.05);
        }

        .text-gradient {
          background: linear-gradient(45deg, #ffffff, #6e4bc3, #a34b6e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .floating-element {
          animation: float 3s ease-in-out infinite;
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .slide-in-right {
          animation: slideInRight 1s ease-out;
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0,-8px,0); }
          70% { transform: translate3d(0,-4px,0); }
          90% { transform: translate3d(0,-2px,0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* Mobile Capabilities Horizontal Scroll Styles */
        .mobile-capabilities-container {
          display: none;
          position: relative;
          overflow: hidden;
          margin-top: var(--spacing-2xl, 2rem);
        }

        .capabilities-scroll-container {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          width: 400%;
        }

        .capability-slide {
          width: 25%;
          flex-shrink: 0;
          padding: 0 10px;
        }

        .capability-slide .capability-card {
          margin: 0 auto;
          max-width: 350px;
          height: auto;
          min-height: 450px;
        }

        /* Navigation Controls */
        .capabilities-nav {
          display: flex;
          justify-content: space-between;
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          z-index: 10;
          pointer-events: none;
          transform: translateY(-50%);
        }

        .nav-btn {
          background: rgba(110, 75, 195, 0.9);
          color: white;
          border: none;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 18px;
          font-weight: bold;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 16px rgba(110, 75, 195, 0.3);
          pointer-events: all;
        }

        .nav-btn:hover {
          background: rgba(110, 75, 195, 1);
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(110, 75, 195, 0.5);
        }

        .nav-btn-prev {
          margin-left: -10px;
        }

        .nav-btn-next {
          margin-right: -10px;
        }

        /* Dot Indicators */
        .capabilities-dots {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: linear-gradient(45deg, #a34b6e, #6e4bc3);
          box-shadow: 0 0 10px rgba(110, 75, 195, 0.6);
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.5);
          transform: scale(1.2);
        }

        .dot.active:hover {
          background: linear-gradient(45deg, #a34b6e, #6e4bc3);
        }

        /* Mobile Unique Animations */
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px) rotateY(-30deg) scale(0.8);
          }
          50% {
            opacity: 0.7;
            transform: translateX(-20px) rotateY(-10deg) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0deg) scale(1);
          }
        }

        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(100px) rotateY(30deg) scale(0.8);
          }
          50% {
            opacity: 0.7;
            transform: translateX(20px) rotateY(10deg) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0deg) scale(1);
          }
        }

        @keyframes floatMobile {
          0%, 100% {
            transform: translateY(0px) scale(1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          }
          25% {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 12px 40px rgba(110, 75, 195, 0.4);
          }
          50% {
            transform: translateY(0px) scale(1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          }
          75% {
            transform: translateY(-3px) scale(1.01);
            box-shadow: 0 10px 36px rgba(163, 75, 110, 0.3);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes rotateIn {
          0% {
            opacity: 0;
            transform: rotate(-180deg) scale(0.5);
          }
          50% {
            opacity: 0.8;
            transform: rotate(-90deg) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }

        @keyframes bounceScale {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Mobile Responsive Styles for Horizontal Scroll */
        @media (max-width: 768px) {
          .mobile-capabilities-container {
            display: block !important;
            position: relative;
          }

          .mobile-capabilities-container::after {
            content: '';
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 4px;
            background: linear-gradient(45deg, #a34b6e, #6e4bc3);
            border-radius: 2px;
            opacity: 0.7;
            animation: shimmer 2s ease-in-out infinite;
            background-size: 200% auto;
          }

          .capabilities-row, .desktop-horizontal {
            display: none !important;
          }

          .capability-slide .capability-card {
            animation: floatMobile 6s ease-in-out infinite;
            position: relative;
            overflow: hidden;
          }

          .capability-slide:nth-child(1) .capability-card {
            animation-delay: 0s;
          }
          .capability-slide:nth-child(2) .capability-card {
            animation-delay: 1.5s;
          }
          .capability-slide:nth-child(3) .capability-card {
            animation-delay: 3s;
          }
          .capability-slide:nth-child(4) .capability-card {
            animation-delay: 4.5s;
          }

          .capability-slide .capability-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transition: left 0.8s ease;
            animation: shimmer 3s ease-in-out infinite;
          }

          .capability-slide .capability-card:active::before {
            left: 100%;
          }

          .capabilities-nav {
            top: 60%;
          }

          .nav-btn {
            width: 40px;
            height: 40px;
            font-size: 16px;
            animation: rotateIn 0.6s ease-out;
          }

          .nav-btn:active {
            animation: bounceScale 0.3s ease;
          }

          .dot {
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }

          .dot.active {
            animation: bounceScale 0.6s ease;
          }

          /* Touch feedback animations */
          .capabilities-scroll-container:active .capability-slide .capability-card {
            transform: scale(0.95);
            transition: transform 0.1s ease;
          }

          /* Slide transition animations */
          .capabilities-scroll-container {
            transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
          }

          /* Enhanced mobile card animations */
          .capability-slide .capability-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset;
          }

          .capability-slide .capability-card:hover {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%);
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 60px rgba(110, 75, 195, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
          }
        }

        @media (max-width: 480px) {
          .capability-slide {
            padding: 0 5px;
          }

          .capability-slide .capability-card {
            max-width: 320px;
            min-height: 420px;
            padding: 24px 20px;
          }

          .nav-btn {
            width: 35px;
            height: 35px;
            font-size: 14px;
          }

          .nav-btn-prev {
            margin-left: -5px;
          }

          .nav-btn-next {
            margin-right: -5px;
          }

          .dot {
            width: 10px;
            height: 10px;
          }
        }

        /* Touch/Swipe Animation Enhancement */
        @media (max-width: 768px) {
          .capabilities-scroll-container:active {
            cursor: grabbing;
          }

          .capability-slide .capability-card:active {
            transform: scale(0.98);
          }
        }

        /* Auto-scroll indicator */
        .mobile-capabilities-container::before {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          height: 3px;
          background: linear-gradient(45deg, #a34b6e, #6e4bc3);
          border-radius: 2px;
          z-index: 5;
          animation: progressBar 3s linear infinite;
        }

        @keyframes progressBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        @media (min-width: 769px) {
          .mobile-capabilities-container::before {
            display: none;
          }
        }
      `}</style>

      <div className="home-container">
        <section className="hero" id="home">
          {/* Floating blur shapes */}
          <div className="floating-shapes">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
          </div>

          {/* Three.js canvas */}
          <canvas 
            ref={heroCanvasRef}
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              zIndex: '0'
            }}
          />

          <div className="container">
            <div className="hero-content">
              <h1>Innovate. Create.</h1>
              <h1>Elevate.</h1>
              <p>Transforming ideas into digital realities with cutting-edge technology and unparalleled expertise. Welcome to the future of innovation.</p>
              <Link href="/contact" className="cta-button">
                Connect Us
              </Link>
            </div>
          </div>
        </section>

        {/* Our Digital Capabilities */}
        <section className="services-section" style={{padding: 'var(--spacing-3xl, 3rem) 0', position: 'relative'}}>
          <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1}}></div>
          <div className="container" style={styles.sectionContent}>
            <div className="capabilities-header">
              <h2 style={styles.sectionTitle} className="section-title-enhanced">Our Digital Capabilities</h2>
              <p style={styles.sectionSubtitle}>Cutting-edge technologies that drive innovation across industries</p>
            </div>

            {/* Mobile Horizontal Scroll Container */}
            <div className="mobile-capabilities-container">
              {/* Navigation Controls */}
              <div className="capabilities-nav">
                <button 
                  className="nav-btn nav-btn-prev"
                  onClick={handlePrevSlide}
                  onMouseEnter={pauseAutoScroll}
                  onMouseLeave={resumeAutoScroll}
                >
                  ←
                </button>
                <button 
                  className="nav-btn nav-btn-next"
                  onClick={handleNextSlide}
                  onMouseEnter={pauseAutoScroll}
                  onMouseLeave={resumeAutoScroll}
                >
                  →
                </button>
              </div>

              {/* Capabilities Scroll Container */}
              <div 
                ref={capabilitiesScrollRef}
                className="capabilities-scroll-container"
                style={{
                  transform: `translateX(-${currentSlide * 25}%)`
                }}
                onMouseEnter={pauseAutoScroll}
                onMouseLeave={resumeAutoScroll}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="capability-slide">
                  <div 
                    style={{
                      ...styles.capabilityCard,
                      ...(hoveredCard === 0 ? styles.capabilityCardHover : {})
                    }} 
                    className="capability-card professional-card"
                    onMouseEnter={() => handleCardHover(0, true)}
                    onMouseLeave={() => handleCardHover(0, false)}
                  >
                    <h3 style={styles.capabilityTitle}>Interactive Simulations</h3>
                    <p style={styles.capabilityDescription}>Create realistic training environments that improve learning retention and reduce costs.</p>
                    <ul style={styles.capabilityFeatures}>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">Realistic Physics</li>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">Multi-user Support</li>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">Progress Tracking</li>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">Custom Scenarios</li>
                    </ul>
                  </div>
                </div>

                <div className="capability-slide">
                  <div 
                    style={{
                      ...styles.capabilityCard,
                      ...(hoveredCard === 1 ? styles.capabilityCardHover : {})
                    }} 
                    className="capability-card"
                    onMouseEnter={() => handleCardHover(1, true)}
                    onMouseLeave={() => handleCardHover(1, false)}
                  >
                    <h3 style={styles.capabilityTitle}>3D Architectural Visualization</h3>
                    <p style={styles.capabilityDescription}>Transform blueprints into immersive 3D experiences for better client presentations.</p>
                    <ul style={styles.capabilityFeatures}>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">Real-time Rendering</li>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">CAD Integration</li>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">Material Libraries</li>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">Lighting Systems</li>
                    </ul>
                  </div>
                </div>

                <div className="capability-slide">
                  <div 
                    style={{
                      ...styles.capabilityCard,
                      ...(hoveredCard === 2 ? styles.capabilityCardHover : {})
                    }} 
                    className="capability-card"
                    onMouseEnter={() => handleCardHover(2, true)}
                    onMouseLeave={() => handleCardHover(2, false)}
                  >
                    <h3 style={styles.capabilityTitle}>Virtual Collaboration</h3>
                    <p style={styles.capabilityDescription}>Enable remote teams to collaborate in shared virtual spaces with natural interactions.</p>
                    <ul style={styles.capabilityFeatures}>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">Spatial Audio</li>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">Gesture Recognition</li>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">Screen Sharing</li>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">Cross-platform</li>
                    </ul>
                  </div>
                </div>

                <div className="capability-slide">
                  <div 
                    style={{
                      ...styles.capabilityCard,
                      ...(hoveredCard === 3 ? styles.capabilityCardHover : {})
                    }} 
                    className="capability-card"
                    onMouseEnter={() => handleCardHover(3, true)}
                    onMouseLeave={() => handleCardHover(3, false)}
                  >
                    <h3 style={styles.capabilityTitle}>Digital Development</h3>
                    <p style={styles.capabilityDescription}>Custom digital application development for various industries and use cases.</p>
                    <ul style={styles.capabilityFeatures}>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">Unity/Unreal</li>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">WebXR Support</li>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">Mobile Apps</li>
                      <li style={styles.capabilityFeatureItem} className="capability-feature-item">Cross-platform</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dot Indicators */}
              <div className="capabilities-dots">
                {[0, 1, 2, 3].map((index) => (
                  <button 
                    key={index}
                    className={`dot ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => handleDotClick(index)}
                    onMouseEnter={pauseAutoScroll}
                    onMouseLeave={resumeAutoScroll}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Horizontal Layout */}
            <div style={styles.capabilitiesRow} className="capabilities-row desktop-horizontal">
              <div 
                style={{
                  ...styles.capabilityCard,
                  ...(hoveredCard === 0 ? styles.capabilityCardHover : {})
                }} 
                className="capability-card professional-card"
                onMouseEnter={() => handleCardHover(0, true)}
                onMouseLeave={() => handleCardHover(0, false)}
              >
                <h3 style={styles.capabilityTitle}>Interactive Simulations</h3>
                <p style={styles.capabilityDescription}>Create realistic training environments that improve learning retention and reduce costs.</p>
                <ul style={styles.capabilityFeatures}>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">Realistic Physics</li>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">Multi-user Support</li>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">Progress Tracking</li>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">Custom Scenarios</li>
                </ul>
              </div>
            
              <div 
                style={{
                  ...styles.capabilityCard,
                  ...(hoveredCard === 1 ? styles.capabilityCardHover : {})
                }} 
                className="capability-card"
                onMouseEnter={() => handleCardHover(1, true)}
                onMouseLeave={() => handleCardHover(1, false)}
              >
                <h3 style={styles.capabilityTitle}>3D Architectural Visualization</h3>
                <p style={styles.capabilityDescription}>Transform blueprints into immersive 3D experiences for better client presentations.</p>
                <ul style={styles.capabilityFeatures}>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">Real-time Rendering</li>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">CAD Integration</li>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">Material Libraries</li>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">Lighting Systems</li>
                </ul>
              </div>
            
              <div 
                style={{
                  ...styles.capabilityCard,
                  ...(hoveredCard === 2 ? styles.capabilityCardHover : {})
                }} 
                className="capability-card"
                onMouseEnter={() => handleCardHover(2, true)}
                onMouseLeave={() => handleCardHover(2, false)}
              >
                <h3 style={styles.capabilityTitle}>Virtual Collaboration</h3>
                <p style={styles.capabilityDescription}>Enable remote teams to collaborate in shared virtual spaces with natural interactions.</p>
                <ul style={styles.capabilityFeatures}>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">Spatial Audio</li>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">Gesture Recognition</li>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">Screen Sharing</li>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">Cross-platform</li>
                </ul>
              </div>
            
              <div 
                style={{
                  ...styles.capabilityCard,
                  ...(hoveredCard === 3 ? styles.capabilityCardHover : {})
                }} 
                className="capability-card"
                onMouseEnter={() => handleCardHover(3, true)}
                onMouseLeave={() => handleCardHover(3, false)}
              >
                <h3 style={styles.capabilityTitle}>Digital Development</h3>
                <p style={styles.capabilityDescription}>Custom digital application development for various industries and use cases.</p>
                <ul style={styles.capabilityFeatures}>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">Unity/Unreal</li>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">WebXR Support</li>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">Mobile Apps</li>
                  <li style={styles.capabilityFeatureItem} className="capability-feature-item">Cross-platform</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section>
          <div className="container">
            <div style={styles.ctaSection}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontSize: '36px', marginBottom: 'var(--spacing-md, 1rem)' }} className="text-gradient professional-heading">
                  Ready to Transform Your Business?
                </h2>
                <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: 'var(--spacing-xl, 2rem)' }} className="fade-in-up professional-subtext">
                  Join thousands of companies leveraging our cutting-edge solutions
                </p>
                <div style={{ display: 'flex', gap: 'var(--spacing-lg, 1.5rem)', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/solutions" className="btn-professional bounce-hover">
                    Explore All Solutions →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}