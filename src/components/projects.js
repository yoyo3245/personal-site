import '../styles/Projects.css';
import animateMockup from '../images/animate_mockup.png';

const projects = [
  {
    key: 'eta-rho',
    role: 'Systems / Compilers',
    title: 'Eta/Rho Compiler (etac)',
    subtitle: 'Compilers',
    bullets: [
      'Built a full pipeline (lexer, parser, type checker, IR gen, codegen) translating Eta to x86-64 assembly.',
      'Implemented graph-coloring register allocation and dataflow optimizations (CSE, DCE, copy propagation).',
      'Verified correctness with 73+ unit tests and differential benchmark testing.'
    ],
    tech: ['Rust', 'LALRPOP', 'Logos', 'x86-64'],
    links: [
      // { label: 'View Repo', href: 'https://github.coecis.cornell.edu/cs4120-2026sp/compilers', icon: 'bi-github' }
    ],
    visual: {
      type: 'code',
      lines: [
        [{ t: 'fn ', c: 'kw' }, { t: 'allocate_registers', c: 'fn' }, { t: '(ir: &Ir) -> Alloc {' }],
        [{ t: '    let ', c: 'kw' }, { t: 'graph ', c: 'v' }, { t: '= ' }, { t: 'build_interference', c: 'fn' }, { t: '(ir);' }],
        [{ t: '    ', c: '' }, { t: 'color_graph', c: 'fn' }, { t: '(graph)' }],
        [{ t: '}' }]
      ]
    }
  },
  {
    key: 'texas-holdem',
    role: 'Functional Programming',
    title: "Functional Texas Hold'em",
    subtitle: 'Functional Programming',
    bullets: [
      "Built Texas Hold'em in OCaml with full poker mechanics using functional programming principles.",
      'Created AI opponents with probabilistic decision-making and achieved 80%+ test coverage using OUnit.',
      'Designed modular architecture emphasizing immutability and clean functional design.'
    ],
    tech: ['OCaml', 'OUnit', 'Functional Design'],
    links: [
      { label: 'View Repo', href: 'https://github.com/fadiismail27/3110-final-project', icon: 'bi-github' }
    ],
    visual: {
      type: 'code',
      lines: [
        [{ t: 'let ', c: 'kw' }, { t: 'rec ', c: 'kw' }, { t: 'evaluate_hand ', c: 'fn' }, { t: 'hand =' }],
        [{ t: '  match ', c: 'kw' }, { t: 'hand ', c: 'v' }, { t: 'with' }],
        [{ t: '  | ', c: '' }, { t: 'RoyalFlush ', c: 'v' }, { t: '-> 10' }],
        [{ t: '  | ', c: '' }, { t: 'HighCard c ', c: 'v' }, { t: '-> 0' }]
      ]
    }
  },
  {
    key: 'animate',
    role: 'Full Stack Developer',
    title: 'AniMate',
    subtitle: 'Information Retrieval',
    bullets: [
      'Developed an anime recommendation app that suggests titles based on user input or descriptive prompts.',
      'Applied NLP algorithms to utilize a text-based vector space model and generate relevant recommendations.',
      'Designed an intuitive interface for users to explore anime based on themes, genres, or favorites.'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'NumPy', 'Pandas'],
    links: [
      { label: 'View Repo', href: 'https://github.com/Srihan-Mediboina/animate', icon: 'bi-github' },
      { label: 'Live Site', href: 'http://4300showcase.infosci.cornell.edu:5232/', icon: 'bi-box-arrow-up-right' }
    ],
    visual: {
      type: 'image',
      src: animateMockup,
      alt: 'AniMate anime recommendation app interface'
    }
  }
];

function ProjectVisual({ visual, title }) {
  if (visual.type === 'image') {
    return (
      <div className="project-visual project-visual-image">
        <img src={visual.src} alt={visual.alt} />
      </div>
    );
  }

  return (
    <div className="project-visual project-visual-code">
      <div className="code-window-bar">
        <span className="code-dot dot-red" />
        <span className="code-dot dot-yellow" />
        <span className="code-dot dot-green" />
        <span className="code-window-title">{title}</span>
      </div>
      <pre className="code-window-body">
        {visual.lines.map((line, i) => (
          <div className="code-line" key={i}>
            {line.map((tok, j) => (
              <span key={j} className={tok.c ? `tok-${tok.c}` : undefined}>{tok.t}</span>
            ))}
          </div>
        ))}
      </pre>
    </div>
  );
}

export default function Projects() {
  return (
    <div id="projects" className="pt-20 projects-section">
      <h1 className="text-center font-bold text-5xl section-heading mb-12">Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.key}>
            <ProjectVisual visual={project.visual} title={project.title} />

            <div className="project-card-body">
              <p className="project-role">{project.role}</p>
              <h2 className="project-title">{project.title}</h2>
              <h3 className="project-subtitle">{project.subtitle}</h3>

              <ul className="project-bullets">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span className="tech-pill" key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.links.length > 0 ? (
                  project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <i className={`bi ${link.icon}`}></i>
                      {link.label}
                    </a>
                  ))
                ) : (
                  <span className="project-link-note">Private repository</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
