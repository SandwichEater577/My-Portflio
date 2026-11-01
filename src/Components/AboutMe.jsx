import { useState, useEffect } from "react";
import { profile, skills, translations } from "../Data/data.js";
import Animation from "./Animation.jsx";
import "./AboutMe.css";
import {
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaDatabase,
  FaTerminal,
  FaReact,
  FaLinux,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiRust,
  SiC,
  SiNodedotjs,
  SiGodotengine,
} from "react-icons/si";

const iconMap = {
  Rust: <SiRust />,
  Python: <FaPython />,
  JavaScript: <FaJsSquare />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  PHP: <FaPhp />,
  SQL: <FaDatabase />,
  Bash: <FaTerminal />,
  C: <SiC />,
  "C++": <SiCplusplus />,
  React: <FaReact />,
  Linux: <FaLinux />,
  Git: <FaGitAlt />,
  "Node.js": <SiNodedotjs />,
  ASM_86x64: <FaCode />,
  Godot: <SiGodotengine />,
};

const calculateAge = (birthDateString) => {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  )
    age--;
  return age;
};

export default function AboutMe({ lang, shineTrigger }) {
  const t = translations[lang].aboutMe;
  const age = calculateAge("2010-12-13");
  const [isShining, setIsShining] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    if (shineTrigger.id === "about-me") {
      setIsShining(true);
      const timer = setTimeout(() => setIsShining(false), 2000);
      return () => clearTimeout(timer);
    } else {
      setIsShining(false);
    }
  }, [shineTrigger.id, shineTrigger.key]);

  const handleAvatarClick = () => {
    if (!isSpinning) {
      // Start: 5 pełnych obrotów w 120 sekund (bardzo wolno)
      setIsSpinning(true);
      setRotation((prev) => prev + 1800);
    } else {
      // Stop: wyliczamy następną wielokrotność 360, żeby zawsze kręcił się do przodu
      setIsSpinning(false);
      setRotation((prev) => Math.ceil((prev + 1) / 360) * 360);
    }
  };

  return (
    <section className="about-me-section" id="about-me">
      <Animation
        color="#a52a2a"
        className="about-me-card"
        forceActive={isShining}
        hoverable={false}
      >
        <div className="about-me-header">
          <div className="about-me-avatar-wrapper">
            <img
              src={profile.avatar}
              alt="Avatar"
              className="about-me-avatar"
              onClick={handleAvatarClick}
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: isSpinning
                  ? "transform 120s linear"
                  : // Nowa krzywa hamowania: zachowuje pęd i bardzo spokojnie zwalnia przez 4s
                    "transform 4s cubic-bezier(0.1, 0.8, 0.2, 1)",
              }}
            />
          </div>
          <div className="about-me-titles">
            <h1 className="about-me-name">{profile.name}</h1>
            <p className="about-me-handle">@{profile.handle}</p>
          </div>
        </div>

        <div className="about-me-bio">
          <p>{t.bio1.replace("{age}", age)}</p>
          <p>
            {t.bio2_part1}
            <a
              href="https://technischools.com"
              target="_blank"
              rel="noreferrer"
              className="school-link"
            >
              {t.bio2_link}
            </a>
            {t.bio2_part2}
          </p>
          <p>{t.bio3}</p>
          <p id="about-me-quote">{t.quote}</p>
        </div>

        <div className="about-me-skills">
          {skills.map((skill) => (
            <Animation
              key={skill.name}
              color={skill.color}
              className="about-me-skill-tag"
            >
              <span className="about-me-skill-icon">{iconMap[skill.name]}</span>
              {skill.name}
            </Animation>
          ))}
        </div>
      </Animation>
    </section>
  );
}
