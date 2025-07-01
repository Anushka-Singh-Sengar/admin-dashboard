import React from 'react';
import Sidebar from './components/admin/Sidebar';
import './App.css'; // Optional: for custom styles if needed

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="ec-page-wrapper">
        {/* Main dashboard content goes here */}
        <div style={{ padding: '2rem' }}>
          <h1>Welcome to the Admin Dashboard</h1>
          <p>This is a placeholder for your dashboard content.</p>
        </div>
      </div>
    </div>
  );
}

export default App; 