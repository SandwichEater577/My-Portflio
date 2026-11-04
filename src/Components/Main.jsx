import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";
import Setup from "./Setup.jsx";
import TrustedBy from "./TrustedBy";
import { profile } from "../Data/data.js";
import "./Main.css";

export default function Main({ lang, shineTrigger }) {
  return (
    <>
      <div id="background-container">
        <img id="background-image" src={profile.avatar} alt={profile.name} />
      </div>
      <main className="main-container">
        <div className="main-top-row">
          <AboutMe lang={lang} shineTrigger={shineTrigger} />
          <Contact lang={lang} shineTrigger={shineTrigger} />
        </div>

        <Projects lang={lang} />

        <Setup lang={lang} />

        <TrustedBy />
      </main>
    </>
  );
}
