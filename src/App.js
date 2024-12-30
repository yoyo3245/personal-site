import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
