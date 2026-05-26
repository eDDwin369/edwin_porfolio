import React from 'react';
import './Navigation.css';
import { FiSend } from "react-icons/fi";


const Navigation = ({ currentProject }) => {
  const isProjectActive = currentProject === "voos-cinema" || currentProject === "placever";

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isProjectActive) {
    return (
      <header className="nav-glass header-fixed case-study-nav">
        <div className="container case-study-nav-container">
          {/* Left CTA: Back to Works */}
          <div className="nav-logo case-study-back">
            <a href="#works" className="case-study-works-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px' }}>
                <rect x="3" y="3" width="7" height="7" fill="var(--accent-pink)" stroke="var(--accent-pink)" strokeWidth="1" rx="1.5"></rect>
                <rect x="14" y="3" width="7" height="7" fill="var(--accent-pink)" stroke="var(--accent-pink)" strokeWidth="1" rx="1.5"></rect>
                <rect x="3" y="14" width="7" height="7" fill="var(--accent-pink)" stroke="var(--accent-pink)" strokeWidth="1" rx="1.5"></rect>
                <rect x="14" y="14" width="7" height="7" fill="var(--accent-pink)" stroke="var(--accent-pink)" strokeWidth="1" rx="1.5"></rect>
              </svg>
              <span>Works</span>
            </a>
          </div>

          {/* Right Navigation links */}
          <div className="case-study-menu">
            <a href="#top" onClick={scrollToTop} className="scroll-top-chevron" title="Scroll to Top">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </a>
            
            <nav className="case-study-links">
              <ul>
                <li><a href="#overview" onClick={(e) => handleSectionClick(e, 'overview')}>Overview</a></li>
                <li><a href="#research" onClick={(e) => handleSectionClick(e, 'research')}>Research</a></li>
                <li><a href="#wireframes" onClick={(e) => handleSectionClick(e, 'wireframes')}>Wireframes</a></li>
                <li><a href="#design" onClick={(e) => handleSectionClick(e, 'design')}>Design</a></li>
                <li><a href="#outcome" onClick={(e) => handleSectionClick(e, 'outcome')}>Outcome</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }

  // Default navbar
  return (
    <header className="nav-glass header-fixed">
      <div className="container nav-container">
        <div className="nav-logo">
          <a href="#home">Edwin Antony</a>
        </div>

        <nav className="nav-links">
          <ul>
            <li><a href="#works">Works</a></li>
            <li><a href="#skills">Skills & Tools</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#connect">Connect</a></li>
          </ul>
        </nav>

        <div className="nav-cta">
          <a href="mailto:edwinantony562@gmail.com" className="pill-button">
            Email Me <FiSend />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
