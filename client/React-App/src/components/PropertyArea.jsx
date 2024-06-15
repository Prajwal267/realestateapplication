import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/property.css'; 
import propertyData from '../data/propertyData';

const PropertyArea = ({ selectedCity, filters, localitySearch }) => {
    const properties = propertyData[selectedCity] || [];

    const filteredProperties = properties.filter(property => {
        let match = true;

        if (filters.bhkType && filters.bhkType !== property.bhkType) {
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

    return (
        <>
            <h2 className="property-list-heading">Property List</h2>
            <div className="container mt-4">
                <div className="row gx-4 gx-lg-5 mb-5">
                    {filteredProperties.map(property => (
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
                </div>
            </div>
        </>
    );
}

export default PropertyArea;
