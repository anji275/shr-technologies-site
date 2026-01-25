import React from "react";

const TechStack = () => {
  return (
    <section id="techstack" className="section fade-in">
      <div className="section-header">
        <h2>Technology Expertise</h2>
        <p>
          SHR Technologies delivers solutions using modern, scalable, and
          enterprise‑grade technologies across cloud, AI, DevOps, and full‑stack
          development.
        </p>
      </div>

      <div className="tech-grid">

        <div className="tech-card">
          <h3>Programming Languages</h3>
          <ul>
            <li>Java (Spring Boot, Microservices)</li>
            <li>Python (FastAPI, ML, Automation)</li>
            <li>JavaScript / TypeScript</li>
            <li>Node.js, React, Next.js</li>
          </ul>
        </div>

        <div className="tech-card">
          <h3>Cloud Platforms</h3>
          <ul>
            <li>AWS (EC2, Lambda, ECS, RDS)</li>
            <li>Azure (App Services, AKS, Functions)</li>
            <li>Google Cloud (GKE, BigQuery)</li>
          </ul>
        </div>

        <div className="tech-card">
          <h3>AI & Data</h3>
          <ul>
            <li>TensorFlow, PyTorch</li>
            <li>NLP, LLM Integration</li>
            <li>Data Pipelines & ETL</li>
            <li>Analytics Dashboards</li>
          </ul>
        </div>

        <div className="tech-card">
          <h3>DevOps & Automation</h3>
          <ul>
            <li>Docker, Kubernetes</li>
            <li>GitHub Actions, Jenkins</li>
            <li>Terraform, Ansible</li>
            <li>CI/CD Pipelines</li>
          </ul>
        </div>

        <div className="tech-card">
          <h3>Databases</h3>
          <ul>
            <li>PostgreSQL, MySQL</li>
            <li>MongoDB, DynamoDB</li>
            <li>Redis, ElasticSearch</li>
          </ul>
        </div>

        <div className="tech-card">
          <h3>Mobile & Front‑End</h3>
          <ul>
            <li>React Native</li>
            <li>Flutter</li>
            <li>Responsive UI/UX</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default TechStack;