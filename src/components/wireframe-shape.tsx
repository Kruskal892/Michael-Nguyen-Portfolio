'use client';

import { useEffect, useRef } from 'react';
type Point = [number, number, number];
export function WireframeShape({ shape }: { shape: 'sphere' | 'cube' | 'planet' }) {
  const svg = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const element = svg.current;
    if (!element) return;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const lines: Point[][] = [];
    if (shape === 'cube') {
      const vertices: Point[] = [
        [-1, -1, -1],
        [1, -1, -1],
        [1, 1, -1],
        [-1, 1, -1],
        [-1, -1, 1],
        [1, -1, 1],
        [1, 1, 1],
        [-1, 1, 1],
      ];
      for (const [a, b] of [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 4],
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7],
      ])
        lines.push([vertices[a], vertices[b]]);
    } else {
      for (const angle of [0, Math.PI / 4, Math.PI / 2, (Math.PI * 3) / 4]) {
        lines.push(
          Array.from({ length: 49 }, (_, i) => {
            const t = (i * Math.PI) / 24;
            return [
              Math.cos(t) * Math.cos(angle),
              Math.sin(t),
              Math.cos(t) * Math.sin(angle),
            ] as Point;
          }),
        );
      }
      lines.push(
        Array.from({ length: 49 }, (_, i) => {
          const t = (i * Math.PI) / 24;
          return [Math.cos(t), 0, Math.sin(t)] as Point;
        }),
      );
      if (shape === 'planet')
        lines.push(
          Array.from({ length: 65 }, (_, i) => {
            const t = (i * Math.PI) / 32;
            return [1.65 * Math.cos(t), 0.45 * Math.sin(t), 1.45 * Math.sin(t)] as Point;
          }),
        );
    }
    let frame = 0,
      last = 0,
      angle = 0.65;
    function draw() {
      if (!element) return;
      const scale = shape === 'cube' ? 19 : shape === 'planet' ? 23 : 34;
      const project = ([x, y, z]: Point) => {
        const rx = x * Math.cos(angle) + z * Math.sin(angle);
        const rz = -x * Math.sin(angle) + z * Math.cos(angle);
        const ry = y * Math.cos(-0.35) - rz * Math.sin(-0.35);
        return `${(50 + rx * scale).toFixed(2)},${(50 + ry * scale).toFixed(2)}`;
      };
      element
        .querySelectorAll('path')
        .forEach((path, i) =>
          path.setAttribute(
            'd',
            lines[i].map((point, j) => `${j ? 'L' : 'M'}${project(point)}`).join(' '),
          ),
        );
    }
    function tick(time: number) {
      if (time - last >= 32) {
        if (!motion.matches && document.documentElement.dataset.motion !== 'paused')
          angle += last ? Math.min(time - last, 100) * 0.00024 : 0;
        last = time;
        draw();
      }
      frame = requestAnimationFrame(tick);
    }
    draw();
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [shape]);
  return (
    <svg
      ref={svg}
      className="projected-wireframe"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {Array.from({ length: shape === 'cube' ? 12 : shape === 'planet' ? 6 : 5 }, (_, i) => (
        <path key={i} />
      ))}
    </svg>
  );
}
