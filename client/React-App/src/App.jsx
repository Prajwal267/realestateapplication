import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './Buyer/Home.jsx'
import ManageProp from './pages/ManageProp.jsx'
import PropertySts from './pages/PropertySts.jsx'
import Property from './pages/Property.jsx'
import LoginSignup from './pages/LoginSignup.jsx'
import Profile from './pages/Profile.jsx'
import { Slide } from './components/slide.jsx'
import Footer from './components/Foooter/Footer.jsx'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Slide/>
    <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/ManageProperty' element={<ManageProp/> } />
      <Route path='/propertyStatus' element={<PropertySts/> } />
      <Route path='/property' element={<Property/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path=':propertId' element={<Property/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    <></>
    {/* <Footer/> */}
    </BrowserRouter>
    </div>
  )
}

export default App