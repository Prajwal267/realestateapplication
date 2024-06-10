import React from "react";
import "./Item.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = (props) => {
  return (

    <Card className="clm">
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



);
};

export default Item;


   {/* <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <p>{props.description}</p>
      <div className="item-price">{props.item_price}</div>
    </div>*/}