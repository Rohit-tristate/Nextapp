"use client";
import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const [searchtext, setSearchtext] = useState("");

  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const userexist = localStorage.getItem("user");
    const userdata = JSON.parse(userexist);

    setUser(userdata);

    const adminexist = localStorage.getItem("admin");
    const admindata = JSON.parse(adminexist);

    setAdmin(admindata);
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const setAdminLogin = (data) => {
    localStorage.setItem("admin", JSON.stringify(data));
    setAdmin(data);
  };

  const logoutAdmin = () => {
    localStorage.removeItem("admin");
    setAdmin(null);
  };

  const setSearchTextValue = (text) => {
    setSearchtext(text);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        setSearchTextValue,
        setAdminLogin,
        admin,
        logoutAdmin,
        setActiveTab,
        activeTab,
        searchtext,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
