import React from 'react';
import '../styles/Footer.css'
import '../styles/Projects.css';

function Contact () {
   return (
      <div id='contact' className='contact'>
         <h1 className='text-center font-bold text-5xl text-white mb-12'>Contact Me</h1>
         <p className="text-3xl font-bold text-center text-white opacity-50 -mt-6 mb-8">
           Feel free to reach out for collaborations or just to say hello!
         </p>
         <div className="w-full flex justify-center mb-10">
            <ul className="flex items-center gap-4 p-0 list-none">
               <li className="w-full text-left mb-3 flex items-center">
                  <i className="bi bi-envelope-fill mr-2" style={{fontSize: '1.5rem', color: 'white'}}></i>
                 <a 
                 href="mailto:ye38@cornell.edu" 
                 className="text-xl text-white underline hover:text-blue-400 transition-colors">
                 ye38@cornell.edu
                 </a>
                 
               </li>
               <li className="w-full text-left mb-3 flex items-center">
                  <i className="bi bi-linkedin mr-2" style={{fontSize: '1.5rem', color: 'white'}}></i>
                 <a
                   href="https://www.linkedin.com/in/yosephendawoke"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-xl text-white underline hover:text-blue-400 transition-colors"
                 >
                   linkedin.com/in/yosephendawoke
                 </a>
                 
               </li>

               <li className="w-full text-left mb-3 flex items-center">
                 <i className="bi bi-github mr-2" style={{fontSize: '1.5rem', color: 'white'}}></i>
                 <a
                   href="https://github.com/yoyo3245"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-xl text-white underline hover:text-blue-400 transition-colors"
                 >
                   github.com/yoyo3245
                 </a>
                 
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Contact;
