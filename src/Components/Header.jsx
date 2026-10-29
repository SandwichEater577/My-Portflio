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
        <button id="navigation-projects" className="navigation-button active">
          Projects
        </button>
        <button id="navigation-about" className="navigation-button">
          About me
        </button>
        <button
          id="navigation-contact"
          className="navigation-button primary-button"
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
