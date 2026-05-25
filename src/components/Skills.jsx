import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillBlocks = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-3d-svg">
        <rect x="4" y="8" width="40" height="28" rx="4" fill="url(#grad1)" />
        <rect x="8" y="12" width="32" height="20" rx="2" fill="rgba(255,255,255,0.15)" />
        <rect x="11" y="16" width="8" height="5" rx="1.5" fill="rgba(255,255,255,0.6)" />
        <rect x="22" y="16" width="14" height="2" rx="1" fill="rgba(255,255,255,0.45)" />
        <rect x="22" y="20" width="10" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
        <rect x="11" y="24" width="25" height="2" rx="1" fill="rgba(255,255,255,0.25)" />
        <rect x="16" y="36" width="16" height="3" rx="1.5" fill="url(#grad1)" />
        <rect x="10" y="39" width="28" height="2" rx="1" fill="#d1d5db" />
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e91e63" />
            <stop offset="1" stopColor="#9c27b0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    label: 'Design',
    desc: 'As a UX designer, I create seamless, engaging digital experiences, from complex web platforms to logos and icons. I focus on designing intuitive layouts and interactions, ensuring websites, apps, and digital products are both visually appealing and easy to use.',
    delay: 0.1,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-3d-svg">
        <rect x="6" y="14" width="36" height="24" rx="4" fill="url(#grad2)" />
        <rect x="10" y="18" width="28" height="16" rx="2" fill="rgba(255,255,255,0.12)" />
        <path d="M15 26l4-4 4 4 6-7" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="33" cy="22" r="3" fill="rgba(255,255,255,0.5)" />
        <rect x="18" y="38" width="12" height="3" rx="1.5" fill="url(#grad2)" />
        <rect x="12" y="10" width="6" height="6" rx="2" fill="url(#grad2a)" />
        <rect x="30" y="8" width="8" height="8" rx="2" fill="url(#grad2a)" opacity="0.7" />
        <defs>
          <linearGradient id="grad2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="grad2a" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop stopColor="#60a5fa" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    ),
    label: 'Building',
    desc: 'I develop websites directly in Framer using its no-code tools, designing visually appealing layouts and user-friendly experiences. I help founders bring their vision to life quickly, ensuring their website is both functional and engaging.',
    delay: 0.25,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-3d-svg">
        <circle cx="24" cy="24" r="18" fill="url(#grad3)" />
        <circle cx="24" cy="24" r="13" fill="rgba(255,255,255,0.1)" />
        <path d="M24 14v3M24 31v3M14 24h3M31 24h3" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 19a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" fill="rgba(255,255,255,0.3)" />
        <circle cx="24" cy="24" r="3" fill="white" opacity="0.9" />
        <path d="M30 10l2 2-2 2M18 36l-2-2 2-2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
        <defs>
          <linearGradient id="grad3" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10b981" />
            <stop offset="1" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
      </svg>
    ),
    label: 'Enhancing',
    desc: 'I can also enhance your project by creating a cohesive visual identity with consistent colors and typography. Simplify navigation and layouts, incorporate engaging visuals, and use user feedback.',
    delay: 0.4,
  },
];

/* ── Tool icons ──────────────────────────────────────── */
const tools = [
  {
    name: 'Figma',
    rotate: -6,
    delay: 0.05,
    icon: (
      <svg viewBox="0 0 38 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0"  width="19" height="19" rx="9.5" fill="#F24E1E"/>
        <rect x="19" y="0"  width="19" height="19" rx="9.5" fill="#FF7262"/>
        <rect x="0" y="19" width="19" height="19" rx="9.5" fill="#A259FF"/>
        <rect x="0" y="38" width="19" height="18" rx="9"   fill="#0ACF83"/>
        <circle cx="28.5" cy="28.5" r="9.5" fill="#1ABCFE"/>
      </svg>
    ),
  },
  {
    name: 'Framer',
    rotate: 4,
    delay: 0.12,
    icon: (
      <svg viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h32v22H16L0 0z" fill="#0055FF"/>
        <path d="M0 22h16l16 22H0V22z" fill="#0044CC"/>
        <path d="M0 44l16-22h16L16 44H0z" fill="#0033AA"/>
      </svg>
    ),
  },
  {
    name: 'React',
    rotate: 8,
    delay: 0.18,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="20" cy="20" rx="20" ry="8" stroke="#61DAFB" strokeWidth="2.5" fill="none" transform="rotate(0 20 20)"/>
        <ellipse cx="20" cy="20" rx="20" ry="8" stroke="#61DAFB" strokeWidth="2.5" fill="none" transform="rotate(60 20 20)"/>
        <ellipse cx="20" cy="20" rx="20" ry="8" stroke="#61DAFB" strokeWidth="2.5" fill="none" transform="rotate(120 20 20)"/>
        <circle cx="20" cy="20" r="3.5" fill="#61DAFB"/>
      </svg>
    ),
  },
  {
    name: 'Claude',
    rotate: -4,
    delay: 0.22,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="12" fill="#D97757"/>
        <path d="M14 28l6-16 6 16M16.5 22.5h7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'n8n',
    rotate: 6,
    delay: 0.28,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="12" fill="#EA4B71"/>
        <circle cx="10" cy="20" r="4" fill="white"/>
        <circle cx="30" cy="20" r="4" fill="white"/>
        <path d="M14 20h12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="3" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Notion',
    rotate: -8,
    delay: 0.34,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="12" fill="#191919"/>
        <path d="M12 10h11l9 11v19H28V23L19 13H12V10z" fill="white" opacity="0.9"/>
        <path d="M12 10v3h7l9 10v17" stroke="#191919" strokeWidth="1.5"/>
        <rect x="14" y="20" width="8" height="2" rx="1" fill="#888"/>
        <rect x="14" y="25" width="12" height="2" rx="1" fill="#888"/>
      </svg>
    ),
  },
  {
    name: 'Antigravity',
    rotate: 3,
    delay: 0.40,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="12" fill="url(#agGrad)"/>
        <path d="M20 8l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" fill="white" opacity="0.95"/>
        <defs>
          <linearGradient id="agGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7c3aed"/>
            <stop offset="1" stopColor="#e91e63"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

const ICON_SIZE = 50;

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 50, filter: 'blur(8px)', scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="section-subtext"
        >
          What and How :
        </motion.p>

        <div className="skills-grid">
          {/* Left — 3 Skill Blocks */}
          <div className="skills-descriptions">
            {skillBlocks.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: block.delay }}
                viewport={{ once: true, margin: '-50px' }}
                className="skill-block"
              >
                <motion.div
                  className="skill-icon-container"
                  whileHover={{ y: -6, scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  {block.icon}
                </motion.div>
                <h3 className="skill-heading">{block.label}</h3>
                <p className="text-muted skill-desc">{block.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right — Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(8px)', scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.55 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.015 }}
            className="skills-lists pill-card"
          >
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
                <li><span>Design systems &amp; assets</span></li>
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

            {/* ── Tool Icon Cloud ───────────────────── */}
            <div className="tools-cloud-wrapper">
              <p className="tools-cloud-label">Tools &amp; stack</p>
              <div className="tools-cloud">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    className="tool-chip"
                    style={{ '--rotate': `${tool.rotate}deg` }}
                    initial={{ opacity: 0, scale: 0.7, y: 12 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: 'backOut', delay: 0.6 + tool.delay }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.12, rotate: 0 }}
                    title={tool.name}
                  >
                    <span
                      className="tool-icon-wrap"
                      style={{ width: ICON_SIZE, height: ICON_SIZE }}
                    >
                      {tool.icon}
                    </span>
                    <span className="tool-name">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
