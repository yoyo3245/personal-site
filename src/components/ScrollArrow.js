import React, { useState } from 'react';
import '../styles/ScrollArrow.css';

const ClickableArrow = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = () => {
    setIsAnimating(true);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const scrollToContent = () => {
    document.getElementById('about-me')?.scrollIntoView({ 
      behavior: 'smooth'
    });
  };

  return (
    <div className="arrow-container">
      <i 
        className={`bi bi-arrow-down ${isAnimating ? 'animating' : ''}`}
        onMouseEnter={handleMouseEnter}
        onAnimationEnd={handleAnimationEnd}
        onClick={scrollToContent}
        // Remove pointer-events style to always allow clicks
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            scrollToContent();
          }
        }}
        aria-label="Scroll to About Me section"
      />
    </div>
  );
};

export default ClickableArrow;