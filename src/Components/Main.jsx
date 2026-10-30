import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";
import "./Main.css";

export default function Main() {
  return (
    <main className="main-container">
      <div className="main-top-row">
        <AboutMe />
        <Contact />
      </div>
      <Projects />
    </main>
  );
}
