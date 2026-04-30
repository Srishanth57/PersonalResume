"use client";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Full Stack Developer",
  "React & Next.js Engineer",
  "Django Backend Dev",
  "UI/UX Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter
  useEffect(() => {
    const target = roles[roleIndex];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          60,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }> = [];

    const colors = ["#2000EA", "#9E92E7", "#FFF8F8"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle =
          p.color +
          Math.floor(p.alpha * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();
      });

      // Connect nearby particles
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(32, 0, 234, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#050208" }}
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Gradient orbs */}
      <div
        className="orb orb-electric absolute"
        style={{
          width: "600px",
          height: "600px",
          top: "-100px",
          right: "-200px",
          opacity: 0.25,
        }}
      />
      <div
        className="orb orb-lavender absolute"
        style={{
          width: "400px",
          height: "400px",
          bottom: "0",
          left: "-100px",
          opacity: 0.2,
        }}
      />

      {/* Liquid blob accent */}
      <div
        className="blob absolute opacity-10"
        style={{
          width: "500px",
          height: "500px",
          top: "50%",
          right: "5%",
          transform: "translateY(-50%)",
          background:
            "linear-gradient(135deg, var(--electric) 0%, var(--lavender) 100%)",
          filter: "blur(60px)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 glass"
          style={{ animationDelay: "0.1s" }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "#22c55e" }}
          />
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{
              color: "var(--cool-gray)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Open to Work · B.Tech CSE, 2027
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-6 overflow-hidden">
          <h1
            className="font-bold leading-none tracking-tight"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
            }}
          >
            <span className="block overflow-hidden">
              <span
                className="block"
                style={{
                  animation:
                    "slideUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s both",
                }}
              >
                Srishanth
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="block gradient-text"
                style={{
                  animation:
                    "slideUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s both",
                }}
              >
                Builds Things.
              </span>
            </span>
          </h1>
        </div>

        {/* Typewriter subtitle */}
        <div
          className="flex items-center gap-3 mb-10"
          style={{
            animation: "fadeIn 1s ease 0.7s both",
          }}
        >
          <div
            className="h-px flex-shrink-0 w-12"
            style={{
              background:
                "linear-gradient(90deg, var(--electric), transparent)",
            }}
          />
          <p
            className="text-base md:text-xl"
            style={{
              color: "var(--cool-gray)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span style={{ color: "var(--soft-white)" }}>{displayed}</span>
            <span
              className="inline-block w-0.5 h-5 ml-0.5 align-middle animate-pulse"
              style={{ background: "var(--electric)" }}
            />
          </p>
        </div>

        {/* Description */}
        <p
          className="max-w-2xl text-base md:text-lg leading-relaxed mb-12"
          style={{
            color: "var(--cool-gray)",
            fontFamily: "'DM Sans', sans-serif",
            animation: "fadeIn 1s ease 0.9s both",
          }}
        >
          Motivated CS student building{" "}
          <span style={{ color: "var(--soft-white)" }}>
            production-grade web applications
          </span>{" "}
          with React.js, Next.js & Django — specializing in real-time workflows,
          role-based systems, and scalable architecture.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center gap-4"
          style={{
            animation: "slideUp 0.8s cubic-bezier(0.16,1,0.3,1) 1.1s both",
          }}
        >
          <a
            href="#work"
            data-hover=""
            className="btn-glow flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white"
            style={{
              background: "var(--electric)",
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            View My Work
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://github.com/Srishanth57"
            target="_blank"
            rel="noreferrer"
            data-hover=""
            className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 glass"
            style={{
              color: "var(--soft-white)",
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/srishanth-s/"
            target="_blank"
            rel="noreferrer"
            data-hover=""
            className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 glass"
            style={{
              color: "var(--soft-white)",
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap gap-8 mt-16 pt-8"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            animation: "fadeIn 1s ease 1.3s both",
          }}
        >
          {[
            { label: "Projects Shipped", value: "5+" },
            { label: "Tech Stack", value: "15+" },
            { label: "Intern Experience", value: "Active" },
            { label: "Graduation", value: "2027" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-2xl font-bold mb-1"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color: "var(--soft-white)",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs tracking-wider uppercase"
                style={{ color: "var(--cool-gray)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        style={{ animation: "fadeIn 1s ease 2s both" }}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{
            color: "var(--cool-gray)",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Scroll
        </span>
        <div
          className="w-px h-12 relative overflow-hidden"
          style={{ background: "rgba(255,255,255,0.1)" }}
        >
          <div
            className="absolute top-0 w-full animate-bounce"
            style={{
              height: "40%",
              background:
                "linear-gradient(180deg, var(--electric), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
