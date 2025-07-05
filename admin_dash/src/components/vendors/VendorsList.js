import React, { useState, useEffect } from 'react';
// import './VendorsList.css';

// Vendor data for the list
const vendors = [
  { id: 1, name: 'Marlee Rena', email: 'marleerena@gmail.com', img: 'assets/img/vendor/u1.jpg', products: 28, totalSell: 2161, status: 'ACTIVE', joinDate: '2021-10-30' },
  { id: 2, name: 'Johnee Bolbi', email: 'johneebolbi@gmail.com', img: 'assets/img/vendor/u2.jpg', products: 68, totalSell: 5161, status: 'ACTIVE', joinDate: '2021-10-25' },
  { id: 3, name: 'Johnee Bolbi', email: 'johneebolbi@gmail.com', img: 'assets/img/vendor/u3.jpg', products: 68, totalSell: 5161, status: 'ACTIVE', joinDate: '2021-10-25' },
  { id: 4, name: 'Mohini Marlo', email: 'mohinimarlo@gmail.com', img: 'assets/img/vendor/u4.jpg', products: 38, totalSell: 1561, status: 'ACTIVE', joinDate: '2021-10-21' },
  { id: 5, name: 'Nitilo Kathilo', email: 'nitilokathilo@gmail.com', img: 'assets/img/vendor/u5.jpg', products: 18, totalSell: 1061, status: 'ACTIVE', joinDate: '2021-10-18' },
  { id: 6, name: 'Hardi Sandhu', email: 'hardisandhu@gmail.com', img: 'assets/img/vendor/u6.jpg', products: 82, totalSell: 10061, status: 'ACTIVE', joinDate: '2021-10-14' },
  { id: 7, name: 'Bhavlo Malvia', email: 'bhavlomalvia@gmail.com', img: 'assets/img/vendor/u7.jpg', products: 18, totalSell: 3061, status: 'ACTIVE', joinDate: '2021-10-05' },
  { id: 8, name: 'Jeni Dusuja', email: 'jenidusuja@gmail.com', img: 'assets/img/vendor/u8.jpg', products: 60, totalSell: 6061, status: 'ACTIVE', joinDate: '2021-10-01' },
  { id: 9, name: 'Marlee Rena', email: 'marleerena@gmail.com', img: 'assets/img/vendor/u1.jpg', products: 28, totalSell: 2161, status: 'ACTIVE', joinDate: '2021-10-30' },
  { id: 10, name: 'Johnee Bolbi', email: 'johneebolbi@gmail.com', img: 'assets/img/vendor/u2.jpg', products: 68, totalSell: 5161, status: 'ACTIVE', joinDate: '2021-10-25' },
  { id: 11, name: 'Johnee Bolbi', email: 'johneebolbi@gmail.com', img: 'assets/img/vendor/u3.jpg', products: 68, totalSell: 5161, status: 'ACTIVE', joinDate: '2021-10-25' },
  { id: 12, name: 'Mohini Marlo', email: 'mohinimarlo@gmail.com', img: 'assets/img/vendor/u4.jpg', products: 38, totalSell: 1561, status: 'ACTIVE', joinDate: '2021-10-21' },
  { id: 13, name: 'Nitilo Kathilo', email: 'nitilokathilo@gmail.com', img: 'assets/img/vendor/u5.jpg', products: 18, totalSell: 1061, status: 'ACTIVE', joinDate: '2021-10-18' },
  { id: 14, name: 'Hardi Sandhu', email: 'hardisandhu@gmail.com', img: 'assets/img/vendor/u6.jpg', products: 82, totalSell: 10061, status: 'ACTIVE', joinDate: '2021-10-14' },
];

const VendorsList = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const openAddModal = () => setShowAddModal(true);
  const closeAddModal = () => setShowAddModal(false);

  // Initialize DataTable
  useEffect(() => {
    const initDataTable = () => {
      if (window.$ && window.$.fn.DataTable) {
        // Destroy if already exists
        if (window.$.fn.DataTable.isDataTable('#responsive-data-table')) {
          window.$('#responsive-data-table').DataTable().destroy();
        }
        // Initialize with template DOM (no buttons)
        const table = window.$('#responsive-data-table').DataTable({
          "aLengthMenu": [[20, 30, 50, 75, -1], [20, 30, 50, 75, "All"]],
          "pageLength": 20,
          "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">',
          responsive: true,
          language: {
            search: "",
            searchPlaceholder: "Search..."
          }
        });
        return table;
      }
      return null;
    };
    const timer = setTimeout(() => {
      const table = initDataTable();
      return () => {
        if (table) {
          table.destroy();
        }
      };
    }, 500);
    return () => {
      clearTimeout(timer);
      if (window.$ && window.$.fn.DataTable && window.$.fn.DataTable.isDataTable('#responsive-data-table')) {
        window.$('#responsive-data-table').DataTable().destroy();
      }
    };
  }, []);

  return (
    <div className="ec-content-wrapper">
      <div className="content">
        <div className="breadcrumb-wrapper breadcrumb-contacts">
          <div>
            <h1>Vendor List</h1>
            <p className="breadcrumbs">
              <span><a href="/">Home</a></span>
              <span><i className="mdi mdi-chevron-right"></i></span>Vendor
            </p>
          </div>
          <div>
            <button type="button" className="btn btn-primary" onClick={openAddModal}>
              Add Vendor
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="ec-vendor-list card card-default">
              <div className="card-body">
                <div className="table-responsive">
                  <table id="responsive-data-table" className="table">
                    <thead>
                      <tr>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product</th>
                        <th>Total Sell</th>
                        <th>Status</th>
                        <th>Join On</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vendors.map(vendor => (
                        <tr key={vendor.id}>
                          <td>
                            <img className="vendor-thumb" src={vendor.img} alt="vendor image" />
                          </td>
                          <td>{vendor.name}</td>
                          <td>{vendor.email}</td>
                          <td>{vendor.products}</td>
                          <td>{vendor.totalSell}</td>
                          <td>{vendor.status}</td>
                          <td>{vendor.joinDate}</td>
                          <td>
                            <div className="btn-group">
                              <button type="button" className="btn btn-outline-success">
                                Info
                              </button>
                              <button 
                                type="button" 
                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown" 
                                aria-haspopup="true"
                                aria-expanded="false" 
                                data-display="static"
                              >
                                <span className="sr-only">Info</span>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Edit</a>
                                <a className="dropdown-item" href="#">Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Vendor Modal */}
        {showAddModal && (
          <>
            {/* Modal backdrop - positioned fixed to cover only background */}
            <div 
              className="modal-backdrop fade show" 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1040
              }}
              onClick={closeAddModal}
            ></div>
            {/* Modal content - positioned above backdrop */}
            <div 
              className="modal fade show modal-add-contact" 
              style={{
                display: 'block',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 1050,
                pointerEvents: 'none'
              }}
              tabIndex="-1" 
              role="dialog" 
              aria-modal="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg" style={{pointerEvents: 'auto'}} role="document">
                <div className="modal-content">
                  <form>
                    <div className="modal-header px-4">
                      <h5 className="modal-title">Add New Vendor</h5>
                      <button type="button" className="btn-close" onClick={closeAddModal} aria-label="Close"></button>
                    </div>
                    
                    <div className="modal-body px-4">
                      <div className="form-group row mb-6">
                        <label htmlFor="coverImage" className="col-sm-4 col-lg-2 col-form-label">Vendor Image</label>
                        
                        <div className="col-sm-8 col-lg-10">
                          <div className="custom-file mb-1">
                            <input type="file" className="custom-file-input" id="coverImage" required />
                            <label className="custom-file-label" htmlFor="coverImage">Choose file...</label>
                            <div className="invalid-feedback">Example invalid custom file feedback</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="row mb-2">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="form-control" id="firstName" defaultValue="John" />
                          </div>
                        </div>
                        
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" className="form-control" id="lastName" defaultValue="Deo" />
                          </div>
                        </div>
                        
                        <div className="col-lg-6">
                          <div className="form-group mb-4">
                            <label htmlFor="userName">User name</label>
                            <input type="text" className="form-control" id="userName" defaultValue="johndoe" />
                          </div>
                        </div>
                        
                        <div className="col-lg-6">
                          <div className="form-group mb-4">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" defaultValue="johnexample@gmail.com" />
                          </div>
                        </div>
                        
                        <div className="col-lg-6">
                          <div className="form-group mb-4">
                            <label htmlFor="Birthday">Birthday</label>
                            <input type="text" className="form-control" id="Birthday" defaultValue="10-12-1991" />
                          </div>
                        </div>
                        
                        <div className="col-lg-6">
                          <div className="form-group mb-4">
                            <label htmlFor="event">Address</label>
                            <input type="text" className="form-control" id="event" defaultValue="Address here" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="modal-footer px-4">
                      <button type="button" className="btn btn-secondary btn-pill" onClick={closeAddModal}>Cancel</button>
                      <button type="button" className="btn btn-primary btn-pill" onClick={closeAddModal}>Save Contact</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VendorsList; 