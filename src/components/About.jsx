import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import portraitImg from '../assets/hero_portrait_1776359241317.png';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-grid">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: 'blur(8px)', scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="about-left"
          >
            <h2 className="intro-text">
              <span className="text-pink">I'm Edwin Antony,</span><br/>
              a Kerala-based UI/UX designer.
            </h2>
          </motion.div>

          {/* Middle Column */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: 'blur(8px)', scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="about-middle"
          >
            <div className="polaroid-wrapper">
              <div className="polaroid-bg"></div>
              <div className="polaroid-image">
                <img src={portraitImg} alt="Edwin Antony Portrait" />
              </div>
            </div>
          </motion.div>
          
          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: 'blur(8px)', scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="about-right"
          >
            <p className="section-subtext">Who am I :</p>
            <h2 className="about-title">About Me</h2>

            <div className="bio-columns">
              <p>I'm a seasoned designer with a strong passion for creating intuitive & user-friendly digital experiences.</p>
              <p>I love collaborating with founders, helping them solve UX challenges and build solutions.</p>
            </div>

            <div className="experience-section">
              <div className="jobs-header">
                <h3>Recent jobs /</h3>
                <button className="download-btn">Download File</button>
              </div>
              
              <div className="jobs-list">
                <div className="job-item">
                  <div className="job-role">Senior UI/UX Designer</div>
                  <div className="job-company">Chordify</div>
                  <div className="job-date">2023 → Now</div>
                </div>
                <div className="job-item">
                  <div className="job-role">UI/UX Designer</div>
                  <div className="job-company">Spinny</div>
                  <div className="job-date">2021 → 2025</div>
                </div>
                <div className="job-item">
                  <div className="job-role">Product Designer</div>
                  <div className="job-company">Byjus</div>
                  <div className="job-date">2019 → 2021</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
