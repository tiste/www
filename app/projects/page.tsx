import React from "react";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mes projets phares",
  description:
    "J'ai pu contribuer dans plus d'une dizaine de projets dans le monde du numérique, mais j'ai aussi pu en concevoir dès la phase l'idéation. À côté de missions de conseil, j'aime réaliser des idées qui permettent d'aider et de faciliter la vie des personnes.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <div className="projects-page">
        <ProjectsSection />
      </div>
      <Footer />
    </>
  );
}
