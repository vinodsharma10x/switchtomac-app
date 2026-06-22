import { ImageResponse } from "next/og";

export const alt = "The Switch to Mac skill for Claude and Codex";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F5F6F9",
          padding: "76px 80px",
          fontFamily: "sans-serif",
          borderTop: "10px solid #2F6BFF",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: 3, color: "#2F6BFF" }}>
          SWITCH SKILL
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#14161B", lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 1000 }}>
            Ask Claude or Codex for any Mac shortcut
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#6E747F" }}>
            The free Switch to Mac skill, right in your chat.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26, color: "#6E747F" }}>
          <div style={{ display: "flex" }}>switchtomac.app/skill</div>
          <div style={{ display: "flex" }}>Free and open source</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
