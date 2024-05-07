import React from "react";
import { ResumeSection } from "../components/sections/ResumeSection";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";
import { Metadata } from "next";
import { CustomersSection } from "@/app/components/sections/CustomersSection";

export const metadata: Metadata = {
  title: "Expérience professionnelle",
  description:
    "Mon expérience dans le monde du web dans des missions très diverses, m'a convaincu que la fluidité de la communication et qu'un code bien designé sont des clés nécessaires dans la réussite d’un projet. Je maîtrise principalement les langages et frameworks du monde Javascript.",
  alternates: {
    canonical: "/missions",
  },
};

export default function MissionsPage() {
  return (
    <>
      <Nav />
      <ResumeSection />
      <CustomersSection />
      <Footer />
    </>
  );
}
