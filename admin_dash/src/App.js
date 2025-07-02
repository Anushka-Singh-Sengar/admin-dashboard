import React from 'react';
import Sidebar from './components/admin/Sidebar';
import './App.css'; // Optional: for custom styles if needed
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="ec-page-wrapper">
        <Dashboard />
      </div>
    </div>
  );
}

export default App; 