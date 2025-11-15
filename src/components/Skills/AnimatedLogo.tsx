import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import frameSvg from '../../assets/frame.svg';

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
};

export const AnimatedLogo = ({ logo, isMobile = false }: AnimatedLogoProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rotate = useTransform(scrollYProgress, [0, 1], [logo.rotation, logo.rotation + 25]);

  return (
    <motion.div
      ref={ref}
      style={
        isMobile
          ? { rotate }
          : {
              y,
              rotate,
              position: 'absolute',
              top: logo.top,
              ...(logo.side === 'left' ? { left: logo.left } : { right: logo.right }),
            }
      }
      className="relative h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36"
    >
      <div className="pointer-events-none absolute inset-0 z-10">
        <img src={frameSvg} alt="frame" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-5 md:p-6 lg:p-7">
        <img src={logo.src} alt={logo.alt} className="h-full w-full object-contain" />
      </div>
    </motion.div>
  );
};
