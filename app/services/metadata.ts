import { Metadata } from "next";

export const siteName = "Baptiste Lecocq";
export const siteUrl = "https://tiste.io";
export const siteTitle =
  "Baptiste Lecocq, ingénieur logiciel indépendant à Lille";
export const siteDescription =
  "Ingénieur logiciel freelance à Lille : développement web et mobile (React, React Native, Node.js), tech lead et coaching agile.";
const ogImage = { url: "/images/og.jpg", width: 1200, height: 1200 };

export function truncate(text: string, maxLength = 160) {
  const cleaned = text
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (cleaned.length <= maxLength) {
    return cleaned;
  }

  const cut = cleaned.slice(0, maxLength - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "fr_FR",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      site: "@tiste",
      creator: "@tiste",
      card: "summary",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
