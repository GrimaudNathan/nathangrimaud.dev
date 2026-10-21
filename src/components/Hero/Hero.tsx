import { motion } from 'motion/react';
import { ParticleGalaxy } from '../ui/particle-galaxy';
import { CursorDrivenParticleTypography } from '../ui/cursor-driven-particle-typography';
import { ScrollArrowIcon } from '../../assets/ScrollArrowIcon';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const skills = ['REACT', 'VUE', 'TYPESCRIPT', 'UX/UI'];

export default function Hero() {
  const firstName = 'NATHAN';
  const lastName = 'GRIMAUD';
  const prefersReducedMotion = usePrefersReducedMotion();
  const compact = useMediaQuery('(max-width: 768px)');

  const scrollToAbout = () => {
    document.getElementById('a-propos')?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section
      aria-labelledby="hero-titre"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      <h1 id="hero-titre" className="sr-only">
        Nathan Grimaud
      </h1>

      {!prefersReducedMotion && (
        <div aria-hidden="true" className="absolute inset-0">
          <ParticleGalaxy
            colors={['#3b82f6', '#2563eb', '#ef4444']}
            particleCount={compact ? 6000 : 20000}
            particleSize={0.025}
            centerConcentration={0.8}
            density={0.9}
            glow={80}
            spread={4}
            rotationSpeed={0.0005}
            enableDrag={false}
            enableZoom={false}
            enableTouch={false}
            cameraMovement={!compact}
            mouseInfluence={0.2}
          />
        </div>
      )}

      {prefersReducedMotion ? (
        <p
          aria-hidden="true"
          className="flex flex-col items-center gap-2 text-center font-mono text-6xl font-bold tracking-tight text-white md:flex-row md:gap-8 md:text-8xl lg:text-9xl"
        >
          <span>{firstName}</span>
          <span>{lastName}</span>
        </p>
      ) : (
        <div
          aria-hidden="true"
          className="relative z-10 flex w-full max-w-full flex-col items-center justify-center px-4 md:flex-row md:gap-8"
        >
          <div className="h-[100px] w-[min(92vw,320px)] md:h-[140px] md:w-[min(42vw,480px)] lg:h-[180px] lg:w-[min(40vw,560px)]">
            <CursorDrivenParticleTypography
              text={firstName}
              fontSize={200}
              color="#ffffff"
              className="h-full min-h-0 touch-pan-y"
            />
          </div>
          <div className="h-[100px] w-[min(92vw,320px)] md:h-[140px] md:w-[min(42vw,480px)] lg:h-[180px] lg:w-[min(40vw,560px)]">
            <CursorDrivenParticleTypography
              text={lastName}
              fontSize={200}
              color="#ffffff"
              className="h-full min-h-0 touch-pan-y"
            />
          </div>
        </div>
      )}

      <motion.div
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 md:bottom-28 md:block"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.7, ease: 'easeOut' }
        }
      >
        <button
          type="button"
          onClick={scrollToAbout}
          aria-label="Aller à la section suivante"
          className="flex h-11 w-11 items-center justify-center"
        >
          <ScrollArrowIcon animate={!prefersReducedMotion} />
        </button>
      </motion.div>

      <div className="absolute right-0 bottom-8 left-0 z-10 md:bottom-10">
        <div className="px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
            <motion.p
              className="text-center font-mono font-bold tracking-wider text-white uppercase md:text-left md:text-lg"
              initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.5, delay: 0.5, ease: 'easeOut' }
              }
            >
              Développeur front-end basé à Paris
            </motion.p>

            <motion.ul
              className="flex list-none flex-wrap justify-center gap-3 font-mono font-bold tracking-wider text-white uppercase md:justify-end md:gap-4 md:text-lg"
              initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.5, delay: 0.5, ease: 'easeOut' }
              }
            >
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
