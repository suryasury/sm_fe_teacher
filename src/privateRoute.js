import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem("accessToken");
  if (isAuthenticated) {
    return <Outlet />;
  } else return <Navigate to="/login" />;
};

export default PrivateRoute;
