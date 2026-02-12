import { useState } from "react";
import Reveal from "../components/Reveal";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="contact-hero section">
        <div className="container">
          <p className="eyebrow">Get in Touch</p>
          <h1>Contact Brew Haven Cafe</h1>
        </div>
      </section>

      <Reveal className="section section-soft">
        <div className="container contact-layout">
          <article className="contact-info card">
            <h2>Contact Information</h2>
            <ul>
              <li>
                <strong>Address:</strong> 24 Oak Street, Indiranagar, Bengaluru 560038
              </li>
              <li>
                <strong>Phone:</strong> +91 98765 43210
              </li>
              <li>
                <strong>Email:</strong> hello@brewhavencafe.com
              </li>
              <li>
                <strong>Working Hours:</strong> Mon - Sun, 8:00 AM - 11:00 PM
              </li>
            </ul>
          </article>

          <form className="contact-form card" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-primary submit-btn">
              Send Message
            </button>

            {submitted ? (
              <p className="success-message">
                Thanks for reaching out. We have received your message and will reply soon.
              </p>
            ) : null}
          </form>
        </div>
      </Reveal>

      <Reveal className="section section-emphasis map-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Find Us</p>
            <h2>Google Maps Placeholder</h2>
          </div>
          <div className="map-placeholder card" role="img" aria-label="Cafe location map placeholder">
            <div className="map-overlay">
              <h3>Brew Haven Cafe</h3>
              <p>Map placeholder for 24 Oak Street, Indiranagar, Bengaluru</p>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}

export default ContactPage;
