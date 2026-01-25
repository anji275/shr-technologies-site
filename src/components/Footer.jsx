import React from "react";
import { FaFacebook, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const address = "812, 1 Rosemount drive, Scarborough, ON, Canada, M1K 2W5";
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.032!2d-79.2411!3d43.7844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb5a5a5a5a5d%3A0x5a5a5a5a5a5a5a5a!2s1%20Rosemount%20Dr%2C%20Scarborough%2C%20ON%20M1K%202W5!5e0!3m2!1sen!2sca!4v1674000000000";

  const socialLinks = [
    {
      id: "facebook",
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61587177567388",
      icon: FaFacebook,
      color: "facebook",
      ariaLabel: "Visit SHR Technologies on Facebook",
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      url: "https://wa.me/+14379281901",
      icon: FaWhatsapp,
      color: "whatsapp",
      ariaLabel: "Contact us on WhatsApp",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/shr-technologies",
      icon: FaLinkedinIn,
      color: "linkedin",
      ariaLabel: "Connect with us on LinkedIn",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleSocialClick = (e, social) => {
    try {
      if (!social.url || !social.url.startsWith("http")) {
        e.preventDefault();
        console.error(`Invalid URL for ${social.name}`);
      }
    } catch (error) {
      console.error(`Error opening ${social.name}:`, error);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-container">
          {/* Google Maps Section */}
          <div className="footer-section footer-map-section">
            <div className="section-header">
              <h3>
                <i className="fas fa-map-marker-alt"></i>
                <span>Our Location</span>
              </h3>
            </div>
            <div className="map-container">
              <iframe
                title="SHR Technologies Location"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={mapEmbedUrl}
              />
            </div>
          </div>

          {/* Social Media Section */}
          <div className="footer-section footer-social-section">
            <div className="section-header">
              <h3>
                <i className="fas fa-share-alt"></i>
                <span>Connect With Us</span>
              </h3>
            </div>
            <p className="social-description">
              Follow us on social media for updates and support
            </p>
            <div className="social-icons-grid">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon-btn ${social.color}`}
                    aria-label={social.ariaLabel}
                    title={`Follow us on ${social.name}`}
                    onClick={(e) => handleSocialClick(e, social)}
                  >
                    <IconComponent className="social-icon" />
                    <span className="tooltip">{social.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Address moved below social icons */}
            <div className="address-card">
              <i className="fas fa-location-dot"></i>
              <div className="address-info">
                <p className="address-label">Address</p>
                <p className="address-text">{address}</p>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section footer-links-section">
            <div className="section-header">
              <h3>
                <i className="fas fa-link"></i>
                <span>Quick Links</span>
              </h3>
            </div>
            <ul className="quick-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} <strong>SHR Technologies</strong>. All
            rights reserved.
          </p>
          <p className="footer-tagline">
            Empowering businesses with innovative tech solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;