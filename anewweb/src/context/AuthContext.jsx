import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user,setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
