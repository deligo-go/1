import { useState, useEffect } from 'react';

// Import images from assets
import headerBackground from '../assests/careers-header.jpg';
import ctaBackground from '../assests/cta-bg.jpg';
import cloudArchitect from '../assests/cloud-architect.jpg';
import fullstackDev from '../assests/fullstack-dev.jpg';
import digitalMarketing from '../assests/digitalmarketing.jpg';
import vrArDev from '../assests/vr-ar-dev.jpg';
import mobileDev from '../assests/mobile-dev.jpg';
import brandDesigner from '../assests/brand-designer.jpg';

export default function Careers() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 1024 && windowWidth > 768;

  const styles = {
    pageHeader: {
      padding: isMobile ? '80px 20px 60px' : isTablet ? '120px 40px 80px' : '150px 40px 100px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: `url(${headerBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: isMobile ? '60vh' : '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(10, 10, 20, 0.85)',
    },
    headerContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '100%',
      width: '100%',
    },
    pageTitle: {
      fontSize: isMobile ? '36px' : isTablet ? '54px' : '72px',
      fontWeight: 800,
      marginBottom: '20px',
      color: 'white',
      textShadow: '0 4px 20px rgba(0,0,0,0.3)',
      lineHeight: 1.2,
      position: 'relative',
      display: 'inline-block',
      padding: '0 10px',
    },
    titleBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      mixBlendMode: 'overlay',
      opacity: 0.7,
      zIndex: -1,
      borderRadius: '20px',
      padding: '0 20px',
    },
    pageSubtitle: {
      fontSize: isMobile ? '16px' : isTablet ? '18px' : '22px',
      opacity: 0.9,
      maxWidth: isMobile ? '90%' : '700px',
      margin: '0 auto',
      color: 'white',
      textShadow: '0 2px 10px rgba(0,0,0,0.2)',
      lineHeight: 1.5,
      padding: '0 20px',
    },
    floatingShapes: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      overflow: 'hidden',
      display: isMobile ? 'none' : 'block', // Hide on mobile for performance
    },
    shape: {
      position: 'absolute',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)',
      filter: 'blur(30px)',
    },
    mainSection: {
      padding: isMobile ? '40px 20px' : isTablet ? '60px 40px' : '80px 40px',
      background: '#0a0a14',
    },
    rolesContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
    },
    roleCard: {
      display: 'flex',
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: isMobile ? '20px' : isTablet ? '40px' : '60px',
      marginBottom: isMobile ? '60px' : isTablet ? '80px' : '120px',
      flexDirection: isMobile ? 'column' : 'row',
    },
    roleCardReverse: {
      flexDirection: isMobile ? 'column' : isTablet ? 'row-reverse' : 'row-reverse',
    },
    roleImage: {
      width: isMobile ? '100%' : '50%',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      transition: 'all 0.3s ease',
      position: 'relative',
      maxHeight: isMobile ? '250px' : '400px',
      objectFit: 'cover',
    },
    roleImageHover: {
      transform: isMobile ? 'none' : 'scale(1.02)',
      boxShadow: isMobile ? '0 20px 40px rgba(0,0,0,0.3)' : `
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 15px #a34b6e,
        0 0 20px #6e4bc3,
        0 0 25px #45b7d1,
        0 0 30px #45b7d1
      `,
    },
    roleContent: {
      width: isMobile ? '100%' : '50%',
      textAlign: isMobile ? 'center' : 'left',
    },
    roleTitle: {
      fontSize: isMobile ? '28px' : isTablet ? '36px' : '42px',
      fontWeight: 700,
      marginBottom: '20px',
      background: 'linear-gradient(90deg, #a34b6e, #6e4bc3, #45b7d1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1.2,
    },
    roleDescription: {
      fontSize: isMobile ? '16px' : '18px',
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.8)',
      marginBottom: '30px',
      textAlign: isMobile ? 'center' : 'left',
    },
    roleSkills: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '30px',
      justifyContent: isMobile ? 'center' : 'flex-start',
    },
    skillTag: {
      padding: '8px 15px',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '50px',
      fontSize: isMobile ? '12px' : '14px',
      color: 'rgba(255,255,255,0.8)',
      border: '1px solid rgba(255,255,255,0.1)',
      whiteSpace: 'nowrap',
    },
    contactButton: {
      display: 'inline-block',
      padding: isMobile ? '14px 28px' : '12px 30px',
      background: 'linear-gradient(90deg, #a34b6e, #6e4bc3)',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '50px',
      fontWeight: 600,
      fontSize: isMobile ? '14px' : '16px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(110, 75, 195, 0.4)',
      width: isMobile ? '200px' : 'auto',
      textAlign: 'center',
    },
    contactButtonHover: {
      transform: isMobile ? 'none' : 'translateY(-3px)',
      boxShadow: isMobile ? '0 5px 15px rgba(110, 75, 195, 0.4)' : '0 8px 25px rgba(110, 75, 195, 0.6)',
    },
    ctaSection: {
      textAlign: 'center',
      padding: isMobile ? '60px 20px 40px' : isTablet ? '70px 30px 40px' : '80px 40px 40px',
      backgroundImage: `url(${ctaBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      borderRadius: '20px',
      margin: isMobile ? '0 20px' : '0 40px',
      overflow: 'hidden',
    },
    ctaOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(10, 10, 20, 0.85)',
      zIndex: 1,
    },
    ctaContent: {
      position: 'relative',
      zIndex: 2,
    },
    ctaTitle: {
      fontSize: isMobile ? '24px' : isTablet ? '30px' : '36px',
      fontWeight: 700,
      marginBottom: '20px',
      background: 'linear-gradient(90deg, #a34b6e, #6e4bc3)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1.3,
    },
    ctaText: {
      fontSize: isMobile ? '16px' : '18px',
      maxWidth: isMobile ? '100%' : '700px',
      margin: '0 auto 30px',
      color: 'rgba(255,255,255,0.8)',
      lineHeight: 1.6,
      padding: isMobile ? '0 10px' : '0',
    },
  };

  const roles = [
    {
      title: "Cloud Architect",
      description: "Design and implement cutting-edge cloud solutions that power our global infrastructure using AWS, Azure, and GCP to build scalable, secure systems.",
      image: cloudArchitect,
      skills: ["Cloud Infrastructure", "Security", "DevOps", "Microservices", "Serverless", "Monitoring"]
    },
    {
      title: "Fullstack Developer",
      description: "Create seamless digital experiences from frontend to backend using modern frameworks like React, Node.js, and Next.js to build performant applications.",
      image: fullstackDev,
      skills: ["React/Vue/Angular", "Node.js/Python", "Databases", "APIs", "UI/UX", "Performance"]
    },
    {
      title: "Digital Marketing Strategist",
      description: "Craft data-driven marketing campaigns that drive growth and engagement through creative strategies combined with analytics.",
      image: digitalMarketing,
      skills: ["Analytics", "SEO/SEM", "Social Media", "Content Creation", "Growth", "Targeting"]
    },
    {
      title: "VR/AR Developer",
      description: "Push the boundaries of immersive technology by creating groundbreaking virtual and augmented reality experiences using Unity and Unreal Engine.",
      image: vrArDev,
      skills: ["Game Engines", "3D Modeling", "XR Hardware", "Spatial Computing", "Performance", "AI Integration"]
    },
    {
      title: "Mobile App Developer",
      description: "Build performant, beautiful mobile applications for iOS and Android that users love and rely on every day.",
      image: mobileDev,
      skills: ["Native Development", "Performance", "Security", "State Management", "Analytics", "Tooling"]
    },
    {
      title: "Brand Designer",
      description: "Shape our visual identity and create compelling brand experiences through stunning visuals, animations, and branding.",
      image: brandDesigner,
      skills: ["Visual Design", "Typography", "Motion Design", "Creative Tools", "Brand Strategy", "Digital Design"]
    }
  ];

  const generateRandomShapes = () => {
    if (isMobile) return []; // Don't generate shapes on mobile
    
    const shapes = [];
    const shapeCount = isTablet ? 6 : 10;
    
    for (let i = 0; i < shapeCount; i++) {
      const size = Math.random() * (isTablet ? 200 : 300) + (isTablet ? 80 : 100);
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const opacity = Math.random() * 0.2 + 0.1;
      
      shapes.push(
        <div 
          key={i}
          style={{
            ...styles.shape,
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}%`,
            top: `${y}%`,
            opacity: opacity,
            background: i % 2 === 0 
              ? 'rgba(163,75,110,0.3)' 
              : i % 3 === 0 
                ? 'rgba(110,75,195,0.3)' 
                : 'rgba(69,183,209,0.3)',
          }}
        />
      );
    }
    return shapes;
  };

  const handleContactRedirect = () => {
    // Redirect to contact us page - adjust the path as needed for your routing setup
    window.location.href = '/contact';
  };

  return (
    <div style={{ background: '#0a0a14', color: 'white', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={styles.pageHeader}>
        <div style={styles.headerOverlay}></div>
        {!isMobile && (
          <div style={styles.floatingShapes}>
            {generateRandomShapes()}
          </div>
        )}
        <div style={styles.headerContent}>
          <h1 style={styles.pageTitle}>
            <span style={styles.titleBackground}></span>
            Build the Future With Us
          </h1>
          <p style={styles.pageSubtitle}>
            Join our team of innovators and help create cutting-edge digital experiences.
            Explore exciting career opportunities across multiple disciplines.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={styles.mainSection}>
        <div style={styles.rolesContainer}>
          {roles.map((role, index) => (
            <div 
              key={index} 
              style={{
                ...styles.roleCard,
                ...(!isMobile && index % 2 !== 0 && styles.roleCardReverse)
              }}
            >
              <img 
                src={role.image}
                alt={role.title}
                style={{
                  ...styles.roleImage,
                  ...(hoveredCard === `image-${index}` && styles.roleImageHover)
                }}
                onMouseEnter={() => !isMobile && setHoveredCard(`image-${index}`)}
                onMouseLeave={() => !isMobile && setHoveredCard(null)}
              />
              <div style={styles.roleContent}>
                <h2 style={styles.roleTitle}>{role.title}</h2>
                <p style={styles.roleDescription}>{role.description}</p>
                <div style={styles.roleSkills}>
                  {role.skills.map((skill, i) => (
                    <span key={i} style={styles.skillTag}>{skill}</span>
                  ))}
                </div>
                <button 
                  style={{
                    ...styles.contactButton,
                    ...(hoveredCard === `contact-${index}` && styles.contactButtonHover)
                  }}
                  onClick={handleContactRedirect}
                  onMouseEnter={() => !isMobile && setHoveredCard(`contact-${index}`)}
                  onMouseLeave={() => !isMobile && setHoveredCard(null)}
                >
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={styles.ctaSection}>
          <div style={styles.ctaOverlay}></div>
          <div style={styles.ctaContent}>
            <h3 style={styles.ctaTitle}>Not Seeing Your Perfect Role?</h3>
            <p style={styles.ctaText}>
              We're always looking for talented individuals. Contact us to discuss potential opportunities
              and we'll get back to you when a matching position becomes available.
            </p>
            <button 
              style={{
                ...styles.contactButton,
                ...(hoveredCard === 'general-contact' && styles.contactButtonHover)
              }}
              onClick={handleContactRedirect}
              onMouseEnter={() => !isMobile && setHoveredCard('general-contact')}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  ); 
}