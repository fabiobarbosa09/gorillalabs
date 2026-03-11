import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gorilla Labs",
    short_name: "Gorilla Labs",
    description: "Agência de automação de IA, branding e performance.",
    start_url: "/",
    display: "standalone",
    background_color: "#06010d",
    theme_color: "#06010d",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
