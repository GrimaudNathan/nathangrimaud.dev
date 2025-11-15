import { motion } from 'motion/react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const Loading = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-terminal-bg-primary"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
    >
      <div className="w-full max-w-md px-6">
        <div className="relative h-2 w-full overflow-hidden border-2 border-terminal-text-primary bg-terminal-bg-primary">
          <motion.div
            className="absolute inset-y-0 left-0 bg-terminal-text-primary"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: 1.4,
                    ease: 'easeInOut',
                  }
            }
          />
          
          {!prefersReducedMotion && (
            <motion.div
              className="absolute inset-y-0 w-20 bg-linear-to-r from-transparent via-terminal-text-secondary to-transparent opacity-50"
              initial={{ left: '-20%' }}
              animate={{ left: '100%' }}
              transition={{
                duration: 1.4,
                ease: 'linear',
              }}
            />
          )}
        </div>

        <motion.p
          className="mt-4 text-center font-mono text-sm text-terminal-text-primary uppercase tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.2, duration: 0.3 }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

