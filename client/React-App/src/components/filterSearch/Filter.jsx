import React from "react";
import "../filterSearch/Filter.css";
const filter = () => {
  return (
    <div className="filter border p-2">
      <h3 className="ms-2 mb-3">Filter search</h3>
      <form action="" className="mt-3">
        <label htmlFor="" className=" me-2">
          Location
        </label>
        
        <select name="" id="Location" className="mb-3 me-2">
          <option value="bangalore" selected>
            City
          </option>
          <option value="bangalore">Bangalore</option>
          <option value="bangalore">Mumbai</option>
          <option value="bangalore">Chennai</option>
          <option value="bangalore">Tamil Nadu</option>
        </select>
        <select name="" id="Locality" className="mb-3 me-3">
          <option value="bangalore" selected>
            Locality
          </option>
          <option value="madiwala">Madiwala</option>
          <option value="JPNagar">J P Nagar</option>
          <option value="IndiraNagar">Indira Nagar</option>
          <option value="Kormangala">Kormangala</option>
        </select>
       
        <label htmlFor="" className="me-2 ">
          Apartment
        </label>
        <input type="radio" name="he" className="me-4 mb-4" />
        <label htmlFor="" className="me-2">
          Rent
        </label>
        <input type="radio" name="he" className="me-4 mb-4" />
        <label htmlFor="" className="me-2">
          Both
        </label>
        <input type="radio" name="he" className="mb-4 me-3" />
       

        <select name="" id="bhk" className="mb-3 me-3">
          <option value="bangalore">1 BHK</option>
          <option value="bangalore">2 BHK</option>
          <option value="bangalore">3 BHK</option>
          <option value="bangalore">4 BHK</option>
        </select>
        <label htmlFor="" className="mb-1 me-2">
          Sort by
        </label>
       
        <select name="" id="sortBy" className="mb-3 me-3">
          <option value="bangalore">Newest to oldest</option>
          <option value="bangalore">Oldest to Newest</option>
          <option value="bangalore">A to Z</option>
          <option value="bangalore">Z to A</option>
        </select>
        
        <label htmlFor="" className="me-2">Date</label>
         
        <input type="date" className="mb-3"/>
        <button className="btn btn-color ms-3 mb-3">Clear</button>


         
      </form>
    </div>
  );
};

export default filter;
