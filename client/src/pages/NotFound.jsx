import { Link } from 'wouter';

export default function NotFound() {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
      padding: 'var(--spacing-lg)',
    },
    card: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--spacing-3xl)',
      border: '1px solid rgba(255,255,255,0.1)',
      textAlign: 'center',
      maxWidth: '600px',
      width: '100%',
      backdropFilter: 'blur(10px)',
    },
    errorCode: {
      fontSize: 'clamp(80px, 15vw, 200px)',
      fontWeight: 700,
      lineHeight: 1,
      marginBottom: 'var(--spacing-lg)',
      opacity: 0.8,
    },
    title: {
      fontSize: '36px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
    },
    description: {
      fontSize: '18px',
      opacity: 0.8,
      marginBottom: 'var(--spacing-2xl)',
      lineHeight: 1.6,
    },
    actions: {
      display: 'flex',
      gap: 'var(--spacing-lg)',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: 'var(--spacing-xl)',
    },
    suggestions: {
      marginTop: 'var(--spacing-2xl)',
      paddingTop: 'var(--spacing-xl)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
    },
    suggestionsTitle: {
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-md)',
    },
    suggestionsList: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-sm)',
    },
    suggestionLink: {
      color: 'var(--color-accent-3)',
      textDecoration: 'none',
      transition: 'var(--transition-fast)',
      padding: 'var(--spacing-sm)',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-block',
    },
    icon: {
      fontSize: '64px',
      marginBottom: 'var(--spacing-lg)',
    }
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .actions {
        flex-direction: column;
        align-items: center;
      }
      .card {
        padding: var(--spacing-xl);
        margin: var(--spacing-md);
      }
    }
  `;

  const suggestions = [
    { path: '/', label: 'Go to Homepage' },
    { path: '/products', label: 'Browse Products' },
    { path: '/solutions', label: 'View Solutions' },
    { path: '/about', label: 'Learn About Us' },
  ];

  return (
    <>
      <style>{mobileStyles}</style>
      
      <div style={styles.container}>
        <div style={styles.card} className="card">
          <div style={styles.icon}>🔍</div>
          
          <div style={styles.errorCode} className="text-gradient">
            404
          </div>
          
          <h1 style={styles.title} className="text-gradient">
            Page Not Found
          </h1>
          
          <p style={styles.description}>
            The page you're looking for doesn't exist or has been moved to a new location. 
            Don't worry, you can find what you need from the links below.
          </p>

          <div style={styles.actions} className="actions">
            <Link href="/" className="btn-primary">
              Go to Homepage
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn-secondary"
            >
              Go Back
            </button>
          </div>

          <div style={styles.suggestions}>
            <h3 style={styles.suggestionsTitle}>
              Popular Pages
            </h3>
            <ul style={styles.suggestionsList}>
              {suggestions.map((suggestion, index) => (
                <li key={index}>
                  <Link 
                    href={suggestion.path} 
                    style={styles.suggestionLink}
                    onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-1)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--color-accent-3)'}
                  >
                    → {suggestion.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
