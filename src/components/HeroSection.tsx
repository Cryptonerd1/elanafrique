
export function HeroSection() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(27,94,32,0.75) 0%, rgba(191,54,12,0.65) 100%)",
          backgroundImage:
            "linear-gradient(135deg, rgba(27,94,32,0.75) 0%, rgba(191,54,12,0.65) 100%), url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "heroBgZoom 20s ease-in-out infinite alternate",
          zIndex: 0,
        }}
      />

      <style>{`
        @keyframes heroBgZoom {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(10px); }
        }
        .hero-btn-primary {
          display: inline-block;
          padding: 0.85rem 2.2rem;
          background: #F9A825;
          color: #1A1A2E;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 8px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .hero-btn-primary:hover {
          background: #e89c1f;
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.18);
        }
        .hero-btn-outline {
          display: inline-block;
          padding: 0.85rem 2.2rem;
          background: transparent;
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 8px;
          text-decoration: none;
          border: 2px solid #fff;
          cursor: pointer;
          transition: background 0.25s, color 0.25s, transform 0.25s;
        }
        .hero-btn-outline:hover {
          background: #fff;
          color: #1B5E20;
          transform: translateY(-3px);
        }
      `}</style>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 820,
          padding: "0 1.5rem",
          animation: "heroFadeUp 1s ease-out both",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem, 7vw, 4rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: "1.25rem",
            letterSpacing: "-0.5px",
          }}
        >
          Unlocking Africa&apos;s Potential Through Technology &amp; Innovation
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            marginBottom: "2.5rem",
            opacity: 0.95,
            lineHeight: 1.7,
          }}
        >
          AI-powered business growth, digital transformation, and tourism
          innovation — built for Africa.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#services" className="hero-btn-primary">
            Explore Our Services
          </a>
          <a href="#about" className="hero-btn-outline">
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          animation: "scrollBounce 2s infinite",
          zIndex: 1,
        }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
  