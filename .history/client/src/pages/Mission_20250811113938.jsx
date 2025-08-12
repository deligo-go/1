import { useState } from 'react';

export default function Mission() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const mission = {
    title: "Our Mission",
    subtitle: "Empowering Digital Transformation Through Innovation",
    description: "At VIRUZVERSE, we are committed to revolutionizing the digital landscape by creating cutting-edge solutions that bridge the gap between emerging technologies and real-world applications. We empower businesses, educational institutions, and individuals to harness the full potential of AI, VR/AR, cybersecurity, and digital platforms to solve complex challenges and unlock new possibilities."
  };

  const vision = {
    title: "Our Vision",
    subtitle: "Building Tomorrow's Digital Infrastructure Today",
    description: "We envision a future where technology seamlessly integrates with human potential, creating immersive experiences that educate, protect, and inspire. Our goal is to become the global leader in comprehensive digital solutions, fostering innovation that transforms industries and empowers the next generation of digital leaders."
  };

  const coreValues = [
    {
      icon: "🚀",
      title: "Innovation Excellence",
      description: "We push the boundaries of what's possible, constantly exploring new technologies and methodologies to deliver groundbreaking solutions.",
      color: "#6e4bc3"
    },
    {
      icon: "🛡️",
      title: "Security First",
      description: "Every solution we build prioritizes security, privacy, and data protection, ensuring our clients' digital assets remain safe and compliant.",
      color: "#a34b6e"
    },
    {
      icon: "🎯",
      title: "Client-Centric Approach",
      description: "Our success is measured by our clients' success. We build lasting partnerships through exceptional service and tailored solutions.",
      color: "#45b7d1"
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "We strive to make a positive impact on communities worldwide, using technology as a force for education, protection, and empowerment.",
      color: "#4bc36e"
    },
    {
      icon: "🎓",
      title: "Continuous Learning",
      description: "We foster a culture of continuous learning and growth, staying ahead of technology trends and industry best practices.",
      color: "#c34b6e"
    },
    {
      icon: "🤝",
      title: "Collaborative Excellence",
      description: "We believe in the power of collaboration, working closely with clients, partners, and our team to achieve exceptional results.",
      color: "#6ec34b"
    }
  ];

  const strategicGoals = [
    {
      category: "Technology Leadership",
      goals: [
        "Pioneer next-generation VR/AR solutions for education and training",
        "Develop AI-powered cybersecurity platforms with 99.99% threat detection",
        "Create seamless integration between digital and physical experiences",
        "Advance immersive learning technologies for global adoption"
      ],
      icon: "⚡",
      color: "#6e4bc3"
    },
    {
      category: "Market Expansion",
      goals: [
        "Establish presence in 25+ countries by 2026",
        "Serve 100,000+ active users across our platforms",
        "Partner with 500+ educational institutions globally",
        "Achieve $100M ARR through diversified solution portfolio"
      ],
      icon: "📈",
      color: "#a34b6e"
    },
    {
      category: "Social Impact",
      goals: [
        "Provide digital literacy training to 1M+ individuals",
        "Support 10,000+ students through our education initiatives",
        "Reduce cybersecurity incidents by 80% for our clients",
        "Create 1,000+ high-tech jobs in emerging markets"
      ],
      icon: "🌟",
      color: "#45b7d1"
    }
  ];

  const keyPrinciples = [
    {
      title: "Ethical Technology",
      description: "We develop technology responsibly, considering its impact on society, privacy, and human well-being.",
      icon: "⚖️"
    },
    {
      title: "Sustainable Innovation",
      description: "Our solutions are designed for long-term sustainability, both environmentally and economically.",
      icon: "🌱"
    },
    {
      title: "Inclusive Design",
      description: "We create accessible solutions that serve diverse communities and bridge digital divides.",
      icon: "🌈"
    },
    {
      title: "Quality Assurance",
      description: "We maintain the highest standards of quality in every product, service, and interaction.",
      icon: "✨"
    }
  ];

  const handleCardHover = (index, isHovering) => {
    setHoveredCard(isHovering ? index : null);
  };

  const styles = {
    pageHeader: {
      padding: 'var(--spacing-3xl) 0',
      textAlign: 'center',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
      marginTop: '80px',
      position: 'relative',
      overflow: 'hidden',
    },
    pageTitle: {
      fontSize: 'clamp(40px, 7vw, 72px)',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
      background: 'linear-gradient(135deg, #ffffff, #a34b6e, #6e4bc3, #45b7d1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    pageSubtitle: {
      fontSize: '22px',
      opacity: 0.9,
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: 1.4,
    },
    section: {
      padding: 'var(--spacing-3xl) 0',
    },
    sectionTitle: {
      fontSize: '42px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: 'var(--spacing-md)',
    },
    sectionSubtitle: {
      fontSize: '20px',
      textAlign: 'center',
      opacity: 0.8,
      marginBottom: 'var(--spacing-xl)',
      fontStyle: 'italic',
    },
    sectionDescription: {
      textAlign: 'center',
      fontSize: '18px',
      opacity: 0.9,
      maxWidth: '900px',
      margin: '0 auto var(--spacing-2xl)',
      lineHeight: 1.6,
    },
    missionVisionGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
      gap: 'var(--spacing-2xl)',
      marginBottom: 'var(--spacing-3xl)',
    },
    missionVisionCard: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--spacing-2xl)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
      position: 'relative',
      overflow: 'hidden',
    },
    cardTitle: {
      fontSize: '32px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
      background: 'var(--gradient-primary)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    cardSubtitle: {
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-lg)',
      opacity: 0.8,
    },
    cardDescription: {
      fontSize: '16px',
      lineHeight: 1.7,
      opacity: 0.9,
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'var(--spacing-xl)',
      marginTop: 'var(--spacing-2xl)',
    },
    valueCard: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },
    valueIcon: {
      fontSize: '48px',
      marginBottom: 'var(--spacing-md)',
    },
    valueTitle: {
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-md)',
    },
    valueDescription: {
      fontSize: '14px',
      lineHeight: 1.6,
      opacity: 0.8,
    },
    goalsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: 'var(--spacing-xl)',
      marginTop: 'var(--spacing-2xl)',
    },
    goalCard: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
    },
    goalCategory: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-md)',
      marginBottom: 'var(--spacing-lg)',
    },
    goalIcon: {
      fontSize: '36px',
    },
    goalCategoryTitle: {
      fontSize: '22px',
      fontWeight: 700,
    },
    goalsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    goalItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--spacing-sm)',
      marginBottom: 'var(--spacing-md)',
      fontSize: '15px',
      lineHeight: 1.5,
      opacity: 0.9,
    },
    goalBullet: {
      color: 'var(--color-accent-3)',
      fontWeight: 700,
      fontSize: '16px',
      marginTop: '2px',
    },
    principlesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'var(--spacing-lg)',
      marginTop: 'var(--spacing-2xl)',
    },
    principleCard: {
      background: 'rgba(255,255,255,0.03)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-lg)',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
    },
    principleIcon: {
      fontSize: '36px',
      marginBottom: 'var(--spacing-md)',
    },
    principleTitle: {
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-sm)',
    },
    principleDescription: {
      fontSize: '14px',
      lineHeight: 1.5,
      opacity: 0.8,
    },
    ctaSection: {
      textAlign: 'center',
      padding: 'var(--spacing-3xl) 0',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
      borderRadius: 'var(--radius-xl)',
      margin: 'var(--spacing-3xl) 0',
    },
    ctaTitle: {
      fontSize: '36px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
    },
    ctaDescription: {
      fontSize: '18px',
      opacity: 0.9,
      marginBottom: 'var(--spacing-xl)',
      maxWidth: '600px',
      margin: '0 auto var(--spacing-xl)',
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
