import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to = 10, duration = 2, delay = 0.5 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, to, { 
      duration: duration, 
      ease: "easeOut", 
      delay: delay 
    });
    return animation.stop;
  }, [count, to, duration, delay]);

  return <motion.span>{rounded}</motion.span>;
};

export default AnimatedCounter;
