import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Slide from './components/slide.jsx';
import Footer from './components/Foooter/Footer.jsx';
import BuyerMenu from './components/BuyerMenu.jsx';
import Buy from './BuyerPages/Buy.jsx'; // Adjust path as per your project structure
import Rent from './BuyerPages/Rent.jsx'; // Adjust path as per your project structure
import CommercialPage from './BuyerPages/CommercialPage.jsx'; // Adjust path as per your project structure
import PropertyArea from './components/PropertyArea.jsx'; // Adjust path as per your project structure
import ManageProp from './pages/ManageProp.jsx'; // Adjust path as per your project structure
import PropertySts from './pages/PropertySts.jsx'; // Adjust path as per your project structure
import Property from './pages/Property.jsx'; // Adjust path as per your project structure
import LoginSignup from './pages/LoginSignup.jsx'; // Adjust path as per your project structure
import Profile from './pages/Profile.jsx'; // Adjust path as per your project structure

const App = () => {
    const [selectedCity, setSelectedCity] = useState("Bangalore"); // State to hold selected city
    const [filters, setFilters] = useState({}); // State to hold filters

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Slide />
                <div id="buyermenu" className="container border rounded-lg p-3">
                    <BuyerMenu />
                    <Routes>
                        <Route path="/" element={<Navigate to="/Buy" replace />} />
                        <Route path="/Buy" element={<Buy setSelectedCity={setSelectedCity} setFilters={setFilters} selectedCity={selectedCity} />} />
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
                <PropertyArea selectedCity={selectedCity} filters={filters} />
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
