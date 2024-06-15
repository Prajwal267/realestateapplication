import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../styles/Buy.css";
import propertyData from '../data/propertyData'; // Adjust path as per your project structure

const Buy = ({ setSelectedCity, setFilters, selectedCity }) => {
    const [bhkType, setBhkType] = useState(""); // State to hold selected BHK type
    const [propertyStatus, setPropertyStatus] = useState(""); // State to hold selected property status
    const [searchTerm, setSearchTerm] = useState(""); // State to hold locality search term

    // Handler function for city change
    const handleCityChange = (event) => {
        setSelectedCity(event.target.value); // Update selected city in parent component
    };

    // Handler function for BHK type change
    const handleBhkTypeChange = (event) => {
        const selectedBhkType = event.target.value;
        setBhkType(selectedBhkType); // Update local state with selected BHK type
        setFilters(prevFilters => ({ ...prevFilters, bhkType: selectedBhkType })); // Pass selected BHK type to parent component (filters)
    };

    // Handler function for Property Status change
    const handlePropertyStatusChange = (event) => {
        const selectedPropertyStatus = event.target.value;
        setPropertyStatus(selectedPropertyStatus); // Update local state with selected Property Status
        setFilters(prevFilters => ({ ...prevFilters, propertyStatus: selectedPropertyStatus })); // Pass selected Property Status to parent component (filters)
    };

    // Handler function for Locality search
    const handleLocalitySearch = (event) => {
        setSearchTerm(event.target.value); // Update local state with search term for locality
    };

    // Filter properties based on selected filters and search term
    const filteredProperties = propertyData[selectedCity]?.filter(property => {
        let match = true;
        if (bhkType && bhkType !== property.bhkType) {
            match = false;
        }
        if (propertyStatus && propertyStatus !== property.status) {
            match = false;
        }
        if (searchTerm && !property.location.toLowerCase().includes(searchTerm.toLowerCase())) {
            match = false;
        }
        return match;
    }) || [];

    return (
        <div className="container mt-5">
            {/* City and Locality Search Form */}
            <div className="form-row mb-3 align-items-center">
                <div className="col-md-3 mb-3">
                    <select
                        className="custom-select"
                        onChange={handleCityChange}
                        value={selectedCity} // Ensure selectedCity is set as the value
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
                        value={searchTerm} // Ensure searchTerm is set as the value
                        onChange={handleLocalitySearch}
                    />
                    <button className="btn btn-info ms-2" type="button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            {/* BHK Type and Property Status Selectors */}
            <div className="form-row mb-3 align-items-center">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-3">
                            <select className="custom-select" onChange={handleBhkTypeChange}>
                                <option value="">BHK Type</option>
                                <option value="1BHK">1BHK</option>
                                <option value="2BHK">2BHK</option>
                                <option value="3BHK">3BHK</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="custom-select" onChange={handlePropertyStatusChange}>
                                <option value="">Property Status</option>
                                <option value="Ready">Ready</option>
                                <option value="Underconstruction">Under Construction</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {/* Display filtered properties */}
            <div className="row mt-4">
                {filteredProperties.map(property => (
                    <div key={property.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={property.image} className="card-img-top" alt="Property" />
                            <div className="card-body">
                                <h5 className="card-title">{property.name}</h5>
                                <p className="card-text">{property.location}</p>
                                <p className="card-text">{property.bhkType}</p>
                                <p className="card-text">{property.status}</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Buy;
