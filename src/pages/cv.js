import React from "react";
import Layout from "../components/layouts/Layout";
import Nav from "../components/layouts/Nav";
import Footer from "../components/layouts/Footer";
import ResumeSection from "../components/sections/resume";

export default () => {
  return (
    <Layout title="Expérience professionnelle">
      <Nav />
      <ResumeSection />
      <Footer />
    </Layout>
  );
};
