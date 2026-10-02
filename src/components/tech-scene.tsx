'use client';

import { useState, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';

export function TechScene({ children }: { children: React.ReactNode }) {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? 'paused' : 'running';
    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [paused]);
  return (
    <div
      className={`tech-scene ${paused ? 'motion-paused' : ''}`}
      onPointerMove={(event) => {
        if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches)
          return;
        const box = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty(
          '--scene-x',
          `${(event.clientX - box.left - box.width / 2) / 50}deg`,
        );
        event.currentTarget.style.setProperty(
          '--scene-y',
          `${-(event.clientY - box.top - box.height / 2) / 50}deg`,
        );
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty('--scene-x', '0deg');
        event.currentTarget.style.setProperty('--scene-y', '0deg');
      }}
    >
      <div className="tech-decoration" aria-hidden="true">
        <div className="tech-orb">
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index} style={{ transform: `rotateY(${index * 30}deg)` }} />
          ))}
          <i className="orb-equator" />
        </div>
        <div className="tech-cube">
          <div className="cube-spin">
            {['front', 'back', 'left', 'right', 'top', 'bottom'].map((side) => (
              <span key={side} className={`cube-face cube-${side}`}>
                <i />
                <i />
                <i />
              </span>
            ))}
          </div>
        </div>
        <span className="scene-marker marker-one">&lt;/&gt;</span>
        <span className="scene-marker marker-two">TS</span>
        <svg className="circuit-traces" viewBox="0 0 460 560" fill="none">
          <path d="M25 100h60l35 35h80M440 370h-65l-40 40H220M30 480h80l25-25h65M375 65v65l-35 35v60" />
          <circle cx="25" cy="100" r="4" />
          <circle cx="440" cy="370" r="4" />
          <circle cx="30" cy="480" r="4" />
          <circle cx="375" cy="65" r="4" />
        </svg>
      </div>
      {children}
      <div className="scene-controls">
        <span>Interactive depth / move to explore</span>
        <button
          type="button"
          className="motion-toggle"
          aria-label={paused ? 'Resume scene animation' : 'Pause scene animation'}
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? <Play size={13} /> : <Pause size={13} />}
        </button>
      </div>
    </div>
  );
}
