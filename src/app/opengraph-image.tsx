import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: 56,
        background:
          "linear-gradient(140deg, #051650 0%, #00072d 55%, #000000 100%)",
        color: "#ffffff",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          border: "1px solid rgba(184,194,224,0.35)",
          borderRadius: 28,
          padding: "44px 48px",
          background: "rgba(0, 7, 45, 0.45)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 2,
              color: "#b8c2e0",
              textTransform: "uppercase",
            }}
          >
            SyncForge
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.08,
              fontWeight: 700,
              maxWidth: 880,
            }}
          >
            Software sob medida em Manaus
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#b8c2e0",
          }}
        >
          CRM - ERP - PDV - OS - WMS - Landing Pages
        </div>
      </div>
    </div>,
    size,
  );
}
