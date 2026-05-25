import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        position: "relative",
        padding: 56,
        background:
          "linear-gradient(140deg, #051650 0%, #00072d 55%, #000000 100%)",
        color: "#ffffff",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 360,
          height: 360,
          borderRadius: 999,
          background: "rgba(77, 140, 255, 0.28)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -110,
          left: -90,
          width: 320,
          height: 320,
          borderRadius: 999,
          background: "rgba(21, 44, 130, 0.35)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          border: "1px solid rgba(184,194,224,0.4)",
          borderRadius: 28,
          padding: "44px 48px",
          background: "rgba(0, 7, 45, 0.55)",
          boxShadow: "0 24px 80px rgba(0, 0, 0, 0.45)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#4d8cff",
                color: "#00072d",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 24,
              }}
            >
              S
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                letterSpacing: 2,
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              SyncForge
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 1.2,
              color: "#b8c2e0",
              textTransform: "uppercase",
            }}
          >
            Software sob medida em Manaus
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: 930,
            }}
          >
            Sistemas e automacoes para vender mais e operar melhor
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 27,
            color: "#b8c2e0",
          }}
        >
          <div style={{ display: "flex" }}>
            CRM - ERP - PDV - WMS - Landing Pages - Bots WhatsApp/Telegram
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid rgba(77,140,255,0.5)",
              color: "#d8e6ff",
              fontSize: 18,
            }}
          >
            syncforge.com.br
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
