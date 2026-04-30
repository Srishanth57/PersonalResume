export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-8 px-6 md:px-12 relative overflow-hidden"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.04)",
        background: "#050208",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-white"
            style={{ background: "var(--electric)" }}
          >
            S
          </div>
          <span
            className="text-xs"
            style={{
              color: "var(--cool-gray)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Srishanth S
          </span>
        </div>

        <p
          className="text-xs"
          style={{
            color: "var(--cool-gray)",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          © {year} · Designed & Built by Srishanth S
        </p>

        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#22c55e" }}
          />
          <span
            className="text-xs"
            style={{
              color: "var(--cool-gray)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Available for work
          </span>
        </div>
      </div>
    </footer>
  );
}
