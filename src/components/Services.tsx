"use client";
import { useState } from "react";

const CARDS = [
  { n: "01", name: "Экспресс‑разбор", desc: "Быстрая диагностика финансового состояния бизнеса" },
  { n: "02", name: "Внедрение системы", desc: "Полный цикл — от сбора данных до создания отчётности" },
  { n: "03", name: "Сопровождение", desc: "Ежемесячная поддержка и адаптация инструментов" },
  { n: "04", name: "Комплекс", desc: "Диагностика + сборка системы + внедрение + сопровождение", highlight: true },
] as const;

function ServiceCard({
  card,
  onCta,
}: {
  card: (typeof CARDS)[number];
  onCta: () => void;
}) {
  const [hover, setHover] = useState(false);
  const hl = "highlight" in card && card.highlight;

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        padding: "clamp(28px, 3vw, 40px)",
        background: hl ? "var(--ink)" : "var(--bg)",
        color: hl ? "var(--on-accent)" : "var(--ink)",
        border: `1px solid ${hl ? "var(--ink)" : "var(--rule)"}`,
        borderRadius: 24,
        minHeight: 340,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 24,
        transition: "transform .25s ease, box-shadow .25s ease",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover ? "0 24px 56px -24px rgba(26,24,21,.35)" : "0 1px 0 rgba(0,0,0,.02)",
        overflow: "hidden",
      }}
    >
      {hl && (
        <>
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              borderRadius: 999,
              background: "radial-gradient(circle, rgba(122,32,24,.4), transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 22,
              right: 22,
              padding: "6px 12px",
              borderRadius: 999,
              background: "var(--accent)",
              color: "var(--on-accent)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            Популярный
          </div>
        </>
      )}

      <div style={{ position: "relative" }}>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: hl ? "rgba(244,239,228,.7)" : "var(--accent)",
          }}
        >
          № {card.n}
        </span>
        <h3
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(28px, 3vw, 40px)",
            lineHeight: 1,
            letterSpacing: "-0.025em",
            margin: "16px 0 16px",
            color: "inherit",
          }}
        >
          {card.name}
        </h3>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.55,
            color: hl ? "rgba(244,239,228,.7)" : "var(--ink-soft)",
            margin: 0,
            maxWidth: 420,
          }}
        >
          {card.desc}
        </p>
      </div>

      <button
        onClick={onCta}
        style={{
          appearance: "none",
          border: 0,
          cursor: "pointer",
          background: hl ? "var(--accent)" : "transparent",
          color: hl ? "var(--on-accent)" : "var(--ink)",
          padding: hl ? "14px 22px" : "14px 0",
          borderRadius: hl ? 999 : 0,
          borderBottom: hl ? "0" : "1px solid var(--ink)",
          fontSize: 14,
          fontWeight: 600,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          alignSelf: hl ? "flex-start" : "stretch",
          width: hl ? "auto" : "100%",
        }}
      >
        Выбрать формат
        <span style={{ opacity: 0.7 }}>→</span>
      </button>
    </article>
  );
}

export default function Services({ onCta }: { onCta: () => void }) {
  return (
    <section
      id="services"
      aria-label="Форматы работы финансового консультанта"
      style={{
        background: "var(--bg-alt)",
        padding: "clamp(90px, 10vw, 160px) 0",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 clamp(20px, 4vw, 64px)" }}>
        <div
          className="services-head"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) auto",
            gap: 24,
            alignItems: "end",
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
              03 — Услуги
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
                textWrap: "balance",
              }}
            >
              Форматы{" "}
              <em style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 700 }}>работы</em>
            </h2>
          </div>
          <div
            className="services-meta"
            style={{ color: "var(--ink-muted)", fontSize: 14, maxWidth: 280, textAlign: "right" }}
          >
            От разовой диагностики до полного цикла под ключ
          </div>
        </div>

        <div
          className="services-grid"
          style={{
            marginTop: "clamp(48px, 6vw, 72px)",
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 20,
          }}
        >
          {CARDS.map((c) => (
            <ServiceCard key={c.n} card={c} onCta={onCta} />
          ))}
        </div>
      </div>
    </section>
  );
}
