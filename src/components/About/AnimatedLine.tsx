import { motion, useTransform, MotionValue } from 'motion/react';
import type { ReactNode } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface AnimatedLineProps {
  children: ReactNode;
  index: number;
  totalLines: number;
  scrollProgress: MotionValue<number>;
}

export function AnimatedLine({ children, index, totalLines, scrollProgress }: AnimatedLineProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animationRange = 0.6;
  const step = animationRange / totalLines;
  const start = (index - 1) * step;
  const end = index * step;
  const y = useTransform(scrollProgress, [start, end], ['100%', '0%']);

  if (prefersReducedMotion) {
    return (
      <p className="m-0 font-mono text-3xl leading-tight font-bold text-balance md:text-5xl">{children}</p>
    );
  }

  return (
    <div className="overflow-hidden">
      <motion.p className="m-0 font-mono text-3xl leading-tight font-bold text-balance md:text-5xl" style={{ y }}>
        {children}
      </motion.p>
    </div>
  );
}
