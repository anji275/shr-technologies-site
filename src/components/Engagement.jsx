import React from "react";

const Engagement = () => {
  return (
    <section id="engagement" className="section fade-in">
      <div className="section-header">
        <h2>Engagement Models</h2>
        <p>
          Flexible collaboration models designed to fit your project size, timeline,
          and business goals.
        </p>
      </div>

      <div className="engagement-grid">

        <div className="engagement-card">
          <h3>Project‑Based Delivery</h3>
          <p>
            Ideal for well‑defined requirements. SHR Technologies manages the full
            lifecycle from design to deployment.
          </p>
          <ul>
            <li>Fixed scope & timeline</li>
            <li>Predictable cost</li>
            <li>End‑to‑end ownership</li>
          </ul>
        </div>

        <div className="engagement-card">
          <h3>Dedicated Engineering Team</h3>
          <p>
            A long‑term extension of your internal team with engineers dedicated
            exclusively to your product.
          </p>
          <ul>
            <li>Full‑time or part‑time engineers</li>
            <li>Flexible scaling</li>
            <li>Agile collaboration</li>
          </ul>
        </div>

        <div className="engagement-card">
          <h3>Consulting & Advisory</h3>
          <p>
            Strategic guidance on architecture, cloud adoption, modernization, and
            DevOps transformation.
          </p>
          <ul>
            <li>Architecture reviews</li>
            <li>Cloud & DevOps roadmaps</li>
            <li>Technology assessments</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Engagement;