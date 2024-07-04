import React, { useState, useEffect } from "react";
import PropItem from "../components/PropItem";
import axios from "axios";
import search from "../assets/arrow_icon.png";

const ManageProp = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("http://localhost:5000/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const handleDelete = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  return (
    <div className="container-fluid row p-0 m-0 ">
      <div className="container d-flex ">
        <div className="search-box ms-2 mb-4 mt-3">
          <input type="text" placeholder="search" />
          <img src={search} alt="search icon" className="" />
        </div>
        <div className="ms-3">
          <button className="btn btn-color mt-3">ADD NEW PROPERTY</button>
        </div>
      </div>

      <div className="ms-3">
        <h4>Your Properties</h4>
      </div>

      <div className="row gx-4 mt-3 ">
        {properties.map((property, index) => (
          <div className="col-lg-4 col-md-6 mb-5" key={index}>
            <PropItem
              id={property.id}
              img={property.image}
              title={property.name}
              description={property.description}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProp;
