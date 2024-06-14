import React from 'react';
import '../styles/property.css';
import propertyData from '../data/propertyData'; // Import your property data

const PropertyArea = ({ selectedCity }) => {
    // Retrieve properties based on selectedCity
    const properties = propertyData[selectedCity];

    return (
        <>
            <h2>Property List</h2>
            <div className="container mt-4">
                <div className="row gx-5 mb-5">
                    {properties.map(property => (
                        <div key={property.id} className="col-md-4 mb-2">
                            <div className="card text-bg-dark">
                                <img src={property.image} className="card-img" alt="Property" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">{property.name}</h5>
                                    <p className="card-text">{property.location}</p>
                                    <p className="card-text"><small>Last updated 3 mins ago</small></p>
                                    <button type="button" class="btn btn-primary btn-sm">Check Out</button>
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
