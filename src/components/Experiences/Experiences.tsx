import { Disclosure } from '../Disclosure';

export const Experiences = () => {
  const professionalExperiences = [
    {
      id: 'soyhuce',
      title: 'Soyhuce',
      year: '2023 - 2025',
      skills: ['Vue', 'React', 'TypeScript', 'Storybook'],
      description:
        'Développement d\'un logiciel SaaS de RH permettant de planifier automatiquement les calendriers de milliers de personnes. Application ultra personnalisable et paramétrable avec une interface moderne et intuitive.',
    },
    {
      id: 'useradgent',
      title: 'Useradgent',
      year: '2022 - 2023',
      skills: ['Vue', 'Nuxt', 'JavaScript'],
      description:
        'Développement du site e-commerce agro-alimentaire de Franprix avec paiement sécurisé et livraison à domicile. Enjeux principaux : performance, ergonomie et optimisation de la logistique pour une expérience utilisateur optimale.',
    },
    {
      id: 'outmind',
      title: 'Outmind',
      year: '2022',
      skills: ['React', 'TypeScript'],
      description:
        'Stage de fin d\'études sur un SaaS moteur de recherche permettant de centraliser de nombreuses applications et bases de données pour les rechercher via un moteur de recherche unifié. Développement front-end et contribution au DevOps avec Docker, AWS et Kubernetes.',
    },
  ];

  const academicExperiences = [
    {
      id: 'epitech',
      title: 'Epitech',
      year: '2017 - 2022',
      description:
        'Parcours universitaire de 5 ans avec obtention d\'un diplôme national de Master en informatique. Apprentissage des langages C et C++ en début de cursus, puis spécialisation dans le développement web avec les frameworks JavaScript et PHP modernes.',
    },
  ];

  return (
    <section className="bg-terminal-bg-white py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-black font-bold text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono tracking-tight mb-16">
          EXPERIENCES
        </h1>

        <div className="space-y-4">
          <h2 className="text-black font-mono font-semibold text-xl mb-2 mt-6 tracking-tight">Expériences Professionnelles</h2>
          {professionalExperiences.map((experience) => (
            <Disclosure
              key={experience.id}
              title={experience.title}
              year={experience.year}
              skills={experience.skills}
            >
              {experience.description}
            </Disclosure>
          ))}

          <h2 className="text-black font-mono font-semibold text-xl mb-2 mt-8 tracking-tight">Expériences Académiques</h2>
          {academicExperiences.map((experience) => (
            <Disclosure
              key={experience.id}
              title={experience.title}
              year={experience.year}
            >
              {experience.description}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

