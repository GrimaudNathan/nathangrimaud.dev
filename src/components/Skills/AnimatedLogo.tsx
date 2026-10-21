import { memo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import frameSvg from '../../assets/frame.svg';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export type Logo = {
  src: string;
  alt: string;
  side: 'left' | 'right';
  top: string;
  left?: string;
  right?: string;
  rotation: number;
};

type AnimatedLogoProps = {
  logo: Logo;
  isMobile?: boolean;
  inline?: boolean;
};

function AnimatedLogoImpl({ logo, isMobile = false, inline = false }: AnimatedLogoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rotate = useTransform(scrollYProgress, [0, 1], [logo.rotation, logo.rotation + 25]);

  if (inline) {
    return (
      <div className="relative h-16 w-16 md:h-20 md:w-20">
        <div className="pointer-events-none absolute inset-0 z-10">
          <img src={frameSvg} alt="" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-full w-full object-contain"
            loading="lazy"
            width="80"
            height="80"
          />
        </div>
      </div>
    );
  }

  const positionStyle = isMobile
    ? {}
    : {
        position: 'absolute' as const,
        top: logo.top,
        ...(logo.side === 'left' ? { left: logo.left } : { right: logo.right }),
      };

  return (
    <motion.div
      ref={ref}
      style={prefersReducedMotion ? positionStyle : { ...positionStyle, y, rotate }}
      className="relative h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36"
    >
      <div className="pointer-events-none absolute inset-0 z-10">
        <img src={frameSvg} alt="" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-5 md:p-6 lg:p-7">
        <img
          src={logo.src}
          alt={logo.alt}
          className="h-full w-full object-contain"
          loading="lazy"
          width="100"
          height="100"
        />
      </div>
    </motion.div>
  );
}

export const AnimatedLogo = memo(AnimatedLogoImpl);
