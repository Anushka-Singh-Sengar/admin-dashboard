import React from 'react';
import StatsCards from './dashboard/StatsCards';
import SalesReportChart from './dashboard/SalesReportChart';
import OrdersOverviewChart from './dashboard/OrdersOverviewChart';
import UserActivityChart from './dashboard/UserActivityChart';
import PurchasedByCountry from './dashboard/PurchasedByCountry';
import CurrentUsersChart from './dashboard/CurrentUsersChart';

const Dashboard = () => (
  <div className="container-fluid mt-4">
    <StatsCards />
    <div className="row mt-4 d-flex align-items-stretch">
      <div className="col-xl-8 col-md-12 p-b-15 h-100">
        <SalesReportChart />
      </div>
      <div className="col-xl-4 col-md-12 p-b-15 h-100">
        <OrdersOverviewChart />
      </div>
    </div>
    <div className="row">
      <div className="col-xl-8 col-md-12 p-b-15">
        <UserActivityChart />
      </div>
      <div className="col-xl-4 col-md-12 p-b-15">
        <CurrentUsersChart />
      </div>
    </div>
    <div className="row">
      <div className="col-xl-8 col-12 p-b-15">
        <PurchasedByCountry />
      </div>
    </div>
  </div>
);

export default Dashboard; 