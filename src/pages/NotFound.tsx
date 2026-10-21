import Link from '../components/Link/Link';
import GlitchText from '../components/GlitchText/GlitchText';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function NotFound() {
  useDocumentTitle('Page non trouvée | Nathan Grimaud');

  return (
    <div className="bg-terminal-bg-primary flex min-h-screen items-center justify-center px-6">
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <p aria-hidden="true">
            <GlitchText
              autoTrigger
              glitchOptions={{ duration: 800, frameInterval: 30 }}
              className="text-terminal-text-primary font-mono text-7xl font-bold sm:text-8xl md:text-9xl"
            >
              404
            </GlitchText>
          </p>
          <h1 className="font-mono text-2xl text-white">Page non trouvée</h1>
          <p className="text-terminal-text-subtle font-mono">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <div className="flex justify-center">
          <Link href="/" variant="primary" className="inline-flex min-h-11 items-center">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
