import React, { useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { format, startOfMonth, endOfMonth, subDays, subMonths } from 'date-fns';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

const activityData = [
  {
    first: [0, 65, 52, 115, 98, 165, 125],
    second: [45, 38, 100, 87, 152, 187, 85],
  },
  {
    first: [0, 65, 77, 33, 49, 100, 100],
    second: [88, 33, 20, 44, 111, 140, 77],
  },
  {
    first: [0, 40, 77, 55, 33, 116, 50],
    second: [55, 32, 20, 55, 111, 134, 66],
  },
  {
    first: [0, 44, 22, 77, 33, 151, 99],
    second: [60, 32, 120, 55, 19, 134, 88],
  },
];

const data = {
  labels: [
    '4 Jan',
    '5 Jan',
    '6 Jan',
    '7 Jan',
    '8 Jan',
    '9 Jan',
    '10 Jan',
  ],
  datasets: [
    {
      label: 'Active',
      backgroundColor: 'transparent',
      borderColor: 'rgba(82, 136, 255, .8)',
      data: activityData[0].first,
      tension: 0,
      pointRadius: 5,
      pointBackgroundColor: 'rgba(255,255,255,1)',
      pointHoverBackgroundColor: 'rgba(255,255,255,1)',
      pointBorderWidth: 2,
      pointHoverRadius: 7,
      pointHoverBorderWidth: 1,
    },
    {
      label: 'Inactive',
      backgroundColor: 'transparent',
      borderColor: 'rgba(255, 199, 15, .8)',
      data: activityData[0].second,
      tension: 0,
      borderDash: [10, 5],
      borderWidth: 1,
      pointRadius: 5,
      pointBackgroundColor: 'rgba(255,255,255,1)',
      pointHoverBackgroundColor: 'rgba(255,255,255,1)',
      pointBorderWidth: 2,
      pointHoverRadius: 7,
      pointHoverBorderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      mode: 'index',
      intersect: false,
      titleColor: '#888',
      bodyColor: '#555',
      titleFont: { size: 12, family: 'Roboto, sans-serif' },
      bodyFont: { size: 15, family: 'Roboto, sans-serif' },
      backgroundColor: 'rgba(256,256,256,0.95)',
      displayColors: true,
      padding: 10,
      borderColor: 'rgba(220, 220, 220, 0.9)',
      borderWidth: 2,
      caretSize: 6,
      caretPadding: 5,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: '#8a909d',
        font: { family: 'Roboto, sans-serif' },
      },
    },
    y: {
      grid: {
        color: '#eee',
        zeroLineColor: '#eee',
      },
      ticks: {
        stepSize: 50,
        color: '#8a909d',
        font: { family: 'Roboto, sans-serif' },
      },
    },
  },
};

const PRESETS = [
  { label: 'Today', getRange: () => [new Date(), new Date()] },
  { label: 'Yesterday', getRange: () => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return [d, d];
  }},
  { label: 'Last 7 Days', getRange: () => [subDays(new Date(), 6), new Date()] },
  { label: 'Last 30 Days', getRange: () => [subDays(new Date(), 29), new Date()] },
  { label: 'This Month', getRange: () => [startOfMonth(new Date()), endOfMonth(new Date())] },
  { label: 'Last Month', getRange: () => {
    const lastMonth = subMonths(new Date(), 1);
    return [startOfMonth(lastMonth), endOfMonth(lastMonth)];
  }},
  { label: 'Custom Range', getRange: null },
];

// Add this style block at the top (or use a CSS/SCSS file if preferred)
const dropdownCustomStyle = `
.user-activity-dropdown .dropdown-menu {
  min-width: 180px;
  border-radius: 8px;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05);
  padding: 0.5rem 0;
}
.user-activity-dropdown .dropdown-item {
  padding: 0.3125rem 1.25rem;
}
.user-activity-dropdown .dropdown-item span {
  font-size: 0.875rem;
  color: #8a909d;
  text-transform: capitalize;
  transition: color 0.2s;
}
.user-activity-dropdown .dropdown-item:hover span {
  color: #88aaf3;
}
`;

const UserActivityChart = () => {
  const [dateRange, setDateRange] = useState([
    (() => { const d = new Date(); d.setDate(d.getDate() - 1); return d; })(),
    (() => { const d = new Date(); d.setDate(d.getDate() - 1); return d; })(),
  ]);
  const [showPicker, setShowPicker] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState('Yesterday');
  const dropdownRef = useRef(null);

  const formattedRange = `${format(dateRange[0], 'LLL d, yyyy')} - ${format(dateRange[1], 'LLL d, yyyy')}`;

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown]);

  const handlePresetSelect = (preset) => {
    setSelectedPreset(preset.label);
    setShowDropdown(false);
    if (preset.label === 'Custom Range') {
      setShowPicker(true);
    } else {
      setShowPicker(false);
      setDateRange(preset.getRange());
    }
  };

  // In the component, inject the style tag (once)
  React.useEffect(() => {
    if (!document.getElementById('user-activity-dropdown-style')) {
      const style = document.createElement('style');
      style.id = 'user-activity-dropdown-style';
      style.innerHTML = dropdownCustomStyle;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="card card-default h-100" id="user-activity">
      <div className="card-header justify-content-between d-flex align-items-center">
        <h2>User Activity</h2>
        <div className="dropdown user-activity-dropdown">
          <button
            className="btn btn-link dropdown-toggle"
            type="button"
            id="userActivityDropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={showDropdown ? 'true' : 'false'}
            onClick={() => setShowDropdown((v) => !v)}
            style={{ color: '#8a909d', fontSize: '0.875rem', textTransform: 'capitalize' }}
          >
            {formattedRange}
          </button>
          <div
            className={`dropdown-menu${showDropdown ? ' show' : ''}`}
            aria-labelledby="userActivityDropdown"
            style={{ minWidth: 180 }}
          >
            {PRESETS.map((preset) => (
              <button
                key={preset.label}
                className="dropdown-item"
                type="button"
                onClick={() => handlePresetSelect(preset)}
                style={{ background: 'none', border: 0, width: '100%', textAlign: 'left' }}
              >
                <span>{preset.label}</span>
              </button>
            ))}
          </div>
        </div>
        {showPicker && (
          <div style={{ position: 'absolute', right: 0, zIndex: 30, top: '110%' }}>
            <DateRangePicker
              onChange={range => {
                setDateRange(range);
                setShowPicker(false);
                setSelectedPreset('Custom Range');
              }}
              value={dateRange}
              maxDate={new Date()}
              calendarIcon={null}
              clearIcon={null}
              rangeDivider=" - "
            />
          </div>
        )}
      </div>
      <div className="card-body" style={{ minHeight: 300 }}>
        <Line data={data} options={options} height={250} />
      </div>
      <div className="card-footer d-flex flex-wrap bg-white border-top">
        <a href="#" className="text-uppercase py-3">In-Detail Overview</a>
      </div>
    </div>
  );
};

export default UserActivityChart; 