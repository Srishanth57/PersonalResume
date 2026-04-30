"use client";
import { useEffect, useRef } from "react";

const skillCategories = [
  {
    label: "Languages",
    color: "#2000EA",
    skills: ["JavaScript", "TypeScript", "Python", "C", "C++", "SQL"],
  },
  {
    label: "Frontend",
    color: "#9E92E7",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "ShadCN UI", "Bootstrap"],
  },
  {
    label: "Backend",
    color: "#2000EA",
    skills: ["Django", "Django REST Framework", "Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "Auth & Security",
    color: "#9E92E7",
    skills: ["Session Auth", "CSRF Handling", "Protected Routes", "RBAC"],
  },
  {
    label: "Databases & ORMs",
    color: "#2000EA",
    skills: ["MySQL", "SQLite", "MongoDB (Mongoose)", "SQLAlchemy"],
  },
  {
    label: "Tools & Workflow",
    color: "#9E92E7",
    skills: ["Git", "GitHub", "Postman", "Figma", "VS Code", "ESLint", "npm"],
  },
  {
    label: "Core Concepts",
    color: "#2000EA",
    skills: ["DSA", "Component Architecture", "API Design", "Agile"],
  },
];

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "#050208" }}
    >
      {/* Accent orb */}
      <div
        className="orb orb-electric absolute pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          bottom: "-300px",
          right: "-200px",
          opacity: 0.08,
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
              Capabilities
            </span>
            <div
              className="h-px flex-1 max-w-xs"
              style={{
                background: "linear-gradient(90deg, rgba(32,0,234,0.4), transparent)",
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
            Technical{" "}
            <span className="gradient-text">Stack.</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.label}
              className="reveal glass-card p-6 group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}25` }}
                >
                  <div
                    className="w-3 h-3 rounded-sm"
                    style={{ background: cat.color }}
                  />
                </div>
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{
                    color: cat.color,
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      color: "var(--soft-white)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Big skill showcase */}
        <div className="reveal mt-16 glass-card p-8 md:p-12 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 70% 50%, rgba(32,0,234,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                number: "15+",
                label: "Technologies",
                desc: "across the full stack",
              },
              {
                number: "5+",
                label: "Production Projects",
                desc: "shipped and deployed",
              },
              {
                number: "1+",
                label: "Year Experience",
                desc: "in professional environments",
              },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-5xl font-bold mb-2 gradient-text-electric"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-base font-semibold mb-1"
                  style={{ color: "var(--soft-white)", fontFamily: "'Syne', sans-serif" }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "var(--cool-gray)" }}
                >
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
