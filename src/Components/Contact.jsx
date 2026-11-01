import { useState, useEffect } from "react";
import { socials, translations } from "../Data/data.js";
import Animation from "./Animation.jsx";
import "./Contact.css";
import {
  FaGithub,
  FaDiscord,
  FaEnvelope,
  FaSlack,
  FaInstagram,
} from "react-icons/fa";

const iconMap = {
  GitHub: <FaGithub />,
  Discord: <FaDiscord />,
  "School Email": <FaEnvelope />,
  Slack: <FaSlack />,
  Instagram: <FaInstagram />,
};

export default function Contact({ lang, shineTrigger }) {
  const t = translations[lang].contact;
  const [isShining, setIsShining] = useState(false);

  useEffect(() => {
    if (shineTrigger.id === "contact") {
      setIsShining(true);
      const timer = setTimeout(() => setIsShining(false), 2000);
      return () => clearTimeout(timer);
    } else {
      setIsShining(false); // Reset, jeśli kliknięto inny przycisk
    }
  }, [shineTrigger.id, shineTrigger.key]);

  return (
    <section className="contact-section" id="contact">
      <Animation
        color="#a52a2a"
        className="contact-card"
        forceActive={isShining}
        hoverable={false}
      >
        <div className="contact-header">
          <h2 className="contact-title">{t.title}</h2>
          <p className="contact-subtitle">{t.subtitle}</p>
        </div>

        <div className="contact-links">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Animation color={social.color} className="contact-link">
                <span className="contact-icon">{iconMap[social.name]}</span>
                <div className="contact-link-info">
                  <span className="contact-link-name">{social.name}</span>
                  <span className="contact-link-url">
                    {social.display ?? social.url.replace("mailto:", "")}
                  </span>
                </div>
              </Animation>
            </a>
          ))}
        </div>
      </Animation>
    </section>
  );
}
