import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = true; // Replace this with actual authentication check
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/admin" />;
};

export default ProtectedRoute;
