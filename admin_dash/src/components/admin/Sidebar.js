import React, { useState } from 'react';

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
      { label: 'Vendor Grid', pageKey: 'vendor-grid' },
      { label: 'Vendor List', pageKey: 'vendor-list' },
      { label: 'Vendors Profile', pageKey: 'vendor-profile' },
    ],
  },
  {
    key: 'users',
    icon: 'mdi-account-group',
    label: 'Users',
    submenu: [
      { label: 'User Grid', pageKey: 'user-grid' },
      { label: 'User List', pageKey: 'user-list' },
      { label: 'Users Profile', pageKey: 'user-profile' },
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

const Sidebar = ({ isSidebarMinified, currentPage, setCurrentPage }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (e, key) => {
    e.preventDefault();
    setOpenMenu((prev) => (prev === key ? null : key));
  };

  const handlePageClick = (e, pageKey) => {
    e.preventDefault();
    setCurrentPage(pageKey);
  };

  const isCurrentPage = (pageKey) => {
    return currentPage === pageKey;
  };

  const isCurrentMenu = (menuKey) => {
    const menu = SIDEBAR_MENUS.find(m => m.key === menuKey);
    if (menu && menu.submenu) {
      return menu.submenu.some(item => item.pageKey === currentPage);
    }
    return false;
  };

  return (
    <div className="ec-left-sidebar ec-bg-sidebar">
      <div id="sidebar" className="sidebar ec-sidebar-footer">
        <div className="ec-brand">
          <a href="#" onClick={(e) => handlePageClick(e, 'dashboard')} title="Proyo">
            <img className="ec-brand-icon" src="/assets/img/logo/ec-site-logo.png" alt="Proyo Logo" style={{ display: 'block', maxWidth: 30, width: '100%', height: 'auto' }} />
            {!isSidebarMinified && <span className="ec-brand-name text-truncate">Proyo</span>}
          </a>
        </div>
        <div className="ec-navigation" data-simplebar>
          <ul className="nav sidebar-inner" id="sidebar-menu">
            {SIDEBAR_MENUS.map((menu, idx) => {
              if (menu.type === 'dashboard' || menu.type === 'reviews' || menu.type === 'brands') {
                return (
                  <React.Fragment key={menu.label}>
                    <li className={isCurrentPage(menu.pageKey) ? 'active' : ''}>
                      <a 
                        className="sidenav-item-link" 
                        href="#"
                        onClick={(e) => handlePageClick(e, menu.pageKey)}
                      >
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
                  <li className={`has-sub${isCurrentMenu(menu.key) ? ' active expand' : ''}`}>
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
                          <li key={item.pageKey} className={isCurrentPage(item.pageKey) ? 'active' : ''}>
                            <a 
                              className="sidenav-item-link" 
                              href="#"
                              onClick={(e) => handlePageClick(e, item.pageKey)}
                            >
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