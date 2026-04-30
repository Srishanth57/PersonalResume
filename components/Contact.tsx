"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("srishanth471011@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      id="contact"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "#050208" }}
    >
      {/* Big orbs */}
      <div
        className="orb orb-electric absolute pointer-events-none"
        style={{
          width: "800px",
          height: "800px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.06,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Label */}
        <div className="reveal mb-6">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{
              color: "var(--electric)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Get In Touch
          </span>
        </div>

        {/* Big heading */}
        <div className="reveal mb-8">
          <h2
            className="font-bold leading-none"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              color: "var(--soft-white)",
            }}
          >
            Let's Build <span className="gradient-text">Together.</span>
          </h2>
        </div>

        <div className="reveal mb-14">
          <p
            className="text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--cool-gray)" }}
          >
            I'm actively looking for full stack developer roles and internship
            opportunities. Whether you have a project in mind or just want to
            connect — I'd love to hear from you.
          </p>
        </div>

        {/* Email button */}
        <div className="reveal mb-12">
          <button
            onClick={copyEmail}
            data-hover=""
            className="btn-glow group inline-flex items-center gap-4 px-8 md:px-12 py-5 rounded-full text-white font-semibold transition-all duration-300"
            style={{
              background: "var(--electric)",
              fontFamily: "'Syne', sans-serif",
              fontSize: "1rem",
              letterSpacing: "0.05em",
            }}
          >
            <span>{copied ? "Copied! ✓" : "srishanth471011@gmail.com"}</span>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-12"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              {copied ? (
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* Divider with OR */}
        <div
          className="reveal flex items-center gap-6 mb-12 max-w-xs mx-auto"
          style={{ color: "var(--cool-gray)" }}
        >
          <div
            className="h-px flex-1"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <span className="text-xs tracking-widest uppercase">or</span>
          <div
            className="h-px flex-1"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
        </div>

        {/* Social links */}
        <div className="reveal flex flex-wrap justify-center gap-4">
          {[
            {
              label: "GitHub",
              url: "https://github.com/Srishanth57",
              icon: (
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              url: "https://www.linkedin.com/in/srishanth-s/",
              icon: (
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              label: "LeetCode",
              url: "https://leetcode.com/u/Srishanth19/",
              icon: (
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              ),
            },
            {
              label: "Phone",
              url: "tel:+917306526745",
              icon: (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              data-hover=""
              className="glass flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:border-[rgba(32,0,234,0.3)]"
              style={{
                color: "var(--soft-white)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              {social.icon}
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
