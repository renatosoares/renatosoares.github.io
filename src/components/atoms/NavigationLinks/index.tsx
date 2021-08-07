import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import NavigationLinksStyles from "./NavigationLinks.module.scss";
import "./styles.scss";

const NavigationLinks = () => {
  return (
    <div
      className={[
        NavigationLinksStyles.navigationLinks,
        "navigation-links",
      ].join(" ")}
    >
      <Link
        className={
          useRouteMatch("/")?.isExact ? "router-link-exact-active" : ""
        }
        to="/"
      >
        Home
      </Link>{" "}
      |{" "}
      <Link
        className={
          useRouteMatch("/about")?.isExact ? "router-link-exact-active" : ""
        }
        to="/about"
      >
        About
      </Link>
    </div>
  );
};

export default NavigationLinks;
