import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Auth = () => {
  return (
    <Routes>
        <Route  index element={<Login />} />
        <Route path='register' element={<Register />} />
    </Routes>
  )
}

export default Auth