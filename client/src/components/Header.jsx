import { useState } from 'react';
import { Link, useLocation } from 'wouter';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/products', label: 'Products' },
    { path: '/careers', label: 'Careers' },
  ];

  const aboutMenuItems = [
    { path: '/mission', label: 'Our Mission' },
    { path: '/teams', label: 'Our Teams' },
    { path: '/journey', label: 'Our Journey' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(10,10,10,0.9)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      zIndex: 50,
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start', // Left-align logo
      gap: '10px',
      textDecoration: 'none',
      outline: 'none',
      border: 'none',
    },
    logoImage: {
      height: '40px', // Smaller logo size
      width: 'auto',
      objectFit: 'contain',
      transform: 'translateY(-4px)', // Move logo upward
    },
    logoText: {
      fontSize: '28px',
      fontWeight: 700,
      textDecoration: 'none',
      outline: 'none',
      border: 'none',
      color: '#fff',
      textAlign: 'center', // Center text horizontally
      display: 'flex',
      alignItems: 'center', // Center text vertically
      transform: 'translateY(4px)', // Move logo text downward
    },
    nav: {
      display: 'flex',
      gap: '50px',
      marginLeft: 'auto',
    },
    navMobile: {
      display: 'none',
      position: 'fixed',
      top: '80px', // Start below header to keep logo and text visible
      left: 0,
      right: 0,
      bottom: 0,
      background: '#000000',
      flexDirection: 'column',
      padding: '24px',
      gap: '16px',
      zIndex: 40,
      overflowY: 'auto',
    },
    navMobileOpen: {
      display: 'flex',
    },
    navLink: {
      color: '#ffffff',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'color 0.2s ease-in-out',
      padding: '8px 0',
      outline: 'none',
      border: 'none',
    },
    navLinkActive: {
      color: '#a78bfa',
    },
    headerActions: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
    },
    mobileMenuBtn: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: '#ffffff',
      fontSize: '24px',
      cursor: 'pointer',
      padding: '4px',
    },
    dropdownContainer: {
      position: 'relative',
      display: 'inline-block',
      height: '100%',
    },
    dropdownButton: {
      color: '#ffffff',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'color 0.2s ease-in-out',
      padding: '8px 0',
      background: 'none',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      fontSize: 'inherit',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontFamily: 'inherit',
      lineHeight: 'inherit',
    },
    dropdownButtonActive: {
      color: '#a78bfa',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '100%',
      right: 0,
      minWidth: '180px',
      background: 'rgba(20,20,20,0.95)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '8px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      padding: '8px 0',
      zIndex: 100,
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateY(-10px)',
      transition: 'all 0.2s ease-in-out',
    },
    dropdownMenuOpen: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0)',
    },
    dropdownItem: {
      display: 'block',
      padding: '8px 16px',
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: 500,
      transition: 'background 0.2s ease-in-out, color 0.2s ease-in-out',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      outline: 'none',
      border: 'none',
    },
    dropdownItemLast: {
      borderBottom: 'none',
    },
    dropdownItemHover: {
      background: 'rgba(255,255,255,0.1)',
      color: '#a78bfa',
    },
    chevron: {
      fontSize: '12px',
      transition: 'transform 0.2s ease',
    },
    chevronRotated: {
      transform: 'rotate(180deg)',
    },
    dropdownSection: {
      background: '#000000', // Ensure black background for dropdown section
      padding: '8px 0',
    },
  };

  const mobileStyles = `
    .container {
      padding: 0 16px;
      max-width: 100%;
      margin: 0 auto;
    }
    
    @media (max-width: 768px) {
      .nav-desktop { display: none !important; }
      .mobile-menu-btn { display: block !important; }
      .logo-text { 
        font-size: 22px !important; 
        text-align: center !important;
        display: flex !important;
        align-items: center !important;
        transform: translateY(3px) !important; // Smaller downward shift for mobile
      }
      .logo-image { 
        height: 36px !important; // Smaller logo for mobile
        transform: translateY(-4px) !important; // Move upward invisual
      }
      .logo-container {
        justify-content: flex-start !important; // Left-align logo
      }
      .container { 
        padding: 0 12px; 
      }
      .mobile-nav-menu {
        padding: 24px !important;
        overflow-y: auto;
        height: calc(100vh - 80px) !important; // Full height below header
        width: 100vw !important; // Full viewport width
        background: #000000 !important; // Full black background
      }
      .dropdown-menu {
        position: static !important;
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
        background: #000000 !important; // Match mobile-nav-menu background
        border: none !important;
        box-shadow: none !important;
        padding: 0 16px !important;
      }
      .dropdown-item {
        padding: 8px 16px !important;
        color: #ffffff !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        border-bottom: none !important;
        background: #000000 !important; // Ensure black background for items
      }
      .dropdown-item.active {
        color: #a78bfa !important;
      }
    }
    
    @media (max-width: 600px) {
      .logo-text { 
        font-size: 20px !important;
        transform: translateY(3px) !important;
      }
      .logo-image { 
        height: 32px !important; 
        transform: translateY(-3px) !important;
      }
      .container { padding: 0 8px; }
    }
    
    @media (max-width: 480px) {
      .logo-text { 
        font-size: 18px !important;
        transform: translateY(3px) !important;
      }
      .logo-image { 
        height: 30px !important; 
        transform: translateY(-3px) !important;
      }
      .mobile-menu-btn { padding: 8px !important; }
    }
    
    @media (max-width: 400px) {
      .logo-text { 
        font-size: 16px !important;
        transform: translateY(2px) !important;
      }
      .logo-image { 
        height: 28px !important; 
        transform: translateY(-2px) !important;
      }
      .container { padding: 0 6px; }
    }
    
    @media (max-width: 360px) {
      .logo-text { 
        font-size: 14px !important;
        transform: translateY(2px) !important;
      }
      .logo-image { 
        height: 26px !important; 
        transform: translateY(-2px) !important;
      }
    }
    
    @media (min-width: 1024px) {
      .container { padding: 0 24px; }
    }
    
    @media (min-width: 1200px) {
      .container {
        max-width: 1200px;
        padding: 0 24px;
      }
    }
    
    @media (min-width: 1400px) {
      .container {
        max-width: 1400px;
        padding: 0 32px;
      }
    }
    
    a:focus, a:active, button:focus, button:active {
      outline: none !important;
      box-shadow: 0 0 0 2px #a78bfa !important;
    }
    
    * {
      box-sizing: border-box;
    }
    
    body {
      overflow-x: hidden;
    }
  `;

  return (
    <>
      <style>{mobileStyles}</style>
      <header style={styles.header}>
        <div className="container">
          <div style={styles.headerContent}>
            <Link href="/" style={styles.logoContainer}>
              <img src="/logo.png" alt="Viruzverse Logo" style={styles.logoImage} />
              <span style={styles.logoText} className="text-gradient">VIRUZVERSE</span>
            </Link>
            
            <nav style={styles.nav} className="nav-desktop" role="navigation" aria-label="Main navigation">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  href={item.path}
                  style={{
                    ...styles.navLink,
                    ...(location === item.path ? styles.navLinkActive : {}),
                  }}
                  className={`nav-link-enhanced ${location === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
              <div
                style={styles.dropdownContainer}
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button
                  style={{
                    ...styles.dropdownButton,
                    ...(aboutMenuItems.some(item => location === item.path) ? styles.dropdownButtonActive : {}),
                  }}
                  className="nav-link-enhanced"
                >
                  About
                  <span
                    style={{
                      ...styles.chevron,
                      ...(isAboutDropdownOpen ? styles.chevronRotated : {}),
                    }}
                  >
                    ▼
                  </span>
                </button>
                <div
                  style={{
                    ...styles.dropdownMenu,
                    ...(isAboutDropdownOpen ? styles.dropdownMenuOpen : {}),
                  }}
                  className="dropdown-menu"
                >
                  {aboutMenuItems.map((item, index) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      style={{
                        ...styles.dropdownItem,
                        ...(index === aboutMenuItems.length - 1 ? styles.dropdownItemLast : {}),
                      }}
                      className={`dropdown-item ${location === item.path ? 'active' : ''}`}
                      onMouseEnter={(e) => Object.assign(e.target.style, styles.dropdownItemHover)}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#ffffff';
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
            
            <div style={styles.headerActions}>
              <button
                style={styles.mobileMenuBtn}
                className="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              >
                {isMobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        <nav
          className="mobile-nav-menu"
          style={{
            ...styles.navMobile,
            ...(isMobileMenuOpen ? styles.navMobileOpen : {}),
          }}
        >
          {navItems.map(item => (
            <Link
              key={item.path}
              href={item.path}
              style={{
                ...styles.navLink,
                ...(location === item.path ? styles.navLinkActive : {}),
              }}
              className={`nav-link-enhanced ${location === item.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ ...styles.dropdownSection, marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ ...styles.navLink, fontWeight: 600, color: '#a78bfa', marginBottom: '8px' }}>
              About
            </div>
            {aboutMenuItems.map(item => (
              <Link
                key={item.path}
                href={item.path}
                style={{
                  ...styles.navLink,
                  ...(location === item.path ? styles.navLinkActive : {}),
                  paddingLeft: '16px',
                }}
                className={`dropdown-item ${location === item.path ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
