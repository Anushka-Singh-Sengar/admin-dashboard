import React from 'react';

const orders = [
  {
    id: '24541',
    product: 'Coach Swagger',
    units: '1 Unit',
    date: 'Oct 20, 2018',
    cost: '$230',
    status: 'Completed',
    statusClass: 'success',
  },
  {
    id: '24541',
    product: 'Toddler Shoes, Gucci Watch',
    units: '2 Units',
    date: 'Nov 15, 2018',
    cost: '$550',
    status: 'Delayed',
    statusClass: 'primary',
  },
  {
    id: '24541',
    product: 'Hat Black Suits',
    units: '1 Unit',
    date: 'Nov 18, 2018',
    cost: '$325',
    status: 'On Hold',
    statusClass: 'warning',
  },
  {
    id: '24541',
    product: 'Backpack Gents, Swimming Cap Slin',
    units: '5 Units',
    date: 'Dec 13, 2018',
    cost: '$200',
    status: 'Completed',
    statusClass: 'success',
  },
  {
    id: '24541',
    product: 'Speed 500 Ignite',
    units: '1 Unit',
    date: 'Dec 23, 2018',
    cost: '$150',
    status: 'Cancelled',
    statusClass: 'danger',
  },
];

const RecentOrders = () => (
  <div className="card card-table-border-none card-default recent-orders" id="recent-orders">
    <div className="card-header justify-content-between">
      <h2>Recent Orders</h2>
      <div className="date-range-report">
        <span></span>
      </div>
    </div>
    <div className="card-body pt-0 pb-5">
      <table className="table card-table table-responsive table-responsive-large" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th className="d-none d-lg-table-cell">Units</th>
            <th className="d-none d-lg-table-cell">Order Date</th>
            <th className="d-none d-lg-table-cell">Order Cost</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={idx}>
              <td>{order.id}</td>
              <td>
                <a className="text-dark" href=""> {order.product}</a>
              </td>
              <td className="d-none d-lg-table-cell">{order.units}</td>
              <td className="d-none d-lg-table-cell">{order.date}</td>
              <td className="d-none d-lg-table-cell">{order.cost}</td>
              <td>
                <span className={`badge badge-${order.statusClass}`}>{order.status}</span>
              </td>
              <td className="text-right">
                <div className="dropdown show d-inline-block widget-dropdown">
                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id={`dropdown-recent-order${idx+1}`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li className="dropdown-item"><a href="#">View</a></li>
                    <li className="dropdown-item"><a href="#">Remove</a></li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default RecentOrders; 