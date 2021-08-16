import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

type ChartBarProps = {
  rawData: {
    grand_total: { decimal: string; text: string };
    range: { text: string };
  }[];
};

const mockActivity = [
  {
    grand_total: {
      decimal: "2.97",
      digital: "2:58",
      hours: 2,
      minutes: 58,
      text: "2 hrs 58 mins",
      total_seconds: 10732.903182,
    },
    range: {
      date: "2021-08-06",
      end: "2021-08-07T02:59:59Z",
      start: "2021-08-06T03:00:00Z",
      text: "Fri Aug 6th 2021",
      timezone: "America/Recife",
    },
  },
  {
    grand_total: {
      decimal: "1.15",
      digital: "1:09",
      hours: 1,
      minutes: 9,
      text: "1 hr 9 mins",
      total_seconds: 4164.849028,
    },
    range: {
      date: "2021-08-07",
      end: "2021-08-08T02:59:59Z",
      start: "2021-08-07T03:00:00Z",
      text: "Sat Aug 7th 2021",
      timezone: "America/Recife",
    },
  },
  {
    grand_total: {
      decimal: "0.80",
      digital: "0:48",
      hours: 0,
      minutes: 48,
      text: "48 mins",
      total_seconds: 2915.485735,
    },
    range: {
      date: "2021-08-08",
      end: "2021-08-09T02:59:59Z",
      start: "2021-08-08T03:00:00Z",
      text: "Sun Aug 8th 2021",
      timezone: "America/Recife",
    },
  },
  {
    grand_total: {
      decimal: "3.22",
      digital: "3:13",
      hours: 3,
      minutes: 13,
      text: "3 hrs 13 mins",
      total_seconds: 11595.741073,
    },
    range: {
      date: "2021-08-09",
      end: "2021-08-10T02:59:59Z",
      start: "2021-08-09T03:00:00Z",
      text: "Mon Aug 9th 2021",
      timezone: "America/Recife",
    },
  },
  {
    grand_total: {
      decimal: "3.23",
      digital: "3:14",
      hours: 3,
      minutes: 14,
      text: "3 hrs 14 mins",
      total_seconds: 11666.272568,
    },
    range: {
      date: "2021-08-10",
      end: "2021-08-11T02:59:59Z",
      start: "2021-08-10T03:00:00Z",
      text: "Tue Aug 10th 2021",
      timezone: "America/Recife",
    },
  },
  {
    grand_total: {
      decimal: "5.30",
      digital: "5:18",
      hours: 5,
      minutes: 18,
      text: "5 hrs 18 mins",
      total_seconds: 19109.787519,
    },
    range: {
      date: "2021-08-11",
      end: "2021-08-12T02:59:59Z",
      start: "2021-08-11T03:00:00Z",
      text: "Yesterday",
      timezone: "America/Recife",
    },
  },
  {
    grand_total: {
      decimal: "0.58",
      digital: "0:35",
      hours: 0,
      minutes: 35,
      text: "35 mins",
      total_seconds: 2103.129942,
    },
    range: {
      date: "2021-08-12",
      end: "2021-08-13T02:59:59Z",
      start: "2021-08-12T03:00:00Z",
      text: "Today",
      timezone: "America/Recife",
    },
  },
];

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

const CodingActivity = () => (
  <div className="container my-5">
    <ChartBar rawData={mockActivity} />
  </div>
);

export default CodingActivity;
