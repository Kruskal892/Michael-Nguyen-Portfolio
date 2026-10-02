import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Download,
  Code2,
  Layers,
  Database,
  PanelsTopLeft,
  Gauge,
  Wrench,
  GraduationCap,
  Award,
  Sparkles,
} from 'lucide-react';
import { TypedIntro } from '@/components/typed-intro';
import { DepthCard } from '@/components/depth-card';
import { SectionScene } from '@/components/section-scene';
import { TechnologyLogos } from '@/components/technology-logos';
import { BrandIcon } from '@/components/brand-icon';
import {
  profile,
  projects,
  experience,
  expertise,
  development,
  education,
  certifications,
  awards,
  skillLogos,
} from '@/data/portfolio';
import { ProjectCard } from '@/components/project';
import { siteUrl } from '@/lib/site';
import { HeroPortrait } from '@/components/hero-portrait';
import { ScrollReveals } from '@/components/scroll-reveals';
import { TechScene } from '@/components/tech-scene';
export default function Home() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    ...(siteUrl ? { url: siteUrl } : {}),
    sameAs: [profile.github, profile.linkedin],
    address: { '@type': 'PostalAddress', addressLocality: 'Hanoi', addressCountry: 'Vietnam' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: education.institution },
  };
  return (
    <main id="main-content" className="container portfolio-main">
      <ScrollReveals />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}
      />
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <div className="hero-top">
            <p className="eyebrow">
              <span className="blue-dot" />
              {profile.title}
            </p>
            <p className="location">
              <MapPin size={14} />
              {profile.location}
            </p>
          </div>
          <p className="hero-name">{profile.name}</p>
          <h1 id="hero-heading" aria-label="Frontend Developer">
            <span className="hero-word" aria-hidden="true">
              {'Frontend'.split('').map((letter, index) => (
                <span key={index} style={{ animationDelay: `${index * 55}ms` }}>
                  {letter}
                </span>
              ))}
            </span>
            <span className="hero-title-second">
              <span className="hero-word" aria-hidden="true">
                {'Developer.'.split('').map((letter, index) => (
                  <span key={index} style={{ animationDelay: `${(index + 5) * 55}ms` }}>
                    {letter}
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <TypedIntro />
          <div className="hero-bottom">
            <div>
              <p className="hero-introduction">{profile.introduction}</p>
              <p className="hero-about">{profile.about}</p>
              <div className="hero-actions">
                <a
                  href="/cv.pdf"
                  className="button cv-button"
                  download="Nguyen-Duc-Anh-Minh-CV.pdf"
                >
                  Download CV <Download size={16} />
                </a>
                <a href="#projects" className="button primary">
                  View projects <ArrowDown size={17} />
                </a>
                <a href="#contact" className="button secondary">
                  Get in touch <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
          <p className="hero-learning">{profile.learning}</p>
        </div>
        <TechScene>
          <HeroPortrait />
        </TechScene>
      </section>
      <div className="practice-strip">
        <span>Interfaces with intention.</span>
        <span>React / Next.js / TypeScript</span>
        <a href="#projects">
          Explore the work <ArrowDown size={14} />
        </a>
      </div>
      <section id="projects" className="section" aria-labelledby="projects-heading">
        <SectionScene variant="orb" />
        <div className="section-heading">
          <div>
            <h2 id="projects-heading">Projects</h2>
          </div>
          <p>
            Professional frontend work
            <br />& a personal full-stack project.
          </p>
        </div>
        <div className="project-grid">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="project-grid compact-grid">
          {projects.slice(4).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index + 4} compact />
          ))}
        </div>
      </section>
      <section id="experience" className="section" aria-labelledby="experience-heading">
        <SectionScene variant="cube" />
        <div className="section-heading">
          <div>
            <h2 id="experience-heading">Experience</h2>
          </div>
          <p>
            Frontend architecture, delivery,
            <br />
            and collaboration.
          </p>
        </div>
        <div className="experience-list">
          {experience.map((job) => (
            <article key={job.company} className="experience-row">
              <div className="job-company">
                <h3>{job.company}</h3>
              </div>
              <div>
                <h4>{job.role}</h4>
                <p>{job.description}</p>
              </div>
              <p className="job-date">{job.dates}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="skills" className="section" aria-labelledby="skills-heading">
        <SectionScene variant="rings" />
        <div className="section-heading">
          <div>
            <h2 id="skills-heading">Skills & tools</h2>
          </div>
        </div>
        <p className="group-label">Professional frontend practice</p>
        <div className="skills-grid">
          {expertise.map((group, index) => {
            const Icon = [Code2, Layers, Database, PanelsTopLeft, Gauge, Wrench][index];
            return (
              <article key={group.title}>
                <DepthCard>
                  <div className="skill-icon">
                    <Icon size={20} />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <TechnologyLogos names={skillLogos[group.title] || []} />
                  <p>{group.items}</p>
                </DepthCard>
              </article>
            );
          })}
        </div>
        <div className="development-grid">
          {development.map((group) => (
            <article key={group.title}>
              <p className="eyebrow">{group.label}</p>
              <h3>{group.title}</h3>
              <TechnologyLogos names={skillLogos[group.title] || []} />
              <p>{group.items}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section" aria-labelledby="education-heading">
        <SectionScene variant="orb" />
        <div className="section-heading">
          <div>
            <h2 id="education-heading">Education & recognition</h2>
          </div>
        </div>
        <div className="education-grid">
          <article className="degree">
            <GraduationCap className="education-icon" size={32} />
            <p className="eyebrow">Education</p>
            <h3>{education.institution}</h3>
            <p className="degree-title">{education.degree}</p>
            <p>{education.dates}</p>
            <p>Specialization: {education.specialization}</p>
          </article>
          <article className="certifications">
            <p className="eyebrow">Certifications</p>
            {certifications.map((cert) => (
              <div key={cert.name}>
                <Award size={18} className="certificate-icon" />
                <h3>{cert.name}</h3>
                <p>{cert.issuer}</p>
                {cert.detail && <p className="small">{cert.detail}</p>}
              </div>
            ))}
          </article>
          <article className="coursework-card">
            <Code2 className="education-icon" size={24} />
            <p className="eyebrow">Software Engineering</p>
            <h3>Relevant coursework</h3>
            <ul>
              {education.coursework
                .replace(/\.$/, '')
                .split(', ')
                .map((course) => (
                  <li key={course}>{course}</li>
                ))}
            </ul>
          </article>
          <article className="awards">
            <Sparkles size={24} className="education-icon" />
            <p className="eyebrow">Honors & awards</p>
            <h3>Academic Scholarships</h3>
            <p>{awards.institution}</p>
            <p>{awards.count} scholarships</p>
          </article>
        </div>
      </section>
      <section id="contact" className="contact-section" aria-labelledby="contact-heading">
        <SectionScene variant="rings" />
        <div className="contact-heading">
          <h2 id="contact-heading">Let’s connect.</h2>
          <ArrowUpRight className="contact-arrow" aria-hidden="true" />
        </div>
        <p>
          For conversations about frontend development,
          <br className="desktop-break" /> thoughtful products, and building things together.
        </p>
        <div className="contact-cards">
          <a className="contact-card email-link" href={`mailto:${profile.email}`}>
            <BrandIcon brand="gmail" />
            <span>
              <strong>Gmail</strong>
              <span>{profile.email}</span>
            </span>
            <ArrowUpRight size={19} />
          </a>
          <a className="contact-card" href={profile.github}>
            <BrandIcon brand="github" />
            <span>
              <strong>GitHub</strong>
              <span>Kruskal892 / Explore my code</span>
            </span>
            <ArrowUpRight size={19} />
          </a>
          <a className="contact-card" href={profile.linkedin}>
            <BrandIcon brand="linkedin" />
            <span>
              <strong>LinkedIn</strong>
              <span>Connect professionally</span>
            </span>
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>
    </main>
  );
}
