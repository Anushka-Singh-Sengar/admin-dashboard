import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Optional: for global styles if needed
import './assets/css/ekka.css';

// Add the required body classes for the template
document.body.className = 'ec-header-fixed ec-sidebar-fixed ec-sidebar-light ec-header-light';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />); 