import { useState, useEffect, useCallback } from 'react';
import { Link } from 'wouter';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [filters] = useState({
    search: '',
    category: '',
    tags: [],
    sort: 'newest'
  });

  const { data: products, isLoading, error } = useProducts(filters);
  
  // **NEW: Slideshow state management**
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState('center'); // 'left', 'right', 'center'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right'); // 'left' or 'right'

  const styles = {
    pageHeader: {
      padding: 'var(--spacing-3xl) 0 var(--spacing-2xl)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'url("https://images.prismic.io/paddle/0a59eee2-3ede-43c4-a06d-eaa07341c788_abstract-heads-1.png?auto=format%2Ccompress&fit=max&w=1080")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(2px)',
      WebkitBackdropFilter: 'blur(2px)',
      filter: 'blur(2px)',
      pointerEvents: 'none',
    },
    pageTitle: {
      fontSize: 'clamp(36px, 5vw, 56px)',
      fontWeight: 800,
      marginBottom: 'var(--spacing-lg)',
      position: 'relative',
      zIndex: 1,
      letterSpacing: '-0.02em',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    pageSubtitle: {
      fontSize: 'clamp(16px, 2.5vw, 20px)',
      opacity: 0.9,
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: 1.6,
      position: 'relative',
      zIndex: 1,
      color: 'white',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'var(--spacing-xl)',
      marginTop: 'var(--spacing-xl)',
      flexWrap: 'wrap',
      position: 'relative',
      zIndex: 1,
    },
    statItem: {
      textAlign: 'center',
      padding: 'var(--spacing-lg)',
      background: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '16px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      minWidth: '120px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    },
    statNumber: {
      fontSize: '32px',
      fontWeight: 700,
      display: 'block',
      marginBottom: 'var(--spacing-xs)',
      color: 'white',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    },
    statLabel: {
      fontSize: '14px',
      opacity: 0.9,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      color: 'white',
    },
    
    productsSection: {
      padding: '100px 0 120px',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '80px',
      padding: '2rem',
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(20px)',
      maxWidth: '600px',
      margin: '0 auto 80px',
    },

    // **UPDATED: Slideshow container**
    slideshowContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '650px',
      position: 'relative',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      overflow: 'hidden',
      padding: '0 2rem',
      // **NEW: Mouse tracking zones**
      cursor: 'none',
    },

    // **NEW: Mouse position indicators**
    mouseIndicator: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      padding: '8px 16px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      fontSize: '12px',
      color: 'white',
      zIndex: 100,
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },

    // **NEW: Progress indicator**
    progressContainer: {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '8px',
      zIndex: 100,
    },

    progressDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.3)',
      transition: 'all 0.3s ease',
    },

    progressDotActive: {
      background: 'linear-gradient(135deg, #a34b6e, #6e4bc3)',
      transform: 'scale(1.2)',
      boxShadow: '0 2px 10px rgba(163, 75, 110, 0.5)',
    },

    // **UPDATED: Individual card for slideshow**
    slideshowCard: {
      position: 'absolute',
      width: '400px',
      height: '540px',
      background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.98), rgba(10, 10, 10, 0.99))',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(40px)',
      padding: '2rem',
      cursor: 'pointer',
      // **NEW: Smooth slideshow transitions**
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      transformOrigin: 'center center',
      overflow: 'hidden',
      willChange: 'transform, opacity',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
    },

    cardContent: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      zIndex: 2,
    },

    cardImage: {
      width: '100%',
      height: '160px',
      borderRadius: '16px',
      objectFit: 'cover',
      marginBottom: '1.5rem',
      transition: 'all 0.4s ease',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },

    cardTitle: {
      fontSize: '1.6rem',
      fontWeight: 800,
      color: '#ffffff',
      marginBottom: '1rem',
      lineHeight: 1.3,
      background: 'linear-gradient(135deg, #a34b6e, #6e4bc3, #45b7d1)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },

    cardDescription: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '0.95rem',
      lineHeight: 1.6,
      marginBottom: '1.5rem',
      flex: 1,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    },

    cardCategory: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      background: 'rgba(163, 75, 110, 0.2)',
      color: '#ec4899',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '1rem',
      border: '1px solid rgba(163, 75, 110, 0.3)',
      alignSelf: 'flex-start',
    },

    viewInfoButton: {
      background: 'linear-gradient(135deg, #6e4bc3, #a34b6e)',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '16px',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      boxShadow: '0 4px 20px rgba(110, 75, 195, 0.3)',
      marginTop: 'auto',
      position: 'relative',
      overflow: 'hidden',
    },

    buttonIcon: {
      fontSize: '16px',
      transition: 'transform 0.3s ease',
    },

    buttonShimmer: {
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
      transition: 'left 0.6s ease',
    },

    cardGlow: {
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: 'radial-gradient(circle, rgba(163, 75, 110, 0.15) 0%, transparent 70%)',
      opacity: 0,
      transition: 'opacity 0.6s ease',
      pointerEvents: 'none',
      zIndex: 1,
    },

    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '400px',
      flexDirection: 'column',
      gap: '2rem',
    },

    spinner: {
      width: '60px',
      height: '60px',
      border: '4px solid rgba(163, 75, 110, 0.3)',
      borderTop: '4px solid #a34b6e',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },

    errorState: {
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'rgba(239, 68, 68, 0.05)',
      borderRadius: '24px',
      border: '1px solid rgba(239, 68, 68, 0.2)',
      maxWidth: '500px',
      margin: '0 auto',
    },

    errorIcon: {
      fontSize: '64px',
      color: '#ef4444',
      marginBottom: '2rem',
    },

    actionButton: {
      background: 'linear-gradient(135deg, #a34b6e, #6e4bc3)',
      color: 'white',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '16px',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 8px 32px rgba(163, 75, 110, 0.3)',
    },
  };

  // **NEW: Featured products array**
  const featuredProducts = products?.filter(product => [
    'GetMe',
    'Pro-Verse',
    'CafeAura',
    'Viruzverse Billing',
    'Invoicify',
    'VR Interior & Exterior Designs',
    'VR Elevation',
    'FPS Shooting Game'
  ].includes(product.title)) || [];

  // **NEW: Mouse position tracking**
  const handleMouseMove = useCallback((e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const containerWidth = rect.width;
    
    if (x < containerWidth * 0.3) {
      setMousePosition('left');
      setSlideDirection('left');
    } else if (x > containerWidth * 0.7) {
      setMousePosition('right');
      setSlideDirection('right');
    } else {
      setMousePosition('center');
    }
  }, []);

  // **NEW: Automatic slideshow effect**
  useEffect(() => {
    if (featuredProducts.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentCardIndex(prevIndex => {
          if (slideDirection === 'right') {
            return prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1;
          } else {
            return prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1;
          }
        });
        setIsTransitioning(false);
      }, 100);
      
    }, 3000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [featuredProducts.length, slideDirection]);

  // **NEW: Card positioning for slideshow**
  const getCardStyle = (index) => {
    const isActive = index === currentCardIndex;
    const isPrev = index === (currentCardIndex - 1 + featuredProducts.length) % featuredProducts.length;
    const isNext = index === (currentCardIndex + 1) % featuredProducts.length;

    if (isActive) {
      return {
        transform: 'translate3d(0, 0, 0) scale(1)',
        opacity: 1,
        zIndex: 100,
        boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      };
    } else if (isPrev) {
      return {
        transform: slideDirection === 'left' 
          ? 'translate3d(100%, 0, 0) scale(0.8)'
          : 'translate3d(-120%, 0, 0) scale(0.8)',
        opacity: 0.3,
        zIndex: 50,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      };
    } else if (isNext) {
      return {
        transform: slideDirection === 'right' 
          ? 'translate3d(120%, 0, 0) scale(0.8)'
          : 'translate3d(-100%, 0, 0) scale(0.8)',
        opacity: 0.3,
        zIndex: 50,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      };
    } else {
      return {
        transform: 'translate3d(200%, 0, 0) scale(0.6)',
        opacity: 0,
        zIndex: 10,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      };
    }
  };

  const totalProducts = products?.length || 0;

  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes slideIn {
            from { opacity: 0; transform: translate3d(100%, 0, 0); }
            to { opacity: 1; transform: translate3d(0, 0, 0); }
          }

          @keyframes slideOut {
            from { opacity: 1; transform: translate3d(0, 0, 0); }
            to { opacity: 0; transform: translate3d(-100%, 0, 0); }
          }

          .action-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px rgba(163, 75, 110, 0.4);
          }

          .view-info-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(110, 75, 195, 0.5);
            background: linear-gradient(135deg, #7c5bd4, #b85579);
          }

          .view-info-button:hover .button-shimmer {
            left: 100%;
          }

          .view-info-button:hover .button-icon {
            transform: translateX(2px);
          }

          /* **NEW: Custom cursor for slideshow areas** */
          .slideshow-container[data-mouse-position="left"] {
            cursor: w-resize;
          }

          .slideshow-container[data-mouse-position="right"] {
            cursor: e-resize;
          }

          .slideshow-container[data-mouse-position="center"] {
            cursor: default;
          }

          @media (max-width: 1024px) {
            .slideshow-container {
              padding: 0 1rem;
            }
            
            .slideshow-card {
              width: 90%;
              max-width: 400px;
            }
          }

          @media (max-width: 768px) {
            .stats-container {
              gap: var(--spacing-md);
            }
            
            .stat-item {
              min-width: 100px;
              padding: var(--spacing-md);
            }
            
            .page-header {
              background-attachment: scroll;
            }

            .slideshow-card {
              width: 95%;
              height: auto;
              min-height: 480px;
            }

            .mouse-indicator {
              display: none;
            }
          }

          @media (max-width: 480px) {
            .slideshow-card {
              padding: 1.5rem;
            }
          }
        `}
      </style>
      
      {/* Page Header */}
      <section style={styles.pageHeader} className="page-header">
        <div style={styles.headerOverlay}></div>
        <div className="container">
          <h1 style={styles.pageTitle} className="text-gradient">
            Our Products
          </h1>
          <p style={styles.pageSubtitle}>
            Discover our innovative solutions across mobile apps, VR/3D experiences, and business utilities designed to transform your digital journey
          </p>
          
          <div style={styles.statsContainer} className="stats-container">
            <div style={styles.statItem} className="stat-item">
              <span style={styles.statNumber} className="text-gradient">{totalProducts}+</span>
              <span style={styles.statLabel}>Products</span>
            </div>
            <div style={styles.statItem} className="stat-item">
              <span style={styles.statNumber} className="text-gradient">3</span>
              <span style={styles.statLabel}>Categories</span>
            </div>
            <div style={styles.statItem} className="stat-item">
              <span style={styles.statNumber} className="text-gradient">100%</span>
              <span style={styles.statLabel}>Innovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Slideshow Section */}
      <section style={styles.productsSection}>
        <div className="container">
          {isLoading ? (
            <div style={styles.loadingContainer}>
              <div style={styles.spinner}></div>
              <h3 style={{ color: '#a34b6e', fontSize: '1.5rem', fontWeight: 600 }}>
                Loading amazing products...
              </h3>
            </div>
          ) : error ? (
            <div style={styles.errorState}>
              <div style={styles.errorIcon}>⚠️</div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 600, color: 'white' }}>
                Oops! Something went wrong
              </h3>
              <p style={{ marginBottom: '2rem', opacity: 0.8, lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.7)' }}>
                {error.message || 'We encountered an issue while loading the products. Please try again.'}
              </p>
              <button 
                onClick={() => window.location.reload()}
                style={styles.actionButton}
                className="action-button"
              >
                Refresh Page
              </button>
            </div>
          ) : featuredProducts.length > 0 ? (
            <>
              <div style={styles.sectionHeader}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
                  Featured Products
                </h2>
                <p style={{ opacity: 0.8, fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                  Move your mouse left or right to control slideshow direction
                </p>
              </div>
              
              {/* **NEW: Interactive Slideshow Container** */}
              <div 
                style={styles.slideshowContainer}
                className="slideshow-container"
                onMouseMove={handleMouseMove}
                data-mouse-position={mousePosition}
              >
                {/* Mouse Position Indicator */}
                <div style={styles.mouseIndicator} className="mouse-indicator">
                  Direction: {slideDirection.toUpperCase()} | Zone: {mousePosition.toUpperCase()}
                </div>

                {/* Progress Indicators */}
                <div style={styles.progressContainer}>
                  {featuredProducts.map((_, index) => (
                    <div
                      key={index}
                      style={{
                        ...styles.progressDot,
                        ...(index === currentCardIndex ? styles.progressDotActive : {})
                      }}
                    />
                  ))}
                </div>

                {/* Slideshow Cards */}
                {featuredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    style={{
                      ...styles.slideshowCard,
                      ...getCardStyle(index),
                    }}
                    className="slideshow-card"
                  >
                    {/* Card Glow Effect */}
                    <div 
                      style={{
                        ...styles.cardGlow,
                        opacity: index === currentCardIndex ? 1 : 0,
                      }}
                    ></div>

                    {/* Card Content */}
                    <div style={styles.cardContent}>
                      <div style={styles.cardCategory}>
                        {product.category?.name || 'Innovation'}
                      </div>

                      {product.images && product.images[0] && (
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          style={styles.cardImage}
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                          loading="lazy"
                        />
                      )}

                      <h3 style={styles.cardTitle}>
                        {product.title}
                      </h3>

                      <p style={styles.cardDescription}>
                        {product.shortDescription || product.description || 'Experience innovation at its finest with cutting-edge technology and seamless user experience.'}
                      </p>

                      <Link 
                        href={`/products/${product.slug}`}
                        style={styles.viewInfoButton}
                        className="view-info-button"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="button-shimmer" style={styles.buttonShimmer}></span>
                        <span>View Info</span>
                        <span className="button-icon" style={styles.buttonIcon}>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '2rem', opacity: 0.5 }}>✨</div>
              <h3 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1rem', color: 'white' }}>
                Amazing Products Coming Soon
              </h3>
              <p style={{ opacity: 0.7, fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                We're crafting exceptional products that will revolutionize your experience.
              </p>
              <button 
                onClick={() => window.location.reload()}
                style={styles.actionButton}
                className="action-button"
              >
                Check Again
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
