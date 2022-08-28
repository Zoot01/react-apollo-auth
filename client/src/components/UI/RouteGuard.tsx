import React, { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const RouteGuard = ({ children }: { children: ReactNode | null }) => {
  const { state } = useContext(AuthContext);
  return state._id ? <>{children}</> : <Navigate to="/login" />;
};

export default RouteGuard;
