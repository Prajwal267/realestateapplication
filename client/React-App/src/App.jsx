import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './Buyer/Home.jsx';
import ManageProp from './pages/ManageProp.jsx';
import PropertySts from './pages/PropertySts.jsx';
import Property from './pages/Property.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Profile from './pages/Profile.jsx';
import Slide from './components/slide.jsx';
import Footer from './components/Foooter/Footer.jsx';
import Buy from './BuyerPages/Buy.jsx';
import Rent from './BuyerPages/Rent.jsx'; // Import Rent component
import BuyerMenu from './components/BuyerMenu.jsx';
import { CommercialPage } from './BuyerPages/CommercialPage.jsx';

const App = () => {
  return (
    <div>
       <BrowserRouter>
        <Navbar />
        <Slide />
        <div id="buyermenu" className="container border rounded-lg p-3">
          <BuyerMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Buy" element={<Buy />} />
            <Route path="/Rent" element={<Rent />} />
            <Route path="/CommercialPage" element={<CommercialPage/>} />
          </Routes>
        </div>
        <Routes>
          <Route path="/ManageProperty" element={<ManageProp />} />
          <Route path="/propertyStatus" element={<PropertySts />} />
          <Route path="/property" element={<Property />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/:propertyId" element={<Property />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
