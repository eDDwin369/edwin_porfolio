import React from 'react';
import { motion } from 'framer-motion';
import heroPortrait from '../assets/hero_portrait_1776359241317.png';
import AnimatedCounter from './AnimatedCounter';
import collabGreenCircle from '../assets/collab_green_circle.png';
import collabTicketPouch from '../assets/collab_ticket_pouch.png';
import collabFaujx from '../assets/collab_faujx.png';
import collabPalmred from '../assets/collab_palmred.jpg';
import collabPremierArt from '../assets/collab_premier_art.png';
import collabFemmar from '../assets/collab_femmar.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">


      <div className="hero-right">
        <motion.div
          className="right-content"
          initial={{ opacity: 0, y: 50, filter: 'blur(8px)', scale: 0.95 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <p className="welcome-text">Welcome to my home!</p>
          <h1 className="main-heading">
            <span className="hi-name">I'm Edwin Antony,</span><br />
            a UI/UX designer.
          </h1>

          <motion.div
            className="hero-stats-row"
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          >
            <div className="hero-stat-card">
              <div className="hero-stat-number"><AnimatedCounter from={0} to={100} />%</div>
              <div className="hero-stat-label">Client Satisfaction Rate</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-number"><AnimatedCounter from={0} to={10} />+</div>
              <div className="hero-stat-label">Projects Completed</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-number"><AnimatedCounter from={0} to={4} />X</div>
              <div className="hero-stat-label">Client Growth</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-number"><AnimatedCounter from={0} to={3} />+</div>
              <div className="hero-stat-label">Years of Experience</div>
            </div>
          </motion.div>

          <motion.div
            className="client-collaborations-pill"
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          >
            <div className="collab-label">Client Collaborations</div>
            <div className="collab-carousel-container">
              <div className="collab-track">
                {/* Set 1 */}
                <img src={collabGreenCircle} alt="Green Circle Logo" className="collab-logo" />
                <img src={collabTicketPouch} alt="Ticket Pouch Logo" className="collab-logo" />
                <img src={collabFaujx} alt="FAUJX Logo" className="collab-logo" />
                <img src={collabPalmred} alt="PALMRED Logo" className="collab-logo" />
                <img src={collabPremierArt} alt="Premier Art Logo" className="collab-logo" />
                <img src={collabFemmar} alt="Femmar Logo" className="collab-logo" />
                
                {/* Set 2 */}
                <img src={collabGreenCircle} alt="Green Circle Logo" className="collab-logo" />
                <img src={collabTicketPouch} alt="Ticket Pouch Logo" className="collab-logo" />
                <img src={collabFaujx} alt="FAUJX Logo" className="collab-logo" />
                <img src={collabPalmred} alt="PALMRED Logo" className="collab-logo" />
                <img src={collabPremierArt} alt="Premier Art Logo" className="collab-logo" />
                <img src={collabFemmar} alt="Femmar Logo" className="collab-logo" />
                
                {/* Set 3 */}
                <img src={collabGreenCircle} alt="Green Circle Logo" className="collab-logo" />
                <img src={collabTicketPouch} alt="Ticket Pouch Logo" className="collab-logo" />
                <img src={collabFaujx} alt="FAUJX Logo" className="collab-logo" />
                <img src={collabPalmred} alt="PALMRED Logo" className="collab-logo" />
                <img src={collabPremierArt} alt="Premier Art Logo" className="collab-logo" />
                <img src={collabFemmar} alt="Femmar Logo" className="collab-logo" />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
