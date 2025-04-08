
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
      case 'sm': return 28;
      case 'md': return 48;
      case 'lg': return 80;
      case 'xl': return 120;
      default: return 100;
    }
  };

  const numericSize = getNumericSize();
  const radius = numericSize / 2;
  const centerX = radius;
  const centerY = radius;
  const innerRadius = radius * 0.15;
  const spokeLength = radius - innerRadius - strokeWidth * 2;
  
  useEffect(() => {
    if (!svgRef.current || (!animate && !spinning)) return;
    
    const chakra = svgRef.current;
    const wheel = chakra.querySelector('.chakra-wheel');
    
    // Add CSS animation
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      .chakra-wheel {
        animation: spin ${spinning ? 3 : 24}s linear infinite;
        transform-origin: center;
      }
    `;
    document.head.appendChild(style);
    
    if (wheel instanceof SVGElement) {
      wheel.style.animation = `spin ${spinning ? 3 : 24}s linear infinite`;
      wheel.style.transformOrigin = 'center';
    }
    
    return () => {
      document.head.removeChild(style);
    };
  }, [animate, spinning]);

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
      <g className="chakra-wheel">
        {/* Outer circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius - strokeWidth}
          stroke={color}
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
          fill={color}
        />
      </g>
    </svg>
  );
};

export default AshokChakra;
