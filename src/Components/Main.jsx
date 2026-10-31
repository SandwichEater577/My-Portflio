import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";
import { profile } from "../Data/data.js";
import "./Main.css";

export default function Main() {
  return (
    <>
      <div id="background-container">
        <img id="background-image" src={profile.avatar} alt={profile.name} />
      </div>
      <main className="main-container">
        <div className="main-top-row">
          <AboutMe />
          <Contact />
        </div>
        <Projects />
      </main>
    </>
  );
}
