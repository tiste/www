import * as React from "react";
import { Metadata } from "next";
import { Nav } from "@/app/components/layouts/Nav";
import { Footer } from "@/app/components/layouts/Footer";
import { projects } from "@/app/components/projects";
import Image from "next-export-optimize-images/image";

type Props = {
  params: { slug: string };
};

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const project = projects.find((project) => project.slug === slug);
  if (!project) {
    return {};
  }

  return {
    title: project.title,
    alternates: {
      canonical: `/projects/${project.slug}/`,
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const project = projects.find((project) => project.slug === params.slug);
  if (!project) {
    return null;
  }

  return (
    <>
      <Nav />
      <section
        className="hero"
        itemScope={true}
        itemType="http://schema.org/SoftwareApplication"
      >
        <div
          className="hero-body"
          itemProp="applicationCategory"
          {...{ content: "MobileApplication" }}
        >
          <div
            className="container content"
            itemProp="operatingSystem"
            {...{ content: "iOS, ANDROID" }}
          >
            <div className="has-text-centered">
              <h2 className="title" itemProp="name">
                {project.title}
              </h2>

              <div>
                <a
                  href={project.ios}
                  className="button is-primary is-rounded is-small mt-3 mr-3"
                  itemProp="url"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Téléchargez pour iPhone</span>
                  <span className="icon" role="img" aria-label="phone">
                    📱
                  </span>
                </a>

                <a
                  href={project.android}
                  className="button is-primary is-rounded is-small mt-3 mr-3"
                  itemProp="url"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Téléchargez pour Android</span>
                  <span className="icon" role="img" aria-label="phone">
                    📱
                  </span>
                </a>

                <a
                  href={project.web}
                  className="button is-primary is-rounded is-small mt-3"
                  itemProp="url"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Voir sur le web</span>
                  <span className="icon" role="img" aria-label="computer">
                    💻
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container content">
          <div className="columns is-flex-direction-row-reverse">
            <div
              className="column mt-6"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

            <div className="column has-text-centered">
              <Image
                src={project.featuredImage}
                alt={project.title}
                width={400}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
