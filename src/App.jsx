import { useState } from 'react'
import './input.css'
import './App.css'
import './index.css'

import { Footer } from './components/ui/Footer'
import { Header } from './components/ui/Header'
import { Login } from "./components/routes/Login.jsx";
import { SignUp } from "./components/routes/SignUp.jsx";
import { HomePage } from "./components/routes/HomePage.jsx";
import { CoursesMenu } from "./components/routes/CoursesMenu.jsx";
import {FormsInfo} from "./components/routes/FormsInfo.jsx"
import {Navigate, Routes, Route } from "react-router-dom";
import {Statistics}from './components/routes/Statistics.jsx'
import {UserProfile}from './components/routes/UserProfile.jsx'
import { SearchResult } from './components/routes/SearchResult.jsx'
import { CourseEvents } from "./components/routes/CourseEvents.jsx";
import {Details} from "./components/routes/Details.jsx"

function App() {


  return (
    <div>

    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path='/courses' element={<CoursesMenu/>} />
      <Route path='/homePage' element={<HomePage/>} />
      <Route path='/formsInfo' element={<FormsInfo/>} />
      <Route path='/searchResult' element={<SearchResult/>} />
      <Route path="/courseEvents" element={<CourseEvents/>} />
      <Route path='/details' element={<Details/>} />
      <Route path='/userprofile' element={<UserProfile/>} />      
      <Route path='/statistics' element={<Statistics/>} />

      <Route path="/*" element={ <Navigate to="/homePage"/>} />
    </Routes>
  
    </div>
  )
}

export default App
