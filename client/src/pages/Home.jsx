import { Link } from 'wouter';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const heroCanvasRef = useRef();
  const animationIdRef = useRef();
  const [hoveredCard, setHoveredCard] = useState(null);

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
      gridTemplateColumns: 'repeat(4, 1fr)',
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
          display: flex; /* Changed to flex for centering */
          justify-content: center; /* Center text horizontally */
          align-items: center; /* Center text vertically */
          text-align: center; /* Fallback for text alignment */
          padding: 18px 35px;
          background: linear-gradient(45deg, #a34b6e, #6e4bc3);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: bold;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          animation: fadeInUp 1s ease-out 0.4s both;
          position: relative;
          overflow: hidden;
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

        /* Bullet point styles for capability features */
        .capability-feature-item::before {
          content: '•';
          color: #b191f5ff;
          font-weight: bold;
          position: absolute;
          left: 0;
          font-size: 20px;
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

        /* Responsive tweaks */
        @media (max-width: 992px) {
          .hero h1 { font-size: 3.5rem; }
          .hero p { font-size: 1.1rem; }
        }
        @media (max-width: 768px) {
          .hero h1 { font-size: 2.8rem; text-align: center; }
          .hero p { text-align: center; }
          .cta-button { 
            display: flex; /* Ensure flex for centering */
            justify-content: center; /* Center text horizontally */
            align-items: center; /* Center text vertically */
            text-align: center; /* Fallback */
            margin: 0 auto; 
            font-weight: bold; /* Match web styling */
            letter-spacing: 0.8px; /* Match web styling */
            text-transform: uppercase; /* Match web styling */
          }
        }
        @media (max-width: 480px) {
          .hero h1 { font-size: 2rem; }
          .hero p { font-size: 1rem; }
          .cta-button { 
            padding: 12px 25px; 
            font-size: 0.9rem; 
            font-weight: bold; /* Match web styling */
            letter-spacing: 0.8px; /* Match web styling */
            text-transform: uppercase; /* Match web styling */
            display: flex; /* Ensure flex for centering */
            justify-content: center; /* Center text horizontally */
            align-items: center; /* Center text vertically */
            text-align: center; /* Fallback */
          }
        }

        /* Responsive styles for capabilities section */
        @media (max-width: 1200px) {
          .capabilities-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        @media (max-width: 768px) {
          .capabilities-row {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .capability-card {
            min-width: auto;
            max-width: 100%;
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
        <section className="services-section" style={{padding: 'var(--spacing-3xl) 0', position: 'relative'}}>
          <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1}}></div>
          <div className="container" style={styles.sectionContent}>
            <div className="capabilities-header">
              <h2 style={styles.sectionTitle} className="section-title-enhanced">Our Digital Capabilities</h2>
              <p style={styles.sectionSubtitle}>Cutting-edge technologies that drive innovation across industries</p>
            </div>
          
          <div style={styles.capabilitiesRow} className="capabilities-row">
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
                <h2 style={{ fontSize: '36px', marginBottom: 'var(--spacing-md)' }} className="text-gradient professional-heading">
                  Ready to Transform Your Business?
                </h2>
                <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: 'var(--spacing-xl)' }} className="fade-in-up professional-subtext">
                  Join thousands of companies leveraging our cutting-edge solutions
                </p>
                <div style={{ display: 'flex', gap: 'var(--spacing-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
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