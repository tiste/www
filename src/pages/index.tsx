import React from "react";
import { Layout } from "../components/layouts/Layout";
import { HeroSection } from "../components/sections/HeroSection";
import { ResumeSection } from "../components/sections/ResumeSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { CustomersSection } from "../components/sections/CustomersSection";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";
import { HeadProps, PageProps } from "gatsby";
import { Seo } from "../components/Seo";

export default function IndexPage(props: PageProps) {
  return (
    <Layout>
      <Nav />
      <HeroSection />
      <CustomersSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection crop={true} />
      <Footer />
    </Layout>
  );
}

export function Head(props: HeadProps<any>) {
  return <Seo />;
}
