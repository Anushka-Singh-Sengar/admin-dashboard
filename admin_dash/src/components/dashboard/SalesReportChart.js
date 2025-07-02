import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const acqData = [
  {
    first: [100, 180, 44, 75, 150, 66, 70],
    second: [144, 44, 177, 76, 23, 189, 12],
    third: [44, 167, 102, 123, 183, 88, 134]
  },
  {
    first: [144, 44, 110, 5, 123, 89, 12],
    second: [22, 123, 45, 130, 112, 54, 181],
    third: [55, 44, 144, 75, 155, 166, 70]
  },
  {
    first: [134, 80, 123, 65, 171, 33, 22],
    second: [44, 144, 77, 76, 123, 89, 112],
    third: [156, 23, 165, 88, 112, 54, 181]
  }
];

const tabOptions = ["Today's", "Monthly", "Yearly"];

const legendItems = [
  {
    label: 'Via Referral',
    color: 'rgba(52, 116, 212, .7)'
  },
  {
    label: 'Direct',
    color: 'rgba(255, 192, 203, .7)'
  },
  {
    label: 'Via Social',
    color: 'rgba(178, 251, 212, .7)'
  }
];

const getChartData = (tabIndex) => ({
  labels: [
    "4 Jan",
    "5 Jan",
    "6 Jan",
    "7 Jan",
    "8 Jan",
    "9 Jan",
    "10 Jan"
  ],
  datasets: [
    {
      label: "Via Referral",
      backgroundColor: "rgba(52, 116, 212, .2)",
      borderColor: "rgba(52, 116, 212, .7)",
      data: acqData[tabIndex].first,
      tension: 0.3,
      fill: true,
      pointBackgroundColor: "rgba(52, 116, 212,0)",
      pointHoverBackgroundColor: "rgba(52, 116, 212,1)",
      pointHoverRadius: 3,
      pointHitRadius: 30,
      pointBorderWidth: 2,
      pointStyle: "rectRounded"
    },
    {
      label: "Direct",
      backgroundColor: "rgba(255, 192, 203, .3)",
      borderColor: "rgba(255, 192, 203, .7)",
      data: acqData[tabIndex].second,
      tension: 0.3,
      fill: true,
      pointBackgroundColor: "rgba(255, 192, 203, 0)",
      pointHoverBackgroundColor: "rgba(255, 192, 203, 1)",
      pointHoverRadius: 3,
      pointHitRadius: 30,
      pointBorderWidth: 2,
      pointStyle: "rectRounded"
    },
    {
      label: "Via Social",
      backgroundColor: "rgb(178, 251, 212, .3)",
      borderColor: "rgba(178, 251, 212, .7)",
      data: acqData[tabIndex].third,
      tension: 0.3,
      fill: true,
      pointBackgroundColor: "rgba(178, 251, 212, 0)",
      pointHoverBackgroundColor: "rgba(178, 251, 212, 1)",
      pointHoverRadius: 3,
      pointHitRadius: 30,
      pointBorderWidth: 2,
      pointStyle: "rectRounded"
    }
  ]
});

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    },
    tooltip: {
      mode: "index",
      titleColor: "#888",
      bodyColor: "#555",
      titleFont: { size: 12, family: 'Roboto, sans-serif' },
      bodyFont: { size: 15, family: 'Roboto, sans-serif' },
      backgroundColor: "rgba(256,256,256,0.95)",
      displayColors: true,
      xPadding: 20,
      yPadding: 10,
      borderColor: "rgba(220, 220, 220, 0.9)",
      borderWidth: 2,
      caretSize: 10,
      caretPadding: 15
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: '#8a909d',
        font: {
          family: 'Roboto, sans-serif',
          size: 14
        }
      }
    },
    y: {
      grid: {
        display: true,
        color: "#eee",
        zeroLineColor: "#eee"
      },
      beginAtZero: true,
      max: 200,
      ticks: {
        stepSize: 50,
        color: '#8a909d',
        font: {
          family: 'Roboto, sans-serif',
          size: 14
        }
      }
    }
  }
};

const SalesReportChart = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="card card-default" id="user-acquisition" style={{ minHeight: 420 }}>
      <div className="card-header">
        <h2>Sales Report</h2>
      </div>
      <div className="card-body">
        <ul className="nav nav-tabs nav-style-border justify-content-between justify-content-lg-start border-bottom" role="tablist">
          {tabOptions.map((tab, idx) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link${activeTab === idx ? ' active' : ''}`}
                onClick={() => setActiveTab(idx)}
                type="button"
                role="tab"
                aria-selected={activeTab === idx}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content pt-4" id="salesReport">
          <div className="tab-pane fade show active" role="tabpanel">
            <div className="mb-6" style={{ maxHeight: 247 }}>
              <Line data={getChartData(activeTab)} options={options} />
            </div>
            <ul className="customLegend mb-2" style={{ listStyle: 'none', paddingLeft: 0, marginTop: 0, marginBottom: 32, textAlign: 'left' }}>
              {legendItems.map((item, idx) => (
                <li key={item.label} style={{ display: 'inline-block', marginRight: 20, marginTop: 20, color: '#8a909d', fontFamily: 'Roboto, sans-serif', fontSize: 14 }}>
                  <span style={{ display: 'inline-block', width: 12, height: 12, marginRight: 5, borderRadius: 16, background: item.color, verticalAlign: 'middle' }}></span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReportChart; 