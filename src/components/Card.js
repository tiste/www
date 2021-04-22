import React from "react";

export function Card({ title, link, children, isApp }) {
  const [image, ...rest] = children;
  const footer = rest.pop();

  let typeTags = {};
  let categoryTags = {};
  let linkTags = {};
  let osTags = {};

  if (isApp) {
    typeTags = {
      itemScope: true,
      itemType: "http://schema.org/SoftwareApplication",
    };
    categoryTags = {
      itemProp: "applicationCategory",
      content: "MobileApplication",
    };
    linkTags = {
      itemProp: "url",
    };
    osTags = {
      itemProp: "operatingSystem",
      content: "iOS, ANDROID",
    };
  }

  return (
    <div className="card" {...typeTags}>
      <div className="card-image">
        <figure className="image">
          <a href={link}>{image}</a>
        </figure>
      </div>
      <div className="card-content" {...categoryTags}>
        <p className="title">
          <a href={link} {...linkTags}>
            {title}
          </a>
        </p>
        <div className="content" {...osTags}>
          {rest}
        </div>
        <div className="tags">
          {footer &&
            footer.props.children.split(", ").map((tag, i) => (
              <span key={i} className="tag is-light">
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
