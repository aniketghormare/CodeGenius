import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import Signup from './Signup'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<HomePage/>} />
            <Route path={'/register'} element={<Signup/>} />
            <Route path={'/login'} element={<Login/>} />
        </Routes>
      
    </div>
  )
}

export default MainRoutes
