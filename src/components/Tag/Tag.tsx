import { motion } from 'motion/react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag = ({ children, className = '' }: TagProps) => {
  return (
    <motion.span
      className={`inline-flex items-center px-3 py-1 rounded-full bg-terminal-text-primary text-terminal-bg-primary text-xs font-mono font-semibold ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  );
};

