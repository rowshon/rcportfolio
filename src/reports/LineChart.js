import React, { useEffect, useState } from 'react'
import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement,
 Title,
 Tooltip,
 Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Moment from 'moment'
import Axios from "axios";
// import { ChartDataSet } from '../../DataSet/ChartDataSet'
ChartJS.register(
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement,
 Title,
 Tooltip,
 Legend
);

const options = {
 responsive: true,
 plugins: {
  legend: {
   position: 'top',
  },
  title: {
   display: true,
   text: 'Line Chart',
  },
 },
};

export default function LineChart({ chartData }) {
 const chartDataSet = {
  labels: chartData.map((data) => Moment(data.Date).format('DD-MM-YYYY')),
  datasets: [
   {
    label: "Total Request",
    data: chartData.map((data) => data.Total),
    backgroundColor: ['rgba(255, 99, 132, 0.5)', "red", "green", "blue"],
    // borderColor: "rgb(255, 99, 132)",
    borderwidth: 0
   },
   {
    label: "Total Success",
    data: chartData.map((data) => data.Success),
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // borderColor: 'rgb(255, 99, 132)',
   },
   {
    label: "Total Fail",
    data: chartData.map((data) => data.Fail),
    backgroundColor: 'rgba(3, 169, 195, 0.9)',
    // borderColor: 'rgb(255, 99, 132)',
   }
  ]
 };
 console.log(chartData.map((data) => data.Date));
 return (
  <div>
   <Line options={options} data={chartDataSet} />
  </div>
 )
}
