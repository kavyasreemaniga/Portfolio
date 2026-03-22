import { useState } from "react";
import { GithubIcon, LinkedinIcon, Mail, ExternalLink, Download, ChevronDown } from "lucide-react";

const COLORS = {
  primary: "#1e40af",
  accent: "#3b82f6",
  dark: "#976999",
  card: "#1e293b",
  text: "#e2e8f0",
  muted: "#94a3b8",
};

const techStack = [
  { category: "Languages", items: ["Python", "SQL", "Scala", "PySpark", "PowerShell"] },
  { category: "Data Stack", items: ["dbt", "Apache Airflow", "Snowflake", "BigQuery", "Redshift"] },
  { category: "Cloud", items: ["GCP", "AWS", "Azure", "Terraform", "Docker"] },
  { category: "Pipeline Tools", items: ["Apache Kafka", "Pub/Sub", "Dataflow", "AWS Glue", "ADF"] },
  { category: "BI & Viz", items: ["Power BI", "Looker", "Tableau", "Streamlit"] },
  { category: "Governance", items: ["dbt Tests", "Microsoft Purview", "Dataplex", "RBAC", "IAM"] },
];

const experience = [
  {
    title: "Senior Data Engineer",
    company: "Digimarc",
    period: "Apr 2024 – Present",
    location: "Remote, USA",
    highlights: [
      "Architected end-to-end GCP data platform migration reducing pipeline processing time by 35%",
      "Built real-time CDC pipelines using Pub/Sub and Dataflow ingesting PostgreSQL and MongoDB into BigQuery",
      "Implemented dbt transformation layer with 20+ modular models, reducing debugging time by 40%",
      "Developed Airflow DAGs from scratch achieving 99%+ pipeline SLA adherence",
      "Integrated Claude API and LangGraph for AI-powered data workflows",
    ],
  },
  {
    title: "Data Engineer",
    company: "Wells Fargo",
    period: "Nov 2022 – Dec 2023",
    location: "MD, USA",
    highlights: [
      "Designed Medallion architecture (Bronze/Silver/Gold) in Azure Data Lakehouse",
      "Built ETL/ELT pipelines using Azure Data Factory, PySpark, and Databricks",
      "Reduced manual data processing time by 50% across 15+ regulated financial pipelines",
      "Delivered Power BI dashboards integrated with Microsoft Fabric for Finance and Sales teams",
    ],
  },
  {
    title: "Data Engineer",
    company: "HCLTech",
    period: "Nov 2018 – Dec 2021",
    location: "India",
    highlights: [
      "Led end-to-end migration of clinical and claims data to AWS Redshift processing 200GB+ daily",
      "Integrated Epic EHR data reducing clinical reporting latency by 40%",
      "Enforced HIPAA compliance through IAM, RBAC, encryption, and audit-ready data lineage",
      "Built Tableau and Power BI dashboards for provider metrics and patient outcomes reporting",
    ],
  },
];

const projects = [
  {
    title: "Healthcare Analytics Platform",
    description:
      "End-to-end data pipeline processing Hospital Readmissions and Medicare Claims data. Features Bronze/Silver/Gold Medallion architecture, automated dbt testing, Airflow orchestration, and GitHub Actions CI/CD.",
    tech: ["dbt", "Snowflake", "Airflow", "Python", "GitHub Actions", "Streamlit"],
    github: "https://github.com/kavyasreede/healthcare-analytics-platform",
    demo: "",
    highlights: [
      "Medallion architecture with staging, intermediate, and mart layers",
      "20+ dbt models with automated quality tests and source freshness checks",
      "CI/CD: SQLFluff linting on PRs, full dbt build on merge to main",
      "Streamlit dashboard: readmission rates, provider metrics, cost analytics",
    ],
  },
];

const education = [
  {
    degree: "Master of Professional Studies in Data Science",
    school: "University of Maryland Baltimore County",
    location: "Baltimore, USA",
    year: "2022",
  },
  {
    degree: "Bachelor of Technology in Civil Engineering",
    school: "Manipal Institute of Technology",
    location: "Karnataka, India",
    year: "2018",
  },
];

function Nav() {
  const links = ["About", "Stack", "Experience", "Projects", "Contact"];
  return (
    <nav style={{ background: COLORS.dark, borderBottom: "1px solid #1e293b" }}
      className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center">
      <span style={{ color: COLORS.accent }} className="font-bold text-lg">KSM</span>
      <div className="hidden md:flex gap-6">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
            style={{ color: COLORS.muted }}
            className="hover:text-white transition-colors text-sm">
            {l}
          </a>
        ))}
      </div>
      <a href="/resume.pdf" download
        style={{ background: COLORS.accent }}
        className="text-white text-sm px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90">
        <Download size={14} /> Resume
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" style={{ background: COLORS.dark, minHeight: "100vh" }}
      className="flex flex-col justify-center items-center text-center px-6 pt-20">
      <div className="mb-4 text-sm font-mono" style={{ color: COLORS.accent }}>
        👋 Hi, I'm
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        Kavya Sree Maniga
      </h1>
      <h2 className="text-2xl md:text-3xl font-light mb-6" style={{ color: COLORS.muted }}>
        Senior Data Engineer
      </h2>
      <p className="text-lg max-w-2xl mb-8" style={{ color: COLORS.muted }}>
        Building scalable data pipelines, cloud data platforms, and analytics infrastructure
        across <span className="text-white">healthcare</span>,{" "}
        <span className="text-white">fintech</span>, and{" "}
        <span className="text-white">technology</span> environments.
        6+ years · dbt · Airflow · Snowflake · GCP · AWS · Azure
      </p>
      <div className="flex gap-4 mb-12">
        <a href="#projects"
          style={{ background: COLORS.accent }}
          className="text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
          View Projects
        </a>
        <a href="#contact"
          style={{ border: `1px solid ${COLORS.accent}`, color: COLORS.accent }}
          className="px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition">
          Contact Me
        </a>
      </div>
      <div className="flex gap-6" style={{ color: COLORS.muted }}>
        <a href="https://github.com/kavyasreede" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
          className="hover:text-white transition"><GithubIcon size={22} /></a>
        <a href="https://linkedin.com/in/kavyasreede" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
          className="hover:text-white transition"><LinkedinIcon size={22} /></a>
        <a href="https://linkedin.com/in/kavyasreede" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
          className="hover:text-white transition"><Mail size={22} /></a>
      </div>
      <div className="mt-16 animate-bounce" style={{ color: COLORS.muted }}>
        <ChevronDown size={24} />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ background: "#0f172a" }} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p style={{ color: COLORS.muted }} className="text-lg leading-relaxed mb-4">
              I'm a Senior Data Engineer with 6+ years of experience building production-grade
              data platforms across healthcare, financial services, and technology. I specialize
              in designing end-to-end pipelines that transform raw operational data into trusted,
              analytics-ready datasets.
            </p>
            <p style={{ color: COLORS.muted }} className="text-lg leading-relaxed mb-4">
              My work spans the full modern data stack — from real-time CDC ingestion with
              Kafka and Pub/Sub, to dbt transformation layers, to Airflow orchestration and
              GitHub Actions CI/CD. I care deeply about data quality, documentation, and
              building systems the next engineer can understand.
            </p>
            <p style={{ color: COLORS.muted }} className="text-lg leading-relaxed">
              Based in Philadelphia, PA. Open to remote Senior Data Engineer roles in
              healthcare, fintech, and technology.
            </p>
          </div>
          <div style={{ background: COLORS.card }} className="rounded-2xl p-6">
            {[
              { label: "Experience", value: "6+ Years" },
              { label: "Cloud Platforms", value: "GCP · AWS · Azure" },
              { label: "Industries", value: "Healthcare · Fintech · Tech" },
              { label: "Core Stack", value: "dbt · Airflow · Snowflake" },
              { label: "Location", value: "Philadelphia, PA" },
              { label: "Availability", value: "Open to Opportunities" },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between py-3"
                style={{ borderBottom: "1px solid #334155" }}>
                <span style={{ color: COLORS.muted }} className="text-sm">{label}</span>
                <span className="text-white text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section id="stack" style={{ background: "#0f172a" }} className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Tech Stack</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {techStack.map(({ category, items }) => (
            <div key={category} style={{ background: COLORS.card }}
              className="rounded-xl p-6">
              <h3 style={{ color: COLORS.accent }} className="font-semibold mb-4 text-sm uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span key={item}
                    style={{ background: "#1e3a5f", color: "#93c5fd" }}
                    className="text-xs px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" style={{ background: "#080f1a" }} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px ml-4"
            style={{ background: COLORS.accent }} />
          {experience.map((job, i) => (
            <div key={i} className="pl-12 pb-12 relative">
              <div className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: COLORS.accent, marginLeft: "1px" }}>
                <span className="text-white text-xs font-bold">{i + 1}</span>
              </div>
              <div style={{ background: COLORS.card }} className="rounded-xl p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">{job.title}</h3>
                    <p style={{ color: COLORS.accent }} className="font-medium">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p style={{ color: COLORS.muted }} className="text-sm">{job.period}</p>
                    <p style={{ color: COLORS.muted }} className="text-sm">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2 text-sm" style={{ color: COLORS.muted }}>
                      <span style={{ color: COLORS.accent }} className="mt-1 flex-shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ background: "#0f172a" }} className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
        <div className="grid gap-8">
          {projects.map((project, i) => (
            <div key={i} style={{ background: COLORS.card }}
              className="rounded-2xl p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-white font-bold text-xl">{project.title}</h3>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
                      style={{ color: COLORS.muted }}
                      className="hover:text-white transition">
                      <GithubIcon size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
                      style={{ color: COLORS.muted }}
                      className="hover:text-white transition">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p style={{ color: COLORS.muted }} className="mb-6 leading-relaxed">
                {project.description}
              </p>
              <ul className="space-y-2 mb-6">
                {project.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2 text-sm" style={{ color: COLORS.muted }}>
                    <span style={{ color: COLORS.accent }}>✓</span> {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t}
                    style={{ background: "#1e3a5f", color: "#93c5fd" }}
                    className="text-xs px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ color: COLORS.muted }} className="text-center mt-8 text-sm">
          More projects coming soon — currently building additional healthcare and fintech pipelines.
        </p>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section style={{ background: "#080f1a" }} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div key={i} style={{ background: COLORS.card }}
              className="rounded-xl p-6">
              <p style={{ color: COLORS.accent }} className="text-sm font-semibold mb-1">{edu.year}</p>
              <h3 className="text-white font-bold mb-1">{edu.degree}</h3>
              <p style={{ color: COLORS.muted }} className="text-sm">{edu.school}</p>
              <p style={{ color: COLORS.muted }} className="text-sm">{edu.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ background: "#0f172a" }} className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
        <p style={{ color: COLORS.muted }} className="mb-8 text-lg">
          Open to Senior Data Engineer roles in healthcare, fintech, and technology.
          Remote preferred.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://linkedin.com/in/kavyasreede" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
            style={{ background: COLORS.accent }}
            className="text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition">
            <Mail size={18} /> Email Me
          </a>
          <a href="https://linkedin.com/in/kavyasreede" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
            style={{ border: `1px solid ${COLORS.accent}`, color: COLORS.accent }}
            className="px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-900 transition">
            <LinkedinIcon size={22} /> LinkedIn
          </a>
          <a href="https://github.com/kavyasreemaniga" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
            style={{ border: "1px solid #334155", color: COLORS.muted }}
            className="px-6 py-3 rounded-lg flex items-center gap-2 hover:text-white transition">
            <GithubIcon size={22} /> GitHub
          </a>
        </div>
        <p style={{ color: COLORS.muted }} className="text-sm">
          📍 Philadelphia, PA · Open to Remote
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: COLORS.dark, borderTop: "1px solid #1e293b" }}
      className="py-6 px-6 text-center">
      <p style={{ color: COLORS.muted }} className="text-sm">
        © 2026 Kavya Sree Maniga · Built with React + Tailwind · Deployed on Vercel
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ background: COLORS.dark, fontFamily: "Inter, sans-serif" }}>
      <Nav />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
