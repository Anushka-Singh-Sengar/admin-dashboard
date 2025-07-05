import React from 'react';

const soldItems = [
  { name: 'Backpack', qty: 9, percent: '33%', trend: 'up', color: 'success' },
  { name: 'T-Shirt', qty: 6, percent: '150%', trend: 'up', color: 'success' },
  { name: 'Coat', qty: 3, percent: '50%', trend: 'up', color: 'success' },
  { name: 'Necklace', qty: 7, percent: '150%', trend: 'up', color: 'success' },
  { name: 'Jeans Pant', qty: 10, percent: '300%', trend: 'down', color: 'danger' },
  { name: 'Shoes', qty: 5, percent: '100%', trend: 'up', color: 'success' },
  { name: 'T-Shirt', qty: 6, percent: '150%', trend: 'up', color: 'success' },
  { name: 'Watches', qty: 18, percent: '160%', trend: 'up', color: 'success' },
  { name: 'Inner', qty: 156, percent: '120%', trend: 'up', color: 'success' },
  { name: 'T-Shirt', qty: 6, percent: '150%', trend: 'up', color: 'success' },
];

const SoldByItems = () => (
  <div className="card card-default Sold-card-table">
    <div className="card-header justify-content-between">
      <h2>Sold by Items</h2>
      <div className="tools">
        <button className="text-black-50 mr-2 font-size-20" style={{ background: 'none', border: 'none' }}>
          <i className="mdi mdi-cached"></i>
        </button>
        <div className="dropdown show d-inline-block widget-dropdown">
          <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-units" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
          <ul className="dropdown-menu dropdown-menu-right">
            <li className="dropdown-item"><a href="#">Action</a></li>
            <li className="dropdown-item"><a href="#">Another action</a></li>
            <li className="dropdown-item"><a href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card-body py-0 compact-units" data-simplebar style={{ height: 534 }}>
      <table className="table">
        <tbody>
          {soldItems.map((item, idx) => (
            <tr key={idx}>
              <td className="text-dark" style={{ fontFamily: 'Roboto, sans-serif' }}>{item.name}</td>
              <td className="text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>{item.qty}</td>
              <td className="text-right" style={{ fontFamily: 'Roboto, sans-serif' }}>
                {item.percent} <i className={`mdi mdi-arrow-${item.trend}-bold text-${item.color} pl-1 font-size-12`}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="card-footer d-flex flex-wrap bg-white">
      <a href="#" className="text-uppercase py-3">View Report</a>
    </div>
  </div>
);

export default SoldByItems; 