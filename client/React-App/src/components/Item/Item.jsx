import React from "react";
import "./Item.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Item = (props) => {
  return (
    <div className="card card-custom">
      <img src={props.image} className="card-img-top" alt="Property" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>

        <p className="card-text">{props.description}</p>
        <p className="card-text">${props.price}</p>
        <div className="container-fluid  row ">
          <div className=" p-0 col-8">
            <button type="button" className="btn btn-custom btn-sm me-2 mb-2">
              Edit
            </button>
            <button type="button" className="btn btn-custom btn-sm mb-2">
              View Property
            </button>
          </div>
          <div className=" d-flex p-0 col-4 pe-2 justify-content-end ">
          <i className="bi bi-eye me-1"></i>
            <p className="card-text text-muted">{props.viewCount} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

{
  /* <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <p>{props.description}</p>
      <div className="item-price">{props.item_price}</div>
    </div>*/
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
