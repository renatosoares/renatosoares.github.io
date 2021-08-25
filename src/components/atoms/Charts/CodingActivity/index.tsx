import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";

import APICodingActivity from "api/wakatime/CodingActivity";

type ChartLineProps = {
  rawData: {
    grand_total: { decimal: string; text: string };
    range: { text: string };
  }[];
};

const ChartLine = ({ rawData }: ChartLineProps) => {
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
    new APICodingActivity().request((data) => {
      setDataActivity(data);
    });
  }, []);

  return (
    <div id="coding-activity" className="container my-5">
      {dataActivity.length > 0 && <ChartLine rawData={dataActivity} />}
    </div>
  );
};

export default CodingActivity;
