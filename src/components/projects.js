import '../styles/Projects.css';
import animateMockup from '../images/animate_mockup.png';

const projects = [
  {
    key: 'eta-rho',
    role: 'Systems / Compilers',
    title: 'Eta/Rho Compiler (etac)',
    subtitle: 'Compilers',
    description: 'A Rust compiler, backwards-compatible with Rho, that translates Eta to x86-64 assembly with graph-coloring register allocation and dataflow optimizations.',
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
    description: "A full Texas Hold'em implementation in OCaml with probabilistic AI opponents and 80%+ test coverage.",
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
    description: 'An NLP-powered app that recommends anime titles from natural language prompts using a vector space model.',
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

              <p className="project-description">{project.description}</p>

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
