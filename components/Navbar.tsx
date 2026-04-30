"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(5, 2, 8, 0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(40px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 group" data-hover="">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
            style={{ background: "var(--electric)" }}
          >
            S
          </div>
          <span
            className="font-bold text-sm tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity"
            style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)" }}
          >
            Srishanth
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-hover=""
              onClick={() => setActive(link.href)}
              className="text-xs font-medium tracking-wider uppercase transition-all duration-300"
              style={{
                color:
                  active === link.href
                    ? "var(--soft-white)"
                    : "var(--cool-gray)",
                fontFamily: "var(--font-display, 'Syne', sans-serif)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--soft-white)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  active === link.href
                    ? "var(--soft-white)"
                    : "var(--cool-gray)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:srishanth471011@gmail.com"
            data-hover=""
            className="btn-glow px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-white transition-all duration-300"
            style={{
              background: "var(--electric)",
              fontFamily: "var(--font-display, 'Syne', sans-serif)",
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className="w-6 h-px bg-white transition-all duration-300"
            style={{
              transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "",
            }}
          />
          <span
            className="w-4 h-px bg-white transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="w-6 h-px bg-white transition-all duration-300"
            style={{
              transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-8 pt-4 flex flex-col gap-6"
          style={{
            background: "rgba(5,2,8,0.95)",
            backdropFilter: "blur(40px)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-white/70 hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:srishanth471011@gmail.com"
            className="inline-flex px-5 py-3 rounded-full text-sm font-semibold text-white text-center"
            style={{ background: "var(--electric)" }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
