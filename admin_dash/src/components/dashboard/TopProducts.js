import React from 'react';

const products = [
  {
    name: 'Baby cotton shoes',
    img: 'assets/img/products/p1.jpg',
    sales: 58,
    desc: 'Statement belting with double-turnlock hardware adds "swagger" to a simple.',
    price: '$520',
    oldPrice: '$580',
  },
  {
    name: 'Hoodies for men',
    img: 'assets/img/products/p2.jpg',
    sales: 20,
    desc: 'Statement belting with double-turnlock hardware adds "swagger" to a simple.',
    price: '$250',
    oldPrice: '$300',
  },
  {
    name: 'Long slive t-shirt',
    img: 'assets/img/products/p3.jpg',
    sales: 10,
    desc: 'Statement belting with double-turnlock hardware adds "swagger" to a simple.',
    price: '$480',
    oldPrice: '$654',
  },
];

const TopProducts = ({ cardClass = '' }) => (
  <div className={`card card-default ec-card-top-prod ${cardClass}`}>
    <div className="card-header justify-content-between">
      <h2>Top Products</h2>
      <div>
        <button className="text-black-50 mr-2 font-size-20" style={{ background: 'none', border: 'none' }}>
          <i className="mdi mdi-cached"></i>
        </button>
        <div className="dropdown show d-inline-block widget-dropdown">
          <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-product" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
          <ul className="dropdown-menu dropdown-menu-right">
            <li className="dropdown-item"><a href="#">Update Data</a></li>
            <li className="dropdown-item"><a href="#">Detailed Log</a></li>
            <li className="dropdown-item"><a href="#">Statistics</a></li>
            <li className="dropdown-item"><a href="#">Clear Data</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card-body mt-10px mb-10px py-0">
      {products.map((p, idx) => (
        <div className="row media d-flex pt-15px pb-15px" key={idx}>
          <div className="col-lg-3 col-md-3 col-2 media-image align-self-center rounded">
            <a href="#"><img src={p.img} alt="product" /></a>
          </div>
          <div className="col-lg-9 col-md-9 col-10 media-body align-self-center ec-pos">
            <a href="#">
              <h6 className="mb-10px text-dark font-weight-medium">{p.name}</h6>
            </a>
            <p className="float-md-right sale"><span className="mr-2">{p.sales}</span>Sales</p>
            <p className="d-none d-md-block">{p.desc}</p>
            <p className="mb-0 ec-price">
              <span className="text-dark">{p.price}</span>
              <del>{p.oldPrice}</del>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TopProducts; 