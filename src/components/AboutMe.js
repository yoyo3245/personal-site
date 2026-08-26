import '../styles/AboutMe.css';
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
            I'm a junior at <span className='accent-text'>Cornell University</span> studying <span className='accent-text'>Computer Science</span> with a minor in <span className='accent-text'>Applied Mathematics</span>, expecting to graduate in 2027. I've spent recent summers as a Software Engineer Intern at <span className='accent-text'>Meta</span> and <span className='accent-text'>Niantic Labs</span>, and I'm passionate about building impactful projects that help people.
            <br></br>
            <br></br>
            Outside of coding, I enjoy reading, going to the gym, and playing guitar.
          </p>
        </div>
      </div>

    </div>
  );
};