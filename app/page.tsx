import { Nav } from "@/app/components/layouts/Nav";
import { ResumeSection } from "@/app/components/sections/ResumeSection";
import { SkillsSection } from "@/app/components/sections/SkillsSection";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { Footer } from "@/app/components/layouts/Footer";
import { ProjectsSection } from "@/app/components/sections/ProjectsSection";
import { CustomersSection } from "@/app/components/sections/CustomersSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <CustomersSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection crop={true} />
      <Footer />
    </>
  );
}
