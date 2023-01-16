import * as React from "react";
import { Layout } from "../components/layouts/Layout";
import { Nav } from "../components/layouts/Nav";
import { HeadProps, PageProps } from "gatsby";
import { Seo } from "../components/Seo";

export default function _404Page(props: PageProps) {
  return (
    <Layout>
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
    </Layout>
  );
}

export function Head(props: HeadProps) {
  return <Seo title="Page non trouvée" />;
}
