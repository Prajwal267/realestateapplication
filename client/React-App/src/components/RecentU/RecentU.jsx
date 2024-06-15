import React from "react";
import "./RecentU.css";
import Item from "../Item/Item";
import data_property from "../../assets/data";
import search from "../../assets/search-icon.png";
const RecentU = () => {
  let count=data_property.length;

  return (
    
    <div className="Recent">
      <div className="recent-title">
        <h1>Your Recent Uploads</h1>
        <hr />
        </div>
       <div className='search-box'>
                <input type="text" placeholder="search" />
                <img src={search} alt="" />
            </div>
        <div className="recent-item">
          {data_property.map((item, i) => {
            if(count==0)
            {
              return <h1 className="text-muted">No Result Found</h1>
              
          }else{

            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.item_price}
                viewCount={item.view}
              />
            );
          }


          })}
        </div>
      </div>
  );
};

export default RecentU;







