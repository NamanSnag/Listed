import { Pie } from "@ant-design/plots";

import './style.scss';

const PieChart = () => {
  const data = [
    {
        type: "Super Hoodies",
        value: 14,
      },
    {
      type: "Custom Short",
      value: 31,
    },
    {
        type: "Basic Tees",
        value: 53,
      },
   
  ];
  const config = {
    data,
    angleField: "value",
    colorField: "type",
    pieStyle: {
      lineWidth: 0,
    },
    label: {
        content: '',
      },
    color: [ "#EE8484","#F6DC7D","#98D89E"],
  };
  return <Pie {...config} />;
};

export default PieChart;
