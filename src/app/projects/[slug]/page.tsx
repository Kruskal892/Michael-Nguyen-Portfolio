import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { ProjectLinks } from '@/components/project';
import { siteUrl } from '@/lib/site';
export function generateStaticParams() {
  return projects.filter((p) => p.detail).map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && p.detail);
  if (!project) return {};
  return {
    title: project.name,
    description: project.purpose,
    alternates: { canonical: siteUrl ? `/projects/${slug}` : null },
    openGraph: {
      title: `${project.name} — Nguyen Duc Anh Minh`,
      description: project.purpose,
      ...(siteUrl ? { url: `${siteUrl}/projects/${slug}` } : {}),
    },
  };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && p.detail);
  if (!project) notFound();
  const detailProjects = projects.filter((p) => p.detail);
  const next =
    detailProjects[(detailProjects.findIndex((p) => p.slug === slug) + 1) % detailProjects.length];
  return (
    <main id="main-content" className="container detail-page">
      <Link className="back-link" href="/#projects">
        <ArrowLeft size={16} />
        All projects
      </Link>
      <div className="detail-hero">
        <p className="eyebrow">
          {project.category} project{project.company && ` / ${project.company}`}
        </p>
        <h1>{project.name}</h1>
        <p className="detail-purpose">{project.purpose}</p>
        <dl className="detail-meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>{project.dates}</dd>
          </div>
          {project.team && (
            <div>
              <dt>Team</dt>
              <dd>{project.team} people</dd>
            </div>
          )}
          {project.status && (
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          )}
        </dl>
      </div>
      <div className="detail-layout">
        <aside>
          <p className="eyebrow">In this project</p>
          <nav aria-label="Project sections">
            <a href="#overview">Overview</a>
            <a href="#scope">My role & scope</a>
            <a href="#implementation">Technical implementation</a>
            {project.status && <a href="#status">Current status</a>}
            <a href="#links">Links</a>
          </nav>
        </aside>
        <div className="detail-content">
          <section id="overview">
            <h2>Overview</h2>
            <p>{project.purpose}</p>
            <p>
              {slug === 'homieplace'
                ? 'A personal project where I’m extending my frontend practice into backend development and database design.'
                : `A professional project at ${project.company}. My role was ${project.role}, contributing frontend features within a team of ${project.team}.`}
            </p>
          </section>
          <section id="scope">
            <h2>My role & scope</h2>
            <ul>
              {project.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section id="implementation">
            <h2>Technical implementation</h2>
            {project.implementation?.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <p className="technologies">{project.technologies.join(' / ')}</p>
          </section>
          {project.status && (
            <section id="status">
              <h2>Current status</h2>
              <p>
                <strong>{project.status}.</strong> Core frontend features and full authentication
                integration are unfinished. Planned scope includes:
              </p>
              <ul>
                {project.planned?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
          <section id="links">
            <h2>Links & context</h2>
            <ProjectLinks project={{ ...project, detail: false }} />
            {!project.website && !project.repository && <p>No public project link is supplied.</p>}
            <p className="evidence-note">
              {project.note ||
                'Project scope and technologies are based on my supplied CV. This describes my frontend contribution, not ownership of the entire product.'}
            </p>
          </section>
        </div>
      </div>
      <Link href={`/projects/${next.slug}`} className="next-project">
        <span>
          <span className="eyebrow">Next project</span>
          <strong>{next.name}</strong>
        </span>
        <ArrowRight size={28} />
      </Link>
    </main>
  );
}
