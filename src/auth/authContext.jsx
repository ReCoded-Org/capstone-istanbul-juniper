import React, { useState } from "react";

export const AuthContext = React.createContext({
  user: {},
  setUser: () => {},
});

const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
