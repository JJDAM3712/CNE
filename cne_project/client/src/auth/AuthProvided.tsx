import { useContext, createContext, useState, useEffect } from "react";

interface AuthProvProps {
  children: React.ReactNode;
}
interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const AuthContext = createContext<{
  authState: AuthState;
  login: (token: string) => void;
  logout: () => void;
} | null>(null);

export const AuthProv = ({ children }: AuthProvProps) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    token: null,
  });

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setAuthState({ isAuthenticated: true, token });
    };
  }, []);

  const login = (token: string) => {
    console.log('Logging in with token:', token);
    setAuthState({ isAuthenticated: true, token});
    sessionStorage.setItem('token', token);
  };
  const logout = () => {
    setAuthState( {isAuthenticated: false, token: null});
    sessionStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProv');
  }
  return context;
};