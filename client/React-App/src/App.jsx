import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ManageProp from './pages/ManageProp.jsx';
import PropertySts from './pages/PropertySts.jsx';
import Property from './pages/Property.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Profile from './pages/Profile.jsx';
import Slide from './components/slide.jsx';
import Footer from './components/Foooter/Footer.jsx';
import Buy from './BuyerPages/Buy.jsx';
import Rent from './BuyerPages/Rent.jsx';
import CommercialPage from './BuyerPages/CommercialPage.jsx';
import BuyerMenu from './components/BuyerMenu.jsx';
import PropertyArea from './components/PropertyArea.jsx';
import propertyData from './data/propertyData'; 

const App = () => {
    const [selectedCity, setSelectedCity] = useState("Bangalore"); // State to hold selected city

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Slide />
                <div id="buyermenu" className="container border rounded-lg p-3">
                    <BuyerMenu />
                    <Routes>
                        <Route path="/" element={<Navigate to="/Buy" replace />} /> {/* Default redirection to Buy */}
                        <Route path="/Buy" element={<Buy setSelectedCity={setSelectedCity} />} /> {/* Pass setSelectedCity function as prop */}
                        <Route path="/Rent" element={<Rent />} />
                        <Route path="/CommercialPage" element={<CommercialPage />} />
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
                <hr id='hr1'></hr>
                <PropertyArea selectedCity={selectedCity} />
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
