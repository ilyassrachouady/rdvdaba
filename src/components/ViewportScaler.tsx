import React from 'react';
import { useViewportScale } from '@/hooks/use-viewport-scale';

interface ViewportScalerProps {
  children: React.ReactNode;
}

export const ViewportScaler: React.FC<ViewportScalerProps> = ({ children }) => {
  const { scale, isReady } = useViewportScale();

  if (!isReady) {
    // Prevent flash of unstyled content while calculating scale
    return (
      <div style={{ opacity: 0, visibility: 'hidden' }}>
        {children}
      </div>
    );
  }

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: `${100 / scale}%`,
        height: `${100 / scale}vh`,
        minHeight: `${100 / scale}vh`,
        position: 'relative',
        overflow: 'visible'
      }}
      className="viewport-scaler"
    >
      {children}
    </div>
  );
};