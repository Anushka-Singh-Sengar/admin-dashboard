import React from 'react';

const customers = [
  {
    name: 'Selena Wagner',
    username: '@selena.oi',
    img: 'assets/img/user/u1.jpg',
    orders: '2 Orders',
    amount: '$150',
  },
  {
    name: 'Walter Reuter',
    username: '@walter.me',
    img: 'assets/img/user/u2.jpg',
    orders: '5 Orders',
    amount: '$200',
  },
  {
    name: 'Larissa Gebhardt',
    username: '@larissa.gb',
    img: 'assets/img/user/u3.jpg',
    orders: '1 Order',
    amount: '$50',
  },
  {
    name: 'Albrecht Straub',
    username: '@albrech.as',
    img: 'assets/img/user/u4.jpg',
    orders: '2 Orders',
    amount: '$100',
  },
  {
    name: 'Leopold Ebert',
    username: '@leopold.et',
    img: 'assets/img/user/u5.jpg',
    orders: '1 Order',
    amount: '$60',
  },
  {
    name: 'Larissa Gebhardt',
    username: '@larissa.gb',
    img: 'assets/img/user/u3.jpg',
    orders: '1 Order',
    amount: '$50',
  },
];

const NewCustomers = ({ cardClass = '' }) => (
  <div className={`card ec-cust-card card-table-border-none card-default ${cardClass}`}>
    <div className="card-header justify-content-between ">
      <h2>New Customers</h2>
      <div>
        <button className="text-black-50 mr-2 font-size-20" style={{ background: 'none', border: 'none' }}>
          <i className="mdi mdi-cached"></i>
        </button>
        <div className="dropdown show d-inline-block widget-dropdown">
          <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-customar" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
          <ul className="dropdown-menu dropdown-menu-right">
            <li className="dropdown-item"><a href="#">Action</a></li>
            <li className="dropdown-item"><a href="#">Another action</a></li>
            <li className="dropdown-item"><a href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card-body pt-0 pb-15px">
      <table className="table ">
        <tbody>
          {customers.map((c, idx) => (
            <tr key={idx}>
              <td>
                <div className="media">
                  <div className="media-image mr-3 rounded-circle">
                    <a href="profile.html"><img className="profile-img rounded-circle w-45" src={c.img} alt="customer image" /></a>
                  </div>
                  <div className="media-body align-self-center">
                    <a href="profile.html">
                      <h6 className="mt-0 text-dark font-weight-medium">{c.name}</h6>
                    </a>
                    <small>{c.username}</small>
                  </div>
                </div>
              </td>
              <td>{c.orders}</td>
              <td className="text-dark d-none d-md-block">{c.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default NewCustomers; 