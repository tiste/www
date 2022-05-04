import InfoCircleSvg from "../images/info-circle.svg";
import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";

export function InfoCircle({ title, content }) {
  const [display, setDisplay] = useState(false);
  const [hover, _setHover] = useState(false);

  const setHover = useCallback(
    debounce((h) => {
      !display && _setHover(h);
    }, 100),
    []
  );

  return (
    <span
      aria-hidden="true"
      className="info-circle"
      onClick={() => setDisplay(!display)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span>{title}</span>

      <InfoCircleSvg />

      <span className={display || hover ? "" : "is-hidden"}>{content}</span>
    </span>
  );
}

InfoCircle.propTypes = {
  title: PropTypes.string,
  content: PropTypes.element,
};
