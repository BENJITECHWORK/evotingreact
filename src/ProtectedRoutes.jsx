import React from 'react'
import { Outlet, Navigate } from "react-router-dom"
import GetNameModal from './components/Modals/GetNameModal'

const ProtectedRoutes = () => {
  const token = localStorage.getItem("access_token")?localStorage.getItem("access_token"):null
  const is_eligible = localStorage.getItem("is_eligible")?localStorage.getItem("is_eligible"):false

  if (!token) {
    return <Navigate to="/" replace />;
}
  return (
    <>
        <Outlet/>
        <GetNameModal
            isOpen={!is_eligible}
            onSubmit={()=>{}}
            onClose={()=>{}}               
        />
    </>
   
  )
}

export default ProtectedRoutes