import { ExternalLink, GithubIcon, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "../data/portfolioData";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Systems");

  const filters = useMemo(() => {
    const allTags = projects.flatMap((project) => project.tech);
    const unique = [...new Set(allTags)];
    return ["All Systems", ...unique.slice(0, 8)];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const passesFilter =
        activeFilter === "All Systems" || project.tech.some((item) => item === activeFilter);

      const haystack = `${project.title} ${project.description} ${project.tech.join(" ")}`.toLowerCase();
      const passesQuery = haystack.includes(query.toLowerCase());
      return passesFilter && passesQuery;
    });
  }, [activeFilter, query]);

  return (
    <main className="page-wrap">
      <section className="section">
        <div className="section-head section-head-stack">
          <div>
            <p>Projects Archive</p>
            <h2>Intelligence Archive</h2>
          </div>
        </div>

        <div className="search-row">
          <Search size={16} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search tech stack, project title, or architecture..."
          />
        </div>

        <div className="filter-row">
          {filters.map((filter) => (
            <button
              key={filter}
              className={filter === activeFilter ? "chip active" : "chip"}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-top">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repo">
                      <GithubIcon size={17} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live demo">
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>
              <p>{project.description}</p>
              <ul>
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="pill-row">
                {project.tech.map((tool) => (
                  <span key={tool} className="pill">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
