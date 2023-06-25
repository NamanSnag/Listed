import { Line } from "@ant-design/charts";

const data = [
  {
    name: "user",
    week: 0,
    gdp: 0,
  },
  {
    name: "user",
    week: 1,
    gdp: 380,
  },
  {
    name: "user",
    week: 2,
    gdp: 200,
  },
  {
    name: "user",
    week: 3,
    gdp: 300,
  },
  {
    name: "user",
    week: 4,
    gdp: 400,
  },
  {
    name: "guest",
    week: 0,
    gdp: 121,
  },
  {
    name: "guest",
    week: 1,
    gdp: 288,
  },
  {
    name: "guest",
    week: 2,
    gdp: 200,
  },
  {
    name: "guest",
    week: 3,
    gdp: 147,
  },
  {
    name: "guest",
    week: 4,
    gdp: 166,
  },
];

const ActivityChart = () => {
  const config = {
    data,
    xField: "week",
    innerWidth: "100%",
    yField: "gdp",
    xAxis: {
      nice: true,
      label: {
        formatter: (v) => `Week ${v}`,
      },
    },
    seriesField: "name",
    legend: false,
    smooth: true,
    animation: {
      appear: {
        animation: "path-in",
        duration: 2000,
      },
    },
    color: ['#9BDD7C', '#E9A0A0'],
  };

  return <Line {...config} />;
};

export default ActivityChart;
