import gitLogo from '../../assets/git.png';
import javascriptLogo from '../../assets/javascript.png';
import reactLogo from '../../assets/react.png';
import tailwindLogo from '../../assets/tailwind.png';
import typescriptLogo from '../../assets/typescript.png';
import vueLogo from '../../assets/vue.png';
import { AnimatedLogo, type Logo } from './AnimatedLogo';
import { SkillItem } from './SkillItem';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const logos: Logo[] = [
  { src: gitLogo, alt: 'Git', side: 'left', top: '10%', left: '5%', rotation: -8 },
  { src: javascriptLogo, alt: 'JavaScript', side: 'left', top: '35%', left: '8%', rotation: 12 },
  { src: vueLogo, alt: 'Vue', side: 'left', top: '65%', left: '3%', rotation: -5 },
  { src: reactLogo, alt: 'React', side: 'right', top: '15%', right: '6%', rotation: 10 },
  { src: typescriptLogo, alt: 'TypeScript', side: 'right', top: '45%', right: '4%', rotation: -12 },
  { src: tailwindLogo, alt: 'Tailwind', side: 'right', top: '75%', right: '7%', rotation: 6 },
];

const skills = [
  'GIT',
  'UX/UI',
  'HTML',
  'CSS & TAILWIND',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'VUE & REACT',
  'DESIGN SYSTEM',
  'RESPONSIVE DESIGN',
  'PROMPT ENGINEERING',
  'ACCESSIBILITÉ',
  'TESTS UNITAIRES',
  'SSR',
  'SEO',
  'CI/CD',
];

export default function Skills() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <section
      id="competences"
      aria-labelledby="competences-titre"
      className="bg-terminal-bg-white relative scroll-mt-24 overflow-hidden py-20"
    >
      <h2
        id="competences-titre"
        className="px-6 text-center font-mono text-5xl font-bold tracking-tight text-balance text-black md:text-6xl lg:text-7xl xl:text-8xl"
      >
        4 ANS DE DÉVELOPPEMENT
      </h2>
      <div className="relative mt-16 flex flex-col items-center justify-center gap-2">
        {isDesktop &&
          logos.map((logo) => <AnimatedLogo key={logo.alt} logo={logo} isMobile={false} />)}
        <ul className="flex list-none flex-col items-center gap-2">
          {skills.map((skill) => (
            <li key={skill}>
              <SkillItem skill={skill} />
            </li>
          ))}
        </ul>
        {!isDesktop && (
          <div className="mt-12 grid grid-cols-3 gap-4 px-6">
            {logos.map((logo) => (
              <AnimatedLogo key={`mobile-${logo.alt}`} logo={logo} isMobile={true} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
