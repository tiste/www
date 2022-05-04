import React from "react";
import { Layout } from "../components/layouts/Layout";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";
import { ProjectsSection } from "../components/sections/projects";

export default function ProjectsPage() {
  return (
    <Layout title="Mes projets phares">
      <Nav />
      <div className="projects-page">
        <ProjectsSection />
      </div>
      <Footer />
    </Layout>
  );
}
