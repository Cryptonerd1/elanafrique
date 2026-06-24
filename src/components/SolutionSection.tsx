
import { Icon } from "./Icons";

const steps = [
  {
    num: 1,
    title: "Destination Visibility & Global Promotion",
    desc: "Strategic marketing that showcases Africa's beauty and culture to international audiences",
    iconName: "globe" as const,
  },
  {
    num: 2,
    title: "AI-Powered Traveler Insights",
    desc: "Data-driven understanding of what travelers want and how to reach them effectively",
    iconName: "lightbulb" as const,
  },
  {
    num: 3,
    title: "Smart Travel Planning",
    desc: "Seamless booking systems and digital tools that enhance the entire traveler journey",
    iconName: "chart" as const,
  },
  {
    num: 4,
    title: "Tourism Ecosystem Development",
    desc: "Building networks and partnerships that strengthen the entire African tourism industry",
    iconName: "people" as const,
  },
  {
    num: 5,
    title: "Data-Driven Growth",
    desc: "Continuous optimization and scaling based on real-time insights and market feedback",
    iconName: "chart" as const,
  },
];

export function SolutionSection() {
  return (
    <section id="solution" style={{ padding: "5rem 2rem", background: "#FAFAF5" }}>
      <style>{`
        .solution-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .solution-grid { grid-template-columns: 1fr; }
        }
        .step-row {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          padding: 1.25rem;
          border-radius: 10px;
          transition: background 0.25s;
        }
        .step-row:hover { background: #F1F8E9; }
      `}</style>

      <div className="solution-grid">
        {/* Left text */}
        <div>
          <p
            style={{
              color: "#F9A825",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Our Approach
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem,4vw,2.6rem)",
              color: "#1B5E20",
              marginBottom: "1.5rem",
              lineHeight: 1.2,
            }}
          >
            Making Africa the World&apos;s Most Desired Travel Destination
          </h2>
          <p style={{ color: "#555", lineHeight: 1.9, marginBottom: "1.25rem" }}>
            The global tourism industry is worth over $1 trillion annually, yet
            Africa captures less than 6% of international arrivals. This isn&apos;t a
            reflection of what Africa has to offer — it&apos;s a visibility and
            accessibility challenge.
          </p>
          <p style={{ color: "#555", lineHeight: 1.9 }}>
            Elan Afrique bridges this gap by combining world-class AI technology
            with authentic African storytelling. We help destinations, hospitality
            businesses, and travel operators reach global audiences, convert
            interest into bookings, and build sustainable tourism ecosystems that
            benefit entire communities.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <img
              src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800"
              alt="African landscape"
              style={{
                width: "100%",
                borderRadius: 12,
                objectFit: "cover",
                height: 220,
                boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
              }}
            />
          </div>
        </div>

        {/* Right steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {steps.map((step) => (
            <div key={step.num} className="step-row">
              {/* Number badge with icon overlay */}
              <div
                style={{
                  minWidth: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#F9A825,#e89c1f)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(249,168,37,0.35)",
                  position: "relative",
                }}
              >
                <Icon name={step.iconName} size={22} color="#1A1A2E" />
                <span
                  style={{
                    position: "absolute",
                    bottom: -4,
                    right: -4,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "#1B5E20",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 900,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid #FAFAF5",
                  }}
                >
                  {step.num}
                </span>
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#1B5E20",
                    marginBottom: "0.35rem",
                    fontSize: "1.05rem",
                  }}
                >
                  {step.title}
                </h4>
                <p style={{ color: "#666", fontSize: "0.93rem", lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  