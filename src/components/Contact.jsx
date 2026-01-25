import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Initialize EmailJS (use your actual service ID and public key)
      emailjs.init("kN962r-V58x9arJbQ"); // Replace with your actual public key

      const formData = {
        from_name: formRef.current.name.value,
        from_email: formRef.current.email.value,
        company: formRef.current.company.value,
        topic: formRef.current.topic.value,
        message: formRef.current.message.value,
        to_email: "shrtechnologies21@gmail.com",
      };

      // Send email
      await emailjs.send(
        "service_iomz4us", // Replace with your EmailJS service ID
        "template_nwsmgxm", // Replace with your EmailJS template ID
        formData
      );

      setMessageType("success");
      setSubmitMessage("Thank you! Your inquiry has been sent successfully. We'll get back to you soon.");
      formRef.current.reset();
    } catch (error) {
      console.error("Email send error:", error);
      setMessageType("error");
      setSubmitMessage("Failed to send your inquiry. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitMessage("");
      }, 3000);
    }
  };

  return (
    <section id="contact" className="section contact fade-in">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p>
          Tell us about your project, challenges, or ideas. We'll get back to you with
          a tailored next step.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h3>Let's start a conversation.</h3>
          <p>
            Whether you are planning a new product, modernizing an existing system, exploring 
            cloud and AI initiatives, or seeking skilled technical resources, SHR Technologies 
            can help you move from concept to implementation with confidence.
          </p>
          <div className="contact-box">
            <p>
              <strong>Email:</strong> contact@shrtechnologies.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (437) 928‑1901
            </p>
            <p>
              <strong>Location:</strong> Scarborough, Ontario, Canada
            </p>
          </div>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label>Full Name *</label>
              <input 
                type="text" 
                name="name"
                placeholder="Your full name" 
                required
              />
            </div>
            <div className="form-field">
              <label>Company *</label>
              <input 
                type="text" 
                name="company"
                placeholder="Company or organization" 
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Email Address *</label>
              <input 
                type="email" 
                name="email"
                placeholder="you@example.com" 
                required
              />
            </div>
            <div className="form-field">
              <label>Topic of Interest *</label>
              <select name="topic" className="custom-select-dark"required>
                <option value="">Select a topic</option>
                <option value="Skilled Resources">Skilled Resources & Staff Augmentation</option>
                <option value="Software Development">Enterprise Software Development</option>
                <option value="Cloud & Modernization">Cloud Architecture & Digital Transformation</option>
                <option value="AI & Data Solutions">AI & Machine Learning Solutions</option>
                <option value="DevOps & Automation">DevOps, Automation & Infrastructure</option>
                <option value="Consulting">Technical Consulting & Advisory</option>
                <option value="Banking Solutions">Banking & Financial Services</option>
                <option value="Insurance Solutions">Insurance Industry Solutions</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label>Project Details / Message *</label>
            <textarea 
              name="message"
              rows="5" 
              placeholder="Briefly describe your project, challenges, or requirements..." 
              required
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </button>

          {submitMessage && (
            <p className={`form-message ${messageType}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
