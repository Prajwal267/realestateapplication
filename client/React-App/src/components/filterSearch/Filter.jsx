import React from "react";
import search from "../../assets/search-icon.png";
import "../filterSearch/Filter.css";
const filter = () => {
  return (
    <div className="  filter ">
      <h3 className="ms-2 mb-3">Filter search</h3>

      <div className="search-box ms-4">
        <input type="text" placeholder="search" />
        <img src={search} alt="" />
      </div>

      <form action="" className="mt-5">
        <label htmlFor="" className="mb-1">
          Location
        </label>
        <br />
        <select name="" id="Location" className="mb-3 me-2">
          <option value="bangalore" selected>
            State
          </option>
          <option value="bangalore">Bangalore</option>
          <option value="bangalore">Mumbai</option>
          <option value="bangalore">Chennai</option>
          <option value="bangalore">Tamil Nadu</option>
        </select>
        <select name="" id="Locality" className="mb-3 ">
          <option value="bangalore" selected>
            Locality
          </option>
          <option value="madiwala">Madiwala</option>
          <option value="JPNagar">J P Nagar</option>
          <option value="IndiraNagar">Indira Nagar</option>
          <option value="Kormangala">Kormangala</option>
        </select>
        <br />
        <label htmlFor="" className="me-2">
          Apartment
        </label>
        <input type="radio" name="he" className="me-4" />
        <label htmlFor="" className="me-2">
          Rent
        </label>
        <input type="radio" name="he" className="me-4" />
        <label htmlFor="" className="me-2">
          Both
        </label>
        <input type="radio" name="he" className="mb-3" /> <br />
       

        <select name="" id="bhk" className="mb-3">
          <option value="bangalore">1 BHK</option>
          <option value="bangalore">2 BHK</option>
          <option value="bangalore">3 BHK</option>
          <option value="bangalore">4 BHK</option>
        </select><br />
        <label htmlFor="" className="mb-1">
          Sort by
        </label>
        <br />
        <select name="" id="sortBy" className="mb-3">
          <option value="bangalore">Newest to oldest</option>
          <option value="bangalore">Oldest to Newest</option>
          <option value="bangalore">A to Z</option>
          <option value="bangalore">Z to A</option>
        </select>
        <br />
        <label htmlFor="">Date</label>
        <br />
        <input type="date" />
        <br />
        <div className="d-flex  mt-5 justify-content-end">
          <button className="btn btn-color ">Clear</button>
        </div>
      </form>
    </div>
  );
};

export default filter;
