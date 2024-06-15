import { useContext, createContext, useState, useEffect } from "react";

interface AuthProvProps {
  children: React.ReactNode;
}
interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  userId: string | null;
}

const AuthContext = createContext<{
  authState: AuthState;
  login: (token: string, userId: string) => void;
  logout: () => void;
} | null>(null);

export const AuthProv = ({ children }: AuthProvProps) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    token: null,
    userId: null,
  });

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');
    if (token && userId) {
      setAuthState({ isAuthenticated: true, token, userId });
    };
  }, []);

  const login = (token: string, userId: string) => {
    setAuthState({ isAuthenticated: true, token, userId});
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('userId', userId);
  };
  const logout = () => {
    setAuthState( {isAuthenticated: false, token: null, userId: null});
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
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