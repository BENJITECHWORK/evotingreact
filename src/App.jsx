import { useState } from 'react'
import { Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import Register from './pages/Register';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
  ]);
  
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
