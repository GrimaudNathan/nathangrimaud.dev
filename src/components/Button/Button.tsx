import { motion } from 'motion/react';
import { useRef } from 'react';
import { GlitchText } from '../GlitchText';
import type { GlitchTextRef } from '../GlitchText';

interface ButtonProps {
  children: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) => {
  const glitchTextRef = useRef<GlitchTextRef>(null);

  const baseStyles = `
    relative
    font-mono
    font-bold
    uppercase
    tracking-wider
    transition-all
    duration-200
    overflow-hidden
    border-2
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `;

  const variantStyles = {
    primary: `
      bg-terminal-text-primary
      text-terminal-bg-primary
      border-terminal-text-primary
      hover:shadow-[0_0_20px_var(--color-terminal-text-primary)]
      hover:bg-terminal-text-secondary
    `,
    secondary: `
      bg-transparent
      text-terminal-text-primary
      border-terminal-text-primary
      hover:bg-terminal-text-primary
      hover:text-terminal-bg-primary
      hover:shadow-[0_0_20px_var(--color-terminal-text-primary)]
    `,
    outline: `
      bg-transparent
      text-terminal-text-secondary
      border-terminal-border-secondary
      hover:border-terminal-text-primary
      hover:text-terminal-text-primary
      hover:shadow-[0_0_15px_rgba(0,255,0,0.25)]
    `,
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const handleMouseEnter = () => {
    if (glitchTextRef.current) {
      glitchTextRef.current.startGlitch();
    }
  };

  const handleMouseLeave = () => {
    if (glitchTextRef.current) {
      glitchTextRef.current.stopGlitch();
    }
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <GlitchText ref={glitchTextRef} glitchOptions={{ disabled }} animationDuration={0.3}>
        {children}
      </GlitchText>
    </motion.button>
  );
};
