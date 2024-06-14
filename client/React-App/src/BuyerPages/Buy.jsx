import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../styles/Buy.css";

const Buy = ({ setSelectedCity, setFilters }) => {
    const [bhkType, setBhkType] = useState(""); // State to hold selected BHK type

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
            <div className="row mb-3 align-items-center radio-button-group">
                <div className="col-md-2">
                    <div className="custom-control custom-radio">
                        <input type="radio" id="fullHouse" name="propertyType" className="custom-control-input" defaultChecked />
                        <label className="custom-control-label" htmlFor="fullHouse">Full House</label>
                    </div>
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
                            <select className="custom-select" defaultValue="Property Status">
                                <option value="Property Status" disabled>Property Status</option>
                                <option value="Ready">Ready</option>
                                <option value="Underconstruction">Under Construction</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-row mb-3 align-items-center">
                <div className="col-md-4">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="newBuilderProjects" />
                        <label className="custom-control-label" htmlFor="newBuilderProjects">New Builder Projects</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buy;
