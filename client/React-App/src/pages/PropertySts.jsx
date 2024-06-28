import React from "react";
import PropItem from "../components/propertystsItem/PropItem";
import data_property from "../assets/data";
const PropertySts = () => {
  return (
 <div className="container m-4">
  <h2 className="mb-3"><u><b>Property Status</b></u></h2>
 <div>
  {data_property.map((pitem,j) => {
    return(
      <>
      <PropItem
      key={j}
      id={pitem.id}
      img={pitem.image}
      title={pitem.name}
      description={pitem.description}
    
      />
      </>
    )
  })}
 </div>
  </div>
  );
};

export default PropertySts;




