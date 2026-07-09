import { ImageResponse } from "next/og";

// Applies to every route as the default OG / Twitter share image.
export const alt = "CLiKiT — We build brands that convert";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050707",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 150,
            fontWeight: 700,
            letterSpacing: "-4px",
            color: "#ffffff",
          }}
        >
          <span>CL</span>
          <span style={{ color: "#2ED3D3" }}>i</span>
          <span>K</span>
          <span style={{ color: "#2ED3D3" }}>i</span>
          <span>T</span>
          <span style={{ color: "#8BFF5C" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 38,
            color: "#C7D1D1",
          }}
        >
          We build brands that convert
        </div>
      </div>
    ),
    { ...size },
  );
}
