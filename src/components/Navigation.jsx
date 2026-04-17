import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <header className="nav-glass header-fixed">
      <div className="container nav-container">
        <div className="nav-logo">
          <a href="#home">edwin</a>
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
          <a href="mailto:timofey.bak@gmail.com" className="pill-button">
            Email Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
