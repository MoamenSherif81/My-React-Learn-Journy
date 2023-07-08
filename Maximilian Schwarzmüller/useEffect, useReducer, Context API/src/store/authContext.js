import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("LoggedIn");
    console.log(storedIsLoggedIn);
    if (storedIsLoggedIn === "true") {
      console.log("Here");
      setIsLoggedIn(true);
    }
  }, []);

  function loginHandler() {
    localStorage.setItem("LoggedIn", true);
    setIsLoggedIn(true);
  }
  function logoutHandler() {
    localStorage.setItem("LoggedIn", false);
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
