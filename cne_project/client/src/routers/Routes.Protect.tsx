import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvided";
import React from "react";

export const Protect = () => {
  // valida el estado del login
  const auth = useAuth();

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export const ProtectForgot = () => {
  // valida el estado del login
  const auth = useAuth();

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/forgot" />;
};
