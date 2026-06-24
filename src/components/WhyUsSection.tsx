
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";
import type { IconName } from "../types";

interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: IconName;
}

const FEATURES: Feature[] = [
  {
    id: "africa-understanding",
    title: "Deep Understanding of Africa",
    description:
      "Rooted in African soil with authentic knowledge of local markets, cultures, and opportunities across the continent.",
    iconName: "globe",
  },
  {
    id: "tech-driven",
    title: "Technology-Driven Approach",
    description:
      "Cutting-edge tools and methodologies that deliver measurable results and competitive advantage in the digital landscape.",
    iconName: "gear",
  },
  {
    id: "ai-marketing",
    title: "AI-Powered Marketing",
    description:
      "Intelligent automation and data analytics that optimize campaigns, reduce costs, and maximize ROI for tourism businesses.",
    iconName: "lightbulb",
  },
  {
    id: "global-local",
    title: "Global Reach, Local Expertise",
    description:
      "International connections paired with deep local knowledge to position African destinations on the world stage.",
    iconName: "people",
  },
  {
    id: "sustainable",
    title: "Sustainable Tourism Focus",
    description:
      "Commitment to responsible tourism development that benefits communities, protects environments, and creates lasting impact.",
    iconName: "leaf",
  },
  {
    id: "end-to-end",
    title: "End-to-End Solutions",
    description:
      "From strategy and marketing to technology and training — comprehensive support across every stage of your journey.",
    iconName: "check",
  },
];

function FeatureBlock({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "16px",
        padding: "2rem",
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "rgba(255,255,255,0.12)";
        el.style.borderColor = "#F9A825";
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "rgba(255,255,255,0.07)";
        el.style.borderColor = "rgba(255,255,255,0.12)";
        el.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "10px",
          background: "rgba(249,168,37,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon name={feature.iconName} size={24} color="#F9A825" />
      </div>

      <div>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "0.5rem",
            lineHeight: 1.3,
          }}
        >
          {feature.title}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.88rem",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export function WhyUsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      style={{
        background: "#1B5E20",
        padding: "5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          ref={headingRef}
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#F9A825",
              marginBottom: "0.75rem",
            }}
          >
            Why Elan Afrique?
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Why Choose Us
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.75)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            We combine authentic African insight with world-class technology to
            deliver results that matter — for destinations, businesses, and
            communities alike.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="why-us-grid"
        >
          {FEATURES.map((feature, index) => (
            <FeatureBlock key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .why-us-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 641px) and (max-width: 960px) {
          .why-us-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
  