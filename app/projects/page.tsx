import React from "react";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { pageMetadata } from "@/app/services/metadata";

export const metadata = pageMetadata({
  title: "Projets et applications mobiles",
  description:
    "Mes projets personnels : applications mobiles React Native (1 à 10, Pacevisor, Rally Call, Setlist Live), sites web, outils open source et conférences.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <div className="projects-page">
        <ProjectsSection isPage={true} />
      </div>
      <Footer />
    </>
  );
}
