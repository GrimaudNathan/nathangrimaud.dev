import { Link } from '../Link';

export const Menu = () => {
  const email = 'natgrimaud22@gmail.com';
  const linkedinUrl = 'https://linkedin.com/in/nathangrimaud';
  const linkedinPath = linkedinUrl.split('/').pop()?.toUpperCase() || 'PROFILE';

  return (
    <nav className="bg-terminal-bg-primary border-terminal-border-primary fixed top-0 right-0 left-0 z-50 border-b-2">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href={`mailto:${email}`} variant="underline">
            {email.toUpperCase()}
          </Link>
          <Link href={linkedinUrl} variant="underline" external>
            {`LINKEDIN.COM/IN/${linkedinPath}`}
          </Link>
        </div>
      </div>
    </nav>
  );
};
