"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const SERVICES = [
  "Аудит финансовой отчётности",
  "Внедрение системы учёта",
  "Сопровождение с финансовым директором",
  "Не знаю, нужна консультация",
];

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "var(--ink-muted)",
        }}
      >
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          appearance: "none",
          padding: "16px 18px",
          borderRadius: 14,
          border: `1.5px solid ${focused ? "var(--accent)" : "var(--rule)"}`,
          fontSize: 15,
          fontFamily: "inherit",
          color: "var(--ink)",
          background: "var(--bg)",
          outline: "none",
          transition: "border-color .2s",
          width: "100%",
        }}
      />
    </label>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "var(--ink-muted)",
        }}
      >
        {label}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          appearance: "none",
          padding: "16px 18px",
          borderRadius: 14,
          border: `1.5px solid ${focused ? "var(--accent)" : "var(--rule)"}`,
          fontSize: 15,
          fontFamily: "inherit",
          color: "var(--ink)",
          background: "var(--bg)",
          outline: "none",
          transition: "border-color .2s",
          resize: "vertical",
          width: "100%",
          minHeight: 110,
        }}
      />
    </label>
  );
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [service, setService] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const canSubmit = name.trim() && phone.trim();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), business: business.trim(), service }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setPhone("");
        setBusiness("");
        setService("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      aria-label="Записаться на консультацию к финансовому консультанту"
      style={{
        background: "var(--bg-alt)",
        padding: "clamp(90px, 10vw, 160px) 0",
        borderTop: "1px solid var(--rule)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 clamp(20px, 4vw, 64px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
            gap: "clamp(40px, 6vw, 100px)",
            alignItems: "start",
          }}
          className="contact-layout"
        >
          {/* Left — heading */}
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
              08 — Следующий шаг
            </span>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(40px, 5vw, 76px)",
                lineHeight: 0.98,
                letterSpacing: "-0.025em",
                color: "var(--ink)",
                margin: "18px 0 0",
                textWrap: "balance",
              }}
            >
              Готов навести{" "}
              <em style={{ fontFamily: "'Newsreader', serif", fontStyle: "italic", fontWeight: 400 }}>
                порядок
              </em>{" "}
              в финансах?
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 1.1vw, 18px)",
                lineHeight: 1.6,
                color: "var(--ink-soft)",
                margin: "24px 0 0",
                maxWidth: 420,
              }}
            >
              Запишись на бесплатный экспресс‑разбор финансов — разберём твою ситуацию за 30 минут и предложим конкретный следующий шаг для наведения порядка в деньгах бизнеса.
            </p>

            <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                ["Бесплатная консультация", "30 минут — без обязательств"],
                ["Ответ в течение дня", "Свяжусь в Telegram или Instagram"],
                ["Работаю по всему Казахстану", "Дистанционно или в Алматы"],
              ].map(([title, desc]) => (
                <div key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 999,
                      background: "var(--accent)",
                      color: "var(--on-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    ✓
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15, color: "var(--ink)" }}>{title}</div>
                    <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 2 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            style={{
              background: "var(--bg)",
              borderRadius: 24,
              padding: "clamp(28px, 3vw, 44px)",
              border: "1px solid var(--rule)",
              boxShadow: "0 20px 60px -20px rgba(26,24,21,.12)",
            }}
          >
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 999,
                    background: "var(--accent-soft)",
                    color: "var(--accent)",
                    margin: "0 auto 20px",
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
                  onClick={() => setStatus("idle")}
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
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(24px, 2.4vw, 32px)",
                    letterSpacing: "-0.02em",
                    margin: "0 0 4px",
                    color: "var(--ink)",
                  }}
                >
                  Оставить заявку
                </h3>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: "0 0 8px", lineHeight: 1.5 }}>
                  Заполни форму — ответ в течение рабочего дня
                </p>

                <InputField label="Имя *" value={name} onChange={setName} placeholder="Ваше имя" />
                <InputField
                  label="Телефон / WhatsApp *"
                  value={phone}
                  onChange={setPhone}
                  placeholder="+7 ___ ___ __ __"
                  type="tel"
                />
                <TextareaField
                  label="Расскажите о бизнесе"
                  value={business}
                  onChange={setBusiness}
                  placeholder="Магазин, производство, услуги — чем занимаетесь?"
                />

                {/* Service selector */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: ".18em",
                      textTransform: "uppercase",
                      color: "var(--ink-muted)",
                    }}
                  >
                    Интересующая услуга
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {SERVICES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setService(service === s ? "" : s)}
                        style={{
                          appearance: "none",
                          cursor: "pointer",
                          padding: "10px 16px",
                          borderRadius: 999,
                          border: `1px solid ${service === s ? "var(--accent)" : "var(--rule)"}`,
                          background: service === s ? "var(--accent-soft)" : "transparent",
                          color: service === s ? "var(--accent)" : "var(--ink-soft)",
                          fontSize: 13,
                          fontWeight: 500,
                          transition: "all .2s",
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {status === "error" && (
                  <div
                    style={{
                      padding: "12px 16px",
                      borderRadius: 10,
                      background: "rgba(122,32,24,.08)",
                      color: "var(--accent)",
                      fontSize: 14,
                    }}
                  >
                    Что-то пошло не так. Попробуйте ещё раз или напишите в Telegram.
                  </div>
                )}

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginTop: 4 }}>
                  <span style={{ fontSize: 12, color: "var(--ink-muted)" }}>Ответим в течение 1 рабочего дня</span>
                  <button
                    type="submit"
                    disabled={!canSubmit || status === "loading"}
                    style={{
                      appearance: "none",
                      border: 0,
                      cursor: canSubmit && status !== "loading" ? "pointer" : "not-allowed",
                      background: "var(--accent)",
                      color: "var(--on-accent)",
                      padding: "16px 28px",
                      borderRadius: 999,
                      fontSize: 15,
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      opacity: canSubmit && status !== "loading" ? 1 : 0.4,
                      transition: "opacity .2s",
                      boxShadow: canSubmit ? "0 8px 24px -8px rgba(122,32,24,.4)" : "none",
                    }}
                  >
                    {status === "loading" ? "Отправка..." : "Отправить →"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
