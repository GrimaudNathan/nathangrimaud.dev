import { motion } from 'motion/react';
import { useEffect, useImperativeHandle } from 'react';
import type { Ref } from 'react';
import { useGlitch } from '../../hooks/useGlitch';
import type { UseGlitchOptions } from '../../hooks/useGlitch';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export interface GlitchTextRef {
  startGlitch: () => void;
  stopGlitch: () => void;
}

interface GlitchTextProps {
  children: string;
  className?: string;
  animationDuration?: number;
  glitchOptions?: UseGlitchOptions;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  autoTrigger?: boolean;
  triggerDelay?: number;
  ref?: Ref<GlitchTextRef>;
}

export default function GlitchText({
  children,
  className = '',
  animationDuration = 0.4,
  glitchOptions = {},
  onMouseEnter,
  onMouseLeave,
  autoTrigger = false,
  triggerDelay = 0,
  ref,
}: GlitchTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { glitchText, isGlitching, startGlitch, stopGlitch } = useGlitch(children, {
    ...glitchOptions,
    disabled: glitchOptions.disabled || prefersReducedMotion,
  });

  useImperativeHandle(ref, () => ({
    startGlitch,
    stopGlitch,
  }));

  useEffect(() => {
    if (autoTrigger && !prefersReducedMotion) {
      const timer = setTimeout(() => {
        startGlitch();
      }, triggerDelay);

      const interval = setInterval(() => {
        startGlitch();
      }, 5000);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [autoTrigger, triggerDelay, startGlitch, prefersReducedMotion]);

  const handleMouseEnter = () => {
    startGlitch();
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    stopGlitch();
    onMouseLeave?.();
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" className={`relative z-10 block ${className}`}>
        {glitchText}
      </span>
      {isGlitching && (
        <>
          <motion.span
            aria-hidden="true"
            className="text-glitch-red pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
            style={{
              textShadow: '2px 0 var(--color-glitch-red), -2px 0 var(--color-glitch-blue)',
            }}
            animate={{
              x: [0, -2, 2, -1, 1, 0],
              opacity: [0, 0.8, 0.6, 0.8, 0, 0],
            }}
            transition={{
              duration: animationDuration,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            }}
          >
            {glitchText}
          </motion.span>
          <motion.span
            aria-hidden="true"
            className="text-glitch-blue pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
            style={{
              textShadow: '-2px 0 var(--color-glitch-blue), 2px 0 var(--color-glitch-red)',
            }}
            animate={{
              x: [0, 2, -2, 1, -1, 0],
              opacity: [0, 0.8, 0.6, 0.8, 0, 0],
            }}
            transition={{
              duration: animationDuration,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            }}
          >
            {glitchText}
          </motion.span>
        </>
      )}
    </span>
  );
}
