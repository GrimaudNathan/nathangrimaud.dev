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
    <div className="border border-terminal-border-primary/50 bg-white hover:border-terminal-text-primary transition-colors duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 text-left"
      >
        <div className="flex items-center gap-4 flex-1 min-w-0">
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

          <div className="flex-1 min-w-0">
            <p className="text-black font-mono font-semibold truncate">{title}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0 sm:ml-auto">
          {skills.length > 0 && (
            <div className="flex gap-2 flex-wrap">
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
            <div className="px-4 pb-4 pt-0 border-t border-terminal-border-primary/20">
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-gray-700 font-mono text-sm leading-relaxed pt-4"
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

