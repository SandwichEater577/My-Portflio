import { useEffect } from "react";
import "./TrustedBy.css";
import TechniSchoolsLogo from "./TechniSchoolsLogo";
import { trustedBy } from "../Data/data.js";

export default function TrustedBy() {
  useEffect(() => {
    trustedBy.forEach((brand) => {
      if (brand.src) {
        const img = new Image();
        img.src = brand.src;
        if (img.decode) {
          img.decode().catch(() => {});
        }
      }
    });
  }, []);

  const renderLogo = (brand) =>
    brand.type === "custom" ? (
      <TechniSchoolsLogo className="trusted-logo-svg" />
    ) : (
      <img
        src={brand.src}
        alt={brand.name}
        className="trusted-logo-img"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    );

  return (
    <section className="trusted-section" id="trusted">
      <p className="trusted-text">Trusted by</p>

      <div className="trusted-marquee-container">
        <div className="trusted-marquee-track">
          <div className="marquee-group">
            {trustedBy.map((brand) => (
              <div key={brand.id} className="trusted-logo-wrapper">
                {renderLogo(brand)}
              </div>
            ))}
          </div>

          <div className="marquee-group" aria-hidden="true">
            {trustedBy.map((brand) => (
              <div key={`dup-${brand.id}`} className="trusted-logo-wrapper">
                {brand.type === "custom" ? (
                  <TechniSchoolsLogo className="trusted-logo-svg" />
                ) : (
                  <img
                    src={brand.src}
                    alt=""
                    className="trusted-logo-img"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
