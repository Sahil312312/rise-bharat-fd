import React, { createContext, useState } from 'react'


const Context = createContext({ isAuthenticated: false });

export const AuthContext = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{isAuthenticated,setIsAuthenticated,user,setUser}}>{props.children}</Context.Provider>
  )
}

export default Context