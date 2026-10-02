'use client';
import { useEffect } from 'react';

export function ScrollReveals() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches || !('IntersectionObserver' in window)) return;
    const elements = document.querySelectorAll<HTMLElement>(
      '.section-heading, .project-card, .experience-row, .skills-grid article, .development-grid article, .education-grid, .contact-section',
    );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    elements.forEach((element) => {
      // Content already in view stays visible; only upcoming content is revealed.
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add('will-reveal');
        observer.observe(element);
      }
    });
    const showAll = () => {
      if (media.matches) {
        observer.disconnect();
        elements.forEach((element) => element.classList.remove('will-reveal'));
      }
    };
    media.addEventListener('change', showAll);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', showAll);
      elements.forEach((element) => element.classList.remove('will-reveal', 'revealed'));
    };
  }, []);
  return null;
}
