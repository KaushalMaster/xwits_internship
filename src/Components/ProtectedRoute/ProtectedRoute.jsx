import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const ProtectedRoute = (props) => {
  const { user } = useContext(UserContext);

  return user ? <div>{props.children}</div> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
