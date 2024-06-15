import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Rent = () => {
  return (
    <div className="container mt-5">
      <div className="form-row mb-3 align-items-center">
        <div className="col-md-3 mb-3">
          <select className="custom-select" defaultValue="Bangalore">
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>
        <div className="col-md-7 d-flex align-items-center">
          <input type="text" className="form-control mr-2" placeholder="Search up to 3 localities or landmarks" />
          <button className="btn btn-info ms-2" type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="row mb-3 align-items-center radio-button-group">
        <div className="col-md-2">
          <div className="custom-control custom-radio">
            <input type="radio" id="fullHouse" name="propertyType" className="custom-control-input" defaultChecked />
            <label className="custom-control-label" htmlFor="fullHouse">Full House</label>
          </div>
        </div>
      </div>
      <div className="form-row mb-3 align-items-center">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-3">
              <select className="custom-select" defaultValue="BHK Type">
                <option value="BHK Type" disabled>BHK Type</option>
                <option value="1BHK">1BHK</option>
                <option value="2BHK">2BHK</option>
                <option value="2BHK">3BHK</option>

              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rent;
