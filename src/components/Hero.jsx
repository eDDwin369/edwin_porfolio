import React from 'react';
import { motion } from 'framer-motion';
import { SiFigma, SiReact, SiFramer, SiN8N, SiFlutter } from 'react-icons/si';
import heroPortrait from '../assets/hero_portrait_1776359241317.png';
import AnimatedCounter from './AnimatedCounter';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
    
      
      <div className="hero-right">
        <motion.div 
          className="right-content"
          initial={{ opacity: 0, y: 50, filter: 'blur(8px)', scale: 0.95 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="welcome-text">Welcome to my home!</p>
          <h1 className="main-heading">
            <span className="hi-name">I'm Edwin Antony,</span><br/>
            a UI/UX designer.
          </h1>
          
          <motion.div 
            className="hero-stats-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="hero-stat-card">
              <div className="hero-stat-number"><AnimatedCounter from={0} to={100} />%</div>
              <div className="hero-stat-label">Client Satisfaction Rate</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-number"><AnimatedCounter from={0} to={50} />+</div>
              <div className="hero-stat-label">Projects Completed</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-number"><AnimatedCounter from={0} to={4} />X</div>
              <div className="hero-stat-label">Client Growth</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-number"><AnimatedCounter from={0} to={7} />+</div>
              <div className="hero-stat-label">Years of Experience</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="tools-frameworks-pill"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="tools-label">Tools & Frameworks</div>
            <div className="tools-icons">
              <SiFigma title="Figma" />
              <SiReact title="React" />
              <SiFramer title="Framer" />
              <SiN8N title="n8n" />
              <SiFlutter title="FlutterFlow" />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
