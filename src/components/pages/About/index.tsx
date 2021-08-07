import React from "react";

import AboutStyles from "./About.module.scss";
import "./styles.scss";

const About = () => {
  return (
    <div className={[AboutStyles.about, "about"].join(" ")}>
      <h1>
        I'm dev
        <a href="//github.com/renatosoares">github.com/renatosoares</a>
      </h1>
    </div>
  );
};

export default About;
