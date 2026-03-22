import { LinkedinIcon, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import { experience, profile, techStack } from "../data/portfolioData";

export default function HomePage() {
  return (
    <main className="page-wrap">
      <section className="hero hero-home" style={{ "--hero-image": `url(${heroImage})` }}>
        <div className="hero-copy">
          <p className="eyebrow">Data Platform Engineer</p>
          <h1>
            {profile.name}
            <span>{profile.role}</span>
          </h1>
          <p className="lead">{profile.blurb}</p>
          <div className="hero-cta">
            <Link className="solid-btn" to="/projects">
              Explore Projects
            </Link>
            <Link className="ghost-btn" to="/resume">
              View Resume
            </Link>
          </div>
          <div className="socials">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">
              <LinkedinIcon size={18} /> LinkedIn
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">
              <Mail size={18} /> Contact
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={heroImage} alt="Kavya Sree Maniga portrait" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p>Core Competencies</p>
          <h2>Technical Stack</h2>
        </div>
        <div className="stack-grid">
          {techStack.map((group) => (
            <article key={group.category} className="surface-card">
              <h3>{group.category}</h3>
              <div className="pill-row">
                {group.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p>Career Snapshot</p>
          <h2>Recent Experience</h2>
        </div>
        <div className="timeline">
          {experience.slice(0, 2).map((job) => (
            <article key={`${job.company}-${job.period}`} className="timeline-card">
              <div className="timeline-top">
                <div>
                  <h3>{job.title}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <p className="period">
                  {job.period}
                  <span>{job.location}</span>
                </p>
              </div>
              <ul>
                {job.highlights.slice(0, 3).map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
