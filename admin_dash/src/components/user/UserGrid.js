import React, { useState } from 'react';
import { users } from './userData';

// Add modal styles
const modalStyles = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1050
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '8px',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '80vh',
    overflow: 'auto'
  }
};

// Add card styles
const cardStyles = {
  userCard: {
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    cursor: 'pointer'
  },
  userCardHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  userImage: {
    width: '70px',
    height: '70px',
    borderRadius: '15px',
    objectFit: 'cover'
  }
};

const UserGrid = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <div className="breadcrumb-wrapper breadcrumb-contacts">
        <div>
          <h1>User Grid</h1>
          <p className="breadcrumbs">
            <span><a href="/">Home</a></span>
            <span><i className="mdi mdi-chevron-right"></i></span>
            <span>Users</span>
          </p>
        </div>
        <div>
          <button type="button" className="btn btn-primary">
            View All
          </button>
        </div>
      </div>

      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-lg-6 col-xl-4 mb-24px">
            <div 
              className="ec-user-card card card-default p-4 position-relative"
              style={{
                ...cardStyles.userCard,
                ...(hoveredCard === user.id ? cardStyles.userCardHover : {})
              }}
              onMouseEnter={() => setHoveredCard(user.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <a 
                href="#" 
                className="view-detail position-absolute"
                style={{ right: 16, top: 16, zIndex: 2 }}
                onClick={e => { e.preventDefault(); handleUserClick(user); }}
              >
                <i className="mdi mdi-eye-plus-outline text-secondary" style={{ fontSize: 22 }}></i>
              </a>
              <a href="#" className="media text-secondary" style={{ pointerEvents: 'none' }}>
                <img 
                  src={user.img} 
                  className="mr-3 img-fluid" 
                  alt="Avatar Image" 
                  style={cardStyles.userImage}
                />
                <div className="media-body">
                  <h5 className="mt-0 mb-2 text-dark">{user.name}</h5>
                  <ul className="list-unstyled">
                    <li className="d-flex mb-1">
                      <i className="mdi mdi-email mr-1"></i>
                      <span>{user.email}</span>
                    </li>
                    <li className="d-flex mb-1">
                      <i className="mdi mdi-phone mr-1"></i>
                      <span>{user.phone}</span>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* User Detail Modal */}
      {showModal && selectedUser && (
        <div style={modalStyles.modal} onClick={closeModal}>
          <div style={{ ...modalStyles.modalContent, maxWidth: '800px', padding: 0 }} onClick={e => e.stopPropagation()}>
            <div className="modal-header justify-content-end border-bottom-0" style={{ borderBottom: 'none' }}>
              <button type="button" className="btn-edit-icon btn" style={{ background: 'none', border: 'none' }}>
                <i className="mdi mdi-pencil"></i>
              </button>
              <div className="dropdown">
                <button className="btn-dots-icon btn" type="button" style={{ background: 'none', border: 'none' }}>
                  <i className="mdi mdi-dots-vertical"></i>
                </button>
                {/* Dropdown menu placeholder */}
              </div>
              <button type="button" className="btn-close-icon btn" style={{ background: 'none', border: 'none' }} onClick={closeModal}>
                <i className="mdi mdi-close"></i>
              </button>
            </div>
            <div className="modal-body pt-0">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="profile-content-left px-4">
                    <div className="text-center widget-profile px-0 border-0">
                      <div className="card-img mx-auto rounded-circle" style={{ width: 150, height: 150, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {selectedUser.img ? (
                          <img src={selectedUser.img} alt="user image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                        ) : (
                          <span style={{ color: '#bbb' }}>640 X 640</span>
                        )}
                      </div>
                      <div className="card-body">
                        <h4 className="py-2 text-dark">{selectedUser.name}</h4>
                        <p>{selectedUser.email}</p>
                        <button className="btn btn-primary btn-pill my-4">Follow</button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between ">
                      <div className="text-center pb-4">
                        <h6 className="text-dark pb-2">{selectedUser.totalBuy || 0}</h6>
                        <p>Bought</p>
                      </div>
                      <div className="text-center pb-4">
                        <h6 className="text-dark pb-2">{selectedUser.wishList || 0}</h6>
                        <p>Wish List</p>
                      </div>
                      <div className="text-center pb-4">
                        <h6 className="text-dark pb-2">{selectedUser.following || 0}</h6>
                        <p>Following</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-info px-4">
                    <h4 className="text-dark mb-1">Contact Details</h4>
                    <p className="text-dark font-weight-medium pt-4 mb-2">Email address</p>
                    <p>{selectedUser.email}</p>
                    <p className="text-dark font-weight-medium pt-4 mb-2">Phone Number</p>
                    <p>{selectedUser.phone}</p>
                    <p className="text-dark font-weight-medium pt-4 mb-2">Birthday</p>
                    <p>{selectedUser.birthday || '-'}</p>
                    <p className="text-dark font-weight-medium pt-4 mb-2">Address</p>
                    <p>{selectedUser.address || '-'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserGrid; 