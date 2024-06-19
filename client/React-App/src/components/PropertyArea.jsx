import React, { useState, useEffect, forwardRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/property.css'; // Import your custom CSS file
import propertyData from '../data/propertyData'; // Adjust path as needed

const PropertyArea = forwardRef(({ selectedCity, filters, localitySearch }, ref) => {
    const properties = propertyData[selectedCity] || [];
    const [propertiesToShow, setPropertiesToShow] = useState([]);
    const [startIndex, setStartIndex] = useState(0); // Track the starting index for displaying properties
    const [selectedProperty, setSelectedProperty] = useState(null); // Track the selected property for detailed view

    // Update propertiesToShow whenever selectedCity, filters, or localitySearch change
    useEffect(() => {
        // Filter properties based on filters and localitySearch
        const filteredProperties = properties.filter(property => {
            if (filters.bhkType && filters.bhkType !== property.bhkType) return false;
            if (filters.propertyType && filters.propertyType !== property.type) return false;
            if (filters.propertyStatus && filters.propertyStatus !== property.propertyStatus) return false;
            if (localitySearch && !property.location.toLowerCase().includes(localitySearch.toLowerCase())) return false;
            if (filters.price && property.price > filters.price) return false;
            return true;
        });

        // Set properties to show based on startIndex
        setPropertiesToShow(filteredProperties.slice(startIndex, startIndex + 3));
    }, [selectedCity, filters, localitySearch, startIndex]);

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

    const handleFavoriteClick = (propertyId) => {
        // Placeholder function for handling favorite button click
        console.log(`Added property with ID ${propertyId} to favorites.`);
        // Implement your logic to manage favorites
    };

    const handleEnquiryClick = (property) => {
        setSelectedProperty(property);
    };

    const handleBackClick = () => {
        setSelectedProperty(null);
    };

    const handleContactSeller = (sellerContact) => {
        window.open(`mailto:${sellerContact}`, '_blank');
    };

    return (
        <div ref={ref}>
            <h2 className="property-list-heading">Property List</h2>
            <div className="container mt-4">
                {selectedProperty ? (
                    <div className="property-detail">
                        <button className="btn btn-back" onClick={handleBackClick}>
                            <i className="bi bi-arrow-left"></i> Back
                        </button>
                        <div className="card card-custom">
                            <img src={selectedProperty.image} className="card-img-top" alt={selectedProperty.name} />
                            <div className="card-body">
                                <h5 className="card-title">{selectedProperty.name}</h5>
                                <p className="card-text">
                                    <i className="bi bi-geo-alt" style={{ color: 'red' }}></i> {selectedProperty.location}
                                </p>
                                <p className="card-text">
                                    <i className="bi bi-house" style={{ color: 'blue' }}></i> {selectedProperty.bhkType}
                                </p>
                                <p className="card-text">
                                    <i className="bi bi-check-circle" style={{ color: 'green' }}></i> {selectedProperty.propertyStatus}
                                </p>
                                <p className="card-text">
                                    Price: ${selectedProperty.price}
                                </p>
                                <p className="card-text">
                                    <i className="bi bi-telephone" style={{ color: 'orange' }}></i> Contact: {selectedProperty.sellerName} ({selectedProperty.sellerContact})
                                </p>
                                <p className="card-text">
                                    <i className="bi bi-info-circle" style={{ color: 'purple' }}></i> {selectedProperty.description}
                                </p>
                                <button className="btn btn-primary" onClick={() => handleContactSeller(selectedProperty.sellerContact)}>
                                    Contact Seller
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row gx-4 gx-lg-5 mb-5">
                        {propertiesToShow.length > 0 ? (
                            propertiesToShow.map(property => (
                                <div key={property.id} className="col-md-4 mb-5">
                                    <div className="card card-custom">
                                        <img src={property.image} className="card-img-top" alt={property.name} />
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
                                            <p className="card-text">
                                                Price: ${property.price}
                                            </p>
                                            <button type="button" className="btn btn-enquiry" onClick={() => handleEnquiryClick(property)}>Enquiry</button>
                                            <button type="button" className="btn btn-favorite" onClick={() => handleFavoriteClick(property.id)}>
                                                <i className="bi bi-heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No properties match your criteria.</p>
                        )}
                        <div className="text-center mb-3">
                            <button className={`btn btn-custom prev-button ${startIndex === 0 ? 'disabled' : ''}`} onClick={handlePrev} disabled={startIndex === 0}>
                                <i className="bi bi-arrow-left"></i>
                            </button>
                            <button className={`btn btn-custom next-button ${startIndex + 3 >= properties.length ? 'disabled' : ''}`} onClick={handleNext} disabled={startIndex + 3 >= properties.length}>
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});

export default PropertyArea;
