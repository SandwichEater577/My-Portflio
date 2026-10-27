import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="logo-area">
        <h1>
          nestea<span>.dev</span>
        </h1>
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}
