import React from 'react';

const stats = [
  {
    value: '1,503',
    label: 'Daily Signups',
    icon: 'mdi-account-arrow-left',
    cardClass: 'card-1',
  },
  {
    value: '79,503',
    label: 'Daily Visitors',
    icon: 'mdi-account-clock',
    cardClass: 'card-2',
  },
  {
    value: '15,503',
    label: 'Daily Order',
    icon: 'mdi-package-variant',
    cardClass: 'card-3',
  },
  {
    value: '$98,503',
    label: 'Daily Revenue',
    icon: 'mdi-currency-usd',
    cardClass: 'card-4',
  },
];

const StatsCards = () => (
  <div className="row">
    {stats.map((stat) => (
      <div className="col-xl-3 col-sm-6 p-b-15 lbl-card" key={stat.label}>
        <div className={`card card-mini dash-card ${stat.cardClass}`}>
          <div className="card-body" style={{ position: 'relative' }}>
            <h2 className="mb-1">{stat.value}</h2>
            <p>{stat.label}</p>
            <span className={`mdi ${stat.icon}`}></span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default StatsCards; 