import Base from "./Base";

class CodingActivity extends Base {
  private uuidCode: string;

  constructor() {
    super();

    this.uuidCode =
      process.env.REACT_APP_WAKATIME_CHARTS_UUID_CODING_ACTIVITY || "";
  }

  async read() {
    return await this.request(this.uuidCode);
  }
}

export default CodingActivity;
