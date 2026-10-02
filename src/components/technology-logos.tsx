import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siAntdesign,
  siShadcnui,
  siRadixui,
  siRedux,
  siReactquery,
  siReacthookform,
  siZod,
  siSanity,
  siTurborepo,
  siLighthouse,
  siGit,
  siGithub,
  siVite,
  siStorybook,
  siFigma,
  siNodedotjs,
  siExpress,
  siMongodb,
  siMongoose,
  siSocketdotio,
  siCloudinary,
  siDocker,
  siLinux,
  siGithubactions,
} from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';
import type { CSSProperties } from 'react';
const icons: Record<string, SimpleIcon> = {
  React: siReact,
  'Next.js': siNextdotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  'Tailwind CSS': siTailwindcss,
  'Ant Design': siAntdesign,
  'Shadcn UI': siShadcnui,
  'Radix UI': siRadixui,
  Redux: siRedux,
  'TanStack Query': siReactquery,
  'React Hook Form': siReacthookform,
  Zod: siZod,
  Sanity: siSanity,
  Turborepo: siTurborepo,
  Lighthouse: siLighthouse,
  Git: siGit,
  GitHub: siGithub,
  Vite: siVite,
  Storybook: siStorybook,
  Figma: siFigma,
  'Node.js': siNodedotjs,
  Express: siExpress,
  MongoDB: siMongodb,
  Mongoose: siMongoose,
  'Socket.IO': siSocketdotio,
  Cloudinary: siCloudinary,
  Docker: siDocker,
  Linux: siLinux,
  'GitHub Actions': siGithubactions,
};
const monochrome = new Set(['Next.js', 'Shadcn UI', 'Radix UI', 'GitHub', 'Express', 'Socket.IO']);
export function TechnologyLogos({ names }: { names: string[] }) {
  return (
    <ul className="technology-logos" aria-label="Selected technologies">
      {names.map((name) => {
        const icon = icons[name];
        if (!icon) return <li key={name}>{name}</li>;
        return (
          <li key={name}>
            <span
              className={`technology-logo ${monochrome.has(name) ? 'monochrome-logo' : ''}`}
              style={{ '--brand-color': `#${icon.hex}` } as CSSProperties}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={icon.path} />
              </svg>
            </span>
            <span>{name}</span>
          </li>
        );
      })}
    </ul>
  );
}
