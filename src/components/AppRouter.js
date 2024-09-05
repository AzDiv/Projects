import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage'; // Import LoginPage component
import Dashboard from './components/Home/Dashboard'; // Import Dashboard component

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Dashboard />} /> {/* Define route for root URL */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
