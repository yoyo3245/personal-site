import ScrollArrow from './ScrollArrow';
import './Home.css'

var ReactRotatingText = require('react-rotating-text');
export default function Home() {
    return (
        <div id="home" className="Home">
            <h1>
              Hey, I'm Yoseph!
            </h1>
            <h2 className='rotating-text'>
              <ReactRotatingText items={['Software Engineer 💻', 'Student 🧑🏾‍🎓', 'Logic Lover 🤓', 'Batman 🦇']}/>
            </h2>
            <p>
              An engineer passionate about building impactful projects <br />
              exploring the intersection of human behavior and technology.
            </p>
            <ScrollArrow />
        </div>
    )
  }
  