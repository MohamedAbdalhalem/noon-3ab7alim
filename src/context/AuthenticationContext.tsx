import { createContext, useEffect, useState } from "react"
import { authContext, contextProviderProps } from "../types"

const defaultAuthContext: authContext = {
  token: null,
  setToken: () => {}
}

export const AuthenticationContext = createContext<authContext>(defaultAuthContext)
export default function AuthenticationContextProvider({ children }: contextProviderProps) {
  const [token, setToken] = useState<string | null>(null)
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
  },[])
  return (
    <AuthenticationContext.Provider value={{
      token,
      setToken
    }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
