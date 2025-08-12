import { useState, useEffect } from 'react';
import missionBg from '../assests/mission.png';

export default function Mission() {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const mission = {
    title: "Our Mission",
    subtitle: "Empowering Digital Transformation Through Innovation",
    description: "At VIRUZVERSE, we are committed to revolutionizing the digital landscape by creating cutting-edge solutions that bridge the gap between emerging technologies and real-world applications. We empower businesses, educational institutions, and individuals to harness the full potential of AI, VR/AR, cybersecurity, and digital platforms to solve complex challenges and unlock new possibilities.",
    icon: "🚀",
    color: "#6e4bc3"
  };

  const vision = {
    title: "Our Vision",
    subtitle: "Building Tomorrow's Digital Infrastructure Today",
    description: "We envision a future where technology seamlessly integrates with human potential, creating immersive experiences that educate, protect, and inspire. Our goal is to become the global leader in comprehensive digital solutions, fostering innovation that transforms industries and empowers the next generation of digital leaders.",
    icon: "🔮",
    color: "#a34b6e"
  };

  const goals = {
    title: "Our Goals",
    subtitle: "Strategic Objectives for Digital Excellence",
    description: "We aim to establish VIRUZVERSE as the premier destination for innovative digital solutions, serving over 100,000 active users globally while maintaining 99.99% security standards. Our commitment extends to educating 1 million individuals in digital literacy and creating sustainable, impactful technology that transforms industries and empowers communities worldwide.",
    icon: "🎯",
    color: "#45b7d1"
  };

  const styles = {
    pageWrapper: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    pageHeader: {
      padding: '120px 0 80px',
      textAlign: 'center',
      background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.7) 100%), url(${missionBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, rgba(110,75,195,0.1) 0%, rgba(163,75,110,0.1) 50%, rgba(69,183,209,0.1) 100%)',
      animation: 'pulse 4s ease-in-out infinite',
    },
    pageTitle: {
      fontSize: 'clamp(48px, 8vw, 84px)',
      fontWeight: 800,
      marginBottom: '24px',
      color: '#ffffff',
      textShadow: '0 4px 20px rgba(110,75,195,0.5)',
      zIndex: 2,
      position: 'relative',
      letterSpacing: '-0.02em',
      background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    pageSubtitle: {
      fontSize: '24px',
      color: '#ffffff',
      opacity: 0.9,
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: 1.5,
      textShadow: '0 2px 10px rgba(0,0,0,0.7)',
      zIndex: 2,
      position: 'relative',
      fontWeight: 300,
    },
    mainContent: {
      position: 'relative',
      zIndex: 1,
      background: 'linear-gradient(180deg, rgba(15,15,35,0.95) 0%, rgba(26,26,46,0.95) 100%)',
      backdropFilter: 'blur(10px)',
    },
    sectionWrapper: {
      padding: '100px 0',
      position: 'relative',
    },
    sectionCard: {
      background: 'rgba(255,255,255,0.02)',
      borderRadius: '32px',
      padding: '60px 40px',
      border: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
      overflow: 'hidden',
      backdropFilter: 'blur(20px)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: 'translateY(20px)',
      opacity: 0,
    },
    sectionCardVisible: {
      transform: 'translateY(0)',
      opacity: 1,
    },
    sectionIcon: {
      fontSize: '80px',
      display: 'block',
      textAlign: 'center',
      marginBottom: '32px',
      filter: 'drop-shadow(0 4px 20px rgba(110,75,195,0.3))',
      animation: 'float 3s ease-in-out infinite',
    },
    sectionTitle: {
      fontSize: 'clamp(36px, 5vw, 52px)',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: '16px',
      background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.02em',
    },
    sectionSubtitle: {
      fontSize: '22px',
      textAlign: 'center',
      opacity: 0.8,
      marginBottom: '32px',
      fontStyle: 'italic',
      fontWeight: 300,
      color: '#a5b4fc',
    },
    sectionDescription: {
      textAlign: 'center',
      fontSize: '18px',
      opacity: 0.9,
      maxWidth: '900px',
      margin: '0 auto',
      lineHeight: 1.8,
      color: '#e2e8f0',
      fontWeight: 300,
    },
    decorativeElement: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      opacity: 0.1,
      filter: 'blur(40px)',
      animation: 'rotate 20s linear infinite',
    },
    decorativeElement1: {
      top: '-100px',
      left: '-100px',
      background: 'linear-gradient(135deg, #6e4bc3, #a34b6e)',
    },
    decorativeElement2: {
      bottom: '-100px',
      right: '-100px',
      background: 'linear-gradient(135deg, #45b7d1, #4bc36e)',
    },
    glowEffect: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at center, rgba(110,75,195,0.1) 0%, transparent 70%)',
      opacity: 0,
      transition: 'opacity 0.6s ease',
    },
    spacer: {
      height: '80px',
    }
  };

  return (
    <>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <div className="container">
          <h1 style={styles.pageTitle}>
            Our Mission
          </h1>
          <p style={styles.pageSubtitle}>
            Driving innovation, empowering transformation, and building the future of digital solutions
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={styles.section}>
        <div className="container">
          <div style={styles.missionVisionGrid}>
            {/* Mission Card */}
            <div 
              style={styles.missionVisionCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(110, 75, 195, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(110, 75, 195, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              <h2 style={styles.cardTitle}>{mission.title}</h2>
              <h3 style={styles.cardSubtitle}>{mission.subtitle}</h3>
              <p style={styles.cardDescription}>{mission.description}</p>
            </div>

            {/* Vision Card */}
            <div 
              style={styles.missionVisionCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(163, 75, 110, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(163, 75, 110, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              <h2 style={styles.cardTitle}>{vision.title}</h2>
              <h3 style={styles.cardSubtitle}>{vision.subtitle}</h3>
              <p style={styles.cardDescription}>{vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ ...styles.section, background: 'var(--color-surface)' }}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Our Core Values</h2>
          <p style={styles.sectionDescription}>
            These fundamental principles guide every decision we make and every solution we create
          </p>
          <div style={styles.valuesGrid}>
            {coreValues.map((value, index) => (
              <div 
                key={index}
                style={{
                  ...styles.valueCard,
                  transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : '',
                  boxShadow: hoveredCard === index ? `0 20px 40px ${value.color}40` : '',
                  borderColor: hoveredCard === index ? `${value.color}80` : 'rgba(255,255,255,0.1)'
                }}
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
              >
                <div style={styles.valueIcon}>{value.icon}</div>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section style={styles.section}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Strategic Goals</h2>
          <p style={styles.sectionDescription}>
            Our roadmap for creating lasting impact and driving meaningful change in the digital landscape
          </p>
          <div style={styles.goalsGrid}>
            {strategicGoals.map((category, index) => (
              <div 
                key={index}
                style={styles.goalCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 15px 30px ${category.color}30`;
                  e.currentTarget.style.borderColor = `${category.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={styles.goalCategory}>
                  <span style={styles.goalIcon}>{category.icon}</span>
                  <h3 style={styles.goalCategoryTitle}>{category.category}</h3>
                </div>
                <ul style={styles.goalsList}>
                  {category.goals.map((goal, goalIndex) => (
                    <li key={goalIndex} style={styles.goalItem}>
                      <span style={styles.goalBullet}>▸</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section style={{ ...styles.section, background: 'var(--color-surface)' }}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Guiding Principles</h2>
          <p style={styles.sectionDescription}>
            The foundational beliefs that shape our approach to technology and business
          </p>
          <div style={styles.principlesGrid}>
            {keyPrinciples.map((principle, index) => (
              <div 
                key={index}
                style={styles.principleCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(110, 75, 195, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={styles.principleIcon}>{principle.icon}</div>
                <h3 style={styles.principleTitle}>{principle.title}</h3>
                <p style={styles.principleDescription}>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="container">
          <div style={styles.ctaSection}>
            <h2 style={styles.ctaTitle}>
              Join Our Mission
            </h2>
            <p style={styles.ctaDescription}>
              Ready to be part of something transformative? Explore how VIRUZVERSE can help you achieve your digital goals.
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/about" className="btn-primary">
                Learn About Our Team
              </a>
              <a href="/contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
