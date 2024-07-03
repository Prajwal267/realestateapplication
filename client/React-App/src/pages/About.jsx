import React from 'react';

const About = () => {
  return (
    <div style={{
      backgroundColor: '#f0f0f0',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>
        About Us
      </h1>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Welcome to our website! We are a team of passionate individuals who are dedicated to providing high-quality content and resources to our users.
      </p>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
        Our Mission
      </h2>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Our mission is to empower individuals with the knowledge and skills they need to succeed in their personal and professional lives.
      </p>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
        Our Team
      </h2>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
        <li style={{ marginBottom: '10px' }}>
          <img src="https://via.placeholder.com/50" alt="Team Member 1" style={{ borderRadius: '50%', marginRight: '10px' }} />
          <span style={{ fontSize: '18px' }}>John Doe</span>
          <p style={{ fontSize: '16px', color: '#666' }}>Founder & CEO</p>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <img src="https://via.placeholder.com/50" alt="Team Member 2" style={{ borderRadius: '50%', marginRight: '10px' }} />
          <span style={{ fontSize: '18px' }}>Jane Doe</span>
          <p style={{ fontSize: '16px', color: '#666' }}>Content Manager</p>
        </li>
      </ul>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
        Contact Us
      </h2>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Have a question or comment? We'd love to hear from you! You can reach us at <a href="mailto:info@example.com" style={{ textDecoration: 'none', color: '#337ab7' }}>info@example.com</a>.
      </p>
    </div>
  );
};

export default About;