'use client';

import { useEffect, useRef } from 'react';
import { WireframeShape } from '@/components/wireframe-shape';
import {
  Braces,
  Diamond,
  Hexagon,
  Orbit,
  Satellite,
  Sparkles,
  Terminal,
  Layers,
} from 'lucide-react';
import { siReact, siNextdotjs, siTypescript, siNodedotjs, siGit, siDocker } from 'simple-icons';
import type { CSSProperties } from 'react';

const logos = {
  react: siReact,
  next: siNextdotjs,
  typescript: siTypescript,
  node: siNodedotjs,
  git: siGit,
  docker: siDocker,
};
const shapes = {
  orbit: Orbit,
  diamond: Diamond,
  hexagon: Hexagon,
  satellite: Satellite,
  sparkles: Sparkles,
  terminal: Terminal,
  braces: Braces,
  layers: Layers,
};
type Motif = keyof typeof logos | keyof typeof shapes | 'rocket' | 'sphere' | 'cube' | 'planet';
// A stable, shuffled composition avoids hydration changes and repeated pairs.
const compositions: { motifs: Motif[]; placement: string }[] = [
  { motifs: ['rocket', 'typescript'], placement: 'spread' },
  { motifs: ['next', 'cube'], placement: 'cluster' },
  { motifs: ['sphere'], placement: 'center' },
  { motifs: ['planet', 'terminal'], placement: 'reverse' },
  { motifs: ['cube', 'sparkles'], placement: 'spread' },
  { motifs: ['react'], placement: 'center' },
  { motifs: ['sphere', 'git'], placement: 'reverse' },
  { motifs: ['planet'], placement: 'center' },
  { motifs: ['cube', 'braces'], placement: 'cluster' },
];
export function RowDecoration({ index = 0 }: { index?: number }) {
  const composition = compositions[index % compositions.length];
  const layer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = layer.current;
    const row = root?.closest<HTMLElement>('.project-row, .experience-row');
    if (!root || !row) return;
    function place() {
      if (!root || !row) return;
      const bounds = root.getBoundingClientRect();
      const occupied: { left: number; right: number; top: number; bottom: number }[] = [];
      row.querySelectorAll('p, h3, h4, a, .project-number').forEach((element) => {
        const range = document.createRange();
        range.selectNodeContents(element);
        for (const rect of range.getClientRects())
          occupied.push({
            left: rect.left - bounds.left - 12,
            right: rect.right - bounds.left + 12,
            top: rect.top - bounds.top - 12,
            bottom: rect.bottom - bounds.top + 12,
          });
      });
      [...root.children].forEach((child, slot) => {
        const motif = child as HTMLElement;
        const size = row.classList.contains('experience-row') ? 36 : bounds.width < 500 ? 32 : 60;
        motif.style.width = `${size}px`;
        motif.style.height = `${size}px`;
        motif.style.fontSize = `${size}px`;
        const candidates: { x: number; y: number; score: number }[] = [];
        const targetX = bounds.width * (0.38 + ((index + slot * 3) % 5) * 0.1);
        for (let y = 12; y + size + 8 < bounds.height; y += 8) {
          for (let x = 12; x + size + 8 < bounds.width; x += 12) {
            if (
              occupied.some(
                (r) => x < r.right && x + size > r.left && y < r.bottom && y + size > r.top,
              )
            )
              continue;
            candidates.push({
              x,
              y,
              score: Math.abs(x - targetX) + Math.abs(y - bounds.height * 0.55) * 0.5,
            });
          }
        }
        candidates.sort((a, b) => a.score - b.score);
        const position = candidates[0];
        motif.style.visibility = position ? 'visible' : 'hidden';
        if (position) {
          motif.style.left = `${position.x}px`;
          motif.style.top = `${position.y}px`;
          occupied.push({
            left: position.x - 16,
            right: position.x + size + 16,
            top: position.y - 16,
            bottom: position.y + size + 16,
          });
        }
      });
    }
    const observer = new ResizeObserver(place);
    observer.observe(row);
    void document.fonts.ready.then(place);
    return () => observer.disconnect();
  }, [index]);
  return (
    <div
      ref={layer}
      className={`row-decoration arrangement-${composition.placement}`}
      aria-hidden="true"
    >
      {composition.motifs.map((motif, slot) => {
        const style = {
          '--motif-delay': `${-index * 1.7 - slot * 2.3}s`,
          '--motif-duration': `${8 + (index % 4) + slot * 2}s`,
        } as CSSProperties;
        if (motif === 'sphere' || motif === 'cube' || motif === 'planet')
          return (
            <div key={motif} className={`row-motif wireframe wireframe-${motif}`} style={style}>
              <WireframeShape shape={motif} />
            </div>
          );
        if (motif === 'rocket')
          return (
            <div key={motif} className="row-motif scene-spaceship" style={style}>
              <svg viewBox="0 0 80 100" fill="none">
                <path className="ship-wing" d="M28 48 9 76l21-5m22-23 19 28-21-5" />
                <path className="ship-body" d="M40 8C24 26 24 49 30 75h20c6-26 6-49-10-67Z" />
                <circle className="ship-window" cx="40" cy="39" r="8" />
                <path className="ship-flame" d="m33 80 7 15 7-15" />
              </svg>
            </div>
          );
        if (motif in logos) {
          const logo = logos[motif as keyof typeof logos];
          return (
            <div key={motif} className={`row-motif motif-logo motif-${motif}`} style={style}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d={logo.path} />
              </svg>
            </div>
          );
        }
        const Shape = shapes[motif as keyof typeof shapes];
        return (
          <div key={motif} className={`row-motif motif-shape motif-${motif}`} style={style}>
            <Shape strokeWidth={1.2} />
          </div>
        );
      })}
    </div>
  );
}
