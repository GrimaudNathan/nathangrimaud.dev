import { motion, useTransform, MotionValue } from 'motion/react';
import type { ReactNode } from 'react';

interface AnimatedLineProps {
  children: ReactNode;
  index: number;
  totalLines: number;
  scrollProgress: MotionValue<number>;
}

export const AnimatedLine = ({
  children,
  index,
  totalLines,
  scrollProgress,
}: AnimatedLineProps) => {
  const animationRange = 0.8;
  const startProgress = (index / totalLines) * animationRange;
  const endProgress = ((index + 1) / totalLines) * animationRange;

  const y = useTransform(scrollProgress, [startProgress, endProgress], ['100%', '0%']);

  return (
    <div className="overflow-hidden">
      <motion.div className="font-mono text-3xl font-bold md:text-5xl" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};
