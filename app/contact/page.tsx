import React from "react";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";
import { Metadata } from "next";
import { ContactForm } from "@/app/contact/ContactForm";
import { CustomersSection } from "@/app/components/sections/CustomersSection";

export const metadata: Metadata = {
  title: "On entre en contact",
  description:
    "Un besoin ? Un problème ? Une question ? Je ferai mon maximum pour vous aider. Après presque 10 ans d'expérience dans le domaine du numérique, j'ai pu accompagner des plus ou moins grandes entreprises dans des problématiques techniques ou humaines.",
  alternates: {
    canonical: "/contact/",
  },
};

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
