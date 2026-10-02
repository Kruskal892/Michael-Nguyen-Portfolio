import type { Metadata } from 'next';
// import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { themeScript } from '@/lib/theme';
import { profile } from '@/data/portfolio';
import { siteUrl } from '@/lib/site';
import './globals.css';
import '@fontsource-variable/inter';
const description =
  'Nguyen Duc Anh Minh — Frontend Developer in Hanoi, building web applications with React, Next.js, and TypeScript. Selected work, experience, and a personal full-stack project.';
export const metadata: Metadata = {
  title: {
    default: 'Nguyen Duc Anh Minh — Frontend Developer',
    template: '%s | Nguyen Duc Anh Minh',
  },
  description,
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: '/' } } : {}),
  openGraph: {
    title: 'Nguyen Duc Anh Minh — Frontend Developer',
    description,
    type: 'website',
    locale: 'en_US',
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nguyen Duc Anh Minh — Frontend Developer',
    description,
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navigation />
        {children}
        <footer className="container footer">
          {/* <Link href="/">Home</Link> */}
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href="#main-content">Back to top ↑</a>
        </footer>
      </body>
    </html>
  );
}
