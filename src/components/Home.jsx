import React from "react";
import TradingViewTicker from "./TradingViewTicker";
import imgHome from "../assets/home_pg.png";

const Home = () => {
  return (
    <section id="home" className="section home hero-section fade-in">
      <div><TradingViewTicker/></div>
      <div className="home-page-container">
      <div className="home-content">
        
        <h1>Enterprise Technology Solutions & Skilled Resources</h1>
        <p className="subtitle">
          SHR Technologies provides highly skilled technical resources and enterprise-grade 
          software development solutions for Banking, Finance, Insurance, and Fortune 500 companies. 
          We deliver proven expertise in cloud architecture, digital transformation, and secure, 
          compliant technology systems.
        </p>

        <div className="hero-actions">
          <button
            onClick={() =>
              document.getElementById("services").scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Services
          </button>

          <button
            className="outline"
            onClick={() =>
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }
          >
            Book a Consultation
          </button>
        </div>
      </div>

      <div className="home-image">
        <img
          src={imgHome}
          style={{width: 300, height: 250, fit: "crop"}} alt="Enterprise IT Solutions and Cloud Architecture"
        />
      </div>
      </div>
    </section>
  );
};

export default Home;