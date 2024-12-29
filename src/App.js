import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';

var ReactRotatingText = require('react-rotating-text');

function App() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = () => {
    setIsAnimating(true);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="App">
      <Navbar />
      <header className="Home">
        <h1>
          Hey, I'm Yoseph!
        </h1>
        <h2 className='rotating-text'>
          <ReactRotatingText items={['Software Engineer 💻', 'Student 🧑🏾‍🎓', 'Logic Lover 🤓', 'Batman 🦇']}/>
        </h2>

        <p className='description-text'>
          An engineer passionate about building impactful projects and <br/>
          exploring the intersection of human behavior and technology.
        </p>

        <div className="arrow-container">
          <i 
            className={`bi bi-arrow-down ${isAnimating ? 'animating' : ''}`}
            onMouseEnter={handleMouseEnter}
            onAnimationEnd={handleAnimationEnd}
          ></i>
        </div>
        
      </header>
    </div>
  );
}

export default App;
