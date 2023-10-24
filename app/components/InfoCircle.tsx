"use client";

import React, { ReactElement, useCallback, useState } from "react";
import InfoCircleSvg from "@/public/images/info-circle.svg";
import { debounce } from "lodash";
import Image from "next/image";

export function InfoCircle({
  title,
  content,
}: {
  title?: string;
  content: ReactElement;
}) {
  const [display, setDisplay] = useState(false);
  const [hover, _setHover] = useState(false);

  const setHover = useCallback(
    debounce((h) => {
      !display && _setHover(h);
    }, 100),
    [display],
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

      <Image src={InfoCircleSvg} alt="Info" />

      <span className={display || hover ? "" : "is-hidden"}>{content}</span>
    </span>
  );
}
