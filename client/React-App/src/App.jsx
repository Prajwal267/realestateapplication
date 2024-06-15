import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Foooter/Footer.jsx';
import Buy from './BuyerPages/Buy.jsx';
import Rent from './BuyerPages/Rent.jsx'; // Import Rent component
import PropertyArea from './components/PropertyArea.jsx';
import ManageProp from './pages/ManageProp.jsx';
import PropertySts from './pages/PropertySts.jsx';
import Property from './pages/Property.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Profile from './pages/Profile.jsx';
import CommercialPage from './BuyerPages/CommercialPage.jsx';
import BuyerMenu from './components/BuyerMenu.jsx';
import propertyData from './data/propertyData.js'; // Ensure correct path to propertyData
import CarouselComponent from './components/CarouselComponent.jsx';
import './App.css';

const App = () => {
    const [selectedCity, setSelectedCity] = useState("Bangalore");
    const [filters, setFilters] = useState({});
    const [localitySearch, setLocalitySearch] = useState(""); // State to hold locality search query

    // Handler function for clearing filters and locality search
    const clearFilters = () => {
        setFilters({});
        setLocalitySearch("");
    };

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <CarouselComponent />
                <div id="buyermenu" className="container border rounded-lg p-3">
                    <BuyerMenu />
                    <Routes>
                        <Route path="/" element={<Navigate to="/Buy" replace />} />
                        <Route path="/Buy" element={<Buy setSelectedCity={setSelectedCity} setFilters={setFilters} setLocalitySearch={setLocalitySearch} />} />
                        <Route path="/Rent" element={<Rent selectedCity={selectedCity} setSelectedCity={setSelectedCity} setFilters={setFilters} setLocalitySearch={setLocalitySearch} />} /> {/* Rent component with necessary props */}
                        <Route path="/CommercialPage" element={<CommercialPage />} />
                    </Routes>
                </div>
                <Routes>
                    <Route path="/ManageProperty" element={<ManageProp />} />
                    <Route path="/propertyStatus" element={<PropertySts />} />
                    <Route path="/property" element={<Property />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<LoginSignup />} />
                </Routes>
                <hr id='hr1'></hr>
                <PropertyArea selectedCity={selectedCity} filters={filters} localitySearch={localitySearch} />
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
