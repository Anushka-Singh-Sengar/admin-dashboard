import React, { useState } from 'react';
import Sidebar from './components/admin/Sidebar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Settings from './components/layout/Settings';
import './App.css'; // Optional: for custom styles if needed
import Dashboard from './components/Dashboard';
import { UserGrid, UserList, UserProfile } from './components/user';

function App() {
  const [isSidebarMinified, setSidebarMinified] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const toggleSidebarMinified = () => {
    setSidebarMinified((prev) => !prev);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'user-grid':
        return <UserGrid />;
      case 'user-list':
        return <UserList />;
      case 'user-profile':
        return <UserProfile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`wrapper${isSidebarMinified ? ' sidebar-minified' : ''}`}>
      {/* LEFT MAIN SIDEBAR */}
      <Sidebar 
        isSidebarMinified={isSidebarMinified} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      {/* PAGE WRAPPER */}
      <div className="ec-page-wrapper">
        {/* Header */}
        <Header isSidebarMinified={isSidebarMinified} toggleSidebarMinified={toggleSidebarMinified} />
        
        {/* CONTENT WRAPPER */}
        <div className="ec-content-wrapper">
          <div className="content">
            {renderCurrentPage()}
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
      
      {/* Settings Panel - rendered at root level */}
      <Settings />
    </div>
  );
}

export default App; 