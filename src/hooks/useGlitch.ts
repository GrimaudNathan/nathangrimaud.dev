import { useState, useRef, useCallback } from 'react';

const glitchChars = ['!', '@', '#', '$', '%', '&', '*', '+', '=', '?', '0', '1'];

const getGlitchChar = (originalChar: string) => {
  if (originalChar === ' ') return ' ';
  return glitchChars[Math.floor(Math.random() * glitchChars.length)];
};

export interface UseGlitchOptions {
  disabled?: boolean;
  duration?: number;
  frameInterval?: number;
}

export const useGlitch = (originalText: string, options: UseGlitchOptions = {}) => {
  const { disabled = false, duration = 300, frameInterval = 30 } = options;
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState(originalText);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startGlitch = useCallback(() => {
    if (disabled) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setIsGlitching(true);

    let frameCount = 0;
    const maxFrames = Math.ceil(duration / frameInterval);

    intervalRef.current = setInterval(() => {
      frameCount++;

      if (frameCount < maxFrames) {
        setGlitchText(
          originalText
            .split('')
            .map((char) => {
              if (Math.random() > 0.3) {
                return getGlitchChar(char);
              }
              return char;
            })
            .join(''),
        );
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setGlitchText(originalText);
        setIsGlitching(false);
      }
    }, frameInterval);
  }, [originalText, disabled, duration, frameInterval]);

  const stopGlitch = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setGlitchText(originalText);
    setIsGlitching(false);
  }, [originalText]);

  return {
    glitchText,
    isGlitching,
    startGlitch,
    stopGlitch,
  };
};
