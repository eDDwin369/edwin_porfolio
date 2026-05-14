import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Works from './components/Works';
import Skills from './components/Skills';
import About from './components/About';
import MeetSection from './components/MeetSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Works />
        <Skills />
        <About />
        <MeetSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
