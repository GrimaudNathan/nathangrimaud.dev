import Link from '../Link/Link';

export default function Menu() {
  const email = 'natgrimaud22@gmail.com';
  const linkedinUrl = 'https://linkedin.com/in/nathangrimaud';
  const linkedinPath = linkedinUrl.split('/').pop()?.toUpperCase() || 'PROFILE';
  const linkClass = 'inline-flex min-h-11 items-center';

  return (
    <nav
      aria-label="Contact"
      className="bg-terminal-bg-primary border-terminal-border-primary fixed top-0 right-0 left-0 z-50 border-b-2"
    >
      <div className="flex items-center justify-between gap-4 px-4 py-2 md:px-6 md:py-3">
        <Link href={`mailto:${email}`} variant="underline" className={`${linkClass} md:hidden`}>
          Email
        </Link>
        <Link
          href={`mailto:${email}`}
          variant="underline"
          className={`${linkClass} hidden md:inline-flex`}
        >
          {email.toUpperCase()}
        </Link>
        <Link
          href={linkedinUrl}
          variant="underline"
          external
          className={`${linkClass} md:hidden`}
        >
          LinkedIn
        </Link>
        <Link
          href={linkedinUrl}
          variant="underline"
          external
          className={`${linkClass} hidden md:inline-flex`}
        >
          {`LINKEDIN.COM/IN/${linkedinPath}`}
        </Link>
      </div>
    </nav>
  );
}
