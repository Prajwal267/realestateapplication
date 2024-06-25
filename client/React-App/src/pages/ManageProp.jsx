import React from "react";
import data_property from "../assets/data";
import Item from "../components/Item/Item";
import Filter from "../components/filterSearch/Filter.jsx";
import search from "../assets/arrow_icon.png";
const ManageProp = () => {
  return (
    <div className="container-fluid row p-0 m-0 ">
      <div>
        <Filter />
      </div>
      <div className="container d-flex ">
        <div className="search-box ms-2 mb-4 mt-3">
          <input type="text" placeholder="search" />
          <img src={search} alt="" className="" />
        </div>
        <div className=" ms-3">
          <button className=" btn btn-color mt-3"> ADD NEW PROPERTY</button>
        </div>
      </div>

      <div className="ms-3">
        <h4>Your Properties</h4>
      </div>

      <div className="row gx-4 mt-3 ">
        {data_property.map((item, i) => {
          return (
            <div className="col-lg-4 col-md-6 mb-5">
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.item_price}
                viewCount={item.view}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageProp;
