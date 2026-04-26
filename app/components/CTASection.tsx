import { GridNodeMark } from "./GridNodeMark";

export function CTASection() {
  return (
    <section
      id="contact"
      style={{ backgroundColor: "#042C53", position: "relative", overflow: "hidden" }}
      className="xn-section"
    >
      {/* Background dot grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, #0C447C 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      {/* Decorative mark — bottom right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-80px",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      >
        <GridNodeMark size={400} variant="dark" />
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "48px",
            alignItems: "center",
          }}
          className="lg:grid-cols-2"
        >
          {/* Left */}
          <div>
            <p
              style={{
                color: "#378ADD",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Ready to start
            </p>
            <h2
              style={{
                color: "#E6F1FB",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: 1.1,
                letterSpacing: "0.01em",
                marginBottom: "24px",
              }}
            >
              Built for what<br />comes next.
            </h2>
            <p
              style={{
                color: "#85B7EB",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "17px",
                lineHeight: 1.7,
                maxWidth: "440px",
              }}
            >
              Talk to a Xentenix solutions engineer. We&apos;ll map your highest-impact
              automation opportunities and show you exactly what the platform can do
              for your operations.
            </p>
          </div>

          {/* Right — form */}
          <div
            style={{
              backgroundColor: "#0C447C",
              border: "1px solid #185FA5",
              borderRadius: "16px",
              padding: "40px",
            }}
          >
            <h3
              style={{
                color: "#E6F1FB",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                marginBottom: "8px",
              }}
            >
              Get in touch
            </h3>
            <p
              style={{
                color: "#85B7EB",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "14px",
                lineHeight: 1.6,
                marginBottom: "28px",
              }}
            >
              Response within one business day.
            </p>

            <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="xn-form-2col">
                <div>
                  <label
                    htmlFor="fname"
                    style={{
                      display: "block",
                      color: "#85B7EB",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    First name
                  </label>
                  <input
                    id="fname"
                    type="text"
                    placeholder="Jane"
                    style={{
                      width: "100%",
                      backgroundColor: "#042C53",
                      border: "1px solid #185FA5",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      color: "#E6F1FB",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lname"
                    style={{
                      display: "block",
                      color: "#85B7EB",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    Last name
                  </label>
                  <input
                    id="lname"
                    type="text"
                    placeholder="Smith"
                    style={{
                      width: "100%",
                      backgroundColor: "#042C53",
                      border: "1px solid #185FA5",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      color: "#E6F1FB",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    color: "#85B7EB",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@company.com"
                  style={{
                    width: "100%",
                    backgroundColor: "#042C53",
                    border: "1px solid #185FA5",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    color: "#E6F1FB",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  style={{
                    display: "block",
                    color: "#85B7EB",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Acme Corp"
                  style={{
                    width: "100%",
                    backgroundColor: "#042C53",
                    border: "1px solid #185FA5",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    color: "#E6F1FB",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    color: "#85B7EB",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  What are you trying to solve?
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Tell us about your automation challenges..."
                  style={{
                    width: "100%",
                    backgroundColor: "#042C53",
                    border: "1px solid #185FA5",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    color: "#E6F1FB",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "14px",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "#378ADD",
                  color: "#ffffff",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  padding: "14px 24px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.02em",
                  marginTop: "8px",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
