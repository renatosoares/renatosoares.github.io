import React from "react";

import SocialMy from "components/atoms/SocialMy";
import CalendarGithub from "components/atoms/CalendarGithub";
import CodingActivity from "components/atoms/Charts/CodingActivity";

const Home = () => {
  return (
    <>
      <CalendarGithub />
      <CodingActivity />
      <SocialMy />
    </>
  );
};

export default Home;
