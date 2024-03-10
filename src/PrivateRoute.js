import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

const PrivateRoute = () => {
  const storedData = localStorage.getItem("login_token");
  const auth = storedData;
  return auth ? (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoute;
