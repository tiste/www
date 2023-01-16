import * as React from "react";
import { ReactElement } from "react";
import "../../stylesheets/main.scss";

export function Layout(props: {
  cssClasses?: string;
  children: ReactElement[];
}) {
  return (
    <>
      <main className={props.cssClasses}>{props.children}</main>
    </>
  );
}
