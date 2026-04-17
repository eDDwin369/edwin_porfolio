import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import { Linkedin, Twitter, Dribbble, Figma } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="connect" className="footer">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="footer-cta pill-card"
        >
          <p className="section-subtext footer-subtext">To get in touch :</p>
          <h2 className="heading-lg">Let's work together!</h2>
          <p className="text-muted footer-desc">Set up a time to talk about your design needs.</p>
          <a href="https://calendly.com" target="_blank" rel="noreferrer" className="pill-button lg-btn">
            Book a Call
          </a>
        </motion.div>
        
        <div className="footer-bottom">
          <div className="footer-socials">
            <span className="text-muted">Follow me on:</span>
            <div className="social-links">
              <a href="https://linkedin.com"><Linkedin size={20} /></a>
              <a href="https://twitter.com"><Twitter size={20} /></a>
              <a href="https://dribbble.com"><Dribbble size={20} /></a>
              <a href="https://figma.com"><Figma size={20} /></a>
            </div>
          </div>
          
          <div className="footer-copyright">
            <span className="text-muted">© 2025 UIUXfolio</span>
            <span className="text-muted divider">|</span>
            <span className="text-muted">Created by James Brooks</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
