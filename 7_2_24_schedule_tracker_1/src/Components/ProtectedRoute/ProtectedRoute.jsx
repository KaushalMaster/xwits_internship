import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoute = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? <div>{props.children}</div> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
