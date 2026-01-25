import React from "react";

const Services = () => {
  return (
    <section id="services" className="section fade-in">
      <div className="section-header">
        <h2>Comprehensive Technology Services</h2>
        <p>
          SHR Technologies provides comprehensive end-to-end engineering solutions, 
          delivering highly skilled resources and enterprise-grade expertise to organizations 
          across diverse industries including Banking, Finance, and Insurance sectors.
        </p>
      </div>

      <div className="service-grid">

        <div className="service-card">
          <h3>Highly Skilled Technical Resources</h3>
          <p>
            We provide access to a vetted pool of highly skilled software engineers, architects, 
            and technical consultants with proven expertise in enterprise-level solutions. Our 
            resources bring industry-specific knowledge and best practices to accelerate your 
            digital transformation initiatives.
          </p>
        </div>

        <div className="service-card">
          <h3>Banking & Financial Services Solutions</h3>
          <p>
            We have successfully delivered robust, secure, and compliant technology solutions 
            to leading banking and financial institutions. Our expertise spans payment systems, 
            core banking platforms, wealth management applications, and regulatory compliance 
            frameworks (PCI-DSS, SOX, GDPR).
          </p>
        </div>

        <div className="service-card">
          <h3>Insurance Industry Expertise</h3>
          <p>
            With extensive experience in the insurance sector, we deliver solutions for policy 
            management, claims processing, underwriting automation, and customer engagement platforms. 
            Our solutions ensure regulatory compliance, data security, and operational excellence 
            in mission-critical environments.
          </p>
        </div>

        <div className="service-card">
          <h3>Enterprise Application Development</h3>
          <p>
            Scalable, maintainable, and future-proof enterprise applications using Java, Python, 
            and modern JavaScript frameworks. We specialize in microservices architecture, API-driven 
            design, and cloud-native development for mission-critical business systems.
          </p>
        </div>

        <div className="service-card">
          <h3>Cloud Architecture & Digital Transformation</h3>
          <p>
            Strategic guidance and implementation of cloud-native architectures on AWS, Azure, 
            and Google Cloud. We assist organizations in modernizing legacy systems, optimizing 
            cloud costs, and building resilient, scalable infrastructure for sustainable growth.
          </p>
        </div>

        <div className="service-card">
          <h3>DevOps, Automation & AI Solutions</h3>
          <p>
            End-to-end DevOps implementation, CI/CD pipeline automation, Kubernetes orchestration, 
            and AI/ML-driven solutions. We enable faster time-to-market, improved system reliability, 
            and intelligent automation to reduce operational overhead.
          </p>
        </div>

      </div>

      <div className="industry-section hero-section">
        <h3>Proven Track Record in Key Industries</h3>
        <div className="industry-list">
          <div className="industry-item">
            <strong>Banking & Finance:</strong> Core banking systems, payment gateways, 
            trading platforms, and investment management solutions with regulatory compliance.
          </div>
          <div className="industry-item">
            <strong>Insurance:</strong> Policy administration systems, claims management, 
            underwriting platforms, and digital customer engagement solutions.
          </div>
          <div className="industry-item">
            <strong>Enterprise & FinTech:</strong> Digital transformation, microservices 
            migration, cloud modernization, and secure API development.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;