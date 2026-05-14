import React from 'react';
import { motion } from 'framer-motion';
import portraitImg from '../assets/hero_portrait_1776359241317.png';
import './MeetSection.css';

const MeetSection = () => {
  return (
    <section className="meet-section">
      <div className="meet-left">
        <motion.h2 
          className="meet-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meet Edwin
        </motion.h2>
        
        <motion.p 
          className="meet-bio"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          I'm Edwin, a passionate UI/UX Designer based in Kerala. I specialize in crafting bold visual identities and digital experiences that captivate and inspire, blending creativity with strategy to elevate brands.
        </motion.p>
        
        <motion.div 
          className="meet-tags"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="meet-tag">Product Design</span>
          <span className="meet-tag">UI/UX Design</span>
          <span className="meet-tag">Interaction Design</span>
          <span className="meet-tag">Wireframing</span>
          <span className="meet-tag">Prototyping</span>
          <span className="meet-tag">Figma</span>
          <span className="meet-tag">Framer</span>
        </motion.div>
        
        <motion.div 
          className="meet-experience"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="meet-job">
            <span>Senior UI/UX Designer</span>
            <span>Chordify</span>
            <span>2023 - Now</span>
          </div>
          <div className="meet-job">
            <span>UI/UX Designer</span>
            <span>Spinny</span>
            <span>2021 - 25</span>
          </div>
          <div className="meet-job">
            <span>Product Designer</span>
            <span>Byjus</span>
            <span>2019 - 21</span>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="meet-right"
        initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="meet-image-container">
          <img src={portraitImg} alt="Edwin Antony" className="meet-image" />
        </div>
      </motion.div>
    </section>
  );
};

export default MeetSection;
