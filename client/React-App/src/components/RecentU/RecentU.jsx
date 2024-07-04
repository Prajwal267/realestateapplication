import React, { useState, useEffect } from "react";
import PropItem from "../components/PropItem";
import axios from "axios";
import "./RecentU.css";

const RecentU = () => {
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
    <div className="container Recent">
      <div className="recent-title">
        <h1>Your Recent Uploads</h1>
        <hr />
      </div>

      <div className="recent-item">
        {properties
          .filter((item) => item.id < 4) // Adjust condition based on your logic for recent uploads
          .map((property, index) => (
            <PropItem
              key={index}
              id={property.id}
              img={property.image}
              title={property.name}
              description={property.description}
              onDelete={handleDelete}
            />
          ))}
      </div>

      <div className="container Recent mt-5">
        <div className="recent-title">
          <h1>Most Popular</h1>
          <hr />
        </div>

        <div className="recent-item">
          {properties
            .filter((item) => item.view > 100) // Adjust condition based on your logic for popular items
            .map((property, index) => (
              <PropItem
                key={index}
                id={property.id}
                img={property.image}
                title={property.name}
                description={property.description}
                onDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecentU;
