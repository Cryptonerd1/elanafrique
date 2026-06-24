
import { useState, useEffect, useCallback } from "react";
import type { NavLink } from "../types";
import { Icon } from "./Icons";

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Solutions", href: "#solution" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Inject A-letter favicon via JS */}
      <AFavicon />

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#ffffff",
          transition: "box-shadow 0.3s ease",
          boxShadow: isScrolled
            ? "0 4px 24px rgba(0,0,0,0.10)"
            : "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            {/* Letter-A logo mark */}
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)",
                flexShrink: 0,
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 3L2 21h4l2-4h8l2 4h4L12 3zm-2.5 11L12 8l2.5 6h-5z"
                  fill="#F9A825"
                />
              </svg>
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "1.35rem",
                color: "#1B5E20",
                letterSpacing: "-0.01em",
              }}
            >
              Elan{" "}
              <span style={{ color: "#F9A825" }}>Afrique</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <ul
            className="desktop-nav"
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: "0.15rem",
              alignItems: "center",
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    textDecoration: "none",
                    color: "#1A1A2E",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.92rem",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "6px",
                    transition: "color 0.2s ease, background 0.2s ease",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#F9A825";
                    el.style.background = "#F1F8E9";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#1A1A2E";
                    el.style.background = "transparent";
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                style={{
                  textDecoration: "none",
                  backgroundColor: "#F9A825",
                  color: "#1A1A2E",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  padding: "0.5rem 1.2rem",
                  borderRadius: "50px",
                  marginLeft: "0.5rem",
                  display: "inline-block",
                  transition: "background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "#e89c1f";
                  el.style.transform = "translateY(-1px)";
                  el.style.boxShadow = "0 4px 12px rgba(249,168,37,0.35)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "#F9A825";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                Get Started
              </a>
            </li>
          </ul>

          {/* Hamburger — mobile only */}
          <button
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="hamburger-btn"
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              borderRadius: "6px",
              color: "#1A1A2E",
            }}
          >
            <Icon
              name={isMobileOpen ? "close" : "menu"}
              size={26}
              color="#1A1A2E"
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className="mobile-menu"
          style={{
            maxHeight: isMobileOpen ? "480px" : "0",
            overflow: "hidden",
            transition: "max-height 0.35s ease",
            backgroundColor: "#ffffff",
            borderTop: isMobileOpen ? "1px solid #f0f0f0" : "none",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: "0.5rem 0 1rem",
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    display: "block",
                    padding: "0.85rem 2rem",
                    textDecoration: "none",
                    color: "#1A1A2E",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "1rem",
                    borderBottom: "1px solid #f5f5f5",
                    transition: "color 0.2s ease, background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#F9A825";
                    el.style.background = "#F1F8E9";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#1A1A2E";
                    el.style.background = "transparent";
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li style={{ padding: "1rem 2rem 0.25rem" }}>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                style={{
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                  backgroundColor: "#F9A825",
                  color: "#1A1A2E",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "50px",
                }}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .hamburger-btn { display: flex !important; }
          }
          @media (min-width: 769px) {
            .mobile-menu { display: none !important; }
          }
        `}</style>
      </nav>
    </>
  );
}

/** Injects a canvas-drawn "A" favicon into <head> at runtime. */
function AFavicon() {
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Background circle — deep green
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fillStyle = "#1B5E20";
      ctx.fill();

      // Letter "A" — gold
      ctx.fillStyle = "#F9A825";
      ctx.font = "bold 42px 'Arial', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("A", 32, 34);

      const link: HTMLLinkElement =
        (document.querySelector("link[rel~='icon']") as HTMLLinkElement) ||
        document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      link.href = canvas.toDataURL("image/png");
      document.head.appendChild(link);
    } catch {
      /* non-fatal */
    }
  }, []);

  return null;
}
  