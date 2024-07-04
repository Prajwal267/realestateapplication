import React, { useState } from "react";
import "../filterSearch/Filter.css";
import data from '../../assets/data.js'; // Assuming data.js is in the same directory

const Filter = () => {
  // State variables for filters
  const [location, setLocation] = useState("bangalore");
  const [locality, setLocality] = useState("madiwala");
  const [apartmentType, setApartmentType] = useState("rent");
  const [bhk, setBhk] = useState("1bhk");
  const [sortBy, setSortBy] = useState("newest");
  const [date, setDate] = useState("");

  // Function to handle form submit (for demonstration, you might handle it differently)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter data based on selected criteria
    let filteredData = data.filter((item) => {
      // Filter by location and locality
      if (location !== "city" && item.location !== location) {
        return false;
      }
      if (locality !== "locality" && item.locality !== locality) {
        return false;
      }
      // Filter by apartment type
      if (apartmentType !== "both" && item.type !== apartmentType) {
        return false;
      }
      // Filter by BHK
      if (bhk !== "any" && item.bhk !== bhk) {
        return false;
      }
      // Filter by date (if date is selected)
      if (date && item.date !== date) {
        return false;
      }
      return true;
    });

    // Sort filteredData based on sortBy criteria
    switch (sortBy) {
      case "newest":
        filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "oldest":
        filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "aToZ":
        filteredData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "zToA":
        filteredData.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    // For demonstration, log filtered and sorted data
    console.log(filteredData);
  };

  return (
    <div className="filter border p-2">
      <h3 className="ms-2 mb-3">Filter search</h3>
      <form onSubmit={handleSubmit} className="mt-3">
        <label htmlFor="Location" className="me-2">
          Location
        </label>
        <select
          id="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mb-3 me-2"
        >
          <option value="city">City</option>
          <option value="bangalore">Bangalore</option>
          <option value="mumbai">Mumbai</option>
          <option value="chennai">Chennai</option>
          <option value="tamilnadu">Tamil Nadu</option>
        </select>
        <select
          id="Locality"
          value={locality}
          onChange={(e) => setLocality(e.target.value)}
          className="mb-3 me-3"
        >
          <option value="locality">Locality</option>
          <option value="madiwala">Madiwala</option>
          <option value="jpnagar">J P Nagar</option>
          <option value="indiranagar">Indira Nagar</option>
          <option value="kormangala">Kormangala</option>
        </select>
        <label className="me-2">Apartment</label>
        <input
          type="radio"
          name="apartmentType"
          value="rent"
          checked={apartmentType === "rent"}
          onChange={() => setApartmentType("rent")}
          className="me-4 mb-4"
        />
        <label htmlFor="rent" className="me-2">
          Rent
        </label>
        <input
          type="radio"
          name="apartmentType"
          value="sell"
          checked={apartmentType === "sell"}
          onChange={() => setApartmentType("sell")}
          className="me-4 mb-4"
        />
        <label htmlFor="sell" className="me-2">
          Sell
        </label>
        <input
          type="radio"
          name="apartmentType"
          value="both"
          checked={apartmentType === "both"}
          onChange={() => setApartmentType("both")}
          className="mb-4 me-3"
        />
        <label htmlFor="both">Both</label>
        <select
          id="bhk"
          value={bhk}
          onChange={(e) => setBhk(e.target.value)}
          className="mb-3 me-3"
        >
          <option value="any">Any BHK</option>
          <option value="1bhk">1 BHK</option>
          <option value="2bhk">2 BHK</option>
          <option value="3bhk">3 BHK</option>
          <option value="4bhk">4 BHK</option>
        </select>
        <label htmlFor="sortBy" className="mb-1 me-2">
          Sort by
        </label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="mb-3 me-3"
        >
          <option value="newest">Newest to oldest</option>
          <option value="oldest">Oldest to newest</option>
          <option value="aToZ">A to Z</option>
          <option value="zToA">Z to A</option>
        </select>
        <label htmlFor="date" className="me-2">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mb-3"
        />
        <button type="submit" className="btn btn-color ms-3 mb-3">
          Apply Filters
        </button>
      </form>
    </div>
  );
};

export default Filter;
