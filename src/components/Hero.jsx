import React from 'react';
import { motion } from 'framer-motion';
import heroPortrait from '../assets/hero_portrait_1776359241317.png';
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
          
          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
