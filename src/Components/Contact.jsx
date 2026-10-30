import { socials } from "../Data/data.js";
import "./Contact.css";
import { FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";

const iconMap = {
  GitHub: <FaGithub />,
  Discord: <FaDiscord />,
  "School Email": <FaEnvelope />,
};

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <div className="contact-header">
          <h2 className="contact-title">Let's connect.</h2>
          <p className="contact-subtitle">
            Want to collaborate on a project, ask a question, or just say hi?
            Feel free to reach out through any of these platforms.
          </p>
        </div>

        <div className="contact-links">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              style={{ "--social-color": social.color }}
            >
              <div className="contact-link-content">
                <span className="contact-icon">{iconMap[social.name]}</span>
                <div className="contact-link-info">
                  <span className="contact-link-name">{social.name}</span>
                  <span className="contact-link-url">
                    {social.display ?? social.url.replace("mailto:", "")}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
