import { useState, useEffect } from 'react';

interface ViewportScale {
  scale: number;
  isReady: boolean;
}

export const useViewportScale = (): ViewportScale => {
  const [scale, setScale] = useState(1);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const calculateScale = () => {
      // Reference screen where 80% zoom looks perfect
      const REFERENCE_WIDTH = 1600; // Sweet spot width
      const PERFECT_SCALE = 0.8; // How it looks at 80% zoom
      
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Calculate the base scale to maintain consistent visual size
      let newScale = PERFECT_SCALE;
      
      // Adjust scale based on how far we are from the reference width
      const widthRatio = viewportWidth / REFERENCE_WIDTH;
      
      if (viewportWidth < 1366) {
        // Small screens: scale down slightly for more space
        newScale = PERFECT_SCALE * 0.85;
      } else if (viewportWidth < 1536) {
        // Medium screens: close to perfect
        newScale = PERFECT_SCALE * 0.92;
      } else if (viewportWidth <= 1920) {
        // Large screens: maintain the perfect scale
        newScale = PERFECT_SCALE;
      } else {
        // Ultra-wide/very large screens: scale up slightly to fill space better
        // But cap it to prevent oversized UI
        newScale = Math.min(PERFECT_SCALE * 1.1, 0.95);
      }
      
      // Height-based adjustments for very short/tall screens
      if (viewportHeight < 800) {
        newScale = Math.min(newScale, 0.75);
      } else if (viewportHeight > 1200) {
        newScale = Math.min(newScale * 1.05, 0.9);
      }
      
      // Final safety bounds
      newScale = Math.max(newScale, 0.6);  // Never too small
      newScale = Math.min(newScale, 0.95); // Never too large
      
      return newScale;
    };

    const updateScale = () => {
      const newScale = calculateScale();
      setScale(newScale);
      setIsReady(true);
    };

    // Initial calculation
    updateScale();

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateScale, 100);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return { scale, isReady };
};