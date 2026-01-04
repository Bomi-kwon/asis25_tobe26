import { useState } from 'react';
import { motion } from 'framer-motion';

const ThoughtBubble = ({ path, id, color, label, floatDelay = 0, onClick, centerX, centerY }) => {
  const [isHovered, setIsHovered] = useState(false);

  const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: floatDelay,
    },
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.g
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
      animate={floatingAnimation}
    >
      <motion.path
        d={path}
        fill={color}
        stroke={color}
        strokeWidth={isHovered ? 3 : 1.5}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: isHovered ? 1.02 : 1,
          fillOpacity: isHovered ? 0.4 : 0.15,
          strokeOpacity: isHovered ? 1 : 0.6,
        }}
        transition={{
          duration: 0.3,
          scale: { duration: 0.2 },
        }}
        style={{
          filter: isHovered ? `drop-shadow(0 0 10px ${color})` : 'none',
        }}
      />
      <motion.text
        x={centerX}
        y={centerY}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#ffffff"
        fontSize="18"
        fontWeight="600"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          pointerEvents: 'none',
          textShadow: '0 1px 3px rgba(0,0,0,0.5)',
        }}
      >
        {label}
      </motion.text>
    </motion.g>
  );
};

export default ThoughtBubble;
