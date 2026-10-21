import { useEffect, useState } from 'react';

const COMMAND = 'whoami';
const FIRST = 'NATHAN';
const LAST = 'GRIMAUD';
const GLITCH = '!<@#$%&*+=?01';

const TYPE_START = 380;
const TYPE_CHAR = 70;
const TEAR_START = TYPE_START + COMMAND.length * TYPE_CHAR + 200;
const TEAR_END = TEAR_START + 280;
const DECODE_CHAR = 80;
const READY_AT = TEAR_END + LAST.length * DECODE_CHAR + 180;

export type BootState = {
  typed: string;
  nathan: string;
  grimaud: string;
  tearing: boolean;
  decoding: boolean;
  ready: boolean;
};

const settled: BootState = {
  typed: COMMAND,
  nathan: FIRST,
  grimaud: LAST,
  tearing: false,
  decoding: false,
  ready: true,
};

const booting: BootState = {
  typed: '',
  nathan: '',
  grimaud: '',
  tearing: false,
  decoding: false,
  ready: false,
};

function glyph(index: number, tick: number) {
  return GLITCH[(tick + index * 5) % GLITCH.length];
}

function decode(word: string, revealed: number, tick: number) {
  let out = '';
  for (let i = 0; i < word.length; i += 1) {
    out += i < revealed ? word[i] : glyph(i, tick);
  }
  return out;
}

export function useBootSequence(enabled: boolean): BootState {
  const [state, setState] = useState<BootState>(enabled ? booting : settled);

  useEffect(() => {
    if (!enabled) {
      setState(settled);
      return;
    }

    const started = performance.now();
    let frame = 0;
    let lastKey = '';

    const step = (time: number) => {
      const now = time - started;
      const typedCount =
        now < TYPE_START ? 0 : Math.min(COMMAND.length, Math.floor((now - TYPE_START) / TYPE_CHAR));
      const tearing = now >= TEAR_START && now < TEAR_END;
      const ready = now >= READY_AT;
      const decoding = now >= TEAR_END && !ready;
      const revealed =
        now < TEAR_END ? 0 : Math.min(LAST.length, Math.floor((now - TEAR_END) / DECODE_CHAR));
      const tick = decoding ? Math.floor(now / 45) : 0;
      const key = `${typedCount}|${revealed}|${tick}|${tearing ? 1 : 0}|${ready ? 1 : 0}`;

      if (key !== lastKey) {
        lastKey = key;
        setState({
          typed: COMMAND.slice(0, typedCount),
          nathan: ready ? FIRST : decoding ? decode(FIRST, revealed, tick) : '',
          grimaud: ready ? LAST : decoding ? decode(LAST, revealed, tick) : '',
          tearing,
          decoding,
          ready,
        });
      }

      if (!ready) frame = requestAnimationFrame(step);
    };

    setState(booting);
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [enabled]);

  return state;
}
