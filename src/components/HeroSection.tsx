
import { Icon } from "./Icons";

export function HeroSection() {
  const handleScroll = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",
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
          backgroundImage:
            "linear-gradient(135deg, rgba(27,94,32,0.78) 0%, rgba(191,54,12,0.68) 100%), url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600')",
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
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          background: #F9A825;
          color: #1A1A2E;
          font-weight: 700;
          font-size: 0.97rem;
          border-radius: 8px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
          font-family: "DM Sans", sans-serif;
        }
        .hero-btn-primary:hover {
          background: #e89c1f;
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.22);
        }
        .hero-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          background: transparent;
          color: #fff;
          font-weight: 700;
          font-size: 0.97rem;
          border-radius: 8px;
          text-decoration: none;
          border: 2px solid rgba(255,255,255,0.85);
          cursor: pointer;
          transition: background 0.25s, color 0.25s, transform 0.25s, border-color 0.25s;
          font-family: "DM Sans", sans-serif;
        }
        .hero-btn-outline:hover {
          background: #fff;
          color: #1B5E20;
          border-color: #fff;
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
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            background: "rgba(249,168,37,0.18)",
            border: "1px solid rgba(249,168,37,0.4)",
            borderRadius: "50px",
            padding: "0.35rem 1rem",
            marginBottom: "1.5rem",
          }}
        >
          <Icon name="globe" size={14} color="#F9A825" />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F9A825",
            }}
          >
            Where African Tourism Meets Technology
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 7vw, 4rem)",
            fontWeight: 900,
            lineHeight: 1.13,
            marginBottom: "1.25rem",
            letterSpacing: "-0.5px",
            color: "#ffffff",
          }}
        >
          Unlocking Africa&apos;s Potential Through Technology &amp; Innovation
        </h1>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            marginBottom: "2.5rem",
            opacity: 0.92,
            lineHeight: 1.75,
            maxWidth: 640,
            margin: "0 auto 2.5rem",
          }}
        >
          AI-powered business growth, digital transformation, and tourism
          innovation — built for Africa.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#services"
            className="hero-btn-primary"
            onClick={handleScroll("#services")}
          >
            <Icon name="globe" size={16} color="#1A1A2E" />
            Explore Our Services
          </a>
          <a
            href="#about"
            className="hero-btn-outline"
            onClick={handleScroll("#about")}
          >
            <Icon name="arrow" size={16} color="#fff" />
            Learn More
          </a>
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "people" as const, label: "Pan-African Reach" },
            { icon: "lightbulb" as const, label: "AI-Powered Solutions" },
            { icon: "leaf" as const, label: "Sustainable Tourism" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50px",
                padding: "0.4rem 0.9rem",
              }}
            >
              <Icon name={icon} size={14} color="#F9A825" />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {label}
              </span>
            </div>
          ))}
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.3rem",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Scroll
        </span>
        <Icon name="arrow" size={20} color="rgba(255,255,255,0.7)" />
      </div>
    </section>
  );
}
  