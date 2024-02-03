import Base from "./Base";

class CodingActivity extends Base {
  private uuidCode: string;
  private readonly dataKey: string = "data_coding_activity";

  constructor() {
    super();

    this.uuidCode =
      process.env.REACT_APP_WAKATIME_CHARTS_UUID_CODING_ACTIVITY || "";
  }

  protected getUuidCode() {
    return this.uuidCode;
  }

  protected getDataKey() {
    return this.dataKey;
  }
}

export default CodingActivity;
