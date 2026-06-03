"use client";
import Image from "next/image";

const ROWS = [
  {
    n: "01",
    title: "Аудит финансовой отчётности",
    desc: "Детальный разбор и проверка отчётов, исходных данных и документации, с обратной связью.",
    priceMain: "50 000 ₸",
    priceSub: null,
    timeLabel: "Сроки",
    timeMain: "1–2 дня",
    timeSub: null,
  },
  {
    n: "02",
    title: "Внедрение системы\nуправленческого и финансового учёта",
    desc: "ОПиУ, ДДС, Баланс, Дашборды — с последующим обучением.",
    priceMain: "от 250 000 — до 400 000 ₸",
    priceSub: "Цена и сроки зависят от объёмов и сложности",
    timeLabel: "Сроки",
    timeMain: "7–10 дней",
    timeSub: null,
  },
  {
    n: "03",
    title: "Сопровождение системы\nс финансовым директором",
    desc: "Внесение данных, настройка автоматизации, отчёты и стратегические сессии.",
    priceMain: "от 50 000 — до 300 000 ₸",
    priceSub: "в месяц",
    timeLabel: "Условия",
    timeMain: null,
    timeSub: "В зависимости от объёма задач и запросов клиента",
  },
] as const;

export default function Pricing({ onCta }: { onCta: () => void }) {
  return (
    <section
      id="pricing"
      aria-label="Прайс на услуги финансового консультанта"
      style={{
        position: "relative",
        background: "var(--ink)",
        color: "var(--on-accent)",
        padding: "clamp(90px, 10vw, 160px) 0",
        overflow: "hidden",
      }}
    >
      {/* Atmospheric image */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.16,
          maskImage: "linear-gradient(to left, black 0%, transparent 65%)",
          WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 65%)",
        }}
      >
        <Image
          src="/images/ramil-2.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "right center", filter: "saturate(.45) contrast(1.05)" }}
        />
      </div>
      {/* warm wash */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 50% at 80% 0%, rgba(122,32,24,.3), transparent 60%)",
        }}
      />

      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 clamp(20px, 4vw, 64px)", position: "relative", zIndex: 2 }}>
        <div
          className="services-head"
          style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 24, alignItems: "end" }}
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
              04 — Прайс на услуги
            </span>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(40px, 5vw, 76px)",
                lineHeight: 0.98,
                letterSpacing: "-0.025em",
                color: "var(--on-accent)",
                margin: "18px 0 0",
                textWrap: "balance",
              }}
            >
              Финансы{" "}
              <em style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 700 }}>под контролем</em>
              <br />
              Решения для роста.
            </h2>
          </div>
          <div style={{ color: "rgba(244,239,228,.65)", fontSize: 14, maxWidth: 220, textAlign: "right" }}>
            Прозрачность · Стратегия · Результат
          </div>
        </div>

        <div
          style={{
            marginTop: "clamp(48px, 6vw, 80px)",
            borderTop: "1px solid rgba(122,32,24,.4)",
            borderBottom: "1px solid rgba(122,32,24,.4)",
          }}
        >
          {ROWS.map((r, i) => (
            <div
              key={r.n}
              className="pricing-row"
              style={{
                display: "grid",
                gridTemplateColumns: "auto minmax(0, 1.5fr) minmax(220px, 1fr) minmax(160px, 0.7fr) auto",
                gap: "clamp(20px, 2.4vw, 40px)",
                alignItems: "center",
                padding: "clamp(28px, 3vw, 44px) 0",
                borderTop: i === 0 ? "none" : "1px solid rgba(244,239,228,.16)",
              }}
            >
              <div
                className="pricing-num"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(28px, 2.6vw, 42px)",
                  color: "var(--accent)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  width: 56,
                }}
              >
                {r.n}
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(20px, 1.8vw, 28px)",
                    lineHeight: 1.15,
                    color: "var(--on-accent)",
                    margin: 0,
                    whiteSpace: "pre-line",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {r.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(244,239,228,.62)", margin: "12px 0 0", maxWidth: 480 }}>
                  {r.desc}
                </p>
              </div>

              <div className="pricing-price">
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--accent)" }}>
                  Стоимость
                </span>
                <div
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(18px, 1.6vw, 24px)",
                    color: "var(--on-accent)",
                    margin: "10px 0 0",
                    lineHeight: 1.15,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {r.priceMain}
                </div>
                {r.priceSub && (
                  <div style={{ fontSize: 12, color: "rgba(244,239,228,.55)", marginTop: 8, lineHeight: 1.45, maxWidth: 260 }}>
                    {r.priceSub}
                  </div>
                )}
              </div>

              <div className="pricing-time">
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--accent)" }}>
                  {r.timeLabel}
                </span>
                {r.timeMain && (
                  <div
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(18px, 1.5vw, 22px)",
                      color: "var(--on-accent)",
                      margin: "10px 0 0",
                      lineHeight: 1.15,
                    }}
                  >
                    {r.timeMain}
                  </div>
                )}
                {r.timeSub && (
                  <div style={{ fontSize: 12, color: "rgba(244,239,228,.62)", marginTop: 10, lineHeight: 1.45, maxWidth: 220 }}>
                    {r.timeSub}
                  </div>
                )}
              </div>

              <button
                onClick={onCta}
                className="pricing-cta"
                style={{
                  appearance: "none",
                  cursor: "pointer",
                  border: "1px solid var(--accent)",
                  background: "transparent",
                  color: "var(--accent)",
                  padding: "12px 16px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  transition: "background .2s ease, color .2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--accent)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--on-accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
                }}
              >
                Записаться →
              </button>
            </div>
          ))}

          {/* Mobile cards — shown only on mobile via CSS */}
          <div className="pricing-cards">
            {ROWS.map((r) => (
              <div
                key={r.n}
                style={{
                  border: "1px solid rgba(244,239,228,.16)",
                  borderRadius: 16,
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <h3
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 500,
                      fontSize: 20,
                      lineHeight: 1.2,
                      color: "var(--on-accent)",
                      margin: 0,
                      whiteSpace: "pre-line",
                      letterSpacing: "-0.015em",
                      flex: 1,
                    }}
                  >
                    {r.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 500,
                      fontSize: 28,
                      color: "var(--accent)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                      marginLeft: 12,
                      flexShrink: 0,
                    }}
                  >
                    {r.n}
                  </span>
                </div>

                <p style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(244,239,228,.62)", margin: 0 }}>
                  {r.desc}
                </p>

                <div
                  style={{
                    background: "rgba(244,239,228,.06)",
                    borderRadius: 10,
                    padding: "14px 16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 4 }}>
                      Стоимость
                    </div>
                    <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: 16, color: "var(--on-accent)", lineHeight: 1.2 }}>
                      {r.priceMain}
                    </div>
                    {r.priceSub && (
                      <div style={{ fontSize: 11, color: "rgba(244,239,228,.5)", marginTop: 3 }}>{r.priceSub}</div>
                    )}
                  </div>
                  {r.timeMain && (
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 4 }}>
                        {r.timeLabel}
                      </div>
                      <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: 16, color: "var(--on-accent)" }}>
                        {r.timeMain}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={onCta}
                  style={{
                    appearance: "none",
                    cursor: "pointer",
                    border: "1px solid var(--accent)",
                    background: "transparent",
                    color: "var(--accent)",
                    padding: "14px",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    width: "100%",
                  }}
                >
                  Записаться →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
