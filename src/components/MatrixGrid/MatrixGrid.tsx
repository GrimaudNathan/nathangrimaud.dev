import { useEffect, useRef, useState } from 'react';

interface MatrixGridProps {
  className?: string;
}

export const MatrixGrid = ({ className = '' }: MatrixGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const lastFrameTimeRef = useRef(0);

  useEffect(() => {
    // Détection prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // IntersectionObserver pour pause/play
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(canvas);

    const gridSize = 50;
    const waveSpeed = 0.02;
    const waveAmplitude = 2.5;
    let points: number[][] = [];
    let cols = 0;
    let rows = 0;
    let time = 0;

    const generateGrid = () => {
      const width = canvas.offsetWidth || canvas.clientWidth || window.innerWidth;
      const height = canvas.offsetHeight || canvas.clientHeight || window.innerHeight;

      if (width === 0 || height === 0) return;

      canvas.width = width;
      canvas.height = height;

      const padding = gridSize * 2;
      cols = Math.ceil((canvas.width + padding * 2) / gridSize) + 1;
      rows = Math.ceil((canvas.height + padding * 2) / gridSize) + 1;

      points = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          points.push([
            x * gridSize - padding,
            y * gridSize - padding,
            Math.random() * Math.PI * 2,
          ]);
        }
      }
    };

    generateGrid();

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        generateGrid();
      }, 100);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);
    window.addEventListener('resize', handleResize);

    const animate = (timestamp: number) => {
      if (!isVisible || prefersReducedMotion) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      const isMobile = window.innerWidth < 768;
      const targetFPS = isMobile ? 30 : 60;
      const frameInterval = 1000 / targetFPS;
      
      if (timestamp - lastFrameTimeRef.current < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastFrameTimeRef.current = timestamp;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = '#00ff00';
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.4;
      ctx.imageSmoothingEnabled = false;

      time += waveSpeed;

      const mouse = mousePosRef.current;
      const mouseInfluence = mouse ? 60 : 0;
      const mouseInfluenceRadiusSq = mouse ? 40000 : 0;

      ctx.beginPath();

      for (let y = 0; y < rows - 1; y++) {
        for (let x = 0; x < cols - 1; x++) {
          const index = y * cols + x;
          const point = points[index];

          let offsetX = Math.sin(time + point[2]) * waveAmplitude;
          let offsetY = Math.cos(time * 0.7 + point[2]) * waveAmplitude;

          if (mouse && mouseInfluence > 0) {
            const dx = point[0] + offsetX - mouse.x;
            const dy = point[1] + offsetY - mouse.y;
            const distanceSq = dx * dx + dy * dy;

            if (distanceSq < mouseInfluenceRadiusSq) {
              const distance = Math.sqrt(distanceSq);
              const influence = 1 - distance / 200;
              const pushStrength = mouseInfluence * influence * influence;
              const angle = Math.atan2(dy, dx);

              offsetX += Math.cos(angle) * pushStrength;
              offsetY += Math.sin(angle) * pushStrength;
            }
          }

          const x1 = point[0] + offsetX;
          const y1 = point[1] + offsetY;

          if (x < cols - 1) {
            const rightPoint = points[index + 1];
            let rightOffsetX = Math.sin(time + rightPoint[2]) * waveAmplitude;
            let rightOffsetY = Math.cos(time * 0.7 + rightPoint[2]) * waveAmplitude;

            if (mouse) {
              const dx = rightPoint[0] + rightOffsetX - mouse.x;
              const dy = rightPoint[1] + rightOffsetY - mouse.y;
              const distanceSq = dx * dx + dy * dy;

              if (distanceSq < mouseInfluenceRadiusSq) {
                const distance = Math.sqrt(distanceSq);
                const influence = 1 - distance / 200;
                const pushStrength = mouseInfluence * influence * influence;
                const angle = Math.atan2(dy, dx);
                rightOffsetX += Math.cos(angle) * pushStrength;
                rightOffsetY += Math.sin(angle) * pushStrength;
              }
            }

            const rightX = rightPoint[0] + rightOffsetX;
            const rightY = rightPoint[1] + rightOffsetY;

            ctx.moveTo(x1, y1);
            ctx.lineTo(rightX, rightY);
          }

          if (y < rows - 1) {
            const bottomPoint = points[index + cols];
            let bottomOffsetX = Math.sin(time + bottomPoint[2]) * waveAmplitude;
            let bottomOffsetY = Math.cos(time * 0.7 + bottomPoint[2]) * waveAmplitude;

            if (mouse) {
              const dx = bottomPoint[0] + bottomOffsetX - mouse.x;
              const dy = bottomPoint[1] + bottomOffsetY - mouse.y;
              const distanceSq = dx * dx + dy * dy;

              if (distanceSq < mouseInfluenceRadiusSq) {
                const distance = Math.sqrt(distanceSq);
                const influence = 1 - distance / 200;
                const pushStrength = mouseInfluence * influence * influence;
                const angle = Math.atan2(dy, dx);
                bottomOffsetX += Math.cos(angle) * pushStrength;
                bottomOffsetY += Math.sin(angle) * pushStrength;
              }
            }

            const bottomX = bottomPoint[0] + bottomOffsetX;
            const bottomY = bottomPoint[1] + bottomOffsetY;

            ctx.moveTo(x1, y1);
            ctx.lineTo(bottomX, bottomY);
          }
        }
      }

      ctx.stroke();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    let mouseMoveTimeout: number | undefined;
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseMoveTimeout !== undefined) {
        cancelAnimationFrame(mouseMoveTimeout);
      }
      mouseMoveTimeout = requestAnimationFrame(() => {
        const rect = canvas.getBoundingClientRect();
        mousePosRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      });
    };

    const handleMouseLeave = () => {
      mousePosRef.current = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      observer.disconnect();
      clearTimeout(resizeTimeout);
      if (mouseMoveTimeout !== undefined) {
        cancelAnimationFrame(mouseMoveTimeout);
      }
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      style={{
        pointerEvents: 'auto',
        display: 'block',
        willChange: 'transform',
      }}
    />
  );
};
