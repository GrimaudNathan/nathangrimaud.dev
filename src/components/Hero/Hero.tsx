import { motion } from 'motion/react';
import { MatrixGrid } from '../MatrixGrid';
import { ScrollArrowIcon } from '../../assets/ScrollArrowIcon';
import { GlitchText } from '../GlitchText';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const Hero = () => {
  const firstName = 'NATHAN';
  const lastName = 'GRIMAUD';
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <MatrixGrid />

      <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10">
        <motion.h1
          className="font-mono text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 0.3,
                  delay: 0.3,
                }
          }
        >
          <GlitchText
            autoTrigger={!prefersReducedMotion}
            triggerDelay={300}
            glitchOptions={{ duration: 400, frameInterval: 30 }}
          >
            {firstName}
          </GlitchText>
        </motion.h1>
        <motion.h1
          className="font-mono text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 0.3,
                  delay: 0.6,
                }
          }
        >
          <GlitchText
            autoTrigger={!prefersReducedMotion}
            triggerDelay={600}
            glitchOptions={{ duration: 400, frameInterval: 30 }}
          >
            {lastName}
          </GlitchText>
        </motion.h1>
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
                delay: 1.2,
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
                      delay: 1,
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
                      delay: 1,
                      ease: 'easeOut',
                    }
              }
            >
              <span>UX</span>
              <span>WEB</span>
              <span>MOTION</span>
              <span>VISUAL</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
