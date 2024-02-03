import React from "react";
import SocialMyStyles from "./SocialMy.module.scss";
import "./styles.scss";

const SocialMy = () => (
  <div className={[SocialMyStyles.socialMy, "social-my"].join(" ")}>
    <div className="social-links">
      <a href="//codepen.io/renatosoares" target="_blank" rel="noreferrer">
        codepen&nbsp;
      </a>
      <a
        href="//codesandbox.io/u/renatosoares"
        target="_blank"
        rel="noreferrer"
      >
        codesandbox&nbsp;
      </a>
      <a href="//github.com/renatosoares" target="_blank" rel="noreferrer">
        github&nbsp;
      </a>
      <a
        href="//hub.docker.com/u/renatosoarespro/starred"
        target="_blank"
        rel="noreferrer"
      >
        docker&nbsp;
      </a>
      <a
        href="//jsfiddle.net/user/renatosoarespro"
        target="_blank"
        rel="noreferrer"
      >
        jsfiddle&nbsp;
      </a>
      <a
        href="//linkedin.com/in/renatosoarespro"
        target="_blank"
        rel="noreferrer"
      >
        linkedin&nbsp;
      </a>
      <a href="//repl.it/@renatosoarespro" target="_blank" rel="noreferrer">
        repl&nbsp;
      </a>
      <a href="//twitter.com/renatosoarespro" target="_blank" rel="noreferrer">
        twitter&nbsp;
      </a>
      <a href="//wakatime.com/@renatosoares" target="_blank" rel="noreferrer">
        wakatime&nbsp;
      </a>
    </div>
    <div>
      <h1>Systems Developer</h1>
      <span>Renato Soares </span>
      <i className="fas fa-coffee"></i>
      <i className="fas fa-desktop"></i> $_
    </div>
  </div>
);

export default SocialMy;
