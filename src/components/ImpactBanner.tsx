
export function ImpactBanner() {
  return (
    <section
      style={{
        background: "#F9A825",
        padding: "4.5rem 2rem",
        textAlign: "center",
      }}
    >
      <style>{`
        .impact-btn {
          display: inline-block;
          padding: 0.85rem 2.4rem;
          background: #1B5E20;
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 8px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .impact-btn:hover {
          background: #0d3a12;
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.18);
        }
      `}</style>

      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem,5vw,3rem)",
            color: "#1A1A2E",
            marginBottom: "1rem",
            fontWeight: 900,
          }}
        >
          Discover Africa. Experience Excellence.
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#1A1A2E", marginBottom: "2rem", opacity: 0.85 }}>
          Connecting the world to Africa through innovation.
        </p>
        <a href="#contact" className="impact-btn">
          Partner With Us →
        </a>
      </div>
    </section>
  );
}
  