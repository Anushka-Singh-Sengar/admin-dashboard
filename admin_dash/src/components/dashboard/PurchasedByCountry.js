import React, { useState, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { format, startOfMonth, endOfMonth, subDays, subMonths } from 'date-fns';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

const PRESETS = [
  { label: 'Today', getRange: () => [new Date(), new Date()] },
  { label: 'Yesterday', getRange: () => {
    const d = new Date(); d.setDate(d.getDate() - 1); return [d, d];
  } },
  { label: 'Last 7 Days', getRange: () => [subDays(new Date(), 6), new Date()] },
  { label: 'Last 30 Days', getRange: () => [subDays(new Date(), 29), new Date()] },
  { label: 'This Month', getRange: () => [startOfMonth(new Date()), endOfMonth(new Date())] },
  { label: 'Last Month', getRange: () => [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))] },
  { label: 'Custom Range', getRange: null },
];

const hbar1Data = {
  labels: ["India", "USA", "Turkey"],
  datasets: [
    {
      label: "signup",
      data: [18, 13, 9.5],
      backgroundColor: "#88aaf3"
    }
  ]
};
const hbar2Data = {
  labels: ["Florida", "Poland", "UK"],
  datasets: [
    {
      label: "signup",
      data: [7.5, 4.6, 4],
      backgroundColor: "#88aaf3"
    }
  ]
};
const hbarOptions = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: {
      grid: { color: '#eee', drawBorder: false, zeroLineColor: '#eee', tickMarkLength: 3 },
      ticks: {
        color: '#8a909d',
        font: { family: 'Roboto, sans-serif' },
        callback: value => value + ' %',
        beginAtZero: true
      }
    },
    y: {
      grid: { display: false, drawBorder: false },
      ticks: {
        color: '#8a909d',
        font: { family: 'Roboto, sans-serif', size: 14 },
        beginAtZero: false
      },
      barPercentage: 1.6,
      categoryPercentage: 0.2
    }
  },
  layout: { padding: { right: 10 } },
  interaction: { mode: 'index' },
  plugins: {
    tooltip: {
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
      bodyFont: { size: 15 }
    }
  }
};

const PurchasedByCountry = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState('Today');
  const dropdownRef = useRef(null);

  const formattedRange = `${format(dateRange[0], 'LLL d, yyyy')} - ${format(dateRange[1], 'LLL d, yyyy')}`;

  const handlePresetSelect = (preset) => {
    setSelectedPreset(preset.label);
    setShowDropdown(false);
    if (preset.label === 'Custom Range') {
      setShowPicker(true);
    } else {
      setDateRange(preset.getRange());
      setShowPicker(false);
    }
  };

  return (
    <div className="card card-default" id="analytics-country">
      <div className="card-header justify-content-between d-flex align-items-center">
        <h2>Purchased by Country</h2>
        <div className="dropdown user-activity-dropdown">
          <button
            className="btn btn-link dropdown-toggle"
            type="button"
            id="countryDropdown"
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
            aria-labelledby="countryDropdown"
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
              onChange={(range) => {
                setDateRange(range);
                setShowPicker(false);
              }}
              value={dateRange}
              maxDate={new Date()}
              calendarIcon={null}
              clearIcon={null}
              rangeDivider="-"
            />
          </div>
        )}
      </div>
      <div className="card-body vector-map-world-2" style={{ minHeight: 320 }}>
        {/* Placeholder for world map */}
        <div style={{ width: '100%', height: 220, background: '#f5f7fa', borderRadius: 8, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8a909d', fontFamily: 'Roboto, sans-serif' }}>
          World Map Placeholder
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6">
            <div className="world-data-chart border-bottom pt-15px pb-15px" style={{ height: 120 }}>
              <Bar data={hbar1Data} options={hbarOptions} height={120} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="world-data-chart pt-15px pb-15px" style={{ height: 120 }}>
              <Bar data={hbar2Data} options={hbarOptions} height={120} />
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex flex-wrap bg-white">
        <a href="#" className="text-uppercase py-3">In-Detail Overview</a>
      </div>
    </div>
  );
};

export default PurchasedByCountry; 