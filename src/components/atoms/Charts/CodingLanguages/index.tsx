import { Chart, ChartConfiguration } from "chart.js";
import React, { useEffect, useRef } from "react";

type ChartPieProps = {
  codingData: { color: string; name: string; percent: number }[];
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

const ChartPie = ({ codingData }: ChartPieProps) => {
  const canvasEl = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const data = {
      labels: codingData.map((item) => item.name),
      datasets: [
        {
          label: "Coding Languages",
          data: codingData.map((item) => item.percent),
          backgroundColor: codingData.map((item) => item.color),
          parsing: {
            yAxisKey: "percent",
          },
          hoverOffset: 4,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: "pie",
      data: data,
    };

    if (canvasEl.current !== null) {
      new Chart(canvasEl.current, config);
    }
  }, [canvasEl]);

  return <canvas ref={canvasEl}></canvas>;
};

const CodingLanguages = () => (
  <div className="container">
    <ChartPie codingData={mockLanguages} />
  </div>
);

export default CodingLanguages;
