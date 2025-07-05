import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: [
    '1h', '10 m', '50 m', '30 m', '40 m', '20 m', '30 m', '25 m', '20 m', '5 m', '10 m'
  ],
  datasets: [
    {
      // label: '', // Removed to prevent blue box
      data: [15, 30, 27, 43, 39, 18, 42, 25, 13, 18, 59],
      backgroundColor: '#88aaf3',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: { display: false },
    tooltip: {
      mode: 'index',
      backgroundColor: 'rgba(256,256,256,0.95)',
      titleColor: '#888',
      bodyColor: '#555',
      borderColor: 'rgba(220, 220, 220, 0.9)',
      borderWidth: 2,
      caretSize: 6,
      caretPadding: 5,
      xPadding: 10,
      yPadding: 7,
      titleFont: { size: 12 },
      bodyFont: { size: 15 },
    },
  },
  scales: {
    x: {
      grid: { drawBorder: true, display: false },
      ticks: {
        color: '#8a909d',
        font: { family: 'Roboto, sans-serif' },
        display: false,
        beginAtZero: true,
        callback: (tick, index) => (index % 2 ? '' : tick),
      },
      barPercentage: 1.8,
      categoryPercentage: 0.2,
    },
    y: {
      grid: { drawBorder: true, display: true, color: '#eee', zeroLineColor: '#eee' },
      ticks: {
        color: '#8a909d',
        font: { family: 'Roboto, sans-serif' },
        display: true,
        beginAtZero: true,
      },
    },
  },
};

const CurrentUsersChart = () => (
  <div className="card card-default h-100">
    <div className="card-header flex-column align-items-start">
      <h2>Current Users</h2>
    </div>
    <div className="card-body" style={{ minHeight: 283, height: 283 }}>
      <Bar data={data} options={options} height={230} />
    </div>
    <div className="card-footer d-flex flex-wrap bg-white border-top">
      <a href="#" className="text-uppercase py-3">In-Detail Overview</a>
    </div>
  </div>
);

export default CurrentUsersChart; 