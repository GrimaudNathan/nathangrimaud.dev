import { motion } from 'motion/react';
import { MatrixCode } from '../MatrixCode';
import { ScrollArrowIcon } from '../../assets/ScrollArrowIcon';
import { GlitchText } from '../GlitchText';

export const Hero = () => {
  const firstName = 'NATHAN';
  const lastName = 'GRIMAUD';

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <MatrixCode />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
        <motion.h1
          className="relative font-mono text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.3,
          }}
        >
          <GlitchText
            autoTrigger
            triggerDelay={300}
            glitchOptions={{ duration: 400, frameInterval: 30 }}
          >
            {firstName}
          </GlitchText>
        </motion.h1>
        <motion.h1
          className="relative font-mono text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.6,
          }}
        >
          <GlitchText
            autoTrigger
            triggerDelay={600}
            glitchOptions={{ duration: 400, frameInterval: 30 }}
          >
            {lastName}
          </GlitchText>
        </motion.h1>
      </div>

      <motion.div
        className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2 md:bottom-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1.2,
          ease: 'easeOut',
        }}
      >
        <ScrollArrowIcon />
      </motion.div>

      <div className="absolute right-0 bottom-16 left-0 z-10 md:bottom-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
            <motion.div
              className="text-terminal-text-secondary text-center font-mono text-xs font-bold tracking-wider uppercase md:text-left md:text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 1,
                ease: 'easeOut',
              }}
            >
              DÉVELOPPEUR FRONT-END BASÉ À PARIS
            </motion.div>

            <motion.div
              className="text-terminal-text-secondary flex flex-wrap justify-center gap-3 font-mono text-xs font-bold tracking-wider uppercase md:justify-end md:gap-4 md:text-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 1,
                ease: 'easeOut',
              }}
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
