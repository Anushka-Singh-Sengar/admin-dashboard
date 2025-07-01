import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Optional: for global styles if needed
import './assets/css/ekka.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />); 