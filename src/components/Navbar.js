import React, { useState } from 'react';
import '../styles/Navbar.css';

const scrollToHome = () => {
  document.getElementById('home')?.scrollIntoView({ 
    behavior: 'smooth'
  });
};

const scrollToAbout = () => {
  document.getElementById('about-me')?.scrollIntoView({ 
    behavior: 'smooth'
  });
};

const scrollToProjects = () => {
  document.getElementById('projects')?.scrollIntoView({ 
    behavior: 'smooth'
  });
};
const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ 
    behavior: 'smooth'
  });
};


function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };
  

  return (
    <nav>
      <ul className={`sidebar ${isSidebarOpen ? 'visible' : ''}`}>
        <li>
          <a className='sidebarTitle' onClick={scrollToHome}>Yoseph&nbsp;Endawoke</a>
          <a onClick={toggleSidebar}><i class="bi bi-x-lg"></i></a>
        </li>
        <li><a onClick={scrollToAbout}>About Me</a></li>
        <li><a>Projects</a></li>
        <li><a>Resume</a></li>
        <li><a>Contact</a></li>
      </ul>

      <ul>
        <li className='title'><a onClick={scrollToHome}>Yoseph Endawoke</a></li>
        <li className='hideOnMobile'><a onClick={scrollToAbout}>About Me</a></li>
        <li className='hideOnMobile'><a onClick={scrollToProjects}>Projects</a></li>
        {/* <li className='hideOnMobile'><a>Experiences</a></li> */}
        <li className='hideOnMobile'><a href='https://drive.google.com/file/d/1MjBGNDaA3yz4P4niUIiAA4IwKz70gIOE/view?usp=sharing' target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li className='hideOnMobile'><a onClick={scrollToContact}>Contact</a></li>
        <li className='menuButton'><a onClick={toggleSidebar}><i class="bi bi-list"></i></a></li>
      </ul>

    </nav>
    
    

  );
}

export default Navbar; 