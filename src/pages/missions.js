import React from "react";
import { Layout } from "../components/layouts/Layout";
import { ResumeSection } from "../components/sections/resume";
import { CustomersSection } from "../components/sections/customers";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";

export default function MissionsPage() {
  return (
    <Layout title="Expérience professionnelle">
      <Nav />
      <ResumeSection />
      <CustomersSection />
      <Footer />
    </Layout>
  );
}
