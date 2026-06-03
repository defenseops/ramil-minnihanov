const ITEMS = [
  "Офлайн и онлайн магазины",
  "Производственные предприятия",
  "Сервисные компании",
  "Медицинские и учебные центры",
  "Компании с филиальной сетью",
  "Kaspi‑магазины",
];

export default function Who() {
  return (
    <section id="who" aria-label="Для кого — целевая аудитория финансового консультанта" style={{ background: "var(--bg)", padding: "clamp(90px, 10vw, 160px) 0" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 clamp(20px, 4vw, 64px)" }}>
        <div
          className="who-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 4fr) minmax(0, 8fr)",
            gap: "clamp(28px, 4vw, 80px)",
            alignItems: "start",
          }}
        >
          <div>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              05 — Аудитория
            </span>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(40px, 5vw, 76px)",
                lineHeight: 0.98,
                letterSpacing: "-0.025em",
                color: "var(--ink)",
                margin: "18px 0 0",
              }}
            >
              Для{" "}
              <em style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 700 }}>кого</em>
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 1.05vw, 17px)",
                lineHeight: 1.6,
                color: "var(--ink-soft)",
                margin: "24px 0 0",
                maxWidth: 360,
              }}
            >
              Малый и средний бизнес в&nbsp;Казахстане. Любая сфера, где есть выручка, расходы и потребность в&nbsp;контроле.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            {ITEMS.map((text, i) => (
              <div
                key={text}
                className="who-tag"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "18px 26px",
                  borderRadius: 999,
                  background: i === 5 ? "var(--ink)" : "var(--bg-alt)",
                  color: i === 5 ? "var(--on-accent)" : "var(--ink)",
                  border: `1px solid ${i === 5 ? "var(--ink)" : "var(--rule)"}`,
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: "clamp(18px, 1.5vw, 24px)",
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                  transition: "transform .2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "translateY(0)")}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: ".14em",
                    opacity: 0.5,
                  }}
                >
                  0{i + 1}
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
