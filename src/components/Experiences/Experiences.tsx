import Disclosure from '../Disclosure/Disclosure';
import Link from '../Link/Link';

export default function Experiences() {
  const professionalExperiences = [
    {
      id: 'Cosmobilis',
      title: 'Cosmobilis',
      year: '2026',
      skills: ['React', 'Next.js', 'TypeScript'],
      description: (
        <>
          Développement from scratch d'une application web complète (site vitrine + backoffice
          professionnel) pour un groupe en pleine croissance. Conception de l'architecture frontend,
          implémentation du SSR avec Next.js et optimisation des Core Web Vitals - score SEO 90.
        </>
      ),
    },
    {
      id: 'Colibri',
      title: 'Colibri',
      year: '2025',
      skills: ['Vue', 'JavaScript'],
      description: (
        <>
          Contribution au développement d'un SaaS B2B spécialisé en supply chain : plateforme de
          planification automatisée des ventes et de gestion intelligente des stocks. Intégration
          d'interfaces complexes orientées data pour des utilisateurs métier exigeants.{' '}
          <Link href="https://www.colibri-snop.com/fr/" variant="secondary" external>
            Voir le site
          </Link>
        </>
      ),
    },
    {
      id: 'soyhuce',
      title: 'Soyhuce',
      year: '2023 - 2025',
      skills: ['React', 'TypeScript', 'Storybook'],
      description: (
        <>
          Développement d'un SaaS RH permettant de planifier automatiquement les calendriers de
          milliers de collaborateurs. Application hautement personnalisable avec une interface
          moderne et intuitive — composants documentés sous Storybook et collaboration étroite avec
          les équipes UX.{' '}
          <Link href="https://happyplan.soyhuce.fr/" variant="secondary" external>
            Voir le site
          </Link>
        </>
      ),
    },
    {
      id: 'useradgents',
      title: 'Useradgents',
      year: '2022 - 2023',
      skills: ['Vue', 'Nuxt', 'JavaScript'],
      description: (
        <>
          Développement du site e-commerce de Franprix — paiement sécurisé et livraison à domicile.
          Enjeux principaux : performance, SEO et optimisation du tunnel d'achat pour une expérience
          utilisateur fluide à grande échelle.{' '}
          <Link href="https://www.franprix.fr/" variant="secondary" external>
            Voir le site
          </Link>
        </>
      ),
    },
    {
      id: 'outmind',
      title: 'Outmind',
      year: '2022',
      skills: ['React', 'TypeScript'],
      description: (
        <>
          Stage de fin d'études sur un SaaS de moteur de recherche unifié, permettant de centraliser
          de nombreuses applications et bases de données en un point d'accès unique. Développement
          frontend et contribution DevOps (Docker, AWS, Kubernetes).{' '}
          <Link href="https://www.outmind.ai/" variant="secondary" external>
            Voir le site
          </Link>
        </>
      ),
    },
  ];

  const academicExperiences = [
    {
      id: 'epitech',
      title: 'Epitech',
      year: '2017 - 2022',
      description:
        "Parcours universitaire de 5 ans avec obtention d'un diplôme national de Master en informatique. Apprentissage des langages C et C++ en début de cursus, puis spécialisation dans le développement web avec les frameworks JavaScript et PHP modernes.",
    },
  ];

  return (
    <section
      id="experiences"
      aria-labelledby="experiences-titre"
      className="bg-terminal-bg-white scroll-mt-24 rounded-b-4xl px-6 pt-24 pb-20"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="experiences-titre"
          className="mb-8 font-mono text-[clamp(1.85rem,7vw,6rem)] leading-[0.92] font-bold tracking-[-0.04em] text-balance text-black"
        >
          EXPÉRIENCES
        </h2>
        <div>
          <h3 className="mt-10 mb-2 font-mono text-xl font-bold tracking-tight text-black">
            Expériences Professionnelles
          </h3>
          {professionalExperiences.map((experience) => (
            <Disclosure
              key={experience.id}
              title={experience.title}
              year={experience.year}
              skills={experience.skills}
              variant="log"
            >
              {experience.description}
            </Disclosure>
          ))}

          <h3 className="mt-12 mb-2 font-mono text-xl font-bold tracking-tight text-black">
            Expériences Académiques
          </h3>
          {academicExperiences.map((experience) => (
            <Disclosure
              key={experience.id}
              title={experience.title}
              year={experience.year}
              variant="log"
            >
              {experience.description}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
