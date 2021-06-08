import React from "react";
import { Layout } from "../components/layouts/Layout";
import { HeroSection } from "../components/sections/hero";
import { ResumeSection } from "../components/sections/resume";
import { SkillsSection } from "../components/sections/skills";
import { ProjectsSection } from "../components/sections/projects";
import { CustomersSection } from "../components/sections/customers";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";

export default function IndexPage() {
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
