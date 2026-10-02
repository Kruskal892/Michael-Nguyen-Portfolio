import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main-content" className="container detail-page">
      <p className="eyebrow">404 / Page not found</p>
      <h1>This page isn’t here.</h1>
      <p>Explore the selected projects on the portfolio.</p>
      <Link href="/" className="button primary">
        Back to portfolio
      </Link>
    </main>
  );
}
