
export function AboutSection() {
  const stats = [
    { icon: "🌍", title: "Pan-African Reach", desc: "Connecting destinations across the continent to global markets" },
    { icon: "🤖", title: "AI-Powered Solutions", desc: "Intelligent tools that transform tourism and business operations" },
    { icon: "🚀", title: "End-to-End Growth", desc: "Comprehensive support from strategy to execution and beyond" },
  ];

  const values = ["Innovation", "Excellence", "Integrity", "Collaboration", "Sustainability", "Impact"];

  return (
    <section id="about" style={{ padding: "5rem 2rem", background: "#FAFAF5" }}>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto 3rem;
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; }
          .vm-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        .stat-card {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 8px 24px rgba(0,0,0,0.07);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .stat-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); }
        .vm-card {
          background: #fff;
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: 0 8px 24px rgba(0,0,0,0.07);
          border-left: 4px solid #F9A825;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .vm-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); }
        .value-pill {
          background: linear-gradient(135deg, #1B5E20, #BF360C);
          color: #fff;
          padding: 0.6rem 1.4rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          text-align: center;
          transition: transform 0.25s, box-shadow 0.25s;
          cursor: default;
        }
        .value-pill:hover { transform: scale(1.06); box-shadow: 0 6px 18px rgba(0,0,0,0.15); }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#F9A825", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Who We Are
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#1A1A2E", marginBottom: "0" }}>
            Technology Meets African Opportunity
          </h2>
        </div>

        {/* Two-column */}
        <div className="about-grid">
          <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}>
            <img
              src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800"
              alt="African business innovation"
              style={{ width: "100%", height: 400, objectFit: "cover", display: "block" }}
            />
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#1B5E20", fontSize: "1.6rem", marginBottom: "1.25rem" }}>
              Our Story
            </h3>
            <p style={{ color: "#555", lineHeight: 1.9, marginBottom: "1.25rem" }}>
              Elan Afrique is a pioneering technology and tourism innovation company headquartered at Unizik in Awka, Nigeria. We are dedicated to transforming how Africa is perceived and experienced globally by combining cutting-edge AI technology with deep cultural understanding.
            </p>
            <p style={{ color: "#555", lineHeight: 1.9, marginBottom: "1.25rem" }}>
              We believe in the untapped potential of African tourism and the continent&apos;s capacity to lead the global digital transformation. Our integrated approach bridges technology, tourism, and business development to create sustainable growth opportunities across the continent.
            </p>
            <p style={{ color: "#555", lineHeight: 1.9 }}>
              Through data-driven insights, innovative solutions, and a commitment to excellence, we empower African destinations, businesses, and communities to thrive in the digital economy and attract global audiences.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "2rem", marginBottom: "3rem" }}>
          {stats.map((s) => (
            <div key={s.title} className="stat-card">
              <div style={{ fontSize: "2.4rem", marginBottom: "0.75rem" }}>{s.icon}</div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", color: "#1B5E20", marginBottom: "0.5rem" }}>{s.title}</h4>
              <p style={{ color: "#666", fontSize: "0.95rem" }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="vm-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
          <div className="vm-card">
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: "#1B5E20", fontSize: "1.2rem", marginBottom: "0.75rem" }}>
              🎯 Our Vision
            </h4>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              To position Africa as the world&apos;s most desired and accessible travel destination, powered by innovative technology and authentic cultural experiences.
            </p>
          </div>
          <div className="vm-card">
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: "#1B5E20", fontSize: "1.2rem", marginBottom: "0.75rem" }}>
              💪 Our Mission
            </h4>
            <p style={{ color: "#666", lineHeight: 1.8 }}>
              To empower African tourism stakeholders and businesses with AI-driven solutions, digital transformation services, and strategic growth support.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#1B5E20", fontSize: "1.5rem", marginBottom: "1.5rem" }}>
            Core Values
          </h3>
          <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem", maxWidth: 700, margin: "0 auto" }}>
            {values.map((v) => (
              <div key={v} className="value-pill">{v}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
  