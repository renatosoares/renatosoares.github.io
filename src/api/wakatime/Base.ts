class Base {
  private base: string;

  constructor() {
    this.base = process.env.REACT_APP_WAKATIME_CHARTS_BASE_URI || "";
  }

  protected async request(uuidCode: string) {
    const myHeaders = new Headers();

    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    const myInit: RequestInit = {
      method: "GET",
      headers: myHeaders,
      mode: "no-cors",
      // cache: "default",
      // redirect: "follow",
    };

    const myRequest = new Request(`${this.base}${uuidCode}.json`, myInit);

    return await fetch(myRequest);
  }
}

export default Base;
