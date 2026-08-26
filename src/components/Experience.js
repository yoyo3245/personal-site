import { useState } from 'react';
import '../styles/Experience.css';
import metaLogo from '../images/logos/meta.svg';
import nianticLogo from '../images/logos/niantic.svg';
import siemensLogo from '../images/logos/siemens.svg';
import cornellLogo from '../images/logos/cornell.svg';

const experiences = [
  {
    company: 'Meta',
    role: 'Software Engineer Intern',
    team: 'Metadata Intelligence Team',
    location: 'Menlo Park, CA',
    dates: 'May 2026 – August 2026',
    logo: metaLogo,
    bullets: [
      'Achieved 99.9% parity between Python/C++ clients for AI-asset search, validated against 250,000+ requests.',
      'Generated equivalent Python and PHP clients from C++ via internal code-gen, making C++ the source of truth.',
      'Migrated 100% of traffic to the generated client with minimal issues and lower latency than the legacy client.'
    ]
  },
  {
    company: 'Niantic Labs',
    role: 'Software Engineer Intern',
    team: 'Pokémon GO Infrastructure Team',
    location: 'Bellevue, WA',
    dates: 'May 2025 – August 2025',
    logo: nianticLogo,
    bullets: [
      'Implemented a new quest for Pokémon GO (60M+ MAU) with scalable server logic and quest state handling.',
      'Engineered a raid rejoin feature end-to-end in Java/Unity, adding new Protobuf schemas and backend service.',
      'Feature expected to save ~$1.5M annually by reducing support reimbursements from lost Raid Passes.'
    ]
  },
  {
    company: 'Siemens',
    role: 'Software Engineer Intern',
    team: 'Platform Team — Brightly',
    location: 'Remote',
    dates: 'May 2024 – January 2025',
    logo: siemensLogo,
    bullets: [
      'Developed prototype enterprise application using .NET and Angular, focusing on functionality and scalability.',
      'Created a scalable API from scratch implementing 15 endpoints, learning more about production code.',
      'Demoed project to 20+ engineers and managers, leading to the integration of 3 new user-requested features.'
    ]
  },
  {
    company: 'ColorStack Cornell (URMC)',
    role: 'Web Development Chair',
    team: null,
    location: 'Ithaca, NY',
    dates: 'December 2023 – December 2025',
    logo: cornellLogo,
    bullets: [
      'Converted Google Sheets info to a PostgreSQL database, allowing us to store user info in various places.',
      'Built a tool with Flask, HTML, and CSS to parse Google Form IDs and update a PostgreSQL member database.',
      'Enabled live site updates by connecting the website to the database, removing the need for redeployment.'
    ]
  },
  {
    company: 'Cornell Engineering',
    role: 'CS 4300 Teaching Assistant — Language and Information',
    team: null,
    location: 'Ithaca, NY',
    dates: 'February 2026 – May 2026',
    logo: cornellLogo,
    bullets: [
      'Graded coursework, helped develop exams, and held office hours for students in information retrieval and NLP.',
      'Mentored a project team through weekly meetings on a semester-long information retrieval system with RAG.'
    ]
  },
  {
    company: 'Cornell Engineering',
    role: 'CS 1998 Teaching Assistant — Intro to Software Interviewing',
    team: null,
    location: 'Ithaca, NY',
    dates: 'February 2025 – May 2025',
    logo: cornellLogo,
    bullets: [
      'Led weekly mock interviews for Intro to Software Interviewing, giving feedback on coding and communication.',
      'Held office hours and graded assignments for 50+ students, supporting their preparation for technical interviews.'
    ]
  }
];

export default function Experience() {
  const [openItems, setOpenItems] = useState(() => new Set());

  const toggleItem = (key) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div id="experience" className="experience pt-20">
      <h1 className="text-center font-bold text-5xl section-heading mb-12">Experience</h1>

      <div className="timeline">
        {experiences.map((exp) => {
          const key = `${exp.company}-${exp.dates}`;
          const isOpen = openItems.has(key);

          return (
            <div className="timeline-item" key={key}>
              <div className="timeline-marker">
                <span className="timeline-dot" />
              </div>
              <div className="timeline-card">
                <button
                  type="button"
                  className="timeline-header"
                  onClick={() => toggleItem(key)}
                  aria-expanded={isOpen}
                >
                  <img className="timeline-logo" src={exp.logo} alt={`${exp.company} logo`} />

                  <div className="timeline-heading">
                    <div className="timeline-title-row">
                      <h2 className="timeline-company-name">{exp.company}</h2>
                      <span className="timeline-dates">{exp.dates}</span>
                    </div>
                    <p className="timeline-role-team">
                      {exp.role}{exp.team ? ` · ${exp.team}` : ''}
                    </p>
                    <p className="timeline-location">{exp.location}</p>
                  </div>

                  <i className={`bi bi-chevron-down timeline-chevron ${isOpen ? 'open' : ''}`} aria-hidden="true"></i>
                </button>

                <div className={`timeline-details ${isOpen ? 'open' : ''}`}>
                  <div className="timeline-details-inner">
                    <ul className="timeline-bullets">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
