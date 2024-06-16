import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../styles/Buy.css";
import propertyData from '../data/propertyData'; // Import property data

const Buy = ({ selectedCity, setSelectedCity, setFilters, setLocalitySearch }) => {
    const [bhkType, setBhkType] = useState(""); // State to hold selected BHK type
    const [propertyStatus, setPropertyStatus] = useState(""); // State to hold selected property status
    const [localitySearch, setLocalSearch] = useState(""); // State to hold locality search query
    const [price, setPrice] = useState(0); // State to hold selected price

    // Handler function for BHK type change
    const handleBhkTypeChange = (event) => {
        const selectedBhkType = event.target.value;
        setBhkType(selectedBhkType); // Update local state
        setFilters(prevFilters => ({ ...prevFilters, bhkType: selectedBhkType })); // Pass selected BHK type to parent component (filters)
    };

    // Handler function for Property Status change
    const handlePropertyStatusChange = (event) => {
        const selectedPropertyStatus = event.target.value;
        setPropertyStatus(selectedPropertyStatus); // Update local state
        setFilters(prevFilters => ({ ...prevFilters, propertyStatus: selectedPropertyStatus })); // Pass selected Property Status to parent component (filters)
    };

    // Handler function for Locality search change
    const handleLocalitySearchChange = (event) => {
        const searchQuery = event.target.value;
        setLocalSearch(searchQuery); // Update local state for locality search
        setLocalitySearch(searchQuery); // Pass locality search query to parent component
    };

    // Handler function for price change
    const handlePriceChange = (event) => {
        const selectedPrice = event.target.value;
        setPrice(selectedPrice); // Update local state
        setFilters(prevFilters => ({ ...prevFilters, price: selectedPrice })); // Pass selected price to parent component (filters)
    };

    // Clear all filters and reset to default state
    const clearFilters = () => {
        setBhkType("");
        setPropertyStatus("");
        setLocalSearch("");
        setPrice(0);
        setFilters({}); // Clear filters in parent component
        setLocalitySearch(""); // Clear locality search in parent component
    };

    // Get localities based on selected city from propertyData
    const properties = propertyData[selectedCity] || [];

    // Filter properties based on current filters and locality search
    const filteredProperties = properties.filter(property => {
        let match = true;

        if (bhkType && bhkType !== property.bhkType) {
            match = false;
        }

        if (propertyStatus && propertyStatus !== property.propertyStatus) {
            match = false;
        }

        if (localitySearch && !property.location.toLowerCase().includes(localitySearch.toLowerCase())) {
            match = false;
        }

        if (price && property.price > price) {
            match = false;
        }

        return match;
    });

    return (
        <div className="container mt-5">
            <div className="form-row mb-3 align-items-center">
                <div className="col-md-3 mb-3">
                    <select
                        className="custom-select"
                        value={selectedCity}
                        onChange={e => setSelectedCity(e.target.value)} // Update selected city in parent component
                    >
                        <option value="Bangalore">Bangalore</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Chennai">Chennai</option>
                    </select>
                </div>
                <div className="col-md-7 d-flex align-items-center">
                    <input
                        type="text"
                        className="form-control mr-2"
                        placeholder="Search localities"
                        value={localitySearch}
                        onChange={handleLocalitySearchChange}
                    />
                    <button className="btn btn-info ms-2" type="button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            <div className="form-row mb-3 align-items-center">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-3">
                            <select className="custom-select" onChange={handleBhkTypeChange} value={bhkType}>
                                <option value="">BHK Type</option>
                                <option value="1BHK">1BHK</option>
                                <option value="2BHK">2BHK</option>
                                <option value="3BHK">3BHK</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="custom-select" onChange={handlePropertyStatusChange} value={propertyStatus}>
                                <option value="">Property Status</option>
                                <option value="Ready">Ready</option>
                                <option value="Underconstruction">Under Construction</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                            <div className="price-range-container">
                                <input
                                    type="range"
                                    className="custom-range range-input"
                                    min="0"
                                    max="50000000"
                                    step="100000"
                                    value={price}
                                    onChange={handlePriceChange}
                                />
                                <div className="price-range-label">Price: {price}</div>
                            </div>
                        </div>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-info mt-3" onClick={clearFilters}>Clear Filters</button>
                </div>
            </div>
            {/* Display filtered localities */}
            <div className="mb-3">
                {filteredProperties.map(property => (
                    <p key={property.id}>{property.location}</p>
                ))}
            </div>
        </div>
    );
}

export default Buy;
