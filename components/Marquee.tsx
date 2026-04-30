"use client";

const items = [
  "React.js", "Next.js", "TypeScript", "Django", "REST APIs",
  "Tailwind CSS", "ShadCN UI", "Node.js", "MongoDB", "MySQL",
  "SQLite", "Git", "Figma", "Razorpay", "Framer Motion",
  "React.js", "Next.js", "TypeScript", "Django", "REST APIs",
  "Tailwind CSS", "ShadCN UI", "Node.js", "MongoDB", "MySQL",
  "SQLite", "Git", "Figma", "Razorpay", "Framer Motion",
];

export default function Marquee() {
  return (
    <section
      className="py-8 relative overflow-hidden"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        background: "rgba(32, 0, 234, 0.03)",
      }}
    >
      <div className="marquee-container">
        <div className="marquee-track">
          {items.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-4 px-6"
            >
              <span
                className="text-sm font-medium tracking-widest uppercase"
                style={{
                  color: "var(--cool-gray)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                {item}
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{
                  background: i % 3 === 0
                    ? "var(--electric)"
                    : i % 3 === 1
                    ? "var(--lavender)"
                    : "rgba(255,255,255,0.2)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
