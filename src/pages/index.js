import React from "react";
import Layout from "../components/layouts/Layout";
import Nav from "../components/layouts/Nav";
import Footer from "../components/layouts/Footer";
import HeroSection from "../components/sections/hero";
import ResumeSection from "../components/sections/resume";
import { SkillsSection } from "../components/sections/skills";

export default () => {
  return (
    <Layout>
      <Nav />
      <HeroSection />
      <SkillsSection />
      <ResumeSection />
      <Footer />
    </Layout>
  );
};
