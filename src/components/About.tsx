import Image from "next/image";

export default function About() {
  return (
    <section id="about" aria-label="О финансовом консультанте Рамиле Минниханове" style={{ background: "var(--bg)", padding: "clamp(90px, 10vw, 160px) 0" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 clamp(20px, 4vw, 64px)" }}>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 6fr) minmax(0, 6fr)",
            gap: "clamp(28px, 4vw, 80px)",
            alignItems: "stretch",
          }}
        >
          {/* Portrait */}
          <figure
            className="about-figure"
            style={{
              margin: 0,
              position: "relative",
              aspectRatio: "4/5",
              borderRadius: 24,
              overflow: "hidden",
              background: "var(--duo-dark)",
            }}
          >
            <Image
              src="/images/ramil-3.jpg"
              alt="Рамиль Минниханов — финансовый консультант, Алматы, Казахстан"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center 15%",
                filter: "saturate(.7) contrast(1.04) brightness(.93)",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 60%, rgba(43,14,8,.67) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 22,
                bottom: 22,
                color: "#F4EFE4",
                fontSize: 12,
                opacity: 0.75,
                letterSpacing: ".14em",
                textTransform: "uppercase",
              }}
            >
              Алматы · Казахстан
            </div>
          </figure>

          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              07 — Об авторе
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
              }}
            >
              Рамиль{" "}
              <em style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 400 }}>
                Минниханов
              </em>
            </h2>

            <p
              style={{
                fontSize: "clamp(16px, 1.2vw, 19px)",
                lineHeight: 1.55,
                color: "var(--ink-soft)",
                margin: "28px 0 0",
                maxWidth: 540,
                textWrap: "pretty",
              }}
            >
              Финансовый консультант для малого и среднего бизнеса. Помогаю собственникам навести порядок в&nbsp;деньгах и&nbsp;выстроить систему, которая работает без постоянного участия владельца.
            </p>

            <blockquote
              style={{
                margin: "32px 0 0",
                padding: "0 0 0 24px",
                borderLeft: "2px solid var(--accent)",
                fontFamily: "'Newsreader', serif",
                fontStyle: "italic",
                fontSize: "clamp(20px, 1.8vw, 26px)",
                lineHeight: 1.3,
                color: "var(--ink)",
                textWrap: "balance",
              }}
            >
              «Система — это не таблица в Excel. Это инструмент, который освобождает собственника от ежедневного контроля».
            </blockquote>

            <div
              className="about-stats"
              style={{
                marginTop: 40,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 0,
                paddingTop: 28,
                borderTop: "1px solid var(--rule)",
              }}
            >
              {[
                ["7 лет", "опыта"],
                ["50+", "клиентов"],
                ["KZ", "Казахстан"],
                ["100%", "под бизнес"],
              ].map(([n, l], i) => (
                <div
                  key={n}
                  style={{
                    paddingRight: i < 3 ? 18 : 0,
                    paddingLeft: i > 0 ? 18 : 0,
                    borderRight: i < 3 ? "1px solid var(--rule)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(22px, 2vw, 30px)",
                      color: "var(--ink)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {n}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: ".14em",
                      textTransform: "uppercase",
                      color: "var(--ink-muted)",
                      marginTop: 8,
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
