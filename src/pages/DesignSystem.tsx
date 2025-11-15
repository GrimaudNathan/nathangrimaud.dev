import { Button } from '../components/Button';
import { Link } from '../components/Link';
import { GlitchText } from '../components/GlitchText';
import { Tag } from '../components/Tag';
import { Disclosure } from '../components/Disclosure';
import { ColorSquare } from '../components/ColorSquare';
import { LinkedInIcon } from '../assets/LinkedInIcon';
import { GitHubIcon } from '../assets/GitHubIcon';
import { EmailIcon } from '../assets/EmailIcon';

export const DesignSystem = () => {
  return (
    <div className="bg-terminal-bg-secondary min-h-screen">
      <div className="mx-auto max-w-4xl space-y-8 p-12">
        <div className="flex items-center justify-between space-y-4">
          <h1 className="text-terminal-text-primary mt-10 font-mono text-4xl font-bold">
            DESIGN SYSTEM
          </h1>
          <Link href="/" variant="secondary">
            ← Retour
          </Link>
        </div>

        <div className="border-terminal-border-secondary space-y-6 rounded border-2 p-8">
          <div className="space-y-4">
            <h2 className="text-terminal-text-primary text-xl">Color Palette</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-terminal-text-muted mb-3 text-sm">Background Colors</h3>
                <div className="flex flex-wrap gap-4">
                  <ColorSquare colorClass="bg-terminal-bg-primary" label="bg-primary" />
                  <ColorSquare colorClass="bg-terminal-bg-secondary" label="bg-secondary" />
                  <ColorSquare colorClass="bg-terminal-bg-white" label="bg-white" />
                </div>
              </div>

              <div>
                <h3 className="text-terminal-text-muted mb-3 text-sm">Text Colors</h3>
                <div className="flex flex-wrap gap-4">
                  <ColorSquare colorClass="bg-terminal-text-primary" label="text-primary" />
                  <ColorSquare colorClass="bg-terminal-text-secondary" label="text-secondary" />
                  <ColorSquare colorClass="bg-terminal-text-muted" label="text-muted" />
                </div>
              </div>

              <div>
                <h3 className="text-terminal-text-muted mb-3 text-sm">Border Colors</h3>
                <div className="flex flex-wrap gap-4">
                  <ColorSquare colorClass="bg-terminal-border-primary" label="border-primary" />
                  <ColorSquare colorClass="bg-terminal-border-secondary" label="border-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-terminal-border-secondary space-y-6 rounded border-2 p-8">
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

          <div className="space-y-4">
            <h2 className="text-terminal-text-muted text-xl">With Icons</h2>
            <div className="flex flex-col gap-4">
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

        <div className="border-terminal-border-secondary space-y-6 rounded border-2 p-8">
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

        <div className="border-terminal-border-secondary space-y-6 rounded border-2 p-8">
          <div className="space-y-4">
            <h2 className="text-terminal-text-primary text-xl">GlitchText Component</h2>
            <div className="space-y-4">
              <h2 className="text-terminal-text-muted text-xl">Auto Trigger</h2>
              <div className="flex flex-wrap items-center gap-4">
                <GlitchText autoTrigger triggerDelay={0} glitchOptions={{ duration: 600 }}>
                  Auto Trigger
                </GlitchText>
                <GlitchText autoTrigger triggerDelay={600} glitchOptions={{ duration: 600 }}>
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

        <div className="border-terminal-border-secondary space-y-6 rounded border-2 p-8">
          <div className="space-y-4">
            <h2 className="text-terminal-text-primary text-xl">Tag Component</h2>
            <div className="space-y-4">
              <h2 className="text-terminal-text-muted text-xl">Basic Tags</h2>
              <div className="flex flex-wrap items-center gap-3">
                <Tag>React</Tag>
                <Tag>TypeScript</Tag>
                <Tag>Tailwind</Tag>
                <Tag>JavaScript</Tag>
              </div>
            </div>
          </div>
        </div>

        <div className="border-terminal-border-secondary space-y-6 rounded border-2 p-8">
          <div className="space-y-4">
            <h2 className="text-terminal-text-primary text-xl">Disclosure Component</h2>
            <div className="space-y-4">
              <h2 className="text-terminal-text-muted text-xl">With Skills</h2>
              <Disclosure
                title="Senior Frontend Developer"
                year="2023-2024"
                skills={['React', 'TypeScript', 'Tailwind']}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Disclosure>
              <h2 className="text-terminal-text-muted text-xl">Without Skills</h2>
              <Disclosure title="Frontend Developer" year="2021-2023">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
