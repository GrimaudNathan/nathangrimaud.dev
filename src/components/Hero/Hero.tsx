import { ScrollArrowIcon } from '../../assets/ScrollArrowIcon';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { useBootSequence } from './useBootSequence';

const skills = ['REACT', 'VUE', 'TYPESCRIPT', 'UX/UI'];

const tearBands = [
  { top: '16%', color: '#ff0000', delay: '0ms' },
  { top: '38%', color: '#0000ff', delay: '20ms' },
  { top: '61%', color: '#ff0000', delay: '40ms' },
  { top: '79%', color: '#0000ff', delay: '10ms' },
];

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const boot = useBootSequence(!prefersReducedMotion);
  const split = boot.tearing || boot.decoding;

  const scrollToAbout = () => {
    document.getElementById('a-propos')?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section
      aria-labelledby="hero-titre"
      className="bg-terminal-bg-primary relative min-h-svh overflow-hidden"
    >
      <h1 id="hero-titre" className="sr-only">
        Nathan Grimaud
      </h1>

      <div
        className={
          prefersReducedMotion ? 'flex min-h-svh flex-col' : 'crt-power flex min-h-svh flex-col'
        }
      >
        {!prefersReducedMotion && (
          <div
            aria-hidden="true"
            className="crt-beam pointer-events-none absolute top-1/2 right-0 left-0 z-40 h-px -translate-y-1/2 bg-white"
          />
        )}
        <div
          aria-hidden="true"
          className="crt-scanlines pointer-events-none absolute inset-0 z-20"
        />
        <div
          aria-hidden="true"
          className="crt-vignette pointer-events-none absolute inset-0 z-20"
        />

        {boot.tearing && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
          >
            {tearBands.map((band) => (
              <div
                key={band.top}
                className="tear-band absolute right-0 left-0 h-3"
                style={{
                  top: band.top,
                  background: `linear-gradient(90deg, transparent, ${band.color}, transparent)`,
                  animationDelay: band.delay,
                }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-24">
          <p aria-hidden="true" className="font-mono text-sm font-bold md:text-base">
            <span className="text-white">nathan@grimaud</span>
            <span className="text-terminal-text-primary">:~$ </span>
            <span className="text-white">{boot.typed}</span>
            <span
              className={
                prefersReducedMotion
                  ? 'boot-caret is-steady text-terminal-text-primary'
                  : 'boot-caret text-terminal-text-primary'
              }
            />
          </p>

          <div
            aria-hidden="true"
            className={`mt-8 font-mono text-[clamp(2.75rem,11vw,6rem)] leading-[0.86] font-bold tracking-[-0.04em] text-white ${
              boot.tearing ? 'boot-shake' : ''
            }`}
            style={split ? { textShadow: '5px 0 #ff0000, -5px 0 #0000ff' } : undefined}
          >
            <p className="min-h-[0.9em]">{boot.nathan || '\u00A0'}</p>
            <p className="min-h-[0.9em]">{boot.grimaud || '\u00A0'}</p>
          </div>
        </div>

        <div
          className={`relative z-10 px-6 pt-8 pb-8 transition-opacity duration-300 ease-out md:pb-10 ${
            boot.ready ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <p className="font-mono text-sm font-bold tracking-wide text-white uppercase md:text-base">
              Développeur front-end basé à Paris
            </p>
            <ul className="flex list-none flex-wrap gap-x-4 gap-y-2 font-mono text-sm font-bold tracking-wide text-white uppercase md:justify-end md:text-base">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex justify-start md:mt-8">
            <button
              type="button"
              onClick={scrollToAbout}
              aria-label="Aller à la section suivante"
              tabIndex={boot.ready ? 0 : -1}
              className="flex h-11 w-11 items-center justify-center"
            >
              <ScrollArrowIcon animate={boot.ready && !prefersReducedMotion} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
