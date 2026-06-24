
import { useState } from "react";
import { supabase } from "../lib/supabase";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const { error } = await supabase.from("contact_submissions").insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      subject: form.subject,
      message: form.message,
      read: false,
    });

    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
    } else {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }
  };

  const socials = [
    { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
    { label: "Twitter/X", href: "https://twitter.com", icon: "𝕏" },
    { label: "Instagram", href: "https://instagram.com", icon: "📷" },
    { label: "Facebook", href: "https://facebook.com", icon: "f" },
  ];

  return (
    <section id="contact" style={{ padding: "5rem 2rem", background: "#FAFAF5" }}>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
        .contact-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1.5px solid #ddd;
          border-radius: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 1rem;
          background: #fff;
          color: #1A1A2E;
          transition: border-color 0.25s, box-shadow 0.25s;
          box-sizing: border-box;
        }
        .contact-input:focus {
          outline: none;
          border-color: #F9A825;
          box-shadow: 0 0 0 3px rgba(249,168,37,0.15);
        }
        .contact-submit {
          width: 100%;
          padding: 1rem;
          background: #F9A825;
          color: #1A1A2E;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .contact-submit:hover:not(:disabled) {
          background: #e89c1f;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        .contact-submit:disabled { opacity: 0.65; cursor: not-allowed; }
        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #1B5E20;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: background 0.25s, transform 0.25s;
        }
        .social-btn:hover { background: #F9A825; color: #1A1A2E; transform: translateY(-4px); }
      `}</style>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p style={{ color: "#F9A825", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          Get In Touch
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#1A1A2E", marginBottom: "0.75rem" }}>
          Contact Us
        </h2>
        <p style={{ color: "#666", maxWidth: 560, margin: "0 auto" }}>
          We&apos;d love to hear from you. Reach out to discuss how we can help transform your tourism business or destination.
        </p>
      </div>

      <div className="contact-grid">
        {/* Info */}
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#1B5E20", fontSize: "1.4rem", marginBottom: "2rem" }}>
            Contact Information
          </h3>

          {[
            { icon: "📍", label: "Location", value: "Unizik, Awka, Anambra State, Nigeria", href: undefined },
            { icon: "🌐", label: "Website", value: "elanafriqe.xyz", href: "https://elanafriqe.xyz" },
            { icon: "✉️", label: "Email", value: "hello@elanafriqe.xyz", href: "mailto:hello@elanafriqe.xyz" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", gap: "1.25rem", marginBottom: "1.75rem", alignItems: "flex-start" }}>
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
              <div>
                <p style={{ fontWeight: 700, color: "#1A1A2E", marginBottom: "0.2rem" }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} style={{ color: "#1B5E20", textDecoration: "none", fontWeight: 600 }}>
                    {item.value}
                  </a>
                ) : (
                  <p style={{ color: "#666" }}>{item.value}</p>
                )}
              </div>
            </div>
          ))}

          <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#1B5E20", fontSize: "1.2rem", marginBottom: "1rem", marginTop: "2rem" }}>
            Follow Us
          </h3>
          <div style={{ display: "flex", gap: "1rem" }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="social-btn" title={s.label} target="_blank" rel="noopener noreferrer">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {[
            { id: "name", label: "Full Name", type: "text", required: true },
            { id: "email", label: "Email Address", type: "email", required: true },
            { id: "phone", label: "Phone Number", type: "tel", required: false },
          ].map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", color: "#1A1A2E" }}>
                {field.label}
              </label>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                required={field.required}
                value={form[field.id as keyof typeof form]}
                onChange={handleChange}
                className="contact-input"
              />
            </div>
          ))}

          <div>
            <label htmlFor="subject" style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", color: "#1A1A2E" }}>
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              className="contact-input"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="tourism">Tourism Services</option>
              <option value="business">Business Growth</option>
              <option value="partnership">Partnership</option>
              <option value="training">Training</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", color: "#1A1A2E" }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="contact-input"
              style={{ resize: "vertical" }}
            />
          </div>

          {status === "success" && (
            <div style={{ background: "#E8F5E9", border: "1px solid #A5D6A7", borderRadius: 8, padding: "0.85rem 1rem", color: "#1B5E20", fontWeight: 600 }}>
              ✅ Thank you! We&apos;ll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div style={{ background: "#FFEBEE", border: "1px solid #EF9A9A", borderRadius: 8, padding: "0.85rem 1rem", color: "#BF360C", fontWeight: 600 }}>
              ❌ {errorMsg || "Something went wrong. Please try again."}
            </div>
          )}

          <button type="submit" disabled={status === "submitting"} className="contact-submit">
            {status === "submitting" ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
  