import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import {  dashboard , login, signup ,forgotpassword,resetpassword, profile, contracts } from './routConst'
import DashboardLayout from '../components/DashboardLayout/DashboardLayout'
import Login from '../pages/Login/Login'
import LoginLayout from '../components/LoginLayout'
import SignUp from '../pages/SignUp/SignUp'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'
import Profile from '../pages/Profile/Profile'
import Contracts from '../pages/Contracts'

const Routing = () => {
  return (
    <>

        <Routes >
          <Route path='/' element={<LoginLayout/>}>
            <Route index element={<Login />} />
            <Route path={signup} element={<SignUp />} />
            <Route path={forgotpassword} element={<ForgotPassword />} />
            <Route path={resetpassword} element={<ResetPassword />} />
          </Route>
          <Route element={<DashboardLayout />} >
            <Route  path={dashboard} element={<Dashboard />}   />
            <Route path={profile} element={<Profile />} />
            <Route path={contracts} element={<Contracts />} />
          </Route>
        </Routes>
    </>
  )
}

export default Routing