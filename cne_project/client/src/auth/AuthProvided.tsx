import { useContext, createContext, useState, useEffect } from "react";

interface AuthProvProps {
  children: React.ReactNode;
}

const AuthContext = createContext();

export const AuthProv = ({ children }: AuthProvProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true)
  }
  const logout = () => {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);