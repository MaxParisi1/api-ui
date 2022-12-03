import React, { useState, useEffect, createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  isAdmin: false,
  documento: "",
  onLogout: () => {},
  onLogin: (admin, documento) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [documento, setDocumento] = useState("");

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    const storedAdminLoggedInInformation = localStorage.getItem("isAdmin");
    const storedDocumentoLoggedInInformation =
      localStorage.getItem("documento");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
      if (storedAdminLoggedInInformation === "y") {
        setIsAdmin(true);
      }
      setDocumento(storedDocumentoLoggedInInformation);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  const loginHandler = (admin, documento) => {
    localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem("documento", documento);
    admin && localStorage.setItem("isAdmin", "y");
    setIsLoggedIn(true);
    setDocumento(documento);
    setIsAdmin(admin);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isAdmin: isAdmin,
        documento: documento,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
