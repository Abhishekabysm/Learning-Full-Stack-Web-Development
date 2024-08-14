import React from 'react';
import '../Contact.css'
const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below or reach out to us through our contact details.</p>
      </header>

      <section className="contact-form-section">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      <section className="contact-info-section">
        <h2>Contact Information</h2>
        <p>Email: info@example.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Example Street, City, Country</p>
      </section>

      <section className="map-section">
        <h2>Our Location</h2>
        <div className="map-placeholder">
          {/* Placeholder for a map */}
          <p>Map will be displayed here</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
