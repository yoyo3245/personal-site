import React from 'react';
import '../styles/AboutMe.css'; // Optional: for styling
import picture from '../images/Image.jpeg';

export default function AboutMe() {
  return (
    <div id="about-me" className="about-me">
      {/* <h1 className='about-title'>About Me</h1> */}

      <div className='flex justify-center items-center'>
        <div className='picture-container'>
          <img className='picture' src={picture} alt="Portrait of Yoseph Endawoke" />
        </div>

        <div className='text'>
          <h1 className='header'>I'm a Software Engineer from Boston, Massachusetts.</h1>
          <p>
            I'm a sophomore at <span style={{color: 'red'}}>Cornell University</span> studying <span style={{color: '#7AF980'}}>Computer Science</span> with a minor in <span style={{color: '#7AF980'}}>Applied Mathematics</span>, and I'm passionate about building impactful projects that help people. 
            <br></br>
            <br></br>
            Outside of coding, I enjoy going to the gym and playing video games with my friends. 
          </p>
        </div>
      </div>

    </div>
  );
};