import React, { useState } from 'react';
import Sidebar from './components/admin/Sidebar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Settings from './components/layout/Settings';
import './App.css'; // Optional: for custom styles if needed
import Dashboard from './components/Dashboard';

function App() {
  const [isSidebarMinified, setSidebarMinified] = useState(false);

  const toggleSidebarMinified = () => {
    setSidebarMinified((prev) => !prev);
  };

  return (
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
            <Dashboard />
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