import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
  const { title, link, children, isApp } = props;
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
            <span itemProp="name">{title}</span>
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isApp: PropTypes.bool,
};
