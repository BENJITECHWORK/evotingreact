import { useState } from 'react'
import { Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import Register from './pages/Register';
import Sample from './pages/Sample';

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
    {
      path:"/sample",
      element:<Sample/>    
    }
  ]);
  
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
