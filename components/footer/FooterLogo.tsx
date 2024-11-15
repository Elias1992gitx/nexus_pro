import Image from 'next/image';
import Link from 'next/link';

export function FooterLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/logo.svg"
        alt="TechSolutions Logo"
        width={32}
        height={32}
        className="dark:invert"
      />
      <span className="text-xl font-bold">TechSolutions</span>
    </Link>
  );
}