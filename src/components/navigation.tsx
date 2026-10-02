import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
export function Navigation() {
  return (
    <div className="floating-controls">
      <nav aria-label="Section shortcuts">
        {['Projects', 'Experience', 'Skills', 'Contact'].map((link) => (
          <Link key={link} href={`/#${link.toLowerCase()}`}>
            {link}
          </Link>
        ))}
      </nav>
      <ThemeToggle />
    </div>
  );
}
