"use client";
import { useState } from "react";
import Image from "next/image";
import Nav from "./Nav";

function BigButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        appearance: "none",
        cursor: "pointer",
        border: 0,
        background: "var(--accent)",
        color: "var(--on-accent)",
        padding: "18px 26px 18px 28px",
        borderRadius: 999,
        fontSize: 15,
        fontWeight: 600,
        letterSpacing: "-0.005em",
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
        boxShadow: "0 14px 40px -10px rgba(122,32,24,.5)",
        transition: "transform .2s ease",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      {children}
      <span
        style={{
          width: 26,
          height: 26,
          borderRadius: 999,
          background: "rgba(255,255,255,.18)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
        }}
      >
        →
      </span>
    </button>
  );
}

export default function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section
      aria-label="Главная — финансовый консультант Рамиль Минниханов"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "#0F0B07",
        color: "#F4EFE4",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Full-bleed photo */}
      <div aria-hidden style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/images/ramil-1.jpg"
          alt="Рамиль Минниханов — финансовый консультант, Алматы, Казахстан"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "right 15%",
            filter: "saturate(.9) contrast(1.02) brightness(.96)",
          }}
        />
      </div>

      {/* Left gradient for text legibility */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(15,11,7,.97) 0%, rgba(15,11,7,.92) 25%, rgba(15,11,7,.7) 42%, rgba(15,11,7,.2) 58%, rgba(15,11,7,0) 70%)",
        }}
      />
      {/* Bottom fade */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, transparent 60%, rgba(15,11,7,.55) 100%)",
        }}
      />
      {/* Vignette */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 240px rgba(0,0,0,.45)",
          pointerEvents: "none",
        }}
      />

      <Nav />

      {/* Hero copy */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          flex: 1,
          display: "flex",
          alignItems: "flex-end",
          padding: "120px clamp(20px, 4vw, 64px) clamp(60px, 8vw, 100px)",
        }}
      >
        <div className="hero-copy" style={{ maxWidth: 1360, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)", alignItems: "end", gap: 0 }}>
          {/* Left column — all text */}
          <div className="hero-text-col">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: "#F4EFE4",
                opacity: 0.78,
                marginBottom: 24,
              }}
            >
              <span style={{ width: 24, height: 1, background: "#F4EFE4", display: "inline-block", opacity: 0.5 }} />
              Финансовый консультант · Казахстан
            </div>

            <h1
              className="hero-h"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(28px, 4vw, 72px)",
                lineHeight: 0.97,
                letterSpacing: "-0.03em",
                color: "#F4EFE4",
                margin: 0,
                textWrap: "balance",
                textShadow: "0 2px 30px rgba(0,0,0,.35)",
              }}
            >
              «Соберу понятную систему контроля{" "}
              <em style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 700 }}>
                прибыли, расходов и движения денег
              </em>
              {" "}— всего за&nbsp;7&nbsp;дней»
            </h1>

            <p
              style={{
                fontSize: "clamp(14px, 1.1vw, 17px)",
                lineHeight: 1.55,
                color: "rgba(244,239,228,.85)",
                margin: "28px 0 0",
                textWrap: "pretty",
                textShadow: "0 1px 20px rgba(0,0,0,.5)",
              }}
            >
              Помогаю собственникам малого и среднего бизнеса в Казахстане: офлайн и онлайн магазины, производства, сервисные компании, медицинские и учебные центры, компании с филиальной сетью и Kaspi‑магазины.
            </p>

            <div
              style={{
                marginTop: 36,
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                alignItems: "center",
              }}
            >
              <BigButton onClick={onCta}>Записаться на разбор</BigButton>
              <a
                href="#services"
                style={{
                  color: "#F4EFE4",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 500,
                  padding: "16px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(244,239,228,.28)",
                  background: "rgba(244,239,228,.04)",
                  backdropFilter: "blur(8px)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                Посмотреть форматы
                <span style={{ opacity: 0.7 }}>→</span>
              </a>
            </div>

            {/* Trust stats */}
            <div
              className="hero-meta"
              style={{
                marginTop: "clamp(40px, 5vw, 72px)",
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: 1,
                background: "rgba(244,239,228,.18)",
                borderTop: "1px solid rgba(244,239,228,.22)",
                borderBottom: "1px solid rgba(244,239,228,.22)",
              }}
            >
              {[
                ["7 лет", "практики"],
                ["50+", "клиентов"],
                ["7 дней", "до системы"],
                ["100%", "под бизнес"],
              ].map(([n, l]) => (
                <div key={n} style={{ background: "rgba(15,11,7,.45)", backdropFilter: "blur(8px)", padding: "18px 16px" }}>
                  <div
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(20px, 1.8vw, 28px)",
                      color: "#F4EFE4",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {n}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(244,239,228,.62)",
                      marginTop: 7,
                      letterSpacing: ".06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right column — empty, photo shows through */}
          <div aria-hidden />
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#problem"
        className="scroll-cue"
        aria-label="Листать вниз"
        style={{
          position: "absolute",
          bottom: 22,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          width: 30,
          height: 50,
          borderRadius: 999,
          border: "1px solid rgba(244,239,228,.4)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: 9,
          textDecoration: "none",
        }}
      >
        <span
          className="animate-scroll-dot"
          style={{
            width: 4,
            height: 9,
            borderRadius: 999,
            background: "#F4EFE4",
          }}
        />
      </a>
    </section>
  );
}
