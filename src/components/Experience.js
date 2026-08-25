import '../styles/Experience.css';

const experiences = [
  {
    company: 'Meta',
    role: 'Software Engineer Intern',
    location: 'Menlo Park, CA',
    dates: 'May 2026 – August 2026',
    bullets: [
      'Achieved 99.9% parity between Python/C++ clients for AI-asset search, validated against 250,000+ requests.',
      'Generated equivalent Python and PHP clients from C++ via internal code-gen, making C++ the source of truth.',
      'Migrated 100% of traffic to the generated client with minimal issues and lower latency than the legacy client.'
    ]
  },
  {
    company: 'Niantic Labs',
    role: 'Software Engineer Intern',
    location: 'Bellevue, WA',
    dates: 'May 2025 – August 2025',
    bullets: [
      'Implemented a new quest for Pokémon GO (60M+ MAU) with scalable server logic and quest state handling.',
      'Engineered a raid rejoin feature end-to-end in Java/Unity, adding new Protobuf schemas and backend service.',
      'Feature expected to save ~$1.5M annually by reducing support reimbursements from lost Raid Passes.'
    ]
  },
  {
    company: 'Siemens',
    role: 'Software Engineer Intern',
    location: 'Remote',
    dates: 'May 2024 – January 2025',
    bullets: [
      'Developed prototype enterprise application using .NET and Angular, focusing on functionality and scalability.',
      'Created a scalable API from scratch implementing 15 endpoints, learning more about production code.',
      'Demoed project to 20+ engineers and managers, leading to the integration of 3 new user-requested features.'
    ]
  },
  {
    company: 'ColorStack Cornell (URMC)',
    role: 'Full Stack Software Engineer',
    location: 'Ithaca, NY',
    dates: 'December 2023 – December 2025',
    bullets: [
      'Converted Google Sheets info to a PostgreSQL database, allowing us to store user info in various places.',
      'Built a tool with Flask, HTML, and CSS to parse Google Form IDs and update a PostgreSQL member database.',
      'Enabled live site updates by connecting the website to the database, removing the need for redeployment.'
    ]
  },
  {
    company: 'Cornell Engineering',
    role: 'CS 4300 Teaching Assistant — Language and Information',
    location: 'Ithaca, NY',
    dates: 'February 2026 – May 2026',
    bullets: [
      'Graded coursework, helped develop exams, and held office hours for students in information retrieval and NLP.',
      'Mentored a project team through weekly meetings on a semester-long information retrieval system with RAG.'
    ]
  },
  {
    company: 'Cornell Engineering',
    role: 'CS 1998 Teaching Assistant — Intro to Software Interviewing',
    location: 'Ithaca, NY',
    dates: 'February 2025 – May 2025',
    bullets: [
      'Led weekly mock interviews for Intro to Software Interviewing, giving feedback on coding and communication.',
      'Held office hours and graded assignments for 50+ students, supporting their preparation for technical interviews.'
    ]
  }
];

export default function Experience() {
  return (
    <div id="experience" className="experience pt-20">
      <h1 className="text-center font-bold text-5xl section-heading mb-12">Experience</h1>

      <div className="timeline">
        {experiences.map((exp) => (
          <div className="timeline-item" key={`${exp.company}-${exp.dates}`}>
            <div className="timeline-marker">
              <span className="timeline-dot" />
            </div>
            <div className="timeline-card">
              <div className="timeline-card-header">
                <div className="timeline-title-row">
                  <h2 className="timeline-role">{exp.role}</h2>
                  <span className="timeline-dates">{exp.dates}</span>
                </div>
                <p className="timeline-company">{exp.company} · {exp.location}</p>
              </div>
              <ul className="timeline-bullets">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
