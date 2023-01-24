import React from "react";
import { Layout } from "../components/layouts/Layout";
import { ResumeSection } from "../components/sections/ResumeSection";
import { CustomersSection } from "../components/sections/CustomersSection";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";
import { HeadProps, PageProps } from "gatsby";
import { Seo } from "../components/Seo";
import { Bio } from "../components/Bio";

export default function MissionsPage(props: PageProps) {
  return (
    <Layout>
      <Nav />
      <div className="only-print">
        <Bio />
      </div>
      <ResumeSection />
      <CustomersSection />
      <Footer />
    </Layout>
  );
}

export function Head(props: HeadProps) {
  return (
    <Seo
      title="Expérience professionnelle"
      description="Mon expérience dans le monde du web dans des missions très diverses, m'a convaincu que la fluidité de la communication et qu'un code bien designé sont des clés nécessaires dans la réussite d’un projet. Je maîtrise principalement les langages et frameworks du monde Javascript."
    />
  );
}
