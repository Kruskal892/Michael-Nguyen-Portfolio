import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowRight,
  House,
  Layers,
  MessagesSquare,
  Compass,
  CreditCard,
  ChartNoAxesCombined,
} from 'lucide-react';
import type { Project } from '@/data/portfolio';

export function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.detail && (
        <Link href={`/projects/${project.slug}`}>
          Read more <ArrowRight size={15} />
        </Link>
      )}
      {project.repository && (
        <a href={project.repository} aria-label={`${project.name} repository on GitHub`}>
          Repository <ArrowUpRight size={15} />
        </a>
      )}
      {project.website && (
        <a href={project.website} aria-label={`${project.name} website`}>
          Website <ArrowUpRight size={15} />
        </a>
      )}
    </div>
  );
}
export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
  compact?: boolean;
}) {
  const ProjectIcon =
    {
      homieplace: House,
      porta: Layers,
      dovehero: MessagesSquare,
      trekko: Compass,
      subscription: CreditCard,
      shopology: ChartNoAxesCombined,
    }[project.slug] || Layers;
  return (
    <article className="project-card project-row">
      <div className="project-number" aria-hidden="true">
        <ProjectIcon size={20} />
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="project-body">
        <div className="project-category">
          <span>
            {project.category}
            {project.company && ` / ${project.company}`}
          </span>
          {project.status && <span className="status">{project.status}</span>}
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>
            {project.name}
            <ArrowUpRight size={23} />
          </Link>
        </h3>
        <p className="project-purpose">{project.purpose}</p>
        <p className="technologies">{project.technologies.slice(0, 4).join(' · ')}</p>
        <ProjectLinks project={project} />
        {project.slug === 'dovehero' && (
          <p className="link-note">Website may require authentication.</p>
        )}
      </div>
      <div className="project-side">
        <p>{project.dates}</p>
        <p>{project.role}</p>
        {project.team && <p>Team of {project.team}</p>}
      </div>
    </article>
  );
}
