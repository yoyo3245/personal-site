import React from 'react';
import '../styles/Projects.css';
import picture from '../images/mockup1.png'
import react from '../images/React.svg'
import tailwind from '../images/TailwindCSS.svg'
import animate from '../images/animate_mockup.png'
import python from '../images/python.png'
import html from '../images/html.png'
import css from '../images/css.png'
import courseflow from '../images/courseflow.png'
import sql from '../images/sql.png'
import swift from '../images/Swift.png'

export default function Projects() {
  return(
    <div id="projects" className="pt-20">
      <h1 className='text-center font-bold text-5xl text-white mb-12'>Projects</h1>
      
      <div className="URMC">
        <div className="projects">
          <div className='urmc-box box'>
            <img className="max-h-[30rem]" src={picture} ></img>
          </div>

          <div className='text-container'>
            <p className='text role'>Full Stack Developer</p>
            <h1 className='project-title'>URMC Website</h1>
            <h2 className='text'>Team Project</h2>
            <p className='text description'>
            The Underrepresented Minorities in Computing student org site serves as a hub for outreach, connecting with the community, and supporting underrepresented groups in the computing field.
            </p>

            <p className='text role pt-10'>Front End</p>
            <div className="flex items-center gap-4">
              <img src={react}></img>
              <p className="text-white text-3xl">React</p>
            </div>
            <div className="flex items-center ml-7 gap-4">
              <img src={tailwind}></img>
              <p className="text-white text-3xl">Tailwind</p>
            </div>

            <div className='pt-8 flex justify-center gap-4'>
              <a
                href="https://github.com/urmc-cornell/urmc-website"
                target="_blank"
                rel="noopener noreferrer"
                className='w-48 text-black font-bold text-2lg rounded-full bg-white px-5 py-1 hover:bg-gray-200 transition-colors flex items-center gap-2 justify-center'>
                <i className="bi bi-github" style={{ color: 'black', fontSize: '1.1rem' }}></i>
                View on GitHub
              </a>

              <a
                href="https://urmc.cs.cornell.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className='w-48 text-black font-bold text-2lg rounded-full bg-white px-5 py-1 hover:bg-gray-200 transition-colors flex items-center gap-2 justify-center'>
                Go to Website
              </a>
            </div>

          </div>
      
        </div>
      </div>


      <div className="Animate pt-10">
        <div className="projects flex flex-row justify-end mr-5">
          <div className='text-container'>
            <p className='text role'>Full Stack Developer</p>
            <h1 className='project-title'>AniMate</h1>
            <h2 className='text'>Team Project</h2>
            <p className='text description'>
            AniMate is an intelligent anime recommendation tool that utilizes NLP and machine learning to suggest titles based on your input or preferences.
            </p>

            <div className="flex gap-8">
              <div>
                <p className='text role pt-10'>Front End</p>
                <div className="flex items-center gap-4">
                  <img src={html}></img>
                  <p className="text-white text-3xl">HTML5</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={css}></img>
                  <p className="text-white text-3xl">CSS3</p>
                </div>
              </div>
              <div>
                <p className='text role pt-10'>Back End</p>
                <div className="flex items-center gap-4">
                  <img src={python}></img>
                  <p className="text-white text-3xl">Python</p>
                </div>
              </div>
            </div>

            <div className='pt-8 flex justify-center gap-4'>
              <a
                href="https://github.com/Srihan-Mediboina/animate"
                target="_blank"
                rel="noopener noreferrer"
                className='w-48 text-black font-bold text-2lg rounded-full bg-white px-5 py-1 hover:bg-gray-200 transition-colors flex items-center gap-2 justify-center'>
                <i className="bi bi-github" style={{ color: 'black', fontSize: '1.1rem' }}></i>
                View on GitHub
              </a>

              <a
                href="http://4300showcase.infosci.cornell.edu:5232/"
                target="_blank"
                rel="noopener noreferrer"
                className='w-48 text-black font-bold text-2lg rounded-full bg-white px-5 py-1 hover:bg-gray-200 transition-colors flex items-center gap-2 justify-center'>
                Go to Website
              </a>
            </div>
          </div>
          <div className='animate-box box'>
            <img className="max-h-[33rem] " src={animate} ></img>
          </div>
        </div>
      </div>

      <div className="CourseFlow">
        <div className="projects">
          <div className='courseflow-box box'>
            <img className="max-h-[35rem] " src={courseflow} ></img>
          </div>

          <div className='text-container'>
            <p className='text role'>Back End Developer</p>
            <h1 className='project-title'>CourseFlow</h1>
            <h2 className='text'>Team Project</h2>
            <p className='text description'>
            CourseFlow is an iOS application that helps students stay organized by allowing them to create accounts to track their classes and assignments effortlessly. 
            </p>

            <div className="flex ml-24 gap-8">
              <div>
                <p className='text role pt-10'>Front End</p>
                <div className="flex items-center gap-4">
                  <img src={swift}></img>
                  <p className="text-white text-3xl">Swift</p>
                </div>
                {/* <div className="flex items-center gap-4">
                  <img src={css}></img>
                  <p className="text-white text-3xl">CSS3</p>
                </div> */}
              </div>
              <div>
                <p className='text role pt-10'>Back End</p>
                <div className="flex items-center gap-4">
                  <img src={python}></img>
                  <p className="text-white text-3xl">Python</p>
                </div>
                <div className="flex items-center gap-4 ml-3">
                  <img src={sql} className='max-h-[2rem]'></img>
                  <p className="text-white text-3xl">SQLAlchemy</p>
                </div>
              </div>
            </div>

            <div className='pt-8 flex justify-center gap-4'>
              <a
                href="https://github.com/Trenton-Lyke/ProductivityApp"
                target="_blank"
                rel="noopener noreferrer"
                className='w-48 text-black font-bold text-2lg rounded-full bg-white px-5 py-1 hover:bg-gray-200 transition-colors flex items-center gap-2 justify-center'>
                <i className="bi bi-github" style={{ color: 'black', fontSize: '1.1rem' }}></i>
                View on GitHub
              </a>

            </div>

          </div>
      
        </div>
      </div>




    </div>
  );
};
