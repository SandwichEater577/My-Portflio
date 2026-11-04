import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./TrustedBy.css";
import TechniSchoolsLogo from "./TechniSchoolsLogo";
import { trustedBy } from "../Data/data.js";

const SPEED_PX_PER_SEC = 50;

const LOGO_TIMEOUT_MS = 5000;

let cachedLogos = null;
let pendingLogos = null;

function loadLogo(brand) {
  if (brand.type === "custom") return Promise.resolve({ ...brand });

  return new Promise((resolve) => {
    const img = new Image();
    const timer = setTimeout(() => resolve(null), LOGO_TIMEOUT_MS);

    img.onload = async () => {
      try {
        await img.decode();
      } catch {}
      clearTimeout(timer);
      resolve({
        ...brand,
        ratio:
          img.naturalWidth && img.naturalHeight
            ? img.naturalWidth / img.naturalHeight
            : undefined,
      });
    };

    img.onerror = () => {
      clearTimeout(timer);
      resolve(null);
    };

    img.src = brand.src;
  });
}

async function loadAllLogos() {
  const [logos] = await Promise.all([
    Promise.all(trustedBy.map(loadLogo)),
    document.fonts ? document.fonts.ready : Promise.resolve(),
  ]);
  cachedLogos = logos.filter(Boolean);
  return cachedLogos;
}

function getLogos() {
  if (cachedLogos) return Promise.resolve(cachedLogos);
  if (!pendingLogos) pendingLogos = loadAllLogos();
  return pendingLogos;
}

export default function TrustedBy() {
  const [logos, setLogos] = useState(cachedLogos);
  const [copies, setCopies] = useState(2);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const hoverRef = useRef(false);

  useEffect(() => {
    if (logos) return;
    let cancelled = false;
    getLogos().then((result) => {
      if (!cancelled) setLogos(result);
    });
    return () => {
      cancelled = true;
    };
  }, [logos]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!logos || !track || !container) return;

    const measure = () => {
      const [a, b] = track.children;
      if (!a || !b) return;
      const period =
        b.getBoundingClientRect().left - a.getBoundingClientRect().left;
      if (period <= 0) return;
      const needed = Math.max(2, Math.ceil(container.clientWidth / period) + 1);
      setCopies((prev) => (prev === needed ? prev : needed));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    observer.observe(track.children[0]);
    return () => observer.disconnect();
  }, [logos]);

  useEffect(() => {
    if (!logos) return;
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf;
    let last = performance.now();

    const tick = (now) => {
      const dt = Math.min(now - last, 50) / 1000;
      last = now;

      const [a, b] = track.children;
      if (a && b && !hoverRef.current) {
        const period =
          b.getBoundingClientRect().left - a.getBoundingClientRect().left;
        if (period > 0) {
          offsetRef.current =
            (offsetRef.current + SPEED_PX_PER_SEC * dt) % period;
          track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [logos]);

  if (logos && logos.length === 0) return null;

  const renderLogo = (brand) => (
    <div key={brand.id} className="trusted-logo-wrapper">
      {brand.type === "custom" ? (
        <TechniSchoolsLogo className="trusted-logo-svg" />
      ) : (
        <img
          src={brand.src}
          alt={brand.name}
          className="trusted-logo-img"
          style={brand.ratio ? { aspectRatio: brand.ratio } : undefined}
          decoding="async"
          draggable={false}
        />
      )}
    </div>
  );

  return (
    <section className="trusted-section" id="trusted">
      <p className="trusted-text">Trusted by</p>

      <div
        className="trusted-marquee-container"
        ref={containerRef}
        onMouseEnter={() => {
          hoverRef.current = true;
        }}
        onMouseLeave={() => {
          hoverRef.current = false;
        }}
      >
        <div className="trusted-marquee-viewport">
          <div
            className={`trusted-marquee-track${logos ? " is-ready" : ""}`}
            ref={trackRef}
          >
            {Array.from({ length: copies }, (_, i) => (
              <div
                key={i}
                className="marquee-group"
                aria-hidden={i > 0 ? true : undefined}
              >
                {logos ? logos.map(renderLogo) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
