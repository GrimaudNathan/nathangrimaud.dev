import type { ReactNode } from 'react';
import Button from '../components/Button/Button';
import Link from '../components/Link/Link';
import GlitchText from '../components/GlitchText/GlitchText';
import Tag from '../components/Tag/Tag';
import Disclosure from '../components/Disclosure/Disclosure';
import ColorSquare from '../components/ColorSquare/ColorSquare';
import { SkillItem } from '../components/Skills/SkillItem';
import { LinkedInIcon } from '../assets/LinkedInIcon';
import { GitHubIcon } from '../assets/GitHubIcon';
import { EmailIcon } from '../assets/EmailIcon';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

function Section({
  title,
  children,
  className = '',
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`border-terminal-border-secondary space-y-6 rounded border-2 p-8 ${className}`}
    >
      <h2 className="text-terminal-text-primary font-mono text-xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

function Subheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-terminal-text-subtle font-mono text-sm font-bold tracking-wide uppercase">
      {children}
    </h3>
  );
}

export function DesignSystem() {
  useDocumentTitle('Design system | Nathan Grimaud');

  return (
    <div className="bg-terminal-bg-secondary min-h-screen">
      <div className="mx-auto max-w-4xl space-y-8 px-6 pt-24 pb-16 md:px-12 md:pt-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h1 className="text-terminal-text-primary font-mono text-4xl font-bold">
              DESIGN SYSTEM
            </h1>
            <p className="text-terminal-text-subtle max-w-2xl font-mono text-sm leading-relaxed">
              Session terminal : fond noir, prompt <span className="text-white">nathan</span>
              <span className="text-terminal-text-primary">@grimaud</span>, glitch rouge/bleu au
              survol, contenu clair en panneaux fichier. Le boot du hero (accueil) est documenté
              ci-dessous ; les autres routes restent statiques.
            </p>
          </div>
          <Link href="/" variant="secondary" className="inline-flex min-h-11 shrink-0 items-center">
            ← Retour
          </Link>
        </div>

        <Section title="Palette">
          <div className="space-y-6">
            <div>
              <Subheading>Fonds</Subheading>
              <div className="mt-3 flex flex-wrap gap-4">
                <ColorSquare colorClass="bg-terminal-bg-primary" label="Fond principal #0a0a0a" />
                <ColorSquare
                  colorClass="bg-terminal-bg-secondary"
                  label="Fond secondaire #1f1f1f"
                />
                <ColorSquare colorClass="bg-terminal-bg-white" label="Panneau clair #eeeeee" />
              </div>
            </div>
            <div>
              <Subheading>Texte & accent</Subheading>
              <div className="mt-3 flex flex-wrap gap-4">
                <ColorSquare colorClass="bg-terminal-text-primary" label="Accent principal" />
                <ColorSquare colorClass="bg-terminal-text-secondary" label="Accent secondaire" />
                <ColorSquare colorClass="bg-terminal-text-muted" label="Texte atténué" />
              </div>
            </div>
            <div>
              <Subheading>Glitch</Subheading>
              <div className="mt-3 flex flex-wrap gap-4">
                <ColorSquare colorClass="bg-glitch-red" label="Glitch rouge #ff0000" />
                <ColorSquare colorClass="bg-glitch-blue" label="Glitch bleu #0000ff" />
              </div>
            </div>
            <div>
              <Subheading>Bordures</Subheading>
              <div className="mt-3 flex flex-wrap gap-4">
                <ColorSquare colorClass="bg-terminal-border-primary" label="Bordure sombre" />
                <ColorSquare colorClass="bg-terminal-border-secondary" label="Bordure légère" />
              </div>
            </div>
          </div>
        </Section>

        <Section title="Typographie">
          <div className="space-y-8">
            <div>
              <Subheading>Corps & UI</Subheading>
              <p className="text-terminal-text-subtle mt-3 font-mono text-sm">
                Courier New / Monaco / Menlo — bold pour labels et listes, tracking large en
                uppercase pour la nav et les CTA.
              </p>
            </div>
            <div className="bg-terminal-bg-primary border-terminal-border-primary rounded border p-6">
              <p className="font-mono text-sm font-bold">
                <span className="text-white">nathan@grimaud</span>
                <span className="text-terminal-text-primary">:~$ </span>
                <span className="text-white">whoami</span>
                <span className="boot-caret text-terminal-text-primary" aria-hidden="true" />
              </p>
              <p className="mt-4 font-mono text-[clamp(2rem,8vw,3.5rem)] leading-[0.9] font-bold tracking-[-0.04em] text-white">
                NATHAN GRIMAUD
              </p>
            </div>
            <div className="bg-terminal-bg-white rounded-t-4xl p-6 text-black">
              <p className="font-mono text-[clamp(1.85rem,7vw,3rem)] leading-[0.92] font-bold tracking-[-0.04em] text-balance">
                4 ANS DE DÉVELOPPEMENT
              </p>
              <p className="mt-4 font-mono text-3xl font-bold md:text-5xl">
                Je conçois des interfaces{' '}
                <span className="text-terminal-text-secondary">fiables</span>.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Shell & navigation">
          <p className="text-terminal-text-subtle font-mono text-sm leading-relaxed">
            Barre fixe en haut de page : identifiant de session à gauche sur desktop, liens de
            contact soulignés à droite. Sur mobile, libellés courts (Email, LinkedIn).
          </p>
          <div className="bg-terminal-bg-primary border-terminal-border-primary mt-4 rounded border p-4">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
              <p className="font-mono text-sm font-bold">
                <span className="text-white">nathan</span>
                <span className="text-terminal-text-primary">@grimaud</span>
              </p>
              <div className="flex gap-4">
                <Link href="mailto:natgrimaud22@gmail.com" variant="underline">
                  Email
                </Link>
                <Link href="https://linkedin.com/in/nathangrimaud" variant="underline" external>
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Effets CRT & boot">
          <p className="text-terminal-text-subtle font-mono text-sm leading-relaxed">
            Séquence d’accueil (~2 s) : l’écran s’allume, la commande s’écrit, une déchirure
            rouge/bleu précède l’apparition du nom, avec scanlines et vignette. Si l’utilisateur
            préfère moins d’animation, le hero s’affiche directement, sans séquence.
          </p>
          <div className="bg-terminal-bg-primary border-terminal-border-primary relative mt-6 min-h-48 overflow-hidden rounded border">
            <div
              className="crt-scanlines pointer-events-none absolute inset-0"
              aria-hidden="true"
            />
            <div className="crt-vignette pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="relative z-10 p-6">
              <p className="font-mono text-sm font-bold">
                <span className="text-white">nathan@grimaud</span>
                <span className="text-terminal-text-primary">:~$ </span>
                <span className="text-white">whoami</span>
              </p>
              <p
                className="mt-4 font-mono text-3xl font-bold tracking-[-0.04em] text-white"
                style={{ textShadow: '4px 0 #ff0000, -4px 0 #0000ff' }}
              >
                NATHAN
              </p>
            </div>
          </div>
        </Section>

        <Section title="Button">
          <div className="space-y-6">
            <div>
              <Subheading>Variants</Subheading>
              <div className="mt-3 flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>
            </div>
            <div>
              <Subheading>Tailles</Subheading>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div>
              <Subheading>États</Subheading>
              <div className="mt-3 flex flex-wrap gap-4">
                <Button>Actif</Button>
                <Button disabled>Désactivé</Button>
              </div>
            </div>
            <div>
              <Subheading>Avec icônes</Subheading>
              <div className="mt-3 flex flex-col gap-4">
                <Button icon={<EmailIcon />} variant="primary">
                  Email
                </Button>
                <Button icon={<LinkedInIcon />} variant="secondary">
                  LinkedIn
                </Button>
                <Button icon={<GitHubIcon />} variant="outline">
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Link">
          <div className="space-y-4">
            <Subheading>Variants</Subheading>
            <div className="mt-3 flex flex-wrap gap-4">
              <Link href="/design-system" variant="primary">
                Primary
              </Link>
              <Link href="/design-system" variant="secondary">
                Secondary
              </Link>
              <Link href="/design-system" variant="underline">
                Underline
              </Link>
            </div>
            <Subheading>Externe</Subheading>
            <div className="mt-3 flex flex-wrap gap-4">
              <Link href="https://example.com" variant="primary" external>
                Lien externe
              </Link>
            </div>
          </div>
        </Section>

        <Section title="GlitchText">
          <p className="text-terminal-text-subtle font-mono text-sm">
            Survol pour déclencher ; doubles calques rouge/bleu en motion. Utilisé sur liens,
            boutons, titres d’expériences et lignes de compétences.
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex flex-wrap items-center gap-6">
              <GlitchText className="text-terminal-text-primary text-2xl font-bold">
                Survol
              </GlitchText>
              <GlitchText
                className="text-terminal-text-secondary text-2xl font-bold"
                glitchOptions={{ duration: 150, frameInterval: 20 }}
              >
                Rapide
              </GlitchText>
              <GlitchText
                className="text-terminal-text-secondary text-2xl font-bold"
                autoTrigger
                triggerDelay={0}
                glitchOptions={{ duration: 600 }}
              >
                Auto
              </GlitchText>
            </div>
          </div>
        </Section>

        <Section title="Tag">
          <div className="flex flex-wrap gap-3">
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Next.js</Tag>
          </div>
          <p className="text-terminal-text-subtle mt-3 font-mono text-xs">
            Utilisés dans les cartes d’expérience repliables. Sur la page d’accueil, la stack est
            affichée en texte bleu sans pastille.
          </p>
        </Section>

        <Section title="Disclosure">
          <div className="space-y-8">
            <div>
              <Subheading>Carte (défaut)</Subheading>
              <div className="bg-terminal-bg-white mt-3 rounded p-2">
                <Disclosure
                  title="Cosmobilis"
                  year="2026"
                  skills={['React', 'Next.js', 'TypeScript']}
                >
                  Exemple de contenu pour la page design system — bordure carte, tags pills.
                </Disclosure>
              </div>
            </div>
            <div>
              <Subheading>Journal (page d’accueil)</Subheading>
              <div className="bg-terminal-bg-white mt-3 rounded px-2">
                <Disclosure
                  variant="log"
                  title="Colibri"
                  year="2025"
                  skills={['Vue', 'JavaScript']}
                >
                  Ligne horizontale : année, titre avec glitch au survol, stack ; le détail s’ouvre
                  en dessous, en colonne étroite pour la lecture.
                </Disclosure>
                <Disclosure variant="log" title="Epitech" year="2017 - 2022">
                  Sans stack — titre seul.
                </Disclosure>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Liste compétences">
          <div className="bg-terminal-bg-white rounded p-4">
            <ul className="list-none">
              {['GIT', 'TYPESCRIPT', 'ACCESSIBILITÉ'].map((skill) => (
                <li
                  key={skill}
                  className="flex min-h-14 items-center border-b border-black/10 py-2"
                >
                  <SkillItem skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </div>
    </div>
  );
}
