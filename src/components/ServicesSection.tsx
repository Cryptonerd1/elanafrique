
import { useEffect, useRef, useState } from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  iconPath: string;
}

const SERVICES: Service[] = [
  {
    id: "tourism-marketing",
    title: "Tourism Marketing & Destination Promotion",
    description:
      "Showcase Africa's rich culture and landscapes to global audiences through strategic marketing campaigns and digital storytelling.",
    iconPath:
      "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  },
  {
    id: "travel-experiences",
    title: "Curated Travel Experiences",
    description:
      "Unforgettable journeys for leisure, adventure, business, and diaspora travelers designed with authentic African experiences.",
    iconPath:
      "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
  },
  {
    id: "ai-marketing",
    title: "AI-Powered Tourism Marketing",
    description:
      "Data-driven campaigns that reach the right audience and increase bookings through intelligent automation and predictive analytics.",
    iconPath:
      "M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5 2.5 2.5 0 0 0 7.5 18 2.5 2.5 0 0 0 10 15.5 2.5 2.5 0 0 0 7.5 13m9 0A2.5 2.5 0 0 0 14 15.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 16.5 13z",
  },
  {
    id: "digital-solutions",
    title: "Digital Tourism Solutions",
    description:
      "Smart booking systems, customer tools, and automated travel support that streamline operations and enhance guest experiences.",
    iconPath:
      "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z",
  },
  {
    id: "business-development",
    title: "Tourism Business Development",
    description:
      "Strategic growth planning, market expansion, and partnership development to scale your tourism business sustainably.",
    iconPath:
      "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
  },
  {
    id: "corporate-travel",
    title: "Corporate & Group Travel Management",
    description:
      "End-to-end planning for conferences, retreats, and cultural tours with seamless logistics and memorable experiences.",
    iconPath:
      "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z",
  },
  {
    id: "training",
    title: "Tourism Training & Capacity Building",
    description:
      "Modern skills development in digital tourism, AI adoption, and destination management for sustainable industry growth.",
    iconPath:
      "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z",
  },
];

function ServiceCardItem({ service, index }: { service: Service; index: number }) {
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "2rem",
        boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms, box-shadow 0.3s ease`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 16px 40px rgba(27,94,32,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 4px 16px rgba(0,0,0,0.07)";
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

      {/* Icon circle */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "12px",
          background: "#F1F8E9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="#1B5E20"
          aria-hidden="true"
        >
          <path d={service.iconPath} />
        </svg>
      </div>

      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
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

      <a
        href="#contact"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          color: "#1B5E20",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: "0.85rem",
          textDecoration: "none",
          transition: "gap 0.2s ease",
          marginTop: "auto",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.gap = "0.75rem";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.gap = "0.4rem";
        }}
      >
        Learn More
        <svg viewBox="0 0 24 24" width="16" height="16" fill="#1B5E20">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
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
      id="services"
      style={{
        background: "#F1F8E9",
        padding: "5rem 1.5rem",
      }}
    >
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
            From destination marketing to AI-powered analytics, we deliver
            end-to-end solutions that elevate African tourism on the global stage.
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
            <ServiceCardItem key={service.id} service={service} index={index} />
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
  