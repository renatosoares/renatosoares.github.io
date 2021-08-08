import React, { useEffect } from "react";

import "github-calendar/dist/github-calendar.css";
import CalendarGithubStyles from "./CalendarGithub.module.scss";
import "./styles.scss";

import GitHubCalendar from "github-calendar";

const CalendarGithub = () => {
  useEffect(() => {
    GitHubCalendar(".calendar-github", "renatosoares", {
      responsive: true,
    });
  });

  return (
    <div
      className={[
        CalendarGithubStyles.calendarGithub,
        "calendar-github",
        "calendar",
      ].join(" ")}
    >
      Loading the data just for you.
    </div>
  );
};

export default CalendarGithub;
