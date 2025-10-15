import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
//import Reembolso from './Components/Reembolso';
//import Produto from './Components/Produto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        //<Route path="/reembolso" element={<Reembolso />} />
        //<Route path="/produto/:id" element={<Produto />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
