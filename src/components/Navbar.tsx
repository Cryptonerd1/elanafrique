
import { useState, useEffect, useCallback } from "react";
import type { NavLink } from "../types";

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
          {/* Africa SVG icon */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="16" cy="16" r="16" fill="#1B5E20" />
            {/* Simplified Africa continent silhouette */}
            <path
              d="M13 6.5c-.6.2-1.2.8-1.4 1.4-.2.6 0 1.3-.3 1.8-.3.5-1 .7-1.2 1.3-.2.6.2 1.2.1 1.8-.1.6-.7 1-.8 1.6-.1.6.3 1.2.5 1.8.2.6.1 1.3.4 1.8.3.5.9.8 1.3 1.2.4.4.6 1 1.1 1.3.5.3 1.1.2 1.6.4.5.2.9.7 1.4.8.5.1 1-.2 1.5-.2s1 .4 1.5.3c.5-.1.8-.6 1.2-.9.4-.3.9-.4 1.2-.8.3-.4.3-1 .5-1.4.2-.4.6-.8.7-1.3.1-.5-.1-1 0-1.5.1-.5.5-.9.5-1.4 0-.5-.3-1-.4-1.5-.1-.5 0-1-.2-1.5-.2-.5-.7-.8-.9-1.3-.2-.5-.1-1.1-.4-1.5-.3-.4-.8-.6-1.2-.9-.4-.3-.7-.7-1.1-.9-.4-.2-.9-.1-1.3-.2C14.1 6.2 13.6 6.3 13 6.5z"
              fill="#F9A825"
            />
          </svg>
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
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "0.25rem",
            alignItems: "center",
          }}
          className="desktop-nav"
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
                  fontSize: "0.95rem",
                  padding: "0.4rem 0.85rem",
                  borderRadius: "6px",
                  transition: "color 0.2s ease, background 0.2s ease",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F9A825";
                  (e.currentTarget as HTMLAnchorElement).style.background = "#F1F8E9";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#1A1A2E";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
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
                fontSize: "0.9rem",
                padding: "0.5rem 1.25rem",
                borderRadius: "50px",
                marginLeft: "0.5rem",
                display: "inline-block",
                transition: "background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#e89c1f";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 12px rgba(249,168,37,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F9A825";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
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
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            borderRadius: "6px",
          }}
          className="hamburger-btn"
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2.5px",
              backgroundColor: "#1A1A2E",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: isMobileOpen ? "rotate(45deg) translate(5.5px, 5.5px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2.5px",
              backgroundColor: "#1A1A2E",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              opacity: isMobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2.5px",
              backgroundColor: "#1A1A2E",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: isMobileOpen ? "rotate(-45deg) translate(5.5px, -5.5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        style={{
          maxHeight: isMobileOpen ? "420px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          backgroundColor: "#ffffff",
          borderTop: isMobileOpen ? "1px solid #f0f0f0" : "none",
        }}
        className="mobile-menu"
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
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F9A825";
                  (e.currentTarget as HTMLAnchorElement).style.background = "#F1F8E9";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#1A1A2E";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
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

      {/* Responsive style injection */}
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
  );
}
  