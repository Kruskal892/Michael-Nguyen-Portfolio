'use client';
import { useEffect, useRef, useState } from 'react';
import { profile } from '@/data/portfolio';
const phrases = profile.typingPhrases;
export function TypedIntro() {
  const text = useRef<HTMLSpanElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setTimeout>;
    let phrase = 0,
      length = phrases[0].length,
      deleting = false;
    function tick() {
      if (media.matches && text.current) text.current.textContent = phrases[0];
      if (media.matches || paused || document.documentElement.dataset.motion === 'paused') {
        timer = setTimeout(tick, 200);
        return;
      }
      length += deleting ? -1 : 1;
      if (text.current) text.current.textContent = phrases[phrase].slice(0, length);
      let delay = deleting ? 35 : 65;
      if (!deleting && length >= phrases[phrase].length) {
        deleting = true;
        delay = 2400;
      } else if (deleting && length === 0) {
        deleting = false;
        phrase = (phrase + 1) % phrases.length;
        delay = 400;
      }
      timer = setTimeout(tick, delay);
    }
    timer = setTimeout(tick, 2400);
    return () => clearTimeout(timer);
  }, [paused]);
  return (
    <div className="typed-intro">
      <span className="typed-prefix" aria-hidden="true">
        &gt;
      </span>
      <span className="sr-only">
        Building React and Next.js interfaces, reusable component systems, and real-time web
        experiences.
      </span>
      <span className="typed-output" aria-hidden="true">
        <span ref={text}>{phrases[0]}</span>
        <span className="typing-caret" />
      </span>
      <button
        type="button"
        className="typing-control"
        onClick={() => setPaused(!paused)}
        aria-label={paused ? 'Resume typing animation' : 'Pause typing animation'}
      >
        {paused ? 'Play' : 'Pause'}
      </button>
    </div>
  );
}
