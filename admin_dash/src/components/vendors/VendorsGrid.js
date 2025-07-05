import React, { useState } from 'react';
import { vendors } from './vendorData';

// Demo user data for Add Vendor modal
const users = [
  { id: 1, name: 'Aaren', img: '/assets/img/user/u1.jpg', status: 'away', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
  { id: 2, name: 'Leon Battista', img: '/assets/img/user/u2.jpg', status: 'active', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
  { id: 3, name: 'Abriel', img: '/assets/img/user/u3.jpg', status: 'away', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
  { id: 4, name: 'Emma', img: '/assets/img/user/u4.jpg', status: 'active', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
  { id: 5, name: 'Emily', img: '/assets/img/user/u5.jpg', status: 'away', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
  { id: 6, name: 'William', img: '/assets/img/user/u6.jpg', status: '', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
  { id: 7, name: 'Sophia', img: '/assets/img/user/u7.jpg', status: 'away', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
  { id: 8, name: 'Sophia', img: '/assets/img/user/u8.jpg', status: '', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
];

const VendorsGrid = () => {
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([1, 2]);

  const openModal = (vendor) => {
    setSelectedVendor(vendor);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  const openAddModal = () => setShowAddModal(true);
  const closeAddModal = () => setShowAddModal(false);

  const handleUserCheck = (id) => {
    setSelectedUsers((prev) => prev.includes(id) ? prev.filter(uid => uid !== id) : [...prev, id]);
  };

  const filteredUsers = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="ec-content-wrapper ec-vendor-wrapper">
      <div className="content">
        <div className="breadcrumb-wrapper breadcrumb-contacts">
          <div>
            <h1>Vendor Card</h1>
            <p className="breadcrumbs">
              <span><a href="/">Home</a></span>
              <span><i className="mdi mdi-chevron-right"></i></span>
              <span>Vendor</span>
            </p>
          </div>
          <div>
            <button type="button" className="btn btn-primary" onClick={openAddModal}>
              Add Vendor
            </button>
          </div>
        </div>
        <div className="card card-default p-4 ec-card-space">
          <div className="ec-vendor-card mt-m-24px row">
            {vendors.map(vendor => (
              <div className="col-lg-6 col-xl-4 col-xxl-3" key={vendor.id}>
                <div className="card card-default mt-24px">
                  <button className="view-detail" onClick={() => openModal(vendor)} style={{background:'none',border:'none',position:'absolute',top:10,right:10}}>
                    <i className="mdi mdi-eye-plus-outline"></i>
                  </button>
                  <div className="vendor-info card-body text-center p-4">
                    <a href="#" className="text-secondary d-inline-block mb-3">
                      <div className="image mb-3">
                        <img src={vendor.img} className="img-fluid rounded-circle" alt="Avatar" />
                      </div>
                      <h5 className="card-title text-dark">{vendor.name}</h5>
                      <ul className="list-unstyled">
                        <li className="d-flex mb-1">
                          <i className="mdi mdi-cellphone-basic mr-1"></i>
                          <span>{vendor.phone}</span>
                        </li>
                        <li className="d-flex">
                          <i className="mdi mdi-email mr-1"></i>
                          <span>{vendor.email}</span>
                        </li>
                      </ul>
                    </a>
                    <div className="row justify-content-center ec-vendor-detail">
                      <div className="col-4">
                        <h6 className="text-uppercase">Items</h6>
                        <h5>{vendor.products}</h5>
                      </div>
                      <div className="col-4">
                        <h6 className="text-uppercase">Sell</h6>
                        <h5>{vendor.totalSell}</h5>
                      </div>
                      <div className="col-4">
                        <h6 className="text-uppercase">Payout</h6>
                        <h5>${vendor.payout}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Add Vendor Modal */}
        {showAddModal && (
          <>
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
            <div 
              className="modal fade show" 
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
              <div className="modal-dialog modal-dialog-centered modal-sm" style={{pointerEvents: 'auto'}} role="document">
                <div className="modal-content">
                  <form className="modal-header border-bottom-0">
                    <input type="text" className="form-control" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
                  </form>
                  <div className="modal-body p-0" style={{height:320, overflowY:'auto'}}>
                    <ul className="list-unstyled border-top mb-0">
                      {filteredUsers.map(user => (
                        <li key={user.id}>
                          <div className="media media-message">
                            <div className="position-relative mr-3">
                              <img className="rounded-circle" src={user.img} alt="Image" />
                              <span className={`status${user.status ? ' ' + user.status : ''}`}></span>
                            </div>
                            <div className="media-body d-flex justify-content-between align-items-center">
                              <div className="message-contents">
                                <h4 className="title">{user.name}</h4>
                                <p className="last-msg">{user.desc}</p>
                              </div>
                              <div className="control outlined control-checkbox checkbox-primary">
                                <input type="checkbox" checked={selectedUsers.includes(user.id)} onChange={() => handleUserCheck(user.id)} />
                                <div className="control-indicator"></div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="modal-footer px-4">
                    <button type="button" className="btn btn-secondary" onClick={closeAddModal}>Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={closeAddModal}>Add new member</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Vendor Details Modal */}
        {showModal && selectedVendor && (
          <>
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
              onClick={closeModal}
            ></div>
            <div 
              className="modal fade show" 
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
                  <div className="modal-header">
                    <h5 className="modal-title">Vendor Details</h5>
                    <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-4 text-center">
                        <img 
                          src={selectedVendor.img} 
                          className="img-fluid rounded-circle mb-3" 
                          alt="Vendor" 
                          style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                        />
                        <h4>{selectedVendor.name}</h4>
                        <p className="text-muted">{selectedVendor.email}</p>
                      </div>
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-6 mb-3">
                            <strong>Phone:</strong> {selectedVendor.phone}
                          </div>
                          <div className="col-6 mb-3">
                            <strong>Products:</strong> {selectedVendor.products}
                          </div>
                          <div className="col-6 mb-3">
                            <strong>Total Sell:</strong> ${selectedVendor.totalSell}
                          </div>
                          <div className="col-6 mb-3">
                            <strong>Payout:</strong> ${selectedVendor.payout}
                          </div>
                          <div className="col-6 mb-3">
                            <strong>Status:</strong> 
                            <span className={`badge ${selectedVendor.status === 'ACTIVE' ? 'bg-success' : 'bg-warning'} ms-2`}>
                              {selectedVendor.status}
                            </span>
                          </div>
                          <div className="col-6 mb-3">
                            <strong>Join Date:</strong> {selectedVendor.joinDate}
                          </div>
                        </div>
                        {selectedVendor.bio && (
                          <div className="mt-3">
                            <strong>Bio:</strong>
                            <p className="mt-2">{selectedVendor.bio}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                    <button type="button" className="btn btn-primary">Edit Vendor</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VendorsGrid; 