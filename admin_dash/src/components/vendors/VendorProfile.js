import React, { useState } from 'react';

const initialProfile = {
  firstName: 'John',
  lastName: 'deo',
  userName: 'johndoe',
  email: 'john.example@gmail.com',
  phone: '+00 1234 5678 91',
  birthday: 'Dec 10, 1991',
  image: '/assets/img/user/u6.jpg',
};

const VendorProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedDateRange, setSelectedDateRange] = useState('Last 7 Days');
  const [form, setForm] = useState({
    firstName: 'First name',
    lastName: 'Last name',
    userName: 'User name',
    email: 'ekka.example@gmail.com',
    oldPassword: '',
    newPassword: '',
    conPassword: '',
    image: '',
  });
  const [formMsg, setFormMsg] = useState('');

  const handleTab = (tab) => setActiveTab(tab);

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate update
    setFormMsg('Profile updated!');
    setTimeout(() => setFormMsg(''), 2000);
  };

  const handleDateRangeChange = (e) => {
    setSelectedDateRange(e.target.value);
  };

  return (
    <div className="ec-content-wrapper">
      <div className="content">
        <div className="breadcrumb-wrapper breadcrumb-contacts">
          <div>
            <h1>Vendor Profile</h1>
            <p className="breadcrumbs">
              <span><a href="/">Home</a></span>
              <span><i className="mdi mdi-chevron-right"></i></span>Profile
            </p>
          </div>
          <div>
            <a href="/vendors/list" className="btn btn-primary">Edit</a>
          </div>
        </div>
        <div className="card bg-white profile-content ec-vendor-profile">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4 col-xl-3">
              <div className="profile-content-left profile-left-spacing">
                <div className="ec-disp">
                  <div className="text-center widget-profile px-0 border-0">
                    <div className="card-img mx-auto rounded-circle">
                      <img src={initialProfile.image} alt="user" />
                    </div>
                    <div className="card-body">
                      <h4 className="py-2 text-dark">{initialProfile.firstName} {initialProfile.lastName}</h4>
                      <p>{initialProfile.email}</p>
                      <a className="btn btn-primary my-3" href="#">Follow</a>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between ">
                    <div className="text-center pb-4">
                      <h6 className="text-dark pb-2">1703</h6>
                      <p>Friends</p>
                    </div>
                    <div className="text-center pb-4">
                      <h6 className="text-dark pb-2">3005</h6>
                      <p>Followers</p>
                    </div>
                    <div className="text-center pb-4">
                      <h6 className="text-dark pb-2">1150</h6>
                      <p>Following</p>
                    </div>
                  </div>
                </div>
                <hr className="w-100" />
                <div className="contact-info pt-4">
                  <h5 className="text-dark">Contact Information</h5>
                  <p className="text-dark font-weight-medium pt-24px mb-2">Email address</p>
                  <p>{initialProfile.email}</p>
                  <p className="text-dark font-weight-medium pt-24px mb-2">Phone Number</p>
                  <p>{initialProfile.phone}</p>
                  <p className="text-dark font-weight-medium pt-24px mb-2">Birthday</p>
                  <p>{initialProfile.birthday}</p>
                  <p className="text-dark font-weight-medium pt-24px mb-2">Social Profile</p>
                  <p className="social-button">
                    <a href="#" className="mb-1 btn btn-outline btn-twitter rounded-circle"><i className="mdi mdi-twitter"></i></a>
                    <a href="#" className="mb-1 btn btn-outline btn-linkedin rounded-circle"><i className="mdi mdi-linkedin"></i></a>
                    <a href="#" className="mb-1 btn btn-outline btn-facebook rounded-circle"><i className="mdi mdi-facebook"></i></a>
                    <a href="#" className="mb-1 btn btn-outline btn-skype rounded-circle"><i className="mdi mdi-skype"></i></a>
                  </p>
                </div>
              </div>
            </div>
            {/* Main Content */}
            <div className="col-lg-8 col-xl-9">
              <div className="profile-content-right profile-right-spacing py-5">
                <ul className="nav nav-tabs px-3 px-xl-5 nav-style-border" id="myProfileTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className={`nav-link${activeTab === 'profile' ? ' active' : ''}`} id="profile-tab" data-bs-toggle="tab"
                      type="button" role="tab" aria-selected={activeTab === 'profile'}
                      onClick={() => handleTab('profile')}>Profile</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className={`nav-link${activeTab === 'settings' ? ' active' : ''}`} id="settings-tab" data-bs-toggle="tab"
                      type="button" role="tab" aria-selected={activeTab === 'settings'}
                      onClick={() => handleTab('settings')}>Settings</button>
                  </li>
                </ul>
                <div className="tab-content px-3 px-xl-5" id="myTabContent">
                  {/* Profile Tab */}
                  <div className={`tab-pane fade${activeTab === 'profile' ? ' show active' : ''}`} id="profile" role="tabpanel">
                    <div className="tab-widget mt-5">
                      <div className="row">
                        <div className="col-xl-4">
                          <div className="media widget-media p-3 bg-white border">
                            <div className="icon rounded-circle mr-3 bg-primary">
                              <i className="mdi mdi-account-outline text-white "></i>
                            </div>
                            <div className="media-body align-self-center">
                              <h4 className="text-primary mb-2">5300</h4>
                              <p>New Users</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="media widget-media p-3 bg-white border">
                            <div className="icon rounded-circle bg-warning mr-3">
                              <i className="mdi mdi-cart-outline text-white "></i>
                            </div>
                            <div className="media-body align-self-center">
                              <h4 className="text-primary mb-2">1953</h4>
                              <p>Order Placed</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="media widget-media p-3 bg-white border">
                            <div className="icon rounded-circle mr-3 bg-success">
                              <i className="mdi mdi-diamond-stone text-white "></i>
                            </div>
                            <div className="media-body align-self-center">
                              <h4 className="text-primary mb-2">1450</h4>
                              <p>Total Sales</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Notifications */}
                      <div className="row mt-4">
                        <div className="col-xl-12">
                          <div className="card card-default mb-24px">
                            <div className="card-header justify-content-between mb-1">
                              <h2>Latest Notifications</h2>
                              <div>
                                <button className="text-black-50 mr-2 font-size-20"><i className="mdi mdi-cached"></i></button>
                                <div className="dropdown show d-inline-block widget-dropdown">
                                  <a className="dropdown-toggle icon-burger-mini" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li className="dropdown-item"><a href="#">Action</a></li>
                                    <li className="dropdown-item"><a href="#">Another action</a></li>
                                    <li className="dropdown-item"><a href="#">Something else here</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="card-body compact-notifications" style={{height: 434, overflowY: 'auto'}}>
                              {/* Notification items (static for now) */}
                              <div className="media pb-3 align-items-center justify-content-between">
                                <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                                  <i className="mdi mdi-cart-outline font-size-20"></i>
                                </div>
                                <div className="media-body pr-3 ">
                                  <a className="mt-0 mb-1 font-size-15 text-dark" href="#">New Order</a>
                                  <p>Selena has placed a new order</p>
                                </div>
                                <span className=" font-size-12 d-inline-block"><i className="mdi mdi-clock-outline"></i> 10 AM</span>
                              </div>
                              <div className="media py-3 align-items-center justify-content-between">
                                <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-success text-white">
                                  <i className="mdi mdi-email-outline font-size-20"></i>
                                </div>
                                <div className="media-body pr-3">
                                  <a className="mt-0 mb-1 font-size-15 text-dark" href="#">New Enquiry</a>
                                  <p>Phileine has placed a new order</p>
                                </div>
                                <span className=" font-size-12 d-inline-block"><i className="mdi mdi-clock-outline"></i> 9 AM</span>
                              </div>
                              <div className="media py-3 align-items-center justify-content-between">
                                <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-warning text-white">
                                  <i className="mdi mdi-stack-exchange font-size-20"></i>
                                </div>
                                <div className="media-body pr-3">
                                  <a className="mt-0 mb-1 font-size-15 text-dark" href="#">Support Ticket</a>
                                  <p>Emma has placed a new order</p>
                                </div>
                                <span className=" font-size-12 d-inline-block"><i className="mdi mdi-clock-outline"></i> 10 AM</span>
                              </div>
                              {/* Add more notifications as needed */}
                            </div>
                          </div>
                        </div>
                        {/* Recent Orders Table */}
                        <div className="col-12">
                          <div className="card card-default card-table-border-none ec-tbl" id="recent-orders">
                            <div className="card-header justify-content-between">
                              <h2>Recent Orders</h2>
                              <div className="date-range-report">
                                <select 
                                  className="form-control form-control-sm" 
                                  value={selectedDateRange} 
                                  onChange={handleDateRangeChange}
                                  style={{width: 'auto', minWidth: '150px'}}
                                >
                                  <option value="Last 7 Days">Last 7 Days</option>
                                  <option value="Last 30 Days">Last 30 Days</option>
                                  <option value="Last 3 Months">Last 3 Months</option>
                                  <option value="Last 6 Months">Last 6 Months</option>
                                  <option value="Last Year">Last Year</option>
                                  <option value="All Time">All Time</option>
                                </select>
                              </div>
                            </div>
                            <div className="card-body pt-0 pb-0 table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Order_ID</th>
                                    <th>Product_Name</th>
                                    <th>Units</th>
                                    <th>Order_Date</th>
                                    <th>Order_Cost</th>
                                    <th>Status</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>24541</td>
                                    <td><a className="text-dark" href="#">Coach Swagger</a></td>
                                    <td>1 Unit</td>
                                    <td>Oct 20, 2018</td>
                                    <td>$230</td>
                                    <td><span className="badge badge-success">Completed</span></td>
                                    <td className="text-right">
                                      <div className="dropdown show d-inline-block widget-dropdown">
                                        <a className="dropdown-toggle icon-burger-mini" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                                        <ul className="dropdown-menu dropdown-menu-right">
                                          <li className="dropdown-item"><a href="#">View</a></li>
                                          <li className="dropdown-item"><a href="#">Remove</a></li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                  {/* Add more orders as needed */}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Settings Tab */}
                  <div className={`tab-pane fade${activeTab === 'settings' ? ' show active' : ''}`} id="settings" role="tabpanel">
                    <div className="tab-pane-content mt-5">
                      <form onSubmit={handleFormSubmit}>
                        <div className="form-group row mb-6">
                          <label htmlFor="coverImage" className="col-sm-4 col-lg-2 col-form-label">User Image</label>
                          <div className="col-sm-8 col-lg-10">
                            <div className="custom-file mb-1">
                              <input type="file" className="custom-file-input" id="coverImage" name="image" onChange={handleFormChange} />
                              <label className="custom-file-label" htmlFor="coverImage">Choose file...</label>
                              <div className="invalid-feedback">Example invalid custom file feedback</div>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label htmlFor="firstName">First name</label>
                              <input type="text" className="form-control" id="firstName" name="firstName" value={form.firstName} onChange={handleFormChange} />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label htmlFor="lastName">Last name</label>
                              <input type="text" className="form-control" id="lastName" name="lastName" value={form.lastName} onChange={handleFormChange} />
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="userName">User name</label>
                          <input type="text" className="form-control" id="userName" name="userName" value={form.userName} onChange={handleFormChange} />
                          <span className="d-block mt-1">Accusamus nobis at omnis consequuntur culpa tempore saepe animi.</span>
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="email">Email</label>
                          <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleFormChange} />
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="oldPassword">Old password</label>
                          <input type="password" className="form-control" id="oldPassword" name="oldPassword" value={form.oldPassword} onChange={handleFormChange} />
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="newPassword">New password</label>
                          <input type="password" className="form-control" id="newPassword" name="newPassword" value={form.newPassword} onChange={handleFormChange} />
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="conPassword">Confirm password</label>
                          <input type="password" className="form-control" id="conPassword" name="conPassword" value={form.conPassword} onChange={handleFormChange} />
                        </div>
                        <div className="d-flex justify-content-end mt-5">
                          <button type="submit" className="btn btn-primary mb-2 btn-pill">Update Profile</button>
                        </div>
                        {formMsg && <div className="alert alert-success mt-3">{formMsg}</div>}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile; 