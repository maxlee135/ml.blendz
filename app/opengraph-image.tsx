import { ImageResponse } from "next/og";

// This generates the preview card shown when the site link is shared
// (texted, posted in an IG bio, etc.). Built with next/og — free, no assets.
export const alt = "ml.blendz — precision cuts in Los Altos / Mountain View";
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
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, #1c1917, #09090b)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#D4A843",
            marginBottom: 24,
          }}
        >
          Los Altos · Mountain View
        </div>
        <div
          style={{
            fontSize: 140,
            fontWeight: 700,
            letterSpacing: 16,
          }}
        >
          ML.BLENDZ
        </div>
        <div style={{ fontSize: 36, color: "#a1a1aa", marginTop: 24 }}>
          Precision cuts. Real results. From $30.
        </div>
      </div>
    ),
    size
  );
}
