export default function Manifesto() {
  return (
    <section
      aria-label="Философия финансового консультанта"
      style={{
        background: "var(--bg)",
        padding: "clamp(80px, 10vw, 140px) 0",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(20px, 4vw, 64px)" }}>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          Манифест
        </span>
        <div style={{ marginTop: 24 }}>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(34px, 4.4vw, 64px)",
              lineHeight: 0.98,
              letterSpacing: "-0.025em",
              color: "var(--ink)",
              margin: 0,
              textWrap: "balance",
            }}
          >
            Финансы — это не интуиция и не Excel.{" "}
            <span>
              Это система,
            </span>{" "}
            которая работает без постоянного участия владельца.
          </h2>
        </div>

        <div
          className="manifesto-grid"
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "clamp(24px, 3vw, 56px)",
            paddingTop: 32,
            borderTop: "1px solid var(--rule)",
          }}
        >
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
              Принцип
            </span>
            <p style={{ fontSize: "clamp(15px, 1.1vw, 17px)", lineHeight: 1.6, color: "var(--ink-soft)", margin: "14px 0 0" }}>
              Прозрачные деньги, измеримая прибыль и предсказуемый кассовый поток. Без таблиц в голове.
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
              Результат
            </span>
            <p style={{ fontSize: "clamp(15px, 1.1vw, 17px)", lineHeight: 1.6, color: "var(--ink-soft)", margin: "14px 0 0" }}>
              Работающая система за 7 дней — настроена, внедрена, команда обучена.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
