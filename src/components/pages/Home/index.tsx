import React from "react";

import SocialMy from "components/atoms/SocialMy";
import CalendarGithub from "components/atoms/CalendarGithub";
import CodingActivity from "components/atoms/Charts/CodingActivity";
import CodingLanguages from "components/atoms/Charts/CodingLanguages";

const Home = () => {
  return (
    <>
      <CalendarGithub />
      <CodingActivity />
      <CodingLanguages />
      <SocialMy />
    </>
  );
};

export default Home;
