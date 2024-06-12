import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../styles/Buy.css";

function Buy() {
    return (
        <div className="container mt-5">
                <div className="form-row mb-3 align-items-center">
                    <div className="col-md-3 mb-3">
                        <select className="custom-select">
                            <option selected>Bangalore</option>
                            <option >Mumbai</option>
                            <option >chennai</option>
                        </select>
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                        <input type="text" className="form-control mr-2" placeholder="Search up to 3 localities or landmarks" />
                        <button className="btn btn-info  ms-2" type="button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
                <div className="row mb-3 align-items-center radio-button-group">
                    <div className="col-md-2">
                        <div className="custom-control custom-radio">
                            <input type="radio" id="fullHouse" name="propertyType" className="custom-control-input" checked />
                            <label className="custom-control-label" htmlFor="fullHouse">Full House</label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="custom-control custom-radio">
                            <input type="radio" id="landPlot" name="propertyType" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="landPlot">Land/Plot</label>
                        </div>
                    </div>
                </div>
                <div className="form-row mb-3 align-items-center">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-3">
                                <select className="custom-select">
                                    <option selected>BHK Type</option>
                                    <option >1BHK</option>
                                    <option >2BHK</option>

                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="custom-select">
                                    <option selected>Property Status</option>
                                    <option >Ready</option>
                                    <option >Underconstruction</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-row mb-3 align-items-center">
                    <div className="col-md-4">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="newBuilderProjects" />
                            <label className="custom-control-label" htmlFor="newBuilderProjects">New Builder Projects</label>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default Buy;
