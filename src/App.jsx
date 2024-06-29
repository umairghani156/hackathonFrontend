import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import ForgetPassword from './pages/forgetpassword/ForgetPassword'
import ResetPassword from './pages/resetpassword/ResetPassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/forget_password' element={<ForgetPassword/>}/>
        <Route path='/reset_password/:id/:token' element={<ResetPassword/>}/>
      

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
