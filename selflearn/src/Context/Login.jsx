import { createContext, useState } from "react";

export const Log = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <Log.Provider value={{ user,setUser, login, logout }}>
      {children}
    </Log.Provider>
  );
}
