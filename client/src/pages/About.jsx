import { Link } from 'wouter';

export default function About() {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in cybersecurity and AI. Former CISO at Fortune 500 companies.',
      avatar: '👨‍💼',
      skills: ['Strategy', 'Cybersecurity', 'AI/ML', 'Leadership']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Expert in VR/AR technologies and cloud infrastructure. PhD in Computer Science from Stanford.',
      avatar: '👩‍💻',
      skills: ['VR/AR', 'Cloud Architecture', 'Full-stack', 'DevOps']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist focused on user experience and market fit. 12+ years in product management.',
      avatar: '👨‍🔬',
      skills: ['Product Strategy', 'UX Design', 'Analytics', 'Agile']
    },
    {
      name: 'Emily Davis',
      role: 'Head of Security',
      bio: 'Cybersecurity expert specializing in threat detection and incident response. Former NSA analyst.',
      avatar: '👩‍🔬',
      skills: ['Threat Detection', 'Incident Response', 'Compliance', 'Risk Management']
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'VIRUZVERSE was founded with a vision to revolutionize cybersecurity through AI.',
      icon: '🚀'
    },
    {
      year: '2021',
      title: 'First Product Launch',
      description: 'Launched Sentinel AI, our flagship cybersecurity platform, to early adopters.',
      icon: '🛡️'
    },
    {
      year: '2022',
      title: 'VR Division Established',
      description: 'Expanded into VR and 3D solutions with the launch of our VR Training Suite.',
      icon: '🥽'
    },
    {
      year: '2023',
      title: 'Series A Funding',
      description: 'Raised $25M Series A to accelerate product development and market expansion.',
      icon: '💰'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Opened offices in Europe and Asia, serving enterprise clients worldwide.',
      icon: '🌍'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of technology to solve tomorrow\'s problems today.',
      icon: '💡'
    },
    {
      title: 'Security by Design',
      description: 'Every solution we build prioritizes security, privacy, and data protection.',
      icon: '🔒'
    },
    {
      title: 'Customer Success',
      description: 'Our success is measured by our customers\' success and satisfaction.',
      icon: '🎯'
    },
    {
      title: 'Global Impact',
      description: 'We aim to make a positive impact on businesses and communities worldwide.',
      icon: '🌟'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users', icon: '👥' },
    { number: '50+', label: 'Enterprise Clients', icon: '🏢' },
    { number: '99.9%', label: 'Uptime', icon: '⚡' },
    { number: '24/7', label: 'Support', icon: '🛟' }
  ];

  const styles = {
    pageHeader: {
      padding: 'var(--spacing-3xl) 0',
      textAlign: 'center',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '120px',
      paddingBottom: 'var(--spacing-2xl)',
    },
    pageTitle: {
      fontSize: 'clamp(40px, 7vw, 72px)',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
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
      marginBottom: 'var(--spacing-xl)',
    },
    sectionDescription: {
      textAlign: 'center',
      fontSize: '18px',
      opacity: 0.8,
      maxWidth: '800px',
      margin: '0 auto var(--spacing-2xl)',
      lineHeight: 1.6,
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'var(--spacing-xl)',
      marginBottom: 'var(--spacing-3xl)',
    },
    statCard: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
    },
    statIcon: {
      fontSize: '36px',
      marginBottom: 'var(--spacing-md)',
    },
    statNumber: {
      fontSize: '32px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-sm)',
    },
    statLabel: {
      opacity: 0.8,
      fontSize: '14px',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'var(--spacing-xl)',
    },
    teamCard: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
    },
    avatar: {
      fontSize: '64px',
      marginBottom: 'var(--spacing-md)',
    },
    memberName: {
      fontSize: '22px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-xs)',
    },
    memberRole: {
      fontSize: '14px',
      opacity: 0.8,
      marginBottom: 'var(--spacing-md)',
      padding: '4px 12px',
      background: 'var(--gradient-primary)',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-block',
    },
    memberBio: {
      opacity: 0.8,
      lineHeight: 1.6,
      marginBottom: 'var(--spacing-md)',
      fontSize: '14px',
    },
    skillsList: {
      display: 'flex',
      gap: 'var(--spacing-xs)',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    skill: {
      background: 'rgba(255,255,255,0.1)',
      padding: '2px 8px',
      borderRadius: 'var(--radius-sm)',
      fontSize: '11px',
    },
    timeline: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-lg)',
      maxWidth: '800px',
      margin: '0 auto',
    },
    timelineItem: {
      display: 'flex',
      gap: 'var(--spacing-lg)',
      alignItems: 'flex-start',
    },
    timelineIcon: {
      fontSize: '32px',
      flexShrink: 0,
      width: '60px',
      textAlign: 'center',
    },
    timelineContent: {
      flex: 1,
    },
    timelineYear: {
      fontSize: '16px',
      fontWeight: 700,
      opacity: 0.8,
      marginBottom: 'var(--spacing-xs)',
    },
    timelineTitle: {
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-sm)',
    },
    timelineDescription: {
      opacity: 0.8,
      lineHeight: 1.6,
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'var(--spacing-xl)',
    },
    valueCard: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
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
      opacity: 0.8,
      lineHeight: 1.6,
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
    },
    ctaActions: {
      display: 'flex',
      gap: 'var(--spacing-lg)',
      justifyContent: 'center',
      flexWrap: 'wrap',
    }
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .team-grid {
        grid-template-columns: 1fr;
      }
      .values-grid {
        grid-template-columns: 1fr;
      }
      .timeline-item {
        flex-direction: column;
        text-align: center;
      }
      .cta-actions {
        flex-direction: column;
        align-items: center;
      }
    }
  `;

  const handleCardHover = (e, isHovering) => {
    if (isHovering) {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
      e.currentTarget.style.borderColor = 'var(--color-accent-2)';
    } else {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '';
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
    }
  };

  return (
    <>
      <style>{mobileStyles}</style>
      
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <div className="container">
          <h1 style={styles.pageTitle} className="text-gradient">
            About VIRUZVERSE
          </h1>
          <p style={styles.pageSubtitle}>
            Pioneering the future of digital solutions with cutting-edge AI, VR, and cybersecurity technologies
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section style={styles.section}>
        <div className="container">
          <div style={styles.statsGrid} className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index}
                style={styles.statCard}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={styles.statIcon}>{stat.icon}</div>
                <div style={styles.statNumber} className="text-gradient">
                  {stat.number}
                </div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section style={styles.section}>
        <div className="container">
          <h2 style={styles.sectionTitle} className="text-gradient">
            Our Mission
          </h2>
          <p style={styles.sectionDescription}>
            At VIRUZVERSE, we believe in harnessing the power of advanced technology to solve real-world challenges. 
            Our mission is to create innovative solutions that protect, educate, and empower businesses across the globe. 
            We combine artificial intelligence, virtual reality, and cybersecurity expertise to build products that 
            make a meaningful difference in how organizations operate and grow.
          </p>
        </div>
      </section>

      {/* Team */}
      <section style={styles.section}>
        <div className="container">
          <h2 style={styles.sectionTitle} className="text-gradient">
            Our Team
          </h2>
          
          <div style={styles.teamGrid} className="team-grid">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                style={styles.teamCard}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={styles.avatar}>{member.avatar}</div>
                <h3 style={styles.memberName} className="text-gradient">
                  {member.name}
                </h3>
                <div style={styles.memberRole}>{member.role}</div>
                <p style={styles.memberBio}>{member.bio}</p>
                <div style={styles.skillsList}>
                  {member.skills.map((skill, idx) => (
                    <span key={idx} style={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section style={styles.section}>
        <div className="container">
          <h2 style={styles.sectionTitle} className="text-gradient">
            Our Journey
          </h2>
          
          <div style={styles.timeline}>
            {timeline.map((item, index) => (
              <div key={index} style={styles.timelineItem} className="timeline-item">
                <div style={styles.timelineIcon}>{item.icon}</div>
                <div style={styles.timelineContent}>
                  <div style={styles.timelineYear}>{item.year}</div>
                  <h3 style={styles.timelineTitle} className="text-gradient">
                    {item.title}
                  </h3>
                  <p style={styles.timelineDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section style={styles.section}>
        <div className="container">
          <h2 style={styles.sectionTitle} className="text-gradient">
            Our Values
          </h2>
          
          <div style={styles.valuesGrid} className="values-grid">
            {values.map((value, index) => (
              <div 
                key={index}
                style={styles.valueCard}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={styles.valueIcon}>{value.icon}</div>
                <h3 style={styles.valueTitle} className="text-gradient">
                  {value.title}
                </h3>
                <p style={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section>
        <div className="container">
          <div style={styles.ctaSection}>
            <h2 style={styles.ctaTitle} className="text-gradient">
              Let's Build the Future Together
            </h2>
            <p style={styles.ctaDescription}>
              Ready to transform your business with our innovative solutions? Get in touch with our team today.
            </p>
            <div style={styles.ctaActions} className="cta-actions">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMUoIF_F4OUKpihGhofkuU036__orZgC8lena-zpfj1BLRBQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Contact Us
              </a>
              <Link href="/products" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
