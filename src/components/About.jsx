import React from "react";

const About = () => {
  return (
    <section id="about" className="section about-bc-image about fade-in">
      <div className="section-header">
        <h2>About SHR Technologies</h2>
        <p>
          We help organizations adopt modern architectures, automate delivery, and
          unlock the full value of cloud, AI, and DevOps transformation.
        </p>
      </div>

      <div className="about-layout">
        <div className="about-text">
          <h3>Engineering Excellence. Practical Consulting.</h3>

          <p>
            SHR Technologies blends deep technical expertise with real‑world
            consulting experience. We partner with businesses to design, build, and
            scale secure, maintainable, and future‑ready digital platforms.
          </p>

          <p>
            From enterprise Java systems to AI‑powered automation and cloud‑native
            architectures, we deliver solutions that accelerate innovation and
            reduce operational complexity.
          </p>

          <ul className="about-list">
            <li>Cloud‑native architecture & modernization</li>
            <li>Enterprise web & mobile development</li>
            <li>DevOps automation & CI/CD pipelines</li>
          </ul>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
            alt="Professional software development team collaboration"
          />
        </div>
      </div>
    </section>
  );
};

export default About;