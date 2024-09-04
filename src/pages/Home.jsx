import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase/config'; // Your Firebase config

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser;
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default Home;
