import { profile, skills } from "../Data/data.js";
import "./Hero.css";
import {
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaDatabase,
  FaTerminal,
  FaCode,
  FaReact,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";

const iconMap = {
  Python: <FaPython />,
  JavaScript: <FaJsSquare />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  PHP: <FaPhp />,
  SQL: <FaDatabase />,
  Bash: <FaTerminal />,
  C: <FaCode />,
  React: <FaReact />,
  Linux: <FaLinux />,
  Git: <FaGitAlt />,
};

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-card">
        <div className="hero-header">
          <div className="avatar-wrapper">
            <img src={profile.avatar} alt="Avatar" className="hero-avatar" />
            <span className="status-dot"></span>
          </div>

          <div className="hero-titles">
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-handle">@{profile.handle}</p>
          </div>
        </div>

        <div className="hero-bio">
          <p>
            I'm a student at{" "}
            <a
              href="https://technischools.com"
              target="_blank"
              rel="noreferrer"
              className="school-link"
            >
              Technikum TechniSchools in Warsaw
            </a>
            . I specialize in building functional web applications and tinkering
            with system-level code.
          </p>
          <p>
            Currently exploring frontend architecture, custom compilers, and
            modern web design.
          </p>
        </div>

        <div className="hero-skills">
          {skills.map((skill) => (
            <div key={skill} className="skill-tag" title={skill}>
              <span className="skill-icon">{iconMap[skill]}</span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
