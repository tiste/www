import React from "react";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";
import { pageMetadata } from "@/app/services/metadata";
import { ContactForm } from "@/app/contact/ContactForm";
import { CustomersSection } from "@/app/components/sections/CustomersSection";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Un besoin, un problème, une question ? Parlez-moi de votre projet web ou mobile : je réponds dans la journée.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Nav />
      <section className="hero">
        <div className="hero-body">
          <div className="container content">
            <div className="has-text-centered">
              <h1 className="title">
                Parlez-moi de <strong>votre projet</strong>.
              </h1>
              <p className="is-4 subtitle">Je réponds dans la journée.</p>
            </div>

            <div className="columns">
              <div className="column is-half is-offset-one-quarter mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomersSection />
      <Footer />
    </>
  );
}
