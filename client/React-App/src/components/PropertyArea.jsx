import React, { useState, useEffect, forwardRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/property.css'; // Import your custom CSS file
import propertyData from '../data/propertyData'; // Adjust path as needed

const PropertyArea = forwardRef(({ selectedCity, filters, localitySearch }, ref) => {
    const properties = propertyData[selectedCity] || [];
    const [propertiesToShow, setPropertiesToShow] = useState([]);
    const [startIndex, setStartIndex] = useState(0); // Track the starting index for displaying properties

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

        // Set properties to show based on startIndex
        setPropertiesToShow(filteredProperties.slice(startIndex, startIndex + 3));
    }, [selectedCity, filters, localitySearch, startIndex, properties]);

    const handleNext = () => {
        if (startIndex + 3 < properties.length) {
            setStartIndex(startIndex + 3);
        }
    };

    const handlePrev = () => {
        if (startIndex - 3 >= 0) {
            setStartIndex(startIndex - 3);
        }
    };

    return (
        <div ref={ref}>
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
                                    <button type="button" className="btn btn-enquiry">Enquiry</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="text-center mb-3">
                        <button className={`btn btn-custom prev-button ${startIndex === 0 ? 'disabled' : ''}`} onClick={handlePrev} disabled={startIndex === 0}>
                            <i className="bi bi-arrow-left"></i>
                        </button>
                        <button className={`btn btn-custom next-button ${startIndex + 3 >= properties.length ? 'disabled' : ''}`} onClick={handleNext} disabled={startIndex + 3 >= properties.length}>
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
});

export default PropertyArea;
