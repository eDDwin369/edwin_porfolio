import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import portraitImg from '../assets/hero_portrait_1776359241317.png';
import { FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-subtext"
        >
          Who am I :
        </motion.p>
        
        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-image-container"
          >
            <img src={portraitImg} alt="James Brooks Portrait" className="about-image" />
          </motion.div>
          
          <div className="about-content">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg">I'm James Brooks,<br/>a NY-based UI/UX designer.</h2>
              <p className="text-muted about-bio">
                I'm a seasoned designer with a strong passion for creating intuitive & user-friendly digital experiences.
                <br/><br/>
                I love collaborating with founders, helping them solve UX challenges and build solutions.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="experience-section"
            >
              <h3 className="list-title">Recent jobs /</h3>
              <div className="jobs-list">
                <div className="job-item">
                  <div className="job-role">Senior UI/UX Designer</div>
                  <div className="job-company">Google</div>
                  <div className="job-date">2025 → Now</div>
                </div>
                <div className="job-item">
                  <div className="job-role">UI/UX Designer</div>
                  <div className="job-company">Acronis</div>
                  <div className="job-date">2021 → 2025</div>
                </div>
                <div className="job-item">
                  <div className="job-role">Product Designer</div>
                  <div className="job-company">Tesla</div>
                  <div className="job-date">2019 → 2021</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="cv-download pill-card"
            >
              <div className="cv-info">
                <h3>CV</h3>
                <p className="text-muted">My detailed resume in PDF</p>
              </div>
              <button className="pill-button">
                <FileText size={18} style={{marginRight: '8px'}} />
                Download PDF
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
