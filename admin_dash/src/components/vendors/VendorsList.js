import React, { useState } from 'react';
import { vendors, searchVendors } from './vendorData';

const initialForm = {
  vendorImage: null,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  bio: ''
};

const VendorsList = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVendors, setFilteredVendors] = useState(vendors);
  const [form, setForm] = useState(initialForm);
  const [fileName, setFileName] = useState('');
  const [entries, setEntries] = useState(10);
  const [page, setPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const totalPages = Math.ceil(filteredVendors.length / entries);
  const startIdx = (page - 1) * entries;
  const endIdx = Math.min(startIdx + entries, filteredVendors.length);
  const paginatedVendors = [...filteredVendors]
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
    const filtered = searchVendors(term);
    setFilteredVendors(filtered);
    setPage(1);
  };

  const handleEdit = (vendorId) => {
    console.log('Edit vendor:', vendorId);
  };

  const handleDelete = (vendorId) => {
    console.log('Delete vendor:', vendorId);
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'vendorImage') {
      setForm({ ...form, vendorImage: files[0] });
      setFileName(files[0] ? files[0].name : '');
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleAddVendor = (e) => {
    e.preventDefault();
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
    <div className="ec-content-wrapper">
      <div className="content">
        <div className="breadcrumb-wrapper breadcrumb-contacts">
          <div>
            <h1>Vendor List</h1>
            <p className="breadcrumbs">
              <span><a href="/">Home</a></span>
              <span><i className="mdi mdi-chevron-right"></i></span>
              <span>Vendors</span>
            </p>
          </div>
          <div>
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={() => setShowAddModal(true)}
            >
              Add Vendor
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="ec-vendor-list card card-default">
              <div className="card-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <label className="me-2 mb-0">Show</label>
                  <select
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
                  <label className="me-2 mb-0">Search:</label>
                  <input
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
                        {['Profile', 'Name', 'Email', 'Phone', 'Products', 'Total Sales', 'Payout', 'Status', 'Join Date', 'Action'].map((col, idx) => (
                          <th
                            key={col}
                            onClick={() => handleSort(
                              col === 'Profile' ? 'img' :
                              col === 'Name' ? 'name' :
                              col === 'Email' ? 'email' :
                              col === 'Phone' ? 'phone' :
                              col === 'Products' ? 'products' :
                              col === 'Total Sales' ? 'totalSell' :
                              col === 'Payout' ? 'payout' :
                              col === 'Status' ? 'status' :
                              col === 'Join Date' ? 'joinDate' :
                              col === 'Action' ? 'action' : ''
                            )}
                            style={{ 
                              cursor: 'pointer', 
                              userSelect: 'none',
                              minWidth: col === 'Total Sales' ? '120px' : col === 'Join Date' ? '100px' : 'auto',
                              paddingLeft: col === 'Total Sales' || col === 'Join Date' ? '15px' : 'auto',
                              paddingRight: col === 'Total Sales' || col === 'Join Date' ? '15px' : 'auto'
                            }}
                          >
                            {col}
                            <span style={{ marginLeft: 4, fontSize: 12, color: '#bbb' }}>
                              <span style={{ color: sortConfig.key === (
                                col === 'Profile' ? 'img' :
                                col === 'Name' ? 'name' :
                                col === 'Email' ? 'email' :
                                col === 'Phone' ? 'phone' :
                                col === 'Products' ? 'products' :
                                col === 'Total Sales' ? 'totalSell' :
                                col === 'Payout' ? 'payout' :
                                col === 'Status' ? 'status' :
                                col === 'Join Date' ? 'joinDate' :
                                col === 'Action' ? 'action' : ''
                              ) && sortConfig.direction === 'asc' ? '#88aaf3' : '#bbb' }}>↑</span>
                              <span style={{ color: sortConfig.key === (
                                col === 'Profile' ? 'img' :
                                col === 'Name' ? 'name' :
                                col === 'Email' ? 'email' :
                                col === 'Phone' ? 'phone' :
                                col === 'Products' ? 'products' :
                                col === 'Total Sales' ? 'totalSell' :
                                col === 'Payout' ? 'payout' :
                                col === 'Status' ? 'status' :
                                col === 'Join Date' ? 'joinDate' :
                                col === 'Action' ? 'action' : ''
                              ) && sortConfig.direction === 'desc' ? '#88aaf3' : '#bbb' }}>↓</span>
                            </span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedVendors.map((vendor) => (
                        <tr key={vendor.id}>
                          <td>
                            <img 
                              className="vendor-thumb" 
                              src={vendor.img} 
                              alt="vendor profile" 
                              style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                            />
                          </td>
                          <td>{vendor.name}</td>
                          <td>{vendor.email}</td>
                          <td>{vendor.phone}</td>
                          <td>{vendor.products}</td>
                          <td style={{ minWidth: '120px', paddingLeft: '15px', paddingRight: '15px' }}>${vendor.totalSell}</td>
                          <td>${vendor.payout}</td>
                          <td>{vendor.status}</td>
                          <td style={{ minWidth: '100px', paddingLeft: '15px', paddingRight: '15px' }}>{vendor.joinDate}</td>
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
                                  onClick={() => handleEdit(vendor.id)}
                                >
                                  Edit
                                </a>
                                <a 
                                  className="dropdown-item" 
                                  href="javascript:0"
                                  onClick={() => handleDelete(vendor.id)}
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
                  {`Showing ${startIdx + 1} to ${endIdx} of ${filteredVendors.length} entries`}
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

        {/* Add Vendor Modal */}
        {showAddModal && (
          <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={() => setShowAddModal(false)}>
            <div className="modal-dialog modal-dialog-centered modal-lg" onClick={e => e.stopPropagation()}>
              <div className="modal-content">
                <form onSubmit={handleAddVendor}>
                  <div className="modal-header">
                    <h5 className="modal-title">Add New Vendor</h5>
                    <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group row mb-4">
                      <label htmlFor="vendorImage" className="col-sm-4 col-lg-2 col-form-label">Vendor Image</label>
                      <div className="col-sm-8 col-lg-10">
                        <div className="custom-file mb-1">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="vendorImage"
                            name="vendorImage"
                            onChange={handleFormChange}
                          />
                          <label className="custom-file-label" htmlFor="vendorImage">
                            {fileName || 'Choose file...'}
                          </label>
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
                          <label htmlFor="phone">Phone</label>
                          <input 
                            type="tel" 
                            className="form-control" 
                            id="phone" 
                            name="phone"
                            value={form.phone}
                            onChange={handleFormChange}
                            required
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
                      <div className="col-lg-6">
                        <div className="form-group mb-4">
                          <label htmlFor="bio">Bio</label>
                          <textarea 
                            className="form-control" 
                            id="bio" 
                            name="bio"
                            value={form.bio}
                            onChange={handleFormChange}
                            rows="3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button 
                      type="button" 
                      className="btn btn-secondary" 
                      onClick={() => setShowAddModal(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">Save Vendor</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorsList; 