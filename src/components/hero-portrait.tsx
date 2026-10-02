import Image from 'next/image';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { profile } from '@/data/portfolio';
import { HeroSculpture } from '@/components/hero-sculpture';
import { DepthCard } from '@/components/depth-card';

export function HeroPortrait() {
  const source = profile.portrait;
  if (!existsSync(path.join(process.cwd(), 'public', source))) return <HeroSculpture />;
  return (
    <figure className="hero-portrait">
      <DepthCard>
        <span className="portrait-outline" aria-hidden="true" />
        <div className="portrait-frame">
          <Image
            src={`/${source}`}
            alt={`Portrait of ${profile.name}`}
            fill
            sizes="(max-width: 700px) 85vw, 400px"
            preload
          />
        </div>
        <span className="portrait-label" aria-hidden="true">
          MINH / HANOI
        </span>
        <span className="portrait-stamp" aria-hidden="true">
          React
          <br />
          Next.js
          <br />
          TypeScript<span>↗</span>
        </span>
      </DepthCard>
      <figcaption>{profile.location}</figcaption>
    </figure>
  );
}
