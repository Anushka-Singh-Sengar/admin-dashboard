import React, { useState } from 'react';
import { UserGrid, UserList, UserProfile } from './index';

// Example of how to integrate user components into your app
const UserIntegrationExample = () => {
  const [currentView, setCurrentView] = useState('grid'); // 'grid', 'list', 'profile'
  const [selectedUserId, setSelectedUserId] = useState(null);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'grid':
        return <UserGrid />;
      case 'list':
        return <UserList />;
      case 'profile':
        return <UserProfile />;
      default:
        return <UserGrid />;
    }
  };

  return (
    <div className="ec-content-wrapper">
      <div className="content">
        {/* Navigation Tabs */}
        <div className="breadcrumb-wrapper breadcrumb-contacts">
          <div>
            <h1>User Management</h1>
            <p className="breadcrumbs">
              <span><a href="/">Home</a></span>
              <span><i className="mdi mdi-chevron-right"></i></span>
              <span>Users</span>
            </p>
          </div>
          <div>
            <div className="btn-group" role="group">
              <button 
                type="button" 
                className={`btn ${currentView === 'grid' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setCurrentView('grid')}
              >
                <i className="mdi mdi-view-grid"></i> Grid View
              </button>
              <button 
                type="button" 
                className={`btn ${currentView === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setCurrentView('list')}
              >
                <i className="mdi mdi-view-list"></i> List View
              </button>
            </div>
          </div>
        </div>

        {/* Render Current View */}
        {renderCurrentView()}
      </div>
    </div>
  );
};

export default UserIntegrationExample;

/*
// Alternative: Simple component usage without navigation
const SimpleUserExample = () => {
  return (
    <div>
      <h2>User Grid</h2>
      <UserGrid />
      
      <h2>User List</h2>
      <UserList />
      
      <h2>User Profile</h2>
      <UserProfile />
    </div>
  );
};

// Usage in App.js (example):
import UserIntegrationExample from './components/user/UserIntegrationExample';

// In your App component, you can conditionally render:
{showUsers && <UserIntegrationExample />}
*/ 