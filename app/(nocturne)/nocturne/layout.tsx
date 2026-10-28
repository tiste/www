import type { Metadata, Viewport } from "next";
import React from "react";
import "./nocturne.scss";

// Mise en page à part pour la page de l'app Nocturne : en anglais, aux couleurs
// de l'app, sans le menu ni le pied de page du site, pour qu'App Review y voie
// une vraie page de support et pas un portfolio. La balise html vient de la
// racine (en français) : le lang="en" est donc porté par la page.
export const metadata: Metadata = {
  title: "Nocturne Support",
  description:
    "Help, contact and privacy policy for Nocturne, a calm breathing app for the end of the day.",
  alternates: { canonical: "/nocturne" },
  icons: { icon: "/images/nocturne/icon.png" },
  openGraph: {
    title: "Nocturne Support",
    description:
      "Help, contact and privacy policy for Nocturne, a calm breathing app for the end of the day.",
    url: "/nocturne",
    siteName: "Nocturne",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/nocturne/icon.png", width: 256, height: 256 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#06081a",
  colorScheme: "dark",
};

export default function NocturneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
