import React from 'react';
import './Project.css'; // Make sure to import this CSS file

const Project = () => {
  return (
    <section className="project-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>E-commerce Platform</h3>
          <p>Built with React and Node.js for seamless product browsing and secure checkout.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
        <div className="project-card">
          <h3>Employee Management System</h3>
          <p>Developed using C# and MS SQL to streamline company HR and payroll processes.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
        <div className="project-card">
          <h3>Social Media App</h3>
          <p>Built with MERN stack including chat, post sharing, and real-time notifications.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Project;
