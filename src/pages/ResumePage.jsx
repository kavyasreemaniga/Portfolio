import { education, experience, profile, techStack } from "../data/portfolioData";

export default function ResumePage() {
  return (
    <main className="page-wrap">
      <section className="section resume-hero">
        <div>
          <p className="eyebrow">Resume</p>
          <h2>{profile.role}</h2>
          <p className="lead">
            Data engineer specializing in modern cloud platforms, analytics engineering, orchestration, and
            governance-first pipeline design.
          </p>
        </div>
        <article className="surface-card">
          <p className="eyebrow">Current Focus</p>
          <h3>Platform Reliability + Data Quality</h3>
          <p className="muted">
            Building systems with strong lineage, test coverage, and low-latency transformation workflows.
          </p>
        </article>
      </section>

      <section className="section">
        <div className="section-head">
          <p>Technical Arsenal</p>
          <h2>Capabilities</h2>
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
          <p>Experience Narrative</p>
          <h2>Work History</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
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
                {job.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p>Academic Foundation</p>
          <h2>Education</h2>
        </div>
        <div className="edu-grid">
          {education.map((item) => (
            <article key={item.degree} className="surface-card">
              <p className="eyebrow">{item.year}</p>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
              <p className="muted">{item.location}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
