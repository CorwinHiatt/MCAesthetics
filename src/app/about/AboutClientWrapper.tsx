
'use client';

import { useEffect } from 'react';

export default function AboutClientWrapper({ children }: { children: React.ReactNode }) {
  // Add scroll to top effect when the component mounts
  useEffect(() => {
    // Comprehensive approach to ensure scrolling to top works across browsers
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    // Additional timeout for browsers that might need a slight delay
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto' // Use 'auto' instead of 'smooth' for immediate effect
      });
    }, 0);
    
    // Handle hash links or other scenarios
    if (typeof window !== 'undefined' && window.location.hash) {
      window.history.scrollRestoration = 'manual';
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return <>{children}</>;
}
