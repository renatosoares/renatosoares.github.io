import React from "react";
import SocialMyStyles from "./SocialMy.module.scss";

const socialMyInfo: readonly SocialMyAnchorProps[] = [
  {
    url: "//codepen.io/renatosoares",
    title: "codepen",
  },
  {
    url: "//codesandbox.io/u/renatosoares",
    title: "codesandbox",
  },
  {
    url: "//github.com/renatosoares",
    title: "github",
  },
  {
    url: "//jsfiddle.net/user/renatosoarespro",
    title: "jsfiddle",
  },
  {
    url: "//linkedin.com/in/renatosoarespro",
    title: "linkedin",
  },
  {
    url: "//replit.com/@renatosoarespro",
    title: "replit",
  },
  {
    url: "//twitter.com/renatosoarespro",
    title: "twitter",
  },
  {
    url: "//wakatime.com/@renatosoares",
    title: "wakatime",
  },
];

type SocialMyAnchorProps = {
  url: string;
  title: string;
};

const SocialMyAnchor = ({ url, title }: SocialMyAnchorProps) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {title} &nbsp;
    </a>
  );
};

const SocialLinks = () => {
  return (
    <div className={[SocialMyStyles.socialLinks, "social-links"].join(" ")}>
      {socialMyInfo.map((social) => (
        <SocialMyAnchor
          key={social.title}
          url={social.url}
          title={social.title}
        />
      ))}
    </div>
  );
};

const SocialMy = () => (
  <div className={[SocialMyStyles.socialMy, "social-my"].join(" ")}>
    <SocialLinks />
    <div>
      <h1>Systems Developer</h1>
      <span>Renato Soares </span>
      <i className="fas fa-coffee"></i>
      <i className="fas fa-desktop"></i> $_
    </div>
  </div>
);

export default SocialMy;
