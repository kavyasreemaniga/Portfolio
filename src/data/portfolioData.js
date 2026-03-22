export const profile = {
  name: "Kavya Sree Maniga",
  role: "Senior Data Engineer",
  blurb:
    "Building scalable data platforms and production pipelines across healthcare, fintech, and technology.",
  location: "Remote, USA",
  linkedin: "https://linkedin.com/in/kavyasreede",
  github: "https://github.com/kavyasreede",
  resume: "/resume.pdf",
};

export const techStack = [
  { category: "Languages", items: ["Python", "SQL", "Scala", "PySpark", "PowerShell"] },
  { category: "Data Stack", items: ["dbt", "Apache Airflow", "Snowflake", "BigQuery", "Redshift"] },
  { category: "Cloud", items: ["GCP", "AWS", "Azure", "Terraform", "Docker"] },
  { category: "Pipeline Tools", items: ["Apache Kafka", "Pub/Sub", "Dataflow", "AWS Glue", "ADF"] },
  { category: "BI & Viz", items: ["Power BI", "Looker", "Tableau", "Streamlit"] },
  { category: "Governance", items: ["dbt Tests", "Microsoft Purview", "Dataplex", "RBAC", "IAM"] },
];

export const experience = [
  {
    title: "Senior Data Engineer",
    company: "Digimarc",
    period: "Apr 2024 - Present",
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
    period: "Nov 2022 - Dec 2023",
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
    period: "Nov 2018 - Dec 2021",
    location: "India",
    highlights: [
      "Led end-to-end migration of clinical and claims data to AWS Redshift processing 200GB+ daily",
      "Integrated Epic EHR data reducing clinical reporting latency by 40%",
      "Enforced HIPAA compliance through IAM, RBAC, encryption, and audit-ready data lineage",
      "Built Tableau and Power BI dashboards for provider metrics and patient outcomes reporting",
    ],
  },
];

export const projects = [
  {
    title: "Healthcare Analytics Platform",
    category: "Data Engineering",
    featured: true,
    description:
      "End-to-end data pipeline processing Hospital Readmissions and Medicare Claims data with medallion architecture, dbt testing, and Airflow orchestration.",
    tech: ["dbt", "Snowflake", "Airflow", "Python", "GitHub Actions", "Streamlit"],
    github: "https://github.com/kavyasreede/healthcare-analytics-platform",
    demo: "",
    highlights: [
      "20+ dbt models with automated quality tests and source freshness checks",
      "CI/CD: SQLFluff linting on PRs, full dbt build on merge to main",
      "Streamlit dashboard for readmission rates and cost analytics",
    ],
  },
  {
    title: "GCP CDC Pipeline Modernization",
    category: "Streaming Data",
    featured: false,
    description:
      "Real-time CDC ingestion platform for PostgreSQL and MongoDB using Pub/Sub + Dataflow into BigQuery, designed for low-latency analytics.",
    tech: ["GCP", "Pub/Sub", "Dataflow", "BigQuery", "Terraform"],
    github: "",
    demo: "",
    highlights: [
      "Built near real-time ingestion for operational datasets with scalable throughput",
      "Reduced downstream processing time by 35% through modernized architecture",
      "Established standardized cloud infrastructure patterns with IaC",
    ],
  },
  {
    title: "Azure Medallion Finance Pipelines",
    category: "Analytics Engineering",
    featured: false,
    description:
      "Designed Bronze/Silver/Gold data flows in Azure ecosystem to support regulatory reporting and business analytics use cases.",
    tech: ["Azure Data Factory", "PySpark", "Databricks", "Power BI", "Microsoft Fabric"],
    github: "",
    demo: "",
    highlights: [
      "Cut manual processing effort by 50% across 15+ financial pipelines",
      "Improved trust in reporting with layered transformation and governance",
      "Delivered stakeholder-facing dashboards for finance and sales teams",
    ],
  },
];

export const education = [
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

export const certifications = [
  {
    name: "dbt Fundamentals",
    issuer: "dbt Labs",
  },
  {
    name: "Google Cloud Data Engineer (Hands-on Track)",
    issuer: "Google Cloud Learning Path",
  },
  {
    name: "Azure Data Engineering Practitioner Path",
    issuer: "Microsoft Learn",
  },
];
