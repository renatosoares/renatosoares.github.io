import Base from "./Base";

class CodingLanguages extends Base {
  private uuidCode: string;

  constructor() {
    super();

    this.uuidCode =
      process.env.REACT_APP_WAKATIME_CHARTS_UUID_CODING_LANGUAGES || "";
  }

  public read() {
    return this.request(this.uuidCode);
  }
}

export default CodingLanguages;
