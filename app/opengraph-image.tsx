import { ImageResponse } from "next/og";

export const alt = "Gorilla Labs";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "radial-gradient(circle at top, rgba(144,87,255,0.55), transparent 34%), linear-gradient(140deg, #09020f 0%, #150522 40%, #040109 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "76px",
              width: "76px",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.06)",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              letterSpacing: "0.35em",
            }}
          >
            GL
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ fontSize: "34px", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase" }}>Gorilla Labs</div>
            <div style={{ fontSize: "20px", color: "rgba(255,255,255,0.72)" }}>Automação de IA, branding e performance</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "900px" }}>
          <div style={{ fontSize: "72px", fontWeight: 800, lineHeight: 1.04 }}>
            IA, criatividade e growth design para marcas que precisam ganhar tração real.
          </div>
          <div style={{ fontSize: "28px", lineHeight: 1.5, color: "rgba(255,255,255,0.76)" }}>
            Landing pages, conteúdo, automações, tráfego, branding e operação visual em uma única agência.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
