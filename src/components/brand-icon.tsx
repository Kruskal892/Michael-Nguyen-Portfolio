export function BrandIcon({ brand }: { brand: 'gmail' | 'github' | 'linkedin' }) {
  if (brand === 'gmail')
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="brand-icon">
        <path fill="#4285f4" d="M2 6v13h4V9Z" />
        <path fill="#34a853" d="M18 9v10h4V6Z" />
        <path
          fill="#ea4335"
          d="M2 5.5c0-1.8 2-2.8 3.4-1.7L12 9l6.6-5.2C20 2.7 22 3.7 22 5.5V8l-4 3-6-4.7L6 11 2 8Z"
        />
        <path fill="#c5221f" d="M2 5.5V8l4 3V6.3L5.4 3.8C4 2.7 2 3.7 2 5.5Z" />
        <path fill="#fbbc04" d="M18 6.3V11l4-3V5.5c0-1.8-2-2.8-3.4-1.7Z" />
        <path fill="#ea4335" d="m6 6.3 6 4.7 6-4.7V11l-6 4.7L6 11Z" />
      </svg>
    );
  if (brand === 'linkedin')
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="brand-icon">
        <rect width="24" height="24" rx="3" fill="#0a66c2" />
        <path
          fill="white"
          d="M5 9h3v10H5Zm1.5-4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM10 9h3v1.4c.6-1 1.5-1.7 3-1.7 3 0 3.5 1.9 3.5 4.4V19h-3v-5.2c0-1.3-.1-2.3-1.5-2.3s-2 1-2 2.3V19h-3Z"
        />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="brand-icon" fill="currentColor">
      <path d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.2.8-.5v-2c-3.2.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.6 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.1 1.2a10.7 10.7 0 0 1 5.6 0C16.7 5.1 17.7 5.4 17.7 5.4c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.3-2.7 5.3-5.3 5.6.4.4.8 1.1.8 2.1v2.9c0 .3.2.6.8.5A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}
