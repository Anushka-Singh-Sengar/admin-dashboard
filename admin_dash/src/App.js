import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/admin/Sidebar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Settings from './components/layout/Settings';
import './App.css'; // Optional: for custom styles if needed
import Dashboard from './components/Dashboard';
<<<<<<< HEAD
import VendorsGrid from './components/vendors/VendorsGrid';
import VendorsList from './components/vendors/VendorsList';
import VendorProfile from './components/vendors/VendorProfile';
=======
import { UserGrid, UserList, UserProfile } from './components/user';
>>>>>>> 5bf56072f7ce0d7648c3b0f30c92c0a9347a66e4

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
<<<<<<< HEAD
    <Router>
      <div className={`wrapper${isSidebarMinified ? ' sidebar-minified' : ''}`}>
        {/* LEFT MAIN SIDEBAR */}
        <Sidebar isSidebarMinified={isSidebarMinified} />
        
        {/* PAGE WRAPPER */}
        <div className="ec-page-wrapper">
          {/* Header */}
          <Header isSidebarMinified={isSidebarMinified} toggleSidebarMinified={toggleSidebarMinified} />
          
          {/* CONTENT WRAPPER */}
          <div className="ec-content-wrapper">
            <div className="content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/vendor-card" element={<VendorsGrid />} />
                <Route path="/vendor-list" element={<VendorsList />} />
                <Route path="/vendor-profile" element={<VendorProfile />} />
              </Routes>
            </div>
=======
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
>>>>>>> 5bf56072f7ce0d7648c3b0f30c92c0a9347a66e4
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
        
        {/* Settings Panel - rendered at root level */}
        <Settings />
      </div>
    </Router>
  );
}

export default App; 