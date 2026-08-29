import { useState } from 'react';
import '../styles/Navbar.css';
import ThemeToggle from './ThemeToggle';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  });
};

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const go = (id) => () => {
    scrollTo(id);
    setIsSidebarOpen(false);
  };

  return (
    <nav>
      <ul className={`sidebar ${isSidebarOpen ? 'visible' : ''}`}>
        <li>
          <button type='button' className='sidebarTitle' onClick={go('home')}>Yoseph&nbsp;Endawoke</button>
          <button type='button' onClick={toggleSidebar} aria-label='Close menu'><i className="bi bi-x-lg"></i></button>
        </li>
        <li><button type='button' onClick={go('about-me')}>About Me</button></li>
        <li><button type='button' onClick={go('skills')}>Skills</button></li>
        <li><button type='button' onClick={go('experience')}>Experience</button></li>
        <li><button type='button' onClick={go('projects')}>Projects</button></li>
        <li><a href={`${process.env.PUBLIC_URL}/2027_Endawoke_Yoseph.pdf`} target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li><button type='button' onClick={go('contact')}>Contact</button></li>
        <li className='sidebarThemeRow'>
          <span>Theme</span>
          <ThemeToggle />
        </li>
      </ul>

      <ul>
        <li className='title'><button type='button' onClick={go('home')}>Yoseph Endawoke</button></li>
        <li className='hideOnMobile'><button type='button' onClick={go('about-me')}>About Me</button></li>
        <li className='hideOnMobile'><button type='button' onClick={go('skills')}>Skills</button></li>
        <li className='hideOnMobile'><button type='button' onClick={go('experience')}>Experience</button></li>
        <li className='hideOnMobile'><button type='button' onClick={go('projects')}>Projects</button></li>
        <li className='hideOnMobile'><a href={`${process.env.PUBLIC_URL}/2027_Endawoke_Yoseph.pdf`} target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li className='hideOnMobile'><button type='button' onClick={go('contact')}>Contact</button></li>
        <li className='hideOnMobile navThemeToggle'><ThemeToggle /></li>
        <li className='menuButton'><button type='button' onClick={toggleSidebar} aria-label='Open menu'><i className="bi bi-list"></i></button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
