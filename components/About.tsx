"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #050208 0%, #0a0414 50%, #050208 100%)",
      }}
    >
      {/* Orb */}
      <div
        className="orb orb-lavender absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          top: "-200px",
          right: "-100px",
          opacity: 0.12,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="reveal relative">
            {/* Liquid glass portrait panel */}
            <div
              className="relative mx-auto"
              style={{ width: "100%", maxWidth: "420px" }}
            >
              {/* Blob background */}
              <div
                className="blob absolute inset-4 opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, var(--electric), var(--lavender))",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />

              {/* Glass card portrait */}
              <div
                className="relative glass-card p-8 text-center"
                style={{ zIndex: 1 }}
              >
                {/* Avatar placeholder */}
                <div
                  className="w-28 h-28 mx-auto rounded-full mb-6 flex items-center justify-center text-4xl font-bold relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--electric) 0%, var(--lavender) 100%)",
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  <span className="text-white">S</span>
                  {/* Shine */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)",
                    }}
                  />
                </div>

                <h3
                  className="text-xl font-bold mb-1"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    color: "var(--soft-white)",
                  }}
                >
                  Srishanth S
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{
                    color: "var(--cool-gray)",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  Full Stack Developer
                </p>

                {/* Info pills */}
                <div className="flex flex-col gap-3 text-left">
                  {[
                    { icon: "🎓", label: "B.Tech CSE", sub: "GEC Idukki · 2027" },
                    { icon: "📍", label: "Kerala, India", sub: "Open to Remote" },
                    { icon: "✉️", label: "srishanth471011@gmail.com", sub: "" },
                    { icon: "📱", label: "+91 730 652 6745", sub: "" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span className="text-base">{item.icon}</span>
                      <div>
                        <p
                          className="text-xs font-medium"
                          style={{ color: "var(--soft-white)" }}
                        >
                          {item.label}
                        </p>
                        {item.sub && (
                          <p
                            className="text-xs"
                            style={{ color: "var(--cool-gray)" }}
                          >
                            {item.sub}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Availability indicator */}
                <div
                  className="mt-6 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full"
                  style={{
                    background: "rgba(34, 197, 94, 0.08)",
                    border: "1px solid rgba(34, 197, 94, 0.2)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: "#22c55e" }}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{
                      color: "#22c55e",
                      fontFamily: "'Syne', sans-serif",
                    }}
                  >
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{
                  color: "var(--electric)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                About Me
              </span>
              <div
                className="h-px w-12"
                style={{ background: "var(--electric)" }}
              />
            </div>

            <h2
              className="font-bold leading-tight mb-8"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "var(--soft-white)",
              }}
            >
              Turning ideas into{" "}
              <span className="gradient-text">scalable reality.</span>
            </h2>

            <div className="flex flex-col gap-5 text-base leading-relaxed">
              <p style={{ color: "var(--cool-gray)" }}>
                I'm a Computer Science student at Government Engineering College,
                Idukki (Expected 2027), passionate about building products that
                solve real problems. I specialize in the{" "}
                <span style={{ color: "var(--soft-white)" }}>
                  React/Next.js + Django stack
                </span>
                , and love the challenge of making complex systems feel simple.
              </p>
              <p style={{ color: "var(--cool-gray)" }}>
                Currently interning at{" "}
                <span style={{ color: "var(--lavender)" }}>
                  Collectorate, Idukki
                </span>{" "}
                building multilingual government web platforms. My work spans
                from architecting role-based authentication systems to integrating
                payment workflows with Razorpay.
              </p>
              <p style={{ color: "var(--cool-gray)" }}>
                When I'm not coding, I'm exploring design systems, contributing
                to open source, and solving DSA problems on LeetCode. I believe
                great software is the intersection of{" "}
                <span style={{ color: "var(--soft-white)" }}>
                  engineering precision and thoughtful UX.
                </span>
              </p>
            </div>

            {/* Certifications */}
            <div className="mt-10">
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{
                  color: "var(--cool-gray)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                Certifications
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Programming Foundations with Python — Nxtwave",
                  "Meta Front-End Developer Certificate — Coursera",
                  "Developer Foundations (Git & GitHub) — Nxtwave",
                  "Introduction to SQL Databases — Nxtwave",
                  "Build Dynamic Web Applications — Nxtwave",
                ].map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "var(--cool-gray)" }}
                  >
                    <span
                      className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center"
                      style={{
                        background: "rgba(32,0,234,0.15)",
                        border: "1px solid rgba(32,0,234,0.3)",
                      }}
                    >
                      <svg
                        width="8"
                        height="8"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="#2000EA"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
