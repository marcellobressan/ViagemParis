
import React from 'react';

const LoadingSpinner: React.FC<{ size?: string }> = ({ size = "w-5 h-5" }) => {
  return (
    <div className={`animate-spin rounded-full border-t-2 border-r-2 border-royal-velvet ${size}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;