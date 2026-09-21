import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Sen Studio — Design that makes Sen(se)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/images/sen-logo-icon.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0f1114",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "72px 84px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#911712",
            borderRadius: "999px",
            height: "760px",
            position: "absolute",
            right: "-260px",
            top: "-160px",
            width: "760px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "660px", position: "relative" }}>
          <div style={{ color: "#d6d6d6", display: "flex", fontSize: 24, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Sen Studio
          </div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: "-0.06em", lineHeight: 1.02, marginTop: 22 }}>
            Design that makes Sen(se).
          </div>
          <div style={{ color: "#c8c8c8", display: "flex", fontSize: 28, lineHeight: 1.35, marginTop: 30 }}>
            Art direction, visual design, and digital experiences by Arghya Sen.
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            background: "#911712",
            border: "2px solid rgba(255,255,255,0.45)",
            borderRadius: "44px",
            display: "flex",
            height: "320px",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            width: "320px",
          }}
        >
          <img alt="" src={logoSrc} style={{ height: "240px", objectFit: "contain", width: "240px" }} />
        </div>
      </div>
    ),
    size,
  );
}
