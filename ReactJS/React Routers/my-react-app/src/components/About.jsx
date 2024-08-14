import React from 'react';
import '../About.css'
const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our mission, vision, and the team behind the scenes.</p>
      </header>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>Our mission is to deliver the best products and services to our customers, helping them achieve their goals with ease and efficiency.</p>
      </section>

      <section className="about-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <h3>Jane Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <h3>Mike Johnson</h3>
            <p>Lead Designer</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Our History</h2>
        <p>Founded in 2010, our company has grown from a small startup to a leader in the industry, known for innovation and customer satisfaction.</p>
      </section>
    </div>
  );
};

export default About;
