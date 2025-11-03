import { motion } from 'motion/react';

export const ScrollArrowIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 7 7"
      width="20"
      height="20"
      className="block select-none"
      animate={{
        y: [0, 8, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <path
        fill="rgb(255,255,255)"
        fillOpacity="1"
        d="M0,1.5 C0,1.5 0,3 0,3 C0,3 0.75,3 0.75,3 C0.75,3 0.75,3.75 0.75,3.75 C0.75,3.75 1.5,3.75 1.5,3.75 C1.5,3.75 1.5,4.5 1.5,4.5 C1.5,4.5 2.25,4.5 2.25,4.5 C2.25,4.5 2.25,5.25 2.25,5.25 C2.25,5.25 3,5.25 3,5.25 C3,5.25 3,6 3,6 C3,6 3.75,6 3.75,6 C3.75,6 3.75,5.25 3.75,5.25 C3.75,5.25 4.5,5.25 4.5,5.25 C4.5,5.25 4.5,4.5 4.5,4.5 C4.5,4.5 5.25,4.5 5.25,4.5 C5.25,4.5 5.25,3.75 5.25,3.75 C5.25,3.75 6,3.75 6,3.75 C6,3.75 6,3 6,3 C6,3 6.75,3 6.75,3 C6.75,3 6.75,1.5 6.75,1.5 C6.75,1.5 0,1.5 0,1.5z"
      />
    </motion.svg>
  );
};
