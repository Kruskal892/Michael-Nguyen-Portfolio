'use client';
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
export function ThemeToggle() {
  const [announcement, setAnnouncement] = useState('');
  function toggle() {
    const root = document.documentElement;
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = theme;
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      /* Theme works without storage. */
    }
    setAnnouncement(`${theme === 'dark' ? 'Dark' : 'Light'} mode enabled`);
  }
  return (
    <>
      <button
        type="button"
        className="theme-toggle"
        onClick={toggle}
        aria-label="Toggle light and dark mode"
        title="Toggle light and dark mode"
      >
        <Moon className="moon-icon" size={18} />
        <Sun className="sun-icon" size={18} />
      </button>
      <span className="sr-only" aria-live="polite">
        {announcement}
      </span>
    </>
  );
}
