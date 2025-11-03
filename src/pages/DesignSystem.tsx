import { Button } from '../components/Button';
import { Link } from '../components/Link';
import { GlitchText } from '../components/GlitchText';

export const DesignSystem = () => {
  return (
    <div className="bg-terminal-bg-primary mt-8 min-h-screen p-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-terminal-text-primary text-glow text-4xl font-bold">DESIGN SYSTEM</h1>
        </div>

        <div className="border-terminal-border-primary space-y-6 rounded border-2 p-8">
          <div className="space-y-4">
            <h2 className="text-terminal-text-primary text-xl">Button Component</h2>
            <h2 className="text-terminal-text-muted text-xl">Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-terminal-text-muted text-xl">Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-terminal-text-muted text-xl">States</h2>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => console.log('Clicked!')}>Clickable</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </div>

        <div className="border-terminal-border-primary space-y-6 rounded border-2 p-8">
          <div className="space-y-4">
            <h2 className="text-terminal-text-primary text-xl">Link Component</h2>
            <div className="space-y-4">
              <h2 className="text-terminal-text-muted text-xl">Variants</h2>
              <div className="flex gap-4">
                <Link href="/" variant="primary">
                  Primary Link
                </Link>
                <Link href="/" variant="secondary">
                  Secondary Link
                </Link>
                <Link href="/" variant="underline">
                  Underline Link
                </Link>
              </div>
              <h2 className="text-terminal-text-muted text-xl">External</h2>
              <div className="flex gap-4">
                <Link href="/" variant="primary">
                  Not External Link
                </Link>
                <Link href="https://example.com" variant="primary" external>
                  External Link
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-terminal-border-primary space-y-6 rounded border-2 p-8">
          <div className="space-y-4">
            <h2 className="text-terminal-text-primary text-xl">GlitchText Component</h2>
            <div className="space-y-4">
              <h2 className="text-terminal-text-muted text-xl">Auto Trigger</h2>
              <div className="flex flex-wrap items-center gap-4">
                <GlitchText autoTrigger triggerDelay={0}>
                  Auto Trigger
                </GlitchText>
                <GlitchText autoTrigger triggerDelay={500} glitchOptions={{ duration: 600 }}>
                  Delayed Trigger
                </GlitchText>
              </div>
              <h2 className="text-terminal-text-muted text-xl">Custom Options</h2>
              <div className="flex flex-wrap items-center gap-4">
                <GlitchText glitchOptions={{ duration: 200, frameInterval: 20 }}>
                  Fast Glitch
                </GlitchText>
                <GlitchText glitchOptions={{ duration: 600, frameInterval: 50 }}>
                  Slow Glitch
                </GlitchText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
