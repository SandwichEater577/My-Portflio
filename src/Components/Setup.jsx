import { setup, translations } from "../Data/data.js";
import Animation from "./Animation.jsx";
import TechniSchoolsLogo from "./TechniSchoolsLogo";
import "./Setup.css";
import { FaTerminal, FaLinux } from "react-icons/fa";
import { SiHackclub } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const iconMap = {
  vscode: <VscVscode />,
  helix: <FaTerminal />,
  linux: <FaLinux />,
  hackclub: <SiHackclub />,
  technischools: <TechniSchoolsLogo className="setup-svg-icon" />,
};

export default function Setup({ lang }) {
  const t = translations[lang].setup;

  const getGlowColor = (icon) => {
    if (icon === "hackclub") return "#ec3750";
    if (icon === "technischools") return "#3813c2";
    return "#3b82f6";
  };

  return (
    <section className="setup-section" id="setup">
      <div className="setup-container">
        <div className="setup-header">
          <h2 className="setup-title">{t.title}</h2>
          <p className="setup-subtitle">{t.subtitle}</p>
        </div>

        <div className="setup-grid">
          {setup.map((item) => (
            <Animation
              key={item.name.en}
              color={getGlowColor(item.icon)}
              className="setup-card"
            >
              <div className="setup-item">
                <span className="setup-icon">
                  {iconMap[item.icon] ? (
                    iconMap[item.icon]
                  ) : (
                    <img
                      src={item.icon}
                      alt={item.name[lang]}
                      className="setup-img-icon"
                    />
                  )}
                </span>
                <div className="setup-info">
                  <span className="setup-label">{item.name[lang]}</span>
                  <span className="setup-value">{item.value}</span>
                </div>
              </div>
            </Animation>
          ))}
        </div>
      </div>
    </section>
  );
}
