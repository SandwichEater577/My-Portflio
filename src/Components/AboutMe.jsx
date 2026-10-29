import { profile, skills } from "../Data/data.js";
import "./AboutMe.css";
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

const calculateAge = (birthDateString) => {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

export default function AboutMe() {
  const age = calculateAge("2010-12-13");

  return (
    <section className="about-me-section" id="about-me">
      <div className="about-me-card">
        <div className="about-me-header">
          <div className="about-me-avatar-wrapper">
            <img
              src={profile.avatar}
              alt="Avatar"
              className="about-me-avatar"
            />
            <span className="about-me-status-dot"></span>
          </div>

          <div className="about-me-titles">
            <h1 className="about-me-name">{profile.name}</h1>
            <p className="about-me-handle">@{profile.handle}</p>
          </div>
        </div>

        <div className="about-me-bio">
          <p>
            I'm Michael, a {age}-year-old developer based in Warsaw, Poland.
          </p>
          <p>
            I'm currently studying at{" "}
            <a
              href="https://technischools.com"
              target="_blank"
              rel="noreferrer"
              className="school-link"
            >
              TechniSchools
            </a>
            , where I learn best by just building stuff. Whether it's a simple
            website, a weird interface, or a custom programming language, I love
            making projects that teach me something new.
          </p>
          <p>
            I'm mostly into frontend development, but I also enjoy digging into
            how things work under the hood, like compilers and low-level code. I
            like experimenting with new tech and just bringing ideas to life.
          </p>
          <p id="about-me-quote">
            Always building, learning, and figuring out what's possible.
          </p>
        </div>

        <div className="about-me-skills">
          {skills.map((skill) => (
            <div key={skill} className="about-me-skill-tag" title={skill}>
              <span className="about-me-skill-icon">{iconMap[skill]}</span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
