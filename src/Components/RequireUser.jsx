import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const RequireUser = ({ children }) => {
  const { user } = useGlobalContext();

  // if (!user) {
  //   return <Navigate to="/login" />;
  // }

  return children;
};

export default RequireUser;
