import { useState } from 'react';
import { motion } from 'framer-motion';

const ThoughtBubble = ({ path, id, color, label, floatDelay = 0, onClick }) => {
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
        fill={isHovered ? color : 'transparent'}
        stroke={color}
        strokeWidth={isHovered ? 3 : 2}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: isHovered ? 1.02 : 1,
          fillOpacity: isHovered ? 0.3 : 0,
        }}
        transition={{
          duration: 0.3,
          scale: { duration: 0.2 },
        }}
        style={{
          filter: isHovered ? `drop-shadow(0 0 10px ${color})` : 'none',
        }}
      />
      {isHovered && (
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          fill={color}
          fontSize="14"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ pointerEvents: 'none' }}
        >
          {label}
        </motion.text>
      )}
    </motion.g>
  );
};

export default ThoughtBubble;
