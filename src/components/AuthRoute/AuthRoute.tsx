import { Navigate } from 'react-router-dom'
import { contextProviderProps } from '../../types'



export default function AuthRoute({ children }: contextProviderProps) {
    

    if (localStorage.getItem('token') === null) return <Navigate to="/sign-in" />

    return children;


      
}
