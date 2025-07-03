import React, { useState } from 'react';

const SIDEBAR_MENUS = [
  {
    type: 'dashboard',
    icon: 'mdi-view-dashboard-outline',
    label: 'Dashboard',
    href: '/',
    hr: true,
  },
  {
    key: 'vendors',
    icon: 'mdi-account-group-outline',
    label: 'Vendors',
    submenu: [
      { label: 'Vendor Grid', href: '/vendor-card' },
      { label: 'Vendor List', href: '/vendor-list' },
      { label: 'Vendors Profile', href: '/vendor-profile' },
    ],
  },
  {
    key: 'users',
    icon: 'mdi-account-group',
    label: 'Users',
    submenu: [
      { label: 'User Grid', href: '/user-card' },
      { label: 'User List', href: '/user-list' },
      { label: 'Users Profile', href: '/user-profile' },
    ],
    hr: true,
  },
  {
    key: 'categorys',
    icon: 'mdi-dns-outline',
    label: 'Categories',
    submenu: [
      { label: 'Main Category', href: '/main-category' },
      { label: 'Sub Category', href: '/sub-category' },
    ],
  },
  {
    key: 'products',
    icon: 'mdi-palette-advanced',
    label: 'Products',
    submenu: [
      { label: 'Add Product', href: '/product-add' },
      { label: 'List Product', href: '/product-list' },
      { label: 'Grid Product', href: '/product-grid' },
      { label: 'Product Detail', href: '/product-detail' },
    ],
  },
  {
    key: 'orders',
    icon: 'mdi-cart',
    label: 'Orders',
    submenu: [
      { label: 'New Order', href: '/new-order' },
      { label: 'Order History', href: '/order-history' },
      { label: 'Order Detail', href: '/order-detail' },
      { label: 'Invoice', href: '/invoice' },
    ],
  },
  {
    type: 'reviews',
    icon: 'mdi-star-half',
    label: 'Reviews',
    href: '/review-list',
  },
  {
    type: 'brands',
    icon: 'mdi-tag-faces',
    label: 'Brands',
    href: '/brand-list',
    hr: true,
  },
  {
    key: 'authentication',
    icon: 'mdi-login',
    label: 'Authentication',
    submenu: [
      { label: 'Sign In', href: '/sign-in' },
      { label: 'Sign Up', href: '/sign-up' },
    ],
  },
  {
    key: 'icons',
    icon: 'mdi-diamond-stone',
    label: 'Icons',
    submenu: [
      { label: 'Material Icon', href: '/material-icon' },
      { label: 'Font Awsome Icon', href: '/font-awsome-icons' },
      { label: 'Flag Icon', href: '/flag-icon' },
    ],
  },
  {
    key: 'otherpages',
    icon: 'mdi-image-filter-none',
    label: 'Other Pages',
    submenu: [
      { label: '404 Page', href: '/404' },
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
          <a href="/" title="Ekka">
            <img className="ec-brand-icon" src="/assets/img/logo/ec-site-logo.png" alt="Ekka Logo" style={{ display: 'block', maxWidth: 30, width: '100%', height: 'auto' }} />
            {!isSidebarMinified && <span className="ec-brand-name text-truncate">Ekka</span>}
          </a>
        </div>
        <div className="ec-navigation" data-simplebar>
          <ul className="nav sidebar-inner" id="sidebar-menu">
            {SIDEBAR_MENUS.map((menu, idx) => {
              if (menu.type === 'dashboard' || menu.type === 'reviews' || menu.type === 'brands') {
                return (
                  <React.Fragment key={menu.label}>
                    <li className={menu.type === 'dashboard' ? 'active' : ''}>
                      <a className="sidenav-item-link" href={menu.href}>
                        <i className={`mdi ${menu.icon}`}></i>
                        {!isSidebarMinified && <span className="nav-text">{menu.label}</span>}
                      </a>
                      {menu.hr && <hr />}
                    </li>
                  </React.Fragment>
                );
              }
              // Submenus
              return (
                <React.Fragment key={menu.key}>
                  <li className="has-sub">
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
                          <li key={item.href} className="">
                            <a className="sidenav-item-link" href={item.href}>
                              {!isSidebarMinified && <span className="nav-text">{item.label}</span>}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {menu.hr && <hr />}
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