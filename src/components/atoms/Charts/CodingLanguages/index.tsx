import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";

import APICodingLanguages from "api/wakatime/CodingLanguages";

type ChartPieProps = {
  rawData: { color: string; name: string; percent: number }[];
};

const ChartPie = ({ rawData }: ChartPieProps) => {
  const canvasEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    var options = {
      chart: {
        type: "pie",
      },
      series: rawData.map((item) => item.percent),
      labels: rawData.map((item) => item.name),
      legend: {
        position: "top",
      },
    };

    if (canvasEl.current !== null) {
      const chart = new ApexCharts(canvasEl.current, options);
      chart.render();
    }
  }, [canvasEl]);

  return <div ref={canvasEl}></div>;
};

const CodingLanguages = () => {
  const [dataActivity, setDataActivity] = useState([]);

  useEffect(() => {
    new APICodingLanguages().request((data) => {
      setDataActivity(data);
    });
  }, []);

  return (
    <div className="container my-5">
      {dataActivity.length > 0 && <ChartPie rawData={dataActivity} />}
    </div>
  );
};

export default CodingLanguages;
