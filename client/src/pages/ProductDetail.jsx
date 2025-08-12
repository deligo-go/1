import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../lib/api';
import RequestAccessModal from '../components/RequestAccessModal';

const mockProduct = {
  id: 1,
  title: "Sample Product",
  slug: "sample-product",
  shortDescription: "A sample product for development",
  longDescription: "This is a detailed description of our sample product with enhanced features and capabilities.",
  category: { name: "Mobile App" },
  status: "published",
  featured: true,
  images: [
    "/api/placeholder/350/600",
    "/api/placeholder/350/600",
    "/api/placeholder/350/600"
  ],
  features: [
    "Real-time synchronization",
    "Advanced security protocols",
    "Cross-platform compatibility",
    "Intuitive user interface",
    "24/7 customer support"
  ],
  techStack: ["React Native", "Firebase", "Node.js", "MongoDB", "AWS"],
  demoUrl: "https://demo.example.com",
  repoUrl: "https://github.com/example/repo"
};

export default function ProductDetail() {
  const { slug } = useParams();
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Touch/swipe state variables
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const {
    data: apiProduct,
    isLoading,
    error,
    isError
  } = useQuery({
    queryKey: ['product', slug],
    queryFn: async () => {
      if (!slug) {
        throw new Error('Product slug is required');
      }
      return await apiGet(`/api/products/slug/${slug}`);
    },
    enabled: !!slug,
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    onError: (error) => {
      console.error('Failed to fetch product:', error);
    }
  });

  const product = apiProduct || (isError ? mockProduct : null);

  // Check if product is VR/3D related
  const isVRProduct = product && (
    product.title === 'FPS Shooting Game' || 
    product.title === '3D Elevation' || 
    product.title === 'VR Interior & Exterior Designs' ||
    product.category?.name === 'VR/3D'
  );

  // Swipe detection constants
  const minSwipeDistance = 50;

  // Touch event handlers for swipe functionality - Only left swipes allowed
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
    setIsDragging(true);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setTouchEndX(e.touches[0].clientX);
    
    const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
    if (deltaX > 10) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX || !isDragging) {
      setIsDragging(false);
      return;
    }

    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;

    // Only handle left swipes (next image)
    if (isLeftSwipe) {
      handleNext();
    }

    setTouchStartX(null);
    setTouchEndX(null);
    setIsDragging(false);
    
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Auto-slide only moves to next (left direction)
  useEffect(() => {
    if (!product?.images || product.images.length <= 1 || !isAutoPlaying || isDragging) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedImageIndex(prev =>
          prev === product.images.length - 1 ? 0 : prev + 1
        );
        setIsTransitioning(false);
      }, 150);
    }, 4000);

    return () => clearInterval(interval);
  }, [product?.images, isAutoPlaying, isDragging]);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product?.id]);

  // Only next function needed for left-only movement
  const handleNext = () => {
    if (!product?.images || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedImageIndex(prev =>
        prev === product.images.length - 1 ? 0 : prev + 1
      );
      setIsTransitioning(false);
    }, 150);
  };

  const handleDotClick = (index) => {
    if (isTransitioning || index === selectedImageIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedImageIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.03) 0%, rgba(110,75,195,0.03) 50%, rgba(69,183,209,0.03) 100%)',
    },
    loadingContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      gap: '2rem',
    },
    spinner: {
      width: '48px',
      height: '48px',
      border: '4px solid rgba(69, 183, 209, 0.2)',
      borderTop: '4px solid #45b7d1',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
    loadingText: {
      fontSize: '1.2rem',
      color: '#45b7d1',
      fontWeight: '600',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
      padding: '2rem',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.15) 0%, rgba(110,75,195,0.15) 50%, rgba(69,183,209,0.15) 100%)',
      borderRadius: '2rem',
      border: '1px solid rgba(255,255,255,0.15)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      backdropFilter: 'blur(20px)',
      position: 'relative',
      overflow: 'hidden',
    },
    headerGlow: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, rgba(163,75,110,0.1), rgba(110,75,195,0.1), rgba(69,183,209,0.1))',
      animation: 'headerGlow 3s ease-in-out infinite alternate',
      zIndex: -1,
    },
    headerTitle: {
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #a34b6e, #6e4bc3, #45b7d1)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '0.5rem',
      position: 'relative',
      zIndex: 1,
    },
    mainLayout: {
      display: 'grid',
      gridTemplateColumns: isVRProduct ? '550px 1fr' : '450px 1fr',
      gap: '4rem',
      alignItems: 'start',
    },
    deviceContainer: {
      position: 'relative',
      maxWidth: isVRProduct ? '500px' : '350px',
      margin: '0 auto',
      top: '2rem',
    },
    phoneFrame: {
      position: 'relative',
      width: '350px',
      height: '750px',
      background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
      borderRadius: '55px',
      padding: '8px', // **REDUCED: from 15px to 8px for thinner edges**
      border: '2px solid #0a0a0a', // **REDUCED: from 4px to 2px for thinner frame**
      boxShadow: `
        0 30px 60px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.1),
        0 0 0 1px rgba(69,183,209,0.2),
        0 0 60px rgba(219, 112, 147, 0.4),
        0 0 120px rgba(186, 85, 211, 0.3)
      `,
      transition: 'all 0.3s ease',
      animation: 'pinkPurpleGlow 4s ease-in-out infinite alternate',
    },
    phoneNotch: {
      position: 'absolute',
      top: '21px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '110px', // **REDUCED: from 140px to 110px for narrower dynamic island**
      height: '32px',
      background: 'linear-gradient(145deg, #0a0a0a, #1a1a1a)',
      borderRadius: '25px',
      zIndex: 10,
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
    },
    phoneScreen: {
      width: '100%',
      height: '100%',
      borderRadius: '48px', // **ADJUSTED: Increased to maintain proportion with thinner padding**
      overflow: 'hidden',
      position: 'relative',
      background: '#000',
      border: '1px solid #333', // **REDUCED: from 2px to 1px**
      boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
      touchAction: 'pan-y pinch-zoom',
      userSelect: 'none',
    },
    tabletFrame: {
      position: 'relative',
      width: '500px',
      height: '375px',
      background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
      borderRadius: '35px',
      padding: '8px',
      border: '4px solid #0a0a0a',
      boxShadow: `
        0 30px 60px rgba(0,0,0,0.4),
        inset 0 2px 0 rgba(255,255,255,0.1),
        0 0 0 1px rgba(69,183,209,0.2)
      `,
      transition: 'all 0.3s ease',
      animation: 'pinkPurpleGlow 4s ease-in-out infinite alternate',
    },
    tabletScreen: {
      width: '100%',
      height: '100%',
      borderRadius: '25px',
      overflow: 'hidden',
      position: 'relative',
      background: '#000',
      border: '2px solid #333',
      boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
      touchAction: 'pan-y pinch-zoom',
      userSelect: 'none',
    },
    tabletHomeButton: {
      position: 'absolute',
      bottom: '8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '40px',
      height: '40px',
      background: 'linear-gradient(145deg, #333, #111)',
      borderRadius: '50%',
      border: '2px solid #555',
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
    },
    slideImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      pointerEvents: 'none',
    },
    slideIndicators: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.75rem',
      marginTop: '1.5rem',
      padding: '1rem',
      background: 'rgba(255,255,255,0.08)',
      borderRadius: '25px',
      border: '1px solid rgba(255,255,255,0.15)',
      backdropFilter: 'blur(15px)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.3)',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '2px solid transparent',
      position: 'relative',
      overflow: 'hidden',
    },
    dotActive: {
      background: 'linear-gradient(135deg, #45b7d1, #6e4bc3)',
      transform: 'scale(1.3)',
      boxShadow: '0 4px 15px rgba(69, 183, 209, 0.5)',
      border: '2px solid rgba(255,255,255,0.3)',
    },
    navButton: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.9), rgba(110,75,195,0.9))',
      border: '2px solid rgba(255,255,255,0.2)',
      color: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 15px rgba(163,75,110,0.4)',
      backdropFilter: 'blur(10px)',
    },
    divider: {
      width: '1px',
      height: '24px',
      background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent)',
      margin: '0 0.25rem',
      borderRadius: '1px',
    },
    progressBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #45b7d1, #6e4bc3)',
      borderRadius: '2px',
      transition: 'width 4s linear',
      width: isAutoPlaying ? '100%' : '0%',
      animation: isAutoPlaying ? 'progress 4s linear infinite' : 'none',
    },
    productDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
    },
    productTitle: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #a34b6e, #6e4bc3, #45b7d1)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
      lineHeight: '1.1',
    },
    categoryBadge: {
      display: 'inline-block',
      padding: '0.5rem 1.5rem',
      background: 'linear-gradient(135deg, rgba(69,183,209,0.2), rgba(110,75,195,0.2))',
      borderRadius: '25px',
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#45b7d1',
      border: '1px solid rgba(69,183,209,0.3)',
      marginBottom: '1rem',
    },
    overview: {
      fontSize: '1.2rem',
      lineHeight: '1.7',
      opacity: 0.9,
      marginBottom: '2rem',
      color: 'rgba(255,255,255,0.9)',
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '2.5rem',
    },
    button: {
      padding: '1rem 2rem',
      borderRadius: '30px',
      border: '2px solid rgba(255,255,255,0.2)',
      background: 'rgba(255,255,255,0.1)',
      color: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: '1rem',
      fontWeight: '600',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      overflow: 'hidden',
    },
    buttonPrimary: {
      background: 'linear-gradient(135deg, #a34b6e, #6e4bc3)',
      border: '2px solid transparent',
      boxShadow: '0 6px 25px rgba(163,75,110,0.4)',
    },
    featuresSection: {
      marginBottom: '2.5rem',
      padding: '2rem',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, #45b7d1, #6e4bc3)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: '1rem',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.08)',
      transition: 'all 0.3s ease',
    },
    checkIcon: {
      width: '24px',
      height: '24px',
      color: '#45b7d1',
      flexShrink: 0,
      filter: 'drop-shadow(0 2px 4px rgba(69,183,209,0.3))',
    }
  };

  // Define hover effects object
  const hoverEffects = {
    navButtonHover: {
      transform: 'scale(1.1) rotate(5deg)',
      boxShadow: '0 6px 20px rgba(163,75,110,0.6)',
    },
    buttonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(163,75,110,0.6)',
      background: 'linear-gradient(135deg, #b85579, #7d56d4)',
    },
    featureItemHover: {
      transform: 'translateX(10px)',
      background: 'rgba(255,255,255,0.08)',
      borderColor: 'rgba(69,183,209,0.3)',
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingContainer}>
          <div style={styles.spinner}></div>
          <div style={styles.loadingText}>
            Loading product details...
          </div>
          <p style={{ opacity: 0.7, textAlign: 'center' }}>
            Fetching the latest information from our servers
          </p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div style={styles.container}>
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h1>Product Not Found</h1>
          <p style={{ marginTop: '1rem', opacity: 0.7 }}>
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/products" style={{ marginTop: '2rem', display: 'inline-block' }}>
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Render device frame based on product type
  const renderDeviceFrame = () => {
    if (isVRProduct) {
      return (
        <div style={styles.tabletFrame} className="tablet-frame">
          <div style={styles.tabletHomeButton}></div>
          <div 
            style={styles.tabletScreen}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {product.images && product.images.length > 0 ? (
              <>
                {product.images.map((image, index) => {
                  let transform = 'translateX(100%)';
                  let opacity = 0;

                  // Only left-moving animation
                  if (index === selectedImageIndex) {
                    transform = isTransitioning ? 'translateX(-100%)' : 'translateX(0%)';
                    opacity = isTransitioning ? 0 : 1;
                  } else if (index === (selectedImageIndex + 1) % product.images.length) {
                    transform = isTransitioning ? 'translateX(0%)' : 'translateX(100%)';
                    opacity = isTransitioning ? 1 : 0;
                  }

                  return (
                    <img
                      key={index}
                      src={image}
                      alt={`${product.title} screenshot ${index + 1}`}
                      style={{
                        ...styles.slideImage,
                        transform,
                        opacity,
                        zIndex: index === selectedImageIndex ? 2 : 1,
                      }}
                      onError={(e) => {
                        e.target.src = '/api/placeholder/500/375';
                      }}
                    />
                  );
                })}
                {isAutoPlaying && (
                  <div style={styles.progressBar}></div>
                )}
              </>
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)',
                background: '#333',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{ fontSize: '3rem' }}>🎮</div>
                <div>VR/3D Experience Preview</div>
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div style={styles.phoneFrame} className="phone-frame">
          <div style={styles.phoneNotch}></div>
          <div 
            style={styles.phoneScreen}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {product.images && product.images.length > 0 ? (
              <>
                {product.images.map((image, index) => {
                  let transform = 'translateX(100%)';
                  let opacity = 0;

                  // Only left-moving animation
                  if (index === selectedImageIndex) {
                    transform = isTransitioning ? 'translateX(-100%)' : 'translateX(0%)';
                    opacity = isTransitioning ? 0 : 1;
                  } else if (index === (selectedImageIndex + 1) % product.images.length) {
                    transform = isTransitioning ? 'translateX(0%)' : 'translateX(100%)';
                    opacity = isTransitioning ? 1 : 0;
                  }

                  return (
                    <img
                      key={index}
                      src={image}
                      alt={`${product.title} screenshot ${index + 1}`}
                      style={{
                        ...styles.slideImage,
                        transform,
                        opacity,
                        zIndex: index === selectedImageIndex ? 2 : 1,
                      }}
                      onError={(e) => {
                        e.target.src = '/api/placeholder/350/600';
                      }}
                    />
                  );
                })}
                {isAutoPlaying && (
                  <div style={styles.progressBar}></div>
                )}
              </>
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)',
                background: '#333',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{ fontSize: '2rem' }}>📱</div>
                <div>No screenshots available</div>
              </div>
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          
          @keyframes headerGlow {
            0% { opacity: 0.3; }
            100% { opacity: 0.6; }
          }

          @keyframes pinkPurpleGlow {
            0% { 
              box-shadow: 
                0 30px 60px rgba(0,0,0,0.4),
                inset 0 1px 0 rgba(255,255,255,0.1),
                0 0 0 1px rgba(69,183,209,0.2),
                0 0 60px rgba(219, 112, 147, 0.3),
                0 0 120px rgba(186, 85, 211, 0.2);
            }
            100% { 
              box-shadow: 
                0 30px 60px rgba(0,0,0,0.4),
                inset 0 1px 0 rgba(255,255,255,0.1),
                0 0 0 1px rgba(69,183,209,0.2),
                0 0 80px rgba(219, 112, 147, 0.6),
                0 0 160px rgba(186, 85, 211, 0.4);
            }
          }

          @media (max-width: 768px) {
            .main-layout {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            
            .device-container {
              position: static !important;
            }
            
            .button-group {
              flex-direction: column !important;
            }

            .phone-frame {
              width: 280px !important;
              height: 560px !important;
            }

            .tablet-frame {
              width: 400px !important;
              height: 300px !important;
            }
          }

          @media (max-width: 480px) {
            .tablet-frame {
              width: 320px !important;
              height: 240px !important;
            }
          }
        `}
      </style>

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerGlow}></div>
          <h1 style={styles.headerTitle}>Product Showcase</h1>
          <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>
            Discover powerful solutions built for modern enterprises
          </p>
        </div>

        {/* Main Layout */}
        <div style={styles.mainLayout} className="main-layout">
          {/* Device Display Section */}
          <div style={styles.deviceContainer} className="device-container">
            {renderDeviceFrame()}

            {/* Slide Controls - Only next button and dots */}
            {product.images && product.images.length > 1 && (
              <div
                style={styles.slideIndicators}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    style={{
                      ...styles.dot,
                      ...(selectedImageIndex === index ? styles.dotActive : {}),
                      opacity: isTransitioning ? 0.5 : 1,
                      cursor: isTransitioning ? 'not-allowed' : 'pointer'
                    }}
                    onClick={() => handleDotClick(index)}
                    title={`Go to image ${index + 1}`}
                    type="button"
                    disabled={isTransitioning}
                  />
                ))}

                <div style={styles.divider}></div>

                <button
                  style={styles.navButton}
                  onClick={handleNext}
                  onMouseOver={(e) => Object.assign(e.target.style, hoverEffects.navButtonHover)}
                  onMouseOut={(e) => Object.assign(e.target.style, { transform: 'scale(1) rotate(0deg)', boxShadow: '0 4px 15px rgba(163,75,110,0.4)' })}
                  title="Next image"
                  type="button"
                  disabled={isTransitioning}
                >
                  ▶
                </button>
              </div>
            )}
          </div>

          {/* Product Details Section */}
          <div style={styles.productDetails}>
            <div>
              <div style={styles.categoryBadge}>
                {product.category?.name || 'Enterprise Software'}
              </div>
              <h1 style={styles.productTitle}>{product.title}</h1>
              <p style={styles.overview}>
                {product.longDescription || product.shortDescription || 'Detailed product description coming soon.'}
              </p>
            </div>

            {/* Action Buttons */}
            <div style={styles.buttonGroup} className="button-group">
              <button
                style={{ ...styles.button, ...styles.buttonPrimary }}
                onMouseOver={(e) => Object.assign(e.target.style, hoverEffects.buttonHover)}
                onMouseOut={(e) => Object.assign(e.target.style, { transform: 'translateY(0)', boxShadow: '0 6px 25px rgba(163,75,110,0.4)' })}
                type="button"
              >
                {product.status === 'published' ? 'Available Now' : 'Coming Soon'}
              </button>
              
              <button
                style={{ ...styles.button, ...styles.buttonPrimary }}
                onClick={() => setShowRequestModal(true)}
                onMouseOver={(e) => Object.assign(e.target.style, {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(163,75,110,0.6)',
                  background: 'linear-gradient(135deg, #b85579, #7d56d4)'
                })}
                onMouseOut={(e) => Object.assign(e.target.style, {
                  transform: 'translateY(0)',
                  boxShadow: '0 6px 25px rgba(163,75,110,0.4)',
                  background: 'linear-gradient(135deg, #a34b6e, #6e4bc3)'
                })}
                type="button"
              >
                📋 Request Access
              </button>

              {product.repoUrl && (
                <button
                  style={styles.button}
                  onClick={() => window.open(product.repoUrl, '_blank')}
                  onMouseOver={(e) => Object.assign(e.target.style, hoverEffects.buttonHover)}
                  onMouseOut={(e) => Object.assign(e.target.style, { transform: 'translateY(0)', background: 'rgba(255,255,255,0.1)' })}
                  type="button"
                >
                  💻 Source Code
                </button>
              )}
            </div>

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div style={styles.featuresSection}>
                <h3 style={styles.sectionTitle}>✨ Key Features</h3>
                <ul style={styles.featureList}>
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      style={styles.featureItem}
                      onMouseOver={(e) => Object.assign(e.target.style, hoverEffects.featureItemHover)}
                      onMouseOut={(e) => Object.assign(e.target.style, {
                        transform: 'translateX(0)',
                        background: 'rgba(255,255,255,0.03)',
                        borderColor: 'rgba(255,255,255,0.08)'
                      })}
                    >
                      <svg style={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span style={{ fontSize: '1.05rem', fontWeight: '500' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link href="/products">
            <button
              style={{ ...styles.button, padding: '1rem 3rem', fontSize: '1.1rem' }}
              onMouseOver={(e) => Object.assign(e.target.style, hoverEffects.buttonHover)}
              onMouseOut={(e) => Object.assign(e.target.style, { transform: 'translateY(0)', background: 'rgba(255,255,255,0.1)' })}
              type="button"
            >
              ← Back to Products
            </button>
          </Link>
        </div>
      </div>

      {/* Request Access Modal */}
      <RequestAccessModal
        isOpen={showRequestModal}
        onClose={() => setShowRequestModal(false)}
        productId={product?.id}
        productTitle={product?.title}
      />
    </>
  );
}
