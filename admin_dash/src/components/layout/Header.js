import React, { useState, useRef, useEffect } from 'react';

const Header = ({ isSidebarMinified, toggleSidebarMinified }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('home2');
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const profileRef = useRef();
  const notificationsRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <header className="ec-main-header" id="header">
      <nav className="navbar navbar-static-top navbar-expand-lg">
        {/* Sidebar toggle button (matches template) */}
        <button
          id="sidebar-toggler"
          className="sidebar-toggle"
          onClick={toggleSidebarMinified}
          aria-label="Toggle sidebar"
        />
        {/* search form */}
        <div className="search-form d-lg-inline-block">
          <div className="input-group">
            <input 
              type="text" 
              name="query" 
              id="search-input" 
              className="form-control"
              placeholder="search.." 
              autoFocus 
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="button" 
              name="search" 
              id="search-btn" 
              className="btn btn-flat"
              onClick={handleSearch}
            >
              <i className="mdi mdi-magnify"></i>
            </button>
          </div>
          <div id="search-results-container">
            <ul id="search-results"></ul>
          </div>
        </div>

        {/* navbar right */}
        <div className="navbar-right">
          <ul className="nav navbar-nav">
            {/* User Account */}
            <li className="dropdown user-menu" ref={profileRef}>
              <button 
                className="dropdown-toggle nav-link ec-drop" 
                aria-expanded={showProfile}
                onClick={() => setShowProfile((prev) => !prev)}
              >
                <img src="/assets/img/user/user.png" className="user-image" alt="User" style={{ width: 40, height: 40, borderRadius: 15, objectFit: 'cover', display: 'block' }} />
              </button>
              <ul className={`dropdown-menu dropdown-menu-right ec-dropdown-menu${showProfile ? ' show' : ''}`}>
                {/* User image */}
                <li className="dropdown-header">
                  <img src="/assets/img/user/user.png" className="img-circle" alt="User" style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover', display: 'block', margin: '0 auto' }} />
                  <div className="d-inline-block">
                    John Deo <small className="pt-1">john.example@gmail.com</small>
                  </div>
                </li>
                <li>
                  <a href="/user-profile">
                    <i className="mdi mdi-account"></i> My Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="mdi mdi-email"></i> Message
                  </a>
                </li>
                <li>
                  <a href="#"> 
                    <i className="mdi mdi-diamond-stone"></i> Projects 
                  </a>
                </li>
                <li className="right-sidebar-in">
                  <a href="#"> 
                    <i className="mdi mdi-settings-outline"></i> Setting 
                  </a>
                </li>
                <li className="dropdown-footer">
                  <a href="/"> 
                    <i className="mdi mdi-logout"></i> Log Out 
                  </a>
                </li>
              </ul>
            </li>

            {/* Notifications */}
            <li className="dropdown notifications-menu custom-dropdown" ref={notificationsRef}>
              <button className="dropdown-toggle notify-toggler custom-dropdown-toggler" onClick={() => setShowNotifications((prev) => !prev)}>
                <i className="mdi mdi-bell-outline"></i>
              </button>

              <div className={`card card-default dropdown-notify dropdown-menu-right mb-0${showNotifications ? ' show' : ''}`}>
                <div className="card-header card-header-border-bottom px-3">
                  <h2>Notifications</h2>
                </div>

                <div className="card-body px-0 py-0">
                  <ul className="nav nav-tabs nav-style-border p-0 justify-content-between" id="myTab" role="tablist">
                    <li className="nav-item mx-3 my-0 py-0">
                      <a 
                        href="#" 
                        className={`nav-link pb-3 ${activeTab === 'home2' ? 'active' : ''}`}
                        onClick={() => handleTabChange('home2')}
                        role="tab"
                        aria-selected={activeTab === 'home2'}
                      >
                        All (10)
                      </a>
                    </li>
                    <li className="nav-item mx-3 my-0 py-0">
                      <a 
                        href="#" 
                        className={`nav-link pb-3 ${activeTab === 'profile2' ? 'active' : ''}`}
                        onClick={() => handleTabChange('profile2')}
                        role="tab"
                        aria-selected={activeTab === 'profile2'}
                      >
                        Msgs (5)
                      </a>
                    </li>
                    <li className="nav-item mx-3 my-0 py-0">
                      <a 
                        href="#" 
                        className={`nav-link pb-3 ${activeTab === 'contact2' ? 'active' : ''}`}
                        onClick={() => handleTabChange('contact2')}
                        role="tab"
                        aria-selected={activeTab === 'contact2'}
                      >
                        Others (5)
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content" id="myNotifications">
                    {/* All Notifications Tab */}
                    <div className={`tab-pane fade ${activeTab === 'home2' ? 'show active' : ''}`} id="home2" role="tabpanel">
                      <ul className="list-unstyled" data-simplebar style={{ height: '360px' }}>
                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification">
                            <div className="position-relative mr-3">
                              <img className="rounded-circle" src="/assets/img/user/user.png" alt="Image" />
                              <span className="status away"></span>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">Nitin</h4>
                                <p className="last-msg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.</p>
                                <span className="font-size-12 font-weight-medium text-secondary">
                                  <i className="mdi mdi-clock-outline"></i> 30 min ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification media-active">
                            <div className="position-relative mr-3">
                              <img className="rounded-circle" src="/assets/img/user/user.png" alt="Image" />
                              <span className="status active"></span>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">Lovina</h4>
                                <p className="last-msg">Donec mattis augue a nisl consequat, nec imperdiet ex rutrum. Fusce et vehicula enim. Sed in enim eu odio vehic.</p>
                                <span className="font-size-12 font-weight-medium text-white">
                                  <i className="mdi mdi-clock-outline"></i> Just now...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification">
                            <div className="position-relative mr-3">
                              <img className="rounded-circle" src="/assets/img/user/user.png" alt="Image" />
                              <span className="status away"></span>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">Crinali</h4>
                                <p className="last-msg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.</p>
                                <span className="font-size-12 font-weight-medium text-secondary">
                                  <i className="mdi mdi-clock-outline"></i> 1 hrs ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification event-active">
                            <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-info text-white">
                              <i className="mdi mdi-calendar-check font-size-20"></i>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">Upcomming event added</h4>
                                <p className="last-msg font-size-14">03/Jan/2020 (1pm - 2pm)</p>
                                <span className="font-size-12 font-weight-medium text-secondary">
                                  <i className="mdi mdi-clock-outline"></i> 10 min ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification">
                            <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-warning text-white">
                              <i className="mdi mdi-chart-areaspline font-size-20"></i>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">Yearly Sales report</h4>
                                <p className="last-msg font-size-14">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.</p>
                                <span className="font-size-12 font-weight-medium text-secondary">
                                  <i className="mdi mdi-clock-outline"></i> 1 hrs ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification">
                            <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                              <i className="mdi mdi-account-multiple-check font-size-20"></i>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">New request</h4>
                                <p className="last-msg font-size-14">Add Dany Jones as your contact consequat nec imperdiet ex rutrum. Fusce et vehicula enim. Sed in enim.</p>
                                <span className="my-1 btn btn-sm btn-success">Accept</span>
                                <span className="my-1 btn btn-sm btn-secondary">Delete</span>
                                <span className="font-size-12 font-weight-medium text-secondary d-block">
                                  <i className="mdi mdi-clock-outline"></i> 5 min ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification">
                            <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-danger text-white">
                              <i className="mdi mdi-server-network-off font-size-20"></i>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">Server overloaded</h4>
                                <p className="last-msg font-size-14">Donec mattis augue a nisl consequat, nec imperdiet ex rutrum. Fusce et vehicula enim. Sed in enim eu odio vehic.</p>
                                <span className="font-size-12 font-weight-medium text-secondary">
                                  <i className="mdi mdi-clock-outline"></i> 30 min ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification">
                            <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-purple text-white">
                              <i className="mdi mdi-playlist-check font-size-20"></i>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">Task complete</h4>
                                <p className="last-msg font-size-14">Nam ut nisi erat. Ut quis tortor varius, hendrerit arcu quis, congue nisl. In scelerisque, sem ut ve.</p>
                                <span className="font-size-12 font-weight-medium text-secondary">
                                  <i className="mdi mdi-clock-outline"></i> 2 hrs ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Messages Tab */}
                    <div className={`tab-pane fade ${activeTab === 'profile2' ? 'show active' : ''}`} id="profile2" role="tabpanel">
                      <ul className="list-unstyled" data-simplebar style={{ height: '360px' }}>
                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification">
                            <div className="position-relative mr-3">
                              <img className="rounded-circle" src="/assets/img/user/user.png" alt="Image" />
                              <span className="status away"></span>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">Hardiko</h4>
                                <p className="last-msg">Donec mattis augue a nisl consequat, nec imperdiet ex rutrum. Fusce et vehicula enim. Sed in enim eu odio vehic.</p>
                                <span className="font-size-12 font-weight-medium text-secondary">
                                  <i className="mdi mdi-clock-outline"></i> 1 hrs ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification">
                            <div className="position-relative mr-3">
                              <img className="rounded-circle" src="/assets/img/user/user.png" alt="Image" />
                              <span className="status away"></span>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">Browin</h4>
                                <p className="last-msg">Nam ut nisi erat. Ut quis tortor varius, hendrerit arcu quis, congue nisl. In scelerisque, sem ut ve.</p>
                                <span className="font-size-12 font-weight-medium text-secondary">
                                  <i className="mdi mdi-clock-outline"></i> 1 hrs ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification media-active">
                            <div className="position-relative mr-3">
                              <img className="rounded-circle" src="/assets/img/user/user.png" alt="Image" />
                              <span className="status active"></span>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">jenelia</h4>
                                <p className="last-msg">Donec mattis augue a nisl consequat, nec imperdiet ex rutrum. Fusce et vehicula enim. Sed in enim eu odio vehic.</p>
                                <span className="font-size-12 font-weight-medium text-white">
                                  <i className="mdi mdi-clock-outline"></i> Just now...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification">
                            <div className="position-relative mr-3">
                              <img className="rounded-circle" src="/assets/img/user/user.png" alt="Image" />
                              <span className="status away"></span>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">Bhavlio</h4>
                                <p className="last-msg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.</p>
                                <span className="font-size-12 font-weight-medium text-secondary">
                                  <i className="mdi mdi-clock-outline"></i> 1 hrs ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification">
                            <div className="position-relative mr-3">
                              <img className="rounded-circle" src="/assets/img/user/user.png" alt="Image" />
                              <span className="status away"></span>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">Browini</h4>
                                <p className="last-msg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.</p>
                                <span className="font-size-12 font-weight-medium text-secondary">
                                  <i className="mdi mdi-clock-outline"></i> 1 hrs ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Others Tab */}
                    <div className={`tab-pane fade ${activeTab === 'contact2' ? 'show active' : ''}`} id="contact2" role="tabpanel">
                      <ul className="list-unstyled" data-simplebar style={{ height: '360px' }}>
                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification event-active">
                            <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-info text-white">
                              <i className="mdi mdi-calendar-check font-size-20"></i>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">Upcomming event added</h4>
                                <p className="last-msg font-size-14">03/Jan/2020 (1pm - 2pm)</p>
                                <span className="font-size-12 font-weight-medium text-secondary">
                                  <i className="mdi mdi-clock-outline"></i> 10 min ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification">
                            <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-warning text-white">
                              <i className="mdi mdi-chart-areaspline font-size-20"></i>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">New Sales report</h4>
                                <p className="last-msg font-size-14">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam itaque doloremque odio, eligendi delectus vitae.</p>
                                <span className="font-size-12 font-weight-medium text-secondary">
                                  <i className="mdi mdi-clock-outline"></i> 1 hrs ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification">
                            <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                              <i className="mdi mdi-account-multiple-check font-size-20"></i>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">New Request</h4>
                                <p className="last-msg font-size-14">Add Dany Jones as your contact consequat nec imperdiet ex rutrum. Fusce et vehicula enim. Sed in enim.</p>
                                <span className="my-1 btn btn-sm btn-success">Accept</span>
                                <span className="my-1 btn btn-sm btn-secondary">Delete</span>
                                <span className="font-size-12 font-weight-medium text-secondary d-block">
                                  <i className="mdi mdi-clock-outline"></i> 5 min ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification">
                            <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-danger text-white">
                              <i className="mdi mdi-server-network-off font-size-20"></i>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">Server overloaded</h4>
                                <p className="last-msg font-size-14">Donec mattis augue a nisl consequat, nec imperdiet ex rutrum. Fusce et vehicula enim. Sed in enim eu odio vehic.</p>
                                <span className="font-size-12 font-weight-medium text-secondary">
                                  <i className="mdi mdi-clock-outline"></i> 30 min ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="javascript:void(0)" className="media media-message media-notification">
                            <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-purple text-white">
                              <i className="mdi mdi-playlist-check font-size-20"></i>
                            </div>
                            <div className="media-body d-flex justify-content-between">
                              <div className="message-contents">
                                <h4 className="title">New Task complete</h4>
                                <p className="last-msg font-size-14">Nam ut nisi erat. Ut quis tortor varius, hendrerit arcu quis, congue nisl. In scelerisque, sem ut ve.</p>
                                <span className="font-size-12 font-weight-medium text-secondary">
                                  <i className="mdi mdi-clock-outline"></i> 2 hrs ago...
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Settings */}
            <li className="right-sidebar-in right-sidebar-2-menu">
              <i className="mdi mdi-settings-outline mdi-spin"></i>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 