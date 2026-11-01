import { useState } from "react";
import "./Animation.css";

export default function Animation({
  children,
  color = "#ffffff",
  className = "",
  forceActive = false,
  hoverable = true,
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Aktywne, jeśli jest hover (i hover jest dozwolony) LUB wymuszone przez rodzica
  const active = forceActive || (hoverable && isHovered);

  return (
    <div
      className={`animation-wrapper ${active ? "active" : ""} ${className}`}
      onMouseEnter={() => hoverable && setIsHovered(true)}
      onMouseLeave={() => hoverable && setIsHovered(false)}
      style={{ "--ray-color": color }}
    >
      <div className="animation-glow" />
      <div className="animation-content">{children}</div>
    </div>
  );
}
