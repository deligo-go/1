import { Link } from 'wouter';

export default function Features() {
  const coreFeatures = [
    {
      title: 'Sentinel AI Security',
      description: 'Advanced AI-powered threat detection and automated response system',
      icon: '🛡️',
      details: [
        'Real-time threat monitoring across all endpoints',
        'Machine learning-based anomaly detection',
        'Automated incident response and containment',
        '99.9% accuracy in threat identification',
        'Zero-day vulnerability protection',
        'Behavioral analysis and user profiling'
      ],
      category: 'Security'
    },
    {
      title: 'Immersive VR Training',
      description: 'Virtual reality platforms for education and professional training',
      icon: '🥽',
      details: [
        'Photorealistic training environments',
        'Multi-user collaborative sessions',
        'Progress tracking and analytics',
        'Custom scenario builder',
        'Cross-platform VR support',
        'Integration with learning management systems'
      ],
      category: 'VR & 3D'
    },
    {
      title: 'Smart Analytics Engine',
      description: 'Comprehensive data analytics and business intelligence platform',
      icon: '📊',
      details: [
        'Real-time data processing and visualization',
        'Predictive analytics and forecasting',
        'Custom dashboard creation',
        'API integrations with popular tools',
        'Automated report generation',
        'Machine learning insights'
      ],
      category: 'Analytics'
    },
    {
      title: 'Cloud-Native Architecture',
      description: 'Scalable, resilient, and globally distributed infrastructure',
      icon: '☁️',
      details: [
        'Auto-scaling based on demand',
        'Multi-region deployment capabilities',
        '99.99% uptime guarantee',
        'Kubernetes orchestration',
        'Microservices architecture',
        'DevOps automation pipelines'
      ],
      category: 'Infrastructure'
    },
    {
      title: 'API-First Development',
      description: 'Comprehensive APIs for seamless third-party integrations',
      icon: '🔗',
      details: [
        'RESTful and GraphQL APIs',
        'Comprehensive API documentation',
        'Rate limiting and authentication',
        'Webhook support for real-time events',
        'SDK libraries for popular languages',
        'API versioning and backward compatibility'
      ],
      category: 'Integration'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security measures and compliance standards',
      icon: '🔒',
      details: [
        'End-to-end encryption (AES-256)',
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'SOC 2 Type II compliance',
        'GDPR and HIPAA compliance',
        'Regular security audits and penetration testing'
      ],
      category: 'Security'
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: '☁️', description: 'CRM integration' },
    { name: 'Microsoft 365', icon: '🏢', description: 'Productivity suite' },
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'AWS', icon: '🌐', description: 'Cloud infrastructure' },
    { name: 'Docker', icon: '🐳', description: 'Containerization' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing' },
    { name: 'Google Analytics', icon: '📈', description: 'Web analytics' },
    { name: 'Zapier', icon: '⚡', description: 'Workflow automation' }
  ];

  const styles = {
    pageHeader: {
      padding: 'var(--spacing-3xl) 0',
      paddingTop: '120px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
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
    featuresSection: {
      padding: 'var(--spacing-3xl) 0',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: 'var(--spacing-xl)',
    },
    featureCard: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
    },
    featureHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-md)',
      marginBottom: 'var(--spacing-lg)',
    },
    featureIcon: {
      fontSize: '48px',
      flexShrink: 0,
    },
    featureTitle: {
      fontSize: '22px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-xs)',
    },
    featureCategory: {
      fontSize: '12px',
      opacity: 0.7,
      padding: '2px 8px',
      background: 'var(--gradient-primary)',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-block',
    },
    featureDescription: {
      opacity: 0.8,
      lineHeight: 1.6,
      marginBottom: 'var(--spacing-lg)',
    },
    featureDetails: {
      listStyle: 'none',
      padding: 0,
    },
    detailItem: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-sm)',
      marginBottom: 'var(--spacing-sm)',
      fontSize: '14px',
      opacity: 0.9,
    },
    detailIcon: {
      width: '16px',
      height: '16px',
      color: 'var(--color-accent-3)',
      flexShrink: 0,
    },
    integrationsSection: {
      padding: 'var(--spacing-3xl) 0',
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      margin: 'var(--spacing-3xl) 0',
    },
    sectionTitle: {
      fontSize: '42px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: 'var(--spacing-md)',
    },
    sectionSubtitle: {
      textAlign: 'center',
      fontSize: '18px',
      opacity: 0.8,
      marginBottom: 'var(--spacing-2xl)',
      maxWidth: '600px',
      margin: '0 auto var(--spacing-2xl)',
    },
    integrationsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'var(--spacing-lg)',
    },
    integrationCard: {
      background: 'rgba(255,255,255,0.03)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--spacing-lg)',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
    },
    integrationIcon: {
      fontSize: '36px',
      marginBottom: 'var(--spacing-md)',
    },
    integrationName: {
      fontSize: '16px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-sm)',
    },
    integrationDescription: {
      fontSize: '12px',
      opacity: 0.7,
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
      .features-grid {
        grid-template-columns: 1fr;
      }
      .integrations-grid {
        grid-template-columns: repeat(2, 1fr);
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
            Features & Capabilities
          </h1>
          <p style={styles.pageSubtitle}>
            Discover the powerful features that make our solutions industry-leading and enterprise-ready
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section style={styles.featuresSection}>
        <div className="container">
          <div style={styles.featuresGrid} className="features-grid">
            {coreFeatures.map((feature, index) => (
              <div 
                key={index}
                style={styles.featureCard}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={styles.featureHeader}>
                  <span style={styles.featureIcon}>{feature.icon}</span>
                  <div>
                    <h3 style={styles.featureTitle} className="text-gradient">
                      {feature.title}
                    </h3>
                    <span style={styles.featureCategory}>{feature.category}</span>
                  </div>
                </div>
                
                <p style={styles.featureDescription}>
                  {feature.description}
                </p>
                
                <ul style={styles.featureDetails}>
                  {feature.details.map((detail, idx) => (
                    <li key={idx} style={styles.detailItem}>
                      <svg style={styles.detailIcon} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section>
        <div className="container">
          <div style={styles.integrationsSection}>
            <h2 style={styles.sectionTitle} className="text-gradient">
              Seamless Integrations
            </h2>
            <p style={styles.sectionSubtitle}>
              Connect with the tools and platforms your team already uses and loves
            </p>
            
            <div style={styles.integrationsGrid} className="integrations-grid">
              {integrations.map((integration, index) => (
                <div 
                  key={index}
                  style={styles.integrationCard}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <div style={styles.integrationIcon}>{integration.icon}</div>
                  <h4 style={styles.integrationName}>{integration.name}</h4>
                  <p style={styles.integrationDescription}>{integration.description}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
              <Link href="/products" className="btn-secondary">
                View All Integrations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="container">
          <div style={styles.ctaSection}>
            <h2 style={styles.ctaTitle} className="text-gradient">
              Experience the Power
            </h2>
            <p style={styles.ctaDescription}>
              Ready to see how our features can transform your business? Start exploring our solutions today.
            </p>
            <div style={styles.ctaActions} className="cta-actions">
              <Link href="/products" className="btn-primary">
                Explore Products
              </Link>
              <Link href="/signup" className="btn-secondary">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
