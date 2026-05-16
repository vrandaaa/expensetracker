import React from 'react'
import LoginSignup from './pages/Auth/LoginSignup'
import { Route,Routes } from 'react-router-dom'
import Home from './pages//Dashboard/Home'
const App = () => {
  return (
    <Routes>
      <Route  path='/' element={<div><LoginSignup/></div>}></Route>
      <Route  path='/home' element={<div><Home/></div>}></Route>
      <Route  path='*' element={<div>ERROR -404 - page not found</div>}></Route>
    </Routes>
  )
 }

export default App