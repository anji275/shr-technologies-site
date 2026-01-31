import React from "react";
import cloud from "../assets/enterprise_cloud_migration.jpg";
import ai from "../assets/ai_driven.jpg";
import devops from "../assets/devops.jpg";

const Projects = () => {
  return (
    <section id="projects" className="section fade-in">
      <div className="section-header">
        <h2>Projects & Case Studies</h2>
        <p>
          A selection of real‑world engagements where SHR Technologies helped
          clients modernize, scale, and innovate.
        </p>
      </div>

      <div className="projects-grid">

        <div className="project-card">
          <img
            src={cloud}
            alt="Cloud migration"
          />
          <h3>Enterprise Cloud Migration</h3>
          <p>
            Migrated a legacy monolith to AWS microservices, reducing costs by 38%
            and improving deployment frequency.
          </p>
        </div>

        <div className="project-card">
          <img
            src={ai}
            alt="AI analytics"
          />
          <h3>AI‑Driven Insights Platform</h3>
          <p>
            Built an NLP‑powered analytics engine that increased customer retention
            by 22%.
          </p>
        </div>

        <div className="project-card">
          <img
            src={devops}
            alt="DevOps automation"
          />
          <h3>DevOps Automation for FinTech</h3>
          <p>
            Implemented CI/CD pipelines and Kubernetes workflows, reducing release
            time by 70%.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;