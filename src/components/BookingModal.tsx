"use client";
import { useState, useEffect } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function BookingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [biz, setBiz] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep(0);
        setName("");
        setPhone("");
        setBiz("");
        setStatus("idle");
      }, 250);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  async function handleSubmit() {
    setStatus("loading");
    try {
      const res = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), business: biz.trim() }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setStep(2);
    } catch {
      setStatus("error");
    }
  }

  const inputStyle = (focused: boolean) => ({
    appearance: "none" as const,
    padding: "14px 16px",
    borderRadius: 12,
    border: `1.5px solid ${focused ? "var(--accent)" : "var(--rule)"}`,
    fontSize: 15,
    fontFamily: "inherit",
    color: "var(--ink)",
    background: "var(--bg-alt)",
    outline: "none",
    width: "100%",
    transition: "border-color .2s",
  });

  function FocusInput({
    value,
    onChange,
    placeholder,
    type = "text",
  }: {
    value: string;
    onChange: (v: string) => void;
    placeholder: string;
    type?: string;
  }) {
    const [focused, setFocused] = useState(false);
    return (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={inputStyle(focused)}
      />
    );
  }

  function FocusTextarea({
    value,
    onChange,
    placeholder,
  }: {
    value: string;
    onChange: (v: string) => void;
    placeholder: string;
  }) {
    const [focused, setFocused] = useState(false);
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ ...inputStyle(focused), resize: "vertical", minHeight: 90 }}
      />
    );
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(20,17,13,.65)",
        backdropFilter: "blur(6px)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        animation: "fadeIn .2s ease",
      }}
    >
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--bg)",
          color: "var(--ink)",
          borderRadius: 24,
          padding: 36,
          maxWidth: 520,
          width: "100%",
          border: "1px solid var(--rule)",
          boxShadow: "0 40px 100px rgba(0,0,0,.45)",
          position: "relative",
          animation: "fadeIn .25s ease",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Закрыть"
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            appearance: "none",
            border: 0,
            background: "transparent",
            cursor: "pointer",
            width: 36,
            height: 36,
            fontSize: 18,
            color: "var(--ink-muted)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✕
        </button>

        {step < 2 ? (
          <>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              Запись · Шаг {step + 1} из 2
            </span>

            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(26px, 3vw, 36px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                margin: "12px 0 8px",
                color: "var(--ink)",
              }}
            >
              {step === 0 ? "Запишись на разбор" : "Расскажи про бизнес"}
            </h3>
            <p style={{ fontSize: 15, color: "var(--ink-soft)", margin: "0 0 22px", lineHeight: 1.55 }}>
              {step === 0
                ? "30 минут — разберём твою ситуацию и предложим следующий шаг."
                : "Это поможет подготовиться к встрече."}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {step === 0 ? (
                <>
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-muted)" }}>Имя</span>
                    <FocusInput value={name} onChange={setName} placeholder="Ваше имя" />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-muted)" }}>Телефон / WhatsApp</span>
                    <FocusInput value={phone} onChange={setPhone} placeholder="+7 ___ ___ __ __" type="tel" />
                  </label>
                </>
              ) : (
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-muted)" }}>Чем занимаетесь?</span>
                  <FocusTextarea value={biz} onChange={setBiz} placeholder="Магазин, производство, услуги…" />
                </label>
              )}
            </div>

            {status === "error" && (
              <div style={{ marginTop: 14, padding: "10px 14px", borderRadius: 10, background: "rgba(122,32,24,.08)", color: "var(--accent)", fontSize: 13 }}>
                Ошибка отправки. Попробуйте ещё раз.
              </div>
            )}

            <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 12, color: "var(--ink-muted)" }}>Ответ в течение рабочего дня</span>
              <button
                onClick={() => {
                  if (step === 0) { setStep(1); }
                  else { handleSubmit(); }
                }}
                disabled={step === 0 ? !(name.trim() && phone.trim()) : !biz.trim() || status === "loading"}
                style={{
                  appearance: "none",
                  border: 0,
                  cursor: "pointer",
                  background: "var(--accent)",
                  color: "var(--on-accent)",
                  padding: "14px 22px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 600,
                  opacity: (step === 0 ? name.trim() && phone.trim() : biz.trim() && status !== "loading") ? 1 : 0.4,
                  transition: "opacity .2s",
                }}
              >
                {step === 0 ? "Дальше →" : status === "loading" ? "Отправка..." : "Отправить →"}
              </button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "24px 0 8px" }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 999,
                background: "var(--accent-soft)",
                color: "var(--accent)",
                margin: "0 auto 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
              }}
            >
              ✓
            </div>
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(26px, 3vw, 36px)",
                letterSpacing: "-0.02em",
                margin: 0,
                color: "var(--ink)",
              }}
            >
              Заявка отправлена
            </h3>
            <p style={{ color: "var(--ink-soft)", marginTop: 12, fontSize: 15, lineHeight: 1.55 }}>
              Свяжусь с тобой в течение рабочего дня. До встречи!
            </p>
            <button
              onClick={onClose}
              style={{
                marginTop: 24,
                appearance: "none",
                border: "1px solid var(--rule)",
                background: "transparent",
                color: "var(--ink)",
                cursor: "pointer",
                padding: "14px 26px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
