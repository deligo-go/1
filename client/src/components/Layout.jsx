import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      flexGrow: 1,
      paddingTop: '80px', // Account for fixed header. Horizontal padding is now managed by page components.
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <main id="main-content" style={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
