import * as React from "react";
import { Metadata } from "next";
import { Nav } from "@/app/components/layouts/Nav";

export const metadata: Metadata = {
  title: "Page non trouvée",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <section className="hero">
        <div className="hero-body">
          <div className="container content has-text-centered">
            <h1 className="emphase title">404,</h1>
            <h2 className="subtitle">il n'y a rien ici.</h2>
            <a href="/" className="has-text-dark">
              Retour à l'accueil
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
