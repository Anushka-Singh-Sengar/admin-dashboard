import React, { useState } from 'react';
import { users, searchUsers } from './userData';

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
    borderRadius: '24px',
    maxWidth: '700px',
    width: '95%',
    maxHeight: '90vh',
    overflow: 'auto',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
  }
};

const initialForm = {
  userImage: null,
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  birthday: '',
  address: ''
};

const UserList = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [form, setForm] = useState(initialForm);
  const [fileName, setFileName] = useState('');
  const [entries, setEntries] = useState(10);
  const [page, setPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const totalPages = Math.ceil(filteredUsers.length / entries);
  const startIdx = (page - 1) * entries;
  const endIdx = Math.min(startIdx + entries, filteredUsers.length);
  const paginatedUsers = [...filteredUsers]
    .sort((a, b) => {
      if (!sortConfig.key) return 0;
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    })
    .slice(startIdx, endIdx);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = searchUsers(term);
    setFilteredUsers(filtered);
  };

  const handleEdit = (userId) => {
    console.log('Edit user:', userId);
    // Add edit functionality here
  };

  const handleDelete = (userId) => {
    console.log('Delete user:', userId);
    // Add delete functionality here
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'userImage') {
      setForm({ ...form, userImage: files[0] });
      setFileName(files[0] ? files[0].name : '');
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    // Add user logic here (e.g., update state or send to backend)
    setShowAddModal(false);
    setForm(initialForm);
  };

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  return (
    <div>
      <div className="breadcrumb-wrapper breadcrumb-contacts">
        <div>
          <h1>User List</h1>
          <p className="breadcrumbs">
            <span><a href="/">Home</a></span>
            <span><i className="mdi mdi-chevron-right"></i></span>
            <span>Users</span>
          </p>
        </div>
        <div>
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={() => setShowAddModal(true)}
          >
            Add User
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="ec-vendor-list card card-default">
            <div className="card-header d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <label className="me-2 mb-0" htmlFor="entriesSelect">Show</label>
                <select
                  id="entriesSelect"
                  className="form-select w-auto"
                  value={entries}
                  onChange={e => { setEntries(Number(e.target.value)); setPage(1); }}
                  style={{ minWidth: 70, marginRight: 8 }}
                >
                  {[10, 20, 50, 100].map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <span className="mb-0">Entries</span>
              </div>
              <div className="d-flex align-items-center">
                <label className="me-2 mb-0" htmlFor="userTableSearch">Search:</label>
                <input
                  id="userTableSearch"
                  type="text"
                  className="form-control w-auto"
                  placeholder=""
                  value={searchTerm}
                  onChange={handleSearch}
                  style={{ minWidth: 180 }}
                />
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      {['Profile', 'Name', 'Email', 'Phone', 'Total Buy', 'Status', 'Join On', 'Action'].map((col, idx) => (
                        <th
                          key={col}
                          onClick={() => handleSort(
                            col === 'Profile' ? 'imgThumb' :
                            col === 'Name' ? 'name' :
                            col === 'Email' ? 'email' :
                            col === 'Phone' ? 'phone' :
                            col === 'Total Buy' ? 'totalBuy' :
                            col === 'Status' ? 'status' :
                            col === 'Join On' ? 'joinDate' :
                            col === 'Action' ? 'action' : ''
                          )}
                          style={{ cursor: 'pointer', userSelect: 'none' }}
                        >
                          {col}
                          <span style={{ marginLeft: 4, fontSize: 12, color: '#bbb' }}>
                            <span style={{ color: sortConfig.key === (
                              col === 'Profile' ? 'imgThumb' :
                              col === 'Name' ? 'name' :
                              col === 'Email' ? 'email' :
                              col === 'Phone' ? 'phone' :
                              col === 'Total Buy' ? 'totalBuy' :
                              col === 'Status' ? 'status' :
                              col === 'Join On' ? 'joinDate' :
                              col === 'Action' ? 'action' : ''
                            ) && sortConfig.direction === 'asc' ? '#88aaf3' : '#bbb' }}>↑</span>
                            <span style={{ color: sortConfig.key === (
                              col === 'Profile' ? 'imgThumb' :
                              col === 'Name' ? 'name' :
                              col === 'Email' ? 'email' :
                              col === 'Phone' ? 'phone' :
                              col === 'Total Buy' ? 'totalBuy' :
                              col === 'Status' ? 'status' :
                              col === 'Join On' ? 'joinDate' :
                              col === 'Action' ? 'action' : ''
                            ) && sortConfig.direction === 'desc' ? '#88aaf3' : '#bbb' }}>↓</span>
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedUsers.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <img 
                            className="vendor-thumb" 
                            src={user.imgThumb} 
                            alt="user profile" 
                          />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>${user.totalBuy}</td>
                        <td>{user.status}</td>
                        <td>{user.joinDate}</td>
                        <td>
                          <div className="btn-group mb-1">
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
                              <a 
                                className="dropdown-item" 
                                href="javascript:0"
                                onClick={() => handleEdit(user.id)}
                              >
                                Edit
                              </a>
                              <a 
                                className="dropdown-item" 
                                href="javascript:0"
                                onClick={() => handleDelete(user.id)}
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center bg-white" style={{ borderTop: '1px solid #eee' }}>
              <div className="text-muted small ms-2">
                {`Showing ${startIdx + 1} to ${endIdx} of ${filteredUsers.length} entries`}
              </div>
              <nav>
                <ul className="pagination mb-0">
                  <li className={`page-item${page === 1 ? ' disabled' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(page - 1)}>Previous</button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).slice(Math.max(0, page - 3), Math.min(totalPages, page + 2)).map(p => (
                    <li key={p} className={`page-item${p === page ? ' active' : ''}`}>
                      <button className="page-link" onClick={() => handlePageChange(p)}>{p}</button>
                    </li>
                  ))}
                  <li className={`page-item${page === totalPages ? ' disabled' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(page + 1)}>Next</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Add User Modal - Ekka Style */}
      {showAddModal && (
        <div style={modalStyles.modal} onClick={() => setShowAddModal(false)}>
          <div style={modalStyles.modalContent} onClick={e => e.stopPropagation()}>
            <form onSubmit={handleAddUser}>
              <div className="modal-header px-4" style={{ border: 'none', paddingBottom: 0, display: 'block' }}>
                <h5 className="modal-title text-secondary" style={{ fontWeight: 500, fontSize: 24, marginBottom: 0 }}>Add New User</h5>
                <div style={{ borderBottom: '1px solid #e5e5e5', marginTop: 12 }} />
              </div>
              <div className="modal-body px-4">
                <div className="form-group row mb-4">
                  <label htmlFor="userImage" className="col-sm-4 col-lg-2 col-form-label">User Image</label>
                  <div className="col-sm-8 col-lg-10">
                    <div className="custom-file mb-1" style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type="file"
                        className="custom-file-input"
                        id="userImage"
                        name="userImage"
                        style={{ display: 'none' }}
                        onChange={handleFormChange}
                      />
                      <input
                        type="text"
                        className="form-control"
                        value={fileName || 'Choose File...'}
                        readOnly
                        style={{ background: '#fff', borderTopRightRadius: 0, borderBottomRightRadius: 0, cursor: 'pointer' }}
                        onClick={() => document.getElementById('userImage').click()}
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, minWidth: 100 }}
                        onClick={() => document.getElementById('userImage').click()}
                      >
                        Browse
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="firstName" 
                        name="firstName"
                        value={form.firstName}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="lastName" 
                        name="lastName"
                        value={form.lastName}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-4">
                      <label htmlFor="userName">User Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="userName" 
                        name="userName"
                        value={form.userName}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-4">
                      <label htmlFor="email">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        value={form.email}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-4">
                      <label htmlFor="birthday">Birthday</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="birthday" 
                        name="birthday"
                        value={form.birthday}
                        onChange={handleFormChange}
                        placeholder="DD-MM-YYYY"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-4">
                      <label htmlFor="address">Address</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="address" 
                        name="address"
                        value={form.address}
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer px-4" style={{ border: 'none', paddingTop: 0 }}>
                <button 
                  type="button" 
                  className="btn btn-secondary btn-pill" 
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary btn-pill">Save Contact</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList; 