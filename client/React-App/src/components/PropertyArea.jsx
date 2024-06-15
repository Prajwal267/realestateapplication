import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/property.css';
import propertyData from '../data/propertyData'; // Adjust path as needed

const PropertyArea = ({ selectedCity, filters, localitySearch }) => {
    const properties = propertyData[selectedCity] || [];
    const [propertiesToShow, setPropertiesToShow] = useState([]);
    const [showAllProperties, setShowAllProperties] = useState(false);

    // Update propertiesToShow whenever selectedCity, filters, or localitySearch change
    useEffect(() => {
        // Filter properties based on filters and localitySearch
        let filteredProperties = properties.filter(property => {
            let match = true;

            if (filters.bhkType && filters.bhkType !== property.bhkType) {
                match = false;
            }

            if (filters.propertyType && filters.propertyType !== property.type) {
                match = false;
            }

            if (filters.propertyStatus && filters.propertyStatus !== property.propertyStatus) {
                match = false;
            }

            if (localitySearch && !property.location.toLowerCase().includes(localitySearch.toLowerCase())) {
                match = false;
            }

            return match;
        });

        // Always show at least 3 properties if filteredProperties are less than 3
        if (filteredProperties.length < 3) {
            setPropertiesToShow(filteredProperties);
        } else {
            setPropertiesToShow(showAllProperties ? filteredProperties : filteredProperties.slice(0, 3));
        }
    }, [selectedCity, filters, localitySearch, showAllProperties, properties]);

    const toggleShowAllProperties = () => {
        setShowAllProperties(!showAllProperties);
    };

    return (
        <>
            <h2 className="property-list-heading">Property List</h2>
            <div className="container mt-4">
                <div className="row gx-4 gx-lg-5 mb-5">
                    {propertiesToShow.map(property => (
                        <div key={property.id} className="col-md-4 mb-5">
                            <div className="card card-custom">
                                <img src={property.image} className="card-img-top" alt="Property" />
                                <div className="card-body">
                                    <h5 className="card-title">{property.name}</h5>
                                    <p className="card-text">
                                        <i className="bi bi-geo-alt" style={{ color: 'red' }}></i> {property.location}
                                    </p>
                                    <p className="card-text">
                                        <i className="bi bi-house" style={{ color: 'blue' }}></i> {property.bhkType}
                                    </p>
                                    <p className="card-text">
                                        <i className="bi bi-check-circle" style={{ color: 'green' }}></i> {property.propertyStatus}
                                    </p>
                                    <button type="button" className="btn btn-custom btn-sm">Enquiry</button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {properties.length > 3 && (
                        <div className="text-center mb-3">
                            {showAllProperties ? (
                                <button className="btn btn-primary" onClick={toggleShowAllProperties}>See Less</button>
                            ) : (
                                <button className="btn btn-primary" onClick={toggleShowAllProperties}>See More</button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default PropertyArea;
