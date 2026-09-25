import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #050507 0%, #0b0b16 60%, #10101f 100%)",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(34,211,238,0.45) 0%, rgba(34,211,238,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -160,
            bottom: -200,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(167,139,250,0.4) 0%, rgba(167,139,250,0) 70%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#22d3ee" }}>
          <div style={{ width: 40, height: 2, background: "#22d3ee" }} />
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 34, color: "#a6a6b8" }}>{profile.role}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#72728a" }}>
          <span>{profile.currently}</span>
          <span>{siteUrl.replace("https://", "")}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
