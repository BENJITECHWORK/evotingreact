import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register';
import Voting from './components/voting/Voting';
import Results from './components/results/Results';
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";

import Sample from './pages/Sample';
import ProtectedRoutes from './ProtectedRoutes';
import Main from './navigation/Main';
import Auth from './navigation/Auth';

function App() {

 


  return (
    <>
  
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="*" element={<ProtectedRoutes />}>
            <Route path="vote" element={<Voting />} />
            <Route path="sample" element={<Sample />} />
            <Route path='results' element={<Results/>}/>
          </Route>
            <Route path="/vote" element={<Voting />} />
            <Route path="/sample" element={<Sample />} />
            <Route path='/results' element={<Results/>}/>
        </Routes>
   
    </>
  )
}

export default App
