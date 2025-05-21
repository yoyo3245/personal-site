import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/projects';
import FadeInSection from './components/FadeInSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FadeInSection>
        <Home />
      </FadeInSection>
      <FadeInSection>
        <AboutMe />
      </FadeInSection>
      <FadeInSection>
        <Projects />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
    </div>
  );
}

export default App;
