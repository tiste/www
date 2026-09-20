import React from "react";
import { ResumeSection } from "../components/sections/ResumeSection";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";
import { pageMetadata } from "@/app/services/metadata";
import { CustomersSection } from "@/app/components/sections/CustomersSection";

export const metadata = pageMetadata({
  title: "Missions et expérience professionnelle",
  description:
    "Mes missions de développeur, tech lead et coach agile : Adeo, Leroy Merlin, OCTO, Bardahl, Roquette… Contexte, enjeux et résultats de chaque mission.",
  path: "/missions",
});

export default function MissionsPage() {
  return (
    <>
      <Nav />
      <ResumeSection isPage={true} />
      <CustomersSection />
      <Footer />
    </>
  );
}
