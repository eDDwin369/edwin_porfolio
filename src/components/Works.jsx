import React from 'react';
import { motion } from 'framer-motion';
import './Works.css';

import voosImg from '../assets/project_voos_1776359260540.avif';
import credroadImg from '../assets/project_credroad_1776359281133.png';
import suplanImg from '../assets/project_suplan_1776359295831.png';
import placeverImg from '../assets/project_placever_1776359311873.avif';

const projects = [
  {
    id: "voos-cinema",
    title: "Voo's Cinema",
    desc: "Ultimate american mobile ticketing app for a seamless movie experience at offline cinemas. All in one place.",
    location: "USA",
    // year: "2025",
    link: "#/project/voos-cinema",
    img: voosImg,
  },


  {
    id: "placever",
    title: "Placever",
    desc: "Tourist and navigation mobile app, which helps people who are walking around the city to discover local places and sights.",
    location: "EU",
    // year: "2023",
    link: "#/project/placever",
    img: placeverImg,
  }
];

const Works = () => {
  return (
    <section id="works" className="works-section">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="section-subtext"
        >
          What I'm proud of :
        </motion.p>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)', scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="project-card pill-card"
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc text-muted">{project.desc}</p>

      

                <a href={project.link} className="project-link">
                  View full UX case
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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
