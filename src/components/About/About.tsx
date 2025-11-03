import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface AnimatedLineProps {
  text: string;
  index: number;
}

const AnimatedLine = ({ text, index }: AnimatedLineProps) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start 0.7', 'start 0.3'],
  });

  const startPoint = index * 0.15;
  const endPoint = Math.min(1, startPoint + 0.5);

  const opacity = useTransform(scrollYProgress, [startPoint, endPoint], [0, 1], { clamp: true });

  const y = useTransform(scrollYProgress, [startPoint, endPoint], [50, 0], { clamp: true });

  return (
    <motion.div
      ref={lineRef}
      className="font-mono text-3xl font-bold md:text-5xl"
      style={{
        opacity,
        y,
      }}
    >
      {text}
    </motion.div>
  );
};

export const About = () => {
  const lines = [
    'Je suis développeur front-end passionné par la création',
    "d'expériences web modernes et interactives.",
    'Spécialisé en React, TypeScript et les animations',
    'pour créer des interfaces utilisateur exceptionnelles.',
    'Je combine design et code pour transformer',
    'des idées en réalités numériques.',
  ];

  return (
    <section className="flex min-h-screen items-center justify-center bg-white text-black">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="space-y-2">
          {lines.map((line, index) => (
            <AnimatedLine key={line} text={line} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
