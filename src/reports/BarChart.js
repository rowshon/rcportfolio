import React, { useState } from 'react'
import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Moment from 'moment'
ChartJS.register(
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend
);

export const options = {
 maintainAspectRatio: true,
 responsive: true,
 plugins: {
  legend: {
   position: 'top',
  },
  title: {
   display: true,
   text: '',
  },
 },
};

export default function BarChart({ chartData }) {
 return (
  <div >
   {/* 
   <p>Date => {i.Date}</p>
   <p>Total Request => {i.Total}</p>
   <p>Total Success => {i.Success}</p>
   <p>Total Fail => {i.Fail}</p> */}
   {/* {Moment(row.createDate).format('DD-MM-YYYY HH:MM:SS')} */}
   <Bar options={options} data={{
    labels: chartData.map((data) => Moment(data.Date).format('DD-MM-YYYY')),
    datasets: [{
     label: "Total Request",
     data: chartData.map((data) => data.Total),
     backgroundColor: ['rgba(255, 99, 132, 0.5)'],
     borderColor: "rgb(255, 99, 132)",
     borderwidth: 1
    },
    {
     label: "Total Success",
     data: chartData.map((data) => data.Success),
     backgroundColor: 'rgba(53, 162, 235, 0.5)',
     borderColor: 'rgb(255, 99, 132)',
    },
    {
     label: "Total Fail",
     data: chartData.map((data) => data.Fail),
     backgroundColor: 'rgba(3, 169, 195, 0.9)',
     borderColor: 'rgb(255, 99, 132)',
    }
    ],
    height: [400],
    width: [400],
   }} />
  </div>
 )
}
