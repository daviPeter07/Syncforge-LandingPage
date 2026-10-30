import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import {
  SYNCFORGE_LOGO_BOTTOM_PIECE,
  SYNCFORGE_LOGO_TOP_PIECE,
  SYNCFORGE_LOGO_VIEWBOX,
} from "@/constants/brand";
import { SOCIAL_IMAGE_CONTENT } from "@/constants/seo";
import { getSiteUrl } from "@/lib/seo";

export const SOCIAL_IMAGE_SIZE = { width: 1200, height: 630 };

const FONT_DIR = join(process.cwd(), "src/assets/fonts");

async function loadFonts() {
  const [medium, semiBold, bold] = await Promise.all(
    ["Poppins-Medium.ttf", "Poppins-SemiBold.ttf", "Poppins-Bold.ttf"].map(
      (file) => readFile(join(FONT_DIR, file)),
    ),
  );

  return [
    { name: "Poppins", data: medium, weight: 500 as const, style: "normal" },
    { name: "Poppins", data: semiBold, weight: 600 as const, style: "normal" },
    { name: "Poppins", data: bold, weight: 700 as const, style: "normal" },
  ] as const;
}

function Logo({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size * (439 / 430)}
      viewBox={SYNCFORGE_LOGO_VIEWBOX}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#77a7ff" />
          <stop offset="55%" stopColor="#2459f5" />
          <stop offset="100%" stopColor="#0a3499" />
        </linearGradient>
      </defs>
      <path d={SYNCFORGE_LOGO_TOP_PIECE} fill="url(#logo-fill)" />
      <path d={SYNCFORGE_LOGO_BOTTOM_PIECE} fill="url(#logo-fill)" />
    </svg>
  );
}

/**
 * Imagem de compartilhamento (OpenGraph/Twitter): logo, mensagem principal do
 * Hero e domínio, com bastante respiro.
 */
export async function renderSocialImage() {
  const fonts = await loadFonts();
  const host = new URL(getSiteUrl()).host;
  const content = SOCIAL_IMAGE_CONTENT;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        position: "relative",
        padding: "72px 80px",
        backgroundColor: "#00041a",
        color: "#ffffff",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 15,
          right: -100,
          width: 600,
          height: 600,
          borderRadius: 999,
          backgroundImage:
            "radial-gradient(circle, rgba(36,89,245,0.32) 0%, transparent 65%)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 720,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: -0.5,
          }}
        >
          SyncForge
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -1.5,
            }}
          >
            <div style={{ display: "flex" }}>{content.headline}</div>
            <div style={{ display: "flex", color: "#6f9dff" }}>
              {content.highlight}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 26,
              fontWeight: 500,
              color: "#8d9bc2",
            }}
          >
            {content.subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 20,
            fontWeight: 500,
            color: "#5f6d94",
          }}
        >
          {host}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 110,
          top: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Logo size={230} />
      </div>
    </div>,
    { ...SOCIAL_IMAGE_SIZE, fonts: [...fonts] },
  );
}
