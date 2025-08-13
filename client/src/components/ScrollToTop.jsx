import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * ScrollToTop component that automatically scrolls to the top of the page
 * whenever the route changes. This ensures a consistent user experience
 * where each new page starts from the top instead of maintaining scroll position.
 */
const ScrollToTop = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for immediate scroll, 'smooth' for animated
    });
    
    // Alternative method for better browser compatibility
    // document.documentElement.scrollTop = 0;
    // document.body.scrollTop = 0;
  }, [location]); // Dependency on location ensures this runs on every route change

  // This component doesn't render anything
  return null;
};

export default ScrollToTop;
