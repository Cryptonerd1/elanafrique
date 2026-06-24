
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";
import type { IconName } from "../types";

interface StatCard {
  iconName: IconName;
  title: string;
  desc: string;
}

interface VMCard {
  iconName: IconName;
  heading: string;
  text: string;
}

interface ValuePill {
  label: string;
}

const STATS: StatCard[] = [
  {
    iconName: "globe",
    title: "Pan-African Reach",
    desc: "Connecting destinations across the continent to global markets",
  },
  {
    iconName: "gear",
    title: "AI-Powered Solutions",
    desc: "Intelligent tools that transform tourism and business operations",
  },
  {
    iconName: "chart",
    title: "End-to-End Growth",
    desc: "Comprehensive support from strategy to execution and beyond",
  },
];

const VM_CARDS: VMCard[] = [
  {
    iconName: "star",
    heading: "Our Vision",
    text: "To position Africa as the world's most desired and accessible travel destination, powered by innovative technology and authentic cultural experiences.",
  },
  {
    iconName: "shield",
    heading: "Our Mission",
    text: "To empower African tourism stakeholders and businesses with AI-driven solutions, digital transformation services, and strategic growth support.",
  },
];

const VALUES: ValuePill[] = [
  { label: "Innovation" },
  { label: "Excellence" },
  { label: "Integrity" },
  { label: "Collaboration" },
  { label: "Sustainability" },
  { label: "Impact" },
];

function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold, rootMargin: "0px 0px -30px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function StatCardItem({ card, index }: { card: StatCard; index: number }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        background: "#fff",
        borderRadius: "14px",
        padding: "2rem 1.5rem",
        textAlign: "center",
        boxShadow: "0 4px 18px rgba(0,0,0,0.07)",
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms, box-shadow 0.3s ease`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 18px rgba(0,0,0,0.07)";
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#F1F8E9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1rem",
        }}
      >
        <Icon name={card.iconName} size={28} color="#1B5E20" />
      </div>
      <h4
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#1B5E20",
          fontSize: "1.05rem",
          marginBottom: "0.5rem",
        }}
      >
        {card.title}
      </h4>
      <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.7 }}>{card.desc}</p>
    </div>
  );
}

export function AboutSection() {
  const headingFade = useFadeIn(0.2);
  const imgFade = useFadeIn(0.1);
  const textFade = useFadeIn(0.1);

  return (
    <section id="about" style={{ padding: "5rem 2rem", background: "#FAFAF5" }}>
      <style>{`
        .about-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto 3rem;
        }
        .vm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          max-width: 700px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .about-two-col { grid-template-columns: 1fr; }
          .vm-grid { grid-template-columns: 1fr; }
          .values-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .vm-card {
          background: #fff;
          border-radius: 14px;
          padding: 2.25rem;
          box-shadow: 0 4px 18px rgba(0,0,0,0.07);
          border-left: 4px solid #F9A825;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .vm-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(0,0,0,0.11);
        }
        .value-pill {
          background: linear-gradient(135deg, #1B5E20, #BF360C);
          color: #fff;
          padding: 0.6rem 1rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          text-align: center;
          transition: transform 0.25s, box-shadow 0.25s;
          cursor: default;
        }
        .value-pill:hover {
          transform: scale(1.06);
          box-shadow: 0 6px 18px rgba(0,0,0,0.15);
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Heading */}
        <div
          ref={headingFade.ref}
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            opacity: headingFade.visible ? 1 : 0,
            transform: headingFade.visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p
            style={{
              color: "#F9A825",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Who We Are
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#1A1A2E",
            }}
          >
            Technology Meets African Opportunity
          </h2>
        </div>

        {/* Two-column */}
        <div className="about-two-col">
          <div
            ref={imgFade.ref}
            style={{
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.14)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              opacity: imgFade.visible ? 1 : 0,
              transform: imgFade.visible ? "translateX(0)" : "translateX(-24px)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800"
              alt="African business innovation"
              style={{ width: "100%", height: 400, objectFit: "cover", display: "block" }}
            />
          </div>
          <div
            ref={textFade.ref}
            style={{
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
              opacity: textFade.visible ? 1 : 0,
              transform: textFade.visible ? "translateX(0)" : "translateX(24px)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#1B5E20",
                fontSize: "1.6rem",
                marginBottom: "1.25rem",
              }}
            >
              Our Story
            </h3>
            <p style={{ color: "#555", lineHeight: 1.9, marginBottom: "1.25rem", fontFamily: "'DM Sans', sans-serif" }}>
              Elan Afrique is a pioneering technology and tourism innovation company headquartered at Unizik in Awka, Nigeria. We are dedicated to transforming how Africa is perceived and experienced globally by combining cutting-edge AI technology with deep cultural understanding.
            </p>
            <p style={{ color: "#555", lineHeight: 1.9, marginBottom: "1.25rem", fontFamily: "'DM Sans', sans-serif" }}>
              We believe in the untapped potential of African tourism and the continent&apos;s capacity to lead the global digital transformation. Our integrated approach bridges technology, tourism, and business development to create sustainable growth opportunities.
            </p>
            <p style={{ color: "#555", lineHeight: 1.9, fontFamily: "'DM Sans', sans-serif" }}>
              Through data-driven insights, innovative solutions, and a commitment to excellence, we empower African destinations, businesses, and communities to thrive in the digital economy and attract global audiences.
            </p>
          </div>
        </div>

        {/* Stat cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {STATS.map((card, i) => (
            <StatCardItem key={card.title} card={card} index={i} />
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="vm-grid">
          {VM_CARDS.map((card) => (
            <div key={card.heading} className="vm-card">
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "#F1F8E9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon name={card.iconName} size={22} color="#1B5E20" />
                </div>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#1B5E20",
                    fontSize: "1.15rem",
                    margin: 0,
                  }}
                >
                  {card.heading}
                </h4>
              </div>
              <p style={{ color: "#666", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div style={{ textAlign: "center" }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1B5E20",
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            Core Values
          </h3>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div key={v.label} className="value-pill">
                {v.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
  