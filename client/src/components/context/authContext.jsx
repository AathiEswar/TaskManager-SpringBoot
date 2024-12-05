import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

function AuthContextWrapper({children}) {
  const [isAuth , setIsAuth] = useState(false);

  const value = {
    isAuth,
    setIsAuth
  }

  return (
    <AuthContext.Provider value={value}>
      {
        children
      }
    </AuthContext.Provider>
  )
}

export default AuthContextWrapper
export {AuthContext , useAuth};
