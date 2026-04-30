"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const projects = [
  {
    id: "01",
    title: "Quotation Management System",
    subtitle: "QMS — Procurement Platform",
    description:
      "A full-stack multi-role procurement platform featuring HOD, Principal, Accountant, Vendor, and Admin roles with session-based authentication, route protection, and Razorpay payment integration.",
    stack: ["Next.js", "Django", "SQLite", "Razorpay", "REST API", "CSRF"],
    tags: ["Full Stack", "Multi-Role", "Auth", "Payments"],
    year: "2026",
    color: "#2000EA",
    accent: "#9E92E7",
    highlights: [
      "Session-based auth with Next.js middleware route protection",
      "Vendor bid comparison (L1/L2 pricing logic)",
      "OTP-verified delivery + Razorpay integration",
      "camelCase/snake_case data normalization layer",
    ],
    link: "https://github.com/youthfulporpoise/mini-project",
  },
  {
    id: "02",
    title: "Scheme Finder & Yojana Connect",
    subtitle: "Collectorate Idukki — Gov Project",
    description:
      "Responsive, multilingual web features for government scheme discovery, integrating backend databases for dynamic content and simplifying UI with accessible dropdown components.",
    stack: ["Next.js", "Tailwind CSS", "ShadCN UI", "PostgreSQL"],
    tags: ["Internship", "Government", "Multilingual"],
    year: "2025",
    color: "#FFF8F8",
    accent: "#2000EA",
    highlights: [
      "Multilingual support for regional languages",
      "Replaced complex filtering with accessible dropdowns",
      "10% reduction in post-deployment bugs",
      "Agile development cycle participation",
    ],
    link: "https://github.com/Srishanth57/Scheme",
  },
  {
    id: "03",

    title: "Brainly",
    subtitle: "Content Aggregation Platform",
    description:
      "A full-stack content curation platform for saving and organizing X (Twitter) and YouTube content, featuring a TypeScript backend with RESTful bookmark and collection APIs.",
    stack: ["TypeScript", "REST APIs", "MongoDB", "Node.js", "Express"],
    tags: ["Personal Project", "TypeScript", "Bookmarks"],
    year: "2025",
    color: "#9E92E7",
    accent: "#2000EA",
    highlights: [
      "TypeScript backend at 98.2% language purity",
      "Shareable link system with dynamic URL generation",
      "Seamless client-side routing",
      "RESTful bookmark and collection APIs",
    ],
    link: "https://github.com/Srishanth57/Brainly",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "#050208" }}
    >
      {/* Background accent */}
      <div
        className="orb orb-electric absolute pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          top: "50%",
          left: "-250px",
          opacity: 0.1,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="reveal mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{
                color: "var(--electric)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Selected Work
            </span>
            <div
              className="h-px flex-1"
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
            Projects & <span className="gradient-text">Builds.</span>
          </h2>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="reveal project-card glass-card p-8 md:p-10 relative overflow-hidden group"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Number watermark */}
              <div
                className="absolute top-6 right-8 font-bold opacity-5 leading-none select-none pointer-events-none"
                style={{
                  fontSize: "8rem",
                  fontFamily: "'Syne', sans-serif",
                  color: project.color,
                }}
              >
                {project.id}
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color}08, transparent 40%)`,
                }}
              />

              <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium tracking-wide"
                        style={{
                          background: `${project.color}15`,
                          color:
                            project.color === "#FFF8F8"
                              ? "var(--soft-white)"
                              : project.color,
                          border: `1px solid ${project.color}25`,
                          fontFamily: "'Syne', sans-serif",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium tracking-wide"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--cool-gray)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        fontFamily: "'Syne', sans-serif",
                      }}
                    >
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-bold mb-1 leading-tight"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      color: "var(--soft-white)",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{
                      color:
                        project.color === "#FFF8F8"
                          ? "var(--lavender)"
                          : project.color,
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {project.subtitle}
                  </p>

                  <p
                    className="text-sm leading-relaxed mb-6 max-w-2xl"
                    style={{ color: "var(--cool-gray)" }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2 mb-6">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: "var(--cool-gray)" }}
                      >
                        <span
                          className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                          style={{ background: `${project.color}20` }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{
                              background:
                                project.color === "#FFF8F8"
                                  ? "var(--lavender)"
                                  : project.color,
                            }}
                          />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="skill-pill px-3 py-1 rounded-lg text-xs font-medium"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          color: "var(--cool-gray)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-start justify-end">
                  <Link href={project.link}>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `${project.color}15`,
                        border: `1px solid ${project.color}25`,
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        style={{
                          color:
                            project.color === "#FFF8F8"
                              ? "var(--soft-white)"
                              : project.color,
                        }}
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
