import React from "react";
import { Layout } from "../components/layouts/Layout";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { HeadProps, PageProps } from "gatsby";
import { Seo } from "../components/Seo";

export default function ProjectsPage(props: PageProps) {
  return (
    <Layout>
      <Nav />
      <div className="projects-page">
        <ProjectsSection />
      </div>
      <Footer />
    </Layout>
  );
}

export function Head(props: HeadProps) {
  return (
    <Seo
      title="Mes projets phares"
      description="J'ai pu contribuer dans plus d'une dizaine de projets dans le monde du numérique, mais j'ai aussi pu en concevoir dès la phase l'idéation. À côté de missions de conseil, j'aime réaliser des idées qui permettent d'aider et de faciliter la vie des personnes."
    />
  );
}
