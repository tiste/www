import { Nav } from "@/app/components/layouts/Nav";
import { ResumeSection } from "@/app/components/sections/ResumeSection";
import { SkillsSection } from "@/app/components/sections/SkillsSection";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { Footer } from "@/app/components/layouts/Footer";
import { ProjectsSection } from "@/app/components/sections/ProjectsSection";
import {
  StatsHighlights,
  StatsSection,
} from "@/app/components/sections/StatsSection";
import { CustomersSection } from "@/app/components/sections/CustomersSection";
import {
  pageMetadata,
  siteDescription,
  siteTitle,
} from "@/app/services/metadata";

export const metadata = {
  ...pageMetadata({
    title: siteTitle,
    description: siteDescription,
    path: "/",
  }),
  title: { absolute: siteTitle },
};

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <StatsHighlights />
      <CustomersSection />
      <SkillsSection />
      <ProjectsSection />
      <StatsSection />
      <ResumeSection crop={true} />
      <Footer />
    </>
  );
}
