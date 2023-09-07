import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Login } from '../components/Login'
import { Signin } from '../components/Signin'
import { ProtectedRoute } from '../components/ProtectedRoute'

export const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signin' element={<Signin/>}/>

   </Routes>
  )
}
