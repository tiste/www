import * as React from "react";
import { Metadata } from "next";
import { CV } from "@/app/components/CV";
import { Nav } from "@/app/components/layouts/Nav";
import { displayCustomers } from "@/app/components/sections/CustomersSection";
import { Footer } from "@/app/components/layouts/Footer";

type Props = {
  params: { slug: string };
};

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const mission = CV.find((mission) => mission.slug === slug);
  if (!mission) {
    return {};
  }

  return {
    title: `${mission.customer} / ${mission.title}`,
    alternates: {
      canonical: `/missions/${mission.slug}/`,
    },
  };
}

export async function generateStaticParams() {
  return CV.map((mission) => ({ slug: mission.slug }));
}

export default async function MissionPage({ params }: Props) {
  const mission = CV.find((mission) => mission.slug === params.slug);
  if (!mission) {
    return null;
  }

  return (
    <>
      <Nav />
      <section className="section mt-6">
        <div className="container content">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <div className="is-light-mode">
                {displayCustomers("light", mission.customer)}
              </div>

              <div className="is-dark-mode">
                {displayCustomers("dark", mission.customer)}
              </div>

              <h2 className="title">{mission.customer}</h2>
              <p className="is-4 subtitle">{mission.title}</p>
              <p className="is-5 subtitle">{mission.date}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container content">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div
                className="is-size-3"
                dangerouslySetInnerHTML={{
                  __html: mission.description
                    .replace("\n", "")
                    .replace(/\n/g, "<br />"),
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
