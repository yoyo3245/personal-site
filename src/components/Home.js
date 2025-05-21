import ScrollArrow from './ScrollArrow';
import '../styles/Home.css'

var ReactRotatingText = require('react-rotating-text');
export default function Home() {
    return (
        <div id="home" className="Home">
            <h1 className='font-bold text-5xl'>
              Hey, I'm Yoseph!
            </h1>
            <h2 className='rotating-text'>
              <ReactRotatingText items={['Software Engineer 💻', 'Student 🧑🏾‍🎓', 'Logic Lover 🤓', 'Batman 🦇']}/>
            </h2>

            <p className='home-description'>
              An engineer passionate about building impactful projects
              exploring the intersection of human behavior and technology.
            </p>

            <ul className='icons'>
              <li>
                <a href="https://linkedin.com/in/yosephendawoke" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/yoyo3245" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/yoseph.end" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
            <ScrollArrow />
        </div>
    )
  }
  