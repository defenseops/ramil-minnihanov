"use client";
import { useState } from "react";

const ITEMS = [
  "Деньги есть, но куда уходят — непонятно",
  "Считаешь всё в голове или на калькуляторе",
  "Не знаешь реальную прибыль своего бизнеса",
  "Боишься кассового разрыва",
  "Устал держать всё в голове",
];

export default function Problem() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="problem"
      aria-label="Проблемы финансового управления бизнесом"
      style={{ background: "var(--bg)", padding: "clamp(90px, 10vw, 160px) 0" }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 clamp(20px, 4vw, 64px)" }}>
        <div
          className="problem-head"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
            gap: "clamp(28px, 4vw, 64px)",
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
              02 — Проблема
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
              Узнаёшь
              <br />
              <em style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 400 }}>
                себя?
              </em>
            </h2>
          </div>
          <p
            style={{
              fontSize: "clamp(15px, 1.1vw, 18px)",
              lineHeight: 1.6,
              color: "var(--ink-soft)",
              maxWidth: 480,
              margin: 0,
            }}
          >
            Если хотя бы один из этих симптомов знаком — значит, в бизнесе нет финансовой системы. Только интуиция и постоянное напряжение.
          </p>
        </div>

        <ol
          className="problem-list"
          style={{ listStyle: "none", padding: 0, margin: "clamp(48px, 6vw, 80px) 0 0" }}
        >
          {ITEMS.map((text, i) => (
            <li
              key={i}
              onMouseEnter={() => setActive(i)}
              style={{
                display: "grid",
                gridTemplateColumns: "100px minmax(0, 1fr) 56px",
                gap: 32,
                alignItems: "center",
                padding: `clamp(20px, 2.4vw, 32px) 0 clamp(20px, 2.4vw, 32px) ${active === i ? "24px" : "0"}`,
                borderTop: "1px solid var(--rule)",
                borderBottom: i === ITEMS.length - 1 ? "1px solid var(--rule)" : "none",
                cursor: "default",
                transition: "padding .2s ease",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: ".22em",
                  color: active === i ? "var(--accent)" : "var(--ink-muted)",
                  transition: "color .2s ease",
                }}
              >
                · 0{i + 1} ·
              </div>
              <div
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(24px, 3vw, 44px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  color: "var(--ink)",
                  textWrap: "balance",
                }}
              >
                {text}
              </div>
              <div
                style={{
                  justifySelf: "end",
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  border: `1px solid ${active === i ? "var(--accent)" : "var(--rule)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: active === i ? "var(--accent)" : "var(--ink-muted)",
                  fontSize: 14,
                  transition: "all .2s ease",
                }}
              >
                ↗
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
