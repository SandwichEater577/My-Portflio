import { navLinks } from "../Data/data.js";
import "./Header.css";

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-logo-container">
        <h1 className="header-title">
          <span className="header-title-symbol">~/</span>Nestea
        </h1>
      </div>

      <nav className="header-navigation" id="main-navigation">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="navigation-button">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
