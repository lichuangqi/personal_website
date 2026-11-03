import { ImageResponse } from "next/og";

export const alt = "Charlie Li — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "#f7f8fa",
          color: "#111827",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "84px 96px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ color: "#008f99", display: "flex", fontSize: 28, letterSpacing: 4 }}>
          OPEN TO OPPORTUNITIES
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, marginTop: 28 }}>
          Charlie Li
        </div>
        <div style={{ display: "flex", fontSize: 38, marginTop: 18 }}>
          Software Engineer · Brisbane, Australia
        </div>
        <div style={{ background: "#245d9c", bottom: 0, display: "flex", height: 12, left: 0, position: "absolute", width: "100%" }} />
      </div>
    ),
    size,
  );
}
