"use strict";

import Base from "./Base";

class CodingLanguages extends Base {
  uuidCode: string;

  constructor() {
    super();

    this.uuidCode =
      process.env.REACT_APP_WAKATIME_CHARTS_UUID_CODING_LANGUAGES || "";
  }

  read() {
    return fetch(`${this.base}${this.uuidCode}.json`, {
      method: "GET",
    });
  }
}

export default CodingLanguages;
