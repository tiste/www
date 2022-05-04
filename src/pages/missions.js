import React from "react";
import { Layout } from "../components/layouts/Layout";
import { ResumeSection } from "../components/sections/resume";
import { CustomersSection } from "../components/sections/customers";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";

export default function MissionsPage() {
  return (
    <Layout
      title="Expérience professionnelle"
      description="Mon expérience dans le monde du web dans des missions très diverses, m'a convaincu que la fluidité de la communication et qu'un code bien designé sont des clés nécessaires dans la réussite d’un projet. Je maîtrise principalement les langages et frameworks du monde Javascript."
    >
      <Nav />
      <ResumeSection />
      <CustomersSection />
      <Footer />
    </Layout>
  );
}
