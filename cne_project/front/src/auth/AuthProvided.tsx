import { useContext, createContext, useState, useEffect } from "react";

interface AuthProvProps {
  children: React.ReactNode;
}

const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export const AuthProv = ({ children }: AuthProvProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
<<<<<<< HEAD
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated}}>
=======
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
>>>>>>> 67b9fa1b38232f7a746202927ba3c5cf7a69b03d
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
