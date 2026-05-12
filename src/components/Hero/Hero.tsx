import { motion } from 'motion/react';
import { ParticleGalaxy } from '../ui/particle-galaxy';
import { CursorDrivenParticleTypography } from '../ui/cursor-driven-particle-typography';
import { ScrollArrowIcon } from '../../assets/ScrollArrowIcon';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export default function Hero() {
  const firstName = 'NATHAN';
  const lastName = 'GRIMAUD';
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ParticleGalaxy
          colors={['#3b82f6', '#2563eb', '#ef4444']}
          particleCount={20000}
          particleSize={0.025}
          centerConcentration={0.8}
          density={0.9}
          glow={80}
          spread={4}
          rotationSpeed={0.0005}
          enableDrag={false}
          enableZoom={false}
          enableTouch={false}
          mouseInfluence={0.2}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center md:flex-row md:space-x-8">
        {prefersReducedMotion ? (
          <>
            <h1 className="font-mono text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl">
              {firstName}
            </h1>
            <h1 className="font-mono text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl">
              {lastName}
            </h1>
          </>
        ) : (
          <>
            <div
              className="h-[100px] w-[320px] md:h-[140px] md:w-[480px] lg:h-[180px] lg:w-[620px]"
              >
              <CursorDrivenParticleTypography
                text={firstName}
                fontSize={200}
                color="#ffffff"
                className="h-full min-h-0 touch-pan-y"
              />
            </div>
            <div
              className="h-[100px] w-[320px] md:h-[140px] md:w-[480px] lg:h-[180px] lg:w-[620px]"
          
            >
              <CursorDrivenParticleTypography
                text={lastName}
                fontSize={200}
                color="#ffffff"
                className="h-full min-h-0 touch-pan-y"
              />
            </div>
          </>
        )}
      </div>

      <motion.div
        className="absolute bottom-14 left-1/2 z-10 hidden -translate-x-1/2 scale-130 md:block"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                duration: 0.5,
                delay: 0.7,
                ease: 'easeOut',
              }
        }
      >
        <ScrollArrowIcon />
      </motion.div>

      <div className="absolute right-0 bottom-8 left-0 z-10 md:bottom-10">
        <div className="px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
            <motion.div
              className="text-center font-mono font-bold tracking-wider text-white uppercase md:text-left md:text-lg"
              initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      duration: 0.5,
                      delay: 0.5,
                      ease: 'easeOut',
                    }
              }
            >
              DÉVELOPPEUR FRONT-END BASÉ À PARIS
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-3 font-mono font-bold tracking-wider text-white uppercase md:justify-end md:gap-4 md:text-lg"
              initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      duration: 0.5,
                      delay: 0.5,
                      ease: 'easeOut',
                    }
              }
            >
              <span>REACT</span>
              <span>VUE</span>
              <span>TYPESCRIPT</span>
              <span>UX/UI</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
