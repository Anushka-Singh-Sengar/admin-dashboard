import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/admin/Sidebar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Settings from './components/layout/Settings';
import './App.css'; // Optional: for custom styles if needed
import Dashboard from './components/Dashboard';
import VendorsGrid from './components/vendors/VendorsGrid';
import VendorsList from './components/vendors/VendorsList';
import VendorProfile from './components/vendors/VendorProfile';

function App() {
  const [isSidebarMinified, setSidebarMinified] = useState(false);

  const toggleSidebarMinified = () => {
    setSidebarMinified((prev) => !prev);
  };

  return (
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