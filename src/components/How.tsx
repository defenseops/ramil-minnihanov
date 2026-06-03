import Image from "next/image";

const STEPS = [
  { n: "01", t: "Диагностика", d: "Разбираем текущее состояние финансов: что считается, что нет, где теряется прибыль." },
  { n: "02", t: "Сборка системы", d: "Настраиваем инструменты под твой бизнес: ОПиУ, ДДС, баланс, дашборды." },
  { n: "03", t: "Внедрение", d: "Запускаем систему в работу, обучаем команду, доводим до автономной работы." },
  { n: "04", t: "Сопровождение", d: "Поддерживаем и адаптируем. Регулярные отчёты и стратегические сессии." },
];

export default function How() {
  return (
    <section
      id="how"
      aria-label="Как проходит работа с финансовым консультантом"
      style={{
        background: "var(--bg-alt)",
        padding: "clamp(90px, 10vw, 160px) 0",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 clamp(20px, 4vw, 64px)" }}>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          06 — Метод
        </span>
        <h2
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(40px, 5.4vw, 84px)",
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            color: "var(--ink)",
            margin: "18px 0 0",
            maxWidth: 1000,
            textWrap: "balance",
          }}
        >
          Как проходит{" "}
          <em style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 400 }}>
            работа
          </em>
        </h2>

        <div
          style={{
            marginTop: "clamp(48px, 6vw, 80px)",
            position: "relative",
          }}
        >
          {/* Connecting dashed line */}
          <div
            aria-hidden
            className="how-line"
            style={{
              position: "absolute",
              top: 27,
              left: 0,
              right: 0,
              height: 2,
              background: "repeating-linear-gradient(to right, var(--rule) 0 8px, transparent 8px 16px)",
            }}
          />
          <div
            className="how-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "clamp(20px, 2.5vw, 40px)",
              position: "relative",
            }}
          >
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                style={{ position: "relative", minHeight: 220 }}
              >
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    width: 56,
                    height: 56,
                    borderRadius: 999,
                    background: i === 0 ? "var(--accent)" : "var(--bg)",
                    color: i === 0 ? "var(--on-accent)" : "var(--ink)",
                    border: `1.5px solid ${i === 0 ? "var(--accent)" : "var(--ink)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 500,
                    fontSize: 22,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.n}
                </div>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(22px, 2.2vw, 32px)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    color: "var(--ink)",
                    margin: "26px 0 14px",
                  }}
                >
                  {s.t}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "var(--ink-soft)",
                    margin: 0,
                    maxWidth: 240,
                  }}
                >
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo + quote side by side */}
        <div
          className="how-banner"
          style={{
            marginTop: "clamp(56px, 7vw, 96px)",
            display: "grid",
            gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
            gap: "clamp(20px, 3vw, 48px)",
            alignItems: "center",
          }}
        >
          {/* Vertical phone-style photo */}
          <div
            style={{
              position: "relative",
              aspectRatio: "3/4",
              borderRadius: 28,
              overflow: "hidden",
              background: "#1a1209",
              boxShadow: "0 24px 64px -16px rgba(26,24,21,.22)",
            }}
          >
            <Image
              src="/images/ramil-4.jpg"
              alt="Рамиль Минниханов — финансовый консультант, Алматы"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center 10%",
                filter: "saturate(.75) contrast(1.04) brightness(.94)",
              }}
            />
          </div>

          {/* His words */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <blockquote
              style={{
                margin: 0,
                fontFamily: "'Newsreader', serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(26px, 3vw, 52px)",
                lineHeight: 1.15,
                color: "var(--ink)",
                letterSpacing: "-0.015em",
                textWrap: "balance",
              }}
            >
              «Я не даю советы — я строю систему. Каждый шаг заканчивается конкретным результатом, который остаётся у тебя навсегда»
            </blockquote>
            <div
              style={{
                marginTop: 32,
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "var(--accent)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                }}
              >
                Рамиль Минниханов
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
