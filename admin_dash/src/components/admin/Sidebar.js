import React from 'react';

const Sidebar = () => (
  <div className="ec-left-sidebar ec-bg-sidebar">
    <div id="sidebar" className="sidebar ec-sidebar-footer">
      <div className="ec-brand">
        <a href="/" title="Ekka">
          <img className="ec-brand-icon" src="/assets/img/logo/ec-site-logo.png" alt="Ekka Logo" />
          <span className="ec-brand-name text-truncate">Ekka</span>
        </a>
      </div>
      <div className="ec-navigation" data-simplebar>
        <ul className="nav sidebar-inner" id="sidebar-menu">
          {/* Dashboard */}
          <li className="active">
            <a className="sidenav-item-link" href="/">
              <i className="mdi mdi-view-dashboard-outline"></i>
              <span className="nav-text">Dashboard</span>
            </a>
            <hr />
          </li>
          {/* Vendors */}
          <li className="has-sub">
            <a className="sidenav-item-link" href="#vendors">
              <i className="mdi mdi-account-group-outline"></i>
              <span className="nav-text">Vendors</span> <b className="caret"></b>
            </a>
            <div className="collapse">
              <ul className="sub-menu" id="vendors" data-parent="#sidebar-menu">
                <li><a className="sidenav-item-link" href="/vendor-card"><span className="nav-text">Vendor Grid</span></a></li>
                <li><a className="sidenav-item-link" href="/vendor-list"><span className="nav-text">Vendor List</span></a></li>
                <li><a className="sidenav-item-link" href="/vendor-profile"><span className="nav-text">Vendors Profile</span></a></li>
              </ul>
            </div>
          </li>
          {/* Users */}
          <li className="has-sub">
            <a className="sidenav-item-link" href="#users">
              <i className="mdi mdi-account-group"></i>
              <span className="nav-text">Users</span> <b className="caret"></b>
            </a>
            <div className="collapse">
              <ul className="sub-menu" id="users" data-parent="#sidebar-menu">
                <li><a className="sidenav-item-link" href="/user-card"><span className="nav-text">User Grid</span></a></li>
                <li><a className="sidenav-item-link" href="/user-list"><span className="nav-text">User List</span></a></li>
                <li><a className="sidenav-item-link" href="/user-profile"><span className="nav-text">Users Profile</span></a></li>
              </ul>
            </div>
            <hr />
          </li>
          {/* Categories */}
          <li className="has-sub">
            <a className="sidenav-item-link" href="#categorys">
              <i className="mdi mdi-dns-outline"></i>
              <span className="nav-text">Categories</span> <b className="caret"></b>
            </a>
            <div className="collapse">
              <ul className="sub-menu" id="categorys" data-parent="#sidebar-menu">
                <li><a className="sidenav-item-link" href="/main-category"><span className="nav-text">Main Category</span></a></li>
                <li><a className="sidenav-item-link" href="/sub-category"><span className="nav-text">Sub Category</span></a></li>
              </ul>
            </div>
          </li>
          {/* Products */}
          <li className="has-sub">
            <a className="sidenav-item-link" href="#products">
              <i className="mdi mdi-palette-advanced"></i>
              <span className="nav-text">Products</span> <b className="caret"></b>
            </a>
            <div className="collapse">
              <ul className="sub-menu" id="products" data-parent="#sidebar-menu">
                <li><a className="sidenav-item-link" href="/product-add"><span className="nav-text">Add Product</span></a></li>
                <li><a className="sidenav-item-link" href="/product-list"><span className="nav-text">List Product</span></a></li>
                <li><a className="sidenav-item-link" href="/product-grid"><span className="nav-text">Grid Product</span></a></li>
                <li><a className="sidenav-item-link" href="/product-detail"><span className="nav-text">Product Detail</span></a></li>
              </ul>
            </div>
          </li>
          {/* Orders */}
          <li className="has-sub">
            <a className="sidenav-item-link" href="#orders">
              <i className="mdi mdi-cart"></i>
              <span className="nav-text">Orders</span> <b className="caret"></b>
            </a>
            <div className="collapse">
              <ul className="sub-menu" id="orders" data-parent="#sidebar-menu">
                <li><a className="sidenav-item-link" href="/new-order"><span className="nav-text">New Order</span></a></li>
                <li><a className="sidenav-item-link" href="/order-history"><span className="nav-text">Order History</span></a></li>
                <li><a className="sidenav-item-link" href="/order-detail"><span className="nav-text">Order Detail</span></a></li>
                <li><a className="sidenav-item-link" href="/invoice"><span className="nav-text">Invoice</span></a></li>
              </ul>
            </div>
          </li>
          {/* Reviews */}
          <li>
            <a className="sidenav-item-link" href="/review-list">
              <i className="mdi mdi-star-half"></i>
              <span className="nav-text">Reviews</span>
            </a>
          </li>
          {/* Brands */}
          <li>
            <a className="sidenav-item-link" href="/brand-list">
              <i className="mdi mdi-tag-faces"></i>
              <span className="nav-text">Brands</span>
            </a>
            <hr />
          </li>
          {/* Authentication */}
          <li className="has-sub">
            <a className="sidenav-item-link" href="#authentication">
              <i className="mdi mdi-login"></i>
              <span className="nav-text">Authentication</span> <b className="caret"></b>
            </a>
            <div className="collapse">
              <ul className="sub-menu" id="authentication" data-parent="#sidebar-menu">
                <li><a href="/sign-in"><span className="nav-text">Sign In</span></a></li>
                <li><a href="/sign-up"><span className="nav-text">Sign Up</span></a></li>
              </ul>
            </div>
          </li>
          {/* Icons */}
          <li className="has-sub">
            <a className="sidenav-item-link" href="#icons">
              <i className="mdi mdi-diamond-stone"></i>
              <span className="nav-text">Icons</span> <b className="caret"></b>
            </a>
            <div className="collapse">
              <ul className="sub-menu" id="icons" data-parent="#sidebar-menu">
                <li><a className="sidenav-item-link" href="/material-icon"><span className="nav-text">Material Icon</span></a></li>
                <li><a className="sidenav-item-link" href="/font-awsome-icons"><span className="nav-text">Font Awsome Icon</span></a></li>
                <li><a className="sidenav-item-link" href="/flag-icon"><span className="nav-text">Flag Icon</span></a></li>
              </ul>
            </div>
          </li>
          {/* Other Pages */}
          <li className="has-sub">
            <a className="sidenav-item-link" href="#otherpages">
              <i className="mdi mdi-image-filter-none"></i>
              <span className="nav-text">Other Pages</span> <b className="caret"></b>
            </a>
            <div className="collapse">
              <ul className="sub-menu" id="otherpages" data-parent="#sidebar-menu">
                <li className="has-sub">
                  <a href="/404">404 Page</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Sidebar; 