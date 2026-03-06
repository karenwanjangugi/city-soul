import React from 'react';

/**
 * WavyDivider - Creates a smooth, shallow wavy transition with multiple ripples
 * @param {string} color - The color of the wave (should match the section ABOVE)
 */
const WavyDivider = ({ color, className = "" }) => {
  return (
    <div 
      className={`absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none ${className}`}
    >
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        className="relative block w-full h-[30px] md:h-[50px] lg:h-[70px]"
      >
        <path 
          d="M0,0V20c100,0,150,40,250,40s150-40,250-40,150,40,250,40,150-40,250-40,150,40,250,40V0H0Z" 
          fill={color}
        ></path>
      </svg>
    </div>
  );
};

export default WavyDivider;
