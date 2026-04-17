import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-subtext"
        >
          What and How :
        </motion.p>
        
        <div className="skills-grid">
          <div className="skills-descriptions">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="skill-block"
            >
              <h3>Design</h3>
              <p className="text-muted">As a UX designer, I create seamless, engaging digital experiences, from complex web platforms to logos and icons. I focus on designing intuitive layouts and interactions, ensuring websites, apps, and digital products are both visually appealing and easy to use.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="skill-block"
            >
              <h3>Building</h3>
              <p className="text-muted">I develop websites directly in Framer using its no-code tools, designing visually appealing layouts and user-friendly experiences. I help founders bring their vision to life quickly, ensuring their website is both functional and engaging.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="skill-block"
            >
              <h3>Enhancing</h3>
              <p className="text-muted">I can also enhance your project by creating a cohesive visual identity with consistent colors and typography. Simplify navigation and layouts, incorporate engaging visuals, and use user feedback.</p>
            </motion.div>
          </div>
          
          <div className="skills-lists pill-card">
            <div className="list-group">
              <h4 className="list-title">I do</h4>
              <ul>
                <li><span>Research</span></li>
                <li><span>Concept, sketches and wireframes</span></li>
                <li><span>Design mockups</span></li>
                <li><span>Interactive prototypes</span></li>
              </ul>
            </div>
            
            <div className="list-group">
              <h4 className="list-title">I create</h4>
              <ul>
                <li><span>Websites</span></li>
                <li><span>Mobile apps</span></li>
                <li><span>Logotypes, branding</span></li>
                <li><span>Design systems & assets</span></li>
              </ul>
            </div>
            
            <div className="list-group">
              <h4 className="list-title">I use</h4>
              <ul>
                <li><span>Figma, Sketch</span></li>
                <li><span>Framer</span></li>
                <li><span>Photoshop, Illustrator</span></li>
                <li><span>Prototyping and animation tools</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
