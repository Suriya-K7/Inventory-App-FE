import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DonutChart = ({ chartData }) => {
  return (
    <Doughnut
      data={chartData}
      height={50}
      width={50}
    />
  );
};

export default DonutChart;
