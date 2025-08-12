import contactBg from '../assests/contact.jpg';

export default function Contact() {
  const styles = {
    pageHeader: {
      padding: 'var(--spacing-2xl) 0',
      textAlign: 'center',
      background: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.6) 100%), url(${contactBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      paddingTop: '120px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
    },
    pageTitle: {
      fontSize: '48px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
      color: '#ffffff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
      zIndex: 2,
      position: 'relative',
    },
    pageSubtitle: {
      fontSize: '18px',
      color: '#ffffff',
      opacity: 0.95,
      maxWidth: '600px',
      margin: '0 auto',
      textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
      zIndex: 2,
      position: 'relative',
    },
    mainSection: {
      padding: 'var(--spacing-2xl) 0',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    comingSoon: {
      textAlign: 'center',
      opacity: 0.7,
      fontSize: '18px',
    }
  };

  return (
    <>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <div className="container">
          <h1 style={styles.pageTitle} className="text-gradient">
            Contact Us
          </h1>
          <p style={styles.pageSubtitle}>
            Get in touch with our team
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={styles.mainSection}>
        <div className="container">
          <div style={styles.comingSoon}>
            <p>Content coming soon...</p>
          </div>
        </div>
      </section>
    </>
  );
}
