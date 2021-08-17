import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

type ChartPieProps = {
  rawData: { color: string; name: string; percent: number }[];
};

const mockLanguages = [
  { color: "#31859c", name: "TypeScript", percent: 30.81 },
  { color: "#4F5D95", name: "PHP", percent: 16.9 },
  { color: "#c6538c", name: "SCSS", percent: 15.41 },
  { color: "#16ce40", name: "JSON", percent: 12.17 },
  { color: "#dc9658", name: "Blade Template", percent: 6.38 },
  { color: "#d62728", name: "Bash", percent: 6.07 },
  { color: "#1f9aef", name: "Other", percent: 3.66 },
  { color: "#e44b23", name: "HTML", percent: 2.69 },
  { color: "#083fa1", name: "Markdown", percent: 2.61 },
  { color: "#c1d026", name: "Twig", percent: 1.11 },
  { color: "#f1e05a", name: "JavaScript", percent: 1.0 },
  { color: "#9467bd", name: "CSV", percent: 0.9 },
  { color: "#8c564b", name: "Git Config", percent: 0.22 },
  { color: "#563d7c", name: "CSS", percent: 0.06 },
  { color: "#aec7e8", name: "Text", percent: 0.02 },
];

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

const CodingLanguages = () => (
  <div className="container my-5">
    <ChartPie rawData={mockLanguages} />
  </div>
);

export default CodingLanguages;
