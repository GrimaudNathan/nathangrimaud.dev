import { useMemo } from 'react';
import { motion } from 'motion/react';

interface MatrixCodeProps {
  className?: string;
}

export const MatrixCode = ({ className = '' }: MatrixCodeProps) => {
  const columns = 40;

  const columnsData = useMemo(() => {
    return Array.from({ length: columns }, (_, i) => ({
      id: i,
      delay: i * 0.5 + Math.random() * 2,
      duration: 15 + Math.random() * 4,
      opacity: 0.05 + Math.random() * 0.3,
      left: Math.random() * 100,
      highlightCount: Math.floor(Math.random() * 6) + 1,
    }));
  }, []);

  const generateMatrixText = useMemo(() => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?';
    const length = 25;

    return (highlightCount: number, baseOpacity: number) => {
      const elements = [];

      for (let i = 0; i < length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const isHighlighted = i >= length - highlightCount;
        const opacity = isHighlighted ? Math.min(baseOpacity * 3, 1) : baseOpacity;

        elements.push(
          <div key={i} style={{ opacity }}>
            {char}
          </div>,
        );
      }

      return elements;
    };
  }, []);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="relative h-full w-full">
        {columnsData.map((col) => (
          <motion.div
            key={col.id}
            className="text-terminal-text-tertiary absolute text-center font-mono text-lg leading-5"
            style={{
              left: `${col.left}%`,
              height: '107%',
              width: '1ch',
              willChange: 'transform',
            }}
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{
              duration: col.duration,
              delay: col.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {generateMatrixText(col.highlightCount, col.opacity)}
            {generateMatrixText(col.highlightCount, col.opacity)}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
