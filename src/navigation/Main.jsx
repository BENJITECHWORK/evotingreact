import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Voting from '../components/voting/Voting'
import Sample from '../pages/Sample'

const Main = () => {
  return (
    <Routes>
        <Route path="vote" element={<Voting />} />
        <Route path='sample' element={<Sample/>}/>
    </Routes>
  )
}

export default Main