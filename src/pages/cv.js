import React from "react";
import Layout from "../components/layouts/Layout";
import Nav from "../components/layouts/Nav";
import Footer from "../components/layouts/Footer";
import ResumeSection from "../components/sections/resume";
import CustomersSection from "../components/sections/customers";

function CVPage() {
  return (
    <Layout title="Expérience professionnelle">
      <Nav />
      <ResumeSection />
      <CustomersSection />
      <Footer />
    </Layout>
  );
}

export default CVPage;
