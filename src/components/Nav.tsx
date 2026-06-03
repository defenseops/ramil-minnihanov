"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  ["Проблема", "#problem"],
  ["Форматы", "#services"],
  ["Прайс", "#pricing"],
  ["Метод", "#how"],
  ["Об авторе", "#about"],
  ["Записаться", "#contact"],
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const onPaper = scrolled || menuOpen;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "clamp(10px, 2vw, 20px) clamp(16px, 4vw, 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background .3s ease, border-color .3s ease",
          background: onPaper ? "rgba(239,234,224,.97)" : "transparent",
          backdropFilter: onPaper ? "saturate(1.2) blur(8px)" : "none",
          borderBottom: onPaper ? "1px solid var(--rule)" : "1px solid transparent",
        }}
      >
        {/* Logo — left always */}
        <div className="nav-logo-wrap" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo-rm.png"
            alt="Рамиль Минниханов"
            width={110}
            height={55}
            className="nav-logo"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Desktop nav — center */}
        <nav className="ed-nav" style={{ display: "flex", gap: 28, position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          {LINKS.slice(0, 5).map(([text, href]) => (
            <a
              key={href}
              href={href}
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: onPaper ? "var(--ink)" : "#F4EFE4",
                textDecoration: "none",
                opacity: 0.85,
                transition: "opacity .2s",
              }}
            >
              {text}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="ed-nav"
          style={{
            fontSize: 13,
            fontWeight: 600,
            padding: "10px 18px",
            borderRadius: 999,
            color: onPaper ? "var(--ink)" : "#F4EFE4",
            textDecoration: "none",
            border: `1px solid ${onPaper ? "var(--rule)" : "rgba(244,239,228,.4)"}`,
            transition: "all .3s",
            flexShrink: 0,
          }}
        >
          Связаться
        </a>

        {/* Burger — mobile right */}
        <button
          className="nav-burger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          style={{
            display: "none",
            appearance: "none",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            padding: 6,
            color: onPaper ? "var(--ink)" : "#F4EFE4",
            flexShrink: 0,
          }}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
            <rect y="0" width="22" height="2" rx="1" fill="currentColor"
              style={{ transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none", transformOrigin: "center", transition: "transform .3s ease" }} />
            <rect y="7" width="22" height="2" rx="1" fill="currentColor"
              style={{ opacity: menuOpen ? 0 : 1, transition: "opacity .2s ease" }} />
            <rect y="14" width="22" height="2" rx="1" fill="currentColor"
              style={{ transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none", transformOrigin: "center", transition: "transform .3s ease" }} />
          </svg>
        </button>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 48,
          background: "rgba(26,24,21,.45)",
          backdropFilter: "blur(2px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity .35s ease",
        }}
      />

      {/* Slide-in drawer from left */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 49,
          width: "75vw",
          maxWidth: 320,
          background: "var(--bg)",
          display: "flex",
          flexDirection: "column",
          padding: "80px 28px 40px",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform .38s cubic-bezier(.4,0,.2,1)",
          boxShadow: menuOpen ? "8px 0 40px rgba(26,24,21,.18)" : "none",
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column" }}>
          {LINKS.map(([text, href], i) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 500,
                fontSize: 22,
                letterSpacing: "-0.015em",
                color: href === "#contact" ? "var(--accent)" : "var(--ink)",
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: i < LINKS.length - 1 ? "1px solid var(--rule)" : "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-16px)",
                transition: `opacity .3s ease ${i * 45 + 80}ms, transform .3s ease ${i * 45 + 80}ms`,
              }}
            >
              {text}
              <span style={{ fontSize: 14, opacity: 0.4 }}>→</span>
            </a>
          ))}
        </nav>

        <div style={{
          marginTop: "auto",
          paddingTop: 24,
          borderTop: "1px solid var(--rule)",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity .3s ease 380ms",
        }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 10 }}>
            Контакты
          </div>
          <a
            href="https://t.me/TheMrRAMiL"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 14, color: "var(--ink)", textDecoration: "none", display: "block", marginBottom: 6 }}
          >
            Telegram
          </a>
          <a
            href="https://www.instagram.com/findir_ramil_minnihanov/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 14, color: "var(--ink)", textDecoration: "none", display: "block" }}
          >
            Instagram
          </a>
        </div>
      </div>
    </>
  );
}
