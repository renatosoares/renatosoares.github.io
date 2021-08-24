import Base from "./Base";

class CodingLanguages extends Base {
  private uuidCode: string;
  private readonly dataKey: string = "data_coding_languages";

  constructor() {
    super();

    this.uuidCode =
      process.env.REACT_APP_WAKATIME_CHARTS_UUID_CODING_LANGUAGES || "";
  }

  protected getUuidCode() {
    return this.uuidCode;
  }

  protected getDataKey() {
    return this.dataKey;
  }
}

export default CodingLanguages;
