import { createContext, useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext({})


// eslint-disable-next-line react/prop-types
export const UserProvider  = ({children}) => {
  
  const [user, setUser] = useState({
      name: "Nicolas",
      role: "user"
    });
  return (
    <userContext.Provider value={{user, setUser}}>
      {children}
    </userContext.Provider>
  )
}