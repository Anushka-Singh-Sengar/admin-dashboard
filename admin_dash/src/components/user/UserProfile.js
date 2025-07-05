import React, { useState, useRef, useEffect } from 'react';

// Sample user profile data
const userProfile = {
  id: 1,
  name: 'Mark deo',
  email: 'mark.example@gmail.com',
  phone: '+00 1234 5678 91',
  img: '/assets/img/user/u-xl-1.jpg',
  bought: 546,
  wishList: 32,
  following: 1150,
  birthday: 'Dec 10, 1991',
  social: {
    twitter: '#',
    linkedin: '#',
    facebook: '#',
    skype: '#',
  },
};

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifMenuOpen, setNotifMenuOpen] = useState(false);
  const notifMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notifMenuRef.current && !notifMenuRef.current.contains(event.target)) {
        setNotifMenuOpen(false);
      }
    }
    if (notifMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [notifMenuOpen]);

  return (
    <div className="ec-content-wrapper">
      <div className="content">
        <div className="breadcrumb-wrapper breadcrumb-contacts">
          <div>
            <h1>User Profile</h1>
            <p className="breadcrumbs">
              <span><a href="/">Home</a></span>
              <span><i className="mdi mdi-chevron-right"></i></span>Profile
            </p>
          </div>
          <div>
            <button className="btn btn-primary" style={{ borderRadius: 16, padding: '6px 24px' }}>Edit</button>
          </div>
        </div>
        <div className="card bg-white profile-content">
          <div className="row">
            {/* Left Sidebar */}
            <div className="col-lg-4 col-xl-3">
              <div className="profile-content-left profile-left-spacing">
                <div className="text-center widget-profile px-0 border-0">
                  <div className="card-img mx-auto rounded-circle" style={{ width: 120, height: 120, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {userProfile.img ? (
                      <img src={userProfile.img} alt="user image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                    ) : (
                      <span style={{ color: '#bbb' }}>640 X 640</span>
                    )}
                  </div>
                  <div className="card-body">
                    <h4 className="py-2 text-dark">{userProfile.name}</h4>
                    <p>{userProfile.email}</p>
                    <a className="btn btn-primary my-3" href="#">Follow</a>
                  </div>
                </div>
                <div className="d-flex justify-content-between ">
                  <div className="text-center pb-4">
                    <h6 className="text-dark pb-2">{userProfile.bought}</h6>
                    <p>Bought</p>
                  </div>
                  <div className="text-center pb-4">
                    <h6 className="text-dark pb-2">{userProfile.wishList}</h6>
                    <p>Wish List</p>
                  </div>
                  <div className="text-center pb-4">
                    <h6 className="text-dark pb-2">{userProfile.following}</h6>
                    <p>Following</p>
                  </div>
                </div>
                <hr className="w-100" />
                <div className="contact-info pt-4">
                  <h5 className="text-dark">Contact Information</h5>
                  <p className="text-dark font-weight-medium pt-24px mb-2">Email address</p>
                  <p>{userProfile.email}</p>
                  <p className="text-dark font-weight-medium pt-24px mb-2">Phone Number</p>
                  <p>{userProfile.phone}</p>
                  <p className="text-dark font-weight-medium pt-24px mb-2">Birthday</p>
                  <p>{userProfile.birthday}</p>
                  <p className="text-dark font-weight-medium pt-24px mb-2">Social Profile</p>
                  <p className="social-button">
                    <a href={userProfile.social.twitter} className="mb-1 btn btn-outline btn-twitter rounded-circle"><i className="mdi mdi-twitter"></i></a>
                    <a href={userProfile.social.linkedin} className="mb-1 btn btn-outline btn-linkedin rounded-circle"><i className="mdi mdi-linkedin"></i></a>
                    <a href={userProfile.social.facebook} className="mb-1 btn btn-outline btn-facebook rounded-circle"><i className="mdi mdi-facebook"></i></a>
                    <a href={userProfile.social.skype} className="mb-1 btn btn-outline btn-skype rounded-circle"><i className="mdi mdi-skype"></i></a>
                  </p>
                </div>
              </div>
            </div>
            {/* Right Main Content */}
            <div className="col-lg-8 col-xl-9">
              <div className="profile-content-right profile-right-spacing py-5">
                <ul className="nav nav-tabs px-3 px-xl-5 nav-style-border" id="myProfileTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className={`nav-link${activeTab === 'profile' ? ' active' : ''}`} id="profile-tab" type="button" onClick={() => setActiveTab('profile')}>Profile</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className={`nav-link${activeTab === 'settings' ? ' active' : ''}`} id="settings-tab" type="button" onClick={() => setActiveTab('settings')}>Settings</button>
                  </li>
                </ul>
                <div className="tab-content px-3 px-xl-5" id="myTabContent">
                  {/* Profile Tab (now with stats and notifications) */}
                  <div className={`tab-pane fade${activeTab === 'profile' ? ' show active' : ''}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="row mb-4">
                      <div className="col-md-4 mb-3">
                        <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm" style={{border: '1px solid #f0f0f0'}}>
                          <div className="icon rounded-circle mr-3 bg-primary d-flex align-items-center justify-content-center" style={{width: 48, height: 48}}>
                            <i className="mdi mdi-account-outline text-white" style={{fontSize: 24}}></i>
                          </div>
                          <div>
                            <h4 className="text-primary mb-0" style={{fontWeight: 600}}>{userProfile.bought}</h4>
                            <div>Bought</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm" style={{border: '1px solid #f0f0f0'}}>
                          <div className="icon rounded-circle mr-3 bg-warning d-flex align-items-center justify-content-center" style={{width: 48, height: 48}}>
                            <i className="mdi mdi-cart-outline text-white" style={{fontSize: 24}}></i>
                          </div>
                          <div>
                            <h4 className="text-primary mb-0" style={{fontWeight: 600}}>1953</h4>
                            <div>Wish List</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm" style={{border: '1px solid #f0f0f0'}}>
                          <div className="icon rounded-circle mr-3 bg-success d-flex align-items-center justify-content-center" style={{width: 48, height: 48}}>
                            <i className="mdi mdi-ticket-percent text-white" style={{fontSize: 24}}></i>
                          </div>
                          <div>
                            <h4 className="text-primary mb-0" style={{fontWeight: 600}}>02</h4>
                            <div>Voucher</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card bg-white mb-4" style={{borderRadius: 16}}>
                      <div className="card-header d-flex justify-content-between align-items-center" style={{background: 'transparent', borderBottom: '1px solid #f0f0f0'}}>
                        <h5 className="mb-0">Latest Notifications</h5>
                        <div className="position-relative" ref={notifMenuRef}>
                          <button className="text-black-50 mr-2 font-size-20" style={{ background: 'none', border: 'none' }}><i className="mdi mdi-cached"></i></button>
                          <button
                            className="text-black-50 font-size-20"
                            style={{ background: 'none', border: 'none' }}
                            onClick={e => { e.preventDefault(); setNotifMenuOpen(v => !v); }}
                            aria-haspopup="true"
                            aria-expanded={notifMenuOpen}
                          >
                            <i className="mdi mdi-dots-vertical"></i>
                          </button>
                          {notifMenuOpen && (
                            <div className="dropdown-menu show" style={{ position: 'absolute', right: 0, top: '110%', minWidth: 180, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', border: 'none', borderRadius: 8, zIndex: 10 }}>
                              <button className="dropdown-item" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', color: '#6c757d', fontSize: 17, padding: '10px 18px' }} onClick={() => setNotifMenuOpen(false)}>Action</button>
                              <button className="dropdown-item" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', color: '#6c757d', fontSize: 17, padding: '10px 18px' }} onClick={() => setNotifMenuOpen(false)}>Another Action</button>
                              <button className="dropdown-item" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', color: '#6c757d', fontSize: 17, padding: '10px 18px' }} onClick={() => setNotifMenuOpen(false)}>Something Else Here</button>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="card-body pt-0">
                        {[
                          {icon: 'mdi-cart-outline', color: 'bg-primary', title: 'New Order', text: 'Selena has placed an new order', time: '10 AM'},
                          {icon: 'mdi-email-outline', color: 'bg-success', title: 'New Enquiry', text: 'Phileine has placed an new order', time: '9 AM'},
                          {icon: 'mdi-stack-exchange', color: 'bg-warning', title: 'Support Ticket', text: 'Emma has placed an new order', time: '10 AM'},
                          {icon: 'mdi-cart-outline', color: 'bg-primary', title: 'New order', text: 'Ryan has placed an new order', time: '10 AM'},
                          {icon: 'mdi-calendar-blank', color: 'bg-info', title: 'Comapny Meetup', text: 'Phileine has placed an new order', time: '10 AM'},
                          {icon: 'mdi-stack-exchange', color: 'bg-warning', title: 'Support Ticket', text: 'Emma has placed an new order', time: '10 AM'},
                          {icon: 'mdi-email-outline', color: 'bg-success', title: 'New Enquiry', text: 'Phileine has placed an new order', time: '9 AM'},
                        ].map((n, i) => (
                          <div key={i} className="d-flex align-items-center py-3 border-bottom" style={i === 6 ? {borderBottom: 'none'} : {}}>
                            <div className={`d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 ${n.color} text-white`} style={{width: 45, height: 45}}>
                              <i className={`mdi ${n.icon} font-size-20`}></i>
                            </div>
                            <div className="flex-grow-1">
                              <div className="font-weight-bold text-dark" style={{fontSize: 16}}>{n.title}</div>
                              <div style={{fontSize: 15}}>{n.text}</div>
                            </div>
                            <span className="font-size-12 d-inline-block text-secondary ml-auto" style={{minWidth: 60, textAlign: 'right'}}><i className="mdi mdi-clock-outline"></i> {n.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Settings Tab */}
                  <div className={`tab-pane fade${activeTab === 'settings' ? ' show active' : ''}`} id="settings" role="tabpanel" aria-labelledby="settings-tab">
                    <div className="tab-pane-content mt-5">
                      <form>
                        <div className="form-group row mb-6">
                          <label htmlFor="coverImage" className="col-sm-4 col-lg-2 col-form-label">User Image</label>
                          <div className="col-sm-8 col-lg-10">
                            <div className="custom-file mb-1">
                              <input type="file" className="custom-file-input" id="coverImage" required />
                              <label className="custom-file-label" htmlFor="coverImage">Choose File...</label>
                              <div className="invalid-feedback">Example invalid custom file feedback</div>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label htmlFor="firstName">First Name</label>
                              <input type="text" className="form-control" id="firstName" placeholder="First name" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label htmlFor="lastName">Last Name</label>
                              <input type="text" className="form-control" id="lastName" placeholder="Last name" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="userName">User Name</label>
                          <input type="text" className="form-control" id="userName" value="sa22019136@gmail.com" readOnly />
                          <span className="d-block mt-1">Accusamus nobis at omnis consequuntur culpa tempore saepe animi.</span>
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="email">Email</label>
                          <input type="email" className="form-control" id="email" placeholder="ekka.example@gmail.com" />
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="oldPassword">Old Password</label>
                          <input type="password" className="form-control" id="oldPassword" value="" />
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="newPassword">New Password</label>
                          <input type="password" className="form-control" id="newPassword" value="" />
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="conPassword">Confirm Password</label>
                          <input type="password" className="form-control" id="conPassword" value="" />
                        </div>
                        <div className="d-flex justify-content-end mt-5">
                          <button type="submit" className="btn btn-primary mb-2 btn-pill">Update Profile</button>
                        </div>
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

export default UserProfile; 