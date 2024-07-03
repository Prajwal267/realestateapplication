import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import ManageProp from './pages/ManageProp.jsx'
import PropertySts from './pages/PropertySts.jsx'
import LoginSignup from './pages/LoginSignup.jsx'
import Profile from './pages/Profile.jsx'
import Footer from './components/Foooter/Footer.jsx'
import About from './pages/About.jsx'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
  
    <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/ManageProperty' element={<ManageProp/> } />
      <Route path='/propertyStatus' element={<PropertySts/> } />
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    <></>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
