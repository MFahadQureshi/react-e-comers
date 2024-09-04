import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home'; // Ensure you have a Home component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} /> {/* This should match what you're navigating to */}
        <Route path="*" element={<Navigate to="/" />} /> {/* Catch-all route */}
      </Routes>
    </Router>
  );
}

export default App;
