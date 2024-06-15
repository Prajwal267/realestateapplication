import React from "react";
import "./RecentU.css";
import Item from "../Item/Item";
import data_property from "../../assets/data";

const RecentU = () => {
  

  return (
    
    <div className=" container Recent">
      <div className="recent-title">
        <h1>Your Recent Uploads</h1>
        <hr />
        </div>

        <div className="recent-item">
          {data_property.map((item, i) => {
            let count=item.id;
            if(count<4)
            {

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

        <div className=" container Recent mt-5">
      <div className="recent-title">
        <h1>Most Popluar</h1>
        <hr />
        </div>

        <div className="recent-item">
          {data_property.map((item, i) => {
            let count=item.view;
            if(count>100 )
            {

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
        </div >
      </div>
  );
};

export default RecentU;







