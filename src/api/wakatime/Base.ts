abstract class Base {
  private base: string;

  constructor() {
    this.base = process.env.REACT_APP_WAKATIME_CHARTS_BASE_URI || "";
  }

  protected abstract getUuidCode(): string;
  protected abstract getDataKey(): string;

  public request(loadData: (data: any) => void) {
    const elBody = document.getElementsByTagName("body")[0];
    const DATA_KEY = this.getDataKey();

    function callback_jsonp(response: any) {
      localStorage.setItem("DATA_KEY", JSON.stringify(response.data));
    }

    const script = document.createElement("script");
    const scriptLoad = document.createElement("script");

    scriptLoad.type = "text/javascript";
    scriptLoad.src = `${this.base}${this.getUuidCode()}.json?callback=${
      callback_jsonp.name
    }_${this.getDataKey()}`;

    script.innerHTML = callback_jsonp
      .toString()
      .replace("DATA_KEY", `${DATA_KEY}`)
      .replace(callback_jsonp.name, `${callback_jsonp.name}_${DATA_KEY}`);

    elBody.appendChild(script);
    elBody.appendChild(scriptLoad);

    scriptLoad.addEventListener("load", () => {
      loadData(JSON.parse(localStorage.getItem(DATA_KEY) || ""));

      localStorage.removeItem(DATA_KEY);
    });
  }
}

export default Base;
