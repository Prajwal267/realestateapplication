import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Buy from './BuyerPages/Buy.jsx';
import Rent from './BuyerPages/Rent.jsx';
import PropertyArea from './components/PropertyArea.jsx';
import Seller from './pages/Seller.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Profile from './pages/Profile.jsx';
import CommercialPage from './BuyerPages/CommercialPage.jsx';
import BuyerMenu from './components/BuyerMenu.jsx';
import propertyData from './data/propertyData.js';
import CarouselComponent from './components/CarouselComponent.jsx';
import './App.css';

const App = () => {
    const [selectedCity, setSelectedCity] = useState("Bangalore");
    const [filters, setFilters] = useState({});
    const [localitySearch, setLocalitySearch] = useState("");

    const propertyAreaRef = useRef(null); // Create a ref for PropertyArea

    // Handler function for clearing filters and locality search
    const clearFilters = () => {
        setFilters({});
        setLocalitySearch("");
    };

    return (
        <div>
            <BrowserRouter>
                <Navbar propertyAreaRef={propertyAreaRef} /> {/* Pass the ref to Navbar */}
                <CarouselComponent />
                <div id="buyermenu" className="container border rounded-lg p-3">
                    <BuyerMenu />
                    <Routes>
                        <Route path="/" element={<Navigate to="/Buy" replace />} />
                        <Route path="/Buy" element={<Buy setSelectedCity={setSelectedCity} setFilters={setFilters} setLocalitySearch={setLocalitySearch} />} />
                        <Route path="/Rent" element={<Rent selectedCity={selectedCity} setSelectedCity={setSelectedCity} setFilters={setFilters} setLocalitySearch={setLocalitySearch} />} />
                        <Route path="/CommercialPage" element={<CommercialPage />} />
                    </Routes>
                </div>
                <Routes>
                    <Route path="/PropertyList" element={<PropertyArea ref={propertyAreaRef} selectedCity={selectedCity} filters={filters} localitySearch={localitySearch} />} />
                    <Route path="/Seller" element={<Seller />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<LoginSignup />} />
                </Routes>
                <PropertyArea ref={propertyAreaRef} selectedCity={selectedCity} filters={filters} localitySearch={localitySearch} />
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
