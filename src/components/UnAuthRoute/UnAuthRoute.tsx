import { Navigate } from 'react-router-dom'
import { contextProviderProps } from '../../types'



export default function UnAuthRoute({ children }: contextProviderProps) {
    if (localStorage.getItem('token') !== null) return <Navigate to="/" />

    return children;

    
      
}
