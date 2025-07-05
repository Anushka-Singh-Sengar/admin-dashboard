import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SIDEBAR_MENUS = [
  {
    type: 'dashboard',
    icon: 'mdi-view-dashboard-outline',
    label: 'Dashboard',
    pageKey: 'dashboard',
    hr: true,
  },
  {
    key: 'vendors',
    icon: 'mdi-account-group-outline',
    label: 'Vendors',
    submenu: [
      { label: 'Vendor Grid', to: '/vendor-card' },
      { label: 'Vendor List', to: '/vendor-list' },
      { label: 'Vendors Profile', to: '/vendor-profile' },
    ],
  },
  {
    key: 'users',
    icon: 'mdi-account-group',
    label: 'Users',
    submenu: [
      { label: 'User Grid', to: '/user-grid' },
      { label: 'User List', to: '/user-list' },
      { label: 'Users Profile', to: '/user-profile' },
    ],
    hr: true,
  },
  {
    key: 'categorys',
    icon: 'mdi-dns-outline',
    label: 'Categories',
    submenu: [
      { label: 'Main Category', pageKey: 'main-category' },
      { label: 'Sub Category', pageKey: 'sub-category' },
    ],
  },
  {
    key: 'products',
    icon: 'mdi-palette-advanced',
    label: 'Products',
    submenu: [
      { label: 'Add Product', pageKey: 'product-add' },
      { label: 'List Product', pageKey: 'product-list' },
      { label: 'Grid Product', pageKey: 'product-grid' },
      { label: 'Product Detail', pageKey: 'product-detail' },
    ],
  },
  {
    key: 'orders',
    icon: 'mdi-cart',
    label: 'Orders',
    submenu: [
      { label: 'New Order', pageKey: 'new-order' },
      { label: 'Order History', pageKey: 'order-history' },
      { label: 'Order Detail', pageKey: 'order-detail' },
      { label: 'Invoice', pageKey: 'invoice' },
    ],
  },
  {
    type: 'reviews',
    icon: 'mdi-star-half',
    label: 'Reviews',
    pageKey: 'review-list',
  },
  {
    type: 'brands',
    icon: 'mdi-tag-faces',
    label: 'Brands',
    pageKey: 'brand-list',
    hr: true,
  },
  {
    key: 'authentication',
    icon: 'mdi-login',
    label: 'Authentication',
    submenu: [
      { label: 'Sign In', pageKey: 'sign-in' },
      { label: 'Sign Up', pageKey: 'sign-up' },
    ],
  },
  {
    key: 'icons',
    icon: 'mdi-diamond-stone',
    label: 'Icons',
    submenu: [
      { label: 'Material Icon', pageKey: 'material-icon' },
      { label: 'Font Awsome Icon', pageKey: 'font-awsome-icons' },
      { label: 'Flag Icon', pageKey: 'flag-icon' },
    ],
  },
  {
    key: 'otherpages',
    icon: 'mdi-image-filter-none',
    label: 'Other Pages',
    submenu: [
      { label: '404 Page', pageKey: '404' },
    ],
  },
];

const Sidebar = ({ isSidebarMinified }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (e, key) => {
    e.preventDefault();
    setOpenMenu((prev) => (prev === key ? null : key));
  };

  return (
    <div className="ec-left-sidebar ec-bg-sidebar">
      <div id="sidebar" className="sidebar ec-sidebar-footer">
        <div className="ec-brand">
          <NavLink to="/" title="Proyo">
            <img className="ec-brand-icon" src="/assets/img/logo/ec-site-logo.png" alt="Proyo Logo" style={{ display: 'block', maxWidth: 30, width: '100%', height: 'auto' }} />
            {!isSidebarMinified && <span className="ec-brand-name text-truncate">Proyo</span>}
          </NavLink>
        </div>
        <div className="ec-navigation" data-simplebar>
          <ul className="nav sidebar-inner" id="sidebar-menu">
            {SIDEBAR_MENUS.map((menu) => {
              if (menu.type === 'dashboard' || menu.type === 'reviews' || menu.type === 'brands') {
                return (
                  <React.Fragment key={menu.label}>
                    <li>
                      <NavLink className="sidenav-item-link" to={menu.pageKey === 'dashboard' ? '/' : `/${menu.pageKey}`} end>
                        <i className={`mdi ${menu.icon}`}></i>
                        {!isSidebarMinified && <span className="nav-text">{menu.label}</span>}
                      </NavLink>
                      {menu.hr && <hr />}
                    </li>
                  </React.Fragment>
                );
              }
              // Submenus
              return (
                <React.Fragment key={menu.key}>
                  <li className={`has-sub${openMenu === menu.key ? ' active expand' : ''}`}>
                    <a
                      className="sidenav-item-link"
                      href="#"
                      onClick={e => handleMenuClick(e, menu.key)}
                      aria-expanded={openMenu === menu.key}
                    >
                      <i className={`mdi ${menu.icon}`}></i>
                      {!isSidebarMinified && <span className="nav-text">{menu.label}</span>}
                      {!isSidebarMinified && <b className="caret" style={{ transform: openMenu === menu.key ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}></b>}
                    </a>
                    <div className={`collapse${openMenu === menu.key ? ' show' : ''}`}> 
                      <ul className="sub-menu" id={menu.key} data-parent="#sidebar-menu">
                        {menu.submenu.map((item) => (
                          <li key={item.to || item.pageKey}>
                            {item.to ? (
                              <NavLink className="sidenav-item-link" to={item.to} end>
                                {!isSidebarMinified && <span className="nav-text">{item.label}</span>}
                              </NavLink>
                            ) : (
                              <a className="sidenav-item-link" href="#">
                                {!isSidebarMinified && <span className="nav-text">{item.label}</span>}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;