import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Baptiste Lecocq, ingénieur logiciel indépendant à Lille",
    short_name: "Baptiste Lecocq",
    start_url: "/",
    background_color: "#FFCE00",
    theme_color: "#FFCE00",
    display: "minimal-ui",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
