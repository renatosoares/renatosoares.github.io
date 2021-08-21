import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";

type ChartBarProps = {
  rawData: {
    grand_total: { decimal: string; text: string };
    range: { text: string };
  }[];
};

const ChartBar = ({ rawData }: ChartBarProps) => {
  const canvasEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    var options = {
      chart: {
        type: "line",
      },
      series: [
        {
          name: "Coding Activity",
          data: rawData.map((item) => parseFloat(item.grand_total.decimal)),
        },
      ],
      xaxis: {
        categories: rawData.map((item) => item.range.text),
      },
    };

    if (canvasEl.current !== null) {
      const chart = new ApexCharts(canvasEl.current, options);
      chart.render();
    }
  }, [canvasEl]);

  return <div ref={canvasEl}></div>;
};

const CodingActivity = () => {
  const [dataActivity, setDataActivity] = useState([]);

  useEffect(() => {
    function callback_data_coding_activity(response: any) {
      localStorage.setItem(
        "data_coding_activity",
        JSON.stringify(response.data)
      );
    }

    const script = document.createElement("script");
    const scriptLoad = document.createElement("script");
    scriptLoad.type = "text/javascript";
    scriptLoad.src = `https://wakatime.com/share/@renatosoares/c6056f3b-486c-4b36-86ff-0db66e0442ec.json?callback=${callback_data_coding_activity.name}`;

    script.innerHTML = callback_data_coding_activity.toString();

    document.getElementsByTagName("body")[0].appendChild(script);

    document.getElementsByTagName("body")[0].appendChild(scriptLoad);

    scriptLoad.addEventListener("load", () => {
      setDataActivity(
        JSON.parse(localStorage.getItem("data_coding_activity") || "")
      );

      localStorage.removeItem("data_coding_activity");
    });
  }, []);

  return (
    <div id="coding-activity" className="container my-5">
      {dataActivity.length > 0 && <ChartBar rawData={dataActivity} />}
    </div>
  );
};

export default CodingActivity;
