
import React, { useEffect, useRef } from 'react';

interface AshokChakraProps {
  className?: string;
  size?: number;
  animate?: boolean;
  strokeWidth?: number;
  color?: string;
}

const AshokChakra: React.FC<AshokChakraProps> = ({ 
  className = '', 
  size = 100, 
  animate = true,
  strokeWidth = 5,
  color = "#0F52BA" 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!animate || !svgRef.current) return;
    
    const chakra = svgRef.current;
    const spokes = chakra.querySelectorAll('.spoke');
    
    // Apply animation to each spoke
    spokes.forEach((spoke, index) => {
      const delay = (index * 0.1).toFixed(1); // Staggered animation
      
      if (spoke instanceof SVGElement) {
        spoke.style.animation = `chakraRotate 3s ${delay}s infinite linear`;
        spoke.style.transformOrigin = 'center';
        spoke.style.opacity = '0';
        
        // Add animation to appear one by one
        setTimeout(() => {
          spoke.style.opacity = '1';
          spoke.style.transition = 'opacity 0.5s ease-in';
        }, index * 100);
      }
    });
    
    // Add CSS animation
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes chakraRotate {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(90deg); }
        50% { transform: rotate(180deg); }
        75% { transform: rotate(270deg); }
        100% { transform: rotate(360deg); }
      }
      
      .chakra-wheel {
        animation: rotateWheel 24s infinite linear;
        transform-origin: center;
      }
      
      @keyframes rotateWheel {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    
    // Find the outer circle and add wheel animation
    const outerCircle = chakra.querySelector('.chakra-wheel');
    if (outerCircle instanceof SVGElement) {
      outerCircle.style.animation = 'rotateWheel 24s infinite linear';
      outerCircle.style.transformOrigin = 'center';
    }
    
    return () => {
      document.head.removeChild(style);
    };
  }, [animate]);

  // Generate 24 spokes for the Ashoka Chakra
  const generateSpokes = () => {
    const spokes = [];
    const cx = size / 2;
    const cy = size / 2;
    const outerRadius = (size / 2) - strokeWidth;
    const innerRadius = outerRadius * 0.7;
    
    for (let i = 0; i < 24; i++) {
      const angle = (i * 15) * (Math.PI / 180); // 15 degrees between each spoke (360/24)
      const x1 = cx + innerRadius * Math.cos(angle);
      const y1 = cy + innerRadius * Math.sin(angle);
      const x2 = cx + outerRadius * Math.cos(angle);
      const y2 = cy + outerRadius * Math.sin(angle);
      
      spokes.push(
        <line
          key={`spoke-${i}`}
          className="spoke"
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={color}
          strokeWidth={strokeWidth * 0.5}
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
      width={size} 
      height={size} 
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        className="chakra-wheel"
        cx={size / 2}
        cy={size / 2}
        r={(size / 2) - strokeWidth}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size * 0.1}
        fill={color}
      />
      {generateSpokes()}
    </svg>
  );
};

export default AshokChakra;
