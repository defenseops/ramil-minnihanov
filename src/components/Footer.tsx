import Image from "next/image";

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
            <div style={{ marginBottom: 16 }}>
              <Image
                src="/logo-rm.png"
                alt="Рамиль Минниханов — логотип"
                width={100}
                height={50}
                style={{ objectFit: "contain" }}
              />
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
            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/findir_ramil_minnihanov/",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4.5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
                {
                  label: "Telegram",
                  href: "https://t.me/TheMrRAMiL",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm4.93 6.857-1.692 7.976c-.127.567-.463.706-.937.439l-2.59-1.908-1.25 1.203c-.138.138-.254.254-.52.254l.186-2.634 4.8-4.337c.208-.186-.046-.29-.323-.104L7.547 14.43l-2.54-.794c-.552-.172-.563-.552.116-.818l9.638-3.717c.46-.167.862.112.669.756Z" />
                    </svg>
                  ),
                },
                {
                  label: "Threads",
                  href: "https://www.threads.com/@findir_ramil_minnihanov",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.028-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.508 5.467l-2.04.569c-1.087-3.935-3.665-5.955-7.3-5.981-2.954.02-5.232.956-6.772 2.784-1.388 1.647-2.118 4.088-2.141 7.063.023 2.978.753 5.42 2.14 7.066 1.54 1.827 3.82 2.765 6.773 2.785 2.668-.018 4.508-.664 5.894-2.059 1.578-1.587 1.866-3.617 1.889-5.289l.001-.105c-.056-1.128-.344-2.16-1.028-2.963-.478-.561-1.1-.93-1.86-1.123-.166 1.143-.508 2.128-1.024 2.928-.635.975-1.495 1.655-2.557 2.017-1.036.352-2.17.38-3.289.083-1.094-.29-2.002-.882-2.625-1.71-.63-.838-.938-1.877-.891-3.006.05-1.19.484-2.213 1.26-2.956.803-.77 1.9-1.175 3.175-1.175.283 0 .572.022.858.064.73.107 1.382.382 1.946.82.036-.336.043-.678.02-1.023-.064-.986-.47-1.762-1.204-2.305-.71-.525-1.706-.803-2.893-.826-2.42.014-3.948 1.406-3.97 3.625-.024 2.453 1.43 3.984 3.92 4.048.61.016 1.176-.085 1.688-.301l.675 1.904c-.73.3-1.537.447-2.41.425-3.514-.09-5.85-2.45-5.817-5.999.033-3.376 2.378-5.529 5.925-5.541 1.626.021 3.034.449 4.088 1.24.988.74 1.672 1.788 1.823 3.122.073.645.063 1.284-.03 1.912.558.22 1.056.53 1.484 1.011.93 1.065 1.289 2.463 1.348 3.771l-.001.106c-.025 2.097-.382 4.61-2.403 6.651-1.777 1.793-4.14 2.64-7.253 2.661Z" />
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
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
                    fontSize: 18,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    transition: "color .2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)")}
                >
                  <span style={{ opacity: 0.6, display: "flex" }}>{icon}</span>
                  {label}
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
