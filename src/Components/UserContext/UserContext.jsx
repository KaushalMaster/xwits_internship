// UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = (userData) => {
    // Perform authentication logic if needed
    // For simplicity, we'll just set the user directly
    setUser(userData);
  };

  const logoutUser = () => {
    // Perform logout logic if needed
    // For simplicity, we'll just set the user to null
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
