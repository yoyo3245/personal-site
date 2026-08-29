import '../styles/Skills.css';
import {
  SiRust, SiPython, SiCplusplus, SiSharp, SiOcaml, SiJavascript, SiTypescript,
  SiHtml5, SiReact, SiAngular, SiDotnet, SiFlask, SiBootstrap, SiUnity,
  SiGit, SiDocker, SiKubernetes, SiGooglecloud, SiPostgresql, SiIntellijidea, SiRider
} from 'react-icons/si';
import { DiJava, DiCss3, DiVisualstudio } from 'react-icons/di';
import { FaDatabase } from 'react-icons/fa';

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'Rust', icon: SiRust, color: '#CE422B' },
      { name: 'Java', icon: DiJava, color: '#EA2D2E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'C#', icon: SiSharp, color: '#239120' },
      { name: 'OCaml', icon: SiOcaml, color: '#EC6813' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: DiCss3, color: '#1572B6' }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: '.NET', icon: SiDotnet, color: '#512BD4' },
      { name: 'Flask', icon: SiFlask, color: '#8B8B8B' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'Unity', icon: SiUnity, color: '#8B8B8B' },
      { name: 'LALRPOP', icon: null, color: null },
      { name: 'Logos', icon: null, color: null }
    ]
  },
  {
    category: 'Infrastructure & Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Protobuf', icon: null, color: null },
      { name: 'IntelliJ', icon: SiIntellijidea, color: '#FE2857' },
      { name: 'Visual Studio', icon: DiVisualstudio, color: '#5C2D91' },
      { name: 'Rider', icon: SiRider, color: '#FF318C' }
    ]
  }
];

export default function Skills() {
  return (
    <div id="skills" className="skills pt-20">
      <h1 className="text-center font-bold text-5xl section-heading mb-12">Skills</h1>

      <div className="skills-grid">
        {skillCategories.map((group) => (
          <div className="skill-category" key={group.category}>
            <h2 className="skill-category-title">{group.category}</h2>
            <div className="skill-pills">
              {group.skills.map(({ name, icon: Icon, color }) => (
                <span className="skill-pill" key={name}>
                  {Icon && <Icon className="skill-icon" style={color ? { color } : undefined} aria-hidden="true" />}
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
