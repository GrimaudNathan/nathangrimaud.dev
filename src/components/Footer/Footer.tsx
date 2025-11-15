import { motion } from 'motion/react';
import { GlitchText } from '../GlitchText';
import { Button } from '../Button';
import { LinkedInIcon } from '../../assets/LinkedInIcon';
import { GitHubIcon } from '../../assets/GitHubIcon';
import { EmailIcon } from '../../assets/EmailIcon';

export const Footer = () => {
  const firstName = 'NATHAN';
  const lastName = 'GRIMAUD';
  const email = 'natgrimaud22@gmail.com';
  const linkedinUrl = 'https://linkedin.com/in/nathangrimaud';
  const githubUrl = 'https://github.com/GrimaudNathan';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-terminal-bg-primary border-terminal-border-primary border-t-2">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="mb-12 text-left">
          <motion.h2
            className="inline-block space-x-4 font-mono text-3xl font-bold tracking-tight text-white md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlitchText
              autoTrigger
              triggerDelay={300}
              glitchOptions={{ duration: 400, frameInterval: 30 }}
            >
              {firstName}
            </GlitchText>
            <GlitchText
              autoTrigger
              triggerDelay={600}
              glitchOptions={{ duration: 400, frameInterval: 30 }}
            >
              {lastName}
            </GlitchText>
          </motion.h2>
        </div>

        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-terminal-text-secondary mb-6 font-mono text-lg font-bold tracking-wider uppercase">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-terminal-text-secondary mb-6 font-mono text-lg font-bold tracking-wider uppercase">
              Disponibilité
            </h3>
            <p className="text-terminal-text-primary mb-6 font-mono text-sm leading-relaxed">
              Actuellement disponible pour de nouveaux projets et collaborations. N'hésitez pas à me
              contacter !
            </p>
            <Button variant="primary" onClick={() => (window.location.href = `mailto:${email}`)}>
              Me contacter
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-terminal-text-secondary mb-6 font-mono text-lg font-bold tracking-wider uppercase">
              Navigation
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="/design-system"
                className="text-terminal-text-primary hover:text-terminal-text-secondary font-mono text-sm tracking-wider uppercase transition-colors"
              >
                Design System
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-terminal-border-primary border-t pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-terminal-text-primary font-mono text-sm">
              © {currentYear} Nathan Grimaud. Développé avec React & TypeScript.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
