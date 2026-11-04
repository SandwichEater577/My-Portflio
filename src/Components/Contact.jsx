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
  FaCopy,
  FaCheck,
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
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    if (shineTrigger.id === "contact") {
      setIsShining(true);
      const timer = setTimeout(() => setIsShining(false), 2000);
      return () => clearTimeout(timer);
    } else {
      setIsShining(false);
    }
  }, [shineTrigger.id, shineTrigger.key]);

  const handleCopy = async (e, text, id) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

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
          {socials.map((social) => {
            const textToCopy = social.url.replace("mailto:", "");
            const isCopied = copiedId === social.name;

            return (
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
                    <span className="contact-link-url">{textToCopy}</span>
                  </div>
                  <button
                    className="copy-button"
                    onClick={(e) => handleCopy(e, textToCopy, social.name)}
                    title="Copy to clipboard"
                  >
                    {isCopied ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FaCopy />
                    )}
                  </button>
                </Animation>
              </a>
            );
          })}
        </div>
      </Animation>
    </section>
  );
}
