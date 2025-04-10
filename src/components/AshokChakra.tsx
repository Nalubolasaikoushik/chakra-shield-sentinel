
import React, { useEffect, useRef } from 'react';

interface AshokChakraProps {
  className?: string;
  size?: number | 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
  strokeWidth?: number;
  color?: string;
  spinning?: boolean;
}

const AshokChakra: React.FC<AshokChakraProps> = ({ 
  className = '', 
  size = 100, 
  animate = true,
  strokeWidth = 2,
  color = "#0F52BA",
  spinning = false
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Convert string sizes to numbers
  const getNumericSize = (): number => {
    if (typeof size === 'number') return size;
    
    switch(size) {
      case 'sm': return 32;
      case 'md': return 56;
      case 'lg': return 96;
      case 'xl': return 140;
      default: return 100;
    }
  };

  const numericSize = getNumericSize();
  const radius = numericSize / 2;
  const centerX = radius;
  const centerY = radius;
  const innerRadius = radius * 0.2;
  const spokeLength = radius - innerRadius - strokeWidth * 2;
  
  useEffect(() => {
    if (!svgRef.current || (!animate && !spinning)) return;
    
    const chakra = svgRef.current;
    const wheel = chakra.querySelector('.chakra-wheel');
    const spokes = chakra.querySelectorAll('.spoke');
    
    // Add CSS animation
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes pulse {
        0% { opacity: 0.9; stroke-width: ${strokeWidth}px; }
        50% { opacity: 1; stroke-width: ${strokeWidth * 1.2}px; }
        100% { opacity: 0.9; stroke-width: ${strokeWidth}px; }
      }
      
      @keyframes glow {
        0% { filter: drop-shadow(0 0 2px ${color}80); }
        50% { filter: drop-shadow(0 0 6px ${color}); }
        100% { filter: drop-shadow(0 0 2px ${color}80); }
      }
      
      .chakra-wheel {
        animation: ${spinning ? 'spin' : ''} ${spinning ? 15 : 0}s linear infinite;
        transform-origin: center;
      }
      
      .spoke {
        animation: ${animate ? 'pulse 3s ease-in-out infinite, glow 4s ease-in-out infinite' : ''};
        animation-delay: calc(var(--index) * 0.125s);
      }
    `;
    document.head.appendChild(style);
    
    if (wheel instanceof SVGElement && spinning) {
      wheel.style.animation = `spin ${spinning ? 15 : 0}s linear infinite`;
      wheel.style.transformOrigin = 'center';
    }
    
    // Apply animation delay to each spoke
    spokes.forEach((spoke, index) => {
      if (spoke instanceof SVGElement) {
        spoke.style.setProperty('--index', index.toString());
      }
    });
    
    return () => {
      document.head.removeChild(style);
    };
  }, [animate, spinning, strokeWidth, color]);

  // Generate 24 spokes for the Ashoka Chakra
  const generateSpokes = () => {
    const spokes = [];
    
    for (let i = 0; i < 24; i++) {
      const angle = (i * 15) * (Math.PI / 180); // 15 degrees per spoke (360/24)
      
      // Calculate coordinates
      const x1 = centerX + innerRadius * Math.cos(angle);
      const y1 = centerY + innerRadius * Math.sin(angle);
      const x2 = centerX + (radius - strokeWidth * 2) * Math.cos(angle);
      const y2 = centerY + (radius - strokeWidth * 2) * Math.sin(angle);
      
      spokes.push(
        <line
          key={`spoke-${i}`}
          className="spoke"
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      );
    }
    
    return spokes;
  };

  return (
    <svg 
      ref={svgRef}
      className={`ashok-chakra ${className}`}
      width={numericSize} 
      height={numericSize} 
      viewBox={`0 0 ${numericSize} ${numericSize}`}
      aria-label="Ashoka Chakra - Symbol of India"
    >
      <defs>
        <filter id="chakra-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="chakra-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={`${color}FF`} />
          <stop offset="100%" stopColor={`${color}CC`} />
        </linearGradient>
      </defs>
      <g className="chakra-wheel" filter="url(#chakra-glow)">
        {/* Outer circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius - strokeWidth}
          stroke="url(#chakra-grad)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        
        {/* Spokes */}
        {generateSpokes()}
        
        {/* Inner circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={innerRadius}
          fill="url(#chakra-grad)"
        />
      </g>
    </svg>
  );
};

export default AshokChakra;
