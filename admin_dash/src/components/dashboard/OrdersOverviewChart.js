import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    'completed',
    'unpaid',
    'pending',
    'canceled',
    'returned',
    'Broken'
  ],
  datasets: [
    {
      label: [
        'completed',
        'unpaid',
        'pending',
        'canceled',
        'returned',
        'Broken'
      ],
      data: [4100, 2500, 1800, 2300, 400, 150],
      backgroundColor: [
        '#88aaf3',   // Order Completed
        '#50d7ab',   // Order Unpaid
        '#9586cd',   // Order Pending
        '#f3d676',   // Order Canceled
        '#ed9090',   // Order Returned
        '#a4d9e5'    // Order Broken
      ],
      borderWidth: 1
    }
  ]
};

const legendItems = [
  { label: 'Order Completed', color: '#88aaf3' },
  { label: 'Order Unpaid', color: '#50d7ab' },
  { label: 'Order Returned', color: '#ed9090' },
  { label: 'Order Pending', color: '#9586cd' },
  { label: 'Order Canceled', color: '#f3d676' },
  { label: 'Order Broken', color: '#a4d9e5' }
];

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '75%',
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        title: function(tooltipItems) {
          const idx = tooltipItems[0].dataIndex;
          return 'Order : ' + data.labels[idx];
        },
        label: function(tooltipItem) {
          return data.datasets[0].data[tooltipItem.dataIndex];
        }
      },
      titleColor: '#888',
      bodyColor: '#555',
      titleFont: { size: 12, family: 'Roboto, sans-serif' },
      bodyFont: { size: 14, family: 'Roboto, sans-serif' },
      backgroundColor: 'rgba(256,256,256,0.95)',
      displayColors: true,
      borderColor: 'rgba(220, 220, 220, 0.9)',
      borderWidth: 2
    }
  }
};

const OrdersOverviewChart = () => (
  <div className="card card-default" style={{ minHeight: 420 }}>
    <div className="card-header justify-content-center">
      <h2>Orders Overview</h2>
    </div>
    <div className="card-body" style={{ height: 280 }}>
      <div style={{ width: 200, height: 200, margin: '0 auto' }}>
        <Doughnut data={data} options={options} />
      </div>
      <a href="#" className="pb-3 d-block text-center text-muted w-100" style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14 }}>
        <i className="mdi mdi-download mr-2"></i> Download overall report
      </a>
    </div>
    <div className="card-footer d-flex flex-wrap bg-white p-0 flex-row align-items-stretch" style={{ minHeight: 120 }}>
      <div className="col-6">
        <div className="p-20">
          <ul className="d-flex flex-column justify-content-between" style={{ listStyle: 'none', paddingLeft: 0, marginBottom: 0 }}>
            <li className="mb-2"><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{ color: '#88aaf3' }}></i>Order Completed</li>
            <li className="mb-2"><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{ color: '#50d7ab' }}></i>Order Unpaid</li>
            <li><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{ color: '#ed9090' }}></i>Order Returned</li>
          </ul>
        </div>
      </div>
      <div className="col-6 border-left">
        <div className="p-20">
          <ul className="d-flex flex-column justify-content-between" style={{ listStyle: 'none', paddingLeft: 0, marginBottom: 0 }}>
            <li className="mb-2"><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{ color: '#9586cd' }}></i>Order Pending</li>
            <li className="mb-2"><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{ color: '#f3d676' }}></i>Order Canceled</li>
            <li><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{ color: '#a4d9e5' }}></i>Order Broken</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default OrdersOverviewChart; 