import React from "react";

export function Card({ title, link, children }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <a href={link}>{children[0]}</a>
        </figure>
      </div>
      <div className="card-content">
        <p className="title" href={link}>
          <a href={link}>{title}</a>
        </p>
        <div className="content">{children[1]}</div>
        <div className="tags">
          {children[2] &&
            children[2].props.children
              .split(", ")
              .map((tag) => <span className="tag is-light">{tag}</span>)}
        </div>
      </div>
    </div>
  );
}
