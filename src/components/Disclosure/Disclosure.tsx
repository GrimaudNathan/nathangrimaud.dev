import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tag } from '../Tag';

interface DisclosureProps {
  title: string;
  year: string;
  skills?: string[];
  children: React.ReactNode;
}

export const Disclosure = ({ title, year, skills = [], children }: DisclosureProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-terminal-border-primary/50 hover:border-terminal-text-primary border bg-white transition-colors duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full flex-col gap-3 p-4 text-left sm:flex-row sm:items-center sm:gap-4"
      >
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="shrink-0"
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-terminal-border-primary/20 border-t px-4 pt-0 pb-4">
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="pt-4 font-mono text-sm leading-relaxed text-gray-700"
              >
                {children}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
