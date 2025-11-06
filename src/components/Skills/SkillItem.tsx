import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface SkillItemProps {
  skill: string;
}

export const SkillItem = ({ skill }: SkillItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.7, 0.7, 1.1, 0.7, 0.7]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.7, 0.7, 1, 0.7, 0.7]
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="text-black font-mono font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
    >
      {skill}
    </motion.div>
  );
};

