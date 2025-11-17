import { Link } from '../components/Link';
import { GlitchText } from '../components/GlitchText';

export const NotFound = () => {
  return (
    <div className="bg-terminal-bg-primary flex min-h-screen items-center justify-center">
      <div className="text-center space-y-8 px-4">
        <div className="space-y-4">
          <GlitchText 
            autoTrigger 
            glitchOptions={{ duration: 800, frameInterval: 30 }}
            className="font-mono text-9xl font-bold text-terminal-text-primary"
          >
            404
          </GlitchText>
          <h2 className="font-mono text-2xl text-terminal-text-secondary">
            Page non trouvée
          </h2>
          <p className="text-terminal-text-muted font-mono">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        
        <div className="flex justify-center gap-4">
          <Link href="/" variant="primary">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

