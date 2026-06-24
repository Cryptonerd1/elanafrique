
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";
import type { IconName } from "../types";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: IconName;
}

const SERVICES: ServiceItem[] = [
  {
    id: "tourism-marketing",
    title: "Tourism Marketing & Destination Promotion",
    description:
      "Showcase Africa's rich culture and landscapes to global audiences through strategic marketing campaigns and digital storytelling.",
    iconName: "location",
  },
  {
    id: "travel-experiences",
    title: "Curated Travel Experiences",
    description:
      "Unforgettable journeys for leisure, adventure, business, and diaspora travelers designed with authentic African experiences.",
    iconName: "star",
  },
  {
    id: "ai-marketing",
    title: "AI-Powered Tourism Marketing",
    description:
      "Data-driven campaigns that reach the right audience and increase bookings through intelligent automation and predictive analytics.",
    iconName: "gear",
  },
  {
    id: "digital-solutions",
    title: "Digital Tourism Solutions",
    description:
      "Smart booking systems, customer tools, and automated travel support that streamline operations and enhance guest experiences.",
    iconName: "lightbulb",
  },
  {
    id: "business-development",
    title: "Tourism Business Development",
    description:
      "Strategic growth planning, market expansion, and partnership development to scale your tourism business sustainably.",
    iconName: "chart",
  },
  {
    id: "corporate-travel",
    title: "Corporate & Group Travel Management",
    description:
      "End-to-end planning for conferences, retreats, and cultural tours with seamless logistics and memorable experiences.",
    iconName: "people",
  },
  {
    id: "training",
    title: "Tourism Training & Capacity Building",
    description:
      "Modern skills development in digital tourism, AI adoption, and destination management for sustainable industry growth.",
    iconName: "shield",
  },
];

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "2rem 1.75rem",
        boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        position: "relative",
        overflow: "hidden",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms, box-shadow 0.3s ease`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 18px 42px rgba(27,94,32,0.14)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)";
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #1B5E20, #F9A825)",
          borderRadius: "16px 16px 0 0",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: "54px",
          height: "54px",
          borderRadius: "12px",
          background: "#F1F8E9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon name={service.iconName} size={28} color="#1B5E20" />
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.08rem",
            fontWeight: 700,
            color: "#1A1A2E",
            marginBottom: "0.5rem",
            lineHeight: 1.3,
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.9rem",
            color: "#555",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {service.description}
        </p>
      </div>

      {/* Learn more link */}
      <a
        href="#contact"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.35rem",
          color: "#1B5E20",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: "0.85rem",
          textDecoration: "none",
          marginTop: "auto",
          transition: "gap 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.gap = "0.7rem";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.gap = "0.35rem";
        }}
      >
        Learn More
        <Icon name="arrow" size={16} color="#1B5E20" />
      </a>
    </div>
  );
}

export function ServicesSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setHeadingVisible(true); obs.disconnect(); }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" style={{ background: "#F1F8E9", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
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
            What We Do
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#1A1A2E",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Comprehensive Solutions Across Tourism &amp; Digital Transformation
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "#555",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            From destination marketing to AI-powered analytics, we deliver end-to-end solutions that elevate African tourism on the global stage.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #services > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          #services > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
  