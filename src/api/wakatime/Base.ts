"use strict";

class Base {
  base: string;

  constructor() {
    this.base = process.env.REACT_APP_WAKATIME_CHARTS_BASE_URI || "";
  }
}

export default Base;
