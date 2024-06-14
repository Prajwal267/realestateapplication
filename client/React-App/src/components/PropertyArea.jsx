import React from 'react';
import '../styles/property.css';
import propertyData from '../data/propertyData';

const PropertyArea = ({ selectedCity, filters }) => {
    const properties = propertyData[selectedCity] || [];

    // Function to filter properties based on selected filters
    const filteredProperties = properties.filter(property => {
        let match = true;
        if (filters.propertyType && filters.propertyType !== property.type) {
            match = false;
        }
        if (filters.bhkType && filters.bhkType !== property.bhkType) {
            match = false;
        }
        if (filters.propertyStatus && filters.propertyStatus !== property.status) {
            match = false;
        }
        return match;
    });

    return (
        <>
            <h2 className="property-list-heading">Property List</h2>
            <div className="container mt-4">
                <div className="row gx-4 gx-lg-5 mb-5">
                    {filteredProperties.map(property => (
                        <div key={property.id} className="col-md-4 mb-5">
                            <div className="card card-custom">
                                <img src={property.image} className="card-img-top" alt="Property" />
                                {/* <div className="premium-badge">Sale</div> */}
                                <div className="card-body">
                                    <h5 className="card-title">{property.name}</h5>
                                    <p className="card-text">{property.location}</p>
                                    <p className="card-text">{property.bhkType}</p> {/* Display BHK type */}
                                    <button type="button" className="btn btn-custom btn-sm">View Property</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PropertyArea;
