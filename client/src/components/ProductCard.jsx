import { Link } from 'wouter';

export default function ProductCard({ product }) {
  const styles = {
    card: {
      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
      backdropFilter: 'blur(30px)',
      WebkitBackdropFilter: 'blur(30px)',
      borderRadius: '32px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      cursor: 'pointer',
      boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
    },

    // Subtle animated border
    borderGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 'inherit',
      padding: '1px',
      background: 'linear-gradient(135deg, rgba(163, 75, 110, 0.2), rgba(110, 75, 195, 0.2), rgba(69, 183, 209, 0.2))',
      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      maskComposite: 'xor',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      opacity: 0,
      transition: 'opacity 0.4s ease',
    },

    // Glow effect on hover
    glowEffect: {
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: 'radial-gradient(circle, rgba(163, 75, 110, 0.05) 0%, transparent 70%)',
      opacity: 0,
      transition: 'opacity 0.4s ease',
      pointerEvents: 'none',
    },

    imageContainer: {
      position: 'relative',
      overflow: 'hidden',
      height: '280px',
      background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(0, 0, 0, 0.9))',
    },

    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      filter: 'brightness(0.9) contrast(1.1)',
    },

    imageOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.6) 100%)',
      opacity: 0,
      transition: 'opacity 0.4s ease',
    },

    statusBadge: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: '#10b981',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '11px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },

    content: {
      padding: '32px 28px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)',
    },

    categoryBadge: {
      background: 'rgba(163, 75, 110, 0.15)',
      color: '#ec4899',
      padding: '6px 14px',
      borderRadius: '20px',
      fontSize: '10px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      display: 'inline-block',
      marginBottom: '16px',
      border: '1px solid rgba(163, 75, 110, 0.3)',
      backdropFilter: 'blur(10px)',
      alignSelf: 'flex-start',
      transition: 'all 0.3s ease',
    },

    title: {
      fontSize: '24px',
      fontWeight: 800,
      color: '#ffffff',
      marginBottom: '12px',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      transition: 'all 0.3s ease',
    },

    description: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '15px',
      lineHeight: 1.6,
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      flex: 1,
      marginBottom: '24px',
    },

    footer: {
      display: 'flex',
      gap: '12px',
      marginTop: 'auto',
    },

    // Simplified primary button - solid color with subtle effects
    primaryButton: {
      background: '#6e4bc3',
      color: 'white',
      border: 'none',
      padding: '16px 24px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: 700,
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      flex: 1,
      position: 'relative',
      overflow: 'hidden',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 8px 32px rgba(110, 75, 195, 0.25)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },

    // Clean secondary button
    secondaryButton: {
      background: 'rgba(255, 255, 255, 0.05)',
      color: 'rgba(255, 255, 255, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      padding: '16px 20px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(10px)',
      minWidth: '100px',
    },

    // Subtle button highlight effect
    buttonHighlight: {
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)',
      transition: 'left 0.6s ease',
    },

    noImage: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(26, 26, 26, 0.8)',
      color: 'rgba(255, 255, 255, 0.6)',
      flexDirection: 'column',
      gap: '16px',
    },

    noImageIcon: {
      fontSize: '48px',
      opacity: 0.4,
    },

    noImageText: {
      fontSize: '14px',
      fontWeight: 500,
      opacity: 0.7,
    },

    // Floating elements for extra visual interest
    floatingDot: {
      position: 'absolute',
      width: '6px',
      height: '6px',
      background: '#6e4bc3',
      borderRadius: '50%',
      opacity: 0.3,
      animation: 'float 6s ease-in-out infinite',
    },
  };

  const getCategoryColor = (category) => {
    const categoryLower = category?.toLowerCase() || '';
    if (categoryLower.includes('mobile') || categoryLower.includes('app')) {
      return { 
        bg: 'rgba(16, 185, 129, 0.15)', 
        color: '#10b981', 
        border: 'rgba(16, 185, 129, 0.3)' 
      };
    } else if (categoryLower.includes('vr') || categoryLower.includes('3d')) {
      return { 
        bg: 'rgba(245, 158, 11, 0.15)', 
        color: '#f59e0b', 
        border: 'rgba(245, 158, 11, 0.3)' 
      };
    } else if (categoryLower.includes('business') || categoryLower.includes('utility')) {
      return { 
        bg: 'rgba(139, 92, 246, 0.15)', 
        color: '#8b5cf6', 
        border: 'rgba(139, 92, 246, 0.3)' 
      };
    }
    return { 
      bg: 'rgba(163, 75, 110, 0.15)', 
      color: '#ec4899', 
      border: 'rgba(163, 75, 110, 0.3)' 
    };
  };

  const categoryColors = getCategoryColor(product.category?.name);

  const handleCardHover = (isHovering) => {
    return (e) => {
      const card = e.currentTarget;
      const image = card.querySelector('.product-image');
      const glow = card.querySelector('.glow-effect');
      const overlay = card.querySelector('.image-overlay');
      const borderGradient = card.querySelector('.border-gradient');
      const title = card.querySelector('.product-title');
      const categoryBadge = card.querySelector('.category-badge');

      if (isHovering) {
        // Card effects
        card.style.transform = 'translateY(-16px) scale(1.02)';
        card.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.4)';
        
        // Image effects
        if (image) {
          image.style.transform = 'scale(1.1)';
          image.style.filter = 'brightness(1.1) contrast(1.2)';
        }
        
        // Glow and overlay
        if (glow) glow.style.opacity = '1';
        if (overlay) overlay.style.opacity = '1';
        if (borderGradient) borderGradient.style.opacity = '1';
        
        // Text effects - single accent color instead of gradient
        if (title) {
          title.style.color = '#6e4bc3';
        }
        
        // Badge effect
        if (categoryBadge) {
          categoryBadge.style.transform = 'translateY(-2px)';
          categoryBadge.style.boxShadow = '0 8px 25px rgba(163, 75, 110, 0.3)';
        }
      } else {
        // Reset all styles
        card.style.transform = '';
        card.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.2)';
        
        if (image) {
          image.style.transform = '';
          image.style.filter = 'brightness(0.9) contrast(1.1)';
        }
        
        if (glow) glow.style.opacity = '0';
        if (overlay) overlay.style.opacity = '0';
        if (borderGradient) borderGradient.style.opacity = '0';
        
        if (title) {
          title.style.color = '#ffffff';
        }
        
        if (categoryBadge) {
          categoryBadge.style.transform = '';
          categoryBadge.style.boxShadow = '';
        }
      }
    };
  };

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .product-card-link {
            text-decoration: none;
            display: block;
            height: 100%;
          }
        `}
      </style>

      <Link href={`/products/${product.slug}`} className="product-card-link">
        <div 
          style={styles.card}
          onMouseEnter={handleCardHover(true)}
          onMouseLeave={handleCardHover(false)}
        >
          {/* Animated border gradient */}
          <div className="border-gradient" style={styles.borderGradient}></div>
          
          {/* Glow effect */}
          <div className="glow-effect" style={styles.glowEffect}></div>
          
          {/* Floating decorative elements */}
          <div style={{
            ...styles.floatingDot,
            top: '20px',
            right: '60px',
            animationDelay: '0s'
          }}></div>
          <div style={{
            ...styles.floatingDot,
            bottom: '40px',
            left: '30px',
            animationDelay: '2s'
          }}></div>

          {/* Image Container */}
          <div style={styles.imageContainer}>
            {product.images && product.images[0] ? (
              <>
                <img 
                  src={product.images[0]} 
                  alt={product.title}
                  style={styles.image}
                  className="product-image"
                />
                <div className="image-overlay" style={styles.imageOverlay}></div>
              </>
            ) : (
              <div style={styles.noImage}>
                <div style={styles.noImageIcon}>✨</div>
                <div style={styles.noImageText}>Preview Coming Soon</div>
              </div>
            )}
            
            {/* Status Badge */}
            {product.status === 'published' && (
              <div style={styles.statusBadge}>
                ● LIVE
              </div>
            )}
          </div>

          {/* Content */}
          <div style={styles.content}>
            {/* Category Badge */}
            <div 
              className="category-badge"
              style={{
                ...styles.categoryBadge,
                background: categoryColors.bg,
                color: categoryColors.color,
                borderColor: categoryColors.border,
              }}
            >
              {product.category?.name || 'Innovation'}
            </div>

            {/* Title */}
            <h3 className="product-title" style={styles.title}>
              {product.title}
            </h3>

            {/* Description */}
            <p style={styles.description}>
              {product.shortDescription || product.description || 'Experience the future of digital innovation with cutting-edge technology and seamless user experience.'}
            </p>

            {/* Action Buttons */}
            <div style={styles.footer}>
              <button 
                style={styles.primaryButton}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.background = '#5a3ba0';
                  e.target.style.boxShadow = '0 15px 50px rgba(110, 75, 195, 0.4)';
                  const highlight = e.target.querySelector('.button-highlight');
                  if (highlight) highlight.style.left = '100%';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = '';
                  e.target.style.background = '#6e4bc3';
                  e.target.style.boxShadow = '0 8px 32px rgba(110, 75, 195, 0.25)';
                  const highlight = e.target.querySelector('.button-highlight');
                  if (highlight) highlight.style.left = '-100%';
                }}
              >
                <span className="button-highlight" style={styles.buttonHighlight}></span>
                Explore
              </button>
              
              {product.demoUrl && (
                <a 
                  href={product.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={styles.secondaryButton}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.target.style.transform = '';
                    e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
