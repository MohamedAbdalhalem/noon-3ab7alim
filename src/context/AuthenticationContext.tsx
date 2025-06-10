import { createContext, useEffect, useState } from "react"
import { authContext, contextProviderProps } from "../types"
import axios from "axios"

const defaultAuthContext: authContext = {
  token: null,
  setToken: () => { },
  userId: null
}

export const AuthenticationContext = createContext<authContext>(defaultAuthContext)
export default function AuthenticationContextProvider({ children }: contextProviderProps) {
  const [token, setToken] = useState<string | null>(null)
  const [userId,setUserId] = useState<string | null>(null)
    function getUserData() {
        axios.get('https://ecommerce.routemisr.com/api/v1/auth/verifyToken', {
            headers: {
                token : token
            }
        }).then(data => {
            setUserId(data.data.decoded.id)
        })
    }
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
  }, [])
  useEffect(() => {
    if(token)
    getUserData()
  },[token])
  return (
    <AuthenticationContext.Provider value={{
      token,
      setToken,
      userId
    }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
