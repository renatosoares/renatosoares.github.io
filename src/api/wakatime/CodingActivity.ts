"use strict";

import Base from "./Base";

class CodingActivity extends Base {
  uuidCode: string;

  constructor() {
    super();

    this.uuidCode =
      process.env.REACT_APP_WAKATIME_CHARTS_UUID_CODING_ACTIVITY || "";
  }

  read() {
    return fetch(`${this.base}${this.uuidCode}.json`, {
      method: "GET",
    });
  }
}

export default CodingActivity;
