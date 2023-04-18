import React, { createContext, useState } from 'react'


const Context = createContext({ isAuthenticated: false });

export const AuthContext = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [mycommunities, setMyCommunities] = useState([]);
  const [jobData, setJobData] = useState([]);

  return (
    <Context.Provider value={{isAuthenticated,setIsAuthenticated,user,setUser,mycommunities, setMyCommunities,jobData, setJobData}}>{props.children}</Context.Provider>
  )
}

export default Context