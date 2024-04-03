import { useState } from 'react'
import { Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register';
import Voting from './components/voting/Voting';
import Results from './components/results/Results';
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";

import Sample from './pages/Sample';
import ProtectedRoutes from './ProtectedRoutes';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path:"/sample",
      element:(
        <ProtectedRoutes>
          <Sample />
        </ProtectedRoutes>
      ) 
    },
    {
      path: "/voting",
      element: <Voting />
    },
    {
      path: "/result",
      element: <Results />
    },
   
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
