import React from "react";
import Layout from "../components/layouts/Layout";
import CustomersSection from "../components/sections/customers";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";

export default function ContactPage() {
  return (
    <Layout title="On entre en contact">
      <Nav />
      <section className="hero">
        <div className="hero-body">
          <div className="container content has-text-centered">
            <h1 className="title">
              Parlez-moi de <strong>votre projet</strong>.
            </h1>
            <p className="is-4 subtitle">Je réponds dans la journée.</p>

            <a
              href="mailto:baptiste.lecocq@gmail.com"
              className="button is-large is-primary is-light is-outlined is-rounded mb-6 mt-6"
            >
              <span className="icon" role="img" aria-label="mail">
                💌
              </span>
              <span>baptiste.lecocq@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
      <CustomersSection />
      <Footer />
    </Layout>
  );
}
