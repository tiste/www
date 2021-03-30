import React from "react";

export function Card({ title, link, children, isApp }) {
  const [image, ...rest] = children;
  const footer = rest.pop();

  return (
    <div
      className="card"
      {...(isApp
        ? {
            itemScope: true,
            itemType: "http://schema.org/SoftwareApplication",
          }
        : {})}
    >
      <div className="card-image">
        <figure className="image">
          <a href={link}>{image}</a>
        </figure>
      </div>
      <div
        className="card-content"
        {...(isApp
          ? {
              itemProp: "applicationCategory",
              content: "MobileApplication",
            }
          : {})}
      >
        <p className="title">
          <a
            href={link}
            {...(isApp
              ? {
                  itemProp: "url",
                }
              : {})}
          >
            {title}
          </a>
        </p>
        <div
          className="content"
          {...(isApp
            ? {
                itemProp: "operatingSystem",
                content: "iOS, ANDROID",
              }
            : {})}
        >
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
