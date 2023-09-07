import React from 'react'
import { useUserAuth } from '../contex/UserAuthContext'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({children}) => {
    const {user}=useUserAuth()
    if(!user){
        return <Navigate to="/login"/>
    }
  return (
    children
  )
}
