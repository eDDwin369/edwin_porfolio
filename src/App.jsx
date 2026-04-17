import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Works from './components/Works';
import Skills from './components/Skills';
import About from './components/About';
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
      </main>
      <Footer />
    </>
  );
}

export default App;
