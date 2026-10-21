import gitLogo from '../../assets/git.png';
import javascriptLogo from '../../assets/javascript.png';
import reactLogo from '../../assets/react.png';
import tailwindLogo from '../../assets/tailwind.png';
import typescriptLogo from '../../assets/typescript.png';
import vueLogo from '../../assets/vue.png';
import { AnimatedLogo, type Logo } from './AnimatedLogo';
import { SkillItem } from './SkillItem';

const logos: Logo[] = [
  { src: gitLogo, alt: 'Git', side: 'left', top: '0', rotation: 0 },
  { src: javascriptLogo, alt: 'JavaScript', side: 'left', top: '0', rotation: 0 },
  { src: vueLogo, alt: 'Vue', side: 'left', top: '0', rotation: 0 },
  { src: reactLogo, alt: 'React', side: 'right', top: '0', rotation: 0 },
  { src: typescriptLogo, alt: 'TypeScript', side: 'right', top: '0', rotation: 0 },
  { src: tailwindLogo, alt: 'Tailwind', side: 'right', top: '0', rotation: 0 },
];

const skills = [
  'GIT',
  'UX/UI',
  'HTML',
  'CSS & TAILWIND',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'REACT',
  'VUE',
  'NEXT.JS',
  'NUXT',
  'DESIGN SYSTEM',
  'RESPONSIVE DESIGN',
  'PROMPT ENGINEERING',
  'ACCESSIBILITÉ',
  'TESTS UNITAIRES',
  'SSR',
  'PERFORMANCE',
  'SEO',
  'CI/CD',
];

export default function Skills() {
  return (
    <section
      id="competences"
      aria-labelledby="competences-titre"
      className="bg-terminal-bg-white scroll-mt-24 px-6 pt-24 pb-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="competences-titre"
          className="mb-10 font-mono text-[clamp(1.85rem,7vw,6rem)] leading-[0.92] font-bold tracking-[-0.04em] text-balance text-black"
        >
          4 ANS DE DÉVELOPPEMENT
        </h2>
        <ul className="mb-12 flex list-none flex-wrap gap-3 md:gap-4">
          {logos.map((logo) => (
            <li key={logo.alt}>
              <AnimatedLogo logo={logo} inline />
            </li>
          ))}
        </ul>
        <ul className="flex list-none flex-col">
          {skills.map((skill) => (
            <li key={skill} className="flex min-h-14 items-center border-b border-black/10 py-2">
              <SkillItem skill={skill} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
