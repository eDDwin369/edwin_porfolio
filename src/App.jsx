import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Works from './components/Works';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const projectId = hash.replace('#/project/', '');
        setCurrentProject(projectId);
        window.scrollTo(0, 0);
      } else {
        setCurrentProject(null);
        if (hash && hash !== '#' && hash !== '#home') {
          const targetId = hash.substring(1);
          // Wait briefly for the main components to mount, then smooth-scroll
          setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 50);
        } else {
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on initial render

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToHome = () => {
    window.location.hash = '#works';
  };

  return (
    <>
      <Navigation currentProject={currentProject} />
      <main>
        {currentProject ? (
          <ProjectDetail projectId={currentProject} onBack={handleBackToHome} />
        ) : (
          <>
            <Hero />
            <Works />
            <Skills />
            <About />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
