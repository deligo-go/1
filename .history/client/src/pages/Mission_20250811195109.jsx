import missionBg from '../assests/mission.png';

export default function Mission() {

  const mission = {
    title: "Our Mission",
    subtitle: "Empowering Digital Transformation Through Innovation",
    description: "At VIRUZVERSE, we are committed to revolutionizing the digital landscape by creating cutting-edge solutions that bridge the gap between emerging technologies and real-world applications. We empower businesses, educational institutions, and individuals to harness the full potential of AI, VR/AR, cybersecurity, and digital platforms to solve complex challenges and unlock new possibilities.",
    color: "#6e4bc3"
  };

  const vision = {
    title: "Our Vision",
    subtitle: "Building Tomorrow's Digital Infrastructure Today",
    description: "We envision a future where technology seamlessly integrates with human potential, creating immersive experiences that educate, protect, and inspire. Our goal is to become the global leader in comprehensive digital solutions, fostering innovation that transforms industries and empowers the next generation of digital leaders.",
    color: "#a34b6e"
  };

  const goals = {
    title: "Our Goals",
    subtitle: "Strategic Objectives for Digital Excellence",
    description: "We aim to establish VIRUZVERSE as the premier destination for innovative digital solutions, serving over 100,000 active users globally while maintaining 99.99% security standards. Our commitment extends to educating 1 million individuals in digital literacy and creating sustainable, impactful technology that transforms industries and empowers communities worldwide.",
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
      borderRadius: '16px',
      padding: '60px 40px',
      border: '1px solid rgba(255,255,255,0.1)',
      position: 'relative',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
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

    spacer: {
      height: '80px',
    }
  };

  const renderSection = (section, index) => {
    return (
      <section key={index} style={styles.sectionWrapper}>
        <div className="container">
          <div 
            style={styles.sectionCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${section.color}40`;
              e.currentTarget.style.boxShadow = `0 4px 20px ${section.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h2 style={styles.sectionTitle}>{section.title}</h2>
            <h3 style={styles.sectionSubtitle}>{section.subtitle}</h3>
            <p style={styles.sectionDescription}>{section.description}</p>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <div style={styles.headerOverlay}></div>
        <div className="container">
          <h1 style={styles.pageTitle}>
            Mission, Vision & Goals
          </h1>
          <p style={styles.pageSubtitle}>
            Driving innovation, empowering transformation, and building the future of digital solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Mission Section */}
        {renderSection(mission, 0)}
        
        <div style={styles.spacer}></div>
        
        {/* Vision Section */}
        {renderSection(vision, 1)}
        
        <div style={styles.spacer}></div>
        
        {/* Goals Section */}
        {renderSection(goals, 2)}
          </div>
        </div>
  );
}
