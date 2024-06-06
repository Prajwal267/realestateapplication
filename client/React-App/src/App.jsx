import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import ManageProp from './pages/ManageProp.jsx'
import PropertySts from './pages/PropertySts.jsx'
import Property from './pages/Property.jsx'
import LoginSignup from './pages/LoginSignup.jsx'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/ManageProperty' element={<ManageProp/> } />
      <Route path='/propertyStatus' element={<PropertySts/> } />
      <Route path='/property' element={<Property/>}/>
      <Route path=':propertId' element={<Property/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
