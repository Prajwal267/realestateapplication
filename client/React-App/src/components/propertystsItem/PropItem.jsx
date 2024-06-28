
import React from 'react'

const PropItem = (props) => {
  return (
    <div>
     <div className="card mb-3" >
<div className="row g-0">
  <div className="col-md-2">
    <img src={props.img} className="img-fluid rounded-start" alt="property photo" />
  </div>
  <div className="col-md-7">
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">
        {props.description}
      </p>
      <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div className=" d-flex align-items-center justify-content-center col-md-3">
    <div className="row">
      <button className="btn btn-primary m-2">Not interested</button>
      <button className="btn btn-primary m-2">View </button>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default PropItem
