export default function Mission() {
  const styles = {
    pageHeader: {
      padding: 'var(--spacing-2xl) 0',
      textAlign: 'center',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
      marginTop: '80px',
    },
    pageTitle: {
      fontSize: '48px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
    },
    pageSubtitle: {
      fontSize: '18px',
      opacity: 0.8,
      maxWidth: '600px',
      margin: '0 auto',
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
            Our Mission
          </h1>
          <p style={styles.pageSubtitle}>
            Discover what drives us forward every day
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
