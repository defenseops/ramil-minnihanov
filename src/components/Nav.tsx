"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  ["Проблема", "#problem"],
  ["Форматы", "#services"],
  ["Прайс", "#pricing"],
  ["Метод", "#how"],
  ["Об авторе", "#about"],
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onPaper = scrolled;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "20px clamp(20px, 4vw, 64px)",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        gap: 16,
        transition: "background .3s ease, border-color .3s ease",
        background: onPaper ? "rgba(239,234,224,.95)" : "transparent",
        backdropFilter: onPaper ? "saturate(1.2) blur(8px)" : "none",
        borderBottom: onPaper ? "1px solid var(--rule)" : "1px solid transparent",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/logo-rm.png"
          alt="Рамиль Минниханов — логотип"
          width={110}
          height={55}
          style={{ objectFit: "contain" }}
        />
      </div>

      <nav className="ed-nav" style={{ display: "flex", gap: 28 }}>
        {LINKS.map(([text, href]) => (
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

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <a
          href="#contact"
          style={{
            fontSize: 13,
            fontWeight: 600,
            padding: "10px 18px",
            borderRadius: 999,
            color: onPaper ? "var(--ink)" : "#F4EFE4",
            textDecoration: "none",
            border: `1px solid ${onPaper ? "var(--rule)" : "rgba(244,239,228,.4)"}`,
            transition: "all .3s",
          }}
        >
          Связаться
        </a>
      </div>
    </header>
  );
}
