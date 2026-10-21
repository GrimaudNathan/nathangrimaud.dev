import { useId, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Tag from '../Tag/Tag';
import GlitchText from '../GlitchText/GlitchText';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface DisclosureProps {
  title: string;
  year: string;
  skills?: string[];
  children: React.ReactNode;
  variant?: 'card' | 'log';
}

export default function Disclosure({
  title,
  year,
  skills = [],
  children,
  variant = 'card',
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const panelId = useId();
  const duration = prefersReducedMotion ? 0 : 0.3;

  if (variant === 'log') {
    return (
      <div className="border-b border-black/15">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen(!isOpen)}
          className="flex min-h-14 w-full cursor-pointer items-start gap-4 py-4 text-left"
        >
          <motion.span
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration, ease: 'easeInOut' }}
            className="mt-1 shrink-0 sm:mt-0"
            aria-hidden="true"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-terminal-text-secondary"
            >
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>
          <span className="grid min-w-0 flex-1 gap-x-6 gap-y-1 sm:grid-cols-[7.5rem_1fr] sm:items-baseline">
            <span className="text-terminal-text-secondary font-mono text-sm font-bold tabular-nums">
              {year}
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-lg font-bold text-black md:text-xl">
                <GlitchText animationDuration={0.28}>{title}</GlitchText>
              </span>
              {skills.length > 0 && (
                <span className="text-terminal-text-secondary mt-1 block font-mono text-xs font-bold tracking-wide">
                  {skills.join(' · ')}
                </span>
              )}
            </span>
          </span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id={panelId}
              role="region"
              aria-label={title}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="max-w-[68ch] pt-1 pr-2 pb-6 pl-8 font-mono text-sm leading-relaxed text-black sm:pl-[9.5rem]">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="border-terminal-border-primary/50 hover:border-terminal-text-primary border bg-white transition-colors duration-200">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer flex-col gap-3 p-4 text-left sm:flex-row sm:items-center sm:gap-4"
      >
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration, ease: 'easeInOut' }}
            className="shrink-0"
            aria-hidden="true"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-terminal-text-primary"
            >
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <div className="min-w-0 flex-1">
            <p className="truncate font-mono font-semibold text-black">{title}</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-4 sm:ml-auto">
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          )}
          <p className="text-terminal-text-muted font-mono text-sm whitespace-nowrap">{year}</p>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-label={title}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-terminal-border-primary/20 border-t px-4 pt-0 pb-4">
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
                transition={{ duration, delay: prefersReducedMotion ? 0 : 0.1 }}
                className="pt-4 font-mono text-sm leading-relaxed text-gray-700"
              >
                {children}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
