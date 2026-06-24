
import { useCallback } from "react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  { label: "Tourism Marketing", href: "#services" },
  { label: "Travel Experiences", href: "#services" },
  { label: "AI Solutions", href: "#services" },
  { label: "Digital Tools", href: "#services" },
  { label: "Training & Capacity", href: "#services" },
];

// Flat-icon style SVGs — single color (#F9A825)
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
        fill="#F9A825"
      />
      <circle cx="4" cy="4" r="2" fill="#F9A825" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="#F9A825"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#F9A825" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="4" stroke="#F9A825" strokeWidth="2" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="#F9A825" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        fill="#F9A825"
      />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { href: "https://linkedin.com", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://twitter.com", label: "Twitter / X", Icon: TwitterIcon },
  { href: "https://instagram.com", label: "Instagram", Icon: InstagramIcon },
  { href: "https://facebook.com", label: "Facebook", Icon: FacebookIcon },
];

export function Footer() {
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  const linkStyle: React.CSSProperties = {
    color: "#aaaaaa",
    textDecoration: "none",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    lineHeight: "1.6",
    transition: "color 0.2s ease",
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    color: "#F9A825",
    fontSize: "1.05rem",
    fontWeight: 700,
    marginBottom: "1.25rem",
    marginTop: 0,
  };

  return (
    <footer style={{ backgroundColor: "#0D1B0F", color: "#ffffff" }}>
      {/* Main grid */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "4rem 2rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {/* Column 1 — Logo + tagline */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="16" fill="#1B5E20" />
              <path
                d="M13 6.5c-.6.2-1.2.8-1.4 1.4-.2.6 0 1.3-.3 1.8-.3.5-1 .7-1.2 1.3-.2.6.2 1.2.1 1.8-.1.6-.7 1-.8 1.6-.1.6.3 1.2.5 1.8.2.6.1 1.3.4 1.8.3.5.9.8 1.3 1.2.4.4.6 1 1.1 1.3.5.3 1.1.2 1.6.4.5.2.9.7 1.4.8.5.1 1-.2 1.5-.2s1 .4 1.5.3c.5-.1.8-.6 1.2-.9.4-.3.9-.4 1.2-.8.3-.4.3-1 .5-1.4.2-.4.6-.8.7-1.3.1-.5-.1-1 0-1.5.1-.5.5-.9.5-1.4 0-.5-.3-1-.4-1.5-.1-.5 0-1-.2-1.5-.2-.5-.7-.8-.9-1.3-.2-.5-.1-1.1-.4-1.5-.3-.4-.8-.6-1.2-.9-.4-.3-.7-.7-1.1-.9-.4-.2-.9-.1-1.3-.2C14.1 6.2 13.6 6.3 13 6.5z"
                fill="#F9A825"
              />
            </svg>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "1.25rem",
                color: "#ffffff",
              }}
            >
              Elan <span style={{ color: "#F9A825" }}>Afrique</span>
            </span>
          </div>
          <p
            style={{
              color: "#aaaaaa",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              lineHeight: "1.8",
              marginBottom: "1.5rem",
              marginTop: 0,
            }}
          >
            Where African Tourism Meets Technology. Transforming how the world discovers and
            experiences Africa through innovation and excellence.
          </p>
          {/* Social icons */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  transition: "background 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(249,168,37,0.18)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 style={headingStyle}>Quick Links</h4>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#F9A825";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#aaaaaa";
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Services */}
        <div>
          <h4 style={headingStyle}>Services</h4>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {SERVICE_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#F9A825";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#aaaaaa";
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div>
          <h4 style={headingStyle}>Contact</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
              {/* Location icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: "2px" }} aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#F9A825" />
                <circle cx="12" cy="9" r="2.5" fill="#0D1B0F" />
              </svg>
              <span style={{ color: "#aaaaaa", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", lineHeight: "1.6" }}>
                Unizik, Awka, Anambra State, Nigeria
              </span>
            </div>

            <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
              {/* Globe icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }} aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="#F9A825" strokeWidth="2" fill="none" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#F9A825" strokeWidth="2" fill="none" />
              </svg>
              <a
                href="https://elanafriqe.xyz"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...linkStyle, color: "#F9A825" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#F9A825"; }}
              >
                elanafriqe.xyz
              </a>
            </div>

            <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
              {/* Mail icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }} aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#F9A825" strokeWidth="2" fill="none" />
                <polyline points="22,6 12,13 2,6" stroke="#F9A825" strokeWidth="2" fill="none" />
              </svg>
              <a
                href="mailto:hello@elanafriqe.xyz"
                style={{ ...linkStyle, color: "#F9A825" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#F9A825"; }}
              >
                hello@elanafriqe.xyz
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "1.5rem 2rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <p
          style={{
            color: "#777777",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            margin: 0,
          }}
        >
          &copy; 2026 Elan Afrique. All rights reserved.
        </p>
        <p
          style={{
            color: "#F9A825",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 600,
            margin: 0,
          }}
        >
          Where African Tourism Meets Technology 🌍
        </p>
      </div>
    </footer>
  );
}
  