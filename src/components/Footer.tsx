function Monogram() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="15.25" stroke="var(--ink)" strokeWidth="1" />
      <path
        d="M9 22 L 11 10 L 14 10 L 16 18 L 18 10 L 21 10 L 22 22 L 19.5 22 L 19 14 L 17 22 L 15 22 L 13 14 L 12.5 22 Z"
        fill="var(--ink)"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg)",
        color: "var(--ink)",
        padding: "clamp(56px, 8vw, 96px) 0 36px",
        borderTop: "1px solid var(--rule)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 clamp(20px, 4vw, 64px)" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr)",
            gap: 40,
            paddingBottom: 48,
            borderBottom: "1px solid var(--rule)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <Monogram />
              <div
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 500,
                  fontSize: 22,
                  letterSpacing: "-0.015em",
                }}
              >
                Рамиль Минниханов
              </div>
            </div>
            <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: 0, lineHeight: 1.55, maxWidth: 360 }}>
              Антикризисная система управления бизнесом. Финансы малого и среднего бизнеса в&nbsp;Казахстане.
            </p>
          </div>

          <div>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
              }}
            >
              Связаться
            </span>
            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Instagram", "https://www.instagram.com/findir_ramil_minnihanov/"],
                ["Telegram", "https://t.me/TheMrRAMiL"],
                ["Threads", "https://www.threads.com/@findir_ramil_minnihanov"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--ink)",
                    textDecoration: "none",
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 500,
                    fontSize: 20,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  {label}{" "}
                  <span style={{ fontSize: 13, color: "var(--ink-muted)" }}>↗</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
              }}
            >
              Навигация
            </span>
            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Услуги", "#services"],
                ["Прайс", "#pricing"],
                ["Метод", "#how"],
                ["Об авторе", "#about"],
                ["Записаться", "#contact"],
              ].map(([text, href]) => (
                <a
                  key={href}
                  href={href}
                  style={{ color: "var(--ink)", textDecoration: "none", fontSize: 15, fontWeight: 500 }}
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 28,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 16,
            fontSize: 13,
            color: "var(--ink-muted)",
          }}
        >
          <div>© 2026 Антикризисная система управления бизнесом</div>
          <div>Алматы · Казахстан</div>
        </div>
      </div>
    </footer>
  );
}
