import GlitchText from '../GlitchText/GlitchText';
import Button from '../Button/Button';
import Link from '../Link/Link';
import { LinkedInIcon } from '../../assets/LinkedInIcon';
import { GitHubIcon } from '../../assets/GitHubIcon';
import { EmailIcon } from '../../assets/EmailIcon';

export default function Footer() {
  const firstName = 'NATHAN';
  const lastName = 'GRIMAUD';
  const email = 'natgrimaud22@gmail.com';
  const linkedinUrl = 'https://linkedin.com/in/nathangrimaud';
  const githubUrl = 'https://github.com/GrimaudNathan';
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-terminal-bg-primary border-terminal-border-primary scroll-mt-24 border-t"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-14 text-left">
          <h2 className="inline-block space-x-4 font-mono text-3xl font-bold tracking-tight text-white md:text-4xl">
            <GlitchText glitchOptions={{ duration: 400, frameInterval: 30 }} autoTrigger>
              {firstName}
            </GlitchText>
            <GlitchText glitchOptions={{ duration: 400, frameInterval: 30 }} autoTrigger>
              {lastName}
            </GlitchText>
          </h2>
        </div>

        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-terminal-text-subtle mb-6 font-mono text-lg font-bold tracking-wider uppercase">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <Button href={`mailto:${email}`} icon={<EmailIcon />} variant="secondary">
                Email
              </Button>
              <Button href={linkedinUrl} icon={<LinkedInIcon />} variant="secondary" external>
                LinkedIn
              </Button>
              <Button href={githubUrl} icon={<GitHubIcon />} variant="secondary" external>
                GitHub
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-terminal-text-subtle mb-6 font-mono text-lg font-bold tracking-wider uppercase">
              Disponibilité
            </h3>
            <p className="text-terminal-text-primary mb-6 font-mono text-sm leading-relaxed">
              Actuellement disponible pour de nouveaux projets. N'hésitez pas à me contacter !
            </p>
            <Button variant="primary" href="/CV.pdf" external>
              Télécharger mon CV
            </Button>
          </div>

          <div>
            <h3 className="text-terminal-text-subtle mb-6 font-mono text-lg font-bold tracking-wider uppercase">
              Navigation
            </h3>
            <div className="flex flex-col items-start gap-1">
              <Link
                href="#a-propos"
                variant="underline"
                className="inline-flex min-h-11 items-center"
              >
                À propos
              </Link>
              <Link
                href="#competences"
                variant="underline"
                className="inline-flex min-h-11 items-center"
              >
                Compétences
              </Link>
              <Link
                href="#experiences"
                variant="underline"
                className="inline-flex min-h-11 items-center"
              >
                Expériences
              </Link>
              <Link
                href="/design-system"
                variant="underline"
                className="inline-flex min-h-11 items-center"
              >
                Design system
              </Link>
            </div>
          </div>
        </div>

        <div className="border-terminal-border-primary border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-terminal-text-primary font-mono text-sm">
              © {currentYear} Nathan Grimaud. Développé avec React & TypeScript.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
