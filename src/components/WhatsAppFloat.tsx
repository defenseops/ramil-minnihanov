"use client";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://t.me/TheMrRAMiL"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в Telegram"
      className="animate-wa-pulse"
      style={{
        position: "fixed",
        right: "clamp(16px, 3vw, 32px)",
        bottom: "clamp(16px, 3vw, 32px)",
        zIndex: 90,
        width: 60,
        height: 60,
        borderRadius: 999,
        background: "var(--accent)",
        color: "var(--on-accent)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        boxShadow: "0 12px 32px -8px rgba(122,32,24,.6)",
        transition: "transform .2s ease",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px) scale(1.04)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0) scale(1)")}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm4.93 6.857-1.692 7.976c-.127.567-.463.706-.937.439l-2.59-1.908-1.25 1.203c-.138.138-.254.254-.52.254l.186-2.634 4.8-4.337c.208-.186-.046-.29-.323-.104L7.547 14.43l-2.54-.794c-.552-.172-.563-.552.116-.818l9.638-3.717c.46-.167.862.112.669.756Z" />
      </svg>
    </a>
  );
}
