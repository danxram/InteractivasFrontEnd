import { useState } from 'react'
import './input.css'
import './App.css'
import './index.css'

import { Footer } from './components/ui/Footer'
import { Header } from './components/ui/Header'
import { Login } from "./components/routes/Login.jsx";
import { SignUp } from "./components/routes/SignUp.jsx";
import { CoursesMenu } from "./components/routes/CoursesMenu.jsx";
import {Navigate, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div >

    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path='/courses' element={<CoursesMenu/>} />


    </Routes>
  
    </div>
  )
}

export default App
