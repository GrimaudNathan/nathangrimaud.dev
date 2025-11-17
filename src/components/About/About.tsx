import { useScroll } from 'motion/react';
import { useRef, Fragment } from 'react';
import { AnimatedLine } from './AnimatedLine';

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
          actuellement en recherche
        </Fragment>
      ),
    },
    { id: 'line-2', content: "d’une nouvelle opportunité." },
    {
      id: 'line-3',
      content: (
        <Fragment>
          Spécialisé en <span className="text-terminal-text-secondary">React</span>,{' '}
          <span className="text-terminal-text-secondary">Vue</span> et <span className="text-terminal-text-secondary">TypeScript</span>,
        </Fragment>
      ),
    },
    { id: 'line-4', content: 'je conçois des interfaces fiables, modernes et performantes.' },
    {
      id: 'line-5',
      content: (
        <Fragment>
          Attentif à la qualité du <span className="text-terminal-text-secondary">code</span> et à la cohérence visuelle,
        </Fragment>
      ),
    },
    { id: 'line-6', content: 'je dispose également de solides notions en UX/UI.' },
  ];

  return (
    <section ref={containerRef} className="relative h-[500vh]">
      <div className="bg-terminal-bg-white sticky top-0 flex min-h-screen items-center justify-center rounded-t-4xl text-black">
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
