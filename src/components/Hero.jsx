import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            <span className="pulse-dot"></span> Available for work
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-xl hero-title"
          >
            Welcome to my home!<br />
            My main Value:<br />
            Precise approach to your <span className="script-font accent-text">Product.</span>
          </motion.h1>

          <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="floating-tags"
          >
            <li className="f-tag t1">animation</li>
            <li className="f-tag t2">user stories</li>
            <li className="f-tag t3">mockups</li>
            <li className="f-tag t4">sketches</li>
            <li className="f-tag t5">Research</li>
            <li className="f-tag t6">Prototypes</li>
            <li className="f-tag t7">wireframes</li>
            <li className="f-tag t8">design</li>
            <li className="f-tag t9">branding</li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
