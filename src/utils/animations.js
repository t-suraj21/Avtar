// Performance optimization utilities
export const optimizedTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.3,
};

export const optimizedSpring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const reduceMotion = {
  duration: 0.01,
  ease: "linear",
};

// Viewport settings for lazy animations
export const viewportConfig = {
  once: true,
  amount: 0.3,
  margin: "0px 0px -100px 0px",
};

// Optimized container variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: optimizedTransition,
  },
};

// Fade in variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: optimizedTransition,
  },
};

// Slide variants
export const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: optimizedTransition,
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: optimizedTransition,
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: optimizedTransition,
  },
};
