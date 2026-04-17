import React from 'react';
import { motion } from 'framer-motion';
import './Works.css';

import voosImg from '../assets/project_voos_1776359260540.png';
import credroadImg from '../assets/project_credroad_1776359281133.png';
import suplanImg from '../assets/project_suplan_1776359295831.png';
import placeverImg from '../assets/project_placever_1776359311873.png';

const projects = [
  {
    title: "Voo's Cinema",
    desc: "Ultimate american mobile ticketing app for a seamless movie experience at offline cinemas. All in one place.",
    location: "USA",
    year: "2025",
    link: "#",
    img: voosImg,
  },
  {
    title: "Credroad",
    desc: "Personal credit-management website to enable users to track and improve their credit score + apply for new credit cards.",
    location: "USA",
    year: "2024",
    link: "#",
    img: credroadImg,
  },
  {
    title: "Suplan",
    desc: "Mobile app for customer service teams to receive, manage, and report on incoming service requests.",
    location: "Israel",
    year: "2024",
    link: "#",
    img: suplanImg,
  },
  {
    title: "Placever",
    desc: "Tourist and navigation mobile app, which helps people who are walking around the city to discover local places and sights.",
    location: "EU",
    year: "2023",
    link: "#",
    img: placeverImg,
  }
];

const Works = () => {
  return (
    <section id="works" className="works-section">
      <div className="container">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-subtext"
        >
          What I'm proud of :
        </motion.p>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="project-card pill-card"
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc text-muted">{project.desc}</p>
                
                <div className="project-meta">
                  <span className="tag">{project.location}</span>
                  <span className="tag">{project.year}</span>
                </div>
                
                <a href={project.link} className="project-link">
                  View full UX case
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
              
              <div className="project-image">
                <img src={project.img} alt={project.title} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
