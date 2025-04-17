
import React, { useEffect, useState } from 'react';

interface MotionProps {
  children: React.ReactNode;
  initial?: {
    opacity?: number;
    x?: number;
    y?: number;
    scale?: number;
    rotate?: number;
  };
  animate?: {
    opacity?: number;
    x?: number;
    y?: number;
    scale?: number;
    rotate?: number;
  };
  transition?: {
    duration?: number;
    delay?: number;
    type?: string;
    stiffness?: number;
    damping?: number;
  };
  className?: string;
}

export const motion: React.FC<MotionProps> = ({
  children,
  initial = {},
  animate = {},
  transition = {},
  className = '',
  ...props
}) => {
  const [style, setStyle] = useState({
    opacity: initial.opacity ?? 1,
    transform: getTransformString(initial),
    transition: getTransitionString(transition),
  });

  useEffect(() => {
    // Apply animation after component mounts
    const timer = setTimeout(() => {
      setStyle({
        opacity: animate.opacity ?? 1,
        transform: getTransformString(animate),
        transition: getTransitionString(transition),
      });
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  function getTransformString(values: any) {
    const transforms = [];
    
    if (values.x !== undefined) transforms.push(`translateX(${values.x}px)`);
    if (values.y !== undefined) transforms.push(`translateY(${values.y}px)`);
    if (values.scale !== undefined) transforms.push(`scale(${values.scale})`);
    if (values.rotate !== undefined) transforms.push(`rotate(${values.rotate}deg)`);
    
    return transforms.length > 0 ? transforms.join(' ') : 'none';
  }

  function getTransitionString(transition: any) {
    const { duration = 0.3, delay = 0, type = 'ease' } = transition;
    return `all ${duration}s ${type} ${delay}s`;
  }

  return (
    <div 
      className={className} 
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default motion;
