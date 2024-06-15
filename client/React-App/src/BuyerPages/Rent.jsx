import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import propertyData from '../data/propertyData'; // Adjust path as needed

const Rent = ({ selectedCity, setSelectedCity, setFilters, setLocalitySearch }) => {
    const [bhkType, setBhkType] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [localitySearch, setLocalitySearchState] = useState("");

    const handleBhkTypeChange = (event) => {
        const selectedBhkType = event.target.value;
        setBhkType(selectedBhkType);
        setFilters(prevFilters => ({ ...prevFilters, bhkType: selectedBhkType }));
    };

    const handlePropertyTypeChange = (event) => {
        const selectedPropertyType = event.target.value;
        setPropertyType(selectedPropertyType);
        setFilters(prevFilters => ({ ...prevFilters, propertyType: selectedPropertyType }));
    };

    const handleLocalitySearchChange = (event) => {
        const searchQuery = event.target.value;
        setLocalitySearchState(searchQuery);
        setLocalitySearch(searchQuery);
    };

    const clearFilters = () => {
        setBhkType("");
        setPropertyType("");
        setLocalitySearchState("");
        setFilters({});
        setLocalitySearch("");
    };

    const properties = propertyData[selectedCity] || [];

    const filteredProperties = properties.filter(property => {
        let match = true;

        if (bhkType && property.bhkType !== bhkType) {
            match = false;
        }
        if (propertyType && property.type !== propertyType) {
            match = false;
        }
        if (localitySearch && !property.location.toLowerCase().includes(localitySearch.toLowerCase())) {
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
                        onChange={e => setSelectedCity(e.target.value)}
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
                            <select className="custom-select" onChange={handlePropertyTypeChange} value={propertyType}>
                                <option value="">Property Type</option>
                                <option value="Full House">Full House</option>
                                <option value="PG/Hostel">PG/Hostel</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-info mt-3" onClick={clearFilters}>Clear Filters</button>
                </div>
            </div>
        </div>
    );
};

export default Rent;
