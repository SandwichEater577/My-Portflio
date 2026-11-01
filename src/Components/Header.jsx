import { navLinks } from "../Data/data.js";
import "./Header.css";

export default function Header({ lang, setLang, triggerShine }) {
  return (
    <header id="main-header">
      <div className="header-logo-container">
        <h1 className="header-title">
          <span className="header-title-symbol">~/</span>Ouro
        </h1>
      </div>

      <div className="header-right-side">
        <nav className="header-navigation" id="main-navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navigation-button"
              onClick={() => triggerShine(link.href.replace("#", ""))}
            >
              {link.label[lang]}
            </a>
          ))}
        </nav>

        <div className="language-switcher">
          <button
            className={`lang-btn ${lang === "en" ? "active" : ""}`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <span className="lang-divider">/</span>
          <button
            className={`lang-btn ${lang === "pl" ? "active" : ""}`}
            onClick={() => setLang("pl")}
          >
            PL
          </button>
        </div>
      </div>
    </header>
  );
}
