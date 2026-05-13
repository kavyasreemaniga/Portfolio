import { ExternalLink, GithubIcon, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "../data/portfolioData";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Systems");

  const filters = useMemo(() => {
    const categories = projects.map((project) => project.category);
    const uniqueCategories = [...new Set(categories)];
    return ["All Systems", ...uniqueCategories];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const passesFilter =
        activeFilter === "All Systems" || project.category === activeFilter;

      const haystack = `${project.title} ${project.description} ${project.tech.join(" ")}`.toLowerCase();
      const passesQuery = haystack.includes(query.toLowerCase());
      return passesFilter && passesQuery;
    });
  }, [activeFilter, query]);

  const featuredProject = filteredProjects.find((project) => project.featured);
  const secondaryProjects = filteredProjects.filter((project) => !project.featured);

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

        {filteredProjects.length === 0 && (
          <article className="project-card">
            <h3>No matches found</h3>
            <p>Try a different search phrase or switch back to &quot;All Systems&quot;.</p>
          </article>
        )}

        {filteredProjects.length > 0 && (
          <div className="project-grid bento-grid">
            {featuredProject && (
              <article key={featuredProject.title} className="project-card featured-card">
                <div className="project-top">
                  <div>
                    <p className="eyebrow">{featuredProject.category}</p>
                    <h3>{featuredProject.title}</h3>
                  </div>
                  <div className="project-links">
                    {featuredProject.github && (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        aria-label="GitHub repo"
                      >
                        <GithubIcon size={17} />
                      </a>
                    )}
                    {featuredProject.demo && (
                      <a
                        href={featuredProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
                <p>{featuredProject.description}</p>
                <ul>
                  {featuredProject.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="pill-row">
                  {featuredProject.tech.map((tool) => (
                    <span key={tool} className="pill">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            )}

            {secondaryProjects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-top">
                  <div>
                    <p className="eyebrow">{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        aria-label="GitHub repo"
                      >
                        <GithubIcon size={17} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        aria-label="Live demo"
                      >
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
        )}
      </section>
    </main>
  );
}
