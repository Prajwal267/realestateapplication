import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../styles/Buy.css";

const Buy = ({ setSelectedCity, setFilters }) => {
    const [bhkType, setBhkType] = useState(""); // State to hold selected BHK type
    const [propertyStatus, setPropertyStatus] = useState(""); // State to hold selected property status

    // Handler function for city change
    const handleCityChange = (event) => {
        setSelectedCity(event.target.value); // Pass selected city to parent component
    };

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

    return (
        <div className="container mt-5">
            <div className="form-row mb-3 align-items-center">
                <div className="col-md-3 mb-3">
                    <select
                        className="custom-select"
                        onChange={handleCityChange}
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
                        placeholder="Search up to 3 localities or landmarks"
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
        </div>
    );
}

export default Buy;
