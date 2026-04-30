"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Collectorate, Idukki",
    type: "Government",
    period: "June 2025 – Present",
    status: "active",
    description:
      "Building and shipping responsive, multilingual web features for the Scheme Finder and Yojana Connect applications used by the district government.",
    highlights: [
      "Built multilingual features using Next.js and Tailwind CSS",
      "Integrated backend databases for dynamic content management",
      "Replaced complex filtering with accessible ShadCN UI dropdowns",
      "Participated in agile sprints — 10% reduction in post-deployment bugs",
    ],
    stack: ["Next.js", "Tailwind CSS", "ShadCN UI", "PostgreSQL"],
    color: "#2000EA",
  },
];

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Government Engineering College, Idukki",
    period: "2023 – May 2027",
    status: "active",
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Web Development",
      "Computer Networks",
    ],
    color: "#9E92E7",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #050208 0%, #0a0414 50%, #050208 100%)",
      }}
    >
      <div
        className="orb orb-lavender absolute pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          top: "0",
          left: "-150px",
          opacity: 0.1,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="reveal mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{
                color: "var(--electric)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Journey
            </span>
            <div
              className="h-px flex-1 max-w-xs"
              style={{
                background:
                  "linear-gradient(90deg, rgba(32,0,234,0.4), transparent)",
              }}
            />
          </div>
          <h2
            className="font-bold leading-none"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "var(--soft-white)",
            }}
          >
            Experience & <span className="gradient-text">Education.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div className="reveal">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-8"
              style={{
                color: "var(--cool-gray)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Work Experience
            </p>

            {experiences.map((exp) => (
              <div key={exp.role} className="relative">
                {/* Timeline line */}
                <div
                  className="absolute left-6 top-16 bottom-0 w-px"
                  style={{
                    background:
                      "linear-gradient(180deg, var(--electric), transparent)",
                  }}
                />

                <div className="glass-card p-6 md:p-8 relative overflow-hidden">
                  {/* Active badge */}
                  {exp.status === "active" && (
                    <div
                      className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(34, 197, 94, 0.08)",
                        border: "1px solid rgba(34, 197, 94, 0.2)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: "#22c55e" }}
                      />
                      <span
                        className="text-xs font-medium"
                        style={{
                          color: "#22c55e",
                          fontFamily: "'Syne', sans-serif",
                        }}
                      >
                        Active
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{
                        background: `${exp.color}15`,
                        border: `1px solid ${exp.color}25`,
                      }}
                    >
                      🏛️
                    </div>
                    <div>
                      <h3
                        className="font-bold text-base mb-0.5"
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          color: "var(--soft-white)",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className="text-sm"
                        style={{
                          color: exp.color,
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {exp.company}
                      </p>
                      <p
                        className="text-xs mt-1"
                        style={{ color: "var(--cool-gray)" }}
                      >
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "var(--cool-gray)" }}
                  >
                    {exp.description}
                  </p>

                  <ul className="flex flex-col gap-2 mb-5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-xs"
                        style={{ color: "var(--cool-gray)" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                          style={{ background: exp.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs"
                        style={{
                          background: `${exp.color}10`,
                          color: exp.color,
                          border: `1px solid ${exp.color}20`,
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="reveal">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-8"
              style={{
                color: "var(--cool-gray)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Education
            </p>

            {education.map((edu) => (
              <div
                key={edu.degree}
                className="glass-card p-6 md:p-8 relative overflow-hidden"
              >
                {edu.status === "active" && (
                  <div
                    className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(158, 146, 231, 0.08)",
                      border: "1px solid rgba(158, 146, 231, 0.2)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: "var(--lavender)" }}
                    />
                    <span
                      className="text-xs font-medium"
                      style={{
                        color: "var(--lavender)",
                        fontFamily: "'Syne', sans-serif",
                      }}
                    >
                      In Progress
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{
                      background: `${edu.color}15`,
                      border: `1px solid ${edu.color}25`,
                    }}
                  >
                    🎓
                  </div>
                  <div>
                    <h3
                      className="font-bold text-base mb-0.5"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        color: "var(--soft-white)",
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        color: edu.color,
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {edu.field}
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: "var(--cool-gray)" }}
                    >
                      {edu.institution}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--cool-gray)" }}
                    >
                      {edu.period}
                    </p>
                  </div>
                </div>

                <div>
                  <p
                    className="text-xs font-semibold tracking-wider uppercase mb-3"
                    style={{
                      color: "var(--cool-gray)",
                      fontFamily: "'Syne', sans-serif",
                    }}
                  >
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 rounded-lg text-xs"
                        style={{
                          background: `${edu.color}10`,
                          color: edu.color,
                          border: `1px solid ${edu.color}20`,
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* LeetCode / Links */}
            <div className="mt-6 glass-card p-6">
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{
                  color: "var(--cool-gray)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                Profiles
              </p>
              <div className="flex flex-col gap-3">
                {[
                  {
                    label: "GitHub",
                    icon: "⚡",
                    url: "https://github.com/Srishanth57",
                  },
                  {
                    label: "LinkedIn",
                    icon: "💼",
                    url: "https://linkedin.com/in/srishanth-s",
                  },
                  {
                    label: "LeetCode",
                    icon: "🧩",
                    url: "https://leetcode.com/u/Srishanth19/",
                  },
                  { label: "Portfolio", icon: "🌐", url: "#" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    data-hover=""
                    className="flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span>{link.icon}</span>
                      <span
                        className="text-sm font-medium"
                        style={{
                          color: "var(--soft-white)",
                          fontFamily: "'Syne', sans-serif",
                        }}
                      >
                        {link.label}
                      </span>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      style={{ color: "var(--cool-gray)" }}
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
