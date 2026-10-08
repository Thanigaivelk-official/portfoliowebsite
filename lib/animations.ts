import { Variants, Transition } from "framer-motion";

export const springSmooth: Transition = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

export const springBouncy: Transition = {
  type: "spring",
  damping: 15,
  stiffness: 200,
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    scale: 1.02,
    y: -6,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const glowPulseVariants: Variants = {
  initial: { opacity: 0.4, scale: 0.98 },
  animate: {
    opacity: [0.4, 0.8, 0.4],
    scale: [0.98, 1.02, 0.98],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
