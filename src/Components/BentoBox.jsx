import { projects } from "./../Data/LayoutData.js";
import "./BentoBox.css";

export default function BentoBox() {
  return (
    <div id="bento-box">
      {projects.length <= 0 ? (
        <div>{`:(`}</div>
      ) : (
        projects.map((project, index) => (
          <div
            className={`bento-tile ${"tile-" + (index + 1)}`}
            key={project.id}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
