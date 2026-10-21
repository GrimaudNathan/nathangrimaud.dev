import { memo } from 'react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={`bg-terminal-text-primary text-terminal-bg-primary inline-flex items-center rounded-full px-3 py-1 font-mono text-xs font-semibold ${className}`}
    >
      {children}
    </span>
  );
}

export default memo(Tag);
