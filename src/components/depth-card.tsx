'use client';
import { useRef } from 'react';
export function DepthCard({ children }: { children: React.ReactNode }) {
  const frame = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={frame}
      className="depth-card"
      onPointerMove={(event) => {
        if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches)
          return;
        const box = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty(
          '--rx',
          `${-(event.clientY - box.top - box.height / 2) / 40}deg`,
        );
        event.currentTarget.style.setProperty(
          '--ry',
          `${(event.clientX - box.left - box.width / 2) / 40}deg`,
        );
      }}
      onPointerLeave={() => {
        frame.current?.style.setProperty('--rx', '0deg');
        frame.current?.style.setProperty('--ry', '0deg');
      }}
    >
      {children}
    </div>
  );
}
