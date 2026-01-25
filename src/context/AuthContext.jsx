import { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Mock authentication - replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Demo users
    if (email === "admin@avtar.com" && password === "admin") {
      setUser({
        id: "1",
        name: "Admin User",
        email: "admin@avtar.com",
        role: "admin",
      });
    } else {
      setUser({
        id: "2",
        name: email.split("@")[0],
        email,
        role: "client",
      });
    }
  };

  const register = async (name, email, _password) => {
    // Mock registration - password will be used in real implementation
    await new Promise((resolve) => setTimeout(resolve, 500));
    setUser({
      id: Date.now().toString(),
      name,
      email,
      role: "client",
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAdmin: user?.role === "admin",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
