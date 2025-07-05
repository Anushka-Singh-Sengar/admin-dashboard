import React, { useState } from 'react';

// Full vendor data from template
const vendors = [
  { id: 1, name: 'Emma Smith', phone: '+91 963-852-7410', email: 'exmaple@email.com', img: 'assets/img/vendor/u1.jpg', items: 180, sell: 1908, payout: 2691 },
  { id: 2, name: 'Bobly Smith', phone: '+91 863-852-7654', email: 'exmaple@email.com', img: 'assets/img/vendor/u2.jpg', items: 65, sell: 548, payout: 254 },
  { id: 3, name: 'Robin Hood', phone: '+91 889-852-7466', email: 'exmaple@email.com', img: 'assets/img/vendor/u3.jpg', items: 654, sell: 548, payout: 654 },
  { id: 4, name: 'devin chingol', phone: '+91 789-852-7865', email: 'exmaple@email.com', img: 'assets/img/vendor/u4.jpg', items: 977, sell: 987, payout: 654 },
  { id: 5, name: 'Nitilo Smith', phone: '+91 658-852-7410', email: 'exmaple@email.com', img: 'assets/img/vendor/u5.jpg', items: 654, sell: 159, payout: 951 },
  { id: 6, name: 'Mehulo Kathia', phone: '+91 698-852-7410', email: 'exmaple@email.com', img: 'assets/img/vendor/u6.jpg', items: 658, sell: 854, payout: 634 },
  { id: 7, name: 'Bridg Stone', phone: '+91 333-852-7410', email: 'exmaple@email.com', img: 'assets/img/vendor/u7.jpg', items: 652, sell: 125, payout: 475 },
  { id: 8, name: 'pintu Trainee', phone: '+91 698-866-7410', email: 'exmaple@email.com', img: 'assets/img/vendor/u8.jpg', items: 658, sell: 457, payout: 874 },
  { id: 9, name: 'DL Kapdia', phone: '+91 332-852-3215', email: 'exmaple@email.com', img: 'assets/img/vendor/u9.jpg', items: 180, sell: 1908, payout: 2691 },
  { id: 10, name: 'Manu Semli', phone: '+91 654-852-7744', email: 'exmaple@email.com', img: 'assets/img/vendor/u10.jpg', items: 252, sell: 542, payout: 854 },
  { id: 11, name: 'Niki Smith', phone: '+91 45+6-852-5522', email: 'exmaple@email.com', img: 'assets/img/vendor/u11.jpg', items: 425, sell: 352, payout: 421 },
  { id: 12, name: 'Jullie Bronzna', phone: '+91 325-852-6543', email: 'exmaple@email.com', img: 'assets/img/vendor/u12.jpg', items: 254, sell: 574, payout: 325 },
];

// Demo user data for Add Vendor modal
const users = [
  { id: 1, name: 'Aaren', img: 'assets/img/user/u1.jpg', status: 'away', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
  { id: 2, name: 'Leon Battista', img: 'assets/img/user/u2.jpg', status: 'active', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
  { id: 3, name: 'Abriel', img: 'assets/img/user/u3.jpg', status: 'away', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
  { id: 4, name: 'Emma', img: 'assets/img/user/u4.jpg', status: 'active', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
  { id: 5, name: 'Emily', img: 'assets/img/user/u5.jpg', status: 'away', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
  { id: 6, name: 'William', img: 'assets/img/user/u6.jpg', status: '', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
  { id: 7, name: 'Sophia', img: 'assets/img/user/u7.jpg', status: 'away', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
  { id: 8, name: 'Sophia', img: 'assets/img/user/u8.jpg', status: '', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.' },
];

const VendorsGrid = () => {
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([1, 2]); // demo: first two checked

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
        <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
          <div>
            <h1>Vendor Card</h1>
            <p className="breadcrumbs"><span><a href="/">Home</a></span><span><i className="mdi mdi-chevron-right"></i></span> Vendor</p>
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
                        <h5>{vendor.items}</h5>
                      </div>
                      <div className="col-4">
                        <h6 className="text-uppercase">Sell</h6>
                        <h5>{vendor.sell}</h5>
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
                    <button type="button" className="btn btn-secondary btn-pill" onClick={closeAddModal}>Cancel</button>
                    <button type="button" className="btn btn-primary btn-pill" onClick={closeAddModal}>Add new member</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Vendor Details Modal */}
        {showModal && selectedVendor && (
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
              onClick={closeModal}
            ></div>
            {/* Modal content - positioned above backdrop */}
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
                  <div className="modal-header justify-content-end border-bottom-0">
                    <button type="button" className="btn-edit-icon" onClick={closeModal} aria-label="Close">
                      <i className="mdi mdi-pencil"></i>
                    </button>
                    <div className="dropdown">
                      <button className="btn-dots-icon" type="button">
                        <i className="mdi mdi-dots-vertical"></i>
                      </button>
                    </div>
                    <button type="button" className="btn-close-icon" onClick={closeModal} aria-label="Close">
                      <i className="mdi mdi-close"></i>
                    </button>
                  </div>
                  <div className="modal-body pt-0">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <div className="profile-content-left px-4">
                          <div className="text-center widget-profile px-0 border-0">
                            <div className="card-img mx-auto rounded-circle">
                              <img src={selectedVendor.img} alt="user image" />
                            </div>
                            <div className="card-body">
                              <h4 className="py-2 text-dark">{selectedVendor.name}</h4>
                              <p>{selectedVendor.email}</p>
                              <a className="btn btn-primary btn-pill my-3" href="#">Follow</a>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between ">
                            <div className="text-center pb-4">
                              <h6 className="text-dark pb-2">{selectedVendor.items}</h6>
                              <p>Items</p>
                            </div>
                            <div className="text-center pb-4">
                              <h6 className="text-dark pb-2">{selectedVendor.sell}</h6>
                              <p>Sell</p>
                            </div>
                            <div className="text-center pb-4">
                              <h6 className="text-dark pb-2">{selectedVendor.payout}</h6>
                              <p>Payout</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-info px-4">
                          <h4 className="text-dark mb-1">Contact Details</h4>
                          <p className="text-dark font-weight-medium pt-3 mb-2">Email address</p>
                          <p>{selectedVendor.email}</p>
                          <p className="text-dark font-weight-medium pt-3 mb-2">Phone Number</p>
                          <p>{selectedVendor.phone}</p>
                          <p className="text-dark font-weight-medium pt-3 mb-2">Birthday</p>
                          <p>Dec 10, 1991</p>
                          <p className="text-dark font-weight-medium pt-3 mb-2">Event</p>
                          <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                      </div>
                    </div>
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