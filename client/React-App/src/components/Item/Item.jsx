import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item/Item";
import search from "../assets/arrow_icon.png";

const ManageProp = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/properties');
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const handleDelete = (id) => {
    setProperties(properties.filter(property => property.id !== id));
  };

  return (
    <div className="container-fluid row p-0 m-0">
      <div className="container d-flex">
        <div className="search-box ms-2 mb-4 mt-3">
          <input type="text" placeholder="search" />
          <img src={search} alt="" className="" />
        </div>
        <div className="ms-3">
          <button className="btn btn-color mt-3">ADD NEW PROPERTY</button>
        </div>
      </div>

      <div className="ms-3">
        <h4>Your Properties</h4>
      </div>

      <div className="row gx-4 mt-3">
        {properties.map((item, i) => (
          <div className="col-lg-4 col-md-6 mb-5" key={i}>
            <Item
              id={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.item_price}
              viewCount={item.view}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProp;


{
  /* <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <p>{props.description}</p>
      <div className="item-price">{props.item_price}</div>
    </div>
  */
}

{
  /*    <Card className="clm">
    <Card.Img variant="top" src={props.image} className="img-fluid"/>
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
        <p>
       {props.description}</p>
       <div> 
        <p>$ {props.price}</p>

        <Button className="me-3">Sold</Button>
        <Button>Edit</Button>
       </div>
      </Card.Text>

    </Card.Body>
  </Card>
*/
}
