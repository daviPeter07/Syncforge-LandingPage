import { ImageResponse } from "next/og";
import {
  SYNCFORGE_LOGO_BOTTOM_PIECE,
  SYNCFORGE_LOGO_TOP_PIECE,
  SYNCFORGE_LOGO_VIEWBOX,
} from "@/constants/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00072d",
      }}
    >
      <svg
        width={112}
        height={114}
        viewBox={SYNCFORGE_LOGO_VIEWBOX}
        aria-hidden="true"
      >
        <path d={SYNCFORGE_LOGO_TOP_PIECE} fill="#2459f5" />
        <path d={SYNCFORGE_LOGO_BOTTOM_PIECE} fill="#2459f5" />
      </svg>
    </div>,
    size,
  );
}
