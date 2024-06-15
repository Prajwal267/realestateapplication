import React from "react";
import "./Item.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = (props) => {
  return (


<div className="card card-custom">
<img src={props.image} className="card-img-top" alt="Property" />
{/* <div className="premium-badge">Sale</div> */}
<div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.item_price}</p>
    <p className="card-text">{props.description}</p> {/* Display BHK type */}
    <button type="button" className="btn btn-custom btn-sm">View Property</button>
</div>
</div>

);
};

export default Item;


   {/* <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <p>{props.description}</p>
      <div className="item-price">{props.item_price}</div>
    </div>*/}


    {/*    <Card className="clm">
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
*/}