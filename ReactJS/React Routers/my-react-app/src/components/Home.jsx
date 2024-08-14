import React from 'react'
import '../Home.css'
const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Website</h1>
        <p>Your one-stop destination for amazing content.</p>
        <button className="cta-button">Get Started</button>
      </header>
      
      <section className="home-section">
        <h2>About Us</h2>
        <p>We are passionate about delivering the best content to our users. Explore our wide range of articles, tutorials, and resources.</p>
      </section>
      
      <section className="home-section">
        <h2>Services</h2>
        <p>Our services are tailored to meet your needs. Whether you're looking for advice, tutorials, or just some inspiration, we've got you covered.</p>
      </section>
      
      <section className="home-section">
        <h2>Contact Us</h2>
        <p>Have any questions? Feel free to reach out to us through our contact page.</p>
      </section>
    </div>
  );
};

export default Home;

 



