import { motion } from 'motion/react';
import { Link as RouterLink } from 'react-router-dom';
import { GlitchText } from '../GlitchText';

interface LinkProps {
  children: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'underline';
  className?: string;
  external?: boolean;
}

export const Link = ({
  children,
  href,
  variant = 'primary',
  className = '',
  external = false,
}: LinkProps) => {
  const baseStyles = `
    relative
    font-mono
    font-bold
    uppercase
    tracking-wider
    transition-all
    duration-200
    inline-block
    cursor-pointer
  `;

  const variantStyles = {
    primary: `
      text-terminal-text-primary
      hover:text-terminal-text-secondary
    `,
    secondary: `
      text-terminal-text-secondary
      hover:text-terminal-text-primary
    `,
    underline: `
      text-terminal-text-primary
      border-b-2
      border-terminal-text-primary
      hover:border-terminal-text-secondary
      hover:text-terminal-text-secondary
    `,
  };

  const isInternalRoute = href.startsWith('/') && !external;

  if (isInternalRoute) {
    return (
      <motion.div className="inline-block">
        <RouterLink
          to={href}
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
          <GlitchText animationDuration={0.3}>{children}</GlitchText>
        </RouterLink>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <GlitchText animationDuration={0.3}>{children}</GlitchText>
    </motion.a>
  );
};
