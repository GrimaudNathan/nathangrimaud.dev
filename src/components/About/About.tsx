import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { useRef, Fragment } from 'react';
import type { ReactNode } from 'react';

interface AnimatedLineProps {
  children: ReactNode;
  index: number;
  totalLines: number;
  scrollProgress: MotionValue<number>;
}

const AnimatedLine = ({ children, index, totalLines, scrollProgress }: AnimatedLineProps) => {
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

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const lines = [
    {
      id: 'line-1',
      content: (
        <Fragment>
          Je suis développeur <span className="text-terminal-text-secondary">front-end</span>{' '}
          passionné par la création
        </Fragment>
      ),
    },
    { id: 'line-2', content: "d'expériences web modernes et interactives." },
    {
      id: 'line-3',
      content: (
        <Fragment>
          Spécialisé en <span className="text-terminal-text-secondary">React</span>,{' '}
          <span className="text-terminal-text-secondary">TypeScript</span> et les animations
        </Fragment>
      ),
    },
    { id: 'line-4', content: 'pour créer des interfaces utilisateur exceptionnelles.' },
    {
      id: 'line-5',
      content: (
        <Fragment>
          Je combine design et <span className="text-terminal-text-secondary">code</span> pour
          transformer
        </Fragment>
      ),
    },
    { id: 'line-6', content: 'des idées en réalités numériques.' },
  ];

  return (
    <section ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 flex min-h-screen w-full items-center justify-center bg-white text-black">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="space-y-2">
            {lines.map((line, index) => (
              <AnimatedLine
                key={line.id}
                index={index}
                totalLines={lines.length}
                scrollProgress={scrollYProgress}
              >
                {line.content}
              </AnimatedLine>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
