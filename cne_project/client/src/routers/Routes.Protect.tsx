import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvided";
import React from "react";

export const Protect = () => {
   // Accede al estado del login desde authState
   const { authState } = useAuth();

  return authState.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export const ProtectForgot = () => {
  // Accede al estado del login desde authState
  const { authState } = useAuth();

  return authState.isAuthenticated ? <Outlet /> : <Navigate to="/forgot" />;
};
