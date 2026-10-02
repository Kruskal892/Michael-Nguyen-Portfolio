'use client';

import { useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

export function HeroSculpture() {
  const stage = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  return (
    <div className="sculpture-wrap">
      <div
        ref={stage}
        className={`sculpture-stage ${paused ? 'is-paused' : ''}`}
        aria-hidden="true"
        onPointerMove={(event) => {
          if (
            event.pointerType !== 'mouse' ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
          )
            return;
          const box = event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty(
            '--tilt-x',
            `${(event.clientY - box.top - box.height / 2) / 22}deg`,
          );
          event.currentTarget.style.setProperty(
            '--tilt-y',
            `${(event.clientX - box.left - box.width / 2) / 22}deg`,
          );
        }}
        onPointerLeave={() => {
          stage.current?.style.setProperty('--tilt-x', '0deg');
          stage.current?.style.setProperty('--tilt-y', '0deg');
        }}
      >
        <div className="sculpture-shadow" />
        <div className="sculpture-orbit orbit-one" />
        <div className="sculpture-orbit orbit-two" />
        <div className="sculpture-tilt">
          <div className="sculpture-float">
            <div className="sculpture-object">
              {Array.from({ length: 9 }, (_, index) => (
                <span
                  className="sculpture-plane"
                  key={index}
                  style={{ transform: `translateZ(${(index - 4) * 14}px)` }}
                />
              ))}
              <span className="sculpture-core" />
            </div>
          </div>
        </div>
        <span className="sculpture-coordinate coordinate-top">01 / INTERFACE</span>
        <span className="sculpture-coordinate coordinate-bottom">FORM + FUNCTION</span>
      </div>
      <div className="sculpture-caption">
        <span>An exploration in layers & depth</span>
        <button
          type="button"
          className="motion-toggle"
          onClick={() => setPaused(!paused)}
          aria-label={paused ? 'Play decorative animation' : 'Pause decorative animation'}
          aria-pressed={paused}
        >
          {paused ? <Play size={13} /> : <Pause size={13} />}
        </button>
      </div>
    </div>
  );
}
