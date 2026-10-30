import { projects } from "../Data/data.js";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">Selected Projects</h2>
        <p className="projects-subtitle">Things I've built and shipped.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
            key={project.id}
          >
            <div className="project-card-header">
              <h3 className="project-card-title">{project.title}</h3>
              <FaGithub className="project-icon" />
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
