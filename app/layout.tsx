import type { Metadata } from "next";
import React from "react";
import { siteUrl } from "@/app/services/metadata";

// Racine commune, volontairement vide : le site (groupe « site ») et la page de
// l'app Nocturne (groupe « nocturne ») ont chacun leur mise en page et leurs styles.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
